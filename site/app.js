(function () {
  "use strict";

  var LETTERS = ["A", "B", "C", "D", "E"];
  var STORAGE_KEY = "grile-pediatrie-progress-v1";

  var app = document.getElementById("app");
  var globalScoreEl = document.getElementById("global-score");

  // ---------- progress storage ----------

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveProgress(p) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch (e) { /* ignore */ }
  }

  function recordAnswer(questionId, isCorrect) {
    var p = loadProgress();
    p[questionId] = isCorrect ? 1 : 0;
    saveProgress(p);
    renderGlobalScore();
  }

  function renderGlobalScore() {
    var p = loadProgress();
    var ids = Object.keys(p);
    if (!ids.length) {
      globalScoreEl.hidden = true;
      return;
    }
    var correct = ids.filter(function (k) { return p[k] === 1; }).length;
    globalScoreEl.hidden = false;
    globalScoreEl.textContent = correct + " / " + ids.length + " corecte";
  }

  function topicStats(topic) {
    var p = loadProgress();
    var answered = 0, correct = 0;
    topic.questions.forEach(function (q) {
      if (q.id in p) {
        answered++;
        if (p[q.id] === 1) correct++;
      }
    });
    return { answered: answered, correct: correct, total: topic.questions.length };
  }

  // ---------- helpers ----------

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      if (k === "class") node.className = attrs[k];
      else if (k === "html") node.innerHTML = attrs[k];
      else if (k.indexOf("on") === 0) node.addEventListener(k.slice(2), attrs[k]);
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function allQuestions() {
    var out = [];
    QUESTIONS.topics.forEach(function (t) {
      t.questions.forEach(function (q) {
        out.push(Object.assign({ topicNum: t.num, topicTitle: t.title }, q));
      });
    });
    return out;
  }

  function findTopic(num) {
    return QUESTIONS.topics.filter(function (t) { return t.num === num; })[0];
  }

  // ---------- views ----------

  function renderTopicList() {
    app.innerHTML = "";
    app.appendChild(el("p", { class: "intro" }, [
      "Alege un capitol pentru a exersa grilele aferente, sau pornește un test rapid amestecat din toate cele " +
      QUESTIONS.topics.length + " de capitole (" + allQuestions().length + " întrebări în total)."
    ]));

    app.appendChild(el("div", { class: "mode-actions" }, [
      el("button", {
        class: "btn btn-primary",
        onclick: function () { location.hash = "#/random"; }
      }, ["Test rapid (20 întrebări amestecate)"])
    ]));

    var list = el("ul", { class: "topic-list" });
    QUESTIONS.topics.forEach(function (t) {
      var stats = topicStats(t);
      var meta = el("div", { class: "topic-meta" }, [
        el("span", { class: "topic-progress" }, [stats.answered + "/" + stats.total])
      ]);
      var item = el("li", {
        class: "topic-item",
        onclick: function () { location.hash = "#/topic/" + t.num; }
      }, [
        el("span", { class: "topic-num" }, [String(t.num)]),
        el("span", { class: "topic-title" }, [t.title]),
        meta
      ]);
      list.appendChild(item);
    });
    app.appendChild(list);
  }

  function renderQuiz(questions, opts) {
    opts = opts || {};
    var backLabel = opts.backLabel || "Toate capitolele";
    var heading = opts.heading || "";
    var idx = 0;
    var score = 0;
    var answeredCurrent = false;

    function renderQuestion() {
      app.innerHTML = "";
      var q = questions[idx];

      var header = el("div", { class: "quiz-header" }, [
        el("a", { class: "back", href: "#/", onclick: function (e) {} }, ["← " + backLabel]),
        el("span", { class: "quiz-progress" }, [(idx + 1) + " / " + questions.length])
      ]);
      app.appendChild(header);

      var bar = el("div", { class: "progress-bar" }, [
        el("div", { class: "progress-bar-fill", style: "" })
      ]);
      bar.firstChild.style.width = Math.round((idx / questions.length) * 100) + "%";
      app.appendChild(bar);

      var card = el("div", { class: "question-card" });
      card.appendChild(el("div", { class: "question-topic-tag" }, [
        (heading ? heading + " · " : "") + "Tema " + q.topicNum + (q.topicTitle ? ": " + q.topicTitle : "")
      ]));
      card.appendChild(el("p", { class: "question-stem" }, [q.stem]));

      var optionsList = el("ul", { class: "options" });
      var selectedIdx = null;
      answeredCurrent = false;

      q.options.forEach(function (optText, i) {
        var optionEl = el("li", { class: "option" }, [
          el("span", { class: "option-letter" }, [LETTERS[i]]),
          el("span", {}, [optText])
        ]);
        optionEl.addEventListener("click", function () {
          if (answeredCurrent) return;
          answeredCurrent = true;
          selectedIdx = i;
          revealAnswer();
        });
        optionsList.appendChild(optionEl);
      });
      card.appendChild(optionsList);

      var explanationSlot = el("div", {});
      card.appendChild(explanationSlot);

      var nav = el("div", { class: "quiz-nav" });
      var nextBtn = el("button", {
        class: "btn btn-primary",
        disabled: "disabled",
        onclick: function () {
          if (idx + 1 < questions.length) {
            idx++;
            renderQuestion();
          } else {
            renderResults();
          }
        }
      }, [idx + 1 < questions.length ? "Următoarea întrebare →" : "Vezi rezultatul"]);
      nextBtn.disabled = true;
      nav.appendChild(nextBtn);
      card.appendChild(nav);

      app.appendChild(card);

      function revealAnswer() {
        var isCorrect = selectedIdx === q.correct;
        if (isCorrect) score++;
        recordAnswer(q.id, isCorrect);

        Array.prototype.forEach.call(optionsList.children, function (node, i) {
          node.classList.add("disabled");
          if (i === q.correct) node.classList.add("correct");
          else if (i === selectedIdx) node.classList.add("wrong");
          if (i === selectedIdx) node.classList.add("selected");
        });

        var expBox = el("div", {
          class: "explanation " + (isCorrect ? "correct" : "wrong")
        }, [
          isCorrect ? "✓ Răspuns corect" : "✗ Răspuns greșit — varianta corectă este " + LETTERS[q.correct],
          el("div", { class: "exp-text" }, [q.explanation]),
          q.source ? el("div", { class: "exp-source" }, ["Sursă: " + q.source]) : null
        ]);
        explanationSlot.appendChild(expBox);
        nextBtn.disabled = false;
      }
    }

    function renderResults() {
      app.innerHTML = "";
      var pct = Math.round((score / questions.length) * 100);
      app.appendChild(el("div", { class: "result-card" }, [
        el("p", { class: "result-score" }, [score + " / " + questions.length]),
        el("p", { class: "result-sub" }, [pct + "% răspunsuri corecte"]),
        el("button", {
          class: "btn btn-primary",
          onclick: function () { location.hash = "#/"; }
        }, ["Înapoi la capitole"])
      ]));
    }

    renderQuestion();
  }

  // ---------- router ----------

  function route() {
    var hash = location.hash || "#/";

    var topicMatch = hash.match(/^#\/topic\/(\d+)/);
    if (topicMatch) {
      var topic = findTopic(parseInt(topicMatch[1], 10));
      if (!topic) { location.hash = "#/"; return; }
      var qs = topic.questions.map(function (q) {
        return Object.assign({ topicNum: topic.num, topicTitle: topic.title }, q);
      });
      renderQuiz(qs, {});
      return;
    }

    if (hash === "#/random") {
      var pool = shuffle(allQuestions()).slice(0, 20);
      renderQuiz(pool, { heading: "Test rapid" });
      return;
    }

    renderTopicList();
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", function () {
    renderGlobalScore();
    route();
  });
})();
