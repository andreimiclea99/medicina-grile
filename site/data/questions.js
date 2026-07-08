const QUESTIONS = {
  "topics": [
    {
      "num": 1,
      "title": "Creșterea și dezvoltarea somatică. Etapele dezvoltării neuropsihice. Aprecierea dezvoltării la nivelul asistenței primare.",
      "questions": [
        {
          "id": "1-1",
          "stem": "Un nou-născut la termen are greutatea la naștere sub percentila 10 pentru vârsta gestațională și este încadrat postnatal ca fiind mic pentru vârsta gestațională (SGA). Care dintre următoarele afirmații descrie corect relația dintre SGA și retardul de creștere intrauterină (RCIU)?",
          "options": [
            "Toți nou-născuții cu RCIU sunt SGA, dar nu toți nou-născuții SGA prezintă RCIU",
            "Diagnosticul de RCIU se stabilește pe parcursul sarcinii prin ecografii fetale seriate, iar SGA se stabilește la naștere prin raportarea greutății la vârsta gestațională; nu toți nou-născuții cu RCIU sunt și SGA",
            "SGA se diagnostichează prenatal ecografic, iar RCIU se diagnostichează postnatal prin raportarea greutății la naștere",
            "SGA este sinonim cu prematuritatea, iar RCIU se aplică exclusiv nou-născuților la termen",
            "SGA și RCIU sunt entități echivalente, diagnosticate prin aceleași criterii și la același moment"
          ],
          "correct": 1,
          "explanation": "Textul precizează că diagnosticul de RCIU este elaborat pe parcursul gestației prin măsurători ecografice repetate, în timp ce SGA este depistat la naștere prin raportarea greutății la naștere la greutatea corespunzătoare vârstei gestaționale. Nou-născuții SGA pot fi și cu RCIU, dar nou-născuții cu RCIU nu sunt întotdeauna și SGA, putând fi SGA, AGA sau LGA. Deși folosite adesea ca echivalente, cele două noțiuni reprezintă entități diferite.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 1-13"
        },
        {
          "id": "1-2",
          "stem": "Un copil născut prematur, cu greutatea la naștere (GN) de 1500 g, este adus la control la vârsta corectată de 6 luni, în condiții adecvate de îngrijire. Conform ritmului de recuperare ponderală descris pentru prematuri, care este greutatea așteptată la această vârstă?",
          "options": [
            "6000 g",
            "4500 g",
            "3000 g",
            "9000 g",
            "3750 g"
          ],
          "correct": 1,
          "explanation": "Pentru prematuri, ritmul de recuperare ponderală menționat este: la 2 luni greutatea = 2 x GN, la 6 luni greutatea = 3 x GN, iar la 1 an = 6 x GN. Pentru o greutate la naștere de 1500 g, la 6 luni greutatea așteptată este 3 x 1500 g = 4500 g.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 1-13"
        },
        {
          "id": "1-3",
          "stem": "O fetiță în vârstă de 6 ani se prezintă la consult pentru apariția telarhei și a pubarhei. Cum se clasifică corect această situație clinică, conform criteriilor de vârstă prezentate?",
          "options": [
            "Dezvoltare pubertară normală pentru vârstă",
            "Pubertate precipitată",
            "Pubertate întârziată",
            "Pubertate precoce",
            "Ginecomastie"
          ],
          "correct": 3,
          "explanation": "Pubertatea precoce se definește ca apariția semnelor pubertare (telarhă, pubarhă, menarhă) înaintea vârstei de 8 ani la fetițe. La 6 ani, apariția telarhei și pubarhei se încadrează în această categorie, spre deosebire de pubertatea precipitată, care presupune instalarea caracterelor sexuale secundare după vârsta de 7 ani la fete.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 1-13"
        },
        {
          "id": "1-4",
          "stem": "O fetiță este investigată pentru statură mică asociată cu gât scurt, implantare joasă a părului și pterygium colli. Cariotipul evidențiază monosomie X (sindrom Turner). Din care categorie etiologică de hipostatură patologică face parte acest caz, conform clasificării cauzelor hipostaturii?",
          "options": [
            "Cauze endocrine",
            "Cauze nutriționale",
            "Hipostatura familială",
            "Cauze psihosociale",
            "Cauze genetice (cromozomiale)"
          ],
          "correct": 4,
          "explanation": "În clasificarea cauzelor hipostaturii, sindromul Turner este încadrat explicit la cauzele genetice cromozomiale ale hipostaturii patologice, alături de sindromul Down. Cauzele endocrine, nutriționale, familiale sau psihosociale reprezintă categorii distincte, care nu includ anomaliile cromozomiale.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 1-13"
        },
        {
          "id": "1-5",
          "stem": "Un copil cu greutatea de 15 kg, fără pierderi patologice de lichide și cu activitate fizică minimă, trebuie evaluat pentru necesarul hidric zilnic. Conform formulei de estimare a necesarului hidric pe categorii de greutate, ce cantitate de lichide este recomandată pentru 24 de ore?",
          "options": [
            "1750 ml",
            "750 ml",
            "1500 ml",
            "1000 ml",
            "1250 ml"
          ],
          "correct": 4,
          "explanation": "Pentru copiii cu greutatea între 11 și 20 kg, formula de estimare este 1000 ml + 50 ml pentru fiecare kilogram peste 10 kg. Pentru 15 kg, calculul este 1000 ml + (5 kg x 50 ml) = 1250 ml/24 ore.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 1-13"
        }
      ]
    },
    {
      "num": 2,
      "title": "Alimentația sugarului și copilului sănătos",
      "questions": [
        {
          "id": "2-1",
          "stem": "Un sugar eutrofic, fără pierderi patologice și cu activitate fizică minimă, cântărește 14 kg. Conform metodei de estimare a necesarului hidric bazal în funcție de greutatea corporală, care este cantitatea de lichide recomandată pentru 24 de ore?",
          "options": [
            "1000 ml",
            "1400 ml",
            "1200 ml",
            "1500 ml",
            "700 ml"
          ],
          "correct": 2,
          "explanation": "Pentru greutăți între 11-20 kg, necesarul hidric se calculează astfel: 1000 ml + 50 ml pentru fiecare kg peste 10 kg. Pentru 14 kg rezultă 1000 ml + 50 ml x 4 kg = 1200 ml/24h. Formula pentru 3-10 kg (100 ml/kg) sau pentru peste 20 kg (1500 ml + 20 ml/kg) nu se aplică în acest caz.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 13-31"
        },
        {
          "id": "2-2",
          "stem": "Un sugar de 2 luni, alimentat exclusiv la sân, este adus la control pentru evaluarea creșterii. Mama relatează că sugarul udă mai puțin de 4 scutece pe zi, are scaune verzui, nu se aud zgomote de deglutiție în timpul suptului, iar copilul rămâne agitat și pare flămând după alăptare. Sporul ponderal este insuficient. Care este cea mai probabilă explicație a acestui tablou?",
          "options": [
            "Intoleranță congenitală la lactoză",
            "Boală de reflux gastroesofagian necomplicată",
            "Hipogalactie maternă",
            "Alergie la proteinele laptelui de vacă transferate prin lapte matern",
            "Deficit de vitamină K la sugar"
          ],
          "correct": 2,
          "explanation": "Textul menționează explicit că hipogalactia maternă este sugerată de spor ponderal insuficient, micțiuni rare (sub 4-5 scutece ude/zi), scaune verzui de foame, absența zgomotelor de deglutiție în timpul suptului și agitația/foamea persistentă a sugarului după alăptat. Celelalte afecțiuni nu au acest tablou caracteristic descris în sursă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 13-31"
        },
        {
          "id": "2-3",
          "stem": "Un nou-născut la termen, alimentat exclusiv natural, care nu a primit profilaxie cu vitamină K la naștere, se prezintă la 10 zile de viață cu echimoze și sângerări gingivale. Care este explicația fiziopatologică principală a acestui tablou, conform particularităților metabolismului vitaminei K la nou-născut?",
          "options": [
            "Imaturitatea sintezei hepatice a albuminei serice",
            "Transferul transplacentar redus de vitamină K, asociat conținutului scăzut de vitamină K din laptele matern",
            "Deficitul de vitamină D cu afectarea secundară a sintezei hepatice a factorilor de coagulare",
            "Excesul de vitamină E cu efect antiagregant plachetar",
            "Deficitul de fier cu trombocitopenie secundară"
          ],
          "correct": 1,
          "explanation": "Textul arată că transferul transplacentar de vitamină K este mult mai redus comparativ cu al celorlalte vitamine liposolubile, ceea ce determină rezerve foarte mici la naștere, iar laptele uman conține doar aproximativ 0,3 µg/dl de vitamină K. Această combinație predispune la boala hemoragică a nou-născutului, motiv pentru care se impune administrarea profilactică de vitamină K.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 13-31"
        },
        {
          "id": "2-4",
          "stem": "Un sugar de 6 săptămâni prezintă regurgitații și vărsături postprandiale frecvente, fără scădere ponderală, fără semne de alarmă digestive sau respiratorii, fiind diagnosticat cu reflux gastroesofagian necomplicat. Care este conduita dietetică menționată în sursă pentru ameliorarea simptomatologiei, la un sugar alimentat artificial?",
          "options": [
            "Utilizarea unei formule elementale pe bază de aminoacizi",
            "Utilizarea unei formule hipercalorice de 1 kcal/ml",
            "Utilizarea unei formule de lapte îngroșate de tip AR (antireflux)",
            "Utilizarea unei formule extensiv hidrolizate (semielementale)",
            "Trecerea la o formulă delactozată pe bază de proteine din soia"
          ],
          "correct": 2,
          "explanation": "Textul precizează că formulele îngroșate de tip AR (antireflux), cu agenți de îngroșare pe bază de făină de roșcove sau amidon de porumb/orez, sunt recomandate la sugarii cu reflux gastroesofagian. Formulele delactozate, hidrolizate, elementale sau hipercalorice sunt indicate pentru alte situații clinice (intoleranță la lactoză, alergie la proteinele laptelui de vacă, malabsorbție severă, respectiv denutriție).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 13-31"
        },
        {
          "id": "2-5",
          "stem": "În cadrul consilierii unei familii privind diversificarea alimentației, referitor la momentul introducerii glutenului în dieta sugarului, care este conduita recomandată de ESPGHAN pentru reducerea riscului de boală celiacă?",
          "options": [
            "Introducerea glutenului exclusiv sub formă de cereale delactozate, după vârsta de 12 luni",
            "Introducerea glutenului cât mai precoce posibil, înainte de vârsta de 4 luni, indiferent de alimentația lactată asociată",
            "Evitarea completă a alimentelor cu gluten până la vârsta de 1 an",
            "Introducerea glutenului în cantități mici, progresiv crescânde, în fereastra de oportunitate 4-7 luni, în paralel cu alimentația la sân",
            "Introducerea glutenului doar după oprirea completă a alăptării"
          ],
          "correct": 3,
          "explanation": "Textul arată că introducerea glutenului în cantități mici, progresiv crescânde, în paralel cu alimentația la sân, în fereastra de oportunitate cuprinsă între 4 și 7 luni, poate reduce riscul de boală celiacă prin inducerea toleranței orale. Introducerea precoce (sub 4 luni) sau tardivă (peste 7 luni) a fost asociată cu reducerea acestui efect protector, crescând riscul de alergie la gluten și diabet zaharat tip 1.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 13-31"
        }
      ]
    },
    {
      "num": 3,
      "title": "Patologia neonatală: detresa respiratorie, icterele nou-născutului, encefalopatia hipoxic-ischemică perinatală, hemoragiile intracraniene, infecțiile nou-născutului, convulsiile neonatale",
      "questions": [
        {
          "id": "3-1",
          "stem": "Un nou-născut prematur cu vârstă de gestație 28 de săptămâni dezvoltă semne de detresă respiratorie la 2 ore de viață și este menținut sub CPAP nazal. Evoluția este nefavorabilă, necesitând FiO2 de 35% pentru menținerea unei saturații adecvate, în condițiile unor presiuni CPAP de 7 cmH2O. Care este conduita terapeutică indicată în acest moment?",
          "options": [
            "Administrare de corticoizi sistemici (dexametazonă) pentru accelerarea maturării pulmonare",
            "Creșterea presiunii CPAP peste 10 cmH2O, fără alte intervenții",
            "Administrare curativă de surfactant exogen",
            "Trecere directă la ventilație de înaltă frecvență, fără administrare de surfactant",
            "Continuarea CPAP cu FiO2 crescut, fără alte intervenții, până la 48 de ore de viață"
          ],
          "correct": 2,
          "explanation": "Textul precizează că surfactantul este recomandat în scop curativ la prematurii care necesită FiO2 > 30% în condiții de suport ventilator neinvaziv cu CPAP cu presiuni mai mari de 6 cmH2O. Cu cât tratamentul cu surfactant se începe mai devreme, cu atât prognosticul este mai bun. Ventilația de înaltă frecvență se rezervă cazurilor care nu răspund la ventilația convențională, nu ca primă intervenție.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 99-107"
        },
        {
          "id": "3-2",
          "stem": "Un nou-născut din mamă Rh-negativă izoimunizată prezintă la naștere semne de boală hemolitică. Bilirubina indirectă determinată din sângele din cordonul ombilical este de 4,5 mg/dl, iar hemoglobina din cordon este de 11 g/dl. Care este conduita terapeutică indicată în primele 12 ore de viață?",
          "options": [
            "Administrare de fenobarbital ca unică măsură terapeutică",
            "Administrare de imunoglobulină i.v. ca tratament de primă linie, fără alte investigații",
            "Fototerapie simplă și reevaluare la 24 de ore, fără alte măsuri",
            "Exsanguinotransfuzie",
            "Temporizare fără tratament, cu control al bilirubinei la 72 de ore"
          ],
          "correct": 3,
          "explanation": "Exsanguinotransfuzia este metoda de elecție în formele moderate/severe de boală hemolitică, fiind indicată în primele 12 ore atunci când bilirubina indirectă din cordonul ombilical este peste 4 mg/dl sau crește cu 0,5-1 mg/h, sau dacă hemoglobina din cordon este sub 12 g/dl. Fototerapia și fenobarbitalul nu sunt suficiente în aceste forme, iar imunoglobulina i.v. are utilitate controversată și nu este tratamentul de primă linie.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 124-129"
        },
        {
          "id": "3-3",
          "stem": "Un nou-născut la termen cu antecedente de asfixie perinatală severă prezintă în primele ore de viață letargie, hipotonie și reflexe arhaice diminuate, tablou compatibil cu encefalopatie hipoxic-ischemică de formă moderată. Care este conduita terapeutică specifică, standard, recomandată în acest caz?",
          "options": [
            "Inițierea hipotermiei terapeutice în primele 6 ore de viață, cu răcire până la 33,5-34,5°C, timp de 72 de ore",
            "Administrare de bicarbonat de sodiu i.v. pentru corectarea acidozei, ca măsură de primă linie",
            "Administrare profilactică de manitol pentru reducerea presiunii intracraniene, la toți pacienții",
            "Restricție hidrică severă, sub 40 ml/kg/zi, indiferent de statusul volemic",
            "Temporizarea oricărui tratament până la apariția convulsiilor clinice"
          ],
          "correct": 0,
          "explanation": "Hipotermia terapeutică a devenit standard terapeutic în formele moderate și severe de encefalopatie hipoxic-ischemică; pentru a fi eficientă, trebuie inițiată în primele 6 ore de la naștere, cu răcire până la 33,5-34,5°C timp de 72 de ore, urmată de reîncălzire treptată. Administrarea de bicarbonat de sodiu nu este recomandată, iar depletivele pentru reducerea presiunii intracraniene rămân controversate.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 124-129"
        },
        {
          "id": "3-4",
          "stem": "Un nou-născut este investigat pentru suspiciune de toxoplasmoză congenitală, mama având seroconversie documentată în cursul sarcinii. Care rezultat serologic, obținut la momentele indicate, confirmă diagnosticul de infecție congenitală la nou-născut?",
          "options": [
            "Test Coombs direct pozitiv la naștere",
            "IgG și IgM pozitive la vârsta de 5 zile, cu IgA pozitiv la 10 zile",
            "IgG pozitiv izolat în prima zi de viață, indiferent de valoarea IgM",
            "Persistența IgG specific la vârsta de 2 luni, fără alte determinări",
            "IDR la toxoplasmină pozitivă în primele 24 de ore de viață"
          ],
          "correct": 1,
          "explanation": "Diagnosticul de toxoplasmoză congenitală se confirmă la nou-născutul cu IgG și IgM pozitive la vârsta de 5 zile și IgA pozitiv la 10 zile, deoarece IgM și IgA nu traversează placenta și sunt sintetizate de nou-născut. IgG izolat, mai ales în primele zile, poate fi de origine maternă transplacentară și nu este suficient pentru diagnostic; persistența IgG dincolo de 1 an este standardul de diagnostic la sugar/copil, nu la 2 luni.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 124-129"
        },
        {
          "id": "3-5",
          "stem": "La un nou-născut prematur cu vârstă de gestație 27 de săptămâni, ecografia transfontanelară efectuată la 6 zile de viață evidențiază hemoragie intraventriculară care ocupă peste 50% din aria ventriculară pe secțiune parasagitală, cu dilatație a ventriculului lateral. Cum se clasifică această hemoragie conform sistemului ecografic Volpe?",
          "options": [
            "Gradul 2",
            "Infarct hemoragic periventricular izolat, fără hemoragie intraventriculară",
            "Hemoragie la nivelul matricei germinale, fără extensie intraventriculară",
            "Gradul 1",
            "Gradul 3"
          ],
          "correct": 4,
          "explanation": "Conform clasificării ecografice Volpe, gradul 3 corespunde unei hemoragii intraventriculare care depășește 50% din aria ventriculară pe secțiune parasagitală, situație în care apare de obicei și dilatație a ventriculului lateral. Gradul 1 corespunde hemoragiei la nivelul matricei germinale cu extensie ventriculară minimă (sub 10%), iar gradul 2 corespunde unei extinderi de 10-50%.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 218-228"
        }
      ]
    },
    {
      "num": 4,
      "title": "Embriopatii, fetopatii: TORCH, sifilis congenital",
      "questions": [
        {
          "id": "4-1",
          "stem": "Un nou-născut la termen, din mamă cu toxoplasmoză gestațională confirmată prin seroconversie, este testat serologic seriat pentru toxoplasmoza congenitală. Care dintre următoarele constatări confirmă diagnosticul de toxoplasmoză congenitală la acest nou-născut?",
          "options": [
            "Test Coombs indirect pozitiv la nou-născut",
            "Persistența titrului de IgG specific peste vârsta de 1 an",
            "IDR la toxoplasmină pozitivă în primele zile de viață",
            "Titru de anticorpi anti-Toxoplasma IgG >4 UI la naștere, în absența altor teste",
            "IgG și IgM pozitive la vârsta de 5 zile, cu IgA pozitiv la vârsta de 10 zile"
          ],
          "correct": 4,
          "explanation": "IgM și IgA nu traversează placenta și sunt sintetizate de nou-născut, astfel încât pozitivarea lor (IgG+IgM la 5 zile, IgA la 10 zile) confirmă infecția congenitală. IgG izolat la naștere poate proveni prin transfer transplacentar matern. Persistența IgG după vârsta de 1 an este standardul de diagnostic la sugar/copil mic, nu la nou-născut.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 129-135"
        },
        {
          "id": "4-2",
          "stem": "Nou-născut la termen, din mamă cu rubeolă clinic confirmată în săptămâna 8 de sarcină, prezintă la examinare cataractă bilaterală, surditate senzorială și persistență de canal arterial. Ce explică apariția acestor leziuni permanente, ireversibile?",
          "options": [
            "Leziunile sunt determinate de transmiterea virusului în timpul expulziei, prin contact cu secrețiile cervicale materne",
            "Infecția maternă s-a produs în primele 16 săptămâni de sarcină, interval asociat cu manifestările permanente ale rubeolei congenitale",
            "Infecția maternă s-a produs în trimestrul al III-lea de sarcină, când transmiterea transplacentară este maximă",
            "Leziunile sunt secundare unei reinfecții materne ulterioare cu virus rubeolic",
            "Leziunile reprezintă manifestări tranzitorii care se remit spontan în primele luni de viață"
          ],
          "correct": 1,
          "explanation": "Manifestările permanente ale rubeolei congenitale (leziuni oculare, neurologice, malformații cardiace precum persistența de canal arterial) sunt de regulă rezultatul infecției materne survenite în primele 16 săptămâni de sarcină. Infecția tardivă se asociază mai degrabă cu manifestări tranzitorii, care se remit spontan.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 129-135"
        },
        {
          "id": "4-3",
          "stem": "Nou-născut simptomatic cu infecție congenitală cu citomegalovirus (microcefalie, calcificări periventriculare, corioretinită) este propus pentru tratament curativ antiviral. Care este conduita terapeutică corectă și principalul risc ce impune supraveghere pe durata tratamentului?",
          "options": [
            "Aciclovir intravenos timp de minimum 14 zile, cu monitorizarea funcției renale",
            "Imunoglobulină specifică anti-CMV intravenos, cu monitorizarea funcției hepatice",
            "Penicilină G intravenos timp de 10-14 zile, cu monitorizarea reacției Jarisch-Herxheimer",
            "Valganciclovir oral sau ganciclovir intravenos timp de șase luni, cu monitorizare hematologică pentru neutropenie",
            "Pirimetamină, sulfadiazină și acid folinic timp de un an, cu monitorizarea hemogramei pentru toxicitate medulară"
          ],
          "correct": 3,
          "explanation": "Valganciclovir/ganciclovir se utilizează numai la nou-născuții simptomatici, timp de șase luni, cu ameliorarea sechelelor auditive și neurologice, dar cu efecte adverse hematologice importante (neutropenie, mai ales la administrarea i.v.) și citoliză hepatică, ce impun monitorizare. Imunoglobulina specifică anti-CMV nu s-a dovedit utilă în tratamentul infecției.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 129-135"
        },
        {
          "id": "4-4",
          "stem": "Un nou-născut de 3 săptămâni dezvoltă convulsii focale, letargie și fontanelă anterioară bombată; leziunile cutanate lipsesc. PCR din LCR este pozitiv pentru virusul herpes simplex și se inițiază aciclovir intravenos. După 21 de zile de tratament, PCR din LCR rămâne pozitiv. Care este conduita terapeutică corectă în continuare?",
          "options": [
            "Se asociază imunoglobulină intravenoasă la aciclovir, pentru a scurta durata tratamentului",
            "Se întrerupe aciclovirul intravenos și se inițiază pirimetamină, sulfadiazină și acid folinic",
            "Se schimbă tratamentul cu ganciclovir intravenos, aciclovirul fiind ineficient în formele cu PCR persistent pozitiv",
            "Se continuă aciclovirul intravenos până la 28 de zile, apoi se trece la aciclovir oral timp de șase luni, cu monitorizarea neutrofilelor",
            "Se oprește aciclovirul, deoarece durata standard de tratament pentru afectarea SNC este de 21 de zile"
          ],
          "correct": 3,
          "explanation": "Pentru formele cu afectare SNC sau diseminate, dacă PCR din LCR rămâne pozitiv la 21 de zile de tratament, aciclovirul intravenos se continuă până la 28 de zile, apoi se trece la aciclovir oral timp de șase luni, cu monitorizarea periodică a neutrofilelor. Absența leziunilor cutanate apare la 30-40% dintre cazurile cu afectare SNC, fără a schimba această conduită.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 129-135"
        },
        {
          "id": "4-5",
          "stem": "Un nou-născut cu hepatosplenomegalie, icter cu bilirubină directă crescută și osteocondrită luetică este investigat pentru suspiciune de sifilis congenital; mama are teste serologice pozitive pentru lues. După inițierea tratamentului cu penicilină G, care test serologic este util pentru monitorizarea răspunsului terapeutic?",
          "options": [
            "Testul treponemic (TPHA), deoarece are sensibilitate și specificitate superioare",
            "IgM specific pentru Treponema pallidum, test comercializat pe scară largă în acest scop",
            "Reacția de polimerizare în lanț (PCR) repetată lunar din sânge periferic",
            "Testul Sabin-Feldman, standardul de aur pentru monitorizarea infecțiilor treponemice",
            "Testele nontreponemice (VDRL/RPR), deoarece titrul acestora scade semnificativ după tratamentul corect"
          ],
          "correct": 4,
          "explanation": "Testele nontreponemice (VDRL, RPR) sunt folosite pentru monitorizarea răspunsului la tratament, deoarece un tratament corect duce la scăderea semnificativă a titrului. TPHA rămâne pozitiv toată viața odată produsă infecția, fiind practic inutil pentru monitorizare, iar IgM specific pentru TP nu este încă comercializat.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 129-135"
        }
      ]
    },
    {
      "num": 5,
      "title": "Falimentul creșterii. Malnutriția protein-energetică și proteică",
      "questions": [
        {
          "id": "5-1",
          "stem": "Sugar în vârstă de 10 luni este adus pentru scădere ponderală marcată și continuă. Examenul clinic evidențiază topirea maselor musculare și dispariția completă a țesutului adipos subcutanat, inclusiv a bulei adipoase Bichat, facies triunghiular „de bătrân” cu fruntea încrețită și privirea vie, piele uscată și încrețită, fără edeme. Indicele nutrițional (Waterlow) este de 65%, iar perimetrul brahial este de 108 mm. Care este diagnosticul cel mai probabil?",
          "options": [
            "Marasm (malnutriție acută severă)",
            "Malnutriție cronică de gradul 1 (ușoară)",
            "Kwashiorkor marasmic",
            "Kwashiorkor",
            "Malnutriție edematoasă moderată"
          ],
          "correct": 0,
          "explanation": "Absența edemelor, emacierea generalizată cu dispariția țesutului adipos (inclusiv bula Bichat), facies „de bătrân” și indicele nutrițional Waterlow sub 70% (cu perimetru brahial sub 115 mm) definesc marasmul, formă de malnutriție acută severă în care predomină deficitul energetic. Prezența edemelor ar orienta spre kwashiorkor, iar asocierea edemelor cu emaciere ar sugera forma marasmic-kwashiorkor.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 378-391"
        },
        {
          "id": "5-2",
          "stem": "Copil de 18 luni, recent înțărcat, cu dietă bogată în hidrați de carbon și săracă în proteine, se prezintă cu edeme simetrice moi (cu godeu) la nivelul membrelor inferioare și periorbitar, obrajii rotunzi („facies în lună plină”), țesut adipos subcutanat relativ păstrat, abdomen destins, hepatomegalie prin steatoză, păr uscat și depigmentat. Care este diagnosticul cel mai probabil?",
          "options": [
            "Malnutriție cronică ușoară",
            "Rahitism carențial",
            "Deshidratare hipertonă",
            "Kwashiorkor",
            "Marasm"
          ],
          "correct": 3,
          "explanation": "Kwashiorkorul apare tipic la copilul de 1-2 ani, în perioada înțărcării, prin aport insuficient de proteine în condițiile unei diete bogate în glucide; se caracterizează prin edeme (trăsătura principală), conservarea relativă a țesutului adipos („facies în lună plină”), hepatomegalie prin steatoză și modificări ale părului. Indiferent de indicii antropometrici, prezența edemelor face ca malnutriția să fie considerată severă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 378-391"
        },
        {
          "id": "5-3",
          "stem": "Un copil internat este evaluat cu scorul STRONGkids pentru riscul de subnutriție, obținând un total de 4 puncte (din maximum 5). Conform recomandărilor de interpretare a scorului, care este conduita indicată?",
          "options": [
            "Doar reevaluarea scorului la o săptămână",
            "Externare cu monitorizare ambulatorie, fără evaluare suplimentară",
            "Cântărire de 2 ori pe săptămână, fără intervenție dietetică",
            "Consult de specialitate (medic, nutriționist) și plan de nutriție specializat, individualizat",
            "Consult de specialitate și intervenție dietetică minimă, fără plan individualizat"
          ],
          "correct": 3,
          "explanation": "Un scor STRONGkids de 4-5 puncte corespunde categoriei de risc crescut, pentru care este recomandat consult de specialitate (medic, nutriționist) și elaborarea unui plan de nutriție specializat și individualizat. Scorul 0 corespunde riscului absent/scăzut (fără intervenție dietetică), iar scorul 1-3 riscului mediu (consult și intervenție dietetică).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 378-391"
        },
        {
          "id": "5-4",
          "stem": "La un sugar cu malnutriție severă, aflat în primele zile de renutriție cu ritm prea rapid de realimentare, apare sindromul de realimentare (refeeding syndrome). Care este anomalia electrolitică descrisă ca semnul cardinal al acestui sindrom, implicată în apariția aritmiilor cardiace și a insuficienței cardiace?",
          "options": [
            "Hipernatremia",
            "Hipomagneziemia",
            "Hipopotasemia",
            "Hipofosfatemia",
            "Hipocalcemia"
          ],
          "correct": 3,
          "explanation": "Textul precizează explicit că hipofosfatemia este semnul cardinal al sindromului de realimentare, afectând aproape toate procesele celulare și contribuind la disritmii cardiace și insuficiență cardiacă/miocardică. Hipopotasemia și hipomagneziemia apar de asemenea în acest sindrom, dar nu sunt descrise drept semnul cardinal.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 378-391"
        },
        {
          "id": "5-5",
          "stem": "La un copil cu malnutriție proteino-energetică severă la care este dificil de diferențiat clinic deshidratarea de șocul septic (semnele clasice de deshidratare fiind alterate de modificările cutaneo-adipoase), care dintre următoarele semne este considerat caracteristic pentru deshidratare și, conform textului, nu apare în șocul septic?",
          "options": [
            "Pulsul radial slab sau absent",
            "Hipotermia",
            "Ochii înfundați în orbite, cearcănele periorbitare și fontanela anterioară deprimată",
            "Oliguria",
            "Extremitățile reci"
          ],
          "correct": 2,
          "explanation": "Textul menționează explicit că ochii înfundați în orbite, cearcănele periorbitare și fontanela anterioară deprimată sunt caracteristice pentru deshidratare și nu apar în sepsis. În schimb, hipotermia este considerată semn de infecție gravă/șoc septic și nu semn de deshidratare, iar pulsul radial slab/absent, extremitățile reci și oliguria sunt semne comune ambelor entități.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 378-391"
        }
      ]
    },
    {
      "num": 6,
      "title": "Obezitatea",
      "questions": [
        {
          "id": "6-1",
          "stem": "Un copil de 8 ani este adus la un consult pediatric de rutină. Calculul indicelui de masă corporală (IMC) îl plasează la percentila 97 pentru vârstă și sex. Conform criteriilor CDC 2000, cum se încadrează acest copil?",
          "options": [
            "Normoponderal",
            "Obezitate extremă/morbidă",
            "Obezitate",
            "Nu poate fi încadrat fără determinarea circumferinței abdominale",
            "Suprapondere"
          ],
          "correct": 2,
          "explanation": "Conform criteriilor CDC 2000 pentru copiii cu vârsta 2-19 ani, suprapondera este definită prin IMC între percentila 85 și percentila 95, iar obezitatea prin IMC peste percentila 95 (DS=1,64). Obezitatea extremă/morbidă necesită un IMC peste percentila 99. Un IMC la percentila 97 se încadrează, deci, în categoria obezitate, dar nu în cea extremă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 392-400"
        },
        {
          "id": "6-2",
          "stem": "Un băiat de 3 ani este evaluat pentru exces ponderal important, instalat de la vârsta de sugar. La examenul clinic se constată statură mică (sub percentila 5), iar la anamneză se remarcă întârziere în dezvoltarea neuropsihică. Vârsta osoasă este inferioară vârstei cronologice. Care este cea mai probabilă interpretare a acestui tablou clinic?",
          "options": [
            "Obezitate idiopatică (exogenă), formă comună la copilul mic",
            "Obezitate secundară, de cauză endocrină sau genetică",
            "Variantă normală de creștere, fără semnificație patologică",
            "Malnutriție cronică supraadăugată unei alimentații hipercalorice",
            "Tulburare de comportament alimentar de tip hiperfagic izolat"
          ],
          "correct": 1,
          "explanation": "Textul precizează criteriile de diferențiere a obezității primare de cea secundară: debutul la sugarul mic, statura mică (sub percentila 5) și întârzierea în dezvoltarea neuropsihică sunt caracteristice obezității secundare, spre deosebire de obezitatea idiopatică, în care debutul este de obicei la 4-6 ani, statura este înaltă și intelectul este normal. Vârsta osoasă inferioară celei cronologice susține de asemenea această orientare diagnostică.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 392-400"
        },
        {
          "id": "6-3",
          "stem": "Un copil obez în vârstă de 11 ani are circumferința abdominală peste percentila 90 pentru vârstă și sex, tensiune arterială peste percentila 95 și HDL-colesterol de 35 mg/dL. Conform criteriilor International Diabetes Federation citate în text, care este diagnosticul cel mai probabil?",
          "options": [
            "Steatohepatită non-alcoolică (NAFLD)",
            "Diabet zaharat de tip 2, fără investigații suplimentare necesare",
            "Dislipidemie izolată, fără altă semnificație",
            "Hipertensiune arterială secundară obezității, fără alte implicații metabolice",
            "Sindrom metabolic"
          ],
          "correct": 4,
          "explanation": "Definiția IDF a sindromului metabolic la copilul peste 6 ani presupune circumferință abdominală peste percentila 90 asociată cu cel puțin două dintre criteriile: HTA, HDL-colesterol scăzut sub 40 mg/dL sau trigliceride crescute, respectiv alterarea metabolismului glucidic. Acest pacient întrunește circumferința abdominală crescută plus două criterii (HTA și HDL scăzut), încadrându-se astfel în sindromul metabolic.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 392-400"
        },
        {
          "id": "6-4",
          "stem": "Un adolescent obez, asimptomatic, prezintă la evaluarea de rutină o valoare a transaminazei TGP (ALT) de peste două ori limita superioară a normalului, confirmată persistent la reevaluarea după 3 luni. Care este conduita corectă conform textului?",
          "options": [
            "Ecografia abdominală este suficientă pentru stabilirea diagnosticului de certitudine de NAFLD",
            "Se investighează suplimentar, atât pentru excluderea altor cauze de hepatită, cât și pentru confirmarea NAFLD",
            "Se inițiază tratament hepatoprotector empiric, fără investigații suplimentare",
            "Se recomandă biopsie hepatică de primă intenție, înaintea oricărei alte investigații",
            "Se consideră valoarea explicată în totalitate de obezitate și nu se recomandă investigații suplimentare"
          ],
          "correct": 1,
          "explanation": "Textul precizează că, la orice copil cu valoare a ALT de cel puțin două ori mai mare decât limita superioară a normalului și cu creștere persistentă peste 3 luni, este necesară investigarea suplimentară pentru excluderea altor cauze de hepatită și pentru confirmarea NAFLD, deoarece doar prezența obezității nu explică acest diagnostic. Ecografia abdominală nu este recomandată ca metodă de screening sau pentru diagnosticul de certitudine.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 392-400"
        },
        {
          "id": "6-5",
          "stem": "Un adolescent de 17 ani, cu IMC de 42 kg/m² s.c., prezintă sindrom de apnee în somn sever și hipertensiune arterială, în ciuda unui program susținut de dietă și activitate fizică. Care este conduita terapeutică adecvată în această situație, conform textului?",
          "options": [
            "Tratament chirurgical bariatric, indiferent de vârstă, având în vedere severitatea complicațiilor",
            "Tratament de primă intenție cu fluoxetină pentru reducerea apetitului",
            "Tratament chirurgical (chirurgie bariatrică)",
            "Tratament cu gastrofibran, ca metodă de creștere a senzației de sațietate",
            "Continuarea exclusivă a regimului dietetic hipocaloric, fără altă intervenție"
          ],
          "correct": 2,
          "explanation": "Conform textului, chirurgia bariatrică este indicată doar după vârsta de 16 ani, la pacienții cu IMC peste 40 kg/m² s.c. și care asociază complicații severe precum apneea în somn sau hipertensiunea arterială. Acest adolescent îndeplinește ambele criterii de vârstă și IMC, precum și prezența complicațiilor severe, ceea ce justifică opțiunea chirurgicală.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 392-400"
        }
      ]
    },
    {
      "num": 7,
      "title": "Febra la copil",
      "questions": [
        {
          "id": "7-1",
          "stem": "Un sugar febril, anterior sănătos, are un aspect clinic bun la examinare. Conform criteriilor de risc scăzut pentru infecție bacteriană severă citate în text (după Huppler și Jaskiewicz), care dintre următoarele asocieri de date clinico-biologice încadrează sugarul în categoria de risc scăzut, permițând evitarea spitalizării și a antibioterapiei inutile?",
          "options": [
            "Leucocite peste 20.000/mm3, cu deviere marcată la stânga, și sediment urinar cu peste 20 leucocite/câmp",
            "Leucocite 5.000-15.000/mm3, cu forme tinere sub 1.500/mm3, și examen de urină cu sub 10 leucocite/câmp",
            "Leucocite sub 5.000/mm3, cu neutropenie marcată, și urocultură pozitivă",
            "Leucocite normale, dar cu redoarea cefei și bombarea fontanelei",
            "Leucocite normale, dar cu peteșii cutanate difuze și letargie"
          ],
          "correct": 1,
          "explanation": "Textul precizează criteriile de risc scăzut: copilul arată bine, este anterior sănătos, are un număr de leucocite de 5.000-15.000/mm3 cu forme tinere sub 1.500/mm3, examen de urină sub 10 leucocite/câmp și, în caz de diaree, sub 5 leucocite pe frotiul din scaun. Celelalte variante descriu date sugestive pentru infecție severă (leucocitoză marcată, neutropenie, peteșii cu letargie, semne meningiene), incompatibile cu încadrarea în risc scăzut.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 772-783"
        },
        {
          "id": "7-2",
          "stem": "Un nou-născut de 3 săptămâni se prezintă cu febră rectală de 38,3°C, fără alte semne clinice evidente la examinare. Conform orientării practice pe grupe de vârstă descrise în text, care este conduita corectă?",
          "options": [
            "Tratament antipiretic la domiciliu și control clinic peste 48 de ore dacă febra persistă",
            "Externare cu antibioterapie orală empirică, fără investigații suplimentare",
            "Administrare de ibuprofen și reevaluare peste 24 de ore",
            "Internare în spital, investigații vizând etiologia septică și instituirea antibioterapiei empirice",
            "Observație la domiciliu, fără tratament, dacă starea generală este bună"
          ],
          "correct": 3,
          "explanation": "Pentru grupa de vârstă 0-1 lună, textul precizează că \"conduita corectă implică internarea în spital, în baza datelor clinice, investigații vizând etiologia septică și instituirea tratamentului cu antibiotice (denumit empiric, în lipsa argumentelor bacteriologice)\". Tratamentul ambulatoriu sau antipiretic simplu nu este adecvat la această vârstă, iar ibuprofenul nu este recomandat sub 3 luni.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 772-783"
        },
        {
          "id": "7-3",
          "stem": "Un copil de 18 luni prezintă un episod unic de convulsie febrilă, revine rapid la starea de conștiență normală și, la examenul clinic ulterior, nu prezintă redoarea cefei, bombarea fontanelei, stare toxică sau letargie. Este indicată efectuarea puncției lombare?",
          "options": [
            "Da, deoarece absența semnelor meningiene la copilul mic impune totuși PL de rutină",
            "Da, dar numai la copiii cu vârsta peste 5 ani",
            "Nu, un singur episod de convulsie febrilă, fără stare toxică sau letargie asociată, nu reprezintă o indicație pentru puncție lombară",
            "Nu, puncția lombară este contraindicată la toți copiii cu convulsii febrile",
            "Da, orice convulsie febrilă impune puncție lombară, indiferent de evoluția clinică ulterioară"
          ],
          "correct": 2,
          "explanation": "Textul precizează explicit: \"Un singur episod de convulsie febrilă nu este o indicație pentru PL și nu este caracteristic pentru meningită ca singur simptom.\" Totodată, semnele specifice (redoarea cefei, bombarea fontanelei) pot lipsi la copilul mic, iar starea toxică și letargia asociate convulsiei febrile indică PL chiar în absența semnelor meningiene - situație care nu este prezentă în acest caz.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 772-783"
        },
        {
          "id": "7-4",
          "stem": "La un copil febril se constată bradicardie relativă, discordantă față de nivelul febrei. Conform textului, acest semn este considerat un indicator de gravitate mai ales pentru care dintre următoarele afecțiuni?",
          "options": [
            "Infecția de tract urinar",
            "Faringoamigdalita streptococică",
            "Gastroenterita acută",
            "Boala Lyme",
            "Otita medie acută"
          ],
          "correct": 3,
          "explanation": "Textul afirmă: \"Bradicardia febrilă este un semn de gravitate în miocardită, endocardită infecțioasă, reumatism articular acut și boala Lyme.\" Celelalte afecțiuni enumerate (otită, gastroenterită, infecție urinară, faringoamigdalită) sunt descrise în text prin alte caracteristici clinice, fără asocierea cu bradicardia febrilă ca semn de alarmă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 772-783"
        },
        {
          "id": "7-5",
          "stem": "Un copil de 4 ani prezintă episoade recurente, la interval de aproximativ 4-6 săptămâni, de febră ridicată însoțită de stomatită aftoasă, faringită și adenită cervicală, cu durata episoadelor de 4-5 zile și remisie completă a simptomelor între episoade. Care este diagnosticul cel mai probabil, conform textului?",
          "options": [
            "Sindromul PFAPA (febră periodică, stomatită aftoasă, faringită, adenopatie)",
            "Artrita juvenilă idiopatică cu debut sistemic",
            "Sindromul hiperimunoglobulinemiei D",
            "Febra familială mediteraneeană",
            "Neutropenia ciclică"
          ],
          "correct": 0,
          "explanation": "Textul descrie PFAPA drept \"o afecțiune rară, manifestată prin episoade periodice de febră ridicată, însoțite de stomatită aftoasă, faringită și adenită cervicală\", cu simptome apărând la 4-6 săptămâni, durând 4-5 zile și remisie completă între episoade - exact tabloul din vinietă. Celelalte sindroame febrile periodice menționate în text au tablouri clinice diferite (dureri abdominale/pleurale/articulare în FMF, artrită și rash în ARJ sistemică, vărsături/diaree în HIDS, neutropenie documentată în neutropenia ciclică).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 772-783"
        }
      ]
    },
    {
      "num": 8,
      "title": "Rinoadenoidita acută. Amigdalita acută. Faringita acută. Stomatitele și cheilitele. Otita medie acută. Mastoidita",
      "questions": [
        {
          "id": "8-1",
          "stem": "Sugar în vârstă de 7 luni, cu rinofaringită acută necomplicată, aflat în a treia zi de evoluție, prezintă rinoree mucopurulentă, tuse și febră moderată, dar stare generală bună. Care este conduita terapeutică corectă?",
          "options": [
            "Corticoterapie topică nazală asociată cu antihistaminice orale pentru reducerea rinoreei",
            "Antibioterapie orală cu amoxicilină, pentru a preveni suprainfecția bacteriană sugerată de aspectul purulent al secrețiilor",
            "Instilații nazale cu nafazolină, decongestionant vasoconstrictor, de mai multe ori pe zi",
            "Tratament exclusiv simptomatic și de susținere: dezobstrucție rinofaringiană, hidratare corespunzătoare, antipiretice la nevoie, fără antibiotice",
            "Spitalizare sistematică pentru monitorizarea evoluției, indiferent de starea generală"
          ],
          "correct": 3,
          "explanation": "Rinofaringita acută necomplicată este de etiologie virală, iar aspectul purulent al secreției nazale nu semnifică prin el însuși o suprainfecție bacteriană; antibioterapia nu scurtează evoluția și nu previne complicațiile. Tratamentul este exclusiv simptomatic (dezobstrucție, hidratare, antipiretice); soluțiile uleioase, corticoizii și antihistaminicele topice sunt ineficace sau dăunătoare, iar nafazolina este formal contraindicată sub vârsta de 6 ani.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 443-459"
        },
        {
          "id": "8-2",
          "stem": "Un copil de 8 ani este diagnosticat cu faringită acută cu streptococ beta-hemolitic grup A, confirmată prin test rapid de detecție antigenică, și primește tratament corect cu penicilină. Care este principalul beneficiu demonstrat al antibioterapiei corect administrate în această situație?",
          "options": [
            "Reduce contagiozitatea pacientului chiar din prima oră de la administrare, indiferent de durata tratamentului",
            "Este utilă exclusiv pentru ameliorarea simptomelor, fără impact dovedit asupra complicațiilor bolii",
            "Scurtează cu cel puțin o săptămână durata febrei, indiferent de momentul inițierii tratamentului",
            "Sterilizează infecția faringiană streptococică și reduce dramatic complicațiile supurative locale, precum și bolile poststreptococice la distanță (reumatismul articular acut, glomerulonefrita)",
            "Elimină definitiv riscul de recidivă a faringitei acute la acest copil"
          ],
          "correct": 3,
          "explanation": "Tratamentul corect al faringitelor streptococice a condus la scăderea dramatică a complicațiilor locale (limfadenită, abces periamigdalian, otită, sinuzită) și a bolilor poststreptococice la distanță (RAA, glomerulonefrită), acesta fiind scopul principal al antibioterapiei, alături de sterilizarea infecției faringiene bacteriene. Pacienții devin necontagioși abia după 24-48 de ore de tratament antibiotic adecvat, iar recidivele rămân posibile.",
          "source": "Ciofu - Tratat de Pediatrie ed. 4, pag. 202-203"
        },
        {
          "id": "8-3",
          "stem": "Sugar de 10 luni, fără antecedente de otită medie acută, fără tratament antibiotic în ultimele 30 de zile și fără alergie cunoscută la peniciline, este diagnosticat prin otoscopie cu OMA supurată bilaterală (congestie, bombare și pierderea transparenței timpanului). Care este antibioticul de primă linie și doza recomandată?",
          "options": [
            "Amoxicilină-clavulanat de la debut, indiferent de istoricul terapeutic al copilului",
            "Observare 48-72 de ore fără antibiotic, cu reevaluare ulterioară",
            "Azitromicină, 10 mg/kg/zi, doză unică zilnică, timp de 5 zile, ca primă opțiune",
            "Cefuroxim axetil, 30 mg/kg/zi, ca terapie de primă intenție",
            "Amoxicilină, 90 mg/kg/zi, divizată în 2 prize la 12 ore, timp de 10 zile"
          ],
          "correct": 4,
          "explanation": "Copiii cu vârsta între 6 luni și 2 ani, cu OMA uni- sau bilaterală, trebuie tratați imediat cu antibiotic, pe baza criteriilor otoscopice de congestie, bombare și pierdere a transparenței timpanului. La un copil fără risc crescut de rezistență (fără beta-lactamice recente, fără conjunctivită purulentă concomitentă, fără OMA recurentă), amoxicilina 90 mg/kg/zi în 2 prize rămâne antibioticul de primă linie, cu durată de 10 zile la copiii sub 2 ani.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 443-459"
        },
        {
          "id": "8-4",
          "stem": "Sugar de 11 luni, eutrofic, anterior sănătos, dezvoltă brusc febră înaltă cu aspect septic, stare toxică și agitație extremă; la examenul local se constată tumefacție retroauriculară cu caracter inflamator, expresie a unui abces subperiostal. Care este diagnosticul cel mai probabil?",
          "options": [
            "Adenită cervicală supurată simplă, fără afectare otomastoidiană",
            "Otomastoidită latentă (formă cronică), caracteristică sugarului distrofic",
            "Parotidită epidemică urliană",
            "Otomastoidită acută, prin exteriorizarea unui abces mastoidian subperiostal",
            "Celulită periauriculară secundară unei otite externe necomplicate"
          ],
          "correct": 3,
          "explanation": "Otomastoidita acută apare tipic la sugarul mare, cu stare de nutriție bună, manifestându-se prin febră de tip septic, stare toxico-septică și agitație extremă, cu tumefacție retroauriculară inflamatorie dată de abcesul mastoidian subperiostal, care se poate exterioriza spontan sau necesită drenaj chirurgical. Aceasta se deosebește de forma latentă (cronică), întâlnită la sugarul distrofic, cu evoluție torpidă și tablou dominat de manifestări generale (curbă ponderală staționară, paloare, toleranță digestivă redusă).",
          "source": "Ciofu - Tratat de Pediatrie ed. 4, pag. 202-203"
        },
        {
          "id": "8-5",
          "stem": "Băiat de 3 ani prezintă, de la vârsta de 18 luni, episoade recurente de febră înaltă (40°C), la interval de aproximativ 4 săptămâni, cu durata de 3-6 zile, însoțite de faringită și adenopatie cervicală, în absența unei infecții respiratorii superioare; între episoade copilul este complet asimptomatic, cu creștere și dezvoltare normale. Care este diagnosticul cel mai probabil și tratamentul cu cea mai bună eficiență dovedită în prevenția pe termen lung a recurențelor?",
          "options": [
            "Agranulocitoză; antibioterapie susținută și terapie de substituție",
            "Sindrom Stevens-Johnson; sistarea medicației incriminate",
            "Sindrom PFAPA; amigdalectomia (asociată sau nu cu adenoidectomia) este cea mai eficientă terapie pentru prevenția de durată",
            "Febră mediteraneană familială; colchicina este tratamentul de elecție pentru acest tablou clinic",
            "Neutropenie ciclică idiopatică; monitorizare hematologică, fără tratament specific disponibil"
          ],
          "correct": 2,
          "explanation": "Tabloul clinic (episoade recurente de febră înaltă la interval de 3-8 săptămâni, durata 3-6 zile, cu minim unul dintre semnele stomatită aftoasă, faringită sau adenopatie cervicală, debut înaintea vârstei de 5 ani, stare normală între episoade) corespunde sindromului PFAPA. Deși corticoterapia precoce cu o doză unică de prednison sau betametazonă induce frecvent remisia rapidă a febrei, amigdalectomia s-a dovedit cea mai benefică terapie în prevenția de durată a sindromului, net superioară cimetidinei, colchicinei, vitaminei D sau anakinrei.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 441-443"
        }
      ]
    },
    {
      "num": 9,
      "title": "Crupul. Laringotraheobronșita acută. Bronșiolita acută",
      "questions": [
        {
          "id": "9-1",
          "stem": "Un copil de 2 ani cu crup viral prezintă la examenul clinic: cianoză prezentă în repaus, stridor audibil în repaus, tiraj sever, murmur vezicular mult diminuat și stare de conștiență abolită. Cum se încadrează acest pacient conform scorului Westley și ce implicație are această încadrare?",
          "options": [
            "Crup sever (scor ≥8) – necesită spitalizare, dar nu monitorizare continuă",
            "Crup moderat (scor 3-7) – se recomandă corticoterapie orală în doză unică, fără spitalizare",
            "Iminență de stop respirator (scor ≥12) – necesită monitorizare permanentă și intervenție terapeutică imediată",
            "Crup ușor (scor <2) – se recomandă doar aer umidificat și hidratare orală",
            "Scorul Westley nu poate fi calculat fără determinarea gazelor sanguine"
          ],
          "correct": 2,
          "explanation": "Însumând punctajele (cianoză în repaus = 5, stridor în repaus = 2, tiraj sever = 3, murmur vezicular mult diminuat = 2, stare de conștiență abolită = 5) rezultă un scor de 17, mult peste pragul de 12, care semnifică iminență de stop respirator. Textul precizează că această categorie este semnalată tocmai de alterarea stării de conștiență, tirajul marcant, diminuarea/abolirea murmurului vezicular, tahicardie și cianoză, impunând monitorizare permanentă a acestor parametri.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 312-316"
        },
        {
          "id": "9-2",
          "stem": "Un copil de 3 ani, cu schemă de vaccinare incompletă (fără vaccinare anti-Haemophilus influenzae tip b), dezvoltă brusc, în plină stare de sănătate și fără prodrom viral, febră înaltă, stare toxică, sialoree, disfagie și voce înăbușită. Adoptă spontan poziția șezândă, aplecat ușor înainte, cu gâtul în hiperextensie. Care este diagnosticul cel mai probabil?",
          "options": [
            "Epiglotita acută",
            "Traheita bacteriană",
            "Corp străin laringian aspirat",
            "Crup spasmodic (laringita spasmodică)",
            "Crup viral (laringotraheită acută)"
          ],
          "correct": 0,
          "explanation": "Absența prodromului viral, debutul brusc cu febră înaltă, stare toxică, sialoree, disfagie și poziția caracteristică (aplecat înainte, cu gâtul în hiperextensie, pentru a îndepărta epiglota de calea aeriană) sunt tipice epiglotitei acute. Textul menționează că afecțiunea apare mai ales la copii de 2-4 ani neimunizați contra Haemophilus influenzae tip b, spre deosebire de crupul viral, care are prodrom viral și evoluție progresivă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 489-493"
        },
        {
          "id": "9-3",
          "stem": "Un copil cu tablou inițial sugestiv de crup viral primește tratament corect cu corticoterapie sistemică și adrenalină în nebulizare. Evoluția este însă nefavorabilă: febra rămâne înaltă, starea generală se alterează progresiv (aspect toxic), iar răspunsul la aerosolii de adrenalină este incomplet și de scurtă durată, cu ameliorări parțiale ce necesită administrări repetate. Pacientul nu prezintă sialoree și poate fi culcat pentru examinare. Care este diagnosticul cel mai probabil și conduita corectă?",
          "options": [
            "Crup viral sever – se continuă adrenalina în nebulizare la interval fix de 6 ore",
            "Traheită bacteriană – se impune intubare, bronhoscopie cu recoltare de culturi și antibioterapie parenterală",
            "Crup spasmodic recurent – tratamentul constă doar în liniștirea pacientului și aer umidificat",
            "Epiglotită acută – se impune intubare imediată fără alte investigații",
            "Abces retrofaringian – se practică drenaj chirurgical de urgență"
          ],
          "correct": 1,
          "explanation": "Semnul de alarmă pentru traheita bacteriană este lipsa de răspuns sau chiar agravarea sub un tratament anticrup corect și complet, cu răspuns incomplet și tranzitoriu la aerosolii de adrenalină. Tabloul este de severitate intermediară între crupul viral și epiglotită (febră, stare toxică), dar fără sialoree și fără poziție de trepied. Atitudinea corectă este intubarea, bronhoscopia cu obținerea de culturi și antibioterapie parenterală.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 489-493"
        },
        {
          "id": "9-4",
          "stem": "Un sugar de 8 luni, anterior sănătos, se prezintă cu primul episod de bronșiolită acută, formă ușoară-moderată, fără factori de risc (nu este fost prematur, nu are displazie bronhopulmonară, malformații sau imunodeficiențe) și provine dintr-o familie competentă. Conform ultimului consens de tratament citat în text, care este conduita terapeutică recomandată?",
          "options": [
            "Aerosoli de rutină cu salbutamol, indiferent de răspunsul clinic",
            "Antibioterapie cu spectru larg pentru prevenirea suprainfecției bacteriene",
            "Doar măsuri suportive (dezobstrucție nazală, hidratare, monitorizare clinică), fără aerosoli de rutină",
            "Ribavirin în doze standard, administrat de rutină tuturor sugarilor",
            "Corticoterapie sistemică asociată cu adrenalină în nebulizare, administrate la intervale fixe"
          ],
          "correct": 2,
          "explanation": "Consensul AAP din 2014 nu mai recomandă aerosoli de rutină nici cu salbutamol, nici cu adrenalină, iar corticoizii și ribavirinul rămân contraindicați de rutină. Pentru un sugar la primul episod, formă ușoară-moderată, fără factori de risc și cu familie competentă, textul precizează explicit că nu se recomandă niciun fel de aerosoli de rutină, ci doar măsuri suportive.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 489-493"
        },
        {
          "id": "9-5",
          "stem": "Un sugar de 6 săptămâni cu bronșiolită acută prezintă frecvență respiratorie de 75/min, SpO2 = 88% în aer atmosferic și alterarea stării generale, cu letargie. Care este conduita corectă?",
          "options": [
            "Externare cu monitorizare la domiciliu și control peste 48 de ore",
            "Antibioterapie empirică pentru suspiciunea de suprainfecție bacteriană",
            "Internare, ținând cont de vârsta sub 3 luni, polipneea peste 70/min, hipoxemia (SpO2<90%) și alterarea stării generale",
            "Administrare de aerosoli cu salbutamol la domiciliu, cu revenire la control dacă nu se ameliorează",
            "Corticoterapie orală și reevaluare peste 24 de ore, fără alte măsuri"
          ],
          "correct": 2,
          "explanation": "Printre criteriile de internare menționate sunt vârsta sub 3 luni, dispneea cu polipnee peste 70/min, hipoxemia/cianoza și alterarea stării generale sau a conștienței. Oxigenul este obligatoriu la SpO2 sub 90%. Toate aceste criterii sunt îndeplinite la acest pacient, ceea ce impune spitalizarea.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 489-493"
        }
      ]
    },
    {
      "num": 10,
      "title": "Insuficiența respiratorie acută",
      "questions": [
        {
          "id": "10-1",
          "stem": "Un copil de 8 ani este adus la UPU după ingestia accidentală a unei substanțe ce conține cianuri. Gazometria arterială arată PaO2 normal, iar hemoglobina este normală, dar pacientul prezintă semne clinice de hipoxie tisulară severă. Care este mecanismul fiziopatologic principal al insuficienței respiratorii acute în acest caz?",
          "options": [
            "Anomalie de utilizare periferică a oxigenului, prin blocarea enzimelor mitocondriale (hipoxemie histotoxică)",
            "Anomalie de transport al oxigenului, prin capacitate redusă de legare a hemoglobinei",
            "Anomalie de perfuzie pulmonară, prin șunt dreapta-stânga",
            "Anomalie de schimb gazos la nivelul barierei alveolo-capilare",
            "Anomalie de pompă respiratorie, prin deprimarea centrilor respiratori bulbo-pontini"
          ],
          "correct": 0,
          "explanation": "Textul clasifică intoxicația cu cianuri sub mecanismul de „alterare a mecanismelor ATP-dependente”, adică incapacitatea celulei de a utiliza oxigenul la nivel periferic, prin blocarea enzimelor mitocondriale (hipoxemie histotoxică). În acest mecanism, transportul și schimbul gazos rămân normale (PaO2 și Hb normale), spre deosebire de anomaliile de pompă, schimb sau transport al oxigenului.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 588-592"
        },
        {
          "id": "10-2",
          "stem": "Un sugar de 4 luni cu bronșiolită acută prezintă tahipnee marcată, agitație intensă, „foame de aer”, paloare și transpirații, fără somnolență. Gazometria arată hipoxemie cu PaCO2 normal-scăzut. Care este tipul de insuficiență respiratorie acută cel mai probabil prezent la acest pacient?",
          "options": [
            "IRA tip 2, cu hipercapnie, prin epuizare musculară respiratorie",
            "IRA prin anomalie de pompă respiratorie de cauză neurologică",
            "IRA prin anomalie de transport al oxigenului",
            "IRA tip 1, cu hipoxemie, prin mecanism de neconcordanță ventilație-perfuzie",
            "IRA cronică acutizată, de tip restrictiv"
          ],
          "correct": 3,
          "explanation": "IRA de tip 1 se caracterizează prin hipoxemie cu CO2 normal sau scăzut, produsă prin neconcordanță ventilație-perfuzie (V/Q mismatch), iar clinic se manifestă prin agitație marcată, „foame de aer”, paloare și transpirații. IRA de tip 2, cu hipercapnie, se manifestă în schimb prin somnolență („narcoză hipercapnică”), tablou absent la acest pacient.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 588-592"
        },
        {
          "id": "10-3",
          "stem": "Un copil cu insuficiență respiratorie acută severă, tahipneic și agitat, devine brusc „liniștit” și mai puțin activ, deși pulsoximetria arată în continuare o saturație scăzută. Care este interpretarea corectă a acestei modificări clinice?",
          "options": [
            "Indică hipoglicemie asociată și necesită doar administrare de glucoză",
            "Poate indica retenție progresivă de CO2, sugerând nevoia de suport ventilator invaziv",
            "Semnifică ameliorarea clinică și scăderea necesarului de oxigen",
            "Este un fenomen normal de adaptare la efortul respirator prelungit și nu necesită intervenție",
            "Este expresia unei desaturări artefactuale prin malpoziționarea senzorului de pulsoximetrie"
          ],
          "correct": 1,
          "explanation": "Textul avertizează explicit că un pacient cu IRA care rămâne desaturat și se „liniștește” inexplicabil ar putea avea nevoie de suport ventilator invaziv, deoarece retenția de CO2 este responsabilă de această „sedare” progresivă. Acest semn nu trebuie interpretat drept ameliorare, ci ca un semnal de alarmă pentru epuizare respiratorie iminentă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 588-592"
        },
        {
          "id": "10-4",
          "stem": "Din punct de vedere biochimic, care dintre următoarele seturi de valori definește insuficiența respiratorie acută (IRA) la copil?",
          "options": [
            "SpO2 sub 95% în aer ambiental, indiferent de valorile gazometrice",
            "PaO2 sub 70 mmHg și SpO2 sub 90%",
            "PaO2 sub 50 mmHg și PaCO2 peste 60 mmHg, obligatoriu concomitent",
            "PaO2 sub 60 mmHg și/sau PaCO2 peste 50 mmHg",
            "PaO2 sub 80 mmHg și/sau PaCO2 peste 45 mmHg"
          ],
          "correct": 3,
          "explanation": "Textul definește IRA biochimic drept scăderea PaO2 sub 60 mmHg, creșterea PaCO2 peste 50 mmHg, sau ambele modificări concomitent - nu este necesară prezența simultană obligatorie a ambelor criterii.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 588-592"
        },
        {
          "id": "10-5",
          "stem": "Un copil este adus la UPU cu cianoză generalizată cu tentă cenușie, „ca ardezia”, după ingestia accidentală a unei substanțe conservante alimentare. Sângele recoltat pentru micrometoda Astrup are aspect brun-ciocolatiu, iar pulsoximetrul indică o saturație de aproximativ 80%. Care este cauza cea mai probabilă a acestui tablou clinic?",
          "options": [
            "Intoxicație cu nitriți, cu methemoglobinemie",
            "Malpoziționare a senzorului de pulsoximetrie",
            "Intoxicație cu cianuri, cu blocarea respirației celulare",
            "Intoxicație cu monoxid de carbon, cu carboxihemoglobină crescută",
            "Șoc hipovolemic sever cu hipoperfuzie periferică"
          ],
          "correct": 0,
          "explanation": "Textul descrie exact acest tablou pentru intoxicația cu nitriți: cianoză cu tentă cenușie „ca ardezia”, sânge brun-ciocolatiu la Astrup și saturație fals scăzută în jur de 80% la pulsoximetrie, din cauza methemoglobinei circulante. În contrast, intoxicația cu monoxid de carbon se caracterizează prin absența cianozei și saturații pulsoximetrice fals normale.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 588-592"
        }
      ]
    },
    {
      "num": 11,
      "title": "Pneumonia acută comunitară. Supurația pulmonară. Pleurezia. Pneumotoracele",
      "questions": [
        {
          "id": "11-1",
          "stem": "Un copil de 18 luni este adus pentru febră moderată (38°C), rinoree și tuse cu debut progresiv, de 4 zile. La auscultație se decelează wheezing bilateral, fără semne de hipoxemie. Leucocitele sunt 8200/µL, VSH 12 mm/h, iar PCR 1,1 mg/dL. Care este diagnosticul cel mai probabil?",
          "options": [
            "Pneumonie cu Staphylococcus aureus",
            "Pneumonie bacteriană cu Streptococcus pneumoniae",
            "Tuberculoză pulmonară",
            "Pneumonie de aspirație",
            "Pneumonie virală"
          ],
          "correct": 4,
          "explanation": "Conform tabelului de diferențiere pneumonie virală versus bacteriană (Ruuskanen et al., 2011), debutul lent, febra mică, rinita prezentă, wheezingul frecvent, leucocitele <10000/µL, VSH <20 mm/h și PCR <2 mg/dL pledează pentru etiologie virală. De asemenea, prezența wheezingului este sugestivă pentru pneumonia virală sau cu bacterii atipice, mai ales în absența febrei înalte sau a hipoxemiei.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 339-346"
        },
        {
          "id": "11-2",
          "stem": "Un copil de 2 ani, anterior sănătos, este diagnosticat cu pneumonie cu consolidare pulmonară pe radiografia toracică, formă ușoară/medie. Nu prezintă vărsături persistente, refuzul lichidelor per os, convulsii sau letargie și acceptă alimentația. Care este antibioticul de primă linie recomandat, în condiții de ambulatoriu?",
          "options": [
            "Ceftriaxonă intravenos",
            "Azitromicină per os",
            "Amoxicilină-clavulanat per os",
            "Vancomicină intravenos",
            "Amoxicilină per os, 80-100 mg/kg/zi"
          ],
          "correct": 4,
          "explanation": "Amoxicilina per os în doză de 80-100 mg/kg/zi este eficientă în terapia pneumoniei la copilul cu vârsta de 6 luni-5 ani, fără semne de alertă (refuzul lichidelor, vărsături persistente, deshidratare, convulsii, letargie), fiind prima linie de tratament ambulatoriu. Amoxicilina-clavulanat este alternativă, iar azitromicina este indicată dacă nu se poate exclude etiologia atipică sau la copilul peste 5 ani; ceftriaxona și vancomicina sunt rezervate formelor severe, spitalizate.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 339-346"
        },
        {
          "id": "11-3",
          "stem": "Un copil de 3 ani prezintă tuse productivă de 6 săptămâni, fără hipocratism digital, fără deformări ale cutiei toracice, cu creștere și dezvoltare normale și fără alte manifestări sugestive pentru altă boală cauzatoare de tuse cronică productivă. Radiografia toracică este normală. Tusea se remite complet după 2 săptămâni de amoxicilină-clavulanat oral, fără a se fi putut obține o cultură bacteriană din spută. Care este diagnosticul cel mai probabil?",
          "options": [
            "Bronșectazie",
            "Astm bronșic",
            "Boală pulmonară supurativă cronică",
            "Bronșită bacteriană prelungită (formă clinică)",
            "Fibroză chistică"
          ],
          "correct": 3,
          "explanation": "Cazul îndeplinește criteriile de BBP clinică: tuse cronică productivă peste 4 săptămâni, absența unor elemente sugestive pentru altă boală și rezoluția tusei după 2 săptămâni de antibioterapie orală, criteriul microbiologic fiind înlocuit de cel clinic. Bronșectazia și boala pulmonară supurativă cronică presupun lipsă de răspuns sau modificări imagistice persistente, iar astmul bronșic se manifestă tipic prin tuse uscată, nu productivă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 356-363"
        },
        {
          "id": "11-4",
          "stem": "Un copil de 5 ani cu pneumonie prezintă la ecografia toracică un revărsat pleural care ocupă peste jumătate din hemitorace, asociat cu detresă respiratorie marcată și stare generală toxică. Conform algoritmului terapeutic pentru pleurezia parapneumonică, care este conduita indicată?",
          "options": [
            "Antibioterapie sistemică asociată cu puncție pleurală, fără drenaj",
            "Monitorizare clinică, fără modificarea antibioterapiei",
            "Toracotomie deschisă cu decorticare, ca primă intenție",
            "Antibioterapie sistemică, fără puncție sau drenaj pleural",
            "Drenaj pleural continuu"
          ],
          "correct": 4,
          "explanation": "Un revărsat mare (peste 1/2 din torace) impune drenaj pleural continuu, indicație susținută și de prezența detresei respiratorii și a stării toxice/sepsis. Toracotomia deschisă cu decorticare este rezervată stadiului de organizare sau eșecului altor metode, nu conduitei inițiale.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 348-354"
        },
        {
          "id": "11-5",
          "stem": "Un adolescent de 15 ani este adus la camera de gardă după un accident rutier, cu polipnee și tahicardie rapid progresive, hipotensiune arterială, cianoză și devierea traheii spre partea contralaterală leziunii; murmurul vezicular este abolit pe hemitoracele afectat. Care este conduita imediată?",
          "options": [
            "Tomografie computerizată toracică pentru confirmarea diagnosticului",
            "Radiografie toracică de urgență, urmată de toracocenteză dacă se confirmă diagnosticul",
            "Oxigenoterapie cu debit mare și reevaluare clinică la 24 de ore",
            "Toracocenteză sau toracostomie de urgență, fără a aștepta radiografia toracică",
            "Antibioterapie intravenoasă cu spectru larg"
          ],
          "correct": 3,
          "explanation": "Tabloul clinic (deviere mediastinală, instabilitate hemodinamică, abolirea murmurului vezicular) este caracteristic pneumotoracelui sub tensiune, o urgență medicală majoră. Radiografia toracică nu este indicată în această situație, deoarece întârzie intervenția terapeutică; conduita corectă este toracocenteza sau toracostomia imediată.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 364-366"
        }
      ]
    },
    {
      "num": 12,
      "title": "Principiile de diagnostic și tratament ale bolii atopice. Astmul bronșic. Alergiile alimentare. Dermatita atopică. Urticaria și angioedemul",
      "questions": [
        {
          "id": "12-1",
          "stem": "Un copil de 2 ani prezintă în ultimul an patru episoade de wheezing, cu durată de minimum o zi și afectarea somnului. Mama copilului are astm bronșic diagnosticat, iar copilul nu are alte manifestări atopice. Conform scorului API (Asthma Predictive Index), care este interpretarea corectă a asocierii acestor elemente?",
          "options": [
            "Diagnosticul de astm este exclus la vârsta de 2 ani, API aplicându-se doar copiilor peste 3 ani",
            "Diagnosticul de astm nu poate fi formulat decât dacă se asociază și hipereozinofilie peste 4%, indiferent de antecedentele familiale",
            "Diagnosticul de astm este exclus, deoarece API necesită obligatoriu prezența dermatitei atopice la copil, indiferent de alte criterii",
            "Diagnosticul de astm nu poate fi formulat decât în prezența a două criterii minore, antecedentele familiale de astm nefiind luate în calcul de API",
            "Diagnosticul de astm poate fi formulat, deoarece prezența episoadelor recurente de wheezing asociată cu un criteriu major (astm parental) este suficientă pentru precizarea diagnosticului"
          ],
          "correct": 4,
          "explanation": "Conform API, prezența în primii 3 ani de viață a trei sau mai multe episoade de wheezing pe an, cu durata de minimum o zi și afectarea somnului, corelată cu un criteriu major (astm la unul dintre părinți sau dermatită atopică la copil) sau cu două criterii minore, permite formularea diagnosticului de astm. Astmul parental este unul dintre cele două criterii majore ale scorului, fiind suficient alături de wheezing-ul recurent pentru diagnostic.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 509-523"
        },
        {
          "id": "12-2",
          "stem": "Un copil de 6 ani cu astm bronșic este adus la camera de urgență cu o exacerbare. La examenul obiectiv este obnubilat, folosește musculatura accesorie intens, iar FEV1 este sub 50% din valoarea predictivă, fără ameliorare după prima oră de tratament cu bronhodilatator inhalator și corticoterapie. Care este conduita terapeutică ADIȚIONALĂ cea mai adecvată în acest moment, conform algoritmului de tratament al exacerbării severe?",
          "options": [
            "Se recomandă sedare ușoară pentru calmarea agitației, asociată cu fluidificante ale secrețiilor bronșice",
            "Se inițiază antibioterapie cu spectru larg, întrucât persistența simptomelor sugerează suprainfecție bacteriană",
            "Se întrerupe corticoterapia sistemică și se trece direct la omalizumab, dat fiind răspunsul absent la tratamentul inițial",
            "Se asociază anticolinergic inhalator, oxigenoterapie și se continuă salbutamolul la interval de o oră sau în nebulizare continuă",
            "Se continuă doar salbutamolul inhalator la interval de 4-6 ore, fără alte asocieri, urmând a fi externat dacă starea se ameliorează"
          ],
          "correct": 3,
          "explanation": "În exacerbarea severă, cu răspuns absent la tratamentul inițial (FEV1 sub 50%, obnubilare), se continuă administrarea salbutamolului la interval de o oră sau în nebulizare continuă, se asociază oxigenoterapie și anticolinergice, iar glucocorticoidul se administrează oral sau parenteral. Sedativele sunt contraindicate, iar antibioticele și fluidificantele nu se recomandă de rutină în exacerbări.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 509-523"
        },
        {
          "id": "12-3",
          "stem": "Un sugar alimentat exclusiv la sân dezvoltă, la 3 luni, leziuni cutanate eczematoase moderate și scaune cu striuri de sânge, fiind suspectat de alergie la proteinele laptelui de vacă cu manifestări non-IgE mediate. Care este conduita inițială recomandată, conform algoritmului de diagnostic și tratament pentru sugarul alimentat natural?",
          "options": [
            "Se recomandă introducerea imediată a unei formule pe bază de soia, fără a modifica dieta mamei",
            "Se continuă alăptarea, cu dietă de excludere a proteinelor din laptele de vacă (și a altor alergeni, dacă e cazul) pentru mamă, timp de 2-4 săptămâni, cu suplimentare de calciu la mamă",
            "Se întrerupe alăptarea și se inițiază direct o formulă pe bază de aminoacizi, indiferent de severitate",
            "Se indică testul de provocare orală imediat, înainte de orice dietă de excludere, pentru confirmarea rapidă a diagnosticului",
            "Se continuă alăptarea nemodificată, iar simptomele digestive minore nu necesită nicio intervenție dietetică"
          ],
          "correct": 1,
          "explanation": "La sugarul alimentat natural cu suspiciune de alergie la proteinele laptelui de vacă formă ușoară/moderată, conduita este continuarea alăptării asociată cu dietă restrictivă pentru mamă (evitarea proteinelor din laptele de vacă și a altor alergeni), pentru 2-4 săptămâni, cu suplimentare de calciu. Testul de provocare orală se efectuează abia după remisia simptomelor sub dietă de excludere, nu ca primă etapă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 689-698"
        },
        {
          "id": "12-4",
          "stem": "Un copil de 4 ani cu dermatită atopică severă, netratată, dezvoltă brusc grupuri de vezicule care evoluează spre papule ombilicate și apoi plăci eritematoase crustificate, însoțite de febră și limfadenopatie. Care este cea mai probabilă complicație și conduita terapeutică imediată?",
          "options": [
            "Dermatită seboreică suprainfectată; se recomandă antifungice topice",
            "Impetiginizare cu Staphylococcus aureus; se recomandă tratament topic cu antiseptice, fără terapie sistemică",
            "Eritrodermie exfoliativă de cauză metabolică; se recomandă doar reechilibrare hidroelectrolitică, fără terapie antivirală",
            "Eczemă de contact suprapusă; se recomandă doar întreruperea temporară a emolientelor utilizate",
            "Eczema herpeticum, o infecție diseminată cu virusul herpes simplex; se recomandă tratament sistemic precoce cu aciclovir sau valaciclovir, preferabil intravenos"
          ],
          "correct": 4,
          "explanation": "Tabloul descris este caracteristic eczemei herpeticum, infecție diseminată cu virusul herpes simplex, favorizată de dermatita atopică cu debut precoce, formele severe sau netratate, deficitul de filagrină și nivelul IgE seric ridicat. Tratamentul sistemic antiviral cu aciclovir sau valaciclovir, administrat intravenos și cât mai precoce, este recomandat după stabilirea diagnosticului.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 699-709"
        },
        {
          "id": "12-5",
          "stem": "O adolescentă de 14 ani are urticarie cronică spontană de 4 luni, cu leziuni zilnice și prurit sever care interferează cu somnul. Sub tratament cu antihistaminic H1 nesedativ în doză crescută de patru ori față de doza standard, timp de 3 săptămâni, simptomele persistă. Care este următoarea etapă terapeutică recomandată de ghidul EAACI/GA2LEN/EDF/WAO?",
          "options": [
            "Adăugarea unui antihistaminic H2, deoarece are eficiență dovedită complementară antihistaminicelor H1",
            "Efectuarea de teste alergologice extensive și investigații imagistice complexe înainte de orice modificare terapeutică",
            "Adăugarea omalizumab (300 mg/lună, timp de 6 luni), ca a treia linie terapeutică, alternativa fiind ciclosporina A sau montelukast",
            "Inițierea corticoterapiei sistemice cronice, în doze standard, pe termen nelimitat, pentru controlul de fond al bolii",
            "Asocierea unui al doilea antihistaminic H1 nesedativ de altă clasă, administrat concomitent"
          ],
          "correct": 2,
          "explanation": "Conform algoritmului terapeutic, dacă simptomele persistă după creșterea dozei de antihistaminic H1 nesedativ de până la patru ori (linia a doua), se trece la linia a treia: adăugarea omalizumab (300 mg/lună, 6 luni, la copii peste 6 ani) sau, alternativ, ciclosporină A ori montelukast. Asocierea mai multor antihistaminice H1 diferite nu s-a dovedit eficientă, iar antihistaminicele H2 au fost scoase din ghidurile europene; corticoterapia sistemică cronică nu este recomandată în UC.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 699-709"
        }
      ]
    },
    {
      "num": 13,
      "title": "Malformațiile congenitale de cord necianogene",
      "questions": [
        {
          "id": "13-1",
          "stem": "Un sugar de 4 luni, diagnosticat ecocardiografic cu defect septal ventricular perimembranos cu șunt moderat (raport Qp/Qs aproximativ 2:1), prezintă la auscultație, pe lângă suflul holosistolic parasternal stânga inferior, un suflu/rulment mezodiastolic perceput la apex. Care este semnificația acestui suflu diastolic apical?",
          "options": [
            "Stenoză mitrală relativă/funcțională, determinată de creșterea fluxului sangvin prin valva mitrală ca urmare a întoarcerii venoase pulmonare crescute",
            "Insuficiență aortică prin prolaps de cuspidă",
            "Regurgitare tricuspidiană secundară dilatării ventriculului drept",
            "Persistența unui canal atrioventricular asociat",
            "Stenoză mitrală organică congenitală asociată"
          ],
          "correct": 0,
          "explanation": "Textul arată că în defectele cu debit de șunt moderat apare suflul/rulmentul mezodiastolic la apex, care traduce o stenoză mitrală relativă, de debit, produsă atunci când fluxul pulmonar devine dublu față de cel sistemic (Qp/Qs > 2:1). Nu este vorba de o leziune valvulară organică, ci de un fenomen funcțional legat de creșterea întoarcerii venoase pulmonare spre ventriculul stâng.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 624-636"
        },
        {
          "id": "13-2",
          "stem": "Un adolescent de 14 ani, cunoscut cu stenoză aortică valvulară strânsă, anterior asimptomatic, prezintă un episod de sincopă în timpul unui efort fizic intens. Care este mecanismul fiziopatologic cel mai probabil implicat?",
          "options": [
            "Limitarea deschiderii valvei aortice stenozate împiedică creșterea compensatorie a debitului cardiac necesară la efort",
            "Închiderea funcțională bruscă a canalului arterial reduce brutal fluxul sistemic",
            "Apariția unei stenoze mitrale relative prin creșterea fluxului pulmonar reduce umplerea ventriculului stâng",
            "Creșterea rezistenței vasculare sistemice produce supraîncărcare de volum a ventriculului drept",
            "Scăderea rezistenței vasculare pulmonare determină instalarea unui șunt dreapta-stânga la nivelul unui defect septal asociat"
          ],
          "correct": 0,
          "explanation": "În stenozele aortice strânse, limitarea deschiderii valvei nu permite, în condiții de efort, creșterea compensatorie a debitului cardiac; ca urmare, la efort poate apărea sincopa sau chiar moartea subită. Celelalte mecanisme descrise (șunt dreapta-stânga, închiderea canalului arterial, supraîncărcare de volum a VD, stenoză mitrală relativă) nu sunt relevante pentru fiziopatologia stenozei aortice.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 624-636"
        },
        {
          "id": "13-3",
          "stem": "Un nou-născut prematur, cu vârsta postnatală de 5 zile, prezintă semne de insuficiență cardiacă congestivă în contextul unei persistențe de canal arterial cu debit mare, confirmată ecocardiografic. Care este conduita terapeutică inițială recomandată pentru încercarea de închidere a canalului?",
          "options": [
            "Administrare de beta-blocant pentru controlul tahicardiei",
            "Închiderea chirurgicală imediată, fără nicio tentativă de tratament medicamentos",
            "Administrarea intravenoasă de prostaglandină E1, pentru menținerea permeabilității canalului",
            "Restricție lichidiană izolată, fără altă intervenție terapeutică",
            "Administrarea intravenoasă de indometacin sau ibuprofen, inhibitori de prostaglandine"
          ],
          "correct": 4,
          "explanation": "La prematurii cu PCA cu debit mare și ICC se încearcă închiderea farmacologică a canalului cu inhibitori de prostaglandine (indometacin, mai recent și ibuprofen), administrați intravenos, intervenție ce trebuie făcută în primele 10-14 zile de viață; doar dacă la 48-72 de ore de tratament persistă insuficiența ventriculară stângă se recurge la închidere chirurgicală. Prostaglandina E1 are efect opus, de menținere a canalului deschis, fiind folosită în alte situații (cardiopatii ducto-dependente).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 624-636"
        },
        {
          "id": "13-4",
          "stem": "O fetiță de 4 ani, asimptomatică, este evaluată pentru un suflu sistolic ejecțional grad 2/6, perceput parasternal stânga superior, descoperit la un control de rutină. Ce element auscultatoriu orientează diagnosticul spre un defect septal atrial tip ostium secundum, mai degrabă decât spre un suflu inocent?",
          "options": [
            "Accentuarea suflului la trecerea în ortostatism",
            "Prezența unui freamăt sistolic parasternal stânga inferior",
            "Prezența unui suflu diastolic apical asociat",
            "Dedublarea largă și fixă a zgomotului 2 în aria pulmonarei",
            "Cianoză perioronazală intermitentă la efort"
          ],
          "correct": 3,
          "explanation": "Elementele clinice caracteristice DSA descrise în text sunt suflul sistolic ejecțional în focarul pulmonarei și dedublarea largă și fixă a zgomotului 2 în aria pulmonarei, pe măsura creșterii presiunilor în cordul drept. Acest semn auscultatoriu, spre deosebire de sufluri inocente, orientează spre existența unui șunt stânga-dreapta la nivel atrial.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 624-636"
        },
        {
          "id": "13-5",
          "stem": "Un nou-născut de 6 zile se prezintă cu tahipnee, tahicardie, alterarea rapidă a stării generale, puls femural diminuat/absent și o diferență semnificativă între valorile tensionale la membrele superioare (crescute) și la cele inferioare (scăzute). Ecocardiografia confirmă o coarctație de aortă severă, de tip preductal. Care este măsura terapeutică imediată, prioritară stabilizării înaintea corecției chirurgicale?",
          "options": [
            "Administrarea intravenoasă de prostaglandină E1, pentru menținerea permeabilității canalului arterial",
            "Digitalizare rapidă, ca unică măsură terapeutică",
            "Administrarea de indometacin intravenos, pentru închiderea canalului arterial",
            "Administrarea de inhibitori ai enzimei de conversie, pentru reducerea postsarcinii ventriculare stângi",
            "Administrarea de beta-blocante, pentru controlul valorilor tensionale crescute"
          ],
          "correct": 0,
          "explanation": "În coarctația de aortă preductală diagnosticată precoce, fluxul sangvin spre jumătatea inferioară a corpului depinde de permeabilitatea canalului arterial; de aceea este necesară menținerea acestuia permeabil cu prostaglandină E1 administrată intravenos, până la stabilizare și corecție chirurgicală. Indometacinul ar închide canalul, agravând situația, iar inhibitorii enzimei de conversie sunt contraindicați deoarece pot scădea perfuzia distal de coarctație, inclusiv cea renală.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 624-636"
        }
      ]
    },
    {
      "num": 14,
      "title": "Malformațiile congenitale de cord cianogene",
      "questions": [
        {
          "id": "14-1",
          "stem": "Un nou-născut cu transpoziție de vase mari asociată cu un defect septal ventricular larg dezvoltă, la vârsta de 3 săptămâni, tahipnee, tahicardie, transpirații excesive și stagnare ponderală, în timp ce cianoza rămâne discretă, evidentă doar în momentele de agitație. Din punct de vedere fiziopatologic, acest tablou corespunde cărei categorii de cardiopatie congenitală cianogenă?",
          "options": [
            "MCC cianogenă cu flux pulmonar mult crescut, la care consecințele clinice sunt legate de supraîncărcarea de volum a ventriculului stâng și nu de hipoxemie",
            "MCC cianogenă cu flux pulmonar scăzut, prin devierea unei cantități de sânge venos sistemic direct în cordul stâng",
            "MCC cianogenă cu flux pulmonar redus, prin obstrucția întoarcerii venoase pulmonare",
            "Stenoză aortică critică cu debit cardiac sistemic scăzut",
            "MCC acianogenă cu șunt stânga-dreapta pur, fără amestec sanguin interatrial sau interventricular"
          ],
          "correct": 0,
          "explanation": "Textul descrie această categorie (exemplificată de TMV cu DSV larg) prin SaO2 ușor scăzută și cianoză absentă sau discretă, consecințele clinice fiind legate de fluxul pulmonar crescut, care duce la supraîncărcarea de volum a ventriculului stâng și la insuficiența acestuia, nu de hipoxemie. Tabloul clinic descris (ICC cu cianoză minimă) corespunde exact acestei categorii. Celelalte categorii (flux scăzut prin deviere directă sau prin obstrucția întoarcerii venoase) sunt dominate de hipoxemie severă și cianoză intensă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 646-654"
        },
        {
          "id": "14-2",
          "stem": "Un sugar de 5 luni, cunoscut cu tetralogie Fallot, se trezește dimineața cu agravarea bruscă a dispneei, accentuarea cianozei, iritabilitate marcată și diminuarea suflului sistolic auscultat anterior. Care este prima măsură terapeutică indicată în acest moment?",
          "options": [
            "Administrarea imediată de bicarbonat de sodiu intravenos",
            "Montarea de urgență a unei linii venoase periferice pentru reechilibrare volemică",
            "Plasarea copilului în poziție genupectorală (flectarea membrelor inferioare pe abdomen)",
            "Administrarea de propranolol oral, zilnic",
            "Administrarea de oxigen pe mască în flux mare"
          ],
          "correct": 2,
          "explanation": "Tabloul descris este cel al unei crize de rău hipoxic (hipercianoză). Tratamentul acesteia începe cu plasarea copilului în poziție genupectorală, fără a se pierde timp cu montarea unei linii de acces IV. Administrarea de oxigen are valoare limitată, deoarece problema ține de reducerea fluxului sangvin pulmonar și nu de oxigenarea acestuia; bicarbonatul și propranololul sunt măsuri ulterioare, nu de primă linie.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 646-654"
        },
        {
          "id": "14-3",
          "stem": "Un nou-născut prezintă cianoză centrală din primele ore de viață. Ecocardiografia evidențiază un ventricul drept hipoplazic, limitat la camera de ejecție, iar electrocardiograma arată deviația axului QRS spre stânga (între 0 și -90°), hipertrofie atrială dreaptă și hipertrofie ventriculară stângă, cu potențiale ventriculare drepte de amplitudine redusă. Care este diagnosticul cel mai probabil?",
          "options": [
            "Atrezia de tricuspidă",
            "Transpoziția marilor vase cu sept interventricular intact",
            "Stenoza pulmonară critică cu sept interventricular intact",
            "Trunchiul arterial comun",
            "Tetralogia Fallot"
          ],
          "correct": 0,
          "explanation": "Textul precizează că, la un nou-născut cianotic, modificările EKG sunt caracteristice pentru diagnosticul de atrezie de tricuspidă: devierea axului QRS la stânga, hipertrofia atriului drept, hipertrofie ventriculară stângă și potențiale ventriculare drepte de amplitudine redusă. Acest pattern, corelat cu hipoplazia ventriculului drept, este specific atreziei tricuspidiene și diferă de celelalte cardiopatii cianogene, care asociază de regulă hipertrofie ventriculară dreaptă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 646-654"
        },
        {
          "id": "14-4",
          "stem": "Un copil de 4 ani cu tetralogie Fallot neoperată efectuează o radiografie cardiopulmonară care evidențiază un cord de dimensiuni normale, cu apex rotunjit și împins în sus, arc mijlociu stâng concav/scobit, pedicul vascular mic și înalt, iar câmpurile pulmonare hipertransparente. Cum se numește acest aspect radiologic caracteristic?",
          "options": [
            "Silueta cardiacă \"în clopot\"",
            "Cardiomegalie globală cu congestie vasculară pulmonară",
            "Cord \"în formă de gheată\" (\"coeur en sabot\")",
            "Aspect de \"ou culcat pe diafragm\"",
            "Dilatarea izolată a atriului stâng cu dublu contur"
          ],
          "correct": 2,
          "explanation": "Textul descrie explicit acest aspect radiologic din tetralogia Fallot drept \"cordul în formă de gheată\"/\"coeur en sabot\" (sau \"cord tăiat cu securea\"), determinat de arcul mijlociu stâng concav prin absența infundibulului pulmonar, apexul rotunjit și împins în sus de ventriculul drept hipertrofiat, pediculul vascular mic și înalt, cu hipertransparență pulmonară secundară hipovascularizației. Aspectul de \"ou culcat pe diafragm\" este caracteristic transpoziției marilor vase, nu tetralogiei Fallot.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 646-654"
        },
        {
          "id": "14-5",
          "stem": "Un copil de 6 ani cu tetralogie Fallot neoperată prezintă de 3 zile febră, cefalee intensă, vărsături și deficit motor la nivelul membrului superior drept. Care este complicația cel mai probabil implicată, favorizată direct de fiziopatologia șuntului dreapta-stânga al acestei cardiopatii?",
          "options": [
            "Abcesul cerebral, prin trecerea bacteriilor din circulația venoasă direct în circulația arterială sistemică, ocolind filtrul pulmonar",
            "Accidentul vascular cerebral hemoragic prin ruptura unui anevrism micotic aortic",
            "Encefalopatia hipertensivă dintr-o coarctație de aortă asociată",
            "Meningita bacteriană secundară unei endocardite tricuspidiene",
            "Tromboza de sinus venos cerebral secundară deshidratării acute"
          ],
          "correct": 0,
          "explanation": "Textul menționează abcesul cerebral drept una dintre principalele consecințe clinice ale unei MCC cu șunt dreapta-stânga, precizând că șuntul veno-arterial permite bacteriilor, unele provenite chiar din flora enterică, să ocolească filtrul pulmonar și să pătrundă direct în circulația arterială sistemică. Tabloul clinic (febră, cefalee, semne neurologice de focar) la un copil cu cardiopatie cianogenă de lungă durată este sugestiv pentru această complicație.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 646-654"
        }
      ]
    },
    {
      "num": 15,
      "title": "Hipertensiunea arterială la copil",
      "questions": [
        {
          "id": "15-1",
          "stem": "O adolescentă de 15 ani, asimptomatică, prezintă la trei vizite consecutive în cabinet valori ale tensiunii arteriale (TA) peste percentila 95 pentru vârstă, sex și înălțime. Se efectuează monitorizare ambulatorie a TA (holter TA/24 ore), care arată valori medii ale TAS și TAD sub percentila 95, cu mai puțin de 25% din valorile înregistrate peste limita normală pentru sex, vârstă și înălțime. Care este diagnosticul cel mai probabil?",
          "options": [
            "Profil tensional non-dipper",
            "HTA esențială stadiul 1",
            "HTA de halat alb",
            "HTA esențială stadiul 2",
            "HTA mascată"
          ],
          "correct": 2,
          "explanation": "HTA de halat alb este definită ca valori ale TA măsurate în cabinet mai mari sau egale cu percentila 95, dar cu valori medii ale TAS/TAD pe holter TA/24 ore sub percentila 95, în condițiile în care mai puțin de 25% din valori depășesc limita normală (load <25%). HTA mascată este situația inversă (TA normală în cabinet, dar crescută pe holter). Profilul non-dipper se referă la variabilitatea circadiană a TA, nu la discrepanța cabinet-holter.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 423-428"
        },
        {
          "id": "15-2",
          "stem": "Un sugar de 3 luni este diagnosticat cu hipertensiune arterială semnificativă persistentă. Conform distribuției etiologice a HTA în funcție de vârstă, care este cea mai frecventă cauză de HTA la această grupă de vârstă?",
          "options": [
            "Tumora Wilms",
            "Feocromocitomul",
            "Stenoza de arteră renală",
            "Tromboza de arteră/venă renală",
            "HTA esențială asociată obezității"
          ],
          "correct": 3,
          "explanation": "La nou-născut și sugar, cele mai frecvente cauze de HTA sunt tromboza de arteră/venă renală, anomaliile congenitale renale și coarctația de aortă. Tumora Wilms și stenoza de arteră renală sunt cauze predominante la copilul cu vârsta între 1 și 6 ani, iar HTA esențială predomină la adolescenți.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 423-428"
        },
        {
          "id": "15-3",
          "stem": "Un adolescent de 16 ani cu HTA secundară stenozei bilaterale de artere renale necesită inițierea tratamentului medicamentos antihipertensiv. Care dintre următoarele clase terapeutice este contraindicată în acest context?",
          "options": [
            "Alfa-agoniștii centrali",
            "Inhibitorii enzimei de conversie a angiotensinei (IECA)",
            "Blocanții canalelor de calciu",
            "Beta-blocantele",
            "Diureticele de ansă"
          ],
          "correct": 1,
          "explanation": "IECA și antagoniștii receptorilor angiotensinei II (ARA) au contraindicație absolută în stenoza bilaterală de artere renale, în sarcină și în hiperpotasemie. Celelalte clase menționate nu sunt contraindicate specific în stenoza bilaterală de artere renale conform textului.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 423-428"
        },
        {
          "id": "15-4",
          "stem": "Un copil de 8 ani se prezintă cu cefalee severă, vărsături și convulsii, cu valori tensionale mult crescute (peste 20% față de limita stadiului 2 de HTA) și encefalopatie hipertensivă. După internarea în terapie intensivă și inițierea tratamentului parenteral (de exemplu nitroprusiat de sodiu), care este strategia corectă de reducere a TA în primele ore?",
          "options": [
            "Reducerea TA cu maximum 25% din scăderea estimată în primele 6-8 ore, urmată de scădere graduală și continuă în următoarele 24-48 ore",
            "Reducerea imediată a TA cu 50% din valoarea inițială, urmată de menținerea constantă a acestei valori",
            "Administrarea tratamentului oral cu nifedipină, urmată de reevaluare la 24 de ore",
            "Normalizarea rapidă a TA în prima oră, pentru a preveni cât mai repede afectarea organelor-țintă",
            "Reducerea TA la valori normale în primele 6-8 ore, cu continuarea tratamentului oral după 24 de ore"
          ],
          "correct": 0,
          "explanation": "Scăderea TA în criza hipertensivă trebuie să fie graduală, pentru a evita hipoperfuzia organelor, în special hipoperfuzia cerebrală: în primele 6-8 ore TA se reduce cu maximum 25% din scăderea estimată, urmată de o scădere continuă și graduală în următoarele 24-48 de ore. Tratamentul crizei hipertensive se face întotdeauna parenteral, nu oral.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 423-428"
        },
        {
          "id": "15-5",
          "stem": "Pentru care dintre următoarele categorii de pacienți pediatrici cu HTA este indicată, conform ghidurilor citate, efectuarea investigațiilor de laborator adiționale (catecolamine/metanefrine urinare și plasmatice, steroizi, renină plasmatică, imagistică renală) pentru identificarea unei cauze secundare?",
          "options": [
            "Copiii mici cu HTA de stadiul 1 și orice copil/adolescent cu HTA de stadiul 2",
            "Doar copiii cu HTA de halat alb",
            "Doar copiii cu vârsta peste 12 ani, indiferent de stadiul HTA",
            "Doar adolescenții cu HTA esențială confirmată",
            "Toți copiii cu valori ale TA între percentilele 90 și 94, indiferent de comorbidități"
          ],
          "correct": 0,
          "explanation": "Textul precizează explicit că populația-țintă pentru investigațiile adiționale (catecolamine, steroizi, renină plasmatică, imagistică renală) este reprezentată de copiii mici cu HTA de stadiul 1 și de orice copil/adolescent cu HTA de stadiul 2 (renina plasmatică se indică suplimentar și în caz de istoric familial de HTA severă). Investigațiile de rutină, nu cele adiționale, se efectuează la toți copiii cu HTA confirmată.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 423-428"
        }
      ]
    },
    {
      "num": 16,
      "title": "Diareea acută bacteriană și virală",
      "questions": [
        {
          "id": "16-1",
          "stem": "Un sugar de 8 luni prezintă de 2 zile scaune apoase, foarte numeroase și voluminoase, fără sânge sau mucus vizibil, fără febră și fără semne marcate de iritație abdominală; frotiul din scaun nu evidențiază leucocite. Care este mecanismul cel mai probabil al diareei acute la acest sugar?",
          "options": [
            "Diaree prin scăderea suprafeței de absorbție (sindrom de intestin scurt)",
            "Diaree prin tulburări de motilitate (hipermotilitate)",
            "Diaree entero-invazivă/inflamatoare (citotoxică)",
            "Diaree exsudativă, cu enteropatie cu pierdere de proteine",
            "Diaree secretorie (non-inflamatoare/enterotoxică)"
          ],
          "correct": 4,
          "explanation": "Diareea secretorie se caracterizează clinic prin scaune apoase, voluminoase, absența semnelor sistemice (febră), absența semnelor de inflamație/sânge în scaun și absența leucocitelor fecale - exact tabloul descris. Diareea entero-invazivă se însoțește de sindrom dizenteric, cu sânge, mucus, leucocite în scaun și semne sistemice, ceea ce nu se regăsește la acest pacient.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 743-762"
        },
        {
          "id": "16-2",
          "stem": "Un sugar de 2 luni este diagnosticat cu gastroenterită acută cu Salmonella non-tifoidă, coprocultură pozitivă, fără bacteriemie, cu stare generală relativ bună. Care este conduita corectă privind antibioterapia?",
          "options": [
            "Se administrează antibiotic doar dacă antibiograma arată rezistență la ampicilină",
            "Se administrează antibiotic doar în cazul asocierii cu deshidratare severă",
            "Se administrează antibiotic doar dacă apar convulsii febrile",
            "Se administrează antibiotic, deoarece vârsta sub 3 luni reprezintă un factor de risc pentru boală invazivă la infecția cu Salmonella",
            "Nu se administrează antibiotic, deoarece la gazdele normale, cu gastroenterită necomplicată, antibioterapia nu scurtează diareea și poate prelungi portajul"
          ],
          "correct": 3,
          "explanation": "Textul precizează că tratamentul antimicrobian este indicat pentru gastroenterita cu Salmonella non-tifoidă la pacienții cu risc crescut de boală invazivă, printre care sugarii cu vârsta sub 3 luni, indiferent de prezența bacteriemiei. În schimb, la gazdele normale cu gastroenterită necomplicată, antibioterapia nu scurtează durata diareei și poate prelungi eliminarea fecală (portajul).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 743-762"
        },
        {
          "id": "16-3",
          "stem": "Un copil de 4 ani prezintă diaree cu sânge, în context epidemiologic sugestiv pentru infecție cu E. coli enterohemoragic (ECEH O157:H7). Care este atitudinea corectă privind antibioterapia?",
          "options": [
            "Antibioterapia este obligatorie la orice vârstă, indiferent de tulpina implicată",
            "Se administrează cotrimoxazol, ca tratament de primă linie",
            "Se administrează ciprofloxacină imediat, pentru a scurta durata bolii",
            "Se administrează metronidazol, ca în infecția cu Clostridium difficile",
            "Antibioterapia este contraindicată, deoarece poate crește riscul de sindrom hemolitic-uremic"
          ],
          "correct": 4,
          "explanation": "Textul menționează explicit că antibioterapia este contraindicată în infecția cu ECEH-O157:H7. Studii retrospective și prospective au evidențiat un risc crescut de sindrom hemolitic-uremic atunci când se administrează antibiotice în timpul perioadei de diaree sangvinolentă cauzată de E. coli producător de toxină de tip Shiga.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 743-762"
        },
        {
          "id": "16-4",
          "stem": "Un copil de 3 ani cu gastroenterită acută și deshidratare ușoară-moderată prezintă vărsături repetate care împiedică rehidratarea orală. Care medicament este menționat ca fiind eficace și sigur pentru controlul vărsăturilor, crescând șansa de succes a rehidratării orale și reducând nevoia de spitalizare/terapie IV?",
          "options": [
            "Bismut subsalicilic",
            "Ondansetron",
            "Loperamid",
            "Diosmectită",
            "Racecadotril"
          ],
          "correct": 1,
          "explanation": "Ondansetronul administrat oral (sublingual), în doză unică, poate controla vărsăturile și ameliora succesul rehidratării orale la copiii cu gastroenterită și deshidratare ușoară până la moderată, reducând nevoia de spitalizare și de terapie IV. Loperamidul nu are efect antiemetic și este de altfel contraindicat la copiii mici, iar racecadotrilul, bismutul subsalicilic și diosmectita sunt agenți antidiareici/adsorbanți, nu antiemetice cu acest profil.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 743-762"
        },
        {
          "id": "16-5",
          "stem": "Părinții unui copil de 2 ani cu diaree acută infecțioasă întreabă dacă îi pot administra loperamid pentru a reduce numărul de scaune. Care este răspunsul corect, conform datelor din literatură?",
          "options": [
            "Loperamidul este contraindicat la copiii sub 12 ani, deoarece riscul de reacții adverse severe depășește beneficiul antidiareic modest",
            "Loperamidul este de primă linie la copiii sub 5 ani cu diaree apoasă",
            "Loperamidul este indicat exclusiv în diareea invazivă cu Shigella",
            "Loperamidul poate înlocui rehidratarea orală în formele ușoare de diaree",
            "Loperamidul se poate asocia în siguranță cu antibioterapia pentru a accelera vindecarea"
          ],
          "correct": 0,
          "explanation": "Studiile clinice, inclusiv o metaanaliză la copii sub 12 ani, arată că riscul de efecte adverse severe ale loperamidului (obstrucție intestinală/ileus, enterocolită ulcero-necrozantă, perforație intestinală, letargie, deces) depășește modestele sale efecte antidiareice. De aceea, formularea pediatrică a fost retrasă în cea mai mare parte a lumii, iar loperamidul (ca și difenoxilatul) este contraindicat în diareea acută infecțioasă la copiii sub 12 ani.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 743-762"
        }
      ]
    },
    {
      "num": 17,
      "title": "Sindroamele de deshidratare",
      "questions": [
        {
          "id": "17-1",
          "stem": "Un sugar de 6 luni se prezintă cu gastroenterită acută, pierdere ponderală estimată peste 10%, pliu cutanat persistent, absența lacrimilor, mucoase uscate și timp de recolorare capilară foarte întârziat, cu oligoanurie. Care este conduita terapeutică inițială recomandată?",
          "options": [
            "Administrare de ser fiziologic 20 ml/kg intravenos în 10-15 minute, repetabil până la refacerea volemiei (maximum 60 ml/kg)",
            "Rehidratare orală cu soluții de rehidratare orală, în ritm lent",
            "Restricție hidrică până la reluarea diurezei spontane",
            "Administrare de glucoză 5% intravenos, 100 ml/kg în 24 de ore",
            "Administrare de bicarbonat de sodiu intravenos ca primă măsură terapeutică"
          ],
          "correct": 0,
          "explanation": "În SDA severă, primul obiectiv terapeutic este refacerea volemiei. Textul precizează administrarea de ser fiziologic 20 ml/kg în 10-15 minute, care se poate repeta până la refacerea volemiei, până la maximum 60 ml/kg. Rehidratarea orală este rezervată formelor ușoare/moderate, iar bicarbonatul se folosește pentru corectarea acidozei, nu ca primă măsură în șocul hipovolemic.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "17-2",
          "stem": "Un sugar cu aport hidric redus din cauza vărsăturilor persistente prezintă la examenul clinic febră, letargie, hipertonie musculară și hiperreflexie, în timp ce diureza este relativ păstrată, iar tahicardia este doar moderată. Acest tablou clinic, cu simptomatologie mai puțin evidentă decât în alte forme de deshidratare, este caracteristic pentru:",
          "options": [
            "Deshidratarea prin pierderi renale izolate, fără afectare a natremiei",
            "Hipovolemia prin hemoragie acută",
            "Deshidratarea izonatremică (mixtă)",
            "Deshidratarea hipernatremică (celulară)",
            "Deshidratarea hiponatremică (extracelulară)"
          ],
          "correct": 3,
          "explanation": "Deshidratarea hipernatremică (Na>150 mEq/l) apare prin pierdere de apă liberă și se caracterizează prin febră, letargie/iritabilitate și hipertonie/hiperreflexie. Simptomatologia este adesea mai puțin evidentă decât în deshidratarea hipotonă, diureza putând fi păstrată, iar tahicardia fiind moderată, deoarece trecerea apei din spațiul intracelular în cel extracelular protejează volumul intravascular.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "17-3",
          "stem": "Un copil cu deshidratare hipernatremică severă este supus rehidratării intravenoase. Care este principala complicație asociată cu scăderea prea rapidă a osmolarității extracelulare în cursul corectării?",
          "options": [
            "Mielinoză pontină centrală",
            "Hemoragie intracraniană prin deshidratare celulară persistentă",
            "Acidoză metabolică severă prin pierdere de bicarbonat",
            "Edem cerebral și convulsii, prin trecerea apei din spațiul extracelular în celulele creierului",
            "Insuficiență renală acută prin necroză tubulară"
          ],
          "correct": 3,
          "explanation": "Textul precizează că scăderea rapidă a osmolarității extracelulare în timpul corectării hipernatremiei determină trecerea apei din spațiul extracelular în celulele creierului, producând edem cerebral și convulsii. Din acest motiv, corectarea hipernatremiei severe se realizează lent, în 3-4 zile, evitându-se ritmul rapid în primele 8 ore. Mielinoza pontină centrală este, în schimb, complicația corecției rapide a hiponatremiei.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "17-4",
          "stem": "Un sugar de 10 kg cu deshidratare hiponatremică (Na seric inițial 118 mEq/l) necesită corectarea deficitului de sodiu conform formulei Deficit sodiu = 0,6 x G x (Na+d - Na+i). Care este rata maximă recomandată de corecție a natremiei în primele 24 de ore, pentru a evita riscul de mielinoză pontină centrală?",
          "options": [
            "6 mEq/l în 24 de ore",
            "24 mEq/l în 24 de ore",
            "20 mEq/l în 24 de ore",
            "12 mEq/l în 24 de ore",
            "30 mEq/l în 24 de ore"
          ],
          "correct": 3,
          "explanation": "Conform textului, în deshidratarea hiponatremică se corectează cel mult 12 mEq/l în 24 de ore, corectarea rapidă având risc de mielinoză pontină centrală. Aceeași limită de 12 mEq/l/24 ore este menționată și pentru scăderea natremiei în cursul corectării deshidratării hipernatremice.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "17-5",
          "stem": "Pentru un copil cu greutatea de 14 kg, necesarul zilnic de lichide calculat după metoda Holliday-Segar este:",
          "options": [
            "1000 ml/zi",
            "1500 ml/zi",
            "1300 ml/zi",
            "1200 ml/zi",
            "1100 ml/zi"
          ],
          "correct": 3,
          "explanation": "Conform metodei Holliday-Segar, pentru greutăți între 11-20 kg necesarul este de 1000 ml plus 50 ml/kg pentru fiecare kg peste 10 kg. Pentru 14 kg: 1000 ml + 50 ml x 4 kg = 1200 ml/zi. Acest necesar se administrează în plus față de corectarea deficitului estimat, în cursul a 24-48 de ore.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        }
      ]
    },
    {
      "num": 18,
      "title": "Diareea cronică și sindroamele de malabsorbție, inclusiv fibroza chistică și celiachia",
      "questions": [
        {
          "id": "18-1",
          "stem": "Un sugar de 8 luni este investigat pentru un sindrom de malabsorbție, prezentând scaune abundente și grăsoase. Testarea scaunului prin colorația Sudan (pată pentru globulele de grăsime) evidențiază o cantitate excesivă de grăsimi neutre. Ce semnificație clinică are acest rezultat?",
          "options": [
            "Confirmă diagnosticul de deficit congenital de lactază",
            "Sugerează o boală primară a mucoasei intestinului subțire, precum boala celiacă",
            "Este un semn caracteristic pentru limfangiectazia intestinală primară",
            "Sugerează insuficiență pancreatică exocrină, prin maldigestia luminală a lipidelor",
            "Exclude orice etiologie a steatoreei la acest pacient"
          ],
          "correct": 3,
          "explanation": "Testul cu pată Sudan diferențiază trigliceridele neutre (nedigerate) de acizii grași liberi rezultați după digestia lipazică. Textul precizează explicit că prezența de grăsime neutră excesivă în scaun este sugestivă pentru insuficiența pancreatică exocrină (maldigestie), spre deosebire de bolile mucoasei intestinale (ca boala celiacă), unde apar acizi grași neabsorbiți, nu grăsimi neutre.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 168-176"
        },
        {
          "id": "18-2",
          "stem": "Un copil de 3 ani cu retard staturo-ponderal marcat, malnutriție severă și edeme este investigat pentru fibroză chistică, în absența oricărui tablou respirator sugestiv. Testul sudorii arată clor 68 mmol/l (valoare pozitivă), dar testarea genetică pentru mutații CFTR este negativă. Care este cea mai probabilă explicație pentru acest rezultat al testului sudorii?",
          "options": [
            "Este sugestiv pentru sindromul Shwachman-Diamond",
            "Confirmă cert diagnosticul de fibroză chistică, indiferent de rezultatul testului genetic",
            "Este expresia unei mutații CFTR de clasa a VI-a, cu turnover accentuat",
            "Rezultat fals pozitiv al testului sudorii, favorizat de malnutriția severă",
            "Reprezintă un rezultat fals negativ al testului sudorii"
          ],
          "correct": 3,
          "explanation": "Printre cauzele de test al sudorii fals pozitiv, textul menționează explicit malnutriția severă, alături de insuficiența adrenală, hipotiroidismul netratat sau boala celiacă. Absența tabloului respirator, testul genetic negativ și contextul de malnutriție severă orientează spre un fals pozitiv, nu spre confirmarea fibrozei chistice.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 186-197"
        },
        {
          "id": "18-3",
          "stem": "Un copil cu fibroză chistică și insuficiență pancreatică primește tratament substitutiv cu preparate enzimatice pancreatice în doze care depășesc 10000 UI lipază/kg corp/zi. Ulterior dezvoltă dureri abdominale și constipație, iar investigațiile imagistice evidențiază stricturi la nivelul colonului. Care este cel mai probabil diagnostic?",
          "options": [
            "Invaginație intestinală recurentă",
            "Prolaps rectal recidivant",
            "Colonopatie fibrozantă, complicație asociată dozelor mari de enzime pancreatice",
            "Boală Crohn cu debut colonic",
            "Sindrom de obstrucție intestinală distală, independent de doza de enzime"
          ],
          "correct": 2,
          "explanation": "Textul precizează că administrarea de doze mari de enzime pancreatice a fost asociată cu apariția stricturilor colonice (colonopatie fibrozantă), complicație ce poate apărea la doze mai mari de 10000 UI lipază/kg corp/zi. De aceea, tratamentul substitutiv enzimatic nu trebuie să depășească acest prag.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 186-197"
        },
        {
          "id": "18-4",
          "stem": "O fetiță de 6 ani cu diaree cronică, distensie abdominală și stagnare ponderală este evaluată pentru boală celiacă. Nivelul IgA total seric este normal, iar anticorpii anti-transglutaminază tisulară (TG2) de tip IgA au o valoare de peste 10 ori limita superioară a normalului. Conform algoritmului de diagnostic ESPGHAN, care este conduita recomandată?",
          "options": [
            "Este obligatorie efectuarea biopsiei duodenale înainte de a putea stabili diagnosticul",
            "Se renunță la biopsia duodenală și se recomandă testarea HLA-DQ2/DQ8 împreună cu anticorpii antiendomisium (EMA)",
            "Se repetă dozarea IgA totale peste 6 luni, fără alte investigații suplimentare",
            "Se exclude diagnosticul de boală celiacă dacă testul EMA este negativ, fără a mai fi necesară biopsia",
            "Se inițiază direct dieta fără gluten, fără nicio altă testare de confirmare"
          ],
          "correct": 1,
          "explanation": "Conform textului, atunci când anticorpii TG2 depășesc de peste 10 ori valoarea normală, biopsia duodenală nu mai este necesară, iar algoritmul ESPGHAN recomandă testarea HLA-DQ2/DQ8 și a anticorpilor antiendomisium (EMA) pentru susținerea diagnosticului. Biopsia rămâne obligatorie doar în restul situațiilor, cu valori anticorpi sub acest prag.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 180-184"
        },
        {
          "id": "18-5",
          "stem": "Un sugar prezintă steatoree și insuficiență pancreatică exocrină documentată, cu tulburări de creștere, dar testul sudorii este repetat normal. Evaluarea hematologică arată neutropenie cronică și trombocitopenie, iar radiografia scheletică relevă anomalii metafizare. Care este diagnosticul cel mai probabil?",
          "options": [
            "Fibroză chistică, cu test al sudorii fals negativ",
            "Boala incluziunilor vilozitare",
            "Deficiență de enterokinază",
            "Abetalipoproteinemia",
            "Sindromul Shwachman-Diamond"
          ],
          "correct": 4,
          "explanation": "Tabelul dedicat insuficienței pancreatice și afectării marginii în perie descrie sindromul Shwachman ca insuficiență pancreatică exocrină asociată cu neutropenie cronică sau ciclică, trombocitopenie, anemie, eczemă, anomalii metafizare și întârzierea creșterii. Testul sudorii normal exclude fibroza chistică, iar celelalte entități nu asociază tipic neutropenie și anomalii osoase metafizare.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 168-176"
        }
      ]
    },
    {
      "num": 19,
      "title": "Boala inflamatorie intestinală",
      "questions": [
        {
          "id": "19-1",
          "stem": "Un copil de 12 ani cu colită ulcerativă acută severă (scor PUCAI inițial > 65) primește corticoterapie intravenoasă. În ziua a 5-a de tratament, scorul PUCAI rămâne > 65. Care este interpretarea corectă a situației și conduita indicată?",
          "options": [
            "Se inițiază nutriție enterală exclusivă ca terapie de primă intenție pentru inducerea remisiunii",
            "Se introduce azatioprină în monoterapie, pentru inducerea rapidă a remisiunii",
            "Se definește colita ulcerativă steroid-refractară, fiind necesară trecerea la terapia de linia a doua (infliximab, ciclosporină, tacrolimus sau chirurgie)",
            "Este un răspuns terapeutic satisfăcător; se continuă corticoterapia intravenoasă până la 14 zile",
            "Se crește doza de corticoid intravenos și se reevaluează răspunsul după încă 5 zile"
          ],
          "correct": 2,
          "explanation": "Conform scorului PUCAI, o valoare > 65 menținută în ziua a 5-a de corticoterapie intravenoasă definește colita ulcerativă steroid-refractară și impune trecerea la terapia de linia a doua (infliximab, ciclosporină, tacrolimus sau chirurgie). Nutriția enterală exclusivă nu este eficace în colita ulcerativă, iar tiopurinele (azatioprina) nu sunt eficace pentru inducerea remisiunii, ci doar pentru menținere.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 846-863"
        },
        {
          "id": "19-2",
          "stem": "Un adolescent de 13 ani este adus la control pentru încetinirea vitezei de creștere staturală, documentată pe parcursul ultimelor 6 luni, fără dureri abdominale, diaree sau scădere ponderală semnificativă, cu VSH și PCR normale. Care este atitudinea corectă?",
          "options": [
            "Diagnosticul de boală inflamatorie intestinală poate fi exclus, deoarece markerii inflamatori sangvini sunt normali",
            "Se recomandă doar monitorizarea periodică a curbei de creștere, investigațiile fiind indicate exclusiv la apariția semnelor digestive",
            "Absența triadei clasice (durere abdominală, diaree, scădere ponderală) exclude diagnosticul de boală inflamatorie intestinală",
            "Retardul de creștere este o trăsătură specifică colitei ulcerative și nu justifică investigarea pentru boala Crohn",
            "Copilul trebuie investigat pentru boală inflamatorie intestinală, în special boala Crohn, deoarece încetinirea vitezei de creștere poate precede cu mult timp semnele digestive"
          ],
          "correct": 4,
          "explanation": "Retardul de creștere și încetinirea vitezei de creștere pot precede cu mult timp instalarea semnelor digestive, mai ales în boala Crohn, motiv pentru care orice copil cu întârziere de creștere fără altă cauză aparentă trebuie investigat și pentru boală inflamatorie intestinală. Triada clasică a bolii Crohn apare doar la o parte dintre copii, iar markerii inflamatori pot fi normali la diagnostic la o proporție semnificativă a cazurilor.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 846-863"
        },
        {
          "id": "19-3",
          "stem": "Un copil de 10 ani este diagnosticat cu boală Crohn ileo-colonică, formă ușoară-moderată, necomplicată (fără fistule, abcese sau stenoze). Care este terapia de elecție pentru inducerea remisiunii, conform abordării terapeutice utilizate de rutină la copil?",
          "options": [
            "Sulfasalazină orală în doză maximă",
            "Azatioprină în monoterapie, pentru inducerea remisiunii",
            "Corticoterapie orală cu prednison, ca primă linie de tratament",
            "Nutriția enterală exclusivă, administrată timp de 6-8 (maximum 12) săptămâni",
            "Infliximab administrat de la debut, conform schemei „top-down”"
          ],
          "correct": 3,
          "explanation": "Nutriția enterală exclusivă reprezintă terapia de elecție și de primă intenție pentru inducerea remisiunii în boala Crohn necomplicată la copil, fiind cel puțin la fel de eficace ca și corticoizii, dar fără reacțiile adverse ale acestora, cu o rată de vindecare a mucoasei net superioară (74% față de 33%). Corticoterapia se folosește când nutriția enterală exclusivă nu este tolerată/posibilă, iar azatioprina și derivații 5-ASA nu sunt eficienți pentru inducerea remisiunii în boala Crohn.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 846-863"
        },
        {
          "id": "19-4",
          "stem": "O pacientă cu colită ulcerativă cu debut la vârsta de 8 ani, formă pancolonică, se află acum la 10 ani de evoluție a bolii, aflată în remisie clinică. Care este conduita corectă privind supravegherea riscului de cancer colorectal?",
          "options": [
            "Se inițiază monitorizarea colonoscopică la fiecare 1-2 ani, având în vedere durata de evoluție și extinderea pancolonică a bolii",
            "Este suficientă determinarea anuală a calprotectinei fecale, fără a fi necesară colonoscopia",
            "Supravegherea colonoscopică se recomandă a fi începută abia după 20 de ani de evoluție a bolii",
            "Nu este necesară nicio supraveghere suplimentară, întrucât pacienta este asimptomatică și în remisie clinică",
            "Riscul de cancer colorectal la pacienții cu boală inflamatorie intestinală este similar cu cel al populației generale, deci nu se justifică o supraveghere specifică"
          ],
          "correct": 0,
          "explanation": "Incidența cancerului colorectal este de 4-20 de ori mai crescută la pacienții cu boală inflamatorie intestinală, mai ales în formele severe cu pancolită, astfel încât după 8-10 ani de evoluție se impune monitorizarea colonoscopică, la fiecare 1-2 ani. Remisia clinică nu exclude riscul, iar prezența inflamației cronice crește suplimentar acest risc.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 846-863"
        },
        {
          "id": "19-5",
          "stem": "Un copil cu boală Crohn aflat sub terapie de menținere cu infliximab prezintă reapariția simptomelor. Dozarea arată nivel seric scăzut de infliximab și titru crescut de anticorpi împotriva agentului anti-TNFα (AAT). Conform principiilor de optimizare terapeutică bazate pe monitorizarea farmacologică, care este conduita corectă?",
          "options": [
            "Se oprește definitiv orice terapie biologică și se recomandă direct intervenția chirurgicală",
            "Se schimbă agentul anti-TNFα cu un altul din aceeași clasă (de exemplu adalimumab), eventual cu asociere de imunomodulator",
            "Se crește doza de infliximab la 10 mg/kg, păstrând același interval între administrări",
            "Se scurtează intervalul dintre administrările de infliximab, fără a modifica agentul terapeutic",
            "Se continuă schema terapeutică nemodificată, deoarece anticorpii anti-infliximab nu au semnificație clinică"
          ],
          "correct": 1,
          "explanation": "Nivelul scăzut de anti-TNFα asociat cu titru crescut de anticorpi anti-agent (AAT detectabili) indică un nivel insuficient prin imunogenicitate mediată imun, situație în care se recomandă schimbarea cu alt agent anti-TNFα, eventual cu asociere de imunomodulator. Creșterea dozei sau scurtarea intervalului de administrare a aceluiași agent este utilă doar când AAT sunt nedetectabili și mecanismul este farmacocinetic neimun.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 846-863"
        }
      ]
    },
    {
      "num": 20,
      "title": "Abdomenul acut nechirurgical. Durerile abdominale recurente și alte sindroame dureroase recurente la copil",
      "questions": [
        {
          "id": "20-1",
          "stem": "Un nou-născut prezintă distensie abdominală marcată, vărsături bilioase și stare generală alterată. Conform datelor epidemiologice privind durerea abdominală acută la copil, care este cea mai frecventă etiologie la această categorie de vârstă?",
          "options": [
            "Boala Hirschsprung necomplicată",
            "Invaginația intestinală",
            "Volvulusul și enterocolita ulceronecrotică",
            "Hernia încarcerată",
            "Apendicita acută"
          ],
          "correct": 2,
          "explanation": "Textul precizează că la nou-născut etiologia cea mai frecventă a durerii abdominale este reprezentată de volvulus și de enterocolita ulceronecrotică. Hernia încarcerată, invaginația intestinală și complicațiile maladiei Hirschsprung sunt caracteristice până la vârsta de 2 ani, iar apendicita acută devine frecventă după vârsta de 5 ani.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 298-301"
        },
        {
          "id": "20-2",
          "stem": "Un copil de 8 ani acuză durere abdominală cu debut brusc, care precede la scurt timp apariția vărsăturilor. Conform elementelor de anamneză descrise pentru abdomenul acut, acest tipar temporal orientează diagnosticul mai degrabă către:",
          "options": [
            "O gastroenterită acută virală",
            "O afecțiune chirurgicală",
            "Colicile de tip funcțional",
            "Migrena abdominală",
            "Durerea abdominală funcțională"
          ],
          "correct": 1,
          "explanation": "Textul menționează că în afecțiunile chirurgicale durerea abdominală precede de obicei episoadele de vărsătură, în timp ce în afecțiunile medicale vărsăturile preced durerea abdominală. Acest element de anamneză ajută la orientarea diagnosticului diferențial.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 298-301"
        },
        {
          "id": "20-3",
          "stem": "Un sugar de 3 luni este adus la camera de gardă pentru vărsături repetate. Din anamneză reiese caracterul bilios al vărsăturilor. Care este conduita corectă recomandată în această situație?",
          "options": [
            "Monitorizare la domiciliu, fără investigații suplimentare",
            "Investigarea obligatorie pentru o posibilă obstrucție intestinală",
            "Efectuarea de rutină a ecografiei abdominale doar dacă apare febră",
            "Administrarea de antiemetice și reevaluare peste 24 de ore",
            "Tratament antispastic și externare cu recomandări de dietă"
          ],
          "correct": 1,
          "explanation": "Textul precizează explicit că orice vărsătură bilioasă trebuie investigată pentru posibilitatea unei obstrucții intestinale, aceasta fiind un semn de alarmă care nu trebuie ignorat sau tratat simptomatic.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 298-301"
        },
        {
          "id": "20-4",
          "stem": "Un copil de 10 ani se prezintă cu durere în cadranul abdominal inferior drept, suspectă de apendicită acută. Se decide efectuarea unei ecografii abdominale. Conform datelor din text, care sunt valorile aproximative ale sensibilității și specificității acestei investigații pentru diagnosticul apendicitei acute la copil?",
          "options": [
            "Sensibilitate 99% și specificitate 50%",
            "Sensibilitate și specificitate egale, de aproximativ 75%",
            "Sensibilitate 60-70% și specificitate 70-80%",
            "Sensibilitate 90-96% și specificitate 94-98%",
            "Sensibilitate 40-50% și specificitate 90-95%"
          ],
          "correct": 3,
          "explanation": "Textul menționează că sensibilitatea și specificitatea ecografiei abdominale în diagnosticul apendicitei acute la copilul cu durere abdominală sunt de 90-96%, respectiv de 94-98%, ceea ce face din ecografie investigația imagistică de elecție inițială.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 298-301"
        },
        {
          "id": "20-5",
          "stem": "Un copil evaluat în urgență pentru durere abdominală acută prezintă ameliorare simptomatică după administrarea de antialgice, fără modificări ale examenului clinic inițial. Conform criteriilor menționate în text, care este condiția principală pentru a decide externarea la domiciliu?",
          "options": [
            "Diminuarea simptomatologiei dureroase și menținerea funcțiilor vitale și a saturației oxigenului",
            "Obținerea unei ecografii abdominale strict normale",
            "Trecerea unui interval minim de 24 de ore de observație în spital",
            "Absența oricărei sensibilități abdominale la palpare superficială",
            "Normalizarea completă a hemogramei și a probelor inflamatorii"
          ],
          "correct": 0,
          "explanation": "Conform textului, criteriile principale pentru externarea la domiciliu a unui pacient pediatric evaluat în urgență pentru durere abdominală sunt diminuarea simptomatologiei dureroase și menținerea funcțiilor vitale și a saturației oxigenului; dacă starea generală este modificată, pacientul trebuie internat pentru continuarea investigațiilor.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 298-301"
        }
      ]
    },
    {
      "num": 21,
      "title": "Constipația cronică și encoprezisul",
      "questions": [
        {
          "id": "21-1",
          "stem": "Un copil în vârstă de 5 ani este adus la consult pentru tulburări de defecație. Din anamneză reiese: 2 defecații pe săptămână la toaletă, istoric de postură retentivă și cel puțin un episod de incontinență fecală pe săptămână, fără semne de alarmă. Conform actualizării criteriilor Roma pentru constipația funcțională (aliniată ghidurilor ESPGHAN/NASPGHAN), care este durata minimă necesară a simptomelor pentru susținerea diagnosticului?",
          "options": [
            "3 luni",
            "2 luni",
            "2 săptămâni",
            "6 luni",
            "1 lună"
          ],
          "correct": 4,
          "explanation": "Textul precizează că modificarea criteriilor a constat în scăderea duratei simptomelor necesare de la două luni la o lună, pentru a fi în concordanță cu ghidurile ESPGHAN, NASPGHAN și NASPGHAN Nutrition Constipation, deoarece intervalul de două luni din Roma III putea întârzia tratamentul. Diagnosticul de constipație funcțională necesită cel puțin două dintre criteriile Roma, prezente minimum o dată pe săptămână, timp de cel puțin o lună. Acest interval mai scurt este similar cu cel folosit pentru definiția constipației funcționale la nou-născut/sugar.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 250-257"
        },
        {
          "id": "21-2",
          "stem": "Un nou-născut la termen elimină primul scaun meconial la 60 de ore de la naștere, iar ulterior dezvoltă constipație severă cu distensie abdominală importantă. Care este afecțiunea pe care acest tablou clinic trebuie să o ridice în primul rând ca suspiciune diagnostică?",
          "options": [
            "Stenoza anală funcțională",
            "Boala Hirschsprung",
            "Hipotiroidismul congenital",
            "Alergia la proteinele laptelui de vacă",
            "Fibroza chistică"
          ],
          "correct": 1,
          "explanation": "Textul menționează explicit că întârzierea eliminării meconiului peste 48 de ore la un nou-născut la termen crește probabilitatea bolii Hirschsprung și este listată printre semnele de alarmă în constipație. Debutul constipației în prima lună de viață și istoricul familial de boală Hirschsprung sunt alte elemente de alarmă asociate acestei afecțiuni. Celelalte cauze organice enumerate în text nu se asociază caracteristic cu întârzierea pasajului meconial.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 250-257"
        },
        {
          "id": "21-3",
          "stem": "Care dintre următoarele investigații reprezintă, conform textului, standardul de aur pentru diagnosticul bolii Hirschsprung la un copil evaluat pentru constipație intractabilă?",
          "options": [
            "Manometria anorectală",
            "Radiografia abdominală pe gol",
            "Rectosigmoidoscopia/colonoscopia cu biopsie rectală",
            "RMN de coloană lombosacrală",
            "Clisma baritată"
          ],
          "correct": 2,
          "explanation": "Textul afirmă clar că rectosigmoidoscopia/colonoscopia cu biopsie rectală reprezintă standardul de aur pentru diagnosticul bolii Hirschsprung. Manometria anorectală este indicată în principal pentru evaluarea reflexului inhibitor anorectal în constipația intractabilă, iar clisma baritată nu ar trebui utilizată de primă intenție. Radiografia abdominală și RMN-ul au alte indicații (impactare fecală, respectiv suspiciune de patologie medulară).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 250-257"
        },
        {
          "id": "21-4",
          "stem": "Un copil de 6 ani prezintă, de peste o lună, episoade de defecație în locuri inadecvate contextului social. La evaluare nu se decelează istoric de retenție a materiilor fecale, iar o evaluare medicală adecvată exclude o altă patologie subiacentă. Care este diagnosticul cel mai probabil?",
          "options": [
            "Sindrom de intestin iritabil",
            "Boală Hirschsprung cu debut tardiv",
            "Constipație funcțională cu incontinență prin supraplin",
            "Incontinență fecală nonretențională (encoprezis)",
            "Abuz sexual cu manifestări digestive"
          ],
          "correct": 3,
          "explanation": "Criteriile din text pentru incontinența fecală nonretențională impun istoric de cel puțin o lună de defecație în locuri inadecvate contextului social, la un copil peste 4 ani, în absența retenției de materii fecale, simptome ce nu pot fi explicate de altă patologie după evaluare adecvată. Spre deosebire de constipația funcțională, acești copii prezintă evacuare completă a conținutului colonic, nu doar pătarea lenjeriei. Textul menționează abuzul sexual doar ca element de investigat în context, nu ca diagnostic implicit.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 250-257"
        },
        {
          "id": "21-5",
          "stem": "În cadrul dezimpactării fecale la un copil cu constipație cronică și retenție stercorală, care dintre următoarele metode NU este recomandată, din cauza riscului de toxicitate?",
          "options": [
            "Polietilenglicol administrat oral sau pe sondă nazogastrică",
            "Clisme cu soluții cu magneziu",
            "Supozitoare cu glicerină, folosite intermitent la sugar",
            "Ulei mineral administrat intrarectal la un copil peste 1 an",
            "Clisme cu ser fiziologic, de două ori pe zi, timp de trei zile"
          ],
          "correct": 1,
          "explanation": "Textul precizează explicit că nu se recomandă pentru dezimpactare clismele cu soluții de săpun, apă de robinet sau soluții cu magneziu, din cauza potențialului de toxicitate, alături de administrarea orală de hidroxid de magneziu, lactuloză, sorbitol, senna sau bisacodil. În schimb, polietilenglicolul, clismele cu ulei mineral sau ser fiziologic și supozitoarele cu glicerină (folosite intermitent, nu pe termen lung) sunt metode acceptate în protocolul de dezimpactare descris.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 250-257"
        }
      ]
    },
    {
      "num": 22,
      "title": "Icterele la sugar și copil",
      "questions": [
        {
          "id": "22-1",
          "stem": "Un nou-născut la termen este diagnosticat cu atrezie de căi biliare la vârsta de 5 săptămâni și este programat pentru hepatoportoenterostomie (operația Kasai). Care dintre următorii factori are cea mai mare influență asupra ratei de succes (restabilirea fluxului biliar) a intervenției?",
          "options": [
            "Nivelul seric al alfa-1-antitripsinei",
            "Prezența icterului încă de la naștere",
            "Sexul pacientului",
            "Greutatea la naștere",
            "Vârsta la care se efectuează intervenția chirurgicală"
          ],
          "correct": 4,
          "explanation": "Textul precizează că succesul intervenției Kasai depinde de mai mulți factori, cel mai important fiind vârsta la care se intervine: flux biliar restabilit la 80% dintre cazuri când intervenția se realizează sub vârsta de 60 de zile, cu reducerea șansei de reușită la 20% peste vârsta de 90 de zile. De aceea diagnosticul precoce al atreziei biliare este esențial, intervenția trebuind efectuată înainte de 45-60 de zile.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        },
        {
          "id": "22-2",
          "stem": "Un sugar la termen, alimentat exclusiv natural cu tehnică corectă de alăptare (supt frecvent, fără suplimentare cu apă), cu creștere ponderală satisfăcătoare, prezintă icter cu debut după ziua a 5-a de viață, cu valoare maximă în zilele 10-15 (bilirubină indirectă 14 mg/dL). Nu există hemoliză, hepatosplenomegalie sau modificări ale testelor hepatice. Care este diagnosticul cel mai probabil?",
          "options": [
            "Sindrom Crigler-Najjar tip 2",
            "Icter la laptele matern (Breastmilk Jaundice)",
            "Icterul copilului alimentat la sân (Breastfeeding Jaundice)",
            "Hipotiroidism congenital",
            "Atrezie de căi biliare"
          ],
          "correct": 1,
          "explanation": "Diagnosticul icterului la laptele matern este clinic, bazat pe icter prezent după ziua a 5-a de viață, la un sugar alimentat la sân, sănătos, cu creștere ponderală satisfăcătoare, fără hemoliză sau alte cauze patologice de icter. Icterul copilului alimentat la sân (Breastfeeding Jaundice) debutează în schimb în primele 5 zile și este cauzat de o tehnică de alăptare necorespunzătoare, cu aport caloric redus. Atrezia biliară ar asocia hiperbilirubinemie directă și scaune acolice, iar celelalte variante nu se corelează cu tabloul descris.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        },
        {
          "id": "22-3",
          "stem": "Un nou-născut prezintă hiperbilirubinemie indirectă severă, cu creșterea rapidă a bilirubinei (valoare maximă 40 mg/dL) în ciuda fototerapiei corect aplicate. Testele hepatice, inclusiv bilirubina directă, sunt normale, nu există hemoliză, iar histologia hepatică este normală. După administrarea de fenobarbital timp de 48 de ore, nivelul bilirubinei serice rămâne nemodificat. Care este diagnosticul cel mai probabil?",
          "options": [
            "Sindrom Gilbert",
            "Sindrom Crigler-Najjar tip 1",
            "Sindrom Dubin-Johnson",
            "Sindrom Crigler-Najjar tip 2",
            "Icter la laptele matern"
          ],
          "correct": 1,
          "explanation": "În sindromul Crigler-Najjar tip 1, UDP-glucuronil-transferaza este complet absentă, bilirubina serică atinge valori maxime de 15-50 mg/dL, iar răspunsul la fenobarbital este absent. În tipul 2, defectul enzimatic este parțial, bilirubina maximă este mai mică (12-22 mg/dL), iar fenobarbitalul scade nivelul bilirubinei cu 40-80% la 48 de ore. Sindromul Gilbert produce hiperbilirubinemie mult mai moderată (2-6 mg/dL), iar sindromul Dubin-Johnson determină hiperbilirubinemie directă, nu indirectă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        },
        {
          "id": "22-4",
          "stem": "Un sugar cu colestază intrahepatică familială progresivă (PFIC) prezintă icter, hepatomegalie și prurit moderat. Testele biochimice arată GGT serică crescută, de peste 10 ori valoarea normală, colesterol seric normal și nivel biliar scăzut al fosfolipidelor. Care tip de PFIC este cel mai probabil?",
          "options": [
            "PFIC tip 1 (deficit de FIC1)",
            "Deficit de sinteză a acizilor biliari",
            "PFIC tip 2 (deficit de BSEP)",
            "PFIC tip 3 (deficit de MDR3)",
            "Sindrom Alagille"
          ],
          "correct": 3,
          "explanation": "Spre deosebire de PFIC 1 și PFIC 2, la care GGT rămâne normală, în PFIC 3 (deficit de MDR3) GGT este crescută, frecvent de peste 10 ori valoarea normală, iar caracteristica biochimică este nivelul biliar scăzut al fosfolipidelor (fosfatidilcolina), cu nivel biliar normal al acizilor biliari. Acest profil biochimic permite diagnosticul diferențial între formele de PFIC.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        },
        {
          "id": "22-5",
          "stem": "Un sugar de 3 luni prezintă colestază cronică cu prurit, facies particular (frunte largă, hipertelorism ușor, bărbie ascuțită), suflu sistolic prin stenoză periferică a arterei pulmonare și embriotoxon posterior la examenul oftalmologic. Biopsia hepatică evidențiază paucitatea duetelor biliare intrahepatice. Care este diagnosticul cel mai probabil?",
          "options": [
            "Colangită sclerozantă neonatală",
            "Atrezie de căi biliare",
            "Sindrom Alagille",
            "Fibroză chistică",
            "Colestaza intrahepatică familială progresivă tip 1"
          ],
          "correct": 2,
          "explanation": "Diagnosticul sindromului Alagille se bazează pe demonstrarea paucității duetelor biliare intrahepatice la biopsia hepatică, asociată cu cel puțin 3 din cele 5 elemente majore: colestaza cronică, faciesul caracteristic, stenoza periferică a arterelor pulmonare (cea mai frecventă manifestare cardiacă, 75%), vertebra în aripi de fluture și embriotoxonul posterior. Pacientul descris întrunește 4 din aceste criterii, susținând diagnosticul de sindrom Alagille și nu atrezia biliară sau alte cauze de colestază.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        }
      ]
    },
    {
      "num": 23,
      "title": "Hepatitele cronice și ciroza hepatică",
      "questions": [
        {
          "id": "23-1",
          "stem": "Un copil cu hepatopatie cronică prezintă transaminaze crescute. Raportul AST/ALT (indicele de Ritis) calculat este de 2,5. Care este interpretarea cea mai probabilă a acestei valori?",
          "options": [
            "Sugerează o etiologie metabolică a afectării hepatice",
            "Sugerează o etiologie virală acută a afectării hepatice",
            "Este caracteristică hepatitei autoimune de tip 1",
            "Exclude diagnosticul de ciroză hepatică",
            "Indică un răspuns favorabil la terapia cu interferon"
          ],
          "correct": 0,
          "explanation": "Raportul AST/ALT (indicele de Ritis) este un parametru orientativ asupra etiologiei afectării hepatice: valori peste 2 sugerează o afecțiune metabolică, valori sub 1 sunt caracteristice hepatitelor virale, iar raportul crește la peste 1 în ciroza hepatică. O valoare de 2,5 orientează deci către o cauză metabolică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 278-291"
        },
        {
          "id": "23-2",
          "stem": "Un copil cu icter colestatic și timp de protrombină prelungit primește vitamină K parenteral, iar timpul de protrombină se corectează prompt. Acest tip de răspuns terapeutic este caracteristic pentru:",
          "options": [
            "Disfuncție hepatocitară severă, necorectabilă farmacologic",
            "Colestază cu deficit al factorilor de coagulare vitamina K-dependenți",
            "Hepatita autoimună de tip 2",
            "Ciroza hepatică decompensată, clasa Child-Pugh C",
            "Macro-aspartat transaminaza (macro-AST)"
          ],
          "correct": 1,
          "explanation": "Timpul de protrombină/INR se modifică semnificativ în disfuncțiile severe ale hepatocitului și nu se corectează la administrarea de vitamină K în această situație. În schimb, corecția disfuncției de coagulare prin administrarea vitaminei K este caracteristică colestazei, în care deficitul de factori II, VII, IX, X (vitamina K-dependenți) este consecința malabsorbției, nu a insuficienței de sinteză hepatocitară.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 278-291"
        },
        {
          "id": "23-3",
          "stem": "Un copil cu ciroză hepatică prezintă la evaluare: encefalopatie hepatică grad 1-2, ascită redusă, bilirubină serică 2,5 mg/dL, albumină serică 3 g/dL și timp de protrombină moderat prelungit (categoria intermediară a scorului). Fiecare dintre aceste criterii se încadrează în categoria de 2 puncte a scorului Child-Turcotte-Pugh. Care este clasa de severitate corespunzătoare unui scor total de 10 puncte?",
          "options": [
            "Clasa A Child (5-6 puncte)",
            "Clasa B Child (7-9 puncte)",
            "Clasa D Child (peste 15 puncte)",
            "Nu poate fi încadrat în sistemul Child-Pugh, este necesar scorul MELD",
            "Clasa C Child (10-15 puncte)"
          ],
          "correct": 4,
          "explanation": "Scorul Child-Turcotte-Pugh însumează punctajul (1-3 puncte) pentru encefalopatie, ascită, bilirubină, albumină și timp de protrombină/INR. Clasificarea în clase de severitate este: Clasa A = 5-6 puncte, Clasa B = 7-9 puncte, Clasa C = 10-15 puncte. Un scor total de 10 puncte încadrează pacientul în Clasa C, cea mai severă formă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 293-295"
        },
        {
          "id": "23-4",
          "stem": "O adolescentă se prezintă cu debut acut și sever al unei hepatite cronice, cu recidive frecvente. Testele serologice evidențiază anticorpi anti-LKM1 pozitivi, în timp ce ANA și ASMA sunt negativi. Care este tipul de hepatită autoimună cel mai probabil?",
          "options": [
            "Hepatita cronică virală B",
            "Boala Wilson",
            "Hepatita autoimună de tip 1",
            "Hepatita autoimună de tip 2",
            "Steatohepatita nonalcoolică (NASH)"
          ],
          "correct": 3,
          "explanation": "Hepatita autoimună de tip 2 se caracterizează serologic prin prezența anticorpilor antimicrozomali anti-LKM1, iar tabloul clinic și leziunile histopatologice sunt de afecțiune acută și severă, cu recidive frecvente. Hepatita autoimună de tip 1 este definită de ANA și/sau ASMA pozitivi, are debut la adolescență și răspuns terapeutic în general bun.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 278-291"
        },
        {
          "id": "23-5",
          "stem": "La un copil cu hepatită cronică virală B se efectuează elastografie hepatică tranzitorie (FibroScan), obținându-se o valoare a rigidității hepatice de 13 kPa. Această valoare este sugestivă pentru:",
          "options": [
            "Fibroză absentă (F0)",
            "Rezultat neinterpretabil, este necesară biopsia hepatică",
            "Fibroză semnificativă, fără ciroză",
            "Fibroză portală fără septuri (F1)",
            "Ciroză hepatică"
          ],
          "correct": 4,
          "explanation": "Prin elastografia hepatică tranzitorie (FibroScan), valoarea-limită validată pentru fibroza semnificativă este de 7,1 kPa, iar cea pentru ciroză este de 12,5 kPa. O valoare de 13 kPa depășește pragul de ciroză, fiind astfel sugestivă pentru acest diagnostic.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 278-291"
        }
      ]
    },
    {
      "num": 24,
      "title": "Hemoragiile digestive la nou-născut și copil",
      "questions": [
        {
          "id": "24-1",
          "stem": "Un nou-născut la termen, stabil hemodinamic, prezintă în a doua zi de viață vărsături cu aspect de „zaț de cafea”. Mama alăptează și prezintă ragade mamelonare. Care este testul cel mai indicat pentru a diferenția sângele matern înghițit de sângele propriu al nou-născutului?",
          "options": [
            "Dozarea bilirubinei indirecte",
            "Testul Gregersen/hem-test din scaun",
            "Timpul de protrombină",
            "Testul Apt-Downey",
            "Frotiul de sânge periferic"
          ],
          "correct": 3,
          "explanation": "Testul Apt-Downey constă în adăugarea de apă sterilă și NaOH 1% peste vărsătura cu sânge. Dacă sângele este de proveniență maternă rezultă o culoare galbenă, iar dacă provine de la nou-născut culoarea rămâne neschimbată, deoarece hemoglobina fetală este alcalinorezistentă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 238-248"
        },
        {
          "id": "24-2",
          "stem": "Un copil de 2 ani se prezintă cu un episod de hematochezie masivă, nedureroasă, cu debut brusc. Se suspectează diverticulul Meckel drept sursă a sângerării, cauzată de ulcerația peptică la joncțiunea dintre mucoasa ectopică și ileonul normal. Care este investigația de elecție pentru confirmarea diagnosticului?",
          "options": [
            "Scintigrafia cu Techneţiu-99m",
            "Radiografia abdominală pe gol",
            "Ecografia abdominală Doppler",
            "Colonoscopia cu prelevare de biopsii",
            "Clisma baritată"
          ],
          "correct": 0,
          "explanation": "Diagnosticul diverticulului Meckel se stabilește pe baza scintigrafiei cu Tc99m, care evidențiază mucoasa ectopică (de obicei gastrică), prezentă în peste 80% din cazuri și responsabilă de ulcerația peptică ce determină sângerarea.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 238-248"
        },
        {
          "id": "24-3",
          "stem": "Un copil de 4 ani, cu istoric recent de diaree cu sânge, se prezintă cu durere abdominală severă, difuză, oligurie și paloare. Analizele evidențiază anemie hemolitică microangiopatică și trombocitopenie, iar coprocultura este pozitivă pentru un serotip enterohemoragic de E. coli. Care este diagnosticul cel mai probabil?",
          "options": [
            "Boală inflamatorie intestinală",
            "Sindrom hemolitic-uremic",
            "Purpură Henoch-Schönlein",
            "Colită pseudomembranoasă",
            "Invaginație intestinală"
          ],
          "correct": 1,
          "explanation": "Triada diaree sangvinolentă (asociată E. coli producătoare de verotoxină/toxină Shiga), anemie hemolitică microangiopatică și trombocitopenie este caracteristică sindromului hemolitic-uremic, care se poate complica cu invaginație, pancreatită sau perforație intestinală.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 238-248"
        },
        {
          "id": "24-4",
          "stem": "În cadrul managementului inițial al unui copil cu hemoragie digestivă masivă și instabilitate hemodinamică, la ce valoare a numărului de trombocite este indicată administrarea de masă trombocitară?",
          "options": [
            "Sub 100.000/mm3",
            "Sub 50.000/mm3",
            "Sub 150.000/mm3",
            "Sub 20.000/mm3",
            "Indiferent de valoare, dacă hemoragia este activă"
          ],
          "correct": 1,
          "explanation": "Conform managementului terapeutic descris, masa trombocitară se administrează doar dacă numărul trombocitelor este sub 50.000/mm3, alături de fluide izotone, produse de sânge, vitamină K administrată empiric și, la nevoie, plasmă proaspătă congelată.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 238-248"
        },
        {
          "id": "24-5",
          "stem": "La un copil cu suspiciune de hemoragie digestivă superioară se montează sondă nazogastrică și se efectuează lavaj gastric, care evidențiază conținut clar, fără urme de sânge proaspăt sau aspect de „zaț de cafea”. Ce concluzie susține acest rezultat?",
          "options": [
            "Impune repetarea imediată a lavajului cu ser rece",
            "Confirmă o sursă hemoragică activă situată deasupra ligamentului Treitz",
            "Indică prezența varicelor esofagiene",
            "Confirmă o sursă hemoragică oprită, situată deasupra ligamentului Treitz",
            "Exclude o sursă hemoragică situată deasupra ligamentului Treitz"
          ],
          "correct": 4,
          "explanation": "Un lavaj gastric clar, fără sânge proaspăt sau aspect de „zaț de cafea”, exclude o sursă hemoragică deasupra ligamentului Treitz; prezența „zațului de cafea” sugerează o sursă superioară cu sângerare probabil oprită, iar sângele proaspăt indică sângerare activă deasupra ligamentului Treitz.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 238-248"
        }
      ]
    },
    {
      "num": 25,
      "title": "Sindroamele de hipertensiune portală. Colestaza neonatală",
      "questions": [
        {
          "id": "25-1",
          "stem": "Un copil de 2 ani este investigat pentru splenomegalie izolată, descoperită întâmplător la un examen clinic de rutină. Ficatul are dimensiuni normale, iar transaminazele, bilirubina și timpul de protrombină sunt normale. Din antecedente se reține un cateterism al venei ombilicale în perioada neonatală. Care este cea mai probabilă cauză a hipertensiunii portale la acest copil?",
          "options": [
            "Scleroza hepatoportală",
            "Sindromul Budd-Chiari",
            "Fibroza hepatică congenitală",
            "Cavernomul de venă portă (transformarea cavernomatoasă a venei porte)",
            "Ciroza hepatică postnecrotică"
          ],
          "correct": 3,
          "explanation": "Obstrucția venei porte (bloc presinusoidal/prehepatic) duce la transformarea cavernomatoasă a venei porte, care se manifestă clinic prin splenomegalie izolată, fără hepatomegalie, cu teste hepatice normale, diagnostic confirmat ecografic. Aproape 40% dintre cazuri au antecedente de cateterism venos ombilical, iar semnele de hipertensiune portală apar precoce, complicându-se frecvent cu hemoragie digestivă înaintea vârstei de 3 ani. Fibroza hepatică congenitală și scleroza hepatoportală pot avea și ele teste hepatice normale, dar nu se asociază tipic cu cateterismul ombilical.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 951-952"
        },
        {
          "id": "25-2",
          "stem": "Un copil cu hepatopatie cronică dezvoltă ascită. Se efectuează paracenteză diagnostică, iar din analiza lichidului se calculează gradientul albuminei ser-lichid de ascită (SAAG). Care valoare a SAAG susține puternic (sensibilitate 97%) diagnosticul de ascită secundară hipertensiunii portale?",
          "options": [
            "SAAG între 0,5-1,0 g/dL, indiferent de proteinele din lichid",
            "SAAG egal cu 0",
            "SAAG sub 1,1 g/dL",
            "SAAG nu are valoare diagnostică în ascita copilului",
            "SAAG peste 1,1 g/dL"
          ],
          "correct": 4,
          "explanation": "Gradientul albuminei ser-lichid de ascită (SAAG) este util pentru diferențierea ascitei prin hipertensiune portală de alte cauze de ascită. O valoare SAAG > 1,1 g/dL susține puternic, cu o sensibilitate de 97%, diagnosticul de hipertensiune portală, alături de alți parametri precum concentrația scăzută de proteine în lichidul de ascită.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 951-952"
        },
        {
          "id": "25-3",
          "stem": "Un sugar de 5 săptămâni este diagnosticat cu atrezie de căi biliare, confirmată prin colangiografie intraoperatorie. Pentru a obține cele mai mari șanse de restabilire a fluxului biliar prin hepatoportoenterostomie (operația Kasai), intervenția chirurgicală trebuie efectuată, ideal, înainte de:",
          "options": [
            "120 de zile de viață",
            "1 an de viață",
            "6 luni de viață",
            "60 de zile de viață",
            "30 de zile de viață"
          ],
          "correct": 3,
          "explanation": "Succesul intervenției Kasai depinde în principal de vârsta la care se intervine chirurgical: fluxul biliar este restabilit la 80% dintre cazuri când intervenția se realizează sub vârsta de 60 de zile, șansa de reușită scăzând la doar 20% la o vârstă mai mare de 90 de zile. De aceea diagnosticul precoce al atreziei biliare este esențial, pentru a permite efectuarea intervenției înaintea vârstei de 45-60 de zile.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        },
        {
          "id": "25-4",
          "stem": "Un sugar de 6 săptămâni cu icter colestatic, scaune parțial decolorate și urini hipercrome este evaluat pentru colestază neonatală. Ecografia abdominală evidențiază o veziculă biliară de dimensiuni reduse, cu pereți neregulați, și o zonă triunghiulară hiperecogenă situată anterior de bifurcația ramurilor venei porte („triangular cord”). Care este diagnosticul cel mai probabil sugerat de acest aspect ecografic?",
          "options": [
            "Chistul de coledoc",
            "Atrezia de căi biliare",
            "Sindromul Alagille",
            "Cavernomul de venă portă",
            "Hepatita neonatală idiopatică"
          ],
          "correct": 1,
          "explanation": "Ecografia abdominală în atrezia de căi biliare poate evidenția o veziculă biliară anormală, cu pereți neregulați sau absentă, și semnul „triangular cord” - zona triunghiulară hiperecogenă situată anterior de bifurcația ramurilor venei porte - aspecte sugestive pentru acest diagnostic. Ecografia nu este însă suficientă singură pentru confirmare, fiind necesare investigații suplimentare (scintigrafie hepatobiliară, biopsie hepatică).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        },
        {
          "id": "25-5",
          "stem": "Un sugar de 4 luni prezintă colestază progresivă cu prurit sever, hepatosplenomegalie, diaree cronică și hipotrofie staturo-ponderală, fără xantoame. Acizii biliari serici sunt marcat crescuți, dar gama-glutamiltranspeptidaza (GGT) este normală. Care este cel mai probabil diagnostic?",
          "options": [
            "Atrezia de căi biliare",
            "Colestaza intrahepatică familială progresivă tip 1 (boala Byler)",
            "Sindromul Alagille",
            "Colestaza asociată nutriției parenterale totale",
            "Colestaza intrahepatică familială progresivă tip 3"
          ],
          "correct": 1,
          "explanation": "PFIC tip 1 (deficit de FIC1/ATP8B1) se manifestă prin colestază progresivă cu prurit sever, diaree, malabsorbție și hipotrofie staturo-ponderală, fără xantoame, cu acizi biliari serici crescuți dar GGT normală - spre deosebire de PFIC tip 3, sindromul Alagille sau atrezia de căi biliare, în care GGT este caracteristic crescută. Această disociere (GGT normală în prezența colestazei severe) este un element cheie de diagnostic diferențial în PFIC tip 1 și tip 2.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        }
      ]
    },
    {
      "num": 26,
      "title": "Insuficiența pancreatică exocrină. Fibroza chistică",
      "questions": [
        {
          "id": "26-1",
          "stem": "Un copil de 10 ani este adus la camera de gardă pentru durere abdominală cu debut brusc, cu iradiere dorsală, însoțită de vărsături. Lipaza serică este de 2 ori mai mare decât limita superioară a normalului, iar ecografia abdominală transabdominală nu evidențiază modificări sugestive. Conform criteriilor de diagnostic pozitiv al pancreatitei acute, care este afirmația corectă?",
          "options": [
            "Diagnosticul de pancreatită acută este confirmat, fiind suficiente durerea caracteristică și creșterea lipazei serice, indiferent de valoarea acesteia",
            "Sunt îndeplinite deja 2 din cele 3 criterii de diagnostic (durerea și enzimele pancreatice), astfel diagnosticul este confirmat",
            "Este îndeplinit un singur criteriu (durerea abdominală caracteristică), deoarece lipaza nu atinge pragul de minimum 3 ori valoarea normală, iar imagistica este negativă, fiind necesare investigații suplimentare pentru confirmarea diagnosticului",
            "Diagnosticul este exclus, deoarece ecografia abdominală este investigația standard de aur, iar rezultatul ei negativ infirmă pancreatita acută",
            "Este necesară doar repetarea dozării lipazei peste 24 de ore, fiind singurul criteriu validat pentru diagnostic"
          ],
          "correct": 2,
          "explanation": "Diagnosticul pozitiv de pancreatită acută necesită întrunirea a cel puțin 2 din 3 criterii: durere abdominală caracteristică, amilază și/sau lipază serică de cel puțin 3 ori limita superioară a normalului și dovezi imagistice de pancreatită. În acest caz este îndeplinit doar criteriul clinic (durerea), lipaza nu atinge pragul de 3x, iar ecografia este negativă, deci sunt necesare investigații suplimentare (de exemplu CT abdominal cu contrast) pentru confirmarea diagnosticului.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 198-207"
        },
        {
          "id": "26-2",
          "stem": "În managementul analgeziei la un copil cu pancreatită acută severă, care dintre următoarele substanțe trebuie evitată, deoarece determină creșterea presiunii la nivelul sfincterului Oddi și poate agrava evoluția bolii?",
          "options": [
            "Acetaminofen",
            "Morfină",
            "Fentanil",
            "Ketorolac",
            "Meperidină"
          ],
          "correct": 1,
          "explanation": "Textul precizează explicit că se evită utilizarea morfinei ca analgezic în pancreatita acută, deoarece s-a demonstrat că aceasta determină creșterea presiunii la nivelul sfincterului Oddi și poate agrava cursul bolii. Analgezia se realizează, în schimb, prin administrare intravenoasă de acetaminofen, meperidină sau petidină, cu ajustarea dozei în funcție de necesar.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 198-207"
        },
        {
          "id": "26-3",
          "stem": "Un adolescent cu pancreatită cronică și insuficiență pancreatică exocrină este tratat cu supliment enzimatic pancreatic (extract porcin – pancreatină). Care este principalul risc asociat administrării unor doze care depășesc 10000 UI lipază/kg/zi?",
          "options": [
            "Precipitarea unui nou episod de pancreatită acută prin hiperstimulare secretorie",
            "Nefrocalcinoză secundară hipercalcemiei induse enzimatic",
            "Agravarea diabetului zaharat tip 3c prin efect toxic pancreatic direct",
            "Hepatotoxicitate severă, cu insuficiență hepatică acută",
            "Stenoze/stricturi colonice, prin hipertrofia muscularei colonice"
          ],
          "correct": 4,
          "explanation": "Textul atrage atenția că dozele de enzime pancreatice care depășesc 10000 UI de lipază/kg/zi nu sunt recomandate, existând riscul producerii de stenoze/stricturi colonice prin hipertrofia muscularei colonice, aspect discutat în special în contextul terapiei substitutive din fibroza chistică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 198-207"
        },
        {
          "id": "26-4",
          "stem": "Care este particularitatea insuficienței pancreatice endocrine la copiii cu pancreatită cronică calcifiantă, conform datelor prezentate în text?",
          "options": [
            "Diabetul zaharat apare rar, iar atunci când apare, riscul de episoade hipoglicemice este scăzut",
            "Toleranța la glucoză rămâne normală indiferent de gradul de fibroză și calcificare pancreatică",
            "Insuficiența endocrină precede întotdeauna instalarea insuficienței exocrine",
            "Diabetul zaharat de tip 1, prin mecanism autoimun, este forma cea mai frecvent întâlnită",
            "50-70% dintre acești pacienți dezvoltă diabet zaharat de tip 3c, cu risc crescut de episoade hipoglicemice"
          ],
          "correct": 4,
          "explanation": "Textul arată că, în cazul pancreatitei cronice calcifiante, în 50-70% din cazuri pacienții dezvoltă diabet zaharat de tip 3c, ca urmare a fibrozei și calcificărilor pancreatice progresive, iar acești pacienți au un risc crescut de episoade hipoglicemice.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 198-207"
        },
        {
          "id": "26-5",
          "stem": "Un sugar prezintă falimentul creșterii, steatoree cu scaune voluminoase și urât mirositoare, neutropenie intermitentă documentată prin hemoleucograme repetate și anomalii scheletice (statură mică, distrofie toracică). Testarea genetică pentru mutații CFTR este negativă. Care este diagnosticul cel mai probabil?",
          "options": [
            "Fibroza chistică, cu test genetic fals negativ",
            "Anemia Fanconi",
            "Sindromul Pearson",
            "Sindromul Shwachman-Diamond",
            "Diskeratoza congenitală"
          ],
          "correct": 3,
          "explanation": "Sindromul Shwachman-Diamond este a doua cauză genetică de insuficiență pancreatică exocrină după fibroza chistică și se caracterizează prin triada pancitopenie (mai ales neutropenie intermitentă), insuficiență pancreatică exocrină (steatoree) și anomalii osoase. Spre deosebire de fibroza chistică (care nu asociază insuficiență medulară) și de anemia Fanconi (care nu asociază insuficiență pancreatică exocrină), tabloul descris este tipic pentru SDS; testul CFTR negativ exclude practic fibroza chistică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 198-207"
        }
      ]
    },
    {
      "num": 27,
      "title": "Miocarditele. Cardiomiopatiile primare și secundare",
      "questions": [
        {
          "id": "27-1",
          "stem": "Un copil de 8 ani se prezintă cu dispnee și fatigabilitate cu debut în urmă cu 10 zile, precedate de un episod de infecție respiratorie acută. Ecocardiografia relevă disfuncție sistolică a ventriculului stâng, cu dilatare ventriculară stângă minimă. Care dintre următoarele elemente pledează cel mai mult pentru diagnosticul de miocardită acută, în defavoarea unei cardiomiopatii dilatative idiopatice?",
          "options": [
            "Debutul recent al simptomelor (sub două săptămâni), istoricul infecțios recent și absența dilatării semnificative a ventriculului stâng",
            "Prezența trombilor intracavitari la ecocardiografie",
            "Istoric familial de cardiomiopatie dilatativă la rude de gradul I",
            "Dilatarea severă și cronică a ventriculului stâng",
            "Fracția de ejecție a ventriculului stâng sub 30%"
          ],
          "correct": 0,
          "explanation": "Textul precizează că debutul recent al simptomatologiei (sub două săptămâni), istoricul recent de infecție virală și absența dilatării semnificative a ventriculului stâng pledează pentru diagnosticul de miocardită, diagnosticul diferențial cu CMD idiopatică fiind adesea dificil. Dilatarea cronică severă, trombii intracavitari sau istoricul familial sunt mai degrabă sugestive pentru o cardiomiopatie dilatativă stabilită.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 433-438"
        },
        {
          "id": "27-2",
          "stem": "Un sugar dezvoltă brusc, la câteva zile după o infecție virală, semne de debit cardiac scăzut, hipotensiune arterială și acidoză, cu evoluție rapidă spre șoc cardiogen, tablou sugestiv pentru miocardită fulminantă. Care este afirmația corectă privind prognosticul acestei forme, în condițiile unui management agresiv, inclusiv suport mecanic ECMO?",
          "options": [
            "Deși prezentarea inițială este dramatică, cazurile de miocardită fulminantă pot evolua cu recuperare completă și risc scăzut de a dezvolta cardiomiopatie dilatativă",
            "Miocardita fulminantă nu necesită terapie agresivă, evoluând spontan favorabil în majoritatea cazurilor",
            "Suportul ECMO este contraindicat în miocardita fulminantă din cauza riscului aritmic crescut",
            "Miocardita fulminantă asociază un risc mai mare de progresie spre cardiomiopatie dilatativă comparativ cu miocardita acută",
            "Miocardita fulminantă are întotdeauna un prognostic rezervat, majoritatea cazurilor decedând în ciuda suportului mecanic"
          ],
          "correct": 0,
          "explanation": "Textul arată că, în ciuda tabloului dramatic, în cazul unui management agresiv care implică suport mecanic ECMO, cazurile de miocardită fulminantă pot evolua cu recuperare completă și risc scăzut de a dezvolta CMD, spre deosebire de miocardita acută, care asociază un prognostic pe termen lung mai sever, cu progresie mai frecventă spre CMD.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 433-438"
        },
        {
          "id": "27-3",
          "stem": "La biopsia endomiocardică a unui copil cu suspiciune clinică de miocardită se descrie un infiltrat inflamator limfocitar la nivel miocardic, fără evidențierea necrozei sau a degenerării miocitare asociate. Conform criteriilor histopatologice Dallas, acest aspect corespunde:",
          "options": [
            "Fibroelastoză endomiocardică",
            "Miocardită acută",
            "Aspect histologic normal, care exclude diagnosticul de miocardită",
            "Miocardită cronică/CMD cu inflamație",
            "Miocardită borderline"
          ],
          "correct": 4,
          "explanation": "Conform criteriilor Dallas, miocardita acută presupune infiltrat inflamator asociat cu necroză miocitară și degenerarea miocitelor subiacente, în timp ce miocardita borderline este definită ca infiltrat inflamator limfocitar fără distrucție miocardică și necroză, exact aspectul descris în vinietă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 433-438"
        },
        {
          "id": "27-4",
          "stem": "Un adolescent cu cardiomiopatie hipertrofică obstructivă, aflat sub tratament cu propranolol în doză maximă tolerată, prezintă în continuare episoade sincopale, iar examinarea Doppler evidențiază un gradient pe tractul de ejecție al ventriculului stâng de 65 mmHg în repaus. Care este conduita terapeutică indicată în această situație?",
          "options": [
            "Creșterea dozei de digoxin pentru ameliorarea funcției sistolice",
            "Continuarea aceleiași scheme terapeutice, fără modificări, cu reevaluare la 6 luni",
            "Administrarea de isoproterenol intravenos pentru susținerea debitului cardiac",
            "Asocierea diureticelor în doze mari pentru reducerea presarcinii",
            "Tratament chirurgical prin miectomie septală"
          ],
          "correct": 4,
          "explanation": "Textul precizează că pacienților cu CMH obstructivă simptomatică, cu sincope și fără răspuns la terapia beta-blocantă, în prezența unui gradient pe tractul de ejecție al VS ≥50 mmHg în repaus sau provocat, le este recomandat tratamentul chirurgical (miectomia septală). Digitalicele, diureticele în doze mari și isoproterenolul sunt de altfel contraindicate/evitate în CMH obstructivă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 411-417"
        },
        {
          "id": "27-5",
          "stem": "La un copil diagnosticat cu cardiomiopatie dilatativă, care dintre următorii parametri se asociază cu un prognostic nefavorabil?",
          "options": [
            "Clasa funcțională NYHA/Ross I",
            "Insuficiență mitrală ușoară și staționară",
            "Funcție ventriculară dreaptă normală, fără dilatare",
            "Fracția de ejecție a ventriculului stâng sub 30%",
            "Absența tulburărilor de ritm și de conducere"
          ],
          "correct": 3,
          "explanation": "Printre factorii cu impact nefavorabil asupra prognosticului în CMD, textul menționează clasa de insuficiență cardiacă NYHA/Ross III-IV, fibroelastoza endomiocardică, insuficiența mitrală progresivă, dilatarea și disfuncția ventriculară dreaptă, tulburările de ritm și conducere, precum și o fracție de ejecție a VS sub 30%. Celelalte variante descriu, dimpotrivă, elemente favorabile.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 411-417"
        }
      ]
    },
    {
      "num": 28,
      "title": "Pericarditele. Endocardita infecțioasă",
      "questions": [
        {
          "id": "28-1",
          "stem": "Un copil cunoscut cu pericardită acută dezvoltă brusc zgomote cardiace asurzite, hipotensiune arterială și distensia venelor jugulare, tabloul fiind sugestiv pentru tamponadă cardiacă. Care este scăderea minimă a tensiunii arteriale sistolice în timpul inspirului care definește pulsul paradoxal caracteristic acestei complicații?",
          "options": [
            "Mai mult de 25 mmHg",
            "Mai mult de 5 mmHg",
            "Mai mult de 15 mmHg",
            "Mai mult de 20 mmHg",
            "Mai mult de 10 mmHg"
          ],
          "correct": 4,
          "explanation": "Textul precizează că, în tamponada cardiacă, alături de triada Beck (zgomote cardiace asurzite, hipotensiune, presiune venoasă centrală crescută), apare pulsul paradoxal, definit ca scăderea tensiunii arteriale sistolice cu mai mult de 10 mmHg în timpul inspirului. Tamponada cardiacă reprezintă o urgență majoră ce necesită măsuri terapeutice prompte.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 446-449"
        },
        {
          "id": "28-2",
          "stem": "Un sugar cu pneumonie severă dezvoltă durere toracică cu debut brusc, febră înaltă, tahicardie și tahipnee; ecocardiografia evidențiază un revărsat pericardic important, iar analiza lichidului pericardic sugerează etiologie bacteriană. Care este conduita terapeutică optimă în această situație?",
          "options": [
            "Doar monitorizare clinică, întrucât pericardita purulentă are evoluție spontan favorabilă la copil",
            "Antibioterapie adecvată asociată evacuării colecției pericardice, cu durată de minimum 4-6 săptămâni",
            "Antibioterapie empirică cu spectru larg timp de 7 zile, fără evacuarea colecției",
            "Antiinflamatoare nesteroidiene în monoterapie, cu reevaluare ecocardiografică la o săptămână",
            "Corticoterapie sistemică, dată fiind evoluția potențial fulminantă"
          ],
          "correct": 1,
          "explanation": "În pericardita purulentă, tratamentul se bazează pe identificarea agentului etiologic (hemoculturi, analiza lichidului pericardic), inițierea antibioterapiei adecvate asociată evacuării colecției pericardice reprezentând măsurile terapeutice optime. Durata antibioterapiei se recomandă a fi de cel puțin 4-6 săptămâni, evitându-se antibioterapia cu spectru larg nedirijată etiologic.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 446-449"
        },
        {
          "id": "28-3",
          "stem": "Un copil provenit dintr-o zonă endemică prezintă febră joasă, transpirații nocturne, scădere ponderală și dispnee; lichidul pericardic obținut prin pericardiocenteză este serosangvinolent, cu conținut proteic crescut și predominanță limfocitară, ridicând suspiciunea de pericardită tuberculoasă. Ce valoare a adenozin-deaminazei (ADA) în lichidul pericardic susține acest diagnostic?",
          "options": [
            "Peste 100 U/L",
            "Peste 10 U/L",
            "Peste 20 U/L",
            "Peste 50 U/L",
            "Peste 30 U/L"
          ],
          "correct": 3,
          "explanation": "Textul menționează că determinarea adenozin deaminazei din lichidul pericardic are valoare diagnostică pentru pericardita tuberculoasă la un nivel de peste 50 U/L, aceasta fiind utilă mai ales pentru orientarea rapidă a diagnosticului, întrucât izolarea bacililor tuberculoși în culturi poate necesita până la șase săptămâni.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 446-449"
        },
        {
          "id": "28-4",
          "stem": "Un copil cu suspiciune de endocardită infecțioasă are două hemoculturi separate pozitive cu Streptococcus viridans și, la ecocardiografie, se evidențiază o vegetație mobilă la nivelul valvei mitrale, cu regurgitare valvulară nou apărută. Conform criteriilor Duke modificate, cum se interpretează acest tablou?",
          "options": [
            "Diagnostic exclus, în absența criteriilor minore asociate",
            "Diagnostic cert de endocardită infecțioasă, fiind îndeplinite două criterii clinice majore",
            "Diagnostic incert, impunând repetarea hemoculturilor înainte de orice concluzie",
            "Diagnostic incert, fiind necesare minimum cinci criterii minore suplimentare",
            "Diagnostic posibil, necesitând obligatoriu confirmare prin biopsie endocardică"
          ],
          "correct": 1,
          "explanation": "Hemoculturile pozitive cu germen etiologic specific (Streptococcus viridans) și evidența ecocardiografică a implicării endocardice (vegetație, regurgitare valvulară nouă) reprezintă fiecare câte un criteriu clinic major. Diagnosticul pozitiv de endocardită infecțioasă este susținut, printre altele, de îndeplinirea a două criterii clinice majore.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 439-445"
        },
        {
          "id": "28-5",
          "stem": "Un copil aflat sub tratament antibiotic pentru endocardită infecțioasă dezvoltă embolii pulmonare recurente, iar ecocardiografia evidențiază o vegetație la nivelul valvei tricuspide cu diametrul de 25 mm. Care este conduita terapeutică indicată în această situație?",
          "options": [
            "Pericardiocenteză evacuatorie de urgență",
            "Continuarea antibioterapiei, fără altă intervenție, întrucât vegetațiile tricuspidiene regresează spontan",
            "Tratament chirurgical, cu înlăturarea vegetației",
            "Anticoagulare terapeutică, fără modificarea antibioterapiei",
            "Schimbarea empirică a antibioticului, fără altă măsură suplimentară"
          ],
          "correct": 2,
          "explanation": "Printre indicațiile tratamentului chirurgical în endocardita infecțioasă se numără vegetațiile de valvă tricuspidă persistente, cu dimensiuni ce depășesc 20 mm, apărute după embolii pulmonare recurente, situație în care se practică înlăturarea vegetației. Anticoagularea sau simpla continuare a antibioterapiei nu sunt suficiente în acest context de risc embolic important.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 439-445"
        }
      ]
    },
    {
      "num": 29,
      "title": "Tulburări de ritm și conducere",
      "questions": [
        {
          "id": "29-1",
          "stem": "Un copil de 11 ani, cunoscut cu sindrom WPW (cale accesorie manifestă, cu antecedente de crize de tahicardie), se prezintă cu palpitații; traseul EKG arată o tahiaritmie neregulată, cu complex QRS larg și frecvență ventriculară medie de 280/min, sugestivă pentru fibrilație atrială cu conducere anterogradă pe calea accesorie. Care dintre următoarele atitudini terapeutice este considerată riscantă în acest context?",
          "options": [
            "Administrarea de adenozină intravenos",
            "Sedare profundă cu monitorizare EKG continuă",
            "Conversia electrică sincronă (cardioversie)",
            "Solicitarea consultului de electrofiziologie pediatrică",
            "Administrarea de flecainidă intravenos"
          ],
          "correct": 0,
          "explanation": "Textul menționează explicit riscul administrării adenozinei la pacienții cu fibrilație atrială și sindrom WPW, deoarece poate crește frecvența ventriculară prin favorizarea conducerii pe calea accesorie, cu risc de degenerare în fibrilație ventriculară, mai ales la interval RR < 230 ms. În schimb, pentru tahicardia antidromică/FiA cu WPW, conversia electrică (clasa I) și flecainida IV (clasa IIa) sunt opțiuni recomandate conform tabelului de tratament acut.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 660-676"
        },
        {
          "id": "29-2",
          "stem": "Un copil de 10 ani se prezintă cu palpitații cu debut și sfârșit brusc; EKG în criză arată o tahicardie cu complex QRS îngust, frecvență 220/min. În derivația V1 se observă o mică deflexiune pozitivă la finalul complexului QRS (aspect „pseudo-r′”), iar intervalul RP este sub 70 ms. Acest aspect ECG este cel mai sugestiv pentru:",
          "options": [
            "Tahicardie atrială ectopică",
            "Tahicardie prin reintrare în nodul atrioventricular (AVNRT)",
            "Tahicardie joncțională permanentă reciprocă (PJRT)",
            "Tahicardie ortodromică prin reintrare pe cale accesorie (AVRT)",
            "Flutter atrial cu conducere 2/1"
          ],
          "correct": 1,
          "explanation": "Textul precizează că prezența unui pattern pseudo-r′ în V1 cu interval RP sub 70 ms este un argument pentru reintrare nodală (AVNRT), impulsul fiind transmis retrograd la atriu pe calea rapidă a nodului atrioventricular. Un interval RP peste 70 ms ar sugera, în schimb, reintrare pe cale accesorie (AVRT).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 660-676"
        },
        {
          "id": "29-3",
          "stem": "Un adolescent cu sindrom de QT lung cunoscut prezintă episoade sincopale declanșate în mod caracteristic de stimuli auditivi bruști (de exemplu, soneria telefonului sau alarma ceasului). Acest tipar de declanșare este caracteristic pentru:",
          "options": [
            "Sindromul Timothy",
            "LQT1",
            "LQT2",
            "Sindromul Andersen-Tawil",
            "LQT3"
          ],
          "correct": 2,
          "explanation": "Conform textului, factorii declanșatori ai aritmiilor în sindromul de QT lung diferă pe tipuri: efortul fizic și factorii stresanți pentru tipul 1, stimulii auditivi (zgomote bruște, alarma de ceas) pentru tipul 2, iar în tipul 3 aritmiile apar de obicei în repaus.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 660-676"
        },
        {
          "id": "29-4",
          "stem": "La un făt diagnosticat cu bloc atrioventricular complet congenital, în contextul unei mame cu anticorpi anti-Ro/La pozitivi, care dintre următoarele elemente reprezintă factori de risc dovediți pentru mortalitate crescută?",
          "options": [
            "Hidrops fetal și frecvență ventriculară sub 55/min",
            "Debutul blocului atrioventricular după săptămâna 30 de gestație",
            "Sexul feminin al fătului",
            "Titrul scăzut de anticorpi anti-Ro materni",
            "Absența unei boli autoimune materne manifeste clinic"
          ],
          "correct": 0,
          "explanation": "Textul precizează că factorii de risc dovediți pentru mortalitate în BAV congenital autoimun sunt hidropsul fetal și frecvența ventriculară sub 55/min. BAV complet la făt se instalează tipic în săptămânile 16-24 de gestație, iar diagnosticul matern de lupus este adesea stabilit abia după decelarea blocului la nou-născut.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 660-676"
        },
        {
          "id": "29-5",
          "stem": "Un nou-născut cu bloc atrioventricular complet congenital, pe cord structural normal, este asimptomatic clinic și este urmărit prin monitorizare Holter EKG. Care dintre următoarele constatări reprezintă, conform ghidurilor citate, o indicație de cardiostimulare permanentă chiar în absența simptomelor?",
          "options": [
            "Pauze ventriculare mai scurte decât durata unui ciclu al ritmului de scăpare",
            "Complex QRS îngust al ritmului de scăpare, cu frecvență peste 80/min",
            "Frecvență cardiacă medie în somn sub 50/min",
            "Absența disfuncției sistolice de ventricul stâng",
            "Interval PR normal pentru vârstă asociat"
          ],
          "correct": 2,
          "explanation": "Printre indicațiile de cardiostimulare permanentă în BAV congenital de grad III, simptomatic sau asimptomatic, se numără: ritm de scăpare cu complexe QRS largi, disfuncție de VS, interval QTc prelungit, frecvență cardiacă medie în somn sub 50/min și pauze cu durata mai mare de 3 cicluri ale ritmului de scăpare. Celelalte variante descriu situații favorabile, fără indicație de stimulare.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 430-432"
        }
      ]
    },
    {
      "num": 30,
      "title": "Insuficiența cardiacă",
      "questions": [
        {
          "id": "30-1",
          "stem": "Un sugar de 3 luni este adus la camera de gardă pentru tahipnee și dificultăți de alimentație (durata suptului peste 20 de minute, transpirații profuze în timpul mesei). La examenul obiectiv se constată tahicardie peste valorile normale pentru vârstă, hepatomegalie și prezența unui ritm de galop. Tabloul respirator ar putea fi confundat inițial cu o bronșiolită acută. Care dintre următoarele elemente orientează diagnosticul spre insuficiență cardiacă, și nu spre o afecțiune respiratorie acută?",
          "options": [
            "Ralurile sibilante bilaterale la auscultația pulmonară",
            "Prezența wheezing-ului expirator difuz",
            "Contextul epidemiologic sezonier de infecție virală respiratorie",
            "Hepatomegalia și ritmul de galop",
            "Febra asociată tabloului respirator"
          ],
          "correct": 3,
          "explanation": "Textul precizează că tabloul clinic al IC la sugar (tahipnee, dificultăți de alimentație) poate mima o bronșiolită acută, dar semnele cardiovasculare asociate — hepatomegalia, tahicardia peste valorile vârstei și ritmul de galop — sunt cele care orientează diagnosticul spre insuficiența cardiacă. Wheezing-ul, ralurile sibilante, febra și contextul epidemiologic sunt sugestive pentru o cauză respiratorie, nu cardiacă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 418-422"
        },
        {
          "id": "30-2",
          "stem": "Un sugar cu insuficiență cardiacă prezintă diaforeză marcată la fiecare supt, tahipnee importantă în timpul alimentației și falimentul creșterii, fără simptome prezente în repaus. Conform clasificării Ross a insuficienței cardiace la copil, acest tablou clinic corespunde clasei funcționale:",
          "options": [
            "Clasificarea Ross nu se aplică la sugar",
            "Clasa III",
            "Clasa I",
            "Clasa IV",
            "Clasa II"
          ],
          "correct": 1,
          "explanation": "Conform tabelului de clasificare Ross, clasa III la sugar este definită prin tahipnee marcantă, diaforeză la efortul de supt și falimentul creșterii. Clasa II presupune manifestări mai ușoare (tahipnee ușoară/diaforeză, fără afectarea curbei de creștere), iar clasa IV presupune simptome prezente în repaus, ceea ce nu este cazul aici.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 418-422"
        },
        {
          "id": "30-3",
          "stem": "La un copil cu insuficiență cardiacă cronică decompensată, care dintre următoarele modificări biologice reprezintă un factor de prognostic negativ, sugerând un grad important de retenție volemică?",
          "options": [
            "Leucocitoza moderată",
            "Hiperpotasemia",
            "Hiponatremia",
            "Creșterea ușoară a transaminazelor",
            "Hipercreatininemia ușoară, izolată"
          ],
          "correct": 2,
          "explanation": "Textul menționează explicit că hiponatremia la copilul cu IC indică un grad de retenție volemică și reprezintă un factor de prognostic negativ. Hiperpotasemia este descrisă ca apărând în stadiile avansate prin insuficiență renală de debit cardiac scăzut, dar factorul de prognostic negativ legat de retenția volemică menționat explicit este hiponatremia.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 418-422"
        },
        {
          "id": "30-4",
          "stem": "Un copil de 6 ani se prezintă cu semne de insuficiență cardiacă acută: hipoperfuzie periferică și retenție hidrosalină evidentă (edeme, hepatomegalie, raluri de stază). Care este conduita terapeutică medicamentoasă de primă linie?",
          "options": [
            "Digoxin oral, în doză de întreținere",
            "Carvedilol, cu titrare rapidă a dozei",
            "Furosemid injectabil, cu monitorizarea TA, electroliților și funcției renale",
            "Milrinonă în perfuzie continuă",
            "Inițierea unui inhibitor de enzimă de conversie în doză maximă"
          ],
          "correct": 2,
          "explanation": "Textul precizează că tratamentul medicamentos de primă linie al IC acute cu retenție hidrosalină este diureticul de ansă (furosemid) administrat injectabil, cu monitorizarea TA, electroliților (risc de hipopotasemie și hiponatremie) și a funcției renale. Agenții inotropi precum milrinona se folosesc doar în lipsa răspunsului la diuretice, iar IEC și beta-blocantele nu sunt indicate în faza acută necontrolată.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 418-422"
        },
        {
          "id": "30-5",
          "stem": "Un sugar de 10 luni cu insuficiență cardiacă cronică și disfuncție sistolică de ventricul stâng necesită inițierea terapiei cu inhibitor al enzimei de conversie. Care este molecula recomandată ca primă alegere la această vârstă?",
          "options": [
            "Losartan",
            "Enalapril",
            "Ramipril",
            "Perindopril",
            "Captopril"
          ],
          "correct": 4,
          "explanation": "Conform textului, captoprilul este prima alegere de IEC la pacienții cu vârsta sub 2 ani, în timp ce enalaprilul este indicat la cei peste 2 ani, iar preparatele cu durată lungă de acțiune (ramipril, perindopril) sunt rezervate copilului mare, stabil hemodinamic. Sartanii nu reprezintă prima alegere descrisă pentru această categorie de vârstă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 418-422"
        }
      ]
    },
    {
      "num": 31,
      "title": "Rahitismul carențial, tetania și anemiile carențiale",
      "questions": [
        {
          "id": "31-1",
          "stem": "Sugar în vârstă de 4 luni, alimentat natural exclusiv, fără profilaxie cu vitamina D, este adus la control pentru craniotabes și hipotonie musculară. Bilanțul biologic arată: calciu seric ușor scăzut, fosfat seric scăzut, fosfatază alcalină crescută, PTH crescut, 25(OH)D = 6 ng/mL. Care este conduita terapeutică curativă corectă, conform recomandărilor pentru rahitismul nutrițional?",
          "options": [
            "Continuarea dozei profilactice de 400 UI/zi de vitamină D, fără alte măsuri suplimentare",
            "Administrare intramusculară de vitamină D, considerată superioară administrării orale pentru refacerea rezervelor de 25(OH)D",
            "Administrare de calciferol (D2 sau D3) 2.000 UI/zi, pe cale orală, timp de 8 săptămâni",
            "Administrare a unei doze unice mari de vitamină D („stoss therapy”) pentru asigurarea complianței terapeutice",
            "Administrare de calcitriol [1,25(OH)2D] ca tratament de primă linie al deficitului de vitamină D"
          ],
          "correct": 2,
          "explanation": "Tratamentul curativ al rahitismului nutrițional la sugarii 0-6 luni constă în calciferol 2.000 UI/zi, oral, timp de 8 săptămâni. Doza unică mare („stoss therapy”) nu este recomandată din cauza riscului de hipercalcemie, iar derivații 1-alfa-hidroxilați (calcitriol) nu sunt indicați în tratamentul de rutină. Administrarea orală este preferată deoarece restabilește mai rapid rezervele de 25(OH)D comparativ cu cea intramusculară.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1161-1164"
        },
        {
          "id": "31-2",
          "stem": "Adolescentă de 15 ani se prezintă în urgență cu parestezii periorale, spasm carpal și anxietate marcată, instalate în timpul unui episod de plâns intens, cu hiperventilație. Calcemia recoltată de urgență este în limite normale. Care este explicația fiziopatologică cea mai probabilă a tabloului clinic?",
          "options": [
            "Alcaloza respiratorie indusă de hiperventilație, care poate produce tetanie chiar în absența hipocalcemiei",
            "Hipocalcemie tranzitorie, nedetectabilă prin dozarea calciului total",
            "Acidoză metabolică secundară hiperventilației, cu pierderea efectului protector asupra excitabilității neuromusculare",
            "Hipoparatiroidism funcțional indus acut de stresul emoțional",
            "Hipomagneziemie acută secundară hiperventilației"
          ],
          "correct": 0,
          "explanation": "Textul menționează explicit că alcaloza respiratorie produsă prin hiperventilație poate determina tetanie chiar în absența hipocalcemiei, prin creșterea legării calciului de albumină și scăderea fracției ionizate. Semnul Trousseau poate fi indus voluntar prin hiperventilație, ceea ce confirmă acest mecanism.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1152-1153"
        },
        {
          "id": "31-3",
          "stem": "Sugar de 10 luni cu semne radiologice de rahitism (metafize lărgite, cu aspect neregulat) prezintă la bilanțul biologic: calciu seric normal, fosfat seric scăzut, fosfatază alcalină crescută, PTH în limite normale. Care este cea mai probabilă formă etiopatogenică de rahitism?",
          "options": [
            "Rahitism fosfopenic (de exemplu hipofosfatemic), la care nivelul PTH este frecvent normal",
            "Rahitism calcipenic prin deficit alimentar de calciu, cu hiperparatiroidism secundar",
            "Rahitism prin deficit de 1-alfa-hidroxilază, cu PTH crescut compensator",
            "Rahitism dependent de vitamina D tip II, cu rezistență la acțiunea vitaminei D și PTH crescut",
            "Rahitism calcipenic prin deficit de vitamină D, la care PTH este invariabil crescut"
          ],
          "correct": 0,
          "explanation": "Conform textului, nivelul PTH este un element biologic esențial pentru diagnosticul diferențial: este invariabil crescut în rahitismul calcipenic și frecvent normal în rahitismul fosfopenic. Asocierea calciu normal, fosfat scăzut și PTH normal orientează spre o formă fosfopenică, nu spre una calcipenică (în care PTH ar fi crescut).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1161-1164"
        },
        {
          "id": "31-4",
          "stem": "Copil de 2 ani, provenit dintr-o zonă geografică cu prevalență crescută a sindroamelor talasemice, prezintă o anemie microcitară hipocromă ușoară, cu aspect clinic altfel normal. Care dintre următoarele seturi de rezultate paraclinice orientează diagnosticul spre beta-talasemie minoră (heterozigotă) și nu spre anemie feriprivă?",
          "options": [
            "RDW și HDW crescute, cu hematii „palide” pe frotiul de sânge periferic",
            "Protoporfirină eritrocitară liberă foarte mult crescută, cu plumburie crescută",
            "Sideremie normală, cu niveluri crescute de HbA2 și HbF",
            "Capacitate totală de legare a fierului crescută, cu receptor solubil al transferinei crescut",
            "Feritinemie scăzută sub 35 ng/L, cu sideremie scăzută"
          ],
          "correct": 2,
          "explanation": "Beta-talasemia minoră (heterozigotă) se caracterizează prin anemie ușoară, microcitară și normosideremică, cu HbA2 și HbF crescute, spre deosebire de anemia feriprivă, în care feritina și sideremia sunt scăzute, iar capacitatea de legare a fierului și receptorul solubil al transferinei sunt crescute. Protoporfirina liberă crescută cu plumburie crescută este caracteristică intoxicației cu plumb, alt diagnostic diferențial al anemiei microcitare.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1190-1194"
        },
        {
          "id": "31-5",
          "stem": "Copil de 6 ani cu anemie macrocitară prezintă parestezii la nivelul extremităților, ataxie și diminuarea reflexelor osteotendinoase. Înainte de inițierea tratamentului cu acid folic, care este măsura obligatorie?",
          "options": [
            "Efectuarea testului Schilling pentru documentarea unui deficit alimentar de acid folic",
            "Excluderea unei hemoglobinopatii prin electroforeza hemoglobinei",
            "Excluderea deficitului de vitamină B12, deoarece acidul folic nu ameliorează simptomele neurologice și le poate agrava",
            "Determinarea nivelului seric de fier și feritină, pentru excluderea unei anemii feriprive asociate",
            "Administrarea empirică simultană de acid folic și vitamină B12, fără alte investigații"
          ],
          "correct": 2,
          "explanation": "Manifestările neurologice (parestezii, ataxie, diminuarea reflexelor) sunt caracteristice deficitului de vitamină B12. Textul precizează că, înainte de administrarea acidului folic, trebuie exclus deficitul de vitamină B12, deoarece acidul folic nu are efect asupra simptomelor neurologice și poate, dimpotrivă, să le inducă sau agraveze, în ciuda ameliorării parametrilor hematologici.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1190-1194"
        }
      ]
    },
    {
      "num": 32,
      "title": "Anemiile hemolitice congenitale și dobândite",
      "questions": [
        {
          "id": "32-1",
          "stem": "Un copil de 8 ani, cunoscut cu sferocitoză ereditară formă tipică, se prezintă cu febră, dureri abdominale intense, agravarea icterului și a palorii, la 5 zile după o infecție respiratorie. Hemoleucograma arată Hb 6 g/dL (față de valoarea bazală de 9 g/dL) și reticulocite crescute (12%). Care este cel mai probabil diagnostic?",
          "options": [
            "Sindrom hemolitic-uremic asociat infecției",
            "Criză aplastică prin infecție cu parvovirus B19",
            "Anemie megaloblastică asociată, prin deficit de acid folic",
            "Criză de deglobulizare (hemolitică), prin accentuarea hemolizei declanșată de infecție",
            "Debut al unei leucemii acute limfoblastice"
          ],
          "correct": 3,
          "explanation": "În sferocitoza ereditară, infecțiile (virale sau bacteriene), stresul emoțional, frigul sau efortul fizic pot declanșa crize de deglobulizare, manifestate prin febră, dureri abdominale, accentuarea icterului și palorii, urină hipercromă și agravarea anemiei cu reticulocite crescute. Acestea se diferențiază de crizele aplastice (asociate infecției cu parvovirus B19), în care agravarea anemiei se însoțește de reticulopenie, nu de reticulocitoză. Prezența reticulocitozei (12%) în acest caz susține criza hemolitică, nu cea aplastică.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1194-1201"
        },
        {
          "id": "32-2",
          "stem": "Un băiat de 4 ani, fără antecedente semnificative, dezvoltă la 36 de ore de la administrarea de cotrimoxazol pentru o infecție urinară icter intens, urini hipercrome și paloare accentuată. Frotiul de sânge periferic evidențiază corpi Heinz. Care este mecanismul fiziopatologic cel mai probabil implicat?",
          "options": [
            "Prezența de autoanticorpi IgG la cald pe suprafața hematiilor",
            "Defect de sinteză a spectrinei membranare eritrocitare",
            "Deficit de glucozo-6-fosfat-dehidrogenază, cu precipitarea hemoglobinei oxidate în interiorul hematiei",
            "Deficit de piruvatkinază cu alterarea glicolizei anaerobe",
            "Mutație somatică a genei PIG-A cu hemoliză mediată de complement"
          ],
          "correct": 2,
          "explanation": "Cotrimoxazolul (sulfamidele) figurează pe lista medicamentelor cu potențial oxidant care declanșează hemoliză la pacienții cu deficit de G6PD, tipic la 24-48 de ore de la expunere. Hemoliza se datorează precipitării hemoglobinei oxidate sub formă de corpi Heinz, vizibili pe frotiu doar în primele 3-4 zile, deoarece hematiile care îi conțin sunt rapid îndepărtate din circulație. Boala este recesivă, legată de cromozomul X, motiv pentru care afectează tipic sexul masculin.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1194-1201"
        },
        {
          "id": "32-3",
          "stem": "Un copil de 7 ani cu sferocitoză ereditară formă medie (moderată), fără dependență transfuzională, este evaluat pentru indicația de splenectomie. Care dintre următoarele afirmații este corectă?",
          "options": [
            "Splenectomia nu influențează evoluția bolii, sferocitoza eritrocitară dispărând spontan postoperator",
            "Splenectomia parțială este obligatorie la toți pacienții, indiferent de vârstă",
            "Splenectomia totală este preferată la această vârstă, deoarece riscul infecțios este mai scăzut după vârsta de 6 ani, cu condiția vaccinării antipneumococice, anti-Hib și antimeningococice în prealabil",
            "Vaccinarea antipneumococică se recomandă doar după splenectomie, nu înainte",
            "Splenectomia este contraindicată înainte de vârsta de 10 ani, indiferent de forma clinică"
          ],
          "correct": 2,
          "explanation": "Conform textului, splenectomia (totală sau parțială) este indicată la vârsta peste 6 ani, preferându-se splenectomia totală, deoarece riscul infecțios este mai scăzut după această vârstă; la copiii sub 1 an, dependenți de transfuzii sau cu anemie severă, se preferă splenectomia parțială. Anterior splenectomiei, pacienții trebuie vaccinați antipneumococic, anti-Hib și antimeningococic. Postsplenectomie icterul dispare și Hb se corectează, dar sferocitoza eritrocitară persistă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1194-1201"
        },
        {
          "id": "32-4",
          "stem": "Un copil de 3 ani cu beta-talasemie majoră (anemia Cooley), aflat sub program transfuzional regulat, are valori ale feritinei serice de peste 2000 ng/mL. Care este conduita terapeutică indicată în acest moment?",
          "options": [
            "Inițierea terapiei chelatoare de fier (desferoxamină, deferipironă sau deferasirox), cu scopul menținerii feritinei sub 1000 ng/mL",
            "Splenectomie de urgență, indiferent de dimensiunea splinei",
            "Întreruperea transfuziilor până la normalizarea feritinei",
            "Administrare de fier oral pentru corectarea rapidă a anemiei",
            "Exsangvinotransfuzie repetată la interval de 2 săptămâni"
          ],
          "correct": 0,
          "explanation": "În beta-talasemia majoră, fierul acumulat din absorbția intestinală crescută și din transfuziile repetate determină hemosideroză cu afectare hepatică, cardiacă și endocrină. De aceea, chelarea cu desferoxamină, deferipironă sau deferasirox se începe de la vârsta de 2-4 ani, concomitent cu transfuziile, cu scopul menținerii feritinei sub 1000 ng/mL. Fierul oral este contraindicat, iar transfuziile regulate reprezintă tratamentul de bază, nu trebuie întrerupte.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1194-1201"
        },
        {
          "id": "32-5",
          "stem": "O adolescentă de 14 ani dezvoltă, în contextul unei infecții recente cu Mycoplasma pneumoniae, paloare, fenomene de acrocianoză/tip Raynaud la expunerea la frig și urini hipercrome. Testul Coombs direct este pozitiv doar pentru fracțiuni ale complementului, fără IgG detectabil. Care este mecanismul fiziopatologic cel mai probabil?",
          "options": [
            "Deficit ereditar de piruvatkinază declanșat de infecție",
            "Mutație a genei PIG-A cu pierderea proteinelor ancorate la suprafața hematiei",
            "Defect al proteinelor de membrană eritrocitară (spectrină), agravat de infecție",
            "Anticorpi IgM la rece, care aglutinează hematiile și activează complementul până la C9, cu hemoliză intravasculară",
            "Anticorpi IgG la cald, care opsonizează hematiile fără a activa complet complementul, determinând hemoliză extravasculară splenică"
          ],
          "correct": 3,
          "explanation": "Anemia hemolitică cu anticorpi la rece este frecvent secundară infecției cu Mycoplasma pneumoniae sau virusului Epstein-Barr. Anticorpii sunt de tip IgM, compleți, care aglutinează hematiile la temperaturi scăzute și activează complementul până la C9, producând hemoliză intravasculară; deoarece IgM se disociază de hematii în regiunile mai calde ale corpului, testul Coombs evidențiază ulterior doar fracțiunile complementului. Pacienții prezintă tipic fenomene Raynaud sau acrocianoză la expunerea la frig.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1194-1201"
        }
      ]
    },
    {
      "num": 33,
      "title": "Sindroame hemoragice: trombocitopenii, trombocitopatii, coagulopatii, CID, fibrinoliza acută",
      "questions": [
        {
          "id": "33-1",
          "stem": "Un copil de 4 ani se prezintă cu peteșii și echimoze apărute brusc, fără antecedente hemoragipare. Examenul clinic este normal, fără adenopatii, hepatomegalie sau splenomegalie. Hemograma arată trombocite sub 100.000/mm3, cu valori normale ale leucocitelor, formulei leucocitare, hematiilor, hemoglobinei și reticulocitelor, iar frotiul de sânge periferic este normal. Care este diagnosticul cel mai probabil?",
          "options": [
            "Anemie Fanconi",
            "Sindrom hemolitic-uremic",
            "Purpură trombocitopenică imună (PTI)",
            "Leucemie acută limfoblastică",
            "Sindrom Evans"
          ],
          "correct": 2,
          "explanation": "PTI este un diagnostic de excludere, susținut de trombocitopenie izolată sub 100.000/mm3, cu leucocite, hematii/Hb, formulă leucocitară și reticulocite normale, frotiu de sânge periferic normal, precum și absența adenopatiilor, hepatosplenomegaliei sau febrei. Prezența adenopatiilor/hepatosplenomegaliei ar orienta spre leucemie sau limfom, iar asocierea anemiei hemolitice ar sugera sindrom Evans.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1202-1206"
        },
        {
          "id": "33-2",
          "stem": "La un copil diagnosticat cu purpură trombocitopenică imună, care dintre următoarele situații impune tratament farmacologic de urgență și agresiv, datorită riscului crescut de hemoragie intracraniană?",
          "options": [
            "Epistaxis ușor, autolimitat, cu trombocite de 40.000/mm3",
            "Echimoze minore posttraumatice, cu trombocite de 60.000/mm3",
            "Gingivoragii minime, cu trombocite de 35.000/mm3",
            "Peteșii izolate la nivelul membrelor inferioare, cu trombocite de 80.000/mm3",
            "Cefalee brusc instalată sau modificări neurologice, în contextul unei trombocitopenii sub 20.000/mm3 sau după traumatism cranian"
          ],
          "correct": 4,
          "explanation": "Textul precizează că apariția cefaleei brusc instalate sau a modificărilor neurologice la un pacient cu trombocitopenie sub 20.000/mm3 sau după traumatism cranian impune tratament de urgență și agresiv, datorită riscului crescut de hemoragie intracraniană. Celelalte situații descrise nu ating pragurile de gravitate menționate în text pentru tratament farmacologic imediat.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1202-1206"
        },
        {
          "id": "33-3",
          "stem": "Un băiat de 2 ani, fără manifestări hemoragice semnificative la naștere, prezintă de la debutul mersului hemartroze recidivante la nivelul genunchilor și hematoame musculare profunde, fără peteșii cutanate. Timpul de sângerare este normal, iar timpul parțial de tromboplastină activată (APTT) este prelungit. Care este diagnosticul cel mai probabil?",
          "options": [
            "Trombastenie Glanzmann",
            "Deficit de vitamina K",
            "Purpură trombocitopenică imună",
            "Hemofilie A",
            "Boală von Willebrand tip 1"
          ],
          "correct": 3,
          "explanation": "Hemofilia se caracterizează prin absența leziunilor peteșiale, sediul frecvent profund al hemoragiilor (hemartroze, hematoame musculare), timp de sângerare normal și teste de coagulabilitate globală (APTT) prelungite. Boala von Willebrand asociază tipic sângerări cutaneo-mucoase și timp de sângerare prelungit, iar trombastenia Glanzmann și PTI se manifestă prin purpură cu timp de sângerare alungit și APTT normal.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 512-519"
        },
        {
          "id": "33-4",
          "stem": "Un copil cu sepsis sever dezvoltă sângerări difuze cutaneo-mucoase și viscerale. Bilanțul biologic arată trombocitopenie, fibrinogen scăzut, timp de protrombină alungit și timp de trombină prelungit. Pentru diferențierea coagulării intravasculare diseminate (CID) de o coagulopatie secundară insuficienței hepatice, cel mai util parametru este:",
          "options": [
            "Factorul V, scăzut atât în CID cât și în insuficiența hepatică",
            "Fibrinogenul, scăzut atât în CID cât și în insuficiența hepatică",
            "Factorul VIII, scăzut în CID și normal (sau normal/scăzut) în insuficiența hepatică",
            "Timpul de trombină, prelungit atât în CID cât și în insuficiența hepatică",
            "Timpul Quick, alungit atât în CID cât și în insuficiența hepatică"
          ],
          "correct": 2,
          "explanation": "Conform criteriilor de diagnostic diferențial, factorul VIII este scăzut în CID (prin consum), dar rămâne normal sau normal/scăzut în insuficiența hepatică, deoarece sinteza sa nu depinde exclusiv de hepatocit. În schimb, factorul V, fibrinogenul, timpul de trombină și timpul Quick sunt modificate similar în ambele condiții, neavând valoare discriminativă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 525-529"
        },
        {
          "id": "33-5",
          "stem": "Un nou-născut la termen, alimentat exclusiv la sân, care nu a primit profilaxie cu vitamina K la naștere, prezintă la 3 zile de viață melenă izolată, fără alte semne de boală. Care este conduita terapeutică inițială indicată?",
          "options": [
            "Vitamina K1, 1-2 mg, administrată intramuscular sau intravenos",
            "Plasmafereză",
            "Transfuzie de masă trombocitară",
            "Corticoterapie sistemică în doză mare",
            "Administrare de concentrat de factor VIII"
          ],
          "correct": 0,
          "explanation": "Tabloul descris corespunde formei clasice a bolii hemoragice a nou-născutului, care debutează la 2-3 zile de viață la cei fără profilaxie cu vitamina K, cu deosebire la cei alimentați natural. Tratamentul constă în administrarea de vitamina K1, 1-2 mg (maximum 5 mg), intramuscular sau intravenos, evitându-se dozele mari administrate rapid intravenos din cauza riscului de hemoliză.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 525-529"
        }
      ]
    },
    {
      "num": 34,
      "title": "Tratamentul substitutiv cu produse de sânge",
      "questions": [
        {
          "id": "34-1",
          "stem": "Un nou-născut prematur cu greutatea de 1200 g necesită exsangvinotransfuzie pentru o hiperbilirubinemie severă. Care dintre următoarele reprezintă o precauție specifică obligatorie la acest pacient, dincolo de măsurile standard (iradiere, concentrat cu leucodepleție nu mai vechi de 7 zile)?",
          "options": [
            "Utilizarea de sânge CMV-negativ, concentrat filtrat în primele 24 de ore de la recoltare, cu spălarea eritrocitelor înainte de administrare",
            "Utilizarea concentratului eritrocitar cu buffy-coat, fără adaos de plasmă proaspătă congelată",
            "Utilizarea de sânge integral neiradiat, indiferent de vechimea recoltării",
            "Utilizarea de sânge de la donator cu status CMV pozitiv cunoscut, fără alte restricții",
            "Utilizarea sângelui integral recoltat cu peste 14 zile înainte, fără filtrare"
          ],
          "correct": 0,
          "explanation": "La prematurul cu greutate sub 1500 g, exsangvinotransfuzia se face cu sânge CMV-negativ, cu concentrat filtrat în primele 24 de ore de la recoltare, iar spălarea eritrocitelor înainte de administrare este obligatorie. Aceste măsuri se adaugă precauțiilor generale (iradiere obligatorie, concentrat fără buffy-coat cu adaos de FFP, leucodepleție, vechime sub 7 zile).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 480-486"
        },
        {
          "id": "34-2",
          "stem": "La un copil transfuzat cu concentrat trombocitar, incrementul corectat calculat este de 5 la 1 oră post-transfuzie și de 3 la 24 de ore post-transfuzie. Cum se interpretează acest rezultat?",
          "options": [
            "Semn de coagulare intravasculară diseminată activă",
            "Caracter refractar al transfuziei trombocitare",
            "Răspuns transfuzional normal, eficient",
            "Indicație de transfuzie eritrocitară suplimentară",
            "Formă acută de purpură trombocitopenică imună"
          ],
          "correct": 1,
          "explanation": "Valori ale incrementului corectat mai mici de 7,5 la o oră și sub 4,5 la 24 de ore definesc caracterul refractar al trombocitopeniei la transfuzie. Valorile din vignetă (5 la 1 oră și 3 la 24 de ore) se situează sub aceste praguri.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 480-486"
        },
        {
          "id": "34-3",
          "stem": "Un copil anemic, normovolemic, are Hb 7 g/dl și prezintă insuficiență cardiacă asociată (factor de risc), fără semne evidente de hipoxie anemică. Conform indicațiilor de transfuzie eritrocitară în anemia acută, care este conduita adecvată?",
          "options": [
            "Transfuzie de concentrat trombocitar în locul celui eritrocitar",
            "Administrare de plasmă proaspătă congelată ca alternativă la masa eritrocitară",
            "Abținere de la transfuzie, deoarece Hb este peste pragul de 6 g/dl",
            "Doar monitorizare clinică, fără nicio intervenție transfuzională",
            "Transfuzie eritrocitară indicată, dat fiind că este vorba de o compensare limitată în prezența unui factor de risc"
          ],
          "correct": 4,
          "explanation": "Pentru valori ale Hb de 6-8 g/dl, transfuzia este indicată atunci când compensarea este limitată de prezența unor factori de risc precum insuficiența cardiacă, spre deosebire de situația compensării adecvate fără factori de risc, când transfuzia nu este indicată la aceleași valori ale Hb.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 480-486"
        },
        {
          "id": "34-4",
          "stem": "Un nou-născut aflat sub ventilație asistată, în prima zi de viață, are un hematocrit de 38%. Conform indicațiilor de transfuzie eritrocitară la nou-născut și sugarul sub 4 luni, care este conduita corectă?",
          "options": [
            "Transfuzie indicată doar dacă Ht scade sub 25%, indiferent de statusul respirator",
            "Transfuzie eritrocitară indicată, întrucât Ht este sub pragul de 40% pentru ziua 1 de viață la un nou-născut cu necesar de ventilație asistată",
            "Nu se indică transfuzie, deoarece Ht este apropiat de valoarea normală medie pentru vârstă",
            "Transfuzie indicată numai în cazul unei intervenții chirurgicale programate",
            "Se recomandă exclusiv administrare de eritropoietină, fără transfuzie"
          ],
          "correct": 1,
          "explanation": "Pentru ziua 1 de viață, valoarea medie normală a Ht este 56%, iar pragul sub care se indică transfuzia este 40%; prezența ventilației asistate este una dintre condițiile care susțin indicația de transfuzie. Un Ht de 38% la un nou-născut ventilat se situează sub acest prag.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 480-486"
        },
        {
          "id": "34-5",
          "stem": "Un pacient aflat în tratament cronic cu antivitamine K (AVK) necesită o intervenție chirurgicală de urgență. Care produs de sânge este recomandat pentru corectarea rapidă a coagulării în această situație?",
          "options": [
            "Concentratul granulocitar",
            "Crioprecipitatul (concentrat de FVIII, FvW, fibrinogen)",
            "Concentratul PPSB (concentrat de FII, FVII, FIX, FX)",
            "Albumina umană",
            "Masa eritrocitară deleucocitată"
          ],
          "correct": 2,
          "explanation": "Concentratul PPSB, care conține factorii II, VII, IX și X, este recomandat pentru bolnavii aflați sub tratament anticoagulant cu antivitamine K și care necesită intervenție chirurgicală de urgență. Crioprecipitatul are indicații diferite, precum boala von Willebrand neresponsivă la DDAVP sau hipo-/afibrinogenemia la bolnavul care sângerează.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 480-486"
        }
      ]
    },
    {
      "num": 35,
      "title": "Infecția de tract urinar",
      "questions": [
        {
          "id": "35-1",
          "stem": "Un copil în vârstă de 4 ani prezintă, în ultimele 10 luni, două episoade distincte de pielonefrită acută, confirmate prin urocultură pozitivă, cu sterilizarea completă a urinei între cele două episoade. Cum se clasifică corect această situație clinică?",
          "options": [
            "ITU recurentă",
            "Reinfecție fără semnificație clinică, deoarece urina a fost sterilă între episoade",
            "ITU cronică complicată cu factor obstructiv",
            "Bacteriurie asimptomatică recurentă",
            "ITU nevindecată"
          ],
          "correct": 0,
          "explanation": "ITU recurentă se definește, printre altele, prin prezența a cel puțin două episoade de pielonefrită acută la același pacient, urina fiind sterilă între episoade. ITU nevindecată presupune persistența infecției (rezistență la antibiotic, necomplianță sau factori care interferă cu concentrația urinară a antibioticului), nu sterilizarea urinei între episoade.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 599-605"
        },
        {
          "id": "35-2",
          "stem": "Sugar de 8 luni, cu antecedente de infecții urinare recurente, necesită confirmarea prin urocultură a unui nou episod de ITU, fiind esențială eliminarea riscului de contaminare a probei. Care este metoda de recoltare a urinei considerată standard de aur în acest context, conform ghidurilor pediatrice americane?",
          "options": [
            "Colectorul steril (punga din plastic atașată)",
            "Puncția vezicală suprapubiană",
            "Recoltarea din mijlocul jetului urinar",
            "Tampoane speciale pentru colectarea urinei",
            "Cateterismul vezical"
          ],
          "correct": 1,
          "explanation": "Puncția vezicală suprapubiană este considerată metoda standard pentru diagnosticul ITU recidivante la copiii sub 2 ani, deoarece nu există riscul contaminării. Colectorul steril, deși simplu și puțin traumatizant, are o rată de rezultate fals pozitive de 85-90%, iar cateterismul vezical este invaziv și presupune risc de introducere a unor microorganisme.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 599-605"
        },
        {
          "id": "35-3",
          "stem": "O fetiță de 6 ani se prezintă cu disurie și polakiurie. Examenul de urină pe bandeletă arată esterază leucocitară pozitivă, dar testul nitriților este negativ. Urocultura ulterioară evidențiază Staphylococcus saprophyticus. Care este explicația cea mai probabilă pentru rezultatul negativ al testului nitriților în acest caz?",
          "options": [
            "Leucocituria asociată inhibă reacția chimică de detectare a nitriților pe bandeletă",
            "Testul nitriților este util doar pentru diagnosticul bacteriuriei asimptomatice",
            "Bacteriile Gram-pozitive nu sintetizează nitritoxidaza, enzima necesară transformării nitraților urinari în nitriți",
            "Contactul prelungit dintre urină și bacterii determină degradarea nitriților formați",
            "Concentrația urinară crescută de proteine interferă cu reacția testului nitriților"
          ],
          "correct": 2,
          "explanation": "Testul nitriților se bazează pe capacitatea bacteriilor de a sintetiza nitritoxidaza, enzimă care transformă nitrații urinari în nitriți. Bacteriile Gram-pozitive, precum Staphylococcus saprophyticus, nu sintetizează această enzimă, motiv pentru care testul este negativ chiar în prezența unei infecții urinare reale.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 599-605"
        },
        {
          "id": "35-4",
          "stem": "Un copil de 4 ani prezintă al treilea episod de cistită, documentat prin urocultură pozitivă; ecografia renală este normală. Care este conduita corectă privind investigarea unui eventual reflux vezicoureteral la acest pacient?",
          "options": [
            "Se efectuează uretrocistografie micțională de urgență, indiferent de vârstă",
            "Nu se recomandă uretrocistografia micțională; se preferă efectuarea ecografiei asociate cu scintigrafia renală",
            "Se recomandă puncție vezicală suprapubiană pentru reconfirmarea diagnosticului de ITU",
            "Nu este necesară nicio investigație suplimentară, fiind suficientă o ecografie renală normală",
            "Se indică uro-RMN cu substanță de contrast ca primă investigație imagistică"
          ],
          "correct": 1,
          "explanation": "Uretrocistografia micțională nu este indicată la copiii de peste 3 ani, chiar în caz de ITU recurentă; în această situație se efectuează ecografie asociată cu scintigrafie renală. Uretrocistografia micțională rămâne indicată doar la sugarii sub 6 luni cu ITU recurentă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 599-605"
        },
        {
          "id": "35-5",
          "stem": "Care dintre următoarele situații NU reprezintă, prin ea însăși, o indicație de spitalizare la un copil cu infecție de tract urinar?",
          "options": [
            "Stare toxică",
            "Vârstă mai mare de 6 luni, fără alte semne de severitate asociate",
            "Vărsături persistente, cu imposibilitatea tolerării lichidelor pe cale orală",
            "Prezența unei obstrucții de tract urinar",
            "Deshidratare medie sau severă"
          ],
          "correct": 1,
          "explanation": "Criteriile de spitalizare menționate sunt: vârstă mai mică de 6 luni, incapacitatea de a accepta lichide per os, vărsături persistente, deshidratare medie/severă, stare toxică, febră peste 38,5°C și obstrucție de tract urinar. Vârsta peste 6 luni, în absența altor semne de severitate, nu constituie prin ea însăși un criteriu de spitalizare.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 599-605"
        }
      ]
    },
    {
      "num": 36,
      "title": "Anomaliile congenitale ale tractului urinar la copil: refluxul vezico-ureteral, anomaliile obstructive ale tractului urinar",
      "questions": [
        {
          "id": "36-1",
          "stem": "Un sugar de 8 luni este investigat pentru reflux vezicoureteral (VUR) după o infecție de tract urinar febrilă. Cistouretrografia micțională evidențiază dilatarea ureterului, a bazinetului și a calicelor, fără tortuozitate marcată a ureterului. Conform clasificării Grupului Internațional de Studiu privind Refluxul, care este gradul VUR la acest pacient?",
          "options": [
            "Gradul IV",
            "Gradul II",
            "Gradul V",
            "Gradul III",
            "Gradul I"
          ],
          "correct": 0,
          "explanation": "Gradul IV se caracterizează prin dilatarea ureterului, a bazinetului și a calicelor, fără tortuozitate marcată a ureterului, aceasta din urmă fiind caracteristică gradului V. Gradele IV și V sunt denumite \"reflux de dilatare\", ambele necesitând o rată de rezoluție spontană mult mai mică decât gradele mici.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 607-610"
        },
        {
          "id": "36-2",
          "stem": "Un copil de 3 ani cu VUR de grad III, diagnosticat după o pielonefrită acută, este menținut sub profilaxie antibiotică continuă cu doză mică, fără intervenție chirurgicală. Care dintre următoarele afirmații privind managementul medical conservator al VUR este corectă?",
          "options": [
            "Administrarea intermitentă a antibioticului este superioară administrării continue în prevenirea apariției de noi leziuni renale",
            "Managementul chirurgical precoce s-a dovedit superior celui medical în privința cicatrizării renale, conform Studiului Internațional de Reflux la Copii",
            "Refluxul steril determină leziuni renale progresive chiar și în absența disfuncției vezicale",
            "Profilaxia antibiotică trebuie întreruptă imediat ce copilul devine asimptomatic, indiferent de gradul refluxului",
            "Administrarea continuă a profilaxiei antibiotice este mai eficientă decât administrarea intermitentă pentru prevenirea de noi leziuni renale"
          ],
          "correct": 4,
          "explanation": "Administrarea continuă a profilaxiei cu antibiotic este mai bună decât administrarea intermitentă pentru prevenirea de noi leziuni renale la pacienții tratați conservator. Studiul Internațional de Reflux la Copii nu a găsit niciun avantaj al tratamentului chirurgical față de cel medical privind cicatrizarea sau funcția renală, iar refluxul steril nu produce leziuni renale la pacienții cu funcție vezicală normală.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 607-610"
        },
        {
          "id": "36-3",
          "stem": "Un nou-născut de sex masculin este diagnosticat cu valvă de uretră posterioară și VUR bilateral asociat cu golire vezicală sever disfuncțională. Care este conduita chirurgicală recomandată în acest context?",
          "options": [
            "Reimplantare ureterovezicală bilaterală, efectuată imediat după ablația valvei",
            "Nefrostomie bilaterală definitivă, fără altă intervenție ulterioară",
            "Injectare subureterală endoscopică de hidrogel, ca primă opțiune terapeutică",
            "Vezicostomie, intervenția antireflux fiind rezervată doar după o evaluare atentă ulterioară",
            "Cistoplastie de augmentare, efectuată concomitent cu ablația valvei"
          ],
          "correct": 3,
          "explanation": "Chirurgia antireflux trebuie efectuată numai după o evaluare atentă la pacienții cu valvă de uretră posterioară, vezică neurogenă sau golire disfuncțională severă. La acești pacienți, vezicostomia este, de obicei, o opțiune mai bună decât intervenția antireflux imediată.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 607-610"
        },
        {
          "id": "36-4",
          "stem": "La ecografia antenatală efectuată la 30 de săptămâni de gestație se constată o dilatație a bazinetului renal fetal de 22 mm. Care este semnificația prognostică a acestei valori?",
          "options": [
            "Risc scăzut (aproximativ 3%) de răsunet clinic postnatal",
            "Reprezintă o indicație absolută de întrerupere a sarcinii",
            "Risc crescut (aproximativ 94%) de răsunet clinic postnatal",
            "Indică cu certitudine un reflux vezicoureteral, excluzând o cauză obstructivă",
            "Valoarea nu are nicio semnificație prognostică, doar aspectul parenchimului contează"
          ],
          "correct": 2,
          "explanation": "O dilatație intrauterină a bazinetului mai mare de 20 mm se asociază cu o rată crescută a răsunetului clinic postnatal (94%), spre deosebire de dimensiunile sub 10 mm, care au o rată de doar 3%. Diferențierea intrauterină între cauzele obstructive și cele neobstructive nu este posibilă, cu excepția valvei de uretră posterioară.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 612-618"
        },
        {
          "id": "36-5",
          "stem": "Un nou-născut de 2 săptămâni cu hidronefroză stângă diagnosticată antenatal efectuează o scintigrafie renală cu MAG3 și test diuretic cu furosemid pentru a diferenția o dilatare obstructivă de una neobstructivă. Testul nu arată un răspuns concludent la furosemid. Care este interpretarea corectă a acestui rezultat?",
          "options": [
            "MAG3 este contraindicat la nou-născuți din cauza toxicității renale",
            "Testul diuretic trebuie repetat imediat cu DMSA pentru a obține un rezultat interpretabil",
            "Absența răspunsului exclude cu certitudine o uropatie obstructivă la această vârstă",
            "Spălarea întârziată a radiotrasorului confirmă întotdeauna diagnosticul de obstrucție, indiferent de vârstă",
            "Rezultatul neconcludent poate fi explicat prin imaturitatea funcțională nefronală specifică primelor patru săptămâni de viață, iar testul trebuie interpretat cu prudență"
          ],
          "correct": 4,
          "explanation": "În primele patru săptămâni de viață există o imaturitate funcțională nefronală, motiv pentru care studiul diuretic nu va avea un răspuns corespunzător; de aceea, un rezultat neconcludent la această vârstă nu poate exclude o obstrucție. MAG3 este agentul radiofarmaceutic de elecție la copiii mici și poate fi efectuat încă din prima săptămână de viață.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 612-618"
        }
      ]
    },
    {
      "num": 37,
      "title": "Glomerulonefritele acute și cronice",
      "questions": [
        {
          "id": "37-1",
          "stem": "Un copil de 8 ani prezintă, în a doua zi de la debutul unei infecții respiratorii acute (febră, odinofagie), urini hematurice macroscopice, fără edeme semnificative și cu complement C3 normal. Care este cel mai probabil diagnostic, având în vedere intervalul foarte scurt dintre debutul infecției și apariția hematuriei?",
          "options": [
            "Nefropatia IgA (boala Berger)",
            "Glomerulonefrită membranoproliferativă",
            "Sindrom Goodpasture",
            "Glomerulonefrită acută post-streptococică",
            "Nefrita lupică"
          ],
          "correct": 0,
          "explanation": "În nefropatia IgA, hematuria macroscopică episodică se instalează caracteristic în primele 2-3 zile de la debutul unei infecții respiratorii acute (hematurie sincronă infecției). În GNAPS, dimpotrivă, există o perioadă de latență asimptomatică de aproximativ 2-3 săptămâni (până la 4-6 săptămâni în infecțiile cutanate) între infecția streptococică și debutul nefropatiei. C3 este normal în nefropatia IgA, spre deosebire de GNAPS unde este scăzut la peste 90% din cazuri.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 629-637"
        },
        {
          "id": "37-2",
          "stem": "Un copil de 6 ani este investigat pentru hematurie. Se constată: debut la 3 săptămâni după o infecție cutanată streptococică, oligurie, densitate urinară normală, iar examinarea ecografică renală arată rinichi de dimensiuni normale. Aceste elemente clinico-paraclinice pledează cel mai mult pentru:",
          "options": [
            "Glomerulonefrită acută",
            "Nefropatie de reflux",
            "Sindrom nefrotic cu leziuni minime",
            "Rinichi polichistic",
            "Glomerulonefrită cronică"
          ],
          "correct": 0,
          "explanation": "Textul precizează explicit criteriile de diagnostic diferențial: pledează pentru GNA debutul postinfecțios (la interval de minimum două săptămâni), oliguria, densitatea urinară normală și dimensiunea normală a rinichilor la ecografie. Pentru GNC ar pleda instalarea hematuriei în cursul infecțiilor acute, poliuria, densitatea urinară scăzută și rinichii mici, hiperecogeni.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 629-637"
        },
        {
          "id": "37-3",
          "stem": "Un copil diagnosticat cu glomerulonefrită acută post-streptococică prezintă, la 8 săptămâni de la debut, valori persistent scăzute ale complementului C3 seric, care nu s-au normalizat. Conform conduitei descrise, această situație reprezintă o indicație pentru:",
          "options": [
            "Repetarea tratamentului antibiotic cu benzatin penicilină pe termen lung",
            "Amigdalectomie",
            "Puncție-biopsie renală",
            "Corticoterapie orală prelungită, fără investigații suplimentare",
            "Inițierea de urgență a epurării extrarenale"
          ],
          "correct": 2,
          "explanation": "Puncția-biopsie renală nu este recomandată de rutină în GNA, ci doar în situații particulare: titru ASO normal, C3 normal sau C3 scăzut peste 6-8 săptămâni, retenție azotată cu clearance al creatininei sub 30 ml/min/s.c. sau hematurie recurentă. Persistența hipocomplementemiei peste 6-8 săptămâni ridică suspiciunea unei alte forme de GN și impune biopsia.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 629-637"
        },
        {
          "id": "37-4",
          "stem": "O fetiță de 5 ani prezintă purpură cutanată la nivelul membrelor inferioare, dureri abdominale colicative și hematurie microscopică, tabloul fiind sugestiv pentru purpura Henoch-Schönlein cu afectare renală. Complementul seric C3 este dozat și se constată valori normale. Cum trebuie interpretat acest rezultat?",
          "options": [
            "Sugerează o endocardită infecțioasă asociată",
            "Exclude diagnosticul de nefrită din purpura Henoch-Schönlein",
            "Este caracteristic nefritei lupice active",
            "Este un rezultat tipic, purpura Henoch-Schönlein neasociindu-se de regulă cu hipocomplementemie",
            "Indică o glomerulonefrită postinfecțioasă activă"
          ],
          "correct": 3,
          "explanation": "Fracțiunea C3 a complementului are valori normale în poliarterita nodoasă, purpura Henoch-Schönlein, nefropatia IgA, GNRP, sindromul Goodpasture sau sindromul Alport. În schimb, C3 este scăzut în GN postinfecțioasă, GN membranoproliferativă, endocardita infecțioasă, nefrita de șunt, nefrita lupică și crioglobulinemia mixtă esențială.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 629-637"
        },
        {
          "id": "37-5",
          "stem": "Un adolescent cu nefropatie IgA confirmată bioptic prezintă proteinurie de 1,5 g/24 ore, persistentă de 4 luni sub tratament cu inhibitor al enzimei de conversie, fără declin rapid al funcției renale și fără semilune extinse la examenul histopatologic. Conform conduitei terapeutice descrise, această situație reprezintă o indicație pentru:",
          "options": [
            "Amigdalectomie, ca primă măsură terapeutică",
            "Rituximab, ca terapie de primă linie",
            "Doar restricție dietetică de sodiu, fără altă intervenție terapeutică",
            "Tratament imunosupresor, cu glucocorticosteroizi ca primă intenție",
            "Transplant renal preventiv"
          ],
          "correct": 3,
          "explanation": "Tratamentul imunosupresor este recomandat în formele cu proteinurie de peste 1 g/24 de ore persistentă timp de 3-6 luni, cu semilune la peste jumătate dintre glomeruli sau cu declin funcțional renal rapid. Glucocorticosteroizii reprezintă terapia de primă intenție în majoritatea cazurilor, administrați pe o durată de 8 luni; rituximab nu și-a dovedit eficiența asupra conservării funcției renale sau reducerii proteinuriei.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 629-637"
        }
      ]
    },
    {
      "num": 38,
      "title": "Sindromul nefrotic",
      "questions": [
        {
          "id": "38-1",
          "stem": "Un copil de 4 ani se prezintă cu edeme progresive, palpebrale și pretibiale. Investigațiile arată proteinurie masivă și hipoalbuminemie severă. Conform criteriilor de diagnostic pozitiv al sindromului nefrotic, alături de proteinuria de rang nefrotic și hipoalbuminemie, care este al treilea criteriu care trebuie demonstrat?",
          "options": [
            "Prezența edemelor generalizate",
            "Hematuria macroscopică",
            "Retenția azotată",
            "Hiperlipidemia",
            "Hipertensiunea arterială"
          ],
          "correct": 3,
          "explanation": "Textul precizează explicit că, pentru a susține diagnosticul pozitiv de sindrom nefrotic, trebuie demonstrate trei criterii: proteinurie de rang nefrotic, hipoalbuminemie și hiperlipidemie. Hematuria, hipertensiunea și retenția azotată reprezintă criterii de impurificare, nu criterii diagnostice obligatorii. Edemul, deși frecvent prezent (95% din cazuri), nu figurează printre cele trei criterii enumerate la diagnosticul pozitiv.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1322-1331"
        },
        {
          "id": "38-2",
          "stem": "Un copil cu sindrom nefrotic primitiv primește tratament cu prednison 60 mg/m2/zi, zilnic, timp de 5 săptămâni, fără a intra în remisiune. Cum se clasifică acest răspuns terapeutic conform textului?",
          "options": [
            "Sindrom nefrotic corticosensibil cu remisiune întârziată",
            "Sindrom nefrotic cu recăderi frecvente",
            "Sindrom nefrotic corticorezistent",
            "Sindrom nefrotic impur",
            "Sindrom nefrotic corticodependent"
          ],
          "correct": 2,
          "explanation": "Sindromul nefrotic corticorezistent este definit ca inabilitatea de a induce remisiunea în 4 săptămâni de corticoterapie zilnică cu 60 mg/m2/zi; textul precizează că absența răspunsului la prednison în primele 30 de zile de administrare susține această încadrare. Corticodependența presupune recăderea în timpul reducerii dozei sau în primele săptămâni de la oprirea corticoterapiei, situație diferită de lipsa oricărui răspuns inițial.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1322-1331"
        },
        {
          "id": "38-3",
          "stem": "Conform recomandărilor KDIGO 2012 citate în text, la care dintre următorii copii cu sindrom nefrotic nou diagnosticat se poate iniția corticoterapia înaintea efectuării biopsiei renale?",
          "options": [
            "Copil de 5 ani, cu funcție renală normală, fără hematurie macroscopică, fără semne de boală sistemică, complement seric normal și screening viral negativ",
            "Copil de 7 ani cu febră, eritem cutanat și dureri articulare, sugestive pentru o boală sistemică",
            "Sugar de 9 luni cu tablou sugestiv de sindrom nefrotic congenital",
            "Copil de 6 ani cu hematurie macroscopică și complement C3 scăzut",
            "Copil de 13 ani cu retenție azotată prezentă la debut"
          ],
          "correct": 0,
          "explanation": "Corticoterapia poate fi inițiată empiric, înaintea biopsiei renale, doar la copiii cu vârsta între 1 și 8 ani, funcție renală normală, fără hematurie macroscopică, fără semne de boală sistemică, complement seric normal, screening viral negativ și anamneză familială negativă pentru boli renale. Vârsta sub 1 an, hematuria macroscopică, complementul scăzut, semnele de boală sistemică și retenția azotată reprezintă indicații de biopsie renală, conform textului.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1322-1331"
        },
        {
          "id": "38-4",
          "stem": "Un copil cu sindrom nefrotic aflat în puseu activ dezvoltă brusc dureri lombare și hematurie macroscopică; ecografia Doppler confirmă tromboza de venă renală. Care este conduita terapeutică corectă conform textului?",
          "options": [
            "Anticoagulare profilactică empirică, inițiată de rutină la toți copiii cu sindrom nefrotic",
            "Transfuzie de masă trombocitară pentru corectarea stării procoagulante",
            "Tromboliză cu heparină și/sau agenți fibrinolitici, urmată de profilaxie secundară cu warfarină timp de 6 luni",
            "Corticoterapie intravenoasă în doze mari, fără terapie antitrombotică asociată",
            "Antiagregare cu acid acetilsalicilic, fără altă intervenție terapeutică"
          ],
          "correct": 2,
          "explanation": "Textul precizează că anticoagularea empirică profilactică nu are indicație în sindromul nefrotic la copil, dar tratamentul unui eveniment tromboembolic constituit se realizează inițial prin tromboliză cu heparină și/sau agenți fibrinolitici (activator de plasminogen, streptokinază sau urokinază), urmată de profilaxie secundară cu warfarină timp de 6 luni.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1322-1331"
        },
        {
          "id": "38-5",
          "stem": "Un copil cu sindrom nefrotic corticosensibil, aflat sub corticoterapie, dezvoltă febră, dureri abdominale intense, distensie abdominală, apărare musculară și oprirea tranzitului intestinal, tablou sugestiv de peritonită. Care este agentul etiologic predominant citat în text pentru această complicație infecțioasă?",
          "options": [
            "Staphylococcus aureus",
            "Proteus mirabilis",
            "Streptococcus pneumoniae",
            "Klebsiella pneumoniae",
            "Pseudomonas aeruginosa"
          ],
          "correct": 2,
          "explanation": "Textul menționează că cele mai grave infecții la copilul cu sindrom nefrotic sunt peritonita și sepsisul, iar cauza predominantă este Streptococcus pneumoniae, alături de bacteriile gram-negative precum Escherichia coli. Riscul crescut se datorează pierderii urinare de factor B, scăderii sintezei de IgG și efectului imunosupresor al corticoterapiei.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1322-1331"
        }
      ]
    },
    {
      "num": 39,
      "title": "Insuficiența renală acută",
      "questions": [
        {
          "id": "39-1",
          "stem": "Sugar în vârstă de 8 luni, cu gastroenterită acută (vărsături și diaree de 3 zile), se prezintă cu oligurie, mucoase uscate și tahicardie. Ureea și creatinina serice sunt ușor crescute. Examenul de urină arată: concentrația sodiului urinar = 8 mEq/L, densitate urinară = 1026, fracția de excreție a Na+ = 0,6%, sediment urinar cu cilindri hialini. Care este cel mai probabil diagnostic?",
          "options": [
            "Insuficiență renală acută intrinsecă prin necroză tubulară acută",
            "Glomerulonefrită acută postinfecțioasă",
            "Insuficiență renală acută prerenală",
            "Insuficiență renală acută postrenală prin obstrucție",
            "Nefrită interstițială acută"
          ],
          "correct": 2,
          "explanation": "Markerii urinari descriși (Na urinar < 10 mEq/L, fracția de excreție a Na+ < 1%, densitate urinară > 1020, cilindri hialini) sunt caracteristici IRA prerenale, spre deosebire de IRA intrinsecă unde FeNa > 1%, Na urinar > 20 mEq/L, densitate < 1010 și apar cilindri granulari. Contextul clinic (deshidratare prin pierderi digestive) susține mecanismul prerenal, potențial reversibil după refacerea volemică.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1359-1366"
        },
        {
          "id": "39-2",
          "stem": "Copil de 3 ani cu sindrom hemolitic-uremic dezvoltă insuficiență renală acută cu anurie de 50 de ore, sub tratament conservator maximal. Care dintre următoarele reprezintă o indicație absolută pentru inițierea terapiei de substituție renală în acest caz?",
          "options": [
            "Ureea serică de 20 mmol/L",
            "Hipervolemie moderată, responsivă la doza inițială de furosemid",
            "Anuria de peste 48 de ore, mai ales în contextul sindromului hemolitic-uremic",
            "Acidoză metabolică ușoară, corectată cu bicarbonat de sodiu",
            "Potasiul seric de 5,8 mmol/L, fără modificări EKG"
          ],
          "correct": 2,
          "explanation": "Textul precizează explicit anuria de peste 48 de ore, mai ales în sindromul hemolitic-uremic, ca indicație absolută pentru inițierea epurării extrarenale. Celelalte situații descrise (uree 20 mmol/L, K+ 5,8 fără modificări EKG, hipervolemie responsivă la diuretic, acidoză ușoară corectabilă medicamentos) nu ating pragurile absolute menționate (uree > 40 mmol/L, K+ > 6,5 mEq/L, acidoză severă refractară, hipervolemie refractară la diuretic).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1359-1366"
        },
        {
          "id": "39-3",
          "stem": "Copil cu insuficiență renală acută are potasiu seric de 6,2 mmol/L, fără modificări electrocardiografice. Conform conduitei terapeutice descrise pentru acest interval al hiperpotasemiei, care este atitudinea inițială cea mai adecvată?",
          "options": [
            "Hidratare, bolus lent de calciu gluconic 10% sub monitorizare EKG, perfuzie de glucoză cu insulină și Kayexalate, cu corectarea acidozei dacă rezerva alcalină este scăzută",
            "Nebulizare cu salbutamol ca unică măsură terapeutică",
            "Administrare de soluție de NaCl hipertonă conform formulei de corecție a natremiei",
            "Doar restricție alimentară de potasiu, fără altă intervenție",
            "Hemodializă de urgență, fără alte măsuri prealabile"
          ],
          "correct": 0,
          "explanation": "Pentru K+ între 6,0-6,5 mmol/L textul indică sistarea medicației economisitoare de K, restricție alimentară, hidratare, bolus lent de calciu gluconic 10% (0,5 mL/kg) sub monitorizare EKG, perfuzie de glucoză tamponată cu insulină, Kayexalate și, dacă rezerva alcalină este sub 18 mmol/L, bicarbonat de sodiu. Hemodializa și nebulizarea cu salbutamol sunt rezervate hiperpotasemiei severe (K+ > 6,5 mmol/L).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1359-1366"
        },
        {
          "id": "39-4",
          "stem": "Un biomarker urinar se secretă după instalarea leziunii ischemice renale, precede cu 2-4 zile creșterea creatininei serice și reprezintă un excelent predictor al instalării insuficienței renale acute la copiii cu sindrom hemolitic-uremic. Despre care biomarker este vorba?",
          "options": [
            "Cistatina C serică",
            "Interleukina 18 urinară",
            "Neutrophil Gelatinase-Associated Lipocalin (NGAL)",
            "Molecula de injurie renală (KIM-1)",
            "Chemokinele derivate din keratinocite (CK)"
          ],
          "correct": 2,
          "explanation": "Textul menționează explicit că NGAL se secretă urinar după instalarea leziunii ischemice renale, precede cu 2-4 zile creșterea creatininei serice și reprezintă un excelent predictor al instalării IRA în sindromul hemolitic-uremic. Ceilalți biomarkeri au alte caracteristici: KIM-1 crește în primele 12 ore, cistatina C precede cu 1-2 zile creșterea creatininei fără a diferenția cauzele, iar CK cresc în primele 4 ore și diferențiază eșecul de succesul unui transplant renal.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1359-1366"
        },
        {
          "id": "39-5",
          "stem": "Un copil aflat în evoluția unei insuficiențe renale acute reia diureza, cu debit urinar de peste 3 mL/kg/oră. În ciuda ameliorării stării clinice, ureea și creatinina serice continuă să crească în primele zile ale acestei perioade, urmate de un platou și apoi de scădere rapidă. Cărei faze evolutive a IRA îi corespunde acest tablou?",
          "options": [
            "Faza preanurică",
            "Faza poliurică și de recuperare funcțională",
            "Faza anurică",
            "Evoluție spre insuficiență renală cronică",
            "Faza de recuperare funcțională tardivă (la un an)"
          ],
          "correct": 1,
          "explanation": "Textul descrie faza poliurică (diureză peste 3 mL/kg/oră) ca fiind însoțită de o creștere paradoxală a produșilor de retenție azotată în primele 5 zile, urmată de un platou de 5 zile și apoi de scădere rapidă, deși starea clinică a pacientului se ameliorează. Aceasta o diferențiază de faza anurică (oligoanurie, semnul cardinal fiind diureza sub 1 mL/kg/oră) și de faza de recuperare funcțională propriu-zisă, în care filtrarea glomerulară crește progresiv pe parcursul unui an.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1359-1366"
        }
      ]
    },
    {
      "num": 40,
      "title": "Boala cronică renală (Insuficiența renală cronică)",
      "questions": [
        {
          "id": "40-1",
          "stem": "Un sugar în vârstă de 6 săptămâni, cunoscut cu valvă de uretră posterioară, prezintă la ecografia postnatală rinichi mici, hiperecogeni, cu RFG estimată sub valorile normale pentru vârstă. Conform criteriilor NKF/KDOQI adaptate populației pediatrice, care dintre următoarele afirmații este corectă?",
          "options": [
            "La copiii cu vârsta sub 3 luni, criteriul duratei de persistență a leziunilor (peste 3 luni) nu poate fi aplicat pentru definirea BCR",
            "Diagnosticul de BCR necesită obligatoriu confirmare prin puncție-biopsie renală la această vârstă",
            "RFG estimată prin formula Schwartz modificată (bedside) este validă la această vârstă pentru diagnosticul de BCR",
            "Diagnosticul de BCR poate fi pus doar dacă leziunile renale sau reducerea RFG persistă cel puțin 3 luni, criteriu valabil și la această vârstă",
            "La copiii sub 2 ani, criteriul RFG sub 60 ml/min/1,73 m2 este întotdeauna aplicabil, indiferent de vârstă"
          ],
          "correct": 0,
          "explanation": "Textul menționează explicit două excepții pediatrice de la criteriile NKF/KDOQI: la copiii sub 2 ani nu se poate aplica criteriul RFG sub 60 ml/min/1,73 m2 (valorile normale fiind fiziologic mai mici, trebuie adaptate vârstei), iar la copiii sub 3 luni nu se poate aplica criteriul duratei. În plus, formula Schwartz modificată este validată doar pentru populația de 1-16 ani.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 639-649"
        },
        {
          "id": "40-2",
          "stem": "Copil de 3 ani, diagnosticat cu boală cronică de rinichi în contextul unei hipoplazii/displazii renale bilaterale asociate cu reflux vezicoureteral. Conform datelor de epidemiologie prezentate, care este cea mai frecventă categorie etiologică de BCR la copiii cu vârsta sub 5 ani?",
          "options": [
            "Sindromul hemolitic-uremic",
            "Glomeruloscleroza focală și segmentară",
            "Nefropatia cu IgA",
            "Nefrita lupică",
            "Anomaliile congenitale ale rinichiului și tractului urinar (CAKUT)"
          ],
          "correct": 4,
          "explanation": "La copil, afecțiunile care conduc la BCR sunt dominate de anomaliile congenitale ale rinichiului și tractului urinar (CAKUT), mai ales displazia/hipoplazia renală asociată sau nu cu reflux vezicoureteral sau obstrucție, în primii cinci ani de viață. Nefropatiile glomerulare (inclusiv GSFS) ocupă locul al doilea, iar la adolescenți ordinea se inversează.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 639-649"
        },
        {
          "id": "40-3",
          "stem": "Copil de 11 ani cu BCR stadiul IV (RFG 22 ml/min/1,73 m2) prezintă paloare tegumentară cu tentă teroasă și astenie fizică. Hemoleucograma arată anemie normocromă normocitară, cu sideremie, feritină, vitamina B12 și acid folic în limite normale. Care este mecanismul patogenic cel mai important implicat în anemia acestui pacient?",
          "options": [
            "Supresia medulară secundară hiperparatiroidismului sever (mielofibroză)",
            "Reducerea producției de eritropoietină de către celulele din corticala renală",
            "Deficitul de fier secundar aportului alimentar insuficient",
            "Pierderile cronice de sânge prin gastrita uremică",
            "Scăderea duratei de viață a hematiilor prin acțiunea toxinelor uremice"
          ],
          "correct": 1,
          "explanation": "Textul precizează că mecanismul patogenic cel mai important al anemiei din BCR este reducerea producției de eritropoietină de către celulele din corticala renală, la care se adaugă, secundar, scăderea duratei de viață a hematiilor, deficitele nutriționale și supresia medulară. În acest caz, cu deficitele nutriționale excluse prin dozări normale, mecanismul dominant rămâne deficitul de eritropoietină.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 639-649"
        },
        {
          "id": "40-4",
          "stem": "Copil de 9 ani cu BCR stadiul IV prezintă dureri osoase, o fractură survenită la traumatism minim și genu valgum. Biologic: hipocalcemie, hiperfosfatemie, parathormon seric mult crescut și fosfatază alcalină crescută; radiologic se observă eroziuni periostale și fracturi metafizare. Care este diagnosticul cel mai probabil?",
          "options": [
            "Hiperparatiroidism primar",
            "Rahitism carențial prin deficit alimentar de vitamină D",
            "Osteoporoză idiopatică juvenilă",
            "Boala adinamică osoasă (turnover redus)",
            "Osteodistrofia renală cu turnover osos ridicat (osteitis fibrosa)"
          ],
          "correct": 4,
          "explanation": "Forma cu turnover ridicat (osteitis fibrosa) este cea mai frecventă la copilul cu BCR și se caracterizează biologic prin hipocalcemie, hiperfosfatemie, creșterea PTH și a fosfatazei alcaline, radiologic prin eroziuni periostale și fracturi metafizare, iar clinic prin dureri osoase, fracturi la traumatisme minime și deformări precum genu valgum. Boala adinamică osoasă are, dimpotrivă, PTH supresat și hipercalcemie.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 639-649"
        },
        {
          "id": "40-5",
          "stem": "Copil de 18 luni cu boală cronică de rinichi stadiul terminal necesită inițierea epurării extrarenale. Abordul vascular este dificil din cauza vârstei mici, iar familia dorește o metodă ce poate fi efectuată la domiciliu, de către aparținători. Care este metoda de epurare extrarenală de primă intenție în acest caz?",
          "options": [
            "Dializa peritoneală",
            "Hemodializa prin fistulă arteriovenoasă",
            "Hemodializa prin cateter venos central tunelizat",
            "Transplantul renal de la donator decedat, fără pregătire prealabilă",
            "Hemodializa zilnică de scurtă durată efectuată în centru"
          ],
          "correct": 0,
          "explanation": "Dializa peritoneală este recomandată în special la vârste mici, la care abordul vascular este foarte dificil, și poate fi practicată la domiciliu de către aparținători, spre deosebire de hemodializă, al cărei abord vascular este dificil de executat mai ales la vârste mici.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 639-649"
        }
      ]
    },
    {
      "num": 41,
      "title": "Tuberculoza pulmonară primară și secundară",
      "questions": [
        {
          "id": "41-1",
          "stem": "Un copil de 6 ani este evaluat pentru suspiciune de tuberculoză, îndeplinind criteriile OMS de suspiciune (contact cu un caz confirmat, scădere ponderală peste 10%, febră și tuse de peste 4 săptămâni, neinfluențate de antibioterapie). Care dintre următoarele elemente adiționale încadrează cazul în categoria criteriilor de probabilitate?",
          "options": [
            "Rezultat BAAR negativ la microscopia directă a sputei",
            "Vârsta peste 10 ani",
            "Radiografie toracică normală",
            "Papulă IDR-PPD cu diametrul peste 10 mm (hiperergie tuberculinică)",
            "Absența unui contact cunoscut cu un caz de tuberculoză activă"
          ],
          "correct": 3,
          "explanation": "Criteriile de probabilitate OMS presupun un caz suspect plus cel puțin unul dintre: hiperergie tuberculinică (papulă peste 10 mm), aspect radiologic sau histologic sugestiv, BAAR pozitiv sau răspuns favorabil la terapia anti-TB. Un rezultat BAAR negativ sau o radiografie normală nu susțin trecerea de la suspiciune la probabilitate.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 367-379"
        },
        {
          "id": "41-2",
          "stem": "Un sugar de 8 luni prezintă febră, vărsături și redoare de ceafă instalate progresiv în ultimele 10 zile, fără răspuns la antibioterapie empirică. Se suspectează meningită tuberculoasă și se efectuează puncție lombară. Care dintre următoarele aspecte ale LCR este cel mai sugestiv pentru etiologia tuberculoasă?",
          "options": [
            "LCR clar, cu citorahie de 200-500 elemente/mm3 cu predominanță limfocitară, proteinorahie peste 100 mg% și glicorahie sub 30 mg%",
            "LCR cu eozinofilie marcată și glicorahie crescută",
            "LCR hemoragic, cu eritrocite numeroase și proteinorahie normală",
            "LCR tulbure, purulent, cu polimorfonucleare peste 1000/mm3 și glicorahie normală",
            "LCR clar, acelular, cu proteinorahie și glicorahie normale"
          ],
          "correct": 0,
          "explanation": "În meningita tuberculoasă, LCR este clar, cu citorahie de 200-500 elemente/mm3 cu predominanță limfocitară (peste 50-80%), proteinorahie crescută (peste 100 mg%, uneori peste 3 g% sugerând blocaj medular) și glicorahie scăzută (sub 30 mg%). Persistența acestor modificări este caracteristică pentru etiologia tuberculoasă, spre deosebire de aspectul purulent din meningitele bacteriene.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 367-379"
        },
        {
          "id": "41-3",
          "stem": "Un copil de 4 ani este diagnosticat cu meningită tuberculoasă și se inițiază schema de tratament antituberculos în faza intensivă. Față de schemele standard folosite în alte forme de tuberculoză pulmonară, care este modificarea recomandată și motivul ei?",
          "options": [
            "Se înlocuiește pirazinamida cu acid paraaminosalicilic încă din prima linie de tratament",
            "Se înlocuiește etambutolul cu streptomicină, deoarece etambutolul nu traversează bariera meningeală",
            "Se dublează doza de pirazinamidă și se elimină izoniazida din schemă",
            "Se elimină rifampicina din schemă din cauza toxicității hepatice crescute la nivel meningeal",
            "Se folosește doar izoniazidă în monoterapie, pentru penetrabilitate meningeală maximă"
          ],
          "correct": 1,
          "explanation": "Textul precizează explicit că în meningita tuberculoasă se folosește streptomicina în locul etambutolului, deoarece acesta din urmă nu traversează bariera meningoencefalică, în timp ce streptomicina, deși cu difuziune redusă în LCR în mod normal, are penetrabilitate crescută în prezența inflamației meningeale.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 367-379"
        },
        {
          "id": "41-4",
          "stem": "Un copil de 3 ani necesită asociere de tuberculostatice pentru o formă de tuberculoză pulmonară extinsă. Deși etambutolul are o penetrabilitate bună inclusiv în SNC, la această vârstă utilizarea sa este evitată. Care este motivul principal?",
          "options": [
            "Interferează semnificativ cu absorbția digestivă a rifampicinei",
            "Risc crescut de hepatotoxicitate severă și ireversibilă",
            "Risc crescut de ototoxicitate ireversibilă specific acestei vârste",
            "Risc de nevrită retrobulbară, ale cărei simptome (scăderea acuității vizuale, scotoame) nu pot fi sesizate sau comunicate de copilul mic",
            "Necesită obligatoriu asociere cu piridoxină pentru prevenirea neuropatiei periferice"
          ],
          "correct": 3,
          "explanation": "Etambutolul poate produce, la doze mari, nevrită retrobulbară cu scăderea acuității vizuale, vedere în ceață și scotoame centrale. Textul menționează că se recomandă după vârsta de 5 ani, deoarece sub această vârstă copilul nu poate sesiza sau relata tulburările de vedere, reacție adversă posibilă a medicamentului.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 367-379"
        },
        {
          "id": "41-5",
          "stem": "O lăuză este diagnosticată imediat postpartum cu miliarie tuberculoasă, formă cu diseminare hematogenă. Nou-născutul este asimptomatic la naștere. Care este conduita corectă în acest caz?",
          "options": [
            "Se inițiază direct schema completă de patru tuberculostatice timp de 12 luni, indiferent de rezultatele investigațiilor",
            "Alăptarea continuă fără nicio restricție, iar copilul se testează IDR-PPD abia la vârsta de 1 an",
            "Nu sunt necesare investigații suplimentare, deoarece transmiterea la nou-născut prin această cale este exclusă",
            "Se administrează doar vaccinarea BCG, fără alte investigații sau tratament",
            "Copilul este evaluat pentru tuberculoză congenitală (inclusiv examen histologic al placentei), separat de mamă până la momentul necontagiozității acesteia și tratat cu izoniazidă până la testarea IDR-PPD la 4-6 luni"
          ],
          "correct": 4,
          "explanation": "În cazul mamei cu diseminare hematogenă (meningită TB, miliarie, TB osteoarticulară), nou-născutul trebuie evaluat pentru tuberculoză congenitală, inclusiv prin examinarea histologică a placentei. Dacă aspectul clinic și radiologic nu sunt sugestive pentru boală congenitală, copilul se separă de mamă până la necontagiozitate și primește izoniazidă până la testarea IDR-PPD la 4-6 luni, tratament care se prelungește sau se sistează în funcție de rezultat.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 367-379"
        }
      ]
    },
    {
      "num": 44,
      "title": "Leucemiile acute limfoblastice și non-limfoblastice",
      "questions": [
        {
          "id": "44-1",
          "stem": "Un copil în vârstă de 3 ani se prezintă cu paloare, fatigabilitate, echimoze spontane și dureri osoase, cu debut insidios în ultimele 3 săptămâni. Hemograma arată Hb 6,5 g/dL, trombocite 18.000/mmc, leucocite 3.200/mmc, fără blaști vizibili pe frotiul de sânge periferic. Care este investigația esențială pentru confirmarea diagnosticului de leucemie acută la acest pacient?",
          "options": [
            "Mielograma (aspiratul medular)",
            "Radiografia cardio-pulmonară",
            "Ecografia abdominală",
            "Puncția lombară",
            "Biopsia ganglionară"
          ],
          "correct": 0,
          "explanation": "Formele aleucemice (leucocite < 10.000/mmc, fără blaști pe frotiul periferic) sunt frecvente în LAL, astfel încât diagnosticul se stabilește prin mielogramă. Măduva osoasă este constant hipercelulară și infiltrată, fiind suficientă prezența a peste 25% limfoblaști pentru diagnosticul de leucemie acută. Puncția lombară și celelalte explorări sunt utile ulterior, pentru evaluarea extensiei bolii, nu pentru diagnosticul de bază.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1230-1247"
        },
        {
          "id": "44-2",
          "stem": "Un copil de 5 ani se prezintă cu febră, adenopatii cervicale generalizate, splenomegalie, iar pe frotiul de sânge periferic se observă limfocitoză cu limfocite atipice. Tabloul clinico-biologic mimează o leucemie acută limfoblastică. Care este diagnosticul cel mai probabil ce trebuie exclus prin aspirat medular și serologie specifică înainte de a susține diagnosticul de LAL?",
          "options": [
            "Limfomul Hodgkin",
            "Anemia aplastică",
            "Purpura trombocitopenică imună",
            "Mononucleoza infecțioasă (infecție cu virus Epstein-Barr)",
            "Artrita reumatoidă juvenilă"
          ],
          "correct": 3,
          "explanation": "Mononucleoza infecțioasă și alte infecții virale pot prezenta un tablou clinic asemănător leucemiei acute, cu adenopatii generalizate, splenomegalie, febră și limfocitoză. Limfocitele atipice din infecția cu EBV pot fi ușor confundate cu celulele blastice, fiind necesare aspiratul medular și serologia pentru EBV pentru diagnosticul de certitudine. Celelalte entități nu asociază tipic limfocite atipice cu acest tablou.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1230-1247"
        },
        {
          "id": "44-3",
          "stem": "Un sugar cu leucemie acută limfoblastică prezintă un număr de leucocite de 80.000/mmc la debut, rearanjament al genei MLL cu t(4;11) și infiltrare a sistemului nervos central. Cum trebuie interpretat acest ansamblu de caracteristici din punct de vedere prognostic și al încadrării terapeutice?",
          "options": [
            "Prognostic nefavorabil, cu încadrare în grupa de risc înalt/foarte înalt",
            "Prognostic favorabil, independent de vârstă, datorită hiperdiploidiei asociate frecvent la sugari",
            "Indică o leucemie congenitală cu prognostic identic populației generale cu LAL",
            "Nu influențează prognosticul, fiind necesară doar profilaxia meningocerebrală standard",
            "Este caracteristic formei L3 cu celule B mature și se tratează conform protocolului de limfom Burkitt"
          ],
          "correct": 0,
          "explanation": "Vârsta sub 1 an, leucocitoza peste 50.000/mmc, rearanjamentele MLL t(4;11) și infiltrarea SNC sunt toate criterii de prognostic nefavorabil în LAL. Pacienții cu t(4;11) sunt de obicei sugari cu leucocitoză mare și infiltrare SNC, adesea fără remisiune la finalul inducției, fiind încadrați în grupele de risc înalt/foarte înalt din stratificarea COG.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1230-1247"
        },
        {
          "id": "44-4",
          "stem": "Un copil cu leucemie acută limfoblastică hiperleucocitară (leucocite 180.000/mmc) dezvoltă, la inițierea tratamentului, acid uric seric peste 10 mg/dL, hiperpotasemie și semne incipiente de insuficiență renală acută. Care este diagnosticul și conduita terapeutică imediată corectă?",
          "options": [
            "Leucostazie cerebrală - transfuzie de masă eritrocitară",
            "Infiltrare blastică renală - biopsie renală de urgență",
            "Coagulare intravasculară diseminată - administrare de plasmă proaspătă congelată",
            "Sindrom de liză tumorală - hiperhidratare, alcalinizare cu bicarbonat de sodiu și allopurinol",
            "Sepsis sever - antibioterapie empirică cu spectru larg"
          ],
          "correct": 3,
          "explanation": "Liza blastică rapidă din leucemiile hiperleucocitare determină hiperuricemie (peste 10 mg/dL, cu precipitarea uraților în tubii renali), hiperpotasemie, hiperfosfatemie și insuficiență renală acută, tablou caracteristic sindromului de liză tumorală. Tratamentul constă în hiperhidratare (3.000 mL/m2/zi), alcalinizare cu bicarbonat de sodiu și allopurinol, cu reducerea dozei acestuia din urmă în caz de insuficiență renală.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1230-1247"
        },
        {
          "id": "44-5",
          "stem": "Un copil cu leucemie acută mieloidă se prezintă cu sângerări gingivale severe, echimoze extinse, trombocitopenie marcată, timpi de protrombină și de trombină prelungiți și D-dimeri crescuți, iar mielograma evidențiază promielocite atipice. Care este conduita terapeutică specifică ce trebuie inițiată rapid, chiar la simpla suspiciune a acestui subtip de LAM?",
          "options": [
            "Acidul all-trans-retinoic (ATRA)",
            "Vincristina asociată cu prednison",
            "Metotrexatul intratecal, izolat",
            "Imatinibul (inhibitor de tirozin-kinază)",
            "Radioterapia craniană profilactică"
          ],
          "correct": 0,
          "explanation": "Tabloul clinico-biologic descrie leucemia acută promielocitară (LAM3), caracterizată prin coagulopatie severă asociată translocației t(15;17) PML-RARa. La cea mai mică suspiciune de LAM3 trebuie inițiat rapid tratamentul cu ATRA, care ameliorează coagularea intravasculară diseminată și manifestările hemoragice; translocația este asociată cu răspuns bun la acest agent.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1230-1247"
        }
      ]
    },
    {
      "num": 45,
      "title": "Limfoamele maligne Hodgkiniene și non-Hodgkiniene la copil",
      "questions": [
        {
          "id": "45-1",
          "stem": "Un băiat de 7 ani, provenind dintr-o zonă endemică din Africa ecuatorială, se prezintă cu o tumoră cu creștere rapidă la nivelul mandibulei. Biopsia evidențiază un infiltrat difuz cu celule mici, omogene, cu nucleoli proeminenți, fenotip B matur (CD19, CD20, CD22 pozitiv, TdT negativ). Care investigație este considerată «standardul de aur» pentru confirmarea diagnosticului suspectat?",
          "options": [
            "Evidențierea cromozomului Philadelphia prin citogenetică standard",
            "Determinarea expresiei CD30 prin imunohistochimie",
            "Puncția lombară cu examinarea lichidului cefalorahidian",
            "Dozarea LDH și a acidului uric seric",
            "Identificarea rearanjamentului genei c-MYC prin tehnici moleculare"
          ],
          "correct": 4,
          "explanation": "Tabloul clinico-morfologic descris (localizare mandibulară, vârf de incidență în jurul vârstei de 7 ani, fenotip B matur TdT negativ) este caracteristic limfomului Burkitt endemic. Translocațiile t(8;14), t(2;8) sau t(8;22) determină expresia deficitară a genei c-MYC, iar identificarea rearanjamentului c-MYC prin tehnici moleculare reprezintă, conform textului, standardul de aur pentru diagnosticul limfomului Burkitt.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1252-1262"
        },
        {
          "id": "45-2",
          "stem": "Un copil de 9 ani este investigat pentru o masă abdominală voluminoasă. Medulograma arată infiltrare cu celule blastice limfoide în proporție de 18%, fără afectare a sistemului nervos central. Conform criteriilor prezentate pentru diagnosticul diferențial dintre limfomul non-Hodgkinian și leucemia acută limfoblastică, care este încadrarea corectă a cazului?",
          "options": [
            "Limfom limfoblastic, stadiul I",
            "Leucemie acută limfoblastică cu determinare abdominală",
            "Limfom Hodgkin cu afectare medulară",
            "Limfom non-Hodgkinian, stadiul IV",
            "Leucemie mieloidă cronică în criză blastică"
          ],
          "correct": 3,
          "explanation": "Textul precizează că prezența a peste 25% blaști în măduva osoasă definește leucemia acută limfoblastică, în timp ce un procent sub 25% blaști medulari, în contextul unei mase tumorale extramedulare, sugerează limfom non-Hodgkinian stadiul IV (prin definiție, afectarea medulară sau a SNC încadrează boala în stadiul IV). Cazul prezentat, cu 18% blaști medulari, se încadrează astfel ca LMNH stadiul IV, nu ca leucemie acută limfoblastică.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1252-1262"
        },
        {
          "id": "45-3",
          "stem": "Un copil este diagnosticat cu limfom Burkitt abdominal, cu masă tumorală voluminoasă și risc crescut de sindrom de liză tumorală. Care este conduita corectă înaintea inițierii chimioterapiei citostatice?",
          "options": [
            "Restricție hidrică pentru prevenirea edemului cerebral, asociată cu diuretice de ansă",
            "Hiperhidratare intravenoasă (3.000 mL/m²/24h), alcalinizarea urinei cu bicarbonat izoton și administrare de allopurinol",
            "Administrare imediată de doxorubicină în doză redusă, fără hidratare prealabilă",
            "Transfuzie de masă eritrocitară, indiferent de valoarea hemoglobinei",
            "Radioterapie profilactică pe abdomen, urmată de chimioterapie standard"
          ],
          "correct": 1,
          "explanation": "Sindromul de liză tumorală, frecvent în limfoamele cu celule mici precum Burkitt, reprezintă o urgență ce trebuie anticipată și tratată înaintea terapiei citostatice. Textul menționează explicit hidratarea IV cu 3.000 mL/m²/24h, alcalinizarea urinei cu bicarbonat izoton 14 g/L și allopurinol 10 mg/kg/zi până la normalizarea acidului uric.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1252-1262"
        },
        {
          "id": "45-4",
          "stem": "Un adolescent cu limfom Hodgkin cu celularitate mixtă prezintă stadiul IV de boală, adenopatie mediastinală de dimensiuni mari și febră, având o albumină serică de 3,1 g/dL. Conform scorului prognostic Childhood Hodgkin International Prognostic Score (CHIPS) menționat în text, care dintre următorii parametri NU se numără printre factorii de predicție negativă incluși în acest scor?",
          "options": [
            "Viteza de sedimentare a hematiilor crescută",
            "Stadiul IV de boală",
            "Adenopatia mediastinală de dimensiuni mari",
            "Nivelul albuminei serice sub 3,5 g/dL",
            "Prezența febrei"
          ],
          "correct": 0,
          "explanation": "Scorul CHIPS, menționat în text ca având valoare predictivă pentru supraviețuirea fără evenimente, include patru factori de predicție negativă: stadiul IV de boală, adenopatia mediastinală mare, nivelul albuminei sub 3,5 g/dL și febra. VSH crescut este menționat separat, ca marker de evolutivitate a bolii, dar nu face parte din scorul CHIPS.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1252-1262"
        },
        {
          "id": "45-5",
          "stem": "Un copil de 10 ani diagnosticat cu limfom Hodgkin prezintă la evaluarea inițială adenopatii cervicale bilaterale și axilare drepte, toate localizate deasupra diafragmului, fără hepatosplenomegalie sau alte determinări extralimfatice. Nu prezintă scădere ponderală, febră sau transpirații nocturne. Conform stadializării Ann Arbor modificate Cotswold, care este stadiul corect al bolii?",
          "options": [
            "Stadiul IIB",
            "Stadiul IIIA",
            "Stadiul IA",
            "Stadiul IVB",
            "Stadiul IIA"
          ],
          "correct": 4,
          "explanation": "Conform clasificării prezentate, stadiul II corespunde afectării mai multor grupe ganglionare situate de aceeași parte a diafragmului, situație întâlnită la acest pacient (adenopatii cervicale bilaterale și axilare drepte, toate supradiafragmatice). Absența simptomelor generale (scădere ponderală, febră, transpirații nocturne) încadrează cazul în categoria A, rezultând stadiul IIA.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1252-1262"
        }
      ]
    },
    {
      "num": 47,
      "title": "Urgențele oncologice la copil",
      "questions": [
        {
          "id": "47-1",
          "stem": "Un copil de 5 ani se prezintă cu dispnee, ortopnee, edem facial și distensie venoasă cervicală, cu debut recent, fără antecedente oncologice cunoscute. Radiografia toracică evidențiază o masă mediastinală anterosuperioară, sugestivă pentru sindrom de venă cavă superioară. La examenul clinic se palpează adenopatii cervicale. Care este conduita cea mai adecvată pentru stabilirea rapidă a diagnosticului histologic, cu risc minim pentru pacient?",
          "options": [
            "Biopsie mediastinală sub anestezie generală, ca primă intenție",
            "Biopsierea adenopatiei periferice palpabile, deoarece este mai rapidă și mai puțin invazivă decât biopsia mediastinală",
            "Chimioterapie empirică imediată, înaintea oricărei tentative de biopsie",
            "Sedare conștientă cu anxiolitice pentru realizarea unei biopsii mediastinale ghidate CT",
            "Radioterapie empirică imediată asupra masei mediastinale, fără diagnostic histologic anterior"
          ],
          "correct": 1,
          "explanation": "Textul precizează că, dacă există adenopatii periferice, se recomandă biopsierea acestora, fiind mai rapidă și mai puțin invazivă decât biopsia mediastinală. Anestezia generală la acești pacienți comportă risc mare de insuficiență respiratorie/cardiacă și intubație dificilă, iar sedarea conștientă cu anxiolitice poate fi contraindicată deoarece deprimă respirația și produce vasodilatație periferică. Radioterapia sau chimioterapia empirică, fără diagnostic de certitudine, pot compromite interpretarea histopatologică ulterioară.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 588-598"
        },
        {
          "id": "47-2",
          "stem": "Un copil de 12 ani, aflat la 10 zile de la chimioterapie pentru leucemie acută limfoblastică, dezvoltă neutropenie severă, febră, dureri abdominale și diaree. Ecografia abdominală evidențiază îngroșarea peretelui la nivelul cecului și ileonului terminal, fără semne de perforație sau necroză, iar trombocitele și coagularea sunt în limite normale. Care este conduita terapeutică inițială cea mai adecvată pentru acest tablou clinic sugestiv de tiflită?",
          "options": [
            "Apendicectomie de urgență",
            "Repaus digestiv strict și monitorizare, fără antibioterapie",
            "Drenaj chirurgical percutanat al colecției, fără antibioterapie",
            "Laparotomie exploratorie imediată cu rezecție de cec",
            "Antibioterapie cu spectru larg, activă pe germeni Gram-negativi, anaerobi și fungi"
          ],
          "correct": 4,
          "explanation": "Tratamentul tiflitei constă în antibiotice cu spectru larg, active pe Gram-negativi, anaerobi (metronidazol, carbapeneme) și fungi, mortalitatea scăzând semnificativ doar cu tratament medical. Intervenția chirurgicală este rezervată cazurilor cu sângerare persistentă necorectată, perforație, necroză intestinală sau eșecul tratamentului medical, situații absente în acest caz.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 588-598"
        },
        {
          "id": "47-3",
          "stem": "Doi copii cu neuroblastom paraspinal se prezintă cu durere toracolombară cu debut de câteva zile. Primul copil nu prezintă deficite neurologice la examenul clinic. Al doilea copil prezintă parapareză nou instalată la membrele inferioare. Care este conduita imagistică corectă pentru cei doi pacienți, având în vedere riscul de compresie medulară?",
          "options": [
            "Primul pacient poate avea RMN amânat 24 de ore, iar al doilea necesită investigație imagistică imediată, dată fiind apariția deficitului neurologic",
            "La ambii pacienți, examenul RMN poate fi amânat 24 de ore, indiferent de examenul neurologic",
            "Al doilea pacient poate aștepta 24 de ore, deoarece parapareza este reversibilă spontan în majoritatea cazurilor",
            "La ambii pacienți este suficientă radiografia simplă de coloană, RMN nefiind necesar",
            "Ambii pacienți necesită RMN imediat doar dacă durerea este accentuată nocturn"
          ],
          "correct": 0,
          "explanation": "Textul precizează că orice copil cu deficite neurologice nou apărute trebuie investigat imagistic imediat prin RMN, deoarece paraplegia se poate instala rapid și poate fi ireversibilă. La copiii cu dureri toracolombare localizate, fără deficite neurologice focale, investigația RMN poate fi amânată 24 de ore.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 588-598"
        },
        {
          "id": "47-4",
          "stem": "Un copil cu leucemie acută mieloblastică prezintă hiperleucocitoză severă (leucocite 350.000/mm3) și trombocitopenie cu valoare de 15.000/mm3, fără sângerare activă. Care dintre următoarele afirmații privind conduita transfuzională este corectă?",
          "options": [
            "Transfuzia de plasmă proaspătă congelată este tratamentul de primă intenție al hiperleucocitozei",
            "Transfuzia de masă trombocitară este contraindicată la orice valoare a trombocitelor, din cauza riscului de agravare a leucostazei",
            "Transfuzia de concentrat eritrocitar trebuie administrată imediat, fără restricții, pentru corectarea anemiei",
            "Transfuzia de masă trombocitară este permisă pentru profilaxia hemoragiei, deoarece trombocitele nu modifică semnificativ vâscozitatea sanguină",
            "Exsangvinotransfuzia este contraindicată la copiii cu hiperleucocitoză, indiferent de severitatea simptomelor"
          ],
          "correct": 3,
          "explanation": "Pacienții cu trombocitopenie sub 20.000/ml pot primi transfuzie de masă trombocitară pentru prevenirea hemoragiei, deoarece trombocitele nu modifică semnificativ vâscozitatea sanguină. În schimb, concentratul eritrocitar crește vâscozitatea sanguină și trebuie utilizat cu prudență la acești pacienți. Exsangvinotransfuzia și/sau leucafereza pot fi utile pentru scăderea rapidă a numărului de leucocite în formele severe.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 588-598"
        },
        {
          "id": "47-5",
          "stem": "Un copil de 8 ani, aflat sub tratament cu vincristină, prezintă hiponatremie severă simptomatică (natremie 116 mmol/l, cu convulsii), atribuită SIADH. Se decide corectarea natremiei cu soluție salină hipertonă și furosemid intravenos. Care este rata maximă recomandată de corecție a natremiei, pentru a evita o complicație neurologică gravă?",
          "options": [
            "Natremia trebuie normalizată complet în primele 2 ore",
            "Fără limită, corecția trebuie să fie cât mai rapidă posibil",
            "4-6 mmol/l/oră",
            "1-2 mmol/l/oră",
            "8-10 mmol/l/oră"
          ],
          "correct": 3,
          "explanation": "Textul specifică faptul că, în hiponatremia acută simptomatică tratată cu soluție salină hipertonă și furosemid, rata de corecție a sodiului nu trebuie să depășească 1-2 mmoli/l/oră, deoarece o corecție prea rapidă poate produce mielinoză pontină, urmată de afectare neurologică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 588-598"
        }
      ]
    },
    {
      "num": 48,
      "title": "Tumorile SNC. Tumorile solide: nefroblastomul, neuroblastomul, histiocitozele",
      "questions": [
        {
          "id": "48-1",
          "stem": "Un sugar de 8 luni este adus pentru diaree cronică apoasă, trenantă, cu faliment al creșterii și hipopotasemie severă. Examenul clinic și imagistica decelează o masă tumorală retroperitoneală, la nivelul lanțului simpatic paravertebral. Care este mecanismul cel mai probabil al diareei în acest context?",
          "options": [
            "Invaginație intestinală cronică, secundară compresiei tumorale asupra ansei intestinale",
            "Secreție tumorală de peptid intestinal vasoactiv (sindrom Kerner-Morrison), în cadrul unui neuroblastom",
            "Efect motor intestinal direct al catecolaminelor secretate în exces de tumoră",
            "Sindrom de malabsorbție prin infiltrare limfatică mezenterică, specific histiocitozei Langerhans",
            "Insuficiență pancreatică exocrină secundară compresiei ductului pancreatic de către tumoră"
          ],
          "correct": 1,
          "explanation": "Textul menționează explicit, printre simptomele asociate producerii de catecolamine de către neuroblastom, sindromul Kerner-Morrison - o tumoră secretantă de peptid vasoactiv intestinal, care determină diaree cronică cu falimentul creșterii și niveluri scăzute de potasiu. Localizarea retroperitoneală, de-a lungul lanțului simpatic, este tipică pentru neuroblastom.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1264-1269"
        },
        {
          "id": "48-2",
          "stem": "O fetiță de 3 ani este evaluată pentru mișcări oculare haotice, multidirecționale (opsoclonus), mioclonii ale trunchiului și ataxie de mers, instalate progresiv în câteva săptămâni. Investigațiile decelează o tumoră retroperitoneală, iar examenul histopatologic stabilește diagnosticul de neuroblastom bine diferențiat, care este extirpat chirurgical. Care dintre următoarele afirmații despre acest tablou clinic este corectă?",
          "options": [
            "Sindromul de ataxie-opsoclonus-mioclonus asociază, de regulă, un prognostic oncologic favorabil, dar simptomatologia neurologică poate persista chiar și după extirparea tumorii",
            "Ataxia-opsoclonus-mioclonus este determinată exclusiv de metastazele cerebrale ale neuroblastomului",
            "Sindromul descris este specific tumorii Wilms și nu a fost descris în neuroblastom",
            "Simptomele neurologice paraneoplazice dispar constant și complet imediat după rezecția tumorii primare",
            "Prezența opsoclonusului semnalează întotdeauna o formă de neuroblastom slab diferențiat, cu prognostic rezervat"
          ],
          "correct": 0,
          "explanation": "Conform textului, sindromul de ataxie-opsoclonus-mioclonus este mai frecvent în tumorile bine diferențiate și are un prognostic oncologic favorabil, însă simptomatologia neurologică poate persista chiar dacă tumora a fost extirpată. Acesta este un exemplu clasic de sindrom paraneoplazic al neuroblastomului, cu prognostic tumoral bun dar sechele neurologice posibile.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1264-1269"
        },
        {
          "id": "48-3",
          "stem": "Un sugar de 6 luni cu aniridie bilaterală și malformații genito-urinare (criptorhidie, hipospadias) este diagnosticat, în urma investigării unei mase abdominale, cu tumoră Wilms. Din ce sindrom face parte cel mai probabil această asociere și care este anomalia genetică subiacentă?",
          "options": [
            "Sindromul Denys-Drash, prin mutația genei WT1, asociat cu ambiguitate sexuală și hipogonadism sever",
            "Sindromul Beckwith-Wiedemann, prin deleția genei WT2 de pe cromozomul 11p15",
            "Sindromul Perlman, în contextul unor mutații ale genelor care codează ribonucleaza",
            "Sindromul WAGR, prin deleția genei WT1 de pe cromozomul 11p13",
            "Sindromul Li-Fraumeni, prin mutații ale genelor TP53 și CHEK2"
          ],
          "correct": 3,
          "explanation": "Sindromul WAGR reunește tumora Wilms cu aniridia, malformații genito-urinare (hipospadias, criptorhidie, rinichi în potcoavă) și retard mintal, fiind asociat cu deleția cromozomului 11p13 (gena WT1). Beckwith-Wiedemann, Denys-Drash, Li-Fraumeni și Perlman sunt alte sindroame asociate nefroblastomului, dar cu tablou clinic și anomalii genetice diferite, descrise distinct în text.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1296-1298"
        },
        {
          "id": "48-4",
          "stem": "Un sugar anterior eutrofic dezvoltă, în decurs de câteva luni, o caşexie marcată, cu emaciere severă, în absența unor modificări evidente ale apetitului sau a unor simptome digestive; paradoxal, copilul pare alert, uneori euforic. Care este localizarea cea mai probabilă a unei tumori cerebrale la acest sugar?",
          "options": [
            "Tumoră/infiltrare diencefalică (regiune hipotalamică), cu sindrom diencefalic",
            "Tumoră infratentorială, de fosă posterioară",
            "Tumoră de emisferă cerebrală",
            "Tumoră a regiunii pineale, cu sindrom Parinaud",
            "Tumoră/infiltrare de trunchi cerebral"
          ],
          "correct": 0,
          "explanation": "Tabelul cu semnele și simptomele tumorilor SNC în funcție de localizare arată că tumora/infiltrarea diencefalică se manifestă prin sindrom diencefalic - cașexie apărută la sugarii inițial eutrofici, spre deosebire de tumorile pineale (sindrom Parinaud), infratentoriale (ataxie, nistagmus) sau de trunchi cerebral (oftalmoplegie orizontală, pareze de nervi cranieni).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1264-1269"
        },
        {
          "id": "48-5",
          "stem": "Un copil de 4 ani prezintă poliurie și polidipsie, exoftalmie bilaterală progresivă și leziuni osteolitice multiple ale calotei craniene, vizibile radiologic, cu aspect de „hartă geografică\". Care este diagnosticul cel mai probabil?",
          "options": [
            "Craniofaringiom",
            "Neuroblastom cu determinări metastatice osoase craniene",
            "Tumoră Wilms cu metastaze osoase craniene",
            "Histiocitoza Langerhans, forma diseminată cronică (Hand-Schuller-Christian)",
            "Histiocitoza Langerhans, forma localizată (granulom eozinofil unifocal)"
          ],
          "correct": 3,
          "explanation": "Forma diseminată cronică Hand-Schuller-Christian este caracterizată clinic prin triada: leziuni ale oaselor membranoase, diabet insipid și exoftalmie, cu aspect radiologic de lize multiple ale calotei craniene. Forma localizată (granulomul eozinofil unifocal) nu asociază de regulă diabet insipid și exoftalmie, iar craniofaringiomul este citat în text doar ca diagnostic diferențial al diabetului insipid, fără leziunile osoase și exoftalmia descrise.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1296-1298"
        }
      ]
    },
    {
      "num": 49,
      "title": "Anomaliile hidro-electrolitice și acido-bazice la copil",
      "questions": [
        {
          "id": "49-1",
          "stem": "Un sugar de 8 luni este adus la camera de gardă pentru vărsături și diaree cu debut de 2 zile. La examenul clinic se constată: puls slab și rapid, oligoanurie, față încercănată, fontanelă anterioară deprimată, pliu cutanat persistent, absența lacrimilor, mucoase uscate și timp de recolorare capilară foarte întârziat. Care este gradul de deshidratare sugerat de acest tablou clinic?",
          "options": [
            "Nu se poate aprecia clinic, fiind necesară exclusiv determinarea greutății pre-boală",
            "Deshidratare sub 3% din greutatea corporală, fără semnificație clinică",
            "Deshidratare severă (peste 10% din greutatea corporală)",
            "Deshidratare medie (6-9% din greutatea corporală)",
            "Deshidratare ușoară (3-5% din greutatea corporală)"
          ],
          "correct": 2,
          "explanation": "Conform tabelului 17.2, asocierea puls slab și rapid, oligoanurie, față încercănată, fontanelă deprimată, pliu cutanat persistent, absența lacrimilor, mucoase uscate și timp de recolorare capilară foarte întârziat caracterizează deshidratarea severă (>10% din greutate). Formele ușoare și medii au tablou clinic mai puțin sever (puls normal/tahicardie și diureză redusă, respectiv oligurie și iritabilitate/letargie, fără pliu persistent sau TRC foarte întârziat).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "49-2",
          "stem": "Un copil cu greutatea de 25 kg necesită calcularea necesarului hidric de întreținere pe 24 de ore, conform metodei Holliday-Segar descrise în text. Care este necesarul de lichide/zi?",
          "options": [
            "1250 ml/zi",
            "1500 ml/zi",
            "1000 ml/zi",
            "1600 ml/zi",
            "2000 ml/zi"
          ],
          "correct": 3,
          "explanation": "Pentru greutăți peste 20 kg, metoda Holliday-Segar prevede 1500 ml + 20 ml pentru fiecare kg peste 20 kg. Pentru 25 kg: 1500 ml + 20 ml x 5 kg = 1600 ml/zi. Această metodă este utilizată pentru calcularea necesarului de lichide și electroliți în cele 24-48 de ore de corectare a deshidratării.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "49-3",
          "stem": "Un sugar cu gastroenterită acută, la care pierderile hidroelectrolitice prin diaree au fost înlocuite predominant cu apă, dezvoltă o natremie de 122 mEq/l. Care este mecanismul fiziopatologic principal ce explică reducerea marcată a volumului intravascular la acest tip de deshidratare?",
          "options": [
            "Trecerea apei din spațiul intracelular în spațiul extracelular",
            "Extravazarea lichidelor intravasculare în al treilea spațiu",
            "Pierderea insensibilă crescută prin evaporare cutanată",
            "Creșterea secreției de hormon antidiuretic cu retenție hidrică intravasculară",
            "Trecerea apei din spațiul extracelular în spațiul intracelular"
          ],
          "correct": 4,
          "explanation": "Textul precizează că deshidratarea hiponatremică (Na<130 mEq/l) determină o reducere importantă a volumului intravascular, explicată prin trecerea apei din spațiul extracelular în spațiul intracelular. Acest tip apare când pierderile de lichide bogate în sodiu sunt înlocuite cu apă, concentrația sodiului seric scăzând suplimentar.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "49-4",
          "stem": "Un sugar cu deshidratare hipernatremică (Na=168 mEq/l) este corectat rapid prin administrare de lichide hipotone, iar în cursul corectării dezvoltă convulsii și alterarea stării de conștiență. Care este explicația fiziopatologică cea mai probabilă, conform textului?",
          "options": [
            "Mielinoliză pontină centrală prin corectare rapidă a sodiului",
            "Edem cerebral prin trecerea apei din spațiul extracelular hipoton în celulele creierului, ca urmare a scăderii rapide a osmolarității extracelulare",
            "Hemoragie intracraniană prin creșterea bruscă a volumului intravascular",
            "Hipoglicemie secundară administrării de soluții glucozate concentrate",
            "Hipocalcemie secundară administrării masive de bicarbonat de sodiu"
          ],
          "correct": 1,
          "explanation": "Textul arată că scăderea rapidă a osmolarității extracelulare în timpul corectării hipernatremiei determină trecerea apei din spațiul extracelular în celulele creierului, producând edem cerebral și convulsii. Din acest motiv, corectarea hipernatremiei trebuie făcută lent, în 3-4 zile în formele severe, fără ritm rapid în primele 8 ore. Mielinoliza pontină centrală este riscul asociat corectării rapide a hiponatremiei, nu al hipernatremiei.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "49-5",
          "stem": "Un sugar de 6 luni se prezintă în stare de șoc hipovolemic secundar unei gastroenterite acute severe (puls slab și rapid, oligoanurie, timp de recolorare capilară foarte întârziat). Care este conduita inițială recomandată pentru refacerea volemiei?",
          "options": [
            "Bicarbonat de sodiu în bolus, pentru corectarea acidozei metabolice asociate",
            "Ser fiziologic 20 ml/kg administrat în 10-15 minute, repetabil până la refacerea volemiei (maximum 60 ml/kg)",
            "Soluție glucozată 5% în bolus de 20 ml/kg administrată rapid",
            "Soluție hipotonă de clorură de sodiu 0,45% în bolus de 20 ml/kg",
            "Rehidratare orală sau pe sondă nazogastrică, similar deshidratării ușoare/moderate"
          ],
          "correct": 1,
          "explanation": "În SDA severă, pentru refacerea volemiei se administrează ser fiziologic 20 ml/kg în 10-15 minute, repetabil până la refacerea volemiei, până la maximum 60 ml/kg. Rehidratarea orală/nazogastrică este rezervată formelor ușoare/moderate, iar soluțiile glucozate sau hipotone nu sunt indicate pentru refacerea rapidă a volemiei în șocul hipovolemic.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        }
      ]
    },
    {
      "num": 50,
      "title": "Sindromul hemolitic-uremic",
      "questions": [
        {
          "id": "50-1",
          "stem": "Un copil în vârstă de 3 ani este adus la spital pentru paloare accentuată, oligurie și peteșii apărute la aproximativ 10 zile de la un episod de diaree cu scaune sanguinolente. Examenele de laborator evidențiază: Hb 7 g/dL cu reticulocitoză, trombocite 40.000/mm3, schizocite pe frotiul de sânge periferic, uree și creatinină crescute. Care este diagnosticul cel mai probabil?",
          "options": [
            "Coagulare intravasculară diseminată în context septic",
            "Sindrom hemolitic-uremic tipic asociat cu diaree (D+SHU)",
            "Anemie hemolitică autoimună cu insuficiență renală asociată",
            "Purpură Henoch-Schönlein cu afectare renală",
            "Purpură trombotică trombocitopenică"
          ],
          "correct": 1,
          "explanation": "Triada anemie hemolitică microangiopatică (cu schizocite), trombocitopenie și insuficiență renală acută, precedată de diaree inițial apoasă apoi sanguinolentă cu debut brusc la 1-2 săptămâni, este caracteristică sindromului hemolitic-uremic tipic D+SHU, cel mai frecvent determinat de E. coli producătoare de shiga-toxină (STEC). Diagnosticul pozitiv al SHU este pus tocmai de această triadă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1318-1320"
        },
        {
          "id": "50-2",
          "stem": "Un copil cu diaree acută la care se suspectează infecție cu Escherichia coli enterohemoragic (tulpină producătoare de shiga-toxină) se prezintă la medic. Care este conduita corectă privind antibioterapia în acest context?",
          "options": [
            "Se administrează ciprofloxacină per os timp de 5 zile",
            "Se administrează metronidazol asociat cu un aminoglicozid",
            "Se evită tratamentul antibiotic, deoarece poate accelera eliberarea de shiga-toxină în circulație și precipita apariția SHU",
            "Se administrează imediat ceftriaxonă pentru a preveni diseminarea infecției",
            "Se administrează amoxicilină-clavulanat pentru a scurta durata diareei"
          ],
          "correct": 2,
          "explanation": "Textul precizează explicit că se va evita terapia antibiotică în diareea cu Escherichia coli, întrucât aceasta accelerează eliberarea de shiga-toxină în circulație, putând precipita apariția sindromului hemolitic-uremic. Aceasta este o diferență importantă față de conduita din alte infecții bacteriene invazive.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1318-1320"
        },
        {
          "id": "50-3",
          "stem": "Un sugar în vârstă de 4 luni dezvoltă un tablou de sindrom hemolitic-uremic cu debut insidios, fără istoric de diaree, cu tendință la recăderi. Care dintre următoarele reprezintă cea mai probabilă cauză subiacentă?",
          "options": [
            "Deficit de factor H, factor I sau al proteinei cofactor membranare (MCP) - forme familiale de SHU atipic",
            "Infecție cu Escherichia coli O157:H7",
            "Consum de carne insuficient preparată termic",
            "Infecție cu Shigella dysenteriae tip 1",
            "Infecție invazivă cu Streptococcus pneumoniae"
          ],
          "correct": 0,
          "explanation": "SHU atipic (D-SHU) apare mai ales la sugarii cu vârsta sub 6 luni, are debut insidios și recăderi frecvente, prognostic nefavorabil, iar dintre cauzele familiale sunt menționate deficitul de factor H, de factor I sau al proteinei cofactor membranare (MCP). Celelalte variante corespund SHU tipic, asociat diareei.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1318-1320"
        },
        {
          "id": "50-4",
          "stem": "La un copil cu sindrom hemolitic-uremic aflat în evoluție, care dintre următoarele constituie o indicație pentru inițierea dializei?",
          "options": [
            "Hipertensiune arterială ușoară, asimptomatică",
            "Trombocitopenie izolată sub 100.000/mm3, fără alte modificări",
            "Proteinurie de rang nefrotic izolată",
            "Anemie cu hemoglobină de 9 g/dL",
            "Hiperpotasemie peste 7,5 mEq/L, în special dacă se asociază cu modificări electrocardiografice semnificative"
          ],
          "correct": 4,
          "explanation": "Criteriile de începere a dializei în SHU sunt: uree peste 100 mg/dL, hiperpotasemie peste 7,5 mEq/L (mai ales cu modificări ECG și tulburări de ritm), insuficiență cardiacă congestivă prin supraîncărcare volemică și encefalopatie hipertensivă. Celelalte modificări menționate în variantele greșite nu sunt criterii de dializă conform textului.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1318-1320"
        },
        {
          "id": "50-5",
          "stem": "Un copil dezvoltă sindrom hemolitic-uremic la câteva zile după o meningită pneumococică severă, iar testul Coombs direct este pozitiv. Care este conduita terapeutică etiologică recomandată în acest caz?",
          "options": [
            "Monoterapie cu eritromicină",
            "Evitarea oricărui tratament antibiotic, similar conduitei din SHU produs de E. coli",
            "Asocierea vancomicinei cu o cefalosporină de generația a treia (ceftriaxonă sau cefotaximă)",
            "Penicilină G în doză unică, asociată cu plasmafereză",
            "Ciprofloxacină asociată cu metronidazol"
          ],
          "correct": 2,
          "explanation": "Un test Coombs pozitiv în prezența unui SHU asociat unei infecții pneumococice susține etiologia pneumococică a SHU. În acest caz se recomandă asocierea vancomicinei cu o cefalosporină de generația a 3-a (ceftriaxonă sau cefotaximă), spre deosebire de SHU produs de E. coli, în care antibioterapia trebuie evitată.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1318-1320"
        }
      ]
    },
    {
      "num": 51,
      "title": "Hipocalcemiile și hipercalcemiile. Rahitismele vitamino-D rezistente",
      "questions": [
        {
          "id": "51-1",
          "stem": "Un nou-născut provenit din părinți consangvini prezintă la naștere hipotonie, detresă respiratorie prin deformări ale cutiei toracice și eșec de creștere. Bilanțul biologic arată hipercalcemie severă, hipercalciurie marcată (raport clearance calciu/creatinină > 0,01), hipofosfatemie și niveluri serice mult crescute de parathormon (PTH). Radiografia scheletică evidențiază demineralizare osoasă difuză și fracturi multiple. Care este diagnosticul cel mai probabil?",
          "options": [
            "Hipercalcemia hipocalciurică familială benignă (formă heterozigotă)",
            "Intoxicația cu vitamina D transmisă transplacentar de la mamă",
            "Hiperparatiroidismul neonatal sever, secundar unei mutații homozigote inactivatoare a CaSR",
            "Sindromul Williams",
            "Hipofosfatazia congenitală"
          ],
          "correct": 2,
          "explanation": "Textul descrie hiperparatiroidismul neonatal sever ca fiind caracterizat prin hipercalcemie neonatală severă, hipercalciurie (raport clearance calciu/creatinină > 0,01), niveluri crescute de PTH, deshidratare, eșecul creșterii, demineralizare osoasă, fracturi multiple și deformații ale cutiei toracice, apărând la copii cu părinți consangvini prin mutații homozigote ale CaSR. Hipercalcemia hipocalciurică familială benignă are hipercalciurie marcat redusă (clearance calciu/creatinină < 0,01) și tablou clinic mult mai discret. Sindromul Williams și intoxicația cu vitamina D se asociază cu niveluri scăzute de PTH, nu crescute.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1143-1153"
        },
        {
          "id": "51-2",
          "stem": "Un copil de 8 ani este internat pentru hipercalcemie severă simptomatică (vărsături, dureri abdominale), cu semne clinice de deshidratare moderată. Care este prima măsură terapeutică recomandată?",
          "options": [
            "Administrarea imediată de furosemid, fără expansiune volemică prealabilă",
            "Bisfosfonat intravenos, ca primă linie, indiferent de starea de hidratare",
            "Hidratare intravenoasă cu ser fiziologic 0,9%, urmată, dacă este necesar, de diuretic de ansă după corectarea stării de hidratare",
            "Corticoterapie sistemică în doză mare, ca primă linie terapeutică",
            "Dializă peritoneală de urgență"
          ],
          "correct": 2,
          "explanation": "Textul precizează că hidratarea intravenoasă crește excreția renală de calciu și este măsura de urgență inițială, iar diureticele de ansă sunt utilizate doar la copiii cu stare de hidratare adecvată, deoarece depleția intravasculară exacerbează hipercalcemia. Dializa este rezervată hipercalcemiei severe cu oligurie, iar corticoterapia necesită excluderea prealabilă a unei cauze maligne.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1143-1153"
        },
        {
          "id": "51-3",
          "stem": "Un sugar aflat sub tratament cu amfotericină B pentru o infecție fungică sistemică dezvoltă hipocalcemie simptomatică, cu tetanie. Administrarea de calciu intravenos nu ameliorează semnificativ simptomele. Care este explicația fiziopatologică cea mai probabilă și conduita corectă?",
          "options": [
            "Hipocalcemia este secundară unei rezistențe la vitamina D; se indică doze mari de calcitriol",
            "Hipocalcemia este secundară hiperfosfatemiei induse de amfotericină; se indică chelatori de fosfat",
            "Hipocalcemia se datorează unui sindrom \"hungry bone\"; se indică restricția aportului de calciu",
            "Hipocalcemia reflectă un hipoparatiroidism autoimun asociat; se indică imunosupresie",
            "Hipocalcemia este secundară hipomagneziemiei induse de amfotericină, care diminuă secreția de PTH și induce rezistență la acțiunea acestuia; este necesară corectarea magneziului"
          ],
          "correct": 4,
          "explanation": "Textul menționează aminoglicozidele, amfotericina și cisplatinul drept cele mai comune medicamente care induc hipomagneziemie, iar depleția de magneziu induce hipocalcemie prin diminuarea secreției de PTH și rezistență musculară la acțiunea PTH. Hipocalcemia secundară hipomagneziemiei nu răspunde la tratamentul cu calciu, fiind necesară corectarea magneziului.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1143-1153"
        },
        {
          "id": "51-4",
          "stem": "Un sugar de 10 luni prezintă retard de dezvoltare motorie, hipotonie musculară generalizată, dureri osoase și un episod de convulsii hipocalcemice. Radiografia articulației radiocarpiene arată aspecte clasice de rahitism, cu debut precoce. Bilanțul biologic evidențiază hipocalcemie severă, grade variate de hipofosfatemie, fosfataze alcaline crescute, PTH mult crescut, nivel seric normal de 25(OH)D, dar nivel absent sau foarte redus de 1,25(OH)2D. Care este diagnosticul cel mai probabil și tratamentul de elecție?",
          "options": [
            "Rezistență ereditară la acțiunea vitaminei D prin mutație a receptorului VDR (tip II); tratament cu doze foarte mari de calciu intravenos",
            "Deficit de 25-hidroxilază hepatică; tratament cu administrare exogenă de 25(OH)D",
            "Rahitism nutrițional prin deficit de vitamină D; tratament cu doze standard de colecalciferol oral",
            "Rahitism hipofosfatemic X-linkat prin mutație PHEX; tratament cu supliment oral de fosfor",
            "Deficit de 1-α-hidroxilază (rahitism vitamino-D dependent tip I); tratament cu doze fiziologice de calcitriol [1,25(OH)2D]"
          ],
          "correct": 4,
          "explanation": "Tabloul descris (debut precoce, hipocalcemie severă cu hiperparatiroidism compensator, hipofosfatemie variabilă, fosfataze alcaline crescute, 25(OH)D normal dar 1,25(OH)2D absent/foarte redus) corespunde exact deficitului de 1-α-hidroxilază, care răspunde la administrarea de doze fiziologice de calcitriol. Rahitismul nutrițional ar avea 25(OH)D scăzut; mutațiile VDR (tip II) se asociază cu niveluri crescute, nu scăzute, de 1,25(OH)2D și frecvent alopecie; rahitismul X-linkat nu produce hipocalcemie cu PTH mult crescut.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1164-1166"
        },
        {
          "id": "51-5",
          "stem": "Un copil de 18 luni, la vârsta la care a început să meargă, este adus pentru deformare progresivă în varus a membrelor inferioare și viteză de creștere diminuată. Bilanțul biologic arată calcemie normală, fosfatemie scăzută, PTH normal, fosfataze alcaline crescute și nivel de 1,25(OH)2D normal sau ușor scăzut, inadecvat față de gradul hipofosfatemiei. Care este diagnosticul cel mai probabil și principiul terapeutic corect?",
          "options": [
            "Hiperparatiroidism primar; paratiroidectomie",
            "Rahitism nutrițional prin deficit de vitamină D; tratament cu doză unică mare de colecalciferol (\"stoss therapy\")",
            "Rahitism hipofosfatemic X-linkat, prin mutație a genei PHEX; tratament cu supliment oral de fosfor asociat cu 1,25(OH)2D",
            "Sindrom Fanconi; tratament cu bicarbonat și restricție proteică",
            "Deficit de 1-α-hidroxilază; tratament cu doze fiziologice de calcitriol în monoterapie"
          ],
          "correct": 2,
          "explanation": "Rahitismul hipofosfatemic X-linkat este cea mai frecventă formă de rahitism hipofosfatemic, debutează frecvent la vârsta mersului, cu anomalii scheletice și profil biologic caracterizat prin fosfat seric redus, niveluri normale sau reduse de 1,25(OH)2D, calciu și PTH normale, prin mutații ale genei PHEX. Tratamentul asociază fosfor oral cu 1,25(OH)2D3, deoarece administrarea izolată de fosfor induce hiperparatiroidism secundar. Rahitismul nutrițional ar avea 25(OH)D scăzut, iar deficitul de 1-α-hidroxilază se însoțește de hipocalcemie și PTH crescut.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1164-1166"
        }
      ]
    },
    {
      "num": 52,
      "title": "Bolile congenitale de metabolism: fenilcetonuria, hiperamoniemia, tirozinemia, galactozemia, glicogenozele, hipercolesterolemia familială, hipertrigliceridemia familială",
      "questions": [
        {
          "id": "52-1",
          "stem": "Un sugar de 5 luni, fără semne evocatoare la naştere, este adus la consult pentru întârziere a dezvoltării motorii şi convulsii recent instalate. La examenul obiectiv se remarcă păr blond şi ochi albaştri (mai deschişi la culoare decât ai părinţilor), eczemă cutanată şi un miros particular, de mucegai, al transpiraţiei şi urinei. Care este diagnosticul cel mai probabil?",
          "options": [
            "Fenilcetonurie",
            "Galactozemie",
            "Alcaptonurie",
            "Homocistinurie",
            "Boala Wilson"
          ],
          "correct": 0,
          "explanation": "Tabloul descris este caracteristic fenilcetonuriei: pigmentaţie scăzută a pielii, părului şi ochilor, semne progresive de suferinţă a SNC (întârziere motorie, convulsii), eczemă şi mirosul de mucegai/şoarece al transpiraţiei şi urinei. Homocistinuria asociază habitus marfanoid şi luxaţie de cristalin, galactozemia apare după iniţierea alimentaţiei lactate cu icter şi hepatomegalie, boala Wilson debutează mai tardiv cu manifestări hepatice şi inelul Kayser-Fleischer, iar alcaptonuria se manifestă cu urină brun-neagră şi ocronoză la vârstă adultă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 754-769"
        },
        {
          "id": "52-2",
          "stem": "În tratamentul de urgenţă al hiperamoniemiei neonatale severe, secundare unei anomalii a ciclului ureei, care dintre următoarele substanţe este contraindicată, deoarece creşte nivelul seric al amoniacului?",
          "options": [
            "Fenilbutirat de sodiu",
            "Arginină",
            "Acid valproic",
            "Carnitină",
            "Benzoat de sodiu"
          ],
          "correct": 2,
          "explanation": "Textul precizează explicit că în hiperamoniemie nu se administrează corticosteroizi (induc balanţă negativă a nitrogenului), manitol (ineficient în edemul cerebral din hiperamoniemie) sau acid valproic, deoarece acesta creşte nivelul seric de amoniac. Fenilbutiratul de sodiu, benzoatul de sodiu, arginina şi carnitina fac parte, dimpotrivă, din schema terapeutică recomandată.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 754-769"
        },
        {
          "id": "52-3",
          "stem": "Un nou-născut la termen, alimentat natural, dezvoltă în a doua săptămână de viaţă vărsături, diaree, icter, hepatomegalie şi letargie; probele de laborator arată galactozurie şi acidoză metabolică hipercloremică. Care este conduita terapeutică esenţială pentru asigurarea unui prognostic favorabil?",
          "options": [
            "Dietă săracă în fenilalanină şi tirozină",
            "Substituţie enzimatică cu agalsidază beta",
            "Dietă restrictivă în grăsimi, cu gustări dese, bogate în hidraţi de carbon",
            "Excluderea completă şi permanentă a alimentaţiei lactate (lapte şi produse lactate)",
            "Restricţie proteică asociată cu administrare de benzoat de sodiu"
          ],
          "correct": 3,
          "explanation": "Tabloul clinico-biologic este sugestiv pentru galactozemie, iar tratamentul de bază constă în excluderea alimentaţiei lactate pe toată perioada vieţii, ceea ce asigură o durată de viaţă şi un coeficient de inteligenţă normale. Textul menţionează că o întârziere a tratamentului de peste o lună determină leziuni cerebrale ireversibile, cataractă, ataxie şi deficit de vorbire. Celelalte conduite corespund altor boli metabolice (fenilcetonurie, tulburări ale acizilor graşi, boala Fabry).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 754-769"
        },
        {
          "id": "52-4",
          "stem": "Un adolescent de 15 ani acuză crampe musculare declanşate de efortul fizic, însoţite de episoade de mioglobinurie; nu prezintă hepatomegalie, iar glicemia este normală. Care tip de glicogenoză este cel mai probabil sugerat de acest tablou clinic?",
          "options": [
            "Tipul IV (boala Andersen)",
            "Tipul III (boala Cori)",
            "Tipul II (boala Pompe)",
            "Tipul V (boala McArdle)",
            "Tipul Ia (boala von Gierke)"
          ],
          "correct": 3,
          "explanation": "Conform diagnosticului diferenţial al glicogenozelor, tipul V (boala McArdle) se caracterizează prin absenţa hepatomegaliei şi a hipoglicemiei, cu crampe musculare la efort şi mioglobinurie/rabdomioliză, debutul putând fi în copilărie sau, uneori, tardiv. Tipurile Ia, II, III şi IV asociază hepatomegalie şi/sau hipoglicemie, tablou incompatibil cu vinieta prezentată.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 754-769"
        },
        {
          "id": "52-5",
          "stem": "La un pacient cu hipercolesterolemie familială, comparativ cu iniţierea tratamentului hipolipemiant abia după producerea unui accident coronarian, iniţierea precoce a tratamentului cu statine are următorul efect asupra mortalităţii prin boală coronariană:",
          "options": [
            "Reduce mortalitatea cu 25%, indiferent de momentul iniţierii tratamentului",
            "Reduce mortalitatea cu 50%, faţă de doar 25% dacă tratamentul este iniţiat după accidentul coronarian",
            "Nu influenţează mortalitatea, ci doar dimensiunea xantoamelor tendinoase",
            "Reduce mortalitatea cu 90%, dar numai dacă tratamentul este iniţiat înainte de vârsta de 10 ani",
            "Este eficientă doar la pacienţii homozigoţi, fiind ineficientă la heterozigoţi"
          ],
          "correct": 1,
          "explanation": "Textul precizează că tratamentul precoce cu statine reduce mortalitatea prin boală coronariană cu 50%, în timp ce, dacă tratamentul începe după producerea unui atac coronarian deja instalat, mortalitatea se reduce cu numai 25%. Aceasta subliniază importanţa diagnosticului şi tratamentului precoce în hipercolesterolemia familială, boală autozomal dominantă cu prevalenţă de 1:500 în populaţia generală.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 754-769"
        }
      ]
    },
    {
      "num": 55,
      "title": "Diabetul zaharat la copil. Acidocetoza și coma diabetică",
      "questions": [
        {
          "id": "55-1",
          "stem": "Un copil de 9 ani, cunoscut cu diabet zaharat tip 1, este adus la camera de gardă cu vărsături, dureri abdominale și semne de deshidratare acută. Gazometria arată pH = 7,15, CO2 total = 12 mEq/L, iar glicemia este de 650 mg%. Clinic prezintă respirație Kussmaul și halenă acetonemică, fără hipotensiune arterială sau alterarea stării de conștiență. Cum se stadializează acest episod de cetoacidoză diabetică?",
          "options": [
            "Cetoacidoză diabetică ușoară",
            "Acidoză lactică",
            "Cetoacidoză diabetică moderată",
            "Comă hiperglicemică hiperosmolară",
            "Cetoacidoză diabetică severă"
          ],
          "correct": 2,
          "explanation": "Conform tabelului de stadializare a CAD, forma moderată se caracterizează prin pH < 7,20, CO2 total 15-11 mEq/L, glicemie 600-800 mg% și tabloul clinic cu anorexie, vărsături, semne de deshidratare, halenă acetonemică și respirație Kussmaul, fără elementele de severitate (hipotensiune, hipotonie musculară, comă) specifice formei severe. Forma severă presupune pH < 7,10, deshidratare intensă cu facies cadaveric, hipotensiune și comă, elemente absente în acest caz.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 403-432"
        },
        {
          "id": "55-2",
          "stem": "Un copil de 3 ani este adus în urgență după o posibilă ingestie accidentală de medicamente, prezentând polipnee, alterarea stării de conștiență și deshidratare, fără istoric anterior de poliurie sau polidipsie. Glicemia este 220 mg/dL, corpii cetonici sunt rareori evidențiați în urină, iar concentrația serică a unei anumite substanțe este marcat crescută. Care este cel mai probabil diagnostic?",
          "options": [
            "Intoxicație cu salicilați",
            "Acidoză tubulară renală",
            "Comă hiperglicemică hiperosmolară",
            "Cetoacidoză diabetică inaugurală",
            "Fenomenul Somogyi"
          ],
          "correct": 0,
          "explanation": "În intoxicația cu salicilați, glicemia este de obicei normală, iar atunci când apare hiperglicemie, aceasta nu depășește 250 mg/dL; corpii cetonici sunt rareori evidențiați în urină, dar salicilemia este crescută. Absența istoricului clasic de poliurie-polidipsie și valoarea glicemică sub pragul de 250 mg/dL orientează diagnosticul spre intoxicație cu salicilați, nu spre CAD inaugurală, unde glicemia este de regulă net mai mare și cetonuria marcată.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 403-432"
        },
        {
          "id": "55-3",
          "stem": "În protocolul terapeutic al cetoacidozei diabetice la copil, rehidratarea și corectarea glicemiei trebuie efectuate cu prudență, glicemia nefiind lăsată să scadă cu mai mult de 5,5 mmol/L (100 mg%) pe oră. Care este principala complicație a tratamentului CAD pe care această conduită urmărește să o prevină?",
          "options": [
            "Insuficiența renală acută",
            "Acidoza lactică",
            "Hipopotasemia severă",
            "Hipoglicemia de rebound",
            "Edemul cerebral"
          ],
          "correct": 4,
          "explanation": "Textul precizează explicit că, printre obiectivele tratamentului CAD, se numără prevenirea complicațiilor acestuia, edemul cerebral fiind cel mai de temut. Rehidratarea trebuie făcută atent, cu atât mai lentă cu cât dezechilibrul metabolic inițial este mai mare, iar glicemia nu trebuie corectată prea rapid tocmai pentru a evita această complicație gravă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 403-432"
        },
        {
          "id": "55-4",
          "stem": "Un copil diagnosticat cu diabet zaharat tip 1 de 6 săptămâni necesită în prezent o doză de insulină de 0,4 UI/kg/zi, nu prezintă glicozurie, iar HbA1c este 6,2%, acest tablou menținându-se de peste o lună. Cum se caracterizează corect această evoluție?",
          "options": [
            "Remisiune parțială (\"luna de miere\")",
            "Debut lent al bolii, nu remisiune",
            "Fenomen Somogyi",
            "Remisiune totală, cu posibilitatea opririi insulinoterapiei",
            "Control metabolic nesatisfăcător, necesitând creșterea dozelor"
          ],
          "correct": 0,
          "explanation": "Remisiunea parțială se definește prin 4 criterii obligatorii: doză de insulină < 0,5 UI/kg/zi, glicozurie absentă, HbA1c < 7% și durată mai mare de 4 săptămâni, toate îndeplinite în acest caz. Remisiunea totală, mult mai rară (doar 3% din cazuri), presupune oprirea completă a insulinoterapiei cu menținerea echilibrului metabolic, ceea ce nu este cazul aici, deoarece pacientul continuă tratamentul insulinic.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 403-432"
        },
        {
          "id": "55-5",
          "stem": "Un adolescent cu diabet zaharat tip 1 aflat sub insulinoterapie intensivă prezintă în mod repetat hiperglicemie matinală. Determinarea glicemiei nocturne, în jurul orei 3:00, evidențiază o valoare scăzută, fără manifestări clinice sesizate de pacient. Care este conduita terapeutică corectă?",
          "options": [
            "Creșterea dozei de insulină intermediară administrată la ora 22:00",
            "Creșterea aportului de glucide la cina de la ora 19:00, fără modificarea insulinei",
            "Trecerea imediată la pompa de insulină",
            "Scăderea dozei de insulină administrată seara",
            "Administrarea de glucagon injectabil în fiecare seară"
          ],
          "correct": 3,
          "explanation": "Tabloul descris corespunde fenomenului Somogyi: hiperglicemie matinală consecutivă unei hipoglicemii nocturne neconștientizate, produsă prin descărcarea hormonilor de contrareglare (glucagon, cortizol, adrenalină, hormon de creștere). Tratamentul constă în scăderea dozei de insulină de seară, spre deosebire de fenomenul \"dawn\", în care hiperglicemia matinală apare fără hipoglicemie nocturnă și se tratează prin creșterea dozei de insulină intermediară de la ora 22:00.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 403-432"
        }
      ]
    },
    {
      "num": 57,
      "title": "Reumatismul articular acut. Artrita idiopatică juvenilă",
      "questions": [
        {
          "id": "57-1",
          "stem": "Un copil de 9 ani prezintă, la 6 zile după o faringită documentată cu streptococ β-hemolitic de grup A, o artrită asimetrică, nemigratorie, care afectează genunchiul și articulația sacroiliacă, cu răspuns slab la antiinflamatoarele nesteroidiene. Care este diagnosticul cel mai probabil?",
          "options": [
            "Artrită idiopatică juvenilă oligoarticulară",
            "Artrită septică",
            "Reumatism articular acut (RAA)",
            "Artrită asociată entezitei",
            "Artrită reactivă poststreptococică (ARPS)"
          ],
          "correct": 4,
          "explanation": "ARPS survine în primele 10 zile de la infecția streptococică (spre deosebire de RAA, unde intervalul este de 2-3 săptămâni), este nonmigratorie, poate afecta articulațiile axiale (sacroiliace) și are un răspuns slab sau nul la AINS/aspirină. RAA se caracterizează prin artrită migratorie cu răspuns spectaculos la antiinflamatoare și nu afectează articulațiile axiale.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 740-744"
        },
        {
          "id": "57-2",
          "stem": "O fetiță de 9 ani prezintă febră, un suflu nou de regurgitare mitrală confirmat ecocardiografic, VSH crescut și titru ASLO crescut, la 3 săptămâni de la o faringită. Conform criteriilor de diagnostic pentru episodul inițial de reumatism articular acut, această asociere este suficientă pentru diagnostic?",
          "options": [
            "Nu, sunt necesare obligatoriu două criterii majore",
            "Da, dar numai dacă se asociază și titrul ASLO în dinamică crescător de cel puțin două ori valoarea inițială",
            "Da, un criteriu major (cardita) și două criterii minore (febră, VSH crescut), alături de dovada infecției streptococice, sunt suficiente",
            "Nu, este necesară în plus prezența coreei pentru confirmarea diagnosticului",
            "Nu, cardita izolată nu poate fi considerată criteriu de diagnostic fără artrită asociată"
          ],
          "correct": 2,
          "explanation": "Pentru episodul inițial de RAA, diagnosticul se stabilește fie prin două criterii majore, fie printr-un criteriu major și două criterii minore, alături de dovada infecției streptococice recente. În acest caz, cardita (criteriu major) se asociază cu febra și VSH crescut (criterii minore), plus ASLO crescut ca dovadă a infecției streptococice, îndeplinind astfel condițiile diagnostice.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 740-744"
        },
        {
          "id": "57-3",
          "stem": "Un copil cunoscut cu artrită idiopatică juvenilă formă sistemică dezvoltă brusc febră persistentă, hepatosplenomegalie, trombocitopenie, scădere bruscă a VSH-ului și valori ale feritinei serice de peste 10000 ng/mL. Care este cea mai probabilă complicație?",
          "options": [
            "Amiloidoză secundară",
            "Sepsis bacterian intercurent",
            "Recădere simplă a bolii de bază (puseu articular)",
            "Pericardită reumatismală",
            "Sindrom de activare macrofagică (MAS)"
          ],
          "correct": 4,
          "explanation": "MAS este o complicație severă a AIJ sistemice, cu mortalitate raportată între 11% și 30%, caracterizată prin febră înaltă, hepatosplenomegalie, bi- sau pancitopenie (mai ales trombocitopenie), scădere bruscă a VSH-ului și valori ale feritinei frecvent peste 10000 ng/mL. Recunoașterea precoce este esențială deoarece tratamentul imunosupresor prompt poate fi salvator de viață.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 725-737"
        },
        {
          "id": "57-4",
          "stem": "O fetiță de 3 ani este diagnosticată cu artrită idiopatică juvenilă formă oligoarticulară (afectarea genunchiului), cu anticorpi antinucleari (ANA) pozitivi în titru semnificativ. Ținând cont de factorii de risc identificați pentru această formă de boală, care este măsura de monitorizare cea mai importantă la acest moment?",
          "options": [
            "Electroencefalogramă pentru depistarea coreei",
            "Radiografie toracică pentru depistarea unei eventuale pericardite",
            "Puncție medulară pentru excluderea unei leucemii acute",
            "Consult oftalmologic periodic pentru depistarea uveitei, frecvent asimptomatică",
            "Dozarea periodică a complementului seric (C3, C4)"
          ],
          "correct": 3,
          "explanation": "Sexul feminin, vârsta mică la debut și pozitivitatea ANA reprezintă factori de risc importanți pentru uveita cronică anterioară, care este de obicei asimptomatică și poate duce, dacă nu este depistată la timp, la sechele grave (sinechii, cataractă, glaucom). De aceea, toți pacienții cu oligoartrită necesită consult oftalmologic periodic, la 3, 6 sau 12 luni, în funcție de factorii de risc.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 725-737"
        },
        {
          "id": "57-5",
          "stem": "Un băiat de 12 ani prezintă dureri la nivelul inserției calcaneene a tendonului ahilian, artrită asimetrică a genunchiului și este HLA-B27 pozitiv. Care este diagnosticul cel mai probabil?",
          "options": [
            "Lupus eritematos sistemic",
            "Artrită idiopatică juvenilă cu debut sistemic",
            "Artrita asociată entezitei (ERA)",
            "Reumatism articular acut",
            "Artrită idiopatică juvenilă poliarticulară cu factor reumatoid pozitiv"
          ],
          "correct": 2,
          "explanation": "Entezita (inflamația la inserția tendonului, aici a tendonului ahilian pe calcaneu) asociată cu artrită periferică asimetrică, mai frecventă la băieți preadolescenți/adolescenți, alături de pozitivitatea HLA-B27 (prezent la 70-80% dintre pacienții cu ERA, față de doar 8% în populația generală), este caracteristică artritei asociate entezitei.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 725-737"
        }
      ]
    },
    {
      "num": 58,
      "title": "Colagenozele: lupusul eritematos sistemic, dermatomiozita, sclerodermia, vasculitele (purpura Henoch-Schonlein, boala Kawasaki), bolile autoinflamatorii",
      "questions": [
        {
          "id": "58-1",
          "stem": "O adolescentă de 14 ani, diagnosticată cu lupus eritematos sistemic, prezintă la puncția-biopsie renală leziuni glomerulare proliferative difuze, cu afectare a peste 50% din glomeruli. Conform clasificării ISN/RPS (2004), această formă de nefrită lupică se încadrează în:",
          "options": [
            "Clasa III - nefrită lupică focală",
            "Clasa V - nefrită lupică membranoasă",
            "Clasa I - nefrită lupică cu leziuni mezangiale minime",
            "Clasa II - nefrită lupică cu leziuni mezangiale proliferative",
            "Clasa IV - nefrită lupică proliferativă difuză"
          ],
          "correct": 4,
          "explanation": "Conform clasificării ISN/RPS 2004, clasa IV reprezintă nefrita lupică proliferativă difuză, segmentală sau globală, cu afectare extinsă a glomerulilor. Clasele I și II corespund leziunilor mezangiale minime, respectiv proliferative, iar clasa III este forma focală (afectare mai limitată). Clasa V este forma membranoasă, cu tablou histologic distinct.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 754-769"
        },
        {
          "id": "58-2",
          "stem": "O fetiță de 8 ani se prezintă cu slăbiciune musculară proximală simetrică, instalată insidios în 3 luni, asociată cu un rash violaceu periorbitar cu edem palpebral și leziuni eritematoase la nivelul suprafețelor de extensie ale articulațiilor mâinilor. Care este diagnosticul cel mai probabil?",
          "options": [
            "Vasculita din purpura Henoch-Schonlein",
            "Lupus eritematos sistemic",
            "Dermatomiozita juvenilă",
            "Artrita idiopatică juvenilă forma sistemică",
            "Sclerodermia sistemică"
          ],
          "correct": 2,
          "explanation": "Tabloul descris este caracteristic dermatomiozitei juvenile: slăbiciune musculară proximală simetrică, rash heliotrop periorbitar cu edem al pleoapelor și papule Gottron la nivelul suprafețelor de extensie ale articulațiilor mâinilor. Aceste manifestări cutanate sunt patognomonice și fac parte din criteriile Bohan și Peter pentru diagnosticul bolii.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1404-1406"
        },
        {
          "id": "58-3",
          "stem": "Un băiat de 6 ani dezvoltă purpură palpabilă la nivelul membrelor inferioare și feselor, dureri abdominale colicative și artralgii la nivelul genunchilor și gleznelor, la o săptămână după o infecție respiratorie. Care dintre următorii factori este menționat ca fiind predictiv pentru afectarea renală persistentă în purpura Henoch-Schonlein?",
          "options": [
            "Vârsta la debut peste 10 ani",
            "Sexul masculin",
            "Prezența edemului scrotal",
            "Vârsta la debutul bolii sub 7 ani",
            "Absența manifestărilor articulare"
          ],
          "correct": 3,
          "explanation": "Factorii predictibili pentru afectarea renală persistentă în purpura Henoch-Schonlein menționați în text sunt: vârsta la debut sub 7 ani, persistența leziunilor purpurice, intensitatea simptomatologiei abdominale (forme severe) și scăderea activității factorului XIII. Sexul masculin este doar un factor de frecvență a bolii, nu un predictor de afectare renală.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1416-1418"
        },
        {
          "id": "58-4",
          "stem": "Un copil de 2 ani prezintă febră de 6 zile, neresponsivă la antitermice, hiperemie conjunctivală bilaterală nepurulentă, eritem și fisuri ale buzelor, limbă zmeurie, edem al mâinilor și un exantem polimorf pe trunchi. Care este conduita terapeutică inițială recomandată?",
          "options": [
            "Antivirale cu spectru larg asociate cu antiinflamatoare nesteroidiene",
            "Corticoterapie sistemică în puls-terapie, ca monoterapie",
            "Imunoglobuline intravenoase 2 g/kg în perfuzie lentă, asociate cu aspirină în doză mare",
            "Aspirină în doză mare, fără imunoglobuline intravenoase",
            "Antibioterapie cu cefalosporină de generația a III-a în doză mare"
          ],
          "correct": 2,
          "explanation": "Copilul întrunește criteriile clinice clasice pentru boala Kawasaki (febră peste 5 zile plus cel puțin 4 din cele 5 criterii principale). Tratamentul standard constă în imunoglobuline intravenoase 2 g/kg în perfuzie lentă de 8-12 ore, asociate cu aspirină în doză mare (80-100 mg/kg/zi), administrate optim în primele 7-10 zile de boală pentru a reduce riscul de anevrisme coronariene.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 695-705"
        },
        {
          "id": "58-5",
          "stem": "Un copil de origine armeană prezintă de la vârsta de 4 ani episoade recurente de febră cu durată de 12-72 ore, însoțite de dureri abdominale intense care mimează abdomenul acut și monoartrită tranzitorie, cu perioade complet asimptomatice între atacuri. Care este tratamentul de elecție pentru prevenirea atacurilor și a celei mai de temut complicații pe termen lung a acestei afecțiuni?",
          "options": [
            "Colchicina",
            "Metotrexat săptămânal",
            "Anakinra ca primă linie",
            "Corticoterapia continuă în doză mică",
            "Antibioterapie profilactică cu penicilină"
          ],
          "correct": 0,
          "explanation": "Tabloul clinic este sugestiv pentru febra familială mediteraneană (FMF), frecventă la populațiile din bazinul mediteranean (arabi, evrei, armeni, turci, italieni). Colchicina este medicamentul de elecție, prevenind atât atacurile febrile, cât și apariția amiloidozei, cea mai de temut complicație pe termen lung; inhibitorii de IL-1 (anakinra) se rezervă cazurilor cu răspuns nefavorabil sau incomplet la colchicină.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1416-1418"
        }
      ]
    },
    {
      "num": 59,
      "title": "Meningita și encefalita",
      "questions": [
        {
          "id": "59-1",
          "stem": "Un sugar cu meningococemie fulminantă prezintă la evaluare: colaps cardiovascular, erupție peteșial-purpurică apărută în primele 10 ore de la debut, trombocitopenie și absența leucocitozei sanguine (celelalte elemente ale scorului prognostic fiind absente). Care este încadrarea prognostică corectă, conform scorului prognostic din meningococemia fulminantă?",
          "options": [
            "Prognostic rezervat-letal (scor peste 3)",
            "Prognostic favorabil (scor 0-2)",
            "Scorul nu se poate calcula fără leucocitele din LCR",
            "Prognostic favorabil, indiferent de scor, la vârsta de sugar",
            "Prognostic sever (scor 3)"
          ],
          "correct": 0,
          "explanation": "Scorul prognostic în meningococemia fulminantă acordă câte un punct pentru fiecare element prezent (leucocite LCR<20/mmc, colaps cardiovascular, purpură peteșială apărută în primele 12 ore, trombocitopenie, absența leucocitozei sanguine, VSH normal, hiperpirexie rectală >39°C). Pacientul din vinietă întrunește 4 puncte, iar un scor peste 3 se asociază cu prognostic rezervat-letal. Un scor de 0-2 înseamnă prognostic favorabil, iar un scor de 3 înseamnă prognostic sever.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 805-815"
        },
        {
          "id": "59-2",
          "stem": "Un copil cu sindrom meningian și febră are puncție rahidiană cu următoarele rezultate: LCR tulbure, peste 1500 elemente/mmc cu predominanța polimorfonuclearelor, proteinorahie mult crescută și glicorahie scăzută. Ce etiologie sugerează cel mai probabil acest tablou al LCR?",
          "options": [
            "Meningită virală",
            "Reacție meningiană cu biochimie normală",
            "Meningită tuberculoasă",
            "Meningism asociat unei viroze respiratorii",
            "Meningită bacteriană"
          ],
          "correct": 4,
          "explanation": "Conform textului, un LCR tulbure cu peste 1500 elemente/mmc, cu predominanța polimorfonuclearelor, proteinorahie foarte crescută și glicorahie scăzută este caracteristic meningitei bacteriene. Meningitele virale au de regulă 10-1500 elemente/mmc cu predominanță limfocitară și glicorahie normală, iar meningita tuberculoasă are 200-400 elemente/mmc cu predominanță limfocitară.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 805-815"
        },
        {
          "id": "59-3",
          "stem": "O gravidă dezvoltă febră, cefalee și alterarea progresivă a stării de conștiență, cu paralizii de nervi cranieni sugestive pentru suferință de trunchi cerebral. Examenul LCR arată proporții egale de polimorfonucleare și limfocite, cu hiperproteinorahie și hipoglicorahie. Care este etiologia cea mai probabilă și schema de tratament etiologic de elecție?",
          "options": [
            "Streptococcus pneumoniae; cefalosporină de generația a treia",
            "Neisseria meningitidis; penicilină G",
            "Haemophilus influenzae; ampicilină în monoterapie",
            "Listeria monocytogenes; ampicilină asociată cu gentamicină",
            "Cryptococcus neoformans; amfotericină B"
          ],
          "correct": 3,
          "explanation": "Meningita cu Listeria monocytogenes apare tipic la organisme imunodeficitare, inclusiv gravide, are tablou de meningoencefalită cu afectare de trunchi cerebral și paralizii de nervi cranieni, iar în LCR proporțiile de polimorfonucleare și limfocite se egalizează, cu hiperproteinorahie și hipoglicorahie constante. Tratamentul etiologic constă în dublă asociere de ampicilină cu gentamicină.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 805-815"
        },
        {
          "id": "59-4",
          "stem": "Un pacient prezintă tulburări de conștiență cu semne neurologice de focar, iar RMN cerebral evidențiază un aspect pseudotumoral temporofrontal; examenul LCR arată pleiocitoză cu proteinorahie crescută, fără identificarea altor agenți patogeni bacterieni sau fungici. Care este conduita terapeutică imediată corectă?",
          "options": [
            "Se inițiază cefalosporină de generația a treia în monoterapie",
            "Se instituie tuberculostatice în așteptarea culturii LCR",
            "Se așteaptă rezultatul PCR pentru HSV înainte de a începe orice tratament",
            "Se administrează doar corticoterapie, fără tratament antiviral",
            "Se administrează empiric aciclovir intravenos, 10 mg/kgc la fiecare 8 ore"
          ],
          "correct": 4,
          "explanation": "Manifestările sugestive pentru o leziune la nivelul lobului temporal, împreună cu pleiocitoza LCR și absența altor patogeni, orientează spre encefalita cu virus herpes simplex. În encefalite, singura indicație de terapie etiologică este cea din encefalita herpetică, cu aciclovir intravenos 10 mg/kgc la fiecare 8 ore (30 mg/kgc/zi), tratament ce trebuie inițiat prompt, fără a aștepta confirmarea etiologică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 815-819"
        },
        {
          "id": "59-5",
          "stem": "Un băiat de 10 ani, cu istoric de rujeolă la vârsta de 18 luni, prezintă de câteva luni deteriorare intelectuală progresivă și scăderea performanței școlare, iar recent au apărut mioclonii ample, brusc instalate, cu relaxare lentă, repetitive la intervale de 10-60 de secunde. Care este diagnosticul cel mai probabil?",
          "options": [
            "Panencefalita sclerozantă subacută (PESS)",
            "Meningita tuberculoasă",
            "Encefalita cu virusul West Nile",
            "Encefalita herpetică",
            "Meningococemie fulminantă"
          ],
          "correct": 0,
          "explanation": "Tabloul descris este caracteristic panencefalitei sclerozante subacute (PESS), complicație tardivă a rujeolei survenite la vârste mici, cu debut la 8-10 ani distanță de infecția inițială. Stadiul 1 al bolii se manifestă prin deteriorare intelectuală progresivă și scăderea performanței școlare, iar stadiul 2 prin instalarea mioclonilor ample, cu relaxare lentă, la intervale de 10-60 de secunde.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 815-819"
        }
      ]
    },
    {
      "num": 60,
      "title": "Infecții cu exantem: rujeola, rubeola, boala mână-picior-gură, varicela, scarlatina",
      "questions": [
        {
          "id": "60-1",
          "stem": "Un copil de 7 ani prezintă febră, exantem micropapulos difuz, aspru la palpare, cu debut inițial în axile și în regiunea inghinală. La examinare se decelează un focar cutanat stafilococic (plagă suprainfectată), dar faringele este normal, fără hipertrofie amigdaliană, iar mucoasa linguală nu prezintă modificări. Care dintre următoarele elemente pledează pentru diagnosticul de scarlatină stafilococică (boala a 4-a) și nu pentru scarlatina streptococică clasică?",
          "options": [
            "Absența enantemului faringian și a ciclului lingual, în prezența unui focar stafilococic cutanat",
            "Apariția măștii Filatov, cu paloare circumorală și pomeți hiperemici",
            "Debutul brusc cu febră ridicată și frisoane",
            "Prezența semnului Grozovici-Pastia la nivelul plicilor de flexie",
            "Descuamarea în lambouri la nivelul palmelor și plantelor"
          ],
          "correct": 0,
          "explanation": "Textul precizează explicit că \"scarlatina stafilococică\" (boala a 4-a) se manifestă prin febră, erupție scarlatiniformă, vărsături, existența unui focar stafilococic și absența enantemului și a ciclului lingual. Semnul Grozovici-Pastia, descuamarea în lambouri și masca Filatov sunt caracteristici ale scarlatinei streptococice clasice, la care ciclul lingual este obligatoriu. Debutul brusc cu febră poate apărea în ambele afecțiuni, deci nu este element discriminativ.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1509-1513"
        },
        {
          "id": "60-2",
          "stem": "Un pacient cu antecedente de rujeolă în urmă cu aproximativ 7 ani se prezintă cu deteriorare neurologică progresivă. Examenul anatomopatologic arată degenerescență corticală asociată cu corpi de incluzie intranucleari și intracitoplasmatici la nivelul substanței albe. Care este complicația tardivă a rujeolei cel mai probabil responsabilă de acest tablou?",
          "options": [
            "Panencefalita subacută sclerozantă (PESS)",
            "Pneumonia interstițială cu celule gigante Hecht",
            "Encefalita subacută cu incluzii",
            "Catarul sufocant (bronșiolita capilară)",
            "Encefalita acută autoimună"
          ],
          "correct": 0,
          "explanation": "Panencefalita subacută sclerozantă (PESS) poate apărea la mulți ani după boala acută și se caracterizează anatomopatologic prin degenerescență corticală cu corpi de incluzie intranucleari și intracitoplasmatici la nivelul substanței albe. Encefalita acută autoimună apare la sfârșitul perioadei eruptive, iar encefalita subacută cu incluzii survine în primele 6 luni de la erupție, deci intervale mult mai scurte decât cel descris.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1509-1513"
        },
        {
          "id": "60-3",
          "stem": "O gravidă în săptămâna 10 de sarcină, fără rubeolă în antecedente și nevaccinată antirubeolic, a avut contact recent cu un copil diagnosticat cu rubeolă. Testele serologice evidențiază IgM pozitiv pentru virusul rubeolic, confirmând infecția acută. Care este conduita corectă în această situație?",
          "options": [
            "Administrare de aciclovir pentru limitarea replicării virale",
            "Vaccinare antirubeolică imediată, pentru a preveni transmiterea infecției la făt",
            "Administrare de imunoglobuline standard, care previn viremia și malformațiile fetale",
            "Indicație de întrerupere a sarcinii, dat fiind riscul mare de malformații congenitale severe",
            "Monitorizare clinică și biologică, fără altă intervenție, întrucât sarcina este sub 4 luni"
          ],
          "correct": 3,
          "explanation": "Primoinfecția rubeolică la gravidă în primul trimestru de sarcină are indicație de întrerupere a sarcinii, din cauza riscului mare (aproximativ 50%) de malformații congenitale severe. Monitorizarea fără întrerupere este recomandată doar pentru sarcinile cu vârstă peste 4 luni; imunoglobulinele standard nu au niciun efect asupra viremiei odată infecția instalată, iar vaccinul rubeolic este contraindicat în sarcină.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1515-1519"
        },
        {
          "id": "60-4",
          "stem": "Un copil imunodeprimat, aflat în a treia zi de la debutul erupției variceloase, dezvoltă brusc febră ridicată, dispnee, tuse și expectorație cu striuri de sânge. Care este complicația cea mai probabilă a varicelei în acest context?",
          "options": [
            "Miocardita variceloasă",
            "Encefalita variceloasă",
            "Pneumonia variceloasă",
            "Purpura trombocitopenică",
            "Sindromul Reye"
          ],
          "correct": 2,
          "explanation": "Pneumonia variceloasă apare mai ales la imunodeprimați, cu debut brusc la 2-6 zile de la debutul bolii, manifestată prin febră ridicată, dispnee, tuse, uneori cu expectorație cu striuri de sânge — tablou concordant cu vinieta clinică. Encefalita variceloasă are un debut ceva mai tardiv (4-7 zile) și se manifestă predominant neurologic, cu tulburări de conștiență, convulsii și comă, nu respirator.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 790-791"
        },
        {
          "id": "60-5",
          "stem": "Un copil de 2 ani prezintă febră, disfagie și vezicule dureroase pe fond eritematos la nivelul mucoasei bucale, urmate în 1-2 zile de o erupție veziculară localizată pe palme și plante. Care este cel mai frecvent agent etiologic implicat în acest tablou clinic?",
          "options": [
            "Virusul herpes simplex",
            "Virusul varicelo-zosterian",
            "Virusul rujeolic",
            "Virusul Coxsackie A16",
            "Enterovirusul 71"
          ],
          "correct": 3,
          "explanation": "Tabloul clinic descris este caracteristic bolii gură-mână-picior, iar virusul Coxsackie A16 este cea mai frecventă cauză a acestei afecțiuni. Enterovirusul 71 poate provoca de asemenea boala, dar este mai puțin frecvent implicat și se asociază mai ales cu complicații severe, precum encefalita.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 790-791"
        }
      ]
    },
    {
      "num": 61,
      "title": "Infecția urliană. Mononucleoza infecțioasă",
      "questions": [
        {
          "id": "61-1",
          "stem": "Un adolescent de 16 ani, nevaccinat antiurlian, dezvoltă tumefacție parotidiană bilaterală și febră. La 2 zile de la debutul parotiditei, apare brusc febră, frisoane, cefalee, vărsături și durere testiculară intensă, cu tumefacție și congestie scrotală unilaterală. Care este cea mai probabilă complicație/localizare extrasalivară a infecției urliene în acest caz?",
          "options": [
            "Varicocelul",
            "Hernia inghinală strangulată",
            "Orhiepididimita septică veneriană",
            "Orhita urliană",
            "Torsiunea de testicul"
          ],
          "correct": 3,
          "explanation": "Textul precizează că orhita urliană apare concomitent cu parotidita sau la 1-2 zile după aceasta, în special la pacienții aflați după pubertate, manifestându-se prin debut brusc cu febră, frisoane, cefalee, vărsături, durere testiculară vie, tumefacție și congestie. Contextul de parotidită concomitentă exclude celelalte entități din diagnosticul diferențial (orhiepididimita septică cu scurgeri purulente, hernia ștrangulată, varicocelul).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 794-795"
        },
        {
          "id": "61-2",
          "stem": "Un copil diagnosticat cu parotidită epidemică (oreion) dezvoltă, la aproximativ trei săptămâni de la debutul bolii, febră, delir, convulsii, comă și paralizii de nervi cranieni. Despre care complicație este vorba și care este letalitatea asociată, conform textului?",
          "options": [
            "Meningita urliană, cu letalitate de 1-2%",
            "Encefalita urliană, cu letalitate de 18-30%",
            "Pancreatita urliană, cu letalitate de 1-2%",
            "Encefalita urliană, cu letalitate de 1-2%",
            "Miocardita urliană, cu letalitate de 20%"
          ],
          "correct": 3,
          "explanation": "Encefalita urliană (0,2-0,5% din cazuri) apare tardiv, după aproximativ trei săptămâni de la debut, cu febră, delir, convulsii, comă, paralizii de nervi cranieni și periferici, letalitatea fiind de 1-2%. Meningita urliană, spre deosebire de encefalită, apare precoce (ziua 4-7) și are evoluție benignă cu LCR clar.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 794-795"
        },
        {
          "id": "61-3",
          "stem": "Un copil cu parotidită epidemică dezvoltă semne de meningită urliană cu LCR clar (cefalee, vărsături, contractură meningiană). Știind că nu există tratament etiologic pentru infecția urliană, care este conduita terapeutică adecvată?",
          "options": [
            "Antibioterapie cu penicilină G în doze mari",
            "Imunoglobuline intravenoase",
            "Doar repaus la pat, fără altă intervenție terapeutică",
            "Corticoterapie (prednison 1 mg/kgc/zi), cu măsuri suplimentare (dietă hiposodată, protecție gastrică)",
            "Aciclovir intravenos timp de 10 zile"
          ],
          "correct": 3,
          "explanation": "Deoarece nu există tratament etiologic pentru infecția urliană, tratamentul este simptomatic, iar corticoterapia (prednison 1 mg/kgc/zi) este indicată specific pacienților cu meningită și orhită, însoțită de măsuri împotriva efectelor adverse (dietă hiposodată, protecție gastrică, fără exces de glucide).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 794-795"
        },
        {
          "id": "61-4",
          "stem": "În investigarea unui sindrom mononucleozic se efectuează reacția Paul-Bunnell-Davidsohn în două etape, cu absorbția serului pe hematii de bou și, respectiv, pe extract de rinichi de cobai. Care este criteriul de confirmare a diagnosticului de mononucleoză infecțioasă?",
          "options": [
            "Testul este pozitiv doar în prima etapă, fără a necesita etapa a doua",
            "Testul se negativează după ambele tipuri de absorbție",
            "Testul se negativează după absorbția cu hematii de bou și rămâne nemodificat după absorbția cu rinichi de cobai",
            "Testul se negativează după absorbția cu rinichi de cobai și rămâne nemodificat după absorbția cu hematii de bou",
            "Testul rămâne pozitiv după ambele tipuri de absorbție"
          ],
          "correct": 2,
          "explanation": "Conform textului, hematiile de bou leagă ireversibil exclusiv anticorpii din mononucleoza infecțioasă, iar rinichiul de cobai leagă toți ceilalți anticorpi, cu excepția celor din mononucleoză. Astfel, diagnosticul se confirmă dacă testul se negativează în proba tratată cu hematii de bou și rămâne nemodificat în proba tratată cu extract de rinichi de cobai.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 795-797"
        },
        {
          "id": "61-5",
          "stem": "Un adolescent prezintă febră prelungită, angină eritemato-pultacee, adenopatii generalizate și splenomegalie. A fost tratat empiric cu ampicilină pentru suspiciunea de angină bacteriană, moment în care a dezvoltat un exantem cutanat generalizat. Care este cea mai probabilă explicație a acestui tablou clinic?",
          "options": [
            "Reacție alergică idiosincratică la ampicilină, fără legătură cu boala de fond",
            "Mononucleoză infecțioasă, la care eritemul cutanat apare la aproximativ 90% dintre pacienții tratați cu ampicilină",
            "Toxoplasmoză acută, cu exantem tipic post-antibiotic",
            "Angină difterică, cu exantem toxic asociat",
            "Scarlatină suprainfectată, cu exantem caracteristic"
          ],
          "correct": 1,
          "explanation": "Tabloul clinic (febră, angină eritemato-pultacee, adenopatii, splenomegalie) este sugestiv pentru mononucleoză infecțioasă, boală în care poate apărea un eritem cutanat la aproximativ 90% dintre cazurile tratate cu ampicilină, acesta fiind un element util de recunoaștere a bolii și de diferențiere de anginele bacteriene tratate greșit cu acest antibiotic.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 795-797"
        }
      ]
    },
    {
      "num": 62,
      "title": "Infecții respiratorii transmisibile: tusea convulsivă, gripa",
      "questions": [
        {
          "id": "62-1",
          "stem": "Un copil nevaccinat, cu tuse persistentă de trei săptămâni, care a debutat afebril ca o presupusă traheobronșită banală, prezintă acum accese de tuse repetate. Care este caracteristica clinică cea mai sugestivă pentru diagnosticul de tuse convulsivă în faza de stare?",
          "options": [
            "Tuse nocturnă izolată, fără accese, ameliorată de bronhodilatatoare inhalatorii",
            "Tuse productivă cu expectorație muco-purulentă abundentă, însoțită de febră înaltă continuă",
            "Accese de tuse chinuitoare, constituite din chinte repetate, fiecare cu un inspir profund șuierător (repriza), urmate frecvent de vărsături",
            "Tuse uscată cu debut brusc, evoluție de câteva ore și stridor inspirator sever",
            "Tuse însoțită de wheezing expirator și raluri sibilante difuze bilateral"
          ],
          "correct": 2,
          "explanation": "În faza de stare, tusea convulsivă se manifestă prin accese constituite din chinte repetate; fiecare chintă are un inspir profund șuierător (repriza), urmat de sacade expiratorii de tuse, iar accesul este frecvent urmat de vărsături. Această succesiune caracteristică diferențiază tusea convulsivă de alte cauze de tuse cronică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 802-803"
        },
        {
          "id": "62-2",
          "stem": "Un sugar de 4 luni este diagnosticat cu tuse convulsivă în faza de stare, fără intoleranță digestivă și fără alte contraindicații. Care este tratamentul etiologic de primă intenție?",
          "options": [
            "Amoxicilină-clavulanat în doză standard, timp de 7 zile",
            "Corticoterapie sistemică, asociată cu antitusive centrale",
            "Aminoglicozid parenteral, timp de 10 zile",
            "Cefalosporină de generația a treia, timp de 14 zile",
            "Claritromicină 15 mg/kgc/zi, timp de 10-14 zile"
          ],
          "correct": 4,
          "explanation": "Tratamentul etiologic rapid indicat este claritromicina în doză de 15 mg/kgc/zi, timp de 10-14 zile; amoxicilina sau ampicilina reprezintă alternative, în special la copiii mici cu intoleranță gastrică. Aminoglicozidele sau cefalosporinele de generația a treia se rezervă complicațiilor infecțioase, iar corticoterapia doar formelor severe cu insuficiență respiratorie sau complicații nervoase.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 802-803"
        },
        {
          "id": "62-3",
          "stem": "Un sugar cu tuse convulsivă severă prezintă, în timpul unui acces de tuse, un episod de apnee prelungită urmat de stop respirator. Din ce categorie de complicații ale tusei convulsive face parte acest tablou?",
          "options": [
            "Complicații toxice",
            "Complicații mecanice",
            "Complicații infecțioase",
            "Complicații hemoragice",
            "Complicații pulmonare"
          ],
          "correct": 0,
          "explanation": "Textul clasifică apneea cu stop respirator drept complicație toxică a tusei convulsive, distinctă de complicațiile mecanice (hernieri), hemoragice (prin hipertensiune în teritoriul cav superior), pulmonare (pneumotorax, emfizem) sau infecțioase (pneumonii, suprainfecții).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 802-803"
        },
        {
          "id": "62-4",
          "stem": "Un copil anterior sănătos, aflat în context de epidemie gripală, dezvoltă brusc febră înaltă, edem pulmonar acut și insuficiență respiratorie acută. Ce formă clinică de gripă sugerează acest tablou?",
          "options": [
            "Gripa malignă",
            "Gripa necomplicată, formă medie",
            "Sindromul Reye",
            "Laringita acută gripală",
            "Bronșiolita virală"
          ],
          "correct": 0,
          "explanation": "Textul descrie gripa malignă drept o formă clinică gravă, caracterizată prin debut brusc, febril, cu edem pulmonar acut și manifestări de insuficiență respiratorie acută, spre deosebire de formele necomplicate sau de complicațiile respiratorii obișnuite.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 798-800"
        },
        {
          "id": "62-5",
          "stem": "Un adult nevaccinat, aflat într-un focar epidemic de gripă și cu risc crescut de complicații, este confirmat cu infecție cu virus gripal B. Care este conduita corectă privind chimioprofilaxia cu amantadină/rimantadină?",
          "options": [
            "Se administrează doar în asociere cu oseltamivir, pentru potențare terapeutică",
            "Se indică exclusiv ca tratament curativ, nu ca profilaxie",
            "Este contraindicată la persoanele nevaccinate aflate în focar",
            "Se administrează 100-200 mg/zi, fiind eficientă și pentru virusul gripal B",
            "Nu este indicată, deoarece amantadina/rimantadina sunt eficiente numai pentru infecția cu virus gripal A"
          ],
          "correct": 4,
          "explanation": "Chimioprofilaxia cu amantadină sau rimantadină (100-200 mg/zi) se administrează persoanelor nevaccinate, aflate în focar și cu risc crescut de complicații, dar este indicată numai pentru infecția cu virus gripal A, nefiind eficientă împotriva virusului gripal B.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 798-800"
        }
      ]
    },
    {
      "num": 63,
      "title": "Șocul",
      "questions": [
        {
          "id": "63-1",
          "stem": "Un sugar de 8 luni este adus la UPU cu urticarie generalizată, dispnee și hipotensiune arterială, la 15 minute după administrarea unei doze de amoxicilină. Din punct de vedere hemodinamic se constată debit cardiac crescut și rezistență vasculară periferică scăzută, prin tulburarea tonusului vasomotor. Cărui tip de șoc îi corespunde acest tablou fiziopatologic?",
          "options": [
            "Șoc cardiogen",
            "Șoc hipovolemic",
            "Șoc obstructiv",
            "Șoc distributiv",
            "Șoc septic"
          ],
          "correct": 3,
          "explanation": "Conform clasificării fiziopatologice a tipurilor de șoc, șocul distributiv (în principal anafilactic) se caracterizează prin debit cardiac crescut și scăderea rezistenței vasculare periferice, prin tulburări ale tonusului vasomotor. În schimb, șocul hipovolemic și cel cardiogen prezintă scăderea debitului cardiac cu creșterea rezistenței vasculare periferice. Contextul clinic (urticarie, dispnee, hipotensiune după expunere la un medicament) este tipic pentru anafilaxie, cauză principală de șoc distributiv.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 453-468"
        },
        {
          "id": "63-2",
          "stem": "Un sugar de 6 luni cu enterocolită acută severă primește bolusuri repetate de ser fiziologic de 20 ml/kg, ajungând la un total de 60 ml/kg, fără ameliorare semnificativă a semnelor de hipoperfuzie tisulară. Care este conduita corectă în această situație?",
          "options": [
            "Se trece direct la transfuzie de masă eritrocitară, indiferent de cauza inițială a șocului",
            "Se întrerupe imediat reechilibrarea volemică și se inițiază tratament diuretic, presupunând supraîncărcare lichidiană",
            "Se reconsideră diagnosticul, având în vedere posibilitatea unui șoc septic, a unui șoc cardiogen sau a unei hemoragii oculte",
            "Se administrează imediat corticoterapie în doză mare, indiferent de etiologia șocului",
            "Se continuă administrarea de bolusuri de cristaloide fără a reconsidera diagnosticul, întrucât șocul hipovolemic necesită întotdeauna peste 100 ml/kg pentru corecție"
          ],
          "correct": 2,
          "explanation": "Textul precizează că, dacă necesarul de lichide depășește 60 ml/kg fără ameliorare, trebuie avute în vedere posibile cauze precum pierderi lichidiene prin debit fecal ridicat, hemoragie ocultă sau modificarea diagnosticului către șoc septic (situație în care sunt implicate mecanisme suplimentare de tip cardiogen și distributiv). Persistența șocului după 40-60 ml/kg SF este un semnal de alarmă pentru reevaluarea etiologiei, nu un motiv de continuare mecanică a resuscitării fără reevaluare.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 453-468"
        },
        {
          "id": "63-3",
          "stem": "Un copil de 3 ani cu șoc septic, extremități reci, puls periferic slab perceptibil și timp de recolorare capilară prelungit peste 5 secunde rămâne hipotensiv după administrarea a 60 ml/kg ser fiziologic în prima oră de resuscitare (\"șoc rece\" refractar la fluide). Care este agentul vasoactiv recomandat ca primă opțiune în această situație?",
          "options": [
            "Dobutamină",
            "Adrenalină (epinefrină)",
            "Hidrocortizon",
            "Dopamină",
            "Norepinefrină"
          ],
          "correct": 1,
          "explanation": "Textul precizează că, în șocul septic refractar la repleția volemică, se impune administrarea de adrenalină ca primă opțiune față de dopamină, mai ales în \"șocul rece\", unde se începe cu adrenalină 0,05-1 mcg/kg/min. Norepinefrina este de primă intenție în \"șocul cald\", iar dobutamina este utilă pentru suport inotrop la pacienți normotensivi, nu ca vasopresor de primă linie în șocul rece hipotensiv.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 453-468"
        },
        {
          "id": "63-4",
          "stem": "Un copil de 10 ani cu traumatism toracic prezintă hipotensiune arterială, zgomote cardiace asurzite și distensia venelor jugulare (triada Beck). Care este diagnosticul cel mai probabil și conduita terapeutică de urgență?",
          "options": [
            "Embolie pulmonară masivă; administrare de heparină nefracționată intravenos",
            "Șoc cardiogen prin miocardită; suport inotrop cu dobutamină",
            "Tamponadă cardiacă; pericardiocenteză de urgență, ideal cu ghidaj ecocardiografic",
            "Șoc hipovolemic hemoragic; transfuzie masivă de sânge integral",
            "Pneumotorax sub tensiune; decompresie cu ac deasupra coastei a treia, pe linia medioclaviculară"
          ],
          "correct": 2,
          "explanation": "Hipotensiunea arterială, zgomotele cardiace asurzite și creșterea presiunii venelor jugulare constituie triada Beck, caracteristică tamponadei cardiace acute, o formă de șoc obstructiv produsă prin creșterea presiunii intrapericardice cu scăderea returului venos și a debitului cardiac. Tratamentul de urgență, potențial salvator de viață, este pericardiocenteza, ghidajul ecocardiografic oferind o siguranță mai mare a puncției.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 453-468"
        },
        {
          "id": "63-5",
          "stem": "Referitor la utilizarea corticoterapiei în șocul septic la copil, care dintre următoarele afirmații este corectă conform datelor prezentate?",
          "options": [
            "Corticoterapia înlocuiește necesitatea inițierii precoce a antibioterapiei în șocul septic sever",
            "Corticoterapia se administrează exclusiv pe cale orală, în doză unică, la debutul șocului septic",
            "Corticoterapia nu s-a dovedit eficientă ca tratament de rutină al șocului septic, dar rămâne indicată în insuficiența adrenală asociată (de exemplu purpura fulminans) sau la pacienți aflați sub tratament cronic cortizonic",
            "Corticoterapia este contraindicată în orice formă de șoc septic, indiferent de contextul clinic",
            "Corticoterapia trebuie administrată de rutină tuturor copiilor cu șoc septic, deoarece ameliorează semnificativ performanța hemodinamică"
          ],
          "correct": 2,
          "explanation": "Textul arată că administrarea de rutină a preparatelor cortizonice în șocul septic nu a ameliorat performanța hemodinamică, a crescut rata pozitivării culturilor bacteriene și a mortalității. Se mențin însă indicațiile de corticoterapie (hidrocortizon 2-4 mg/kg, maximum 200 mg/zi, în perfuzie continuă) în insuficiența adrenală din purpura fulminans, la pacienții sub tratament cronic cortizonic sau cu insuficiență adrenală congenitală/dobândită.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 453-468"
        }
      ]
    },
    {
      "num": 64,
      "title": "Intoxicațiile acute: acetaminofen, alcool, barbiturice, benzodiazepine, opioide, digitalice, substanțe caustice, anticolinergice, monoxid de carbon",
      "questions": [
        {
          "id": "64-1",
          "stem": "Un copil în vârstă de 6 ani, cu greutatea de 20 kg, este adus la camera de gardă la 3 ore după ce a ingerat accidental o cantitate mare de paracetamol (peste 150 mg/kg). Este asimptomatic, iar transaminazele sunt încă normale. Care este antidotul specific indicat și mecanismul său principal de acțiune?",
          "options": [
            "Naloxonă, care blochează competitiv receptorii opioizi",
            "Flumazenil, care acționează prin antagonism competitiv pe receptorii GABA",
            "N-acetilcisteină, care reconstituie stocurile hepatice de glutation",
            "Fizostigmină, care inhibă acetilcolinesteraza",
            "Deferoxamină, care chelează fierul liber circulant"
          ],
          "correct": 2,
          "explanation": "În intoxicația cu paracetamol, metabolitul toxic (N-acetil-benzo-paraquinonimina) se leagă covalent de hepatocit atunci când rezervele de glutation sunt depășite, producând necroză hepatică centrolobulară. N-acetilcisteina este antidotul specific deoarece este un precursor de glutation și reconstituie stocurile hepatice ale acestuia. Tratamentul cu antidot durează, în funcție de protocol, 72 de ore.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1589-1590"
        },
        {
          "id": "64-2",
          "stem": "O adolescentă de 15 ani este adusă în urgență în comă calmă, hipotonă, cu abolirea reflexelor osteotendinoase și depresie respiratorie moderată, la aproximativ o oră după ingestia voluntară a unei cantități mari de diazepam. Care este antidotul specific și modul său de acțiune?",
          "options": [
            "Flumazenil, cu acțiune competitivă pe receptorii GABA",
            "Naloxonă, antagonist pur al receptorilor opioizi",
            "N-acetilcisteină, precursor de glutation",
            "Atropină, antagonist al receptorilor muscarinici",
            "Fizostigmină, inhibitor de acetilcolinesterază"
          ],
          "correct": 0,
          "explanation": "Depresia respiratorie și coma din intoxicația cu benzodiazepine sunt reversibile la administrarea de flumazenil (Anexate), care are acțiune antagonistă competitivă la nivelul receptorilor GABA. Provocarea de vărsături și spălătura gastrică sunt inutile și contraindicate în intoxicația cu diazepam, din cauza absorbției rapide a medicamentului.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1589-1590"
        },
        {
          "id": "64-3",
          "stem": "Un copil aflat în tratament cronic cu digoxin pentru insuficiență cardiacă dezvoltă brusc bradicardie severă sub 40 bpm, care nu răspunde la atropină, extrasistole ventriculare bigeminate și hiperpotasemie, cu nivel seric al digoxinei mult crescut. Care este tratamentul specific indicat în această situație?",
          "options": [
            "Bicarbonat de sodiu molar în perfuzie, pentru alcalinizare",
            "Administrarea de gluconat de calciu intravenos pentru corectarea rapidă a hiperpotasemiei",
            "Anticorpi antidigitalici specifici (fragmente Fab, de tip Digibind), administrați intravenos",
            "Diureză forțată prin hidratare masivă și furosemid",
            "Dimercaprol (BAL) intramuscular"
          ],
          "correct": 2,
          "explanation": "Antidotul specific al intoxicației digitalice grave, cu aritmii amenințătoare de viață, este reprezentat de anticorpii antidigitalici de tip Digibind (fragmente Fab), care se leagă de molecula digitalică și eliberează ATP-aza membranară blocată. Administrarea de calciu este contraindicată, deoarece crește toxicitatea miocardică a digitalicelor, iar diureza forțată și dializa sunt în general ineficiente în această intoxicație.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1580-1582"
        },
        {
          "id": "64-4",
          "stem": "Un copil de 2 ani ingeră accidental o soluție de hidroxid de sodiu (sodă caustică). La prezentare este conștient, cu sialoree abundentă, disfagie și leziuni de arsură la nivelul cavității bucale. Care este conduita imediată corectă?",
          "options": [
            "Se efectuează spălătură gastrică imediată cu ser fiziologic pentru îndepărtarea toxicului restant",
            "Se provoacă vărsătura pentru evacuarea rapidă a conținutului gastric",
            "Se interzic neutralizarea chimică, spălătura gastrică și cărbunele activat; se internează de urgență pentru endoscopie digestivă în primele 24 de ore",
            "Se administrează cărbune activat 1 g/kg în prima oră de la ingestie",
            "Se neutralizează chimic substanța caustică prin administrarea orală a unei soluții acide diluate"
          ],
          "correct": 2,
          "explanation": "În intoxicațiile cu substanțe caustice este interzisă neutralizarea chimică, spălătura gastrică și administrarea de cărbune activat, manevre care pot agrava leziunile. Conduita corectă este internarea de urgență, cu efectuarea unei endoscopii digestive în primele 24 de ore pentru aprecierea gravității leziunilor, alături de terapie intensivă de susținere.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1600-1602"
        },
        {
          "id": "64-5",
          "stem": "Un copil este resuscitat dintr-un incendiu domestic și adus în stare de comă, cu nivel de carboxihemoglobină (HbCO) de 30%. Care este tratamentul de elecție indicat, având în vedere severitatea intoxicației cu monoxid de carbon?",
          "options": [
            "Exsangvinotransfuzie",
            "Oxigenoterapie pe mască 5-10 L/minut, fără alte măsuri asociate",
            "Oxigenoterapie hiperbară",
            "Hidroxicobalamină intravenoasă, ca unică măsură terapeutică",
            "Albastru de metilen administrat intravenos lent"
          ],
          "correct": 2,
          "explanation": "Oxigenoterapia hiperbară este indicată în intoxicația cu monoxid de carbon atunci când există comă, deficit neurologic focal, tulburări cardiovasculare, sarcină sau un nivel de HbCO peste 20%, situație întâlnită la acest pacient. O singură ședință de oxigenoterapie hiperbară este de obicei salvatoare. Hidroxicobalamina este antidotul specific pentru intoxicația asociată cu cianuri din fumul de incendiu, nu tratamentul de elecție pentru toxicitatea CO în sine.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1600-1602"
        }
      ]
    },
    {
      "num": 65,
      "title": "Insuficiența hepatică",
      "questions": [
        {
          "id": "65-1",
          "stem": "Un copil de 6 ani, fără boală hepatică cronică cunoscută, se prezintă cu alterarea stării de conștiență, flapping tremor și INR = 1,6, necorectat după administrarea parenterală de vitamina K. Conform criteriilor PALF (Pediatric Acute Liver Failure Group), care dintre următoarele afirmații este corectă?",
          "options": [
            "Diagnosticul necesită prezența unei boli hepatice cronice preexistente",
            "Diagnosticul necesită INR > 2,0, indiferent de prezența encefalopatiei hepatice",
            "INR-ul de 1,6 în prezența encefalopatiei hepatice este suficient pentru susținerea diagnosticului de insuficiență hepatică acută",
            "Diagnosticul necesită coagulopatie corectabilă după administrarea de vitamina K",
            "Diagnosticul se stabilește exclusiv pe baza nivelului transaminazelor, indiferent de valoarea INR"
          ],
          "correct": 2,
          "explanation": "Conform criteriilor PALF din anul 2000, IHA la copil este definită prin absența unei afecțiuni cronice hepatice, coagulopatie necorectată după vitamina K parenterală, cu INR de 1,5-1,9 în prezența encefalopatiei hepatice sau INR > 2,0 în absența encefalopatiei. Un INR de 1,6 asociat cu encefalopatie hepatică se încadrează exact în acest criteriu diagnostic.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 978-990"
        },
        {
          "id": "65-2",
          "stem": "O adolescentă de 15 ani se prezintă cu icter intens, anemie hemolitică cu test Coombs negativ, transaminaze ușor-moderat crescute (raport AST/ALT > 4) și tulburări severe de coagulare, în contextul unei insuficiențe hepatice acute. Care este diagnosticul cel mai probabil și conduita terapeutică imediată?",
          "options": [
            "Sindrom Reye; se instituie restricție proteică și lactuloză",
            "Hepatită virală B fulminantă; se administrează imunoglobulină specifică anti-VHB",
            "Hepatită autoimună tip 2; se inițiază corticoterapie în doze mari",
            "Boala Wilson; se inițiază tratament cu D-penicilamină imediat ce se suspectează diagnosticul, chiar înainte de confirmarea biochimică",
            "Intoxicație cu paracetamol; se administrează N-acetilcisteină"
          ],
          "correct": 3,
          "explanation": "Asocierea IHA cu transaminaze ușor/moderat crescute, raport AST/ALT > 4, bilirubină mult crescută prin hemoliză nonimună (Coombs negativ) este înalt sugestivă pentru boala Wilson, formă de debut caracteristică mai ales la adolescente. Textul precizează că tratamentul cu D-penicilamină trebuie inițiat imediat ce se suspectează boala, chiar în absența rezultatelor biochimice de confirmare.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 978-990"
        },
        {
          "id": "65-3",
          "stem": "Un copil cu insuficiență hepatică acută și encefalopatie hepatică grad IV dezvoltă semne de hipertensiune intracraniană prin edem cerebral. Care este mecanismul principal al edemului cerebral în acest context și o măsură terapeutică adecvată?",
          "options": [
            "Edem interstițial, secundar hidrocefaliei, tratat cu acetazolamidă",
            "Edem hemoragic, secundar coagulopatiei, tratat cu plasmă proaspătă congelată în doze mari",
            "Edem obstructiv, prin blocarea circulației LCR, tratat prin derivație ventriculo-peritoneală",
            "Edem citotoxic, care afectează în primul rând substanța cenușie, tratat cu soluții hiperosmolare (manitol 20% sau soluție salină NaCl 3%)",
            "Edem vasogenic, prin creșterea permeabilității capilare, tratat cu corticosteroizi în doze mari"
          ],
          "correct": 3,
          "explanation": "Textul precizează că edemul cerebral, complicația de temut a encefalopatiei hepatice, afectează în primul rând substanța cenușie și este produs prin mecanism citotoxic, motiv pentru care răspunde la terapia cu manitol sau soluție salină hipertonă. Alte măsuri menționate sunt reducerea temperaturii corporale, hiperventilația și restricția de lichide.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 978-990"
        },
        {
          "id": "65-4",
          "stem": "Un copil cu insuficiență hepatică acută secundară intoxicației cu paracetamol prezintă pH arterial = 7,25, fără alte criterii asociate. Conform criteriilor King's College pentru IHA indusă de paracetamol, această situație clinică:",
          "options": [
            "Reprezintă, prin ea însăși, criteriu de indicație pentru transplant hepatic de urgență, independent de celelalte criterii (creatinină, comă)",
            "Nu se aplică, deoarece criteriile King's College sunt valabile doar pentru cauzele non-paracetamol de IHA",
            "Impune doar monitorizare, deoarece criteriile de transplant necesită minimum 3 din 4 criterii asociate, ca la cauzele non-paracetamol",
            "Reprezintă criteriu de transplant doar dacă se asociază cu creatinină > 3,4 mg/dL și comă de grad III/IV",
            "Nu reprezintă criteriu de indicație pentru transplant hepatic de urgență, fiind necesară obligatoriu și asocierea unui INR > 6"
          ],
          "correct": 0,
          "explanation": "Conform criteriilor King's College pentru IHA din intoxicația cu paracetamol, pH < 7,3 constituie singur criteriu suficient de indicație pentru transplant hepatic de urgență; alternativ, se pot asocia INR > 6, creatinină > 3,4 mg/dL și comă de grad III/IV. Criteriile pentru celelalte cauze de IHA (necesitatea a 3 din 4 elemente) sunt diferite și separate în text.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 978-990"
        },
        {
          "id": "65-5",
          "stem": "Un copil cu insuficiență hepatică acută, fără sângerare activă, necesită montarea unui cateter venos central. Trombocitele sunt 12.000/mm3, iar INR este crescut. Care este conduita corectă conform ghidului de tratament?",
          "options": [
            "Se amână manopera până la normalizarea completă a INR, indiferent de necesitatea clinică a cateterului",
            "Se administrează masă trombocitară, având în vedere valoarea sub 15.000/mm3 în absența hemoragiei, procedura invazivă justificând corectarea",
            "Se administrează plasmă proaspătă congelată de rutină, pentru corectarea INR înainte de orice manoperă",
            "Corectarea coagulopatiei nu este necesară, deoarece nu există sângerare activă",
            "Se administrează factor VII recombinant doar dacă trombocitele scad ulterior sub 50.000/mm3, indiferent de context"
          ],
          "correct": 1,
          "explanation": "Textul precizează că procedurile invazive se pot efectua sub protecția administrării de trombocite dacă acestea sunt sub 15.000/mm3 în absența hemoragiei (sau sub 50.000/mm3 în prezența acesteia) sau de factor VII recombinant. Corectarea INR/TQ este justificată doar în sângerările active sau înaintea manoperelor invazive, iar administrarea de rutină a plasmei proaspete congelate nu este recomandată, deoarece îngreunează aprecierea evoluției coagulopatiei.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 978-990"
        }
      ]
    },
    {
      "num": 66,
      "title": "Hipertensiunea craniană și edemul cerebral acut",
      "questions": [
        {
          "id": "66-1",
          "stem": "Un copil de 8 ani cu traumatism cranio-cerebral sever este monitorizat în terapie intensivă. Presiunea arterială medie (PAM) este 70 mmHg, iar presiunea intracraniană (PIC), monitorizată invaziv, este 35 mmHg. Care este valoarea presiunii de perfuzie cerebrală (PPC) și semnificația ei clinică?",
          "options": [
            "PPC = 105 mmHg; hiperperfuzie cerebrală care impune reducerea de urgență a PAM",
            "PPC = 70 mmHg; valoare normală, nu necesită nicio intervenție terapeutică",
            "PPC = 35 mmHg; valoare peste pragul minim acceptat pentru vârsta sa, fără risc de ischemie cerebrală",
            "PPC = 35 mmHg; valoare sub pragul minim acceptat pentru copiii peste 3 ani (>50-60 mmHg), asociată cu risc crescut de ischemie cerebrală",
            "PPC nu poate fi calculată fără cunoașterea valorii PaCO2"
          ],
          "correct": 3,
          "explanation": "PPC se calculează după formula PPC = PAM - PIC, deci 70 - 35 = 35 mmHg. Valorile minime acceptate ale PPC pentru a preveni ischemia cerebrală la copiii peste 3 ani sunt >50-60 mmHg, iar o PPC sub 40 mmHg este un predictor important de mortalitate la copiii cu traumatism cranio-cerebral. Valoarea obținută este deci periculos de scăzută.",
          "source": "Protocoale de diagnostic și tratament în Pediatrie (2023), pag. 347-354"
        },
        {
          "id": "66-2",
          "stem": "Un copil cu hipertensiune intracraniană decompensată prezintă brusc bradicardie, hipertensiune arterială și respirații neregulate. Ce reprezintă acest tablou clinic și ce implicație are?",
          "options": [
            "Semn de hipoglicemie acută, ce impune administrare imediată de glucoză 10%",
            "Semn de convulsii subclinice, ce impune doar administrare de diazepam intravenos",
            "Semn de șoc septic decompensat, ce impune inițierea antibioterapiei de urgență",
            "Triada Cushing, semn de angajare cerebrală severă/iminentă, care impune măsuri de urgență pentru reducerea PIC",
            "Semn tipic de deshidratare severă, ce impune reechilibrare volemică rapidă cu ser fiziologic"
          ],
          "correct": 3,
          "explanation": "Asocierea bradicardie-hipertensiune arterială-respirații neregulate constituie triada Cushing, descrisă în text ca semn clinic asociat angajării cerebrale. Recunoașterea ei impune intervenție de urgență pentru scăderea presiunii intracraniene, nu doar corectarea unor tulburări metabolice sau volemice.",
          "source": "Protocoale de diagnostic și tratament în Pediatrie (2023), pag. 347-354"
        },
        {
          "id": "66-3",
          "stem": "Un copil cu hipertensiune intracraniană dezvoltă brusc ptoză palpebrală și midriază unilaterală fixă, areactivă, de aceeași parte, însoțite de hemipareză controlaterală. Care sindrom de angajare cerebrală este cel mai probabil sugerat de acest tablou?",
          "options": [
            "Hernia transtentorială ascendentă (în sus, deasupra cerebelului și mezencefalului)",
            "Hernia transtentorială centrală",
            "Hernia subfalcină (a girusului cingular)",
            "Hernia transforaminală (a amigdalelor cerebeloase)",
            "Hernia transtentorială laterală (uncală), prin compresia nervului III de către uncus și girusul parahipocampic"
          ],
          "correct": 4,
          "explanation": "Paralizia de nerv III (ptoză palpebrală, midriază unilaterală) însoțită de hemipareză este manifestarea caracteristică a herniei transtentoriale laterale (uncale), produsă prin deplasarea uncusului și girusului parahipocampic medial, cu compresia nervului oculomotor. Celelalte tipuri de angajare au tablouri clinice diferite (mioză bilaterală/pupile fixe în hernia centrală, privire „în apus de soare” în cea ascendentă, redoare de ceafă și apnee în cea transforaminală).",
          "source": "Protocoale de diagnostic și tratament în Pediatrie (2023), pag. 347-354"
        },
        {
          "id": "66-4",
          "stem": "Un copil cu traumatism cranio-cerebral sever are scor Glasgow (GCS) = 6, respirații neregulate cu efort respirator crescut și cianoză de tip central. Care este conduita imediată recomandată în cadrul managementului hipertensiunii intracraniene decompensate?",
          "options": [
            "Administrare imediată de manitol în doză mare, fără alte măsuri de stabilizare",
            "Puncție lombară pentru măsurarea presiunii LCR, înaintea oricărei alte manevre",
            "Sedare orală cu diazepam și reevaluare clinică peste 2 ore",
            "Hiperventilație susținută, cu menținerea PaCO2 sub 25 mmHg, ca metodă de primă linie de reducere a PIC",
            "Intubație endotraheală de urgență în secvență rapidă, cu agent de inducție (propofol sau tiopental) și relaxant muscular cu acțiune rapidă"
          ],
          "correct": 4,
          "explanation": "Un scor Glasgow < 8, semnele de detresă respiratorie și de ventilare/oxigenare inadecvată (cianoză centrală, respirații neregulate cu efort) reprezintă indicații de intubație endotraheală de urgență în secvență rapidă, cu agent de inducție și relaxant muscular cu acțiune rapidă. Hiperventilația agresivă și susținută este contraindicată (risc de vasoconstricție și ischemie cerebrală), fiind acceptată doar temporar și în situații de iminență de angajare.",
          "source": "Protocoale de diagnostic și tratament în Pediatrie (2023), pag. 347-354"
        },
        {
          "id": "66-5",
          "stem": "Un copil cu tumoră cerebrală prezintă edem cerebral peritumoral de tip vasogenic și semne de hipertensiune intracraniană compensată. Care este tratamentul specific recomandat pentru acest tip de edem?",
          "options": [
            "Craniectomie decompresivă de urgență",
            "Barbiturice în doze mari (tiopental intravenos)",
            "Corticoterapie (dexametazonă intravenos, 0,5-1 mg/kg/zi, divizată în 2-4 subdoze zilnice)",
            "Soluție salină hipertonă 3% în bolus, ca primă intervenție",
            "Manitol în doză mare, administrat ca primă linie de tratament"
          ],
          "correct": 2,
          "explanation": "În edemul vasogenic peritumoral (tumoră cerebrală) sau în edemul inflamator (abces cerebral), tratamentul specific recomandat este corticoterapia cu dexametazonă intravenos. Manitolul, soluțiile saline hipertone, barbituricele și craniectomia decompresivă sunt rezervate altor situații (hemoragie intracraniană, HIC decompensată refractară).",
          "source": "Protocoale de diagnostic și tratament în Pediatrie (2023), pag. 347-354"
        }
      ]
    },
    {
      "num": 67,
      "title": "Coma și statusul convulsiv",
      "questions": [
        {
          "id": "67-1",
          "stem": "Un copil de 6 ani este adus în stare de comă. La examenul clinic se constată redoare de ceafă și semne Kernig și Brudzinski prezente, fără context febril. Care este diagnosticul cel mai probabil sugerat de acest tablou clinic?",
          "options": [
            "Encefalopatie hepatică",
            "Meningoencefalită virală",
            "Abces cerebral",
            "Meningită bacteriană acută",
            "Hemoragie subarahnoidiană"
          ],
          "correct": 4,
          "explanation": "Prezența semnelor de iritație meningeală în context febril orientează către o infecție a sistemului nervos central, dar dacă aceste semne nu se asociază cu febră, diagnosticul trebuie orientat către hemoragie subarahnoidiană. Absența febrei exclude etiologia infecțioasă ca primă ipoteză.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 683-688"
        },
        {
          "id": "67-2",
          "stem": "Un copil aflat în stare de comă prezintă midriază unilaterală, fixă și areactivă. Cum trebuie interpretat acest semn clinic?",
          "options": [
            "Semn de urgență neurochirurgicală, sugestiv pentru hernierea subtentorială a lobului temporal",
            "Semn de intoxicație cu substanțe organofosforate",
            "Semn caracteristic stării postcritice, după o criză de convulsii tonico-clonice",
            "Semn de intoxicație cu substanțe atropinice, care necesită doar monitorizare",
            "Semn de comă cu siderare vegetativă indus de hipotermie severă"
          ],
          "correct": 0,
          "explanation": "Midriaza unilaterală este descrisă în text ca semn de urgență neurochirurgicală, reprezentând de obicei hernierea subtentorială a lobului temporal. Midriaza bilaterală, în schimb, poate apărea în stările postcritice sau în intoxicații cu atropinice, simpatomimetice ori benzodiazepine.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 683-688"
        },
        {
          "id": "67-3",
          "stem": "Un copil suferă un traumatism cranio-cerebral și rămâne inițial conștient (interval liber). La aproximativ 36 de ore de la traumatism, starea sa se alterează progresiv și intră în comă. Ce tip de leziune hemoragică este cel mai probabil sugerat de această evoluție?",
          "options": [
            "Hematom subdural cronic",
            "Hematom extradural",
            "Hematom subdural subacut",
            "Comoție cerebrală",
            "Contuzie cerebrală simplă, fără hematom asociat"
          ],
          "correct": 2,
          "explanation": "Conform textului, dacă intervalul liber este sub 12 ore se suspectează hematom extradural, dacă este între 24 și 48 de ore se are în vedere hematomul subdural subacut, iar dacă depășește 72 de ore, hematomul subdural cronic. Un interval liber de 36 de ore se încadrează în intervalul sugestiv pentru hematom subdural subacut.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 683-688"
        },
        {
          "id": "67-4",
          "stem": "La examinarea unui copil aflat în comă se remarcă o halenă particulară, asemănătoare mirosului de „mere putrede”. Care dintre următoarele situații clinice se asociază cel mai frecvent cu această halenă acetonemică?",
          "options": [
            "Intoxicația cu substanțe organofosforate",
            "Insuficiența renală cronică",
            "Diabetul zaharat sau hipoglicemia cetotică cu vărsături incoercibile",
            "Insuficiența hepatică (foetor hepatic)",
            "Intoxicația voluntară cu alcool etilic"
          ],
          "correct": 2,
          "explanation": "Halena de tip „mere putrede”, acetonemică, este descrisă în text ca fiind întâlnită în diabet, dar și la copiii cu hipoglicemie cetotică sau cu vărsături incoercibile. Halena de amoniac orientează spre insuficiență renală cronică, iar halena de ficat crud spre insuficiență hepatică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 683-688"
        },
        {
          "id": "67-5",
          "stem": "Un copil aflat în comă din cauza unei meningite bacteriene dezvoltă sindrom de secreție inadecvată de hormon antidiuretic (sindrom Schwartz-Bartter). Care este elementul de conduită specific menționat pentru această situație?",
          "options": [
            "Administrarea de diuretice osmotice în doze mari, indiferent de ionogramă",
            "Administrarea de soluții saline hipertone în ritm crescut",
            "Reducerea volumului soluțiilor perfuzabile administrate și monitorizarea atentă a ionogramei sanguine",
            "Expansiune volemică agresivă cu ser fiziologic izoton",
            "Restricția hidrică nu este necesară dacă natremia este normală"
          ],
          "correct": 2,
          "explanation": "Textul precizează că sindromul de secreție inadecvată de hormon antidiuretic apare la copiii cu meningită bacteriană și că, în această situație, trebuie monitorizată ionograma sanguină și trebuie reduse soluțiile perfuzabile administrate, pentru a evita agravarea hiponatremiei diluționale.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 683-688"
        }
      ]
    },
    {
      "num": 68,
      "title": "Sindromul convulsiv. Convulsiile febrile",
      "questions": [
        {
          "id": "68-1",
          "stem": "Un sugar în vârstă de 14 luni, aflat în plină ascensiune febrilă (temperatură axilară 38,8°C, debutată de circa 20 de minute), prezintă mișcări oscilatorii ritmice, fine, ale întregului corp, fără pierderea stării de conștiență. Care este cel mai probabil diagnostic?",
          "options": [
            "Spasmul hohotului de plâns",
            "Frison",
            "Convulsie febrilă complexă",
            "Stare de rău convulsiv febril",
            "Convulsie febrilă simplă"
          ],
          "correct": 1,
          "explanation": "Frisoanele sunt frecvent confundate cu convulsiile febrile, dar sunt mișcări oscilatorii ritmice, fine, ale întregului corp, care nu se asociază cu pierderea stării de conștiență și apar concomitent cu/urmate de ascensiunea termică, spre deosebire de convulsiile febrile propriu-zise. Convulsia febrilă presupune pierderea stării de conștiență. Spasmul hohotului de plâns este precedat de plâns și expir prelungit, nefiind legat de febră.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 667-682"
        },
        {
          "id": "68-2",
          "stem": "Un copil de 2 ani, în a doua zi a unei viroze respiratorii febrile, prezintă o criză convulsivă cu debut prin deviere a capului și ochilor spre dreapta, cu durată de aproximativ 20 de minute; la câteva ore, în cadrul aceluiași episod febril, prezintă o a doua criză cu aceleași caracteristici. Cum se clasifică acest tip de convulsie febrilă?",
          "options": [
            "Epilepsie parțială continuă",
            "Convulsie febrilă complexă",
            "Frison",
            "Criză de absență tipică",
            "Convulsie febrilă simplă"
          ],
          "correct": 1,
          "explanation": "Convulsiile febrile complexe se caracterizează prin debut focal, durată prelungită (peste 15 minute) și caracter recurent în cursul aceluiași episod de boală acută febrilă — toate trei elemente fiind prezente în acest caz. Convulsiile febrile simple sunt generalizate, durează sub 15 minute și apar o singură dată în episodul febril respectiv.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 667-682"
        },
        {
          "id": "68-3",
          "stem": "Un sugar de 7 luni, cu schemă de vaccinare incompletă (fără nicio doză de vaccin anti-Haemophilus influenzae tip b sau anti-pneumococic), este adus la urgență după o convulsie febrilă cu caracteristici de convulsie febrilă simplă. Examenul clinic este normal, fără semne de iritație meningeală. Care este conduita corectă conform recomandărilor citate în text?",
          "options": [
            "Se indică efectuarea puncției lombare, având în vedere statusul vaccinal incomplet",
            "Se indică tomografie computerizată cerebrală de urgență",
            "Se indică electroencefalogramă de urgență, înaintea externării",
            "Se indică internare cu monitorizare video-EEG timp de 24 de ore",
            "Nu este necesară nicio investigație suplimentară, doar tratamentul afecțiunii febrile subiacente"
          ],
          "correct": 0,
          "explanation": "Conform recomandărilor Academiei Americane de Pediatrie citate în text, puncția lombară este indicată la copiii cu convulsii febrile care sunt nevaccinați anti-Haemophilus influenzae tip b sau anti-Streptococcus pneumoniae, sau la care vaccinarea este incertă, chiar în absența altor semne clinice de meningită. La copiii cu CFS tipice și examen neurologic normal, în general nu sunt necesare EEG, neuroimagistică sau puncție lombară, dar acest caz are un factor de risc specific menționat explicit ca indicație pentru puncție lombară.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 667-682"
        },
        {
          "id": "68-4",
          "stem": "Un copil febril se prezintă la urgență aflat încă în criză convulsivă generalizată, cu o durată estimată de 7 minute de la debut. Abordul venos periferic nu poate fi obținut rapid. Care este conduita terapeutică de primă linie în această situație?",
          "options": [
            "Așteptare fără tratament, deoarece convulsiile febrile durează întotdeauna sub 5 minute",
            "Fenobarbital intramuscular, în doze anticonvulsivante",
            "Antipiretic administrat oral, criza urmând să cedeze spontan odată cu scăderea febrei",
            "Midazolam cu administrare bucală sau nazală, 0,2 mg/kg",
            "Fenitoină intravenoasă 20 mg/kg, prin abord osos de urgență"
          ],
          "correct": 3,
          "explanation": "Convulsiile febrile cu durată mai mare de 5 minute au indicație de oprire farmacologică; anticonvulsivantele de primă linie sunt diazepamul și lorazepamul intravenos, iar dacă nu se poate aborda calea intravenoasă, midazolamul cu administrare bucală sau nazală, 0,2 mg/kg, reprezintă opțiunea corectă. Fenitoina se rezervă cazurilor care nu răspund la benzodiazepine, în cadrul stării de rău convulsiv.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 667-682"
        },
        {
          "id": "68-5",
          "stem": "Un sugar de 8 luni are prima convulsie febrilă simplă. Din anamneză reiese: vârsta sub 1 an, mama a prezentat convulsii febrile în copilărie, temperatura măsurată în departamentul de urgență a fost relativ scăzută, iar intervalul dintre debutul febrei și apariția crizei a fost scurt. Ținând cont de asocierea acestor factori de risc, care este riscul aproximativ de recurență a convulsiilor febrile la acest copil?",
          "options": [
            "Sub 20%",
            "100%, recurența fiind inevitabilă",
            "30-35%",
            "50-65%",
            "Cel puțin 70%"
          ],
          "correct": 4,
          "explanation": "Factorii de risc pentru recurență menționați în text sunt: vârsta mică la prima convulsie febrilă (sub 1 an), istoric de convulsii febrile la rudele de gradul 1, nivelul scăzut al febrei și durata scurtă între debutul febrei și apariția crizei. Copiii care prezintă toți acești factori au un risc de recurență de cel puțin 70%, comparativ cu sub 20% la cei fără niciun factor de risc.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 667-682"
        }
      ]
    },
    {
      "num": 69,
      "title": "Paraliziile cerebrale infantile",
      "questions": [
        {
          "id": "69-1",
          "stem": "Sugar în vârstă de 5 luni este adus la consult deoarece părinții observă că folosește preferențial mâna dreaptă pentru apucarea obiectelor. La examinare, prehensiunea se face cu hiperextensia și răsfirarea degetelor, flexia cotului și abducția excesivă a brațului drept; membrul inferior drept este în extensie, iar piciorul în var equin. Care este diagnosticul cel mai probabil?",
          "options": [
            "Hemiplegie spastică dreaptă",
            "Monoplegie congenitală a membrului superior drept",
            "Hemisindrom neonatal tranzitoriu",
            "Diplegie spastică cu afectare asimetrică a membrelor superioare",
            "Paralizie obstetricală de plex brahial drept"
          ],
          "correct": 0,
          "explanation": "Textul descrie exact acest tablou clinic: primele manifestări ale hemiplegiei spastice apar în jurul vârstei de 4-5 luni, când sugarul folosește preferențial un membru superior, cu prehensiune caracterizată de hiperextensia și răsfirarea degetelor, flexia cotului și abducția excesivă a brațului, iar membrul inferior este în extensie cu picior în var equin. Paralizia obstetricală de plex brahial se diferențiază prin semne de afectare a neuronului motor periferic, iar hemisindroamele neonatale sunt tranzitorii.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 654-664"
        },
        {
          "id": "69-2",
          "stem": "Un copil de 8 luni prezintă hemiplegie dreaptă cu instalare relativ bruscă, după un episod de convulsii de hemicorp drept. La examenul clinic se constată hipotonie a membrelor afectate și pareză facială (nerv VII) de tip central pe aceeași parte. Aceste elemente clinice pledează cel mai mult pentru:",
          "options": [
            "Diplegie atonă cu afectare asimetrică",
            "Paralizie obstetricală de plex brahial",
            "Hemiplegie congenitală cu debut tardiv",
            "Leucomalacie periventriculară simetrică bilaterală",
            "Hemiplegie dobândită (survenită după perioada neonatală)"
          ],
          "correct": 4,
          "explanation": "Conform textului, este greu de diferențiat forma congenitală de cea dobândită la vârsta de sugar, dar prezența hipotoniei și a paraliziei faciale de tip central pledează pentru hemiplegia dobândită. De asemenea, sunt descrise cazuri rare cu debut brusc, după accident vascular cerebral sau convulsii de hemicorp, când hemiplegia inițial flască devine ulterior spastică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 654-664"
        },
        {
          "id": "69-3",
          "stem": "Un nou-născut la termen suferă un episod de hipoperfuzie cerebrală severă, cu afectare predominantă a zonei corticale de graniță (watershed) dintre teritoriile arteriale. Conform mecanismelor fiziopatologice descrise, care este forma clinică de paralizie cerebrală cel mai probabil rezultată?",
          "options": [
            "Tetraplegie spastică",
            "Diplegie atonă",
            "Hemiplegie spastică",
            "Paralizie cerebrală ataxică",
            "Formă dischinetică/extrapiramidală"
          ],
          "correct": 0,
          "explanation": "Textul precizează că, la nou-născutul la termen, hipoperfuzia lezează zona de graniță (watershed) a cortexului, ducând la tetraplegie spastică, în timp ce leziunile vasculare din teritoriul arterei cerebrale medii determină hemiplegie spastică, iar afectarea ganglionilor bazali produce forme extrapiramidale/dischinetice.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 654-664"
        },
        {
          "id": "69-4",
          "stem": "Copil de 4 ani cu tetrapareză spastică severă, neambulator, este urmărit în cadrul unei echipe multidisciplinare de recuperare neuromotorie. Care este conduita corectă de screening pentru o complicație osteoarticulară frecventă la acest tip de pacient?",
          "options": [
            "Radiografie de bazin la interval de 6-12 luni",
            "Tomografie computerizată cerebrală anuală",
            "Radiografie de coloană vertebrală lunară",
            "Ecografie transfontanelară la fiecare 6 luni",
            "IRM cerebral anual pentru reevaluarea leziunilor"
          ],
          "correct": 0,
          "explanation": "Textul recomandă urmărirea și screeningul afectării șoldului (displazie, subluxație, dislocare) la copiii cu PC, în special la cei nonambulatorii cu tetrapareză spastică, prin efectuarea unei radiografii de bazin la interval de 6-12 luni. Intervenția chirurgicală precoce (osteotomie femurală și/sau de pelvis) pare să aibă rezultate mai bune.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 654-664"
        },
        {
          "id": "69-5",
          "stem": "Un copil de 5 ani cu diplegie spastică la nivelul membrelor inferioare, nivel funcțional înalt și capacitate cognitivă adecvată pentru a susține terapia de reabilitare postoperatorie, este evaluat pentru rizotomie dorsală selectivă. Care dintre următoarele afirmații despre această procedură este corectă, conform textului?",
          "options": [
            "Se recomandă la copii cu vârsta peste 10 ani, după consolidarea deformărilor osoase",
            "Este indicată cu precădere în formele mixte de PC cu distonie marcantă",
            "Constă în secționarea rădăcinilor nervoase anterioare (motorii) L1-S2, cu conservarea celor senzoriale",
            "Presupune plasarea unei pompe cu eliberare continuă de baclofen la nivel subarahnoidian",
            "Constă în secționarea selectivă a rădăcinilor nervoase posterioare (senzoriale) L1-S2, cu conservarea rădăcinilor motorii"
          ],
          "correct": 4,
          "explanation": "Rizotomia dorsală selectivă presupune laminectomie, izolarea și stimularea electrică a rădăcinilor nervoase posterioare (senzoriale) L1-S2, cu secționarea celor responsabile de răspunsul spastic anormal (până la 70-90%), toate rădăcinile motorii fiind conservate. Se recomandă la copii cu vârste între 2 și 9 ani, cu răspuns mai bun la cei cu diplegie față de tetraplegie, și nu este indicată în formele mixte cu distonie marcantă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 654-664"
        }
      ]
    },
    {
      "num": 70,
      "title": "Stenoza hipertrofică de pilor",
      "questions": [
        {
          "id": "70-1",
          "stem": "Un sugar de 3 săptămâni se prezintă cu vărsături repetate, nonbilioase, fără ca oliva pilorică să fie palpabilă la examenul clinic. Analizele evidențiază alcaloză metabolică hipocloremică, iar starea clinică se ameliorează rapid după rehidratare. Cum trebuie interpretat acest tablou?",
          "options": [
            "Tabloul clinic este tipic pentru invaginația intestinală",
            "Diagnosticul de stenoză hipertrofică de pilor formă atipică trebuie luat în discuție",
            "Ameliorarea rapidă după rehidratare exclude o patologie obstructivă digestivă",
            "Alcaloza hipocloremică orientează în mod caracteristic spre gastroenterită acută",
            "Diagnosticul de SHP este exclus, fiind vorba despre reflux gastroesofagian fiziologic"
          ],
          "correct": 1,
          "explanation": "Textul precizează că forma atipică de SHP trebuie luată în discuție la un sugar de vârstă mică cu vărsături nonbilioase repetate, alcaloză metabolică hipocloremică și/sau ameliorare clinică rapidă după rehidratare. Aceste elemente, deși nespecifice, nu exclud SHP, ci impun suspiciune diagnostică suplimentară. Palparea olivei pilorice este oricum mai rar pozitivă în prezent (aproximativ 49% din cazuri).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 302-304"
        },
        {
          "id": "70-2",
          "stem": "Un sugar diagnosticat cu stenoză hipertrofică de pilor prezintă și icter. Care este afirmația corectă referitoare la această asociere?",
          "options": [
            "Reprezintă sindromul ictero-piloric, întâlnit la aproximativ 14% dintre cazurile de SHP, cu rezoluție după intervenția chirurgicală",
            "Hiperbilirubinemia asociată SHP este exclusiv de tip direct și nu se remite postoperator",
            "Prezența icterului contraindică intervenția chirurgicală până la normalizarea bilirubinei",
            "Icterul la un sugar cu SHP impune amânarea pilorotomiei până la investigarea completă a unei atrezii de căi biliare",
            "Asocierea icter-SHP este întâlnită la peste jumătate din cazuri"
          ],
          "correct": 0,
          "explanation": "Textul menționează explicit că hiperbilirubinemia poate însoți SHP, determinând sindromul ictero-piloric în 14% din cazuri, cu rezoluție după intervenția chirurgicală. Nu se descrie necesitatea amânării intervenției sau contraindicarea acesteia din cauza icterului.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 302-304"
        },
        {
          "id": "70-3",
          "stem": "Un sugar de 5 săptămâni cu suspiciune clinică de stenoză hipertrofică de pilor este investigat ecografic. Care dintre următoarele seturi de valori corespunde limitelor superioare descrise pentru grosimea și lungimea mușchiului piloric, respectiv diametrul pilorului, susținând diagnosticul de SHP?",
          "options": [
            "Grosime 3-4 mm, lungime 5-7 mm, diametru 10-14 mm",
            "Grosime 10 mm, lungime 15-19 mm, diametru 3-4 mm",
            "Grosime 6-8 mm, lungime 25-30 mm, diametru 18-20 mm",
            "Grosime 1-2 mm, lungime 8-10 mm, diametru 5-7 mm",
            "Grosime 3-4 mm, lungime 15-19 mm, diametru 10-14 mm"
          ],
          "correct": 4,
          "explanation": "Textul precizează că la ecografia abdominală se apreciază grosimea mușchiului piloric (limita superioară de 3-4 mm), lungimea mușchiului piloric (limita superioară de 15-19 mm) și diametrul pilorului (limita superioară de 10-14 mm). Ecografia abdominală are sensibilitate și specificitate de peste 95% pentru SHP.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 302-304"
        },
        {
          "id": "70-4",
          "stem": "Un sugar se prezintă cu vărsături bilioase, aspect care nu este caracteristic stenozei hipertrofice de pilor. Care este investigația imagistică inițială recomandată pentru a exclude o cauză distală de obstrucție intestinală?",
          "options": [
            "Tomografia computerizată abdominală",
            "Endoscopia digestivă superioară",
            "Examenul radiologic cu substanță de contrast per os",
            "Radiografia abdominală pe gol",
            "Ecografia abdominală, ca investigație de rutină pentru SHP"
          ],
          "correct": 3,
          "explanation": "Textul precizează că radiografia abdominală pe gol se efectuează în cazul sugarilor cu vărsături bilioase la care se suspectează o cauză distală de obstrucție, spre deosebire de SHP, care se manifestă tipic prin vărsături nonbilioase. Examenul cu substanță de contrast se rezervă cazurilor incerte clinic și ecografic, iar endoscopia se folosește extrem de rar.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 302-304"
        },
        {
          "id": "70-5",
          "stem": "Un sugar cu stenoză hipertrofică de pilor prezintă alcaloză hipocloremică semnificativă la evaluarea preoperatorie. Care este conduita corectă înaintea intervenției chirurgicale (pilorotomie extramucoasă Fredet-Weber-Ramstedt)?",
          "options": [
            "Corectarea se realizează exclusiv prin administrarea de KCl în bolus rapid intravenos",
            "Intervenția chirurgicală trebuie efectuată imediat, iar corectarea electrolitică se realizează exclusiv postoperator",
            "Se recomandă restricție hidrică strictă până la normalizarea spontană a electroliților",
            "Alcaloza hipocloremică nu influențează evoluția postoperatorie și nu necesită corectare prealabilă",
            "Corectarea alcalozei și a dezechilibrelor electrolitice anterior intervenției, întrucât persistența lor se asociază cu risc crescut de apnee postoperatorie"
          ],
          "correct": 4,
          "explanation": "Textul precizează că alcaloza și dezechilibrele electrolitice trebuie corectate anteoperatoriu, deoarece persistența lor a fost asociată cu un risc crescut de apnee. Postoperator se impune, de asemenea, monitorizarea riscului de apnee cel puțin în primele 24 de ore.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 302-304"
        }
      ]
    },
    {
      "num": 71,
      "title": "Invaginația intestinală",
      "questions": [
        {
          "id": "71-1",
          "stem": "Un sugar de 8 luni se prezintă cu dureri abdominale colicative, vărsături și scaun cu aspect de „jeleu de coacăze”. Se suspectează invaginație intestinală. Care este investigația imagistică de elecție pentru confirmarea diagnosticului?",
          "options": [
            "Ecografia abdominală",
            "Tranzitul baritat",
            "Rezonanța magnetică abdominală",
            "Radiografia abdominală simplă",
            "Tomografia computerizată abdominală"
          ],
          "correct": 0,
          "explanation": "Ecografia abdominală reprezintă investigația de elecție în diagnosticul invaginației intestinale, fiind ușor de efectuat, neiradiantă și permițând identificarea unui posibil punct de plecare, cu aspect tipic „în cocardă” sau „pseudorinichi”. Radiografia abdominală are valoare limitată, oferind doar semne indirecte, iar CT și IRM nu sunt utilizate de rutină.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 305-307"
        },
        {
          "id": "71-2",
          "stem": "În cadrul reducerii pneumatice a invaginației intestinale sub ghidaj fluoroscopic sau ecografic, care este gazul cel mai frecvent utilizat pentru insuflare și care este motivul principal al preferinței acestuia?",
          "options": [
            "Heliul, deoarece reduce semnificativ riscul de perforație intestinală în timpul insuflării",
            "Oxigenul, deoarece asigură cea mai bună vizualizare fluoroscopică a tumorii de invaginație",
            "Aerul atmosferic, deoarece este disponibil imediat și nu necesită echipament suplimentar",
            "Azotul, deoarece are cea mai mică solubilitate sanguină dintre gazele disponibile",
            "Dioxidul de carbon, deoarece este rapid absorbit din intestin, creează un disconfort redus și nu este asociat cu embolii gazoase"
          ],
          "correct": 4,
          "explanation": "Textul precizează că dioxidul de carbon este cel mai utilizat gaz pentru reducerea pneumatică, fiind rapid absorbit din intestin, creând un disconfort redus și nefiind asociat cu embolii gazoase. Presiunea medie de insuflare variază între 80 și 120 mmHg, sub ghidaj fluoroscopic sau ecografic.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 305-307"
        },
        {
          "id": "71-3",
          "stem": "În timpul unei reduceri pneumatice a invaginației intestinale la un copil, survine o perforație intestinală cu pneumoperitoneu. Care este conduita imediată recomandată?",
          "options": [
            "Administrarea de antibiotice cu monitorizare clinică, fără intervenție imediată",
            "Trecerea imediată la reducere hidrostatică cu substanță de contrast baritată",
            "Continuarea insuflării până la finalizarea reducerii, urmată de reevaluare ecografică",
            "Laparoscopie exploratorie efectuată fără decompresia prealabilă a pneumoperitoneului",
            "Decompresia pe ac a pneumoperitoneului, urmată de explorarea chirurgicală"
          ],
          "correct": 4,
          "explanation": "Conform textului, în cazul unei perforații survenite în timpul reducerii pneumatice se recomandă decompresia pe ac a pneumoperitoneului, pentru a evita compromiterea statusului respirator, urmată de explorarea chirurgicală. Bariul nu mai este recomandat pentru reducerea hidrostatică tocmai din cauza riscului de peritonită severă în caz de perforație.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 305-307"
        },
        {
          "id": "71-4",
          "stem": "Un copil cu invaginație intestinală prezintă la evaluare semne de iritație peritoneală, iar radiografia abdominală evidențiază pneumoperitoneu. Care este conduita terapeutică adecvată?",
          "options": [
            "Repetarea tentativelor de reducere nechirurgicală la interval de 30 de minute",
            "Reducere pneumatică sub ghidaj fluoroscopic, ca primă intenție",
            "Abord laparoscopic, considerat metodă de elecție indiferent de context clinic",
            "Reducere hidrostatică cu ser fiziologic sub ghidaj ecografic",
            "Intervenție chirurgicală, reducerea nechirurgicală și abordul laparoscopic fiind contraindicate în acest context"
          ],
          "correct": 4,
          "explanation": "Semnele de afectare intestinală (iritație peritoneală sau pneumoperitoneu) reprezintă o indicație pentru managementul chirurgical, reducerea pneumatică sau hidrostatică fiind contraindicată în prezența semnelor de perforație. În plus, pneumoperitoneul și semnele de peritonită sunt contraindicații pentru abordul laparoscopic, impunând astfel chirurgia clasică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 305-307"
        },
        {
          "id": "71-5",
          "stem": "Un copil a beneficiat de dezinvaginare nechirurgicală reușită pentru un episod de invaginație intestinală. Referitor la riscul și managementul reinvaginării, care afirmație este corectă conform datelor din literatură?",
          "options": [
            "Reinvaginarea apare la aproximativ 10% din cazurile reduse nechirurgical, o treime în primele 24 de ore, iar majoritatea în primele șase luni postreducere",
            "Reinvaginarea nu poate fi niciodată tratată nechirurgical, fiind necesară laparotomia de fiecare dată",
            "Reinvaginarea apare la aproximativ 50% din cazuri, majoritatea în prima săptămână postreducere",
            "Reinvaginarea apare la aproximativ 1% din cazuri și impune întotdeauna intervenție chirurgicală imediată",
            "Reinvaginarea apare mai frecvent decât episodul inițial, iar ratele de succes ale reducerii nechirurgicale sunt semnificativ mai scăzute"
          ],
          "correct": 0,
          "explanation": "Reinvaginarea apare în aproximativ 10% din cazurile la care s-a reușit dezinvaginarea nechirurgicală, o treime dintre acestea survenind în primele 24 de ore, iar majoritatea în primele șase luni postreducere. Managementul este similar celui din primul episod, iar ratele de succes ale tehnicilor nechirurgicale sunt comparabile cu cele din episodul inițial dacă pacientul este stabil hemodinamic și fără semne de peritonită sau pneumoperitoneu.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 305-307"
        }
      ]
    },
    {
      "num": 72,
      "title": "Enterocolita ulcero-necrotică",
      "questions": [
        {
          "id": "72-1",
          "stem": "Un nou-născut prematur (32 săptămâni), alimentat enteral cu formulă de lapte praf, aflat în ziua a 7-a de viață, dezvoltă distensie abdominală ușoară, reziduu gastric crescut la alimentație, un episod de apnee, bradicardie și instabilitate termică. Nu se decelează zgomote intestinale diminuate, hemoragie digestivă, celulită abdominală, formațiune palpabilă în fosa iliacă dreaptă sau semne de peritonită. Conform stadializării Bell a enterocolitei necrozante, acest tablou clinic corespunde:",
          "options": [
            "Stadiul II – enterocolită necrozantă certă",
            "Stadiul I – suspiciune de enterocolită necrozantă",
            "Stadiul III – enterocolită necrozantă avansată",
            "Peritonită primară neonatală",
            "Sepsis neonatal tardiv necomplicat, fără afectare digestivă"
          ],
          "correct": 1,
          "explanation": "Distensia abdominală ușoară (semn precoce), dificultățile de alimentație cu reziduu gastric crescut, apneea, bradicardia și instabilitatea termică sunt semnele enumerate pentru stadiul I (suspiciune de EN) în tabelul de stadializare Bell. Absența zgomotelor intestinale diminuate, a hemoragiei digestive și a celulitei abdominale exclude stadiul II, iar absența distensiei marcante, a formațiunii în fosa iliacă dreaptă și a semnelor de peritonită sau șoc septic exclude stadiul III.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 139-142"
        },
        {
          "id": "72-2",
          "stem": "Referitor la semnele radiologice din enterocolita necrozantă, care dintre următoarele afirmații este corectă?",
          "options": [
            "Ecografia abdominală nu poate evidenția prezența gazului la nivel portal",
            "Pneumatoza intestinală caracterizează stadiul radiologic incipient, de aspect normal/ileus ușor",
            "Spectroscopia în infraroșu (NIRS) a demonstrat, prin studii concludente, o valoare predictivă certă pentru EN",
            "Pneumoperitoneul este prezent la aproximativ 60% dintre cazuri și semnalează un prognostic rezervat",
            "Gazul la nivelul venei porte se identifică radiografic la peste jumătate dintre cazuri"
          ],
          "correct": 3,
          "explanation": "Textul precizează că pneumoperitoneul, prezent la 60% din cazuri, indică un prognostic rezervat. Gazul la nivelul venei porte este prezent doar în 9% din cazuri (nu la majoritate), ecografia abdominală permite decelarea gazului portal, pneumatoza intestinală apare în stadiul de „ileus semnificativ” (nu în aspectul normal/ileus ușor), iar NIRS este menționată ca având deocamdată rezultate neconcludente.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 139-142"
        },
        {
          "id": "72-3",
          "stem": "Care dintre următorii factori este considerat, conform sursei, cel mai important factor predispozant pentru enterocolita necrozantă?",
          "options": [
            "Exsangvinotransfuzia",
            "Prematuritatea",
            "Malformațiile congenitale cardiace (hipoplazia cordului stâng, coarctația de aortă, persistența canalului arterial)",
            "Policitemia",
            "Cateterizarea vaselor ombilicale"
          ],
          "correct": 1,
          "explanation": "Textul menționează explicit, printre factorii ce țin de nou-născut, că prematuritatea reprezintă cel mai important factor predispozant pentru enterocolita necrozantă. Ceilalți factori enumerați (cateterizarea vaselor ombilicale, policitemia, malformațiile cardiace congenitale, exsangvinotransfuzia) sunt și ei menționați ca factori predispozanți, dar fără a fi individualizați ca fiind cei mai importanți.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 139-142"
        },
        {
          "id": "72-4",
          "stem": "Un nou-născut cu enterocolită necrozantă stadiul III prezintă șoc septic refractar și coagulare intravasculară diseminată, fiind considerat cu risc operator prohibitiv pentru o rezecție intestinală extensivă imediată. Care este soluția terapeutică menționată pentru temporizarea intervenției chirurgicale definitive, până la ameliorarea stării clinice a pacientului?",
          "options": [
            "Reluarea imediată a alimentației enterale trofice",
            "Continuarea exclusivă a antibioterapiei cu spectru larg, fără altă intervenție",
            "Enteroplastia seriată transversă",
            "Transplant intestinal de urgență",
            "Instalarea unui tub de dren la nivel peritoneal"
          ],
          "correct": 4,
          "explanation": "Textul precizează că instalarea unui tub de dren la nivel peritoneal reprezintă o tehnică alternativă la rezecția chirurgicală, propusă în cazurile cu stare critică, având ca scop temporizarea rezecției până la ameliorarea stării clinice a pacientului. Transplantul intestinal se impune doar în cazurile cu rezecții extensive deja efectuate, iar enteroplastia seriată este menționată ca tehnică chirurgicală mai nouă, nu ca metodă de temporizare.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 139-142"
        },
        {
          "id": "72-5",
          "stem": "Care dintre următoarele reprezintă o complicație tardivă posibilă a necrozei transmurale intestinale în evoluția enterocolitei necrozante, secundară proliferării fibroblastice locale, raportată în 10-35% din cazuri?",
          "options": [
            "Perforația gastrică izolată, fără antecedente de necroză intestinală",
            "Recurența enterocolitei necrozante",
            "Sindromul de intestin scurt la toți pacienții tratați exclusiv medical",
            "Stricturile intestinale, cu evoluție ulterioară spre ocluzie intestinală",
            "Ciroza hepatică, independentă de durata nutriției parenterale"
          ],
          "correct": 3,
          "explanation": "Conform textului, necroza transmurală poate evolua, printre altele, către proliferare fibroblastică locală cu formarea, în timp, de stricturi intestinale (în 10-35% din cazuri) și apoi de ocluzii intestinale. Recurența EN este raportată separat, în 5-10% din cazuri, sindromul de intestin scurt apare doar la cei operați (nu la toți tratați medical), iar ciroza hepatică este o complicație asociată nutriției parenterale totale prelungite, nu independentă de aceasta.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 139-142"
        }
      ]
    }
  ]
};
