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
            "SGA este sinonim cu prematuritatea, iar RCIU se aplică exclusiv nou-născuților la termen",
            "Diagnosticul de RCIU se stabilește pe parcursul sarcinii prin ecografii fetale seriate, iar SGA se stabilește la naștere prin raportarea greutății la vârsta gestațională; nu toți nou-născuții cu RCIU sunt și SGA",
            "SGA se diagnostichează prenatal ecografic, iar RCIU se diagnostichează postnatal prin raportarea greutății la naștere",
            "SGA și RCIU sunt entități echivalente, diagnosticate prin aceleași criterii și la același moment",
            "Toți nou-născuții cu RCIU sunt SGA, dar nu toți nou-născuții SGA prezintă RCIU"
          ],
          "correct": 1,
          "explanation": "Textul precizează că diagnosticul de RCIU este elaborat pe parcursul gestației prin măsurători ecografice repetate, în timp ce SGA este depistat la naștere prin raportarea greutății la naștere la greutatea corespunzătoare vârstei gestaționale. Nou-născuții SGA pot fi și cu RCIU, dar nou-născuții cu RCIU nu sunt întotdeauna și SGA, putând fi SGA, AGA sau LGA. Deși folosite adesea ca echivalente, cele două noțiuni reprezintă entități diferite.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 1-13"
        },
        {
          "id": "1-2",
          "stem": "Un copil născut prematur, cu greutatea la naștere (GN) de 1500 g, este adus la control la vârsta corectată de 6 luni, în condiții adecvate de îngrijire. Conform ritmului de recuperare ponderală descris pentru prematuri, care este greutatea așteptată la această vârstă?",
          "options": [
            "9000 g",
            "3000 g",
            "6000 g",
            "3750 g",
            "4500 g"
          ],
          "correct": 4,
          "explanation": "Pentru prematuri, ritmul de recuperare ponderală menționat este: la 2 luni greutatea = 2 x GN, la 6 luni greutatea = 3 x GN, iar la 1 an = 6 x GN. Pentru o greutate la naștere de 1500 g, la 6 luni greutatea așteptată este 3 x 1500 g = 4500 g.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 1-13"
        },
        {
          "id": "1-3",
          "stem": "O fetiță în vârstă de 6 ani se prezintă la consult pentru apariția telarhei și a pubarhei. Cum se clasifică corect această situație clinică, conform criteriilor de vârstă prezentate?",
          "options": [
            "Pubertate precoce",
            "Pubertate precipitată",
            "Pubertate întârziată",
            "Dezvoltare pubertară normală pentru vârstă",
            "Ginecomastie"
          ],
          "correct": 0,
          "explanation": "Pubertatea precoce se definește ca apariția semnelor pubertare (telarhă, pubarhă, menarhă) înaintea vârstei de 8 ani la fetițe. La 6 ani, apariția telarhei și pubarhei se încadrează în această categorie, spre deosebire de pubertatea precipitată, care presupune instalarea caracterelor sexuale secundare după vârsta de 7 ani la fete.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 1-13"
        },
        {
          "id": "1-4",
          "stem": "O fetiță este investigată pentru statură mică asociată cu gât scurt, implantare joasă a părului și pterygium colli. Cariotipul evidențiază monosomie X (sindrom Turner). Din care categorie etiologică de hipostatură patologică face parte acest caz, conform clasificării cauzelor hipostaturii?",
          "options": [
            "Cauze nutriționale",
            "Hipostatura familială",
            "Cauze psihosociale",
            "Cauze genetice (cromozomiale)",
            "Cauze endocrine"
          ],
          "correct": 3,
          "explanation": "În clasificarea cauzelor hipostaturii, sindromul Turner este încadrat explicit la cauzele genetice cromozomiale ale hipostaturii patologice, alături de sindromul Down. Cauzele endocrine, nutriționale, familiale sau psihosociale reprezintă categorii distincte, care nu includ anomaliile cromozomiale.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 1-13"
        },
        {
          "id": "1-5",
          "stem": "Un copil cu greutatea de 15 kg, fără pierderi patologice de lichide și cu activitate fizică minimă, trebuie evaluat pentru necesarul hidric zilnic. Conform formulei de estimare a necesarului hidric pe categorii de greutate, ce cantitate de lichide este recomandată pentru 24 de ore?",
          "options": [
            "1250 ml",
            "1000 ml",
            "1500 ml",
            "1750 ml",
            "750 ml"
          ],
          "correct": 0,
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
            "1200 ml",
            "1400 ml",
            "1000 ml",
            "1500 ml",
            "700 ml"
          ],
          "correct": 0,
          "explanation": "Pentru greutăți între 11-20 kg, necesarul hidric se calculează astfel: 1000 ml + 50 ml pentru fiecare kg peste 10 kg. Pentru 14 kg rezultă 1000 ml + 50 ml x 4 kg = 1200 ml/24h. Formula pentru 3-10 kg (100 ml/kg) sau pentru peste 20 kg (1500 ml + 20 ml/kg) nu se aplică în acest caz.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 13-31"
        },
        {
          "id": "2-2",
          "stem": "Un sugar de 2 luni, alimentat exclusiv la sân, este adus la control pentru evaluarea creșterii. Mama relatează că sugarul udă mai puțin de 4 scutece pe zi, are scaune verzui, nu se aud zgomote de deglutiție în timpul suptului, iar copilul rămâne agitat și pare flămând după alăptare. Sporul ponderal este insuficient. Care este cea mai probabilă explicație a acestui tablou?",
          "options": [
            "Boală de reflux gastroesofagian necomplicată",
            "Alergie la proteinele laptelui de vacă transferate prin lapte matern",
            "Intoleranță congenitală la lactoză",
            "Hipogalactie maternă",
            "Deficit de vitamină K la sugar"
          ],
          "correct": 3,
          "explanation": "Textul menționează explicit că hipogalactia maternă este sugerată de spor ponderal insuficient, micțiuni rare (sub 4-5 scutece ude/zi), scaune verzui de foame, absența zgomotelor de deglutiție în timpul suptului și agitația/foamea persistentă a sugarului după alăptat. Celelalte afecțiuni nu au acest tablou caracteristic descris în sursă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 13-31"
        },
        {
          "id": "2-3",
          "stem": "Un nou-născut la termen, alimentat exclusiv natural, care nu a primit profilaxie cu vitamină K la naștere, se prezintă la 10 zile de viață cu echimoze și sângerări gingivale. Care este explicația fiziopatologică principală a acestui tablou, conform particularităților metabolismului vitaminei K la nou-născut?",
          "options": [
            "Deficitul de fier cu trombocitopenie secundară",
            "Imaturitatea sintezei hepatice a albuminei serice",
            "Transferul transplacentar redus de vitamină K, asociat conținutului scăzut de vitamină K din laptele matern",
            "Deficitul de vitamină D cu afectarea secundară a sintezei hepatice a factorilor de coagulare",
            "Excesul de vitamină E cu efect antiagregant plachetar"
          ],
          "correct": 2,
          "explanation": "Textul arată că transferul transplacentar de vitamină K este mult mai redus comparativ cu al celorlalte vitamine liposolubile, ceea ce determină rezerve foarte mici la naștere, iar laptele uman conține doar aproximativ 0,3 µg/dl de vitamină K. Această combinație predispune la boala hemoragică a nou-născutului, motiv pentru care se impune administrarea profilactică de vitamină K.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 13-31"
        },
        {
          "id": "2-4",
          "stem": "Un sugar de 6 săptămâni prezintă regurgitații și vărsături postprandiale frecvente, fără scădere ponderală, fără semne de alarmă digestive sau respiratorii, fiind diagnosticat cu reflux gastroesofagian necomplicat. Care este conduita dietetică menționată în sursă pentru ameliorarea simptomatologiei, la un sugar alimentat artificial?",
          "options": [
            "Trecerea la o formulă delactozată pe bază de proteine din soia",
            "Utilizarea unei formule extensiv hidrolizate (semielementale)",
            "Utilizarea unei formule elementale pe bază de aminoacizi",
            "Utilizarea unei formule de lapte îngroșate de tip AR (antireflux)",
            "Utilizarea unei formule hipercalorice de 1 kcal/ml"
          ],
          "correct": 3,
          "explanation": "Textul precizează că formulele îngroșate de tip AR (antireflux), cu agenți de îngroșare pe bază de făină de roșcove sau amidon de porumb/orez, sunt recomandate la sugarii cu reflux gastroesofagian. Formulele delactozate, hidrolizate, elementale sau hipercalorice sunt indicate pentru alte situații clinice (intoleranță la lactoză, alergie la proteinele laptelui de vacă, malabsorbție severă, respectiv denutriție).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 13-31"
        },
        {
          "id": "2-5",
          "stem": "În cadrul consilierii unei familii privind diversificarea alimentației, referitor la momentul introducerii glutenului în dieta sugarului, care este conduita recomandată de ESPGHAN pentru reducerea riscului de boală celiacă?",
          "options": [
            "Introducerea glutenului doar după oprirea completă a alăptării",
            "Evitarea completă a alimentelor cu gluten până la vârsta de 1 an",
            "Introducerea glutenului cât mai precoce posibil, înainte de vârsta de 4 luni, indiferent de alimentația lactată asociată",
            "Introducerea glutenului exclusiv sub formă de cereale delactozate, după vârsta de 12 luni",
            "Introducerea glutenului în cantități mici, progresiv crescânde, în fereastra de oportunitate 4-7 luni, în paralel cu alimentația la sân"
          ],
          "correct": 4,
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
            "Trecere directă la ventilație de înaltă frecvență, fără administrare de surfactant",
            "Creșterea presiunii CPAP peste 10 cmH2O, fără alte intervenții",
            "Administrare de corticoizi sistemici (dexametazonă) pentru accelerarea maturării pulmonare",
            "Administrare curativă de surfactant exogen",
            "Continuarea CPAP cu FiO2 crescut, fără alte intervenții, până la 48 de ore de viață"
          ],
          "correct": 3,
          "explanation": "Textul precizează că surfactantul este recomandat în scop curativ la prematurii care necesită FiO2 > 30% în condiții de suport ventilator neinvaziv cu CPAP cu presiuni mai mari de 6 cmH2O. Cu cât tratamentul cu surfactant se începe mai devreme, cu atât prognosticul este mai bun. Ventilația de înaltă frecvență se rezervă cazurilor care nu răspund la ventilația convențională, nu ca primă intervenție.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 99-107"
        },
        {
          "id": "3-2",
          "stem": "Un nou-născut din mamă Rh-negativă izoimunizată prezintă la naștere semne de boală hemolitică. Bilirubina indirectă determinată din sângele din cordonul ombilical este de 4,5 mg/dl, iar hemoglobina din cordon este de 11 g/dl. Care este conduita terapeutică indicată în primele 12 ore de viață?",
          "options": [
            "Fototerapie simplă și reevaluare la 24 de ore, fără alte măsuri",
            "Exsanguinotransfuzie",
            "Administrare de imunoglobulină i.v. ca tratament de primă linie, fără alte investigații",
            "Administrare de fenobarbital ca unică măsură terapeutică",
            "Temporizare fără tratament, cu control al bilirubinei la 72 de ore"
          ],
          "correct": 1,
          "explanation": "Exsanguinotransfuzia este metoda de elecție în formele moderate/severe de boală hemolitică, fiind indicată în primele 12 ore atunci când bilirubina indirectă din cordonul ombilical este peste 4 mg/dl sau crește cu 0,5-1 mg/h, sau dacă hemoglobina din cordon este sub 12 g/dl. Fototerapia și fenobarbitalul nu sunt suficiente în aceste forme, iar imunoglobulina i.v. are utilitate controversată și nu este tratamentul de primă linie.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 124-129"
        },
        {
          "id": "3-3",
          "stem": "Un nou-născut la termen cu antecedente de asfixie perinatală severă prezintă în primele ore de viață letargie, hipotonie și reflexe arhaice diminuate, tablou compatibil cu encefalopatie hipoxic-ischemică de formă moderată. Care este conduita terapeutică specifică, standard, recomandată în acest caz?",
          "options": [
            "Inițierea hipotermiei terapeutice în primele 6 ore de viață, cu răcire până la 33,5-34,5°C, timp de 72 de ore",
            "Administrare de bicarbonat de sodiu i.v. pentru corectarea acidozei, ca măsură de primă linie",
            "Restricție hidrică severă, sub 40 ml/kg/zi, indiferent de statusul volemic",
            "Administrare profilactică de manitol pentru reducerea presiunii intracraniene, la toți pacienții",
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
            "Persistența IgG specific la vârsta de 2 luni, fără alte determinări",
            "Test Coombs direct pozitiv la naștere",
            "IgG pozitiv izolat în prima zi de viață, indiferent de valoarea IgM",
            "IgG și IgM pozitive la vârsta de 5 zile, cu IgA pozitiv la 10 zile",
            "IDR la toxoplasmină pozitivă în primele 24 de ore de viață"
          ],
          "correct": 3,
          "explanation": "Diagnosticul de toxoplasmoză congenitală se confirmă la nou-născutul cu IgG și IgM pozitive la vârsta de 5 zile și IgA pozitiv la 10 zile, deoarece IgM și IgA nu traversează placenta și sunt sintetizate de nou-născut. IgG izolat, mai ales în primele zile, poate fi de origine maternă transplacentară și nu este suficient pentru diagnostic; persistența IgG dincolo de 1 an este standardul de diagnostic la sugar/copil, nu la 2 luni.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 124-129"
        },
        {
          "id": "3-5",
          "stem": "La un nou-născut prematur cu vârstă de gestație 27 de săptămâni, ecografia transfontanelară efectuată la 6 zile de viață evidențiază hemoragie intraventriculară care ocupă peste 50% din aria ventriculară pe secțiune parasagitală, cu dilatație a ventriculului lateral. Cum se clasifică această hemoragie conform sistemului ecografic Volpe?",
          "options": [
            "Hemoragie la nivelul matricei germinale, fără extensie intraventriculară",
            "Gradul 3",
            "Gradul 1",
            "Infarct hemoragic periventricular izolat, fără hemoragie intraventriculară",
            "Gradul 2"
          ],
          "correct": 1,
          "explanation": "Conform clasificării ecografice Volpe, gradul 3 corespunde unei hemoragii intraventriculare care depășește 50% din aria ventriculară pe secțiune parasagitală, situație în care apare de obicei și dilatație a ventriculului lateral. Gradul 1 corespunde hemoragiei la nivelul matricei germinale cu extensie ventriculară minimă (sub 10%), iar gradul 2 corespunde unei extinderi de 10-50%.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 218-228"
        }
      ]
    },
    {
      "num": 4,
      "title": "Embriopatii, fetopatii: TORCH, sifilis congenital, sindromul alcoolic fetal",
      "questions": [
        {
          "id": "4-1",
          "stem": "Un nou-născut la termen, din mamă cu toxoplasmoză gestațională diagnosticată în trimestrul III de sarcină, este asimptomatic clinic la naștere. La vârsta de 5 zile se dozează IgG și IgM anti-Toxoplasma, ambele fiind pozitive, iar la 10 zile se recoltează IgA specific, care este de asemenea pozitiv. Cum se interpretează aceste rezultate?",
          "options": [
            "Sunt sugestive pentru sferocitoză ereditară, nu pentru toxoplasmoză congenitală",
            "Impun repetarea obligatorie a testării la vârsta de 1 an, acesta fiind singurul moment cu valoare diagnostică",
            "Reprezintă rezultate fără valoare, deoarece testele serologice nu se folosesc niciodată la nou-născut în această infecție",
            "Confirmă diagnosticul de toxoplasmoză congenitală, întrucât IgM și IgA nu traversează placenta și sunt sintetizate de către nou-născut",
            "Reprezintă transfer transplacentar pasiv de anticorpi materni, fără a indica infecție a nou-născutului"
          ],
          "correct": 3,
          "explanation": "Conform textului, la nou-născutul cu IgG și IgM pozitive la vârsta de 5 zile și IgA pozitiv la 10 zile se confirmă diagnosticul de toxoplasmoză congenitală, deoarece IgM și IgA nu trec prin placentă și sunt sintetizate de nou-născut. Persistența IgG dincolo de vârsta de 1 an este standardul de aur doar la sugarul mai mare, când IgG materne transplacentare ar trebui deja să fi dispărut.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 129-135"
        },
        {
          "id": "4-2",
          "stem": "Un nou-născut prezintă corioretinită, microcefalie și calcificări intracraniene periventriculare decelate la ecografia transfontanelară, tablou sugestiv pentru infecție congenitală cu citomegalovirus. Care este principala complicație pe termen lung la nou-născuții simptomatici cu această infecție?",
          "options": [
            "Osteocondrită metafizară simetrică, similară celei din luesul congenital",
            "Diabet zaharat insulino-dependent prin distrucția celulelor beta pancreatice",
            "Surditate senzorială progresivă, prezentă la aproximativ 60% dintre nou-născuții simptomatici",
            "Hipotiroidism congenital prin afectare directă a glandei tiroide fetale",
            "Cardiopatie congenitală cianogenă de tip transpoziție de vase mari"
          ],
          "correct": 2,
          "explanation": "Textul menționează surditatea senzorială progresivă la 60% dintre nou-născuții simptomatici cu infecție citomegalică congenitală, aceasta fiind principala cauză de surditate senzorială de cauză nongenetică. Celelalte complicații enumerate (diabet, hipotiroidism, cardiopatie cianogenă, osteocondrită) nu sunt descrise ca fiind caracteristice infecției cu CMV.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 129-135"
        },
        {
          "id": "4-3",
          "stem": "Un sugar cu antecedente de rubeolă maternă confirmată în primul trimestru de sarcină este diagnosticat cu persistență de canal arterial la examenul cardiologic. Care dintre următoarele asocieri oculare este caracteristică pentru rubeola congenitală?",
          "options": [
            "Corioretinită pigmentară cu aspect de „sare și piper” asociată cu cataractă",
            "Microftalmie cu hipoplazie de nerv optic, caracteristică infecției cu virusul Zika",
            "Triada Hutchinson cu malformații dentare și keratită interstițială",
            "Calcificări hepatice difuze și ascită masivă",
            "Osteocondrită luetică simetrică a oaselor lungi"
          ],
          "correct": 0,
          "explanation": "În rubeola congenitală, printre manifestările permanente descrise se numără leziunile oculare (cataractă, microftalmie, glaucom, corioretinită pigmentară „sare și piper”) și malformațiile cardiace (persistență de canal arterial, stenoză de arteră pulmonară sau aortică, defect septal ventricular). Triada Hutchinson este specifică luesului congenital tardiv, nu rubeolei.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 129-135"
        },
        {
          "id": "4-4",
          "stem": "Un copil de 3 ani, cu antecedente incerte de lues congenital netratat, este adus la consult pentru malformații dentare, keratită interstițială și surditate progresivă de tip cohlear. Cum se numește această asociere clasică de manifestări tardive ale luesului congenital?",
          "options": [
            "Triada clasică a toxoplasmozei (hidrocefalie, calcificări intracraniene, corioretinită)",
            "Sindromul de alcoolism fetal",
            "Sindromul TORCH",
            "Triada Sabin-Feldman",
            "Triada Hutchinson"
          ],
          "correct": 4,
          "explanation": "Manifestările tardive (sechelele) ale luesului congenital sunt descrise sub numele de triada Hutchinson, care cuprinde malformații dentare, leziuni oculare (keratită interstițială, cu posibilă cecitate) și leziuni cohleare (până la surditate). Triada hidrocefalie-calcificări-corioretinită este specifică formelor tardive de toxoplasmoză congenitală, nu luesului.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 129-135"
        },
        {
          "id": "4-5",
          "stem": "Un nou-născut prezintă fisuri palpebrale scurte (sub percentila 10), bordură vermilion subțire a buzei superioare și philtrum neted; mama a avut un consum de alcool documentat, semnificativ, pe parcursul sarcinii. Care este diagnosticul cel mai probabil?",
          "options": [
            "Sindrom alcoolic fetal (FAS)",
            "Sindrom Dubowitz",
            "Tulburare de neurodezvoltare asociată cu expunerea prenatală la alcool (ND-PAE), fără relevanța trăsăturilor faciale",
            "Efecte ale fenilcetonuriei materne",
            "Sindrom Williams"
          ],
          "correct": 0,
          "explanation": "Trăsăturile faciale caracteristice ale sindromului alcoolic fetal sunt fisurile palpebrale scurte, bordura vermilion subțire a buzei superioare și philtrum-ul neted; prezența a cel puțin două dintre acestea, alături de expunerea prenatală la alcool, susține diagnosticul de FAS. Sindroamele Williams și Dubowitz, precum și efectele fenilcetonuriei materne, fac parte din diagnosticul diferențial al dismorfismului facial din FAS, dar nu se asociază cu expunerea la alcool descrisă în vinietă.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 978-982"
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
            "Kwashiorkor",
            "Kwashiorkor marasmic",
            "Malnutriție cronică de gradul 1 (ușoară)",
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
            "Deshidratare hipertonă",
            "Kwashiorkor",
            "Marasm",
            "Rahitism carențial",
            "Malnutriție cronică ușoară"
          ],
          "correct": 1,
          "explanation": "Kwashiorkorul apare tipic la copilul de 1-2 ani, în perioada înțărcării, prin aport insuficient de proteine în condițiile unei diete bogate în glucide; se caracterizează prin edeme (trăsătura principală), conservarea relativă a țesutului adipos („facies în lună plină”), hepatomegalie prin steatoză și modificări ale părului. Indiferent de indicii antropometrici, prezența edemelor face ca malnutriția să fie considerată severă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 378-391"
        },
        {
          "id": "5-3",
          "stem": "Un copil internat este evaluat cu scorul STRONGkids pentru riscul de subnutriție, obținând un total de 4 puncte (din maximum 5). Conform recomandărilor de interpretare a scorului, care este conduita indicată?",
          "options": [
            "Externare cu monitorizare ambulatorie, fără evaluare suplimentară",
            "Consult de specialitate și intervenție dietetică minimă, fără plan individualizat",
            "Doar reevaluarea scorului la o săptămână",
            "Cântărire de 2 ori pe săptămână, fără intervenție dietetică",
            "Consult de specialitate (medic, nutriționist) și plan de nutriție specializat, individualizat"
          ],
          "correct": 4,
          "explanation": "Un scor STRONGkids de 4-5 puncte corespunde categoriei de risc crescut, pentru care este recomandat consult de specialitate (medic, nutriționist) și elaborarea unui plan de nutriție specializat și individualizat. Scorul 0 corespunde riscului absent/scăzut (fără intervenție dietetică), iar scorul 1-3 riscului mediu (consult și intervenție dietetică).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 378-391"
        },
        {
          "id": "5-4",
          "stem": "La un sugar cu malnutriție severă, aflat în primele zile de renutriție cu ritm prea rapid de realimentare, apare sindromul de realimentare (refeeding syndrome). Care este anomalia electrolitică descrisă ca semnul cardinal al acestui sindrom, implicată în apariția aritmiilor cardiace și a insuficienței cardiace?",
          "options": [
            "Hipofosfatemia",
            "Hipomagneziemia",
            "Hipernatremia",
            "Hipopotasemia",
            "Hipocalcemia"
          ],
          "correct": 0,
          "explanation": "Textul precizează explicit că hipofosfatemia este semnul cardinal al sindromului de realimentare, afectând aproape toate procesele celulare și contribuind la disritmii cardiace și insuficiență cardiacă/miocardică. Hipopotasemia și hipomagneziemia apar de asemenea în acest sindrom, dar nu sunt descrise drept semnul cardinal.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 378-391"
        },
        {
          "id": "5-5",
          "stem": "La un copil cu malnutriție proteino-energetică severă la care este dificil de diferențiat clinic deshidratarea de șocul septic (semnele clasice de deshidratare fiind alterate de modificările cutaneo-adipoase), care dintre următoarele semne este considerat caracteristic pentru deshidratare și, conform textului, nu apare în șocul septic?",
          "options": [
            "Ochii înfundați în orbite, cearcănele periorbitare și fontanela anterioară deprimată",
            "Hipotermia",
            "Pulsul radial slab sau absent",
            "Extremitățile reci",
            "Oliguria"
          ],
          "correct": 0,
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
            "Nu poate fi încadrat fără determinarea circumferinței abdominale",
            "Obezitate",
            "Suprapondere",
            "Obezitate extremă/morbidă"
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
            "Sindrom metabolic",
            "Hipertensiune arterială secundară obezității, fără alte implicații metabolice",
            "Steatohepatită non-alcoolică (NAFLD)",
            "Diabet zaharat de tip 2, fără investigații suplimentare necesare",
            "Dislipidemie izolată, fără altă semnificație"
          ],
          "correct": 0,
          "explanation": "Definiția IDF a sindromului metabolic la copilul peste 6 ani presupune circumferință abdominală peste percentila 90 asociată cu cel puțin două dintre criteriile: HTA, HDL-colesterol scăzut sub 40 mg/dL sau trigliceride crescute, respectiv alterarea metabolismului glucidic. Acest pacient întrunește circumferința abdominală crescută plus două criterii (HTA și HDL scăzut), încadrându-se astfel în sindromul metabolic.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 392-400"
        },
        {
          "id": "6-4",
          "stem": "Un adolescent obez, asimptomatic, prezintă la evaluarea de rutină o valoare a transaminazei TGP (ALT) de peste două ori limita superioară a normalului, confirmată persistent la reevaluarea după 3 luni. Care este conduita corectă conform textului?",
          "options": [
            "Se investighează suplimentar, atât pentru excluderea altor cauze de hepatită, cât și pentru confirmarea NAFLD",
            "Se inițiază tratament hepatoprotector empiric, fără investigații suplimentare",
            "Se recomandă biopsie hepatică de primă intenție, înaintea oricărei alte investigații",
            "Se consideră valoarea explicată în totalitate de obezitate și nu se recomandă investigații suplimentare",
            "Ecografia abdominală este suficientă pentru stabilirea diagnosticului de certitudine de NAFLD"
          ],
          "correct": 0,
          "explanation": "Textul precizează că, la orice copil cu valoare a ALT de cel puțin două ori mai mare decât limita superioară a normalului și cu creștere persistentă peste 3 luni, este necesară investigarea suplimentară pentru excluderea altor cauze de hepatită și pentru confirmarea NAFLD, deoarece doar prezența obezității nu explică acest diagnostic. Ecografia abdominală nu este recomandată ca metodă de screening sau pentru diagnosticul de certitudine.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 392-400"
        },
        {
          "id": "6-5",
          "stem": "Un adolescent de 17 ani, cu IMC de 42 kg/m² s.c., prezintă sindrom de apnee în somn sever și hipertensiune arterială, în ciuda unui program susținut de dietă și activitate fizică. Care este conduita terapeutică adecvată în această situație, conform textului?",
          "options": [
            "Continuarea exclusivă a regimului dietetic hipocaloric, fără altă intervenție",
            "Tratament chirurgical bariatric, indiferent de vârstă, având în vedere severitatea complicațiilor",
            "Tratament chirurgical (chirurgie bariatrică)",
            "Tratament cu gastrofibran, ca metodă de creștere a senzației de sațietate",
            "Tratament de primă intenție cu fluoxetină pentru reducerea apetitului"
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
            "Leucocite normale, dar cu peteșii cutanate difuze și letargie",
            "Leucocite normale, dar cu redoarea cefei și bombarea fontanelei"
          ],
          "correct": 1,
          "explanation": "Textul precizează criteriile de risc scăzut: copilul arată bine, este anterior sănătos, are un număr de leucocite de 5.000-15.000/mm3 cu forme tinere sub 1.500/mm3, examen de urină sub 10 leucocite/câmp și, în caz de diaree, sub 5 leucocite pe frotiul din scaun. Celelalte variante descriu date sugestive pentru infecție severă (leucocitoză marcată, neutropenie, peteșii cu letargie, semne meningiene), incompatibile cu încadrarea în risc scăzut.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 772-783"
        },
        {
          "id": "7-2",
          "stem": "Un nou-născut de 3 săptămâni se prezintă cu febră rectală de 38,3°C, fără alte semne clinice evidente la examinare. Conform orientării practice pe grupe de vârstă descrise în text, care este conduita corectă?",
          "options": [
            "Externare cu antibioterapie orală empirică, fără investigații suplimentare",
            "Tratament antipiretic la domiciliu și control clinic peste 48 de ore dacă febra persistă",
            "Internare în spital, investigații vizând etiologia septică și instituirea antibioterapiei empirice",
            "Administrare de ibuprofen și reevaluare peste 24 de ore",
            "Observație la domiciliu, fără tratament, dacă starea generală este bună"
          ],
          "correct": 2,
          "explanation": "Pentru grupa de vârstă 0-1 lună, textul precizează că \"conduita corectă implică internarea în spital, în baza datelor clinice, investigații vizând etiologia septică și instituirea tratamentului cu antibiotice (denumit empiric, în lipsa argumentelor bacteriologice)\". Tratamentul ambulatoriu sau antipiretic simplu nu este adecvat la această vârstă, iar ibuprofenul nu este recomandat sub 3 luni.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 772-783"
        },
        {
          "id": "7-3",
          "stem": "Un copil de 18 luni prezintă un episod unic de convulsie febrilă, revine rapid la starea de conștiență normală și, la examenul clinic ulterior, nu prezintă redoarea cefei, bombarea fontanelei, stare toxică sau letargie. Este indicată efectuarea puncției lombare?",
          "options": [
            "Da, orice convulsie febrilă impune puncție lombară, indiferent de evoluția clinică ulterioară",
            "Da, dar numai la copiii cu vârsta peste 5 ani",
            "Nu, puncția lombară este contraindicată la toți copiii cu convulsii febrile",
            "Nu, un singur episod de convulsie febrilă, fără stare toxică sau letargie asociată, nu reprezintă o indicație pentru puncție lombară",
            "Da, deoarece absența semnelor meningiene la copilul mic impune totuși PL de rutină"
          ],
          "correct": 3,
          "explanation": "Textul precizează explicit: \"Un singur episod de convulsie febrilă nu este o indicație pentru PL și nu este caracteristic pentru meningită ca singur simptom.\" Totodată, semnele specifice (redoarea cefei, bombarea fontanelei) pot lipsi la copilul mic, iar starea toxică și letargia asociate convulsiei febrile indică PL chiar în absența semnelor meningiene - situație care nu este prezentă în acest caz.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 772-783"
        },
        {
          "id": "7-4",
          "stem": "La un copil febril se constată bradicardie relativă, discordantă față de nivelul febrei. Conform textului, acest semn este considerat un indicator de gravitate mai ales pentru care dintre următoarele afecțiuni?",
          "options": [
            "Boala Lyme",
            "Otita medie acută",
            "Faringoamigdalita streptococică",
            "Gastroenterita acută",
            "Infecția de tract urinar"
          ],
          "correct": 0,
          "explanation": "Textul afirmă: \"Bradicardia febrilă este un semn de gravitate în miocardită, endocardită infecțioasă, reumatism articular acut și boala Lyme.\" Celelalte afecțiuni enumerate (otită, gastroenterită, infecție urinară, faringoamigdalită) sunt descrise în text prin alte caracteristici clinice, fără asocierea cu bradicardia febrilă ca semn de alarmă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 772-783"
        },
        {
          "id": "7-5",
          "stem": "Un copil de 4 ani prezintă episoade recurente, la interval de aproximativ 4-6 săptămâni, de febră ridicată însoțită de stomatită aftoasă, faringită și adenită cervicală, cu durata episoadelor de 4-5 zile și remisie completă a simptomelor între episoade. Care este diagnosticul cel mai probabil, conform textului?",
          "options": [
            "Neutropenia ciclică",
            "Artrita juvenilă idiopatică cu debut sistemic",
            "Sindromul hiperimunoglobulinemiei D",
            "Sindromul PFAPA (febră periodică, stomatită aftoasă, faringită, adenopatie)",
            "Febra familială mediteraneeană"
          ],
          "correct": 3,
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
            "Tratament exclusiv simptomatic și de susținere: dezobstrucție rinofaringiană, hidratare corespunzătoare, antipiretice la nevoie, fără antibiotice",
            "Corticoterapie topică nazală asociată cu antihistaminice orale pentru reducerea rinoreei",
            "Instilații nazale cu nafazolină, decongestionant vasoconstrictor, de mai multe ori pe zi",
            "Antibioterapie orală cu amoxicilină, pentru a preveni suprainfecția bacteriană sugerată de aspectul purulent al secrețiilor",
            "Spitalizare sistematică pentru monitorizarea evoluției, indiferent de starea generală"
          ],
          "correct": 0,
          "explanation": "Rinofaringita acută necomplicată este de etiologie virală, iar aspectul purulent al secreției nazale nu semnifică prin el însuși o suprainfecție bacteriană; antibioterapia nu scurtează evoluția și nu previne complicațiile. Tratamentul este exclusiv simptomatic (dezobstrucție, hidratare, antipiretice); soluțiile uleioase, corticoizii și antihistaminicele topice sunt ineficace sau dăunătoare, iar nafazolina este formal contraindicată sub vârsta de 6 ani.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 443-459"
        },
        {
          "id": "8-2",
          "stem": "Un copil de 8 ani este diagnosticat cu faringită acută cu streptococ beta-hemolitic grup A, confirmată prin test rapid de detecție antigenică, și primește tratament corect cu penicilină. Care este principalul beneficiu demonstrat al antibioterapiei corect administrate în această situație?",
          "options": [
            "Elimină definitiv riscul de recidivă a faringitei acute la acest copil",
            "Sterilizează infecția faringiană streptococică și reduce dramatic complicațiile supurative locale, precum și bolile poststreptococice la distanță (reumatismul articular acut, glomerulonefrita)",
            "Reduce contagiozitatea pacientului chiar din prima oră de la administrare, indiferent de durata tratamentului",
            "Este utilă exclusiv pentru ameliorarea simptomelor, fără impact dovedit asupra complicațiilor bolii",
            "Scurtează cu cel puțin o săptămână durata febrei, indiferent de momentul inițierii tratamentului"
          ],
          "correct": 1,
          "explanation": "Tratamentul corect al faringitelor streptococice a condus la scăderea dramatică a complicațiilor locale (limfadenită, abces periamigdalian, otită, sinuzită) și a bolilor poststreptococice la distanță (RAA, glomerulonefrită), acesta fiind scopul principal al antibioterapiei, alături de sterilizarea infecției faringiene bacteriene. Pacienții devin necontagioși abia după 24-48 de ore de tratament antibiotic adecvat, iar recidivele rămân posibile.",
          "source": "Ciofu - Tratat de Pediatrie ed. 4, pag. 202-203"
        },
        {
          "id": "8-3",
          "stem": "Sugar de 10 luni, fără antecedente de otită medie acută, fără tratament antibiotic în ultimele 30 de zile și fără alergie cunoscută la peniciline, este diagnosticat prin otoscopie cu OMA supurată bilaterală (congestie, bombare și pierderea transparenței timpanului). Care este antibioticul de primă linie și doza recomandată?",
          "options": [
            "Cefuroxim axetil, 30 mg/kg/zi, ca terapie de primă intenție",
            "Amoxicilină, 90 mg/kg/zi, divizată în 2 prize la 12 ore, timp de 10 zile",
            "Azitromicină, 10 mg/kg/zi, doză unică zilnică, timp de 5 zile, ca primă opțiune",
            "Amoxicilină-clavulanat de la debut, indiferent de istoricul terapeutic al copilului",
            "Observare 48-72 de ore fără antibiotic, cu reevaluare ulterioară"
          ],
          "correct": 1,
          "explanation": "Copiii cu vârsta între 6 luni și 2 ani, cu OMA uni- sau bilaterală, trebuie tratați imediat cu antibiotic, pe baza criteriilor otoscopice de congestie, bombare și pierdere a transparenței timpanului. La un copil fără risc crescut de rezistență (fără beta-lactamice recente, fără conjunctivită purulentă concomitentă, fără OMA recurentă), amoxicilina 90 mg/kg/zi în 2 prize rămâne antibioticul de primă linie, cu durată de 10 zile la copiii sub 2 ani.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 443-459"
        },
        {
          "id": "8-4",
          "stem": "Sugar de 11 luni, eutrofic, anterior sănătos, dezvoltă brusc febră înaltă cu aspect septic, stare toxică și agitație extremă; la examenul local se constată tumefacție retroauriculară cu caracter inflamator, expresie a unui abces subperiostal. Care este diagnosticul cel mai probabil?",
          "options": [
            "Parotidită epidemică urliană",
            "Otomastoidită latentă (formă cronică), caracteristică sugarului distrofic",
            "Celulită periauriculară secundară unei otite externe necomplicate",
            "Adenită cervicală supurată simplă, fără afectare otomastoidiană",
            "Otomastoidită acută, prin exteriorizarea unui abces mastoidian subperiostal"
          ],
          "correct": 4,
          "explanation": "Otomastoidita acută apare tipic la sugarul mare, cu stare de nutriție bună, manifestându-se prin febră de tip septic, stare toxico-septică și agitație extremă, cu tumefacție retroauriculară inflamatorie dată de abcesul mastoidian subperiostal, care se poate exterioriza spontan sau necesită drenaj chirurgical. Aceasta se deosebește de forma latentă (cronică), întâlnită la sugarul distrofic, cu evoluție torpidă și tablou dominat de manifestări generale (curbă ponderală staționară, paloare, toleranță digestivă redusă).",
          "source": "Ciofu - Tratat de Pediatrie ed. 4, pag. 202-203"
        },
        {
          "id": "8-5",
          "stem": "Băiat de 3 ani prezintă, de la vârsta de 18 luni, episoade recurente de febră înaltă (40°C), la interval de aproximativ 4 săptămâni, cu durata de 3-6 zile, însoțite de faringită și adenopatie cervicală, în absența unei infecții respiratorii superioare; între episoade copilul este complet asimptomatic, cu creștere și dezvoltare normale. Care este diagnosticul cel mai probabil și tratamentul cu cea mai bună eficiență dovedită în prevenția pe termen lung a recurențelor?",
          "options": [
            "Febră mediteraneană familială; colchicina este tratamentul de elecție pentru acest tablou clinic",
            "Neutropenie ciclică idiopatică; monitorizare hematologică, fără tratament specific disponibil",
            "Agranulocitoză; antibioterapie susținută și terapie de substituție",
            "Sindrom Stevens-Johnson; sistarea medicației incriminate",
            "Sindrom PFAPA; amigdalectomia (asociată sau nu cu adenoidectomia) este cea mai eficientă terapie pentru prevenția de durată"
          ],
          "correct": 4,
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
            "Iminență de stop respirator (scor ≥12) – necesită monitorizare permanentă și intervenție terapeutică imediată",
            "Crup moderat (scor 3-7) – se recomandă corticoterapie orală în doză unică, fără spitalizare",
            "Crup ușor (scor <2) – se recomandă doar aer umidificat și hidratare orală",
            "Crup sever (scor ≥8) – necesită spitalizare, dar nu monitorizare continuă",
            "Scorul Westley nu poate fi calculat fără determinarea gazelor sanguine"
          ],
          "correct": 0,
          "explanation": "Însumând punctajele (cianoză în repaus = 5, stridor în repaus = 2, tiraj sever = 3, murmur vezicular mult diminuat = 2, stare de conștiență abolită = 5) rezultă un scor de 17, mult peste pragul de 12, care semnifică iminență de stop respirator. Textul precizează că această categorie este semnalată tocmai de alterarea stării de conștiență, tirajul marcant, diminuarea/abolirea murmurului vezicular, tahicardie și cianoză, impunând monitorizare permanentă a acestor parametri.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 312-316"
        },
        {
          "id": "9-2",
          "stem": "Un copil de 3 ani, cu schemă de vaccinare incompletă (fără vaccinare anti-Haemophilus influenzae tip b), dezvoltă brusc, în plină stare de sănătate și fără prodrom viral, febră înaltă, stare toxică, sialoree, disfagie și voce înăbușită. Adoptă spontan poziția șezândă, aplecat ușor înainte, cu gâtul în hiperextensie. Care este diagnosticul cel mai probabil?",
          "options": [
            "Corp străin laringian aspirat",
            "Crup spasmodic (laringita spasmodică)",
            "Crup viral (laringotraheită acută)",
            "Traheita bacteriană",
            "Epiglotita acută"
          ],
          "correct": 4,
          "explanation": "Absența prodromului viral, debutul brusc cu febră înaltă, stare toxică, sialoree, disfagie și poziția caracteristică (aplecat înainte, cu gâtul în hiperextensie, pentru a îndepărta epiglota de calea aeriană) sunt tipice epiglotitei acute. Textul menționează că afecțiunea apare mai ales la copii de 2-4 ani neimunizați contra Haemophilus influenzae tip b, spre deosebire de crupul viral, care are prodrom viral și evoluție progresivă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 489-493"
        },
        {
          "id": "9-3",
          "stem": "Un copil cu tablou inițial sugestiv de crup viral primește tratament corect cu corticoterapie sistemică și adrenalină în nebulizare. Evoluția este însă nefavorabilă: febra rămâne înaltă, starea generală se alterează progresiv (aspect toxic), iar răspunsul la aerosolii de adrenalină este incomplet și de scurtă durată, cu ameliorări parțiale ce necesită administrări repetate. Pacientul nu prezintă sialoree și poate fi culcat pentru examinare. Care este diagnosticul cel mai probabil și conduita corectă?",
          "options": [
            "Crup viral sever – se continuă adrenalina în nebulizare la interval fix de 6 ore",
            "Crup spasmodic recurent – tratamentul constă doar în liniștirea pacientului și aer umidificat",
            "Epiglotită acută – se impune intubare imediată fără alte investigații",
            "Traheită bacteriană – se impune intubare, bronhoscopie cu recoltare de culturi și antibioterapie parenterală",
            "Abces retrofaringian – se practică drenaj chirurgical de urgență"
          ],
          "correct": 3,
          "explanation": "Semnul de alarmă pentru traheita bacteriană este lipsa de răspuns sau chiar agravarea sub un tratament anticrup corect și complet, cu răspuns incomplet și tranzitoriu la aerosolii de adrenalină. Tabloul este de severitate intermediară între crupul viral și epiglotită (febră, stare toxică), dar fără sialoree și fără poziție de trepied. Atitudinea corectă este intubarea, bronhoscopia cu obținerea de culturi și antibioterapie parenterală.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 489-493"
        },
        {
          "id": "9-4",
          "stem": "Un sugar de 8 luni, anterior sănătos, se prezintă cu primul episod de bronșiolită acută, formă ușoară-moderată, fără factori de risc (nu este fost prematur, nu are displazie bronhopulmonară, malformații sau imunodeficiențe) și provine dintr-o familie competentă. Conform ultimului consens de tratament citat în text, care este conduita terapeutică recomandată?",
          "options": [
            "Aerosoli de rutină cu salbutamol, indiferent de răspunsul clinic",
            "Ribavirin în doze standard, administrat de rutină tuturor sugarilor",
            "Doar măsuri suportive (dezobstrucție nazală, hidratare, monitorizare clinică), fără aerosoli de rutină",
            "Corticoterapie sistemică asociată cu adrenalină în nebulizare, administrate la intervale fixe",
            "Antibioterapie cu spectru larg pentru prevenirea suprainfecției bacteriene"
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
            "Corticoterapie orală și reevaluare peste 24 de ore, fără alte măsuri",
            "Antibioterapie empirică pentru suspiciunea de suprainfecție bacteriană",
            "Internare, ținând cont de vârsta sub 3 luni, polipneea peste 70/min, hipoxemia (SpO2<90%) și alterarea stării generale",
            "Administrare de aerosoli cu salbutamol la domiciliu, cu revenire la control dacă nu se ameliorează"
          ],
          "correct": 3,
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
            "Anomalie de schimb gazos la nivelul barierei alveolo-capilare",
            "Anomalie de perfuzie pulmonară, prin șunt dreapta-stânga",
            "Anomalie de pompă respiratorie, prin deprimarea centrilor respiratori bulbo-pontini",
            "Anomalie de transport al oxigenului, prin capacitate redusă de legare a hemoglobinei",
            "Anomalie de utilizare periferică a oxigenului, prin blocarea enzimelor mitocondriale (hipoxemie histotoxică)"
          ],
          "correct": 4,
          "explanation": "Textul clasifică intoxicația cu cianuri sub mecanismul de „alterare a mecanismelor ATP-dependente”, adică incapacitatea celulei de a utiliza oxigenul la nivel periferic, prin blocarea enzimelor mitocondriale (hipoxemie histotoxică). În acest mecanism, transportul și schimbul gazos rămân normale (PaO2 și Hb normale), spre deosebire de anomaliile de pompă, schimb sau transport al oxigenului.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 588-592"
        },
        {
          "id": "10-2",
          "stem": "Un sugar de 4 luni cu bronșiolită acută prezintă tahipnee marcată, agitație intensă, „foame de aer”, paloare și transpirații, fără somnolență. Gazometria arată hipoxemie cu PaCO2 normal-scăzut. Care este tipul de insuficiență respiratorie acută cel mai probabil prezent la acest pacient?",
          "options": [
            "IRA prin anomalie de pompă respiratorie de cauză neurologică",
            "IRA tip 1, cu hipoxemie, prin mecanism de neconcordanță ventilație-perfuzie",
            "IRA cronică acutizată, de tip restrictiv",
            "IRA tip 2, cu hipercapnie, prin epuizare musculară respiratorie",
            "IRA prin anomalie de transport al oxigenului"
          ],
          "correct": 1,
          "explanation": "IRA de tip 1 se caracterizează prin hipoxemie cu CO2 normal sau scăzut, produsă prin neconcordanță ventilație-perfuzie (V/Q mismatch), iar clinic se manifestă prin agitație marcată, „foame de aer”, paloare și transpirații. IRA de tip 2, cu hipercapnie, se manifestă în schimb prin somnolență („narcoză hipercapnică”), tablou absent la acest pacient.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 588-592"
        },
        {
          "id": "10-3",
          "stem": "Un copil cu insuficiență respiratorie acută severă, tahipneic și agitat, devine brusc „liniștit” și mai puțin activ, deși pulsoximetria arată în continuare o saturație scăzută. Care este interpretarea corectă a acestei modificări clinice?",
          "options": [
            "Este un fenomen normal de adaptare la efortul respirator prelungit și nu necesită intervenție",
            "Semnifică ameliorarea clinică și scăderea necesarului de oxigen",
            "Indică hipoglicemie asociată și necesită doar administrare de glucoză",
            "Poate indica retenție progresivă de CO2, sugerând nevoia de suport ventilator invaziv",
            "Este expresia unei desaturări artefactuale prin malpoziționarea senzorului de pulsoximetrie"
          ],
          "correct": 3,
          "explanation": "Textul avertizează explicit că un pacient cu IRA care rămâne desaturat și se „liniștește” inexplicabil ar putea avea nevoie de suport ventilator invaziv, deoarece retenția de CO2 este responsabilă de această „sedare” progresivă. Acest semn nu trebuie interpretat drept ameliorare, ci ca un semnal de alarmă pentru epuizare respiratorie iminentă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 588-592"
        },
        {
          "id": "10-4",
          "stem": "Din punct de vedere biochimic, care dintre următoarele seturi de valori definește insuficiența respiratorie acută (IRA) la copil?",
          "options": [
            "PaO2 sub 60 mmHg și/sau PaCO2 peste 50 mmHg",
            "PaO2 sub 50 mmHg și PaCO2 peste 60 mmHg, obligatoriu concomitent",
            "PaO2 sub 80 mmHg și/sau PaCO2 peste 45 mmHg",
            "PaO2 sub 70 mmHg și SpO2 sub 90%",
            "SpO2 sub 95% în aer ambiental, indiferent de valorile gazometrice"
          ],
          "correct": 0,
          "explanation": "Textul definește IRA biochimic drept scăderea PaO2 sub 60 mmHg, creșterea PaCO2 peste 50 mmHg, sau ambele modificări concomitent - nu este necesară prezența simultană obligatorie a ambelor criterii.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 588-592"
        },
        {
          "id": "10-5",
          "stem": "Un copil este adus la UPU cu cianoză generalizată cu tentă cenușie, „ca ardezia”, după ingestia accidentală a unei substanțe conservante alimentare. Sângele recoltat pentru micrometoda Astrup are aspect brun-ciocolatiu, iar pulsoximetrul indică o saturație de aproximativ 80%. Care este cauza cea mai probabilă a acestui tablou clinic?",
          "options": [
            "Malpoziționare a senzorului de pulsoximetrie",
            "Intoxicație cu monoxid de carbon, cu carboxihemoglobină crescută",
            "Șoc hipovolemic sever cu hipoperfuzie periferică",
            "Intoxicație cu nitriți, cu methemoglobinemie",
            "Intoxicație cu cianuri, cu blocarea respirației celulare"
          ],
          "correct": 3,
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
            "Pneumonie bacteriană cu Streptococcus pneumoniae",
            "Pneumonie virală",
            "Pneumonie cu Staphylococcus aureus",
            "Pneumonie de aspirație",
            "Tuberculoză pulmonară"
          ],
          "correct": 1,
          "explanation": "Conform tabelului de diferențiere pneumonie virală versus bacteriană (Ruuskanen et al., 2011), debutul lent, febra mică, rinita prezentă, wheezingul frecvent, leucocitele <10000/µL, VSH <20 mm/h și PCR <2 mg/dL pledează pentru etiologie virală. De asemenea, prezența wheezingului este sugestivă pentru pneumonia virală sau cu bacterii atipice, mai ales în absența febrei înalte sau a hipoxemiei.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 339-346"
        },
        {
          "id": "11-2",
          "stem": "Un copil de 2 ani, anterior sănătos, este diagnosticat cu pneumonie cu consolidare pulmonară pe radiografia toracică, formă ușoară/medie. Nu prezintă vărsături persistente, refuzul lichidelor per os, convulsii sau letargie și acceptă alimentația. Care este antibioticul de primă linie recomandat, în condiții de ambulatoriu?",
          "options": [
            "Amoxicilină-clavulanat per os",
            "Azitromicină per os",
            "Ceftriaxonă intravenos",
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
            "Fibroză chistică",
            "Boală pulmonară supurativă cronică",
            "Bronșectazie",
            "Astm bronșic",
            "Bronșită bacteriană prelungită (formă clinică)"
          ],
          "correct": 4,
          "explanation": "Cazul îndeplinește criteriile de BBP clinică: tuse cronică productivă peste 4 săptămâni, absența unor elemente sugestive pentru altă boală și rezoluția tusei după 2 săptămâni de antibioterapie orală, criteriul microbiologic fiind înlocuit de cel clinic. Bronșectazia și boala pulmonară supurativă cronică presupun lipsă de răspuns sau modificări imagistice persistente, iar astmul bronșic se manifestă tipic prin tuse uscată, nu productivă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 356-363"
        },
        {
          "id": "11-4",
          "stem": "Un copil de 5 ani cu pneumonie prezintă la ecografia toracică un revărsat pleural care ocupă peste jumătate din hemitorace, asociat cu detresă respiratorie marcată și stare generală toxică. Conform algoritmului terapeutic pentru pleurezia parapneumonică, care este conduita indicată?",
          "options": [
            "Antibioterapie sistemică asociată cu puncție pleurală, fără drenaj",
            "Drenaj pleural continuu",
            "Monitorizare clinică, fără modificarea antibioterapiei",
            "Toracotomie deschisă cu decorticare, ca primă intenție",
            "Antibioterapie sistemică, fără puncție sau drenaj pleural"
          ],
          "correct": 1,
          "explanation": "Un revărsat mare (peste 1/2 din torace) impune drenaj pleural continuu, indicație susținută și de prezența detresei respiratorii și a stării toxice/sepsis. Toracotomia deschisă cu decorticare este rezervată stadiului de organizare sau eșecului altor metode, nu conduitei inițiale.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 348-354"
        },
        {
          "id": "11-5",
          "stem": "Un adolescent de 15 ani este adus la camera de gardă după un accident rutier, cu polipnee și tahicardie rapid progresive, hipotensiune arterială, cianoză și devierea traheii spre partea contralaterală leziunii; murmurul vezicular este abolit pe hemitoracele afectat. Care este conduita imediată?",
          "options": [
            "Radiografie toracică de urgență, urmată de toracocenteză dacă se confirmă diagnosticul",
            "Antibioterapie intravenoasă cu spectru larg",
            "Oxigenoterapie cu debit mare și reevaluare clinică la 24 de ore",
            "Tomografie computerizată toracică pentru confirmarea diagnosticului",
            "Toracocenteză sau toracostomie de urgență, fără a aștepta radiografia toracică"
          ],
          "correct": 4,
          "explanation": "Tabloul clinic (deviere mediastinală, instabilitate hemodinamică, abolirea murmurului vezicular) este caracteristic pneumotoracelui sub tensiune, o urgență medicală majoră. Radiografia toracică nu este indicată în această situație, deoarece întârzie intervenția terapeutică; conduita corectă este toracocenteza sau toracostomia imediată.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 364-366"
        }
      ]
    },
    {
      "num": 12,
      "title": "Principiile de diagnostic și tratament ale bolii atopice. Astmul bronșic. Rinita alergică. Alergiile alimentare. Dermatita atopică. Urticaria și angioedemul. Alergiile medicamentoase",
      "questions": [
        {
          "id": "12-1",
          "stem": "Un copil de 3 ani este adus la consult pentru episoade recurente de wheezing: a avut 4 episoade în ultimul an, fiecare cu durată de cel puțin o zi și cu afectarea somnului. Din antecedente reținem doar diagnosticul de rinită alergică, stabilit de medic. Aplicând Indicele de Predicție a Astmului (API), ce este necesar suplimentar pentru ca scorul să fie considerat pozitiv?",
          "options": [
            "Este necesară demonstrarea spirometrică a reversibilității obstrucției bronșice",
            "Diagnosticul de rinită alergică este suficient, singur, pentru un API pozitiv",
            "Prezența unui criteriu major (istoric parental de astm sau dermatită atopică la copil) sau a unui al doilea criteriu minor (hipereozinofilie peste 4% sau wheezing fără semne de infecție respiratorie acută)",
            "Este necesară efectuarea testului de provocare bronșică la metacolină, pozitiv fiind criteriul suficient",
            "Este necesară doar dozarea IgE totale serice, indiferent de valoare"
          ],
          "correct": 2,
          "explanation": "API se aplică la copiii sub 5 ani cu minimum 3 episoade de wheezing/an, cu durată de cel puțin o zi, care afectează somnul, și necesită asocierea unui criteriu major sau a două criterii minore. Criteriile majore sunt astmul la un părinte și dermatita atopică la copil; criteriile minore sunt rinita alergică diagnosticată de medic, hipereozinofilia peste 4% și wheezing-ul fără infecție respiratorie acută. Rinita alergică reprezintă un singur criteriu minor, deci este insuficientă izolat pentru un API pozitiv.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 509-523"
        },
        {
          "id": "12-2",
          "stem": "Un sugar de 4 luni, alimentat exclusiv cu formulă de lapte praf, prezintă de trei săptămâni scaune cu mucus și striuri sanguinolente, iritabilitate și stagnare ponderală, fără alte semne asociate. Se suspectează alergie la proteinele laptelui de vacă, formă non-IgE mediată. Care este conduita inițială recomandată?",
          "options": [
            "Înlocuirea formulei standard cu o formulă extensiv hidrolizată, cu reevaluarea răspunsului clinic după 2 săptămâni de dietă de excludere",
            "Testul de provocare orală dublu-orb, efectuat imediat, fără o dietă de excludere prealabilă",
            "Determinarea IgE specifice pentru proteinele laptelui de vacă, aceasta fiind singura investigație necesară pentru diagnostic",
            "Continuarea formulei standard, cu tratament simptomatic exclusiv cu antihistaminice orale",
            "Testarea cutanată Prick, considerată standardul de aur în diagnosticul alergiei alimentare"
          ],
          "correct": 0,
          "explanation": "La suspiciunea de alergie la proteinele laptelui de vacă, la sugarul alimentat artificial se recomandă înlocuirea formulei cu una extensiv hidrolizată, cu evaluarea răspunsului după 2 săptămâni. Testul de provocare orală este standardul de aur, dar se efectuează abia după remisia simptomelor sub dietă de excludere, nu inițial. În formele non-IgE mediate, IgE specifice și testarea Prick pot fi negative, fără valoare diagnostică certă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 689-698"
        },
        {
          "id": "12-3",
          "stem": "Care este rolul mutațiilor genei filagrinei (FLG) în patogenia dermatitei atopice, conform datelor prezentate?",
          "options": [
            "Nu au fost asociate cu debutul sau severitatea dermatitei atopice, rolul lor fiind descris exclusiv în psoriazis",
            "Reduc colonizarea cutanată cu Staphylococcus aureus, având un efect protector față de suprainfecțiile bacteriene",
            "Cresc direct sinteza de IgE la nivelul limfocitelor B, acesta fiind principalul mecanism responsabil de alergiile alimentare asociate",
            "Cresc activitatea limfocitelor T citotoxice CD8+ și a celulelor NK, amplificând răspunsul antiviral cutanat",
            "Determină disfuncția barierei cutanate epidermice, cu creșterea expunerii la alergeni și risc crescut de debut precoce, forme severe de boală și eczemă herpeticum"
          ],
          "correct": 4,
          "explanation": "Filagrina are rol-cheie în funcția de barieră a epidermului; produșii ei de degradare fac parte din factorul natural de hidratare. Mutațiile nule ale genei FLG cresc expunerea la alergeni și hiperreactivitatea la factorii de mediu, conferind risc crescut pentru debutul precoce al dermatitei atopice, pentru formele severe și pentru eczema herpeticum.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 710-722"
        },
        {
          "id": "12-4",
          "stem": "Un copil de 8 ani se prezintă cu angioedem cu debut brusc, localizat la nivelul laringelui, cu stridor și dispnee progresivă. Conform conduitei terapeutice descrise pentru angioedemul cu localizare de risc, care este măsura de primă intenție?",
          "options": [
            "Omalizumab, administrat în doză unică de urgență",
            "Montelukast oral, ca terapie de primă linie în orice formă de angioedem",
            "Antihistaminic H1 nesedativ în doză standard, cu reevaluare clinică peste 48 de ore",
            "Adrenalină intramusculară, în doză de 0,01 mg/kg corp",
            "Ciclosporină A, în doză de 4 mg/kg corp"
          ],
          "correct": 3,
          "explanation": "În situațiile rare de angioedem cu localizare de risc, precum cea laringiană, se indică administrarea intramusculară de adrenalină în doză de 0,01 mg/kg corp. Antihistaminicele, montelukastul, omalizumabul și ciclosporina fac parte din schema de tratament în trepte a urticariei cronice, nu reprezintă conduita de urgență în angioedemul cu risc vital.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 699-709"
        },
        {
          "id": "12-5",
          "stem": "Un copil de 6 ani dezvoltă, la aproximativ 10 zile după administrarea unei imunoglobuline heterologe (ser de origine animală), febră, urticarie generalizată, artralgii simetrice la nivelul mai multor articulații și limfadenopatie. Care este mecanismul imunologic implicat, conform clasificării Gell și Coombs?",
          "options": [
            "Reacție de tip IV, de hipersensibilitate întârziată, mediată celular prin limfocite T specifice",
            "Reacție de tip III, prin complexe imune circulante, cu depunere în peretele vaselor și activarea complementului",
            "Reacție toxică directă, dependentă de doză, fără substrat imunologic",
            "Reacție de tip II, citotoxică, mediată prin anticorpi IgG/IgM îndreptați împotriva membranei celulare",
            "Reacție de tip I, mediată IgE, prin degranulare mastocitară imediată"
          ],
          "correct": 1,
          "explanation": "Tabloul descris (febră, urticarie, artralgii, limfadenopatie, apărute la 1-3 săptămâni de la administrarea unei proteine heterologe precum antiserul) este caracteristic bolii serului, produsă prin complexe imune circulante formate din antigenul medicamentos și anticorpi IgG/IgM, care se depun în pereții vasculari și activează complementul - reacție de tip III Gell și Coombs. Nivelurile serice de C3 și C4 scad, ajungând la un nadir în jurul zilei 10.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1242-1246"
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
            "Insuficiență aortică prin prolaps de cuspidă",
            "Regurgitare tricuspidiană secundară dilatării ventriculului drept",
            "Persistența unui canal atrioventricular asociat",
            "Stenoză mitrală organică congenitală asociată",
            "Stenoză mitrală relativă/funcțională, determinată de creșterea fluxului sangvin prin valva mitrală ca urmare a întoarcerii venoase pulmonare crescute"
          ],
          "correct": 4,
          "explanation": "Textul arată că în defectele cu debit de șunt moderat apare suflul/rulmentul mezodiastolic la apex, care traduce o stenoză mitrală relativă, de debit, produsă atunci când fluxul pulmonar devine dublu față de cel sistemic (Qp/Qs > 2:1). Nu este vorba de o leziune valvulară organică, ci de un fenomen funcțional legat de creșterea întoarcerii venoase pulmonare spre ventriculul stâng.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 624-636"
        },
        {
          "id": "13-2",
          "stem": "Un adolescent de 14 ani, cunoscut cu stenoză aortică valvulară strânsă, anterior asimptomatic, prezintă un episod de sincopă în timpul unui efort fizic intens. Care este mecanismul fiziopatologic cel mai probabil implicat?",
          "options": [
            "Limitarea deschiderii valvei aortice stenozate împiedică creșterea compensatorie a debitului cardiac necesară la efort",
            "Apariția unei stenoze mitrale relative prin creșterea fluxului pulmonar reduce umplerea ventriculului stâng",
            "Scăderea rezistenței vasculare pulmonare determină instalarea unui șunt dreapta-stânga la nivelul unui defect septal asociat",
            "Creșterea rezistenței vasculare sistemice produce supraîncărcare de volum a ventriculului drept",
            "Închiderea funcțională bruscă a canalului arterial reduce brutal fluxul sistemic"
          ],
          "correct": 0,
          "explanation": "În stenozele aortice strânse, limitarea deschiderii valvei nu permite, în condiții de efort, creșterea compensatorie a debitului cardiac; ca urmare, la efort poate apărea sincopa sau chiar moartea subită. Celelalte mecanisme descrise (șunt dreapta-stânga, închiderea canalului arterial, supraîncărcare de volum a VD, stenoză mitrală relativă) nu sunt relevante pentru fiziopatologia stenozei aortice.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 624-636"
        },
        {
          "id": "13-3",
          "stem": "Un nou-născut prematur, cu vârsta postnatală de 5 zile, prezintă semne de insuficiență cardiacă congestivă în contextul unei persistențe de canal arterial cu debit mare, confirmată ecocardiografic. Care este conduita terapeutică inițială recomandată pentru încercarea de închidere a canalului?",
          "options": [
            "Administrarea intravenoasă de indometacin sau ibuprofen, inhibitori de prostaglandine",
            "Administrarea intravenoasă de prostaglandină E1, pentru menținerea permeabilității canalului",
            "Administrare de beta-blocant pentru controlul tahicardiei",
            "Restricție lichidiană izolată, fără altă intervenție terapeutică",
            "Închiderea chirurgicală imediată, fără nicio tentativă de tratament medicamentos"
          ],
          "correct": 0,
          "explanation": "La prematurii cu PCA cu debit mare și ICC se încearcă închiderea farmacologică a canalului cu inhibitori de prostaglandine (indometacin, mai recent și ibuprofen), administrați intravenos, intervenție ce trebuie făcută în primele 10-14 zile de viață; doar dacă la 48-72 de ore de tratament persistă insuficiența ventriculară stângă se recurge la închidere chirurgicală. Prostaglandina E1 are efect opus, de menținere a canalului deschis, fiind folosită în alte situații (cardiopatii ducto-dependente).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 624-636"
        },
        {
          "id": "13-4",
          "stem": "O fetiță de 4 ani, asimptomatică, este evaluată pentru un suflu sistolic ejecțional grad 2/6, perceput parasternal stânga superior, descoperit la un control de rutină. Ce element auscultatoriu orientează diagnosticul spre un defect septal atrial tip ostium secundum, mai degrabă decât spre un suflu inocent?",
          "options": [
            "Cianoză perioronazală intermitentă la efort",
            "Prezența unui suflu diastolic apical asociat",
            "Prezența unui freamăt sistolic parasternal stânga inferior",
            "Accentuarea suflului la trecerea în ortostatism",
            "Dedublarea largă și fixă a zgomotului 2 în aria pulmonarei"
          ],
          "correct": 4,
          "explanation": "Elementele clinice caracteristice DSA descrise în text sunt suflul sistolic ejecțional în focarul pulmonarei și dedublarea largă și fixă a zgomotului 2 în aria pulmonarei, pe măsura creșterii presiunilor în cordul drept. Acest semn auscultatoriu, spre deosebire de sufluri inocente, orientează spre existența unui șunt stânga-dreapta la nivel atrial.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 624-636"
        },
        {
          "id": "13-5",
          "stem": "Un nou-născut de 6 zile se prezintă cu tahipnee, tahicardie, alterarea rapidă a stării generale, puls femural diminuat/absent și o diferență semnificativă între valorile tensionale la membrele superioare (crescute) și la cele inferioare (scăzute). Ecocardiografia confirmă o coarctație de aortă severă, de tip preductal. Care este măsura terapeutică imediată, prioritară stabilizării înaintea corecției chirurgicale?",
          "options": [
            "Administrarea intravenoasă de prostaglandină E1, pentru menținerea permeabilității canalului arterial",
            "Administrarea de beta-blocante, pentru controlul valorilor tensionale crescute",
            "Digitalizare rapidă, ca unică măsură terapeutică",
            "Administrarea de indometacin intravenos, pentru închiderea canalului arterial",
            "Administrarea de inhibitori ai enzimei de conversie, pentru reducerea postsarcinii ventriculare stângi"
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
            "MCC cianogenă cu flux pulmonar redus, prin obstrucția întoarcerii venoase pulmonare",
            "MCC cianogenă cu flux pulmonar mult crescut, la care consecințele clinice sunt legate de supraîncărcarea de volum a ventriculului stâng și nu de hipoxemie",
            "Stenoză aortică critică cu debit cardiac sistemic scăzut",
            "MCC acianogenă cu șunt stânga-dreapta pur, fără amestec sanguin interatrial sau interventricular",
            "MCC cianogenă cu flux pulmonar scăzut, prin devierea unei cantități de sânge venos sistemic direct în cordul stâng"
          ],
          "correct": 1,
          "explanation": "Textul descrie această categorie (exemplificată de TMV cu DSV larg) prin SaO2 ușor scăzută și cianoză absentă sau discretă, consecințele clinice fiind legate de fluxul pulmonar crescut, care duce la supraîncărcarea de volum a ventriculului stâng și la insuficiența acestuia, nu de hipoxemie. Tabloul clinic descris (ICC cu cianoză minimă) corespunde exact acestei categorii. Celelalte categorii (flux scăzut prin deviere directă sau prin obstrucția întoarcerii venoase) sunt dominate de hipoxemie severă și cianoză intensă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 646-654"
        },
        {
          "id": "14-2",
          "stem": "Un sugar de 5 luni, cunoscut cu tetralogie Fallot, se trezește dimineața cu agravarea bruscă a dispneei, accentuarea cianozei, iritabilitate marcată și diminuarea suflului sistolic auscultat anterior. Care este prima măsură terapeutică indicată în acest moment?",
          "options": [
            "Administrarea de propranolol oral, zilnic",
            "Montarea de urgență a unei linii venoase periferice pentru reechilibrare volemică",
            "Plasarea copilului în poziție genupectorală (flectarea membrelor inferioare pe abdomen)",
            "Administrarea de oxigen pe mască în flux mare",
            "Administrarea imediată de bicarbonat de sodiu intravenos"
          ],
          "correct": 2,
          "explanation": "Tabloul descris este cel al unei crize de rău hipoxic (hipercianoză). Tratamentul acesteia începe cu plasarea copilului în poziție genupectorală, fără a se pierde timp cu montarea unei linii de acces IV. Administrarea de oxigen are valoare limitată, deoarece problema ține de reducerea fluxului sangvin pulmonar și nu de oxigenarea acestuia; bicarbonatul și propranololul sunt măsuri ulterioare, nu de primă linie.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 646-654"
        },
        {
          "id": "14-3",
          "stem": "Un nou-născut prezintă cianoză centrală din primele ore de viață. Ecocardiografia evidențiază un ventricul drept hipoplazic, limitat la camera de ejecție, iar electrocardiograma arată deviația axului QRS spre stânga (între 0 și -90°), hipertrofie atrială dreaptă și hipertrofie ventriculară stângă, cu potențiale ventriculare drepte de amplitudine redusă. Care este diagnosticul cel mai probabil?",
          "options": [
            "Trunchiul arterial comun",
            "Transpoziția marilor vase cu sept interventricular intact",
            "Stenoza pulmonară critică cu sept interventricular intact",
            "Tetralogia Fallot",
            "Atrezia de tricuspidă"
          ],
          "correct": 4,
          "explanation": "Textul precizează că, la un nou-născut cianotic, modificările EKG sunt caracteristice pentru diagnosticul de atrezie de tricuspidă: devierea axului QRS la stânga, hipertrofia atriului drept, hipertrofie ventriculară stângă și potențiale ventriculare drepte de amplitudine redusă. Acest pattern, corelat cu hipoplazia ventriculului drept, este specific atreziei tricuspidiene și diferă de celelalte cardiopatii cianogene, care asociază de regulă hipertrofie ventriculară dreaptă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 646-654"
        },
        {
          "id": "14-4",
          "stem": "Un copil de 4 ani cu tetralogie Fallot neoperată efectuează o radiografie cardiopulmonară care evidențiază un cord de dimensiuni normale, cu apex rotunjit și împins în sus, arc mijlociu stâng concav/scobit, pedicul vascular mic și înalt, iar câmpurile pulmonare hipertransparente. Cum se numește acest aspect radiologic caracteristic?",
          "options": [
            "Aspect de \"ou culcat pe diafragm\"",
            "Cord \"în formă de gheată\" (\"coeur en sabot\")",
            "Silueta cardiacă \"în clopot\"",
            "Cardiomegalie globală cu congestie vasculară pulmonară",
            "Dilatarea izolată a atriului stâng cu dublu contur"
          ],
          "correct": 1,
          "explanation": "Textul descrie explicit acest aspect radiologic din tetralogia Fallot drept \"cordul în formă de gheată\"/\"coeur en sabot\" (sau \"cord tăiat cu securea\"), determinat de arcul mijlociu stâng concav prin absența infundibulului pulmonar, apexul rotunjit și împins în sus de ventriculul drept hipertrofiat, pediculul vascular mic și înalt, cu hipertransparență pulmonară secundară hipovascularizației. Aspectul de \"ou culcat pe diafragm\" este caracteristic transpoziției marilor vase, nu tetralogiei Fallot.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 646-654"
        },
        {
          "id": "14-5",
          "stem": "Un copil de 6 ani cu tetralogie Fallot neoperată prezintă de 3 zile febră, cefalee intensă, vărsături și deficit motor la nivelul membrului superior drept. Care este complicația cel mai probabil implicată, favorizată direct de fiziopatologia șuntului dreapta-stânga al acestei cardiopatii?",
          "options": [
            "Tromboza de sinus venos cerebral secundară deshidratării acute",
            "Meningita bacteriană secundară unei endocardite tricuspidiene",
            "Encefalopatia hipertensivă dintr-o coarctație de aortă asociată",
            "Abcesul cerebral, prin trecerea bacteriilor din circulația venoasă direct în circulația arterială sistemică, ocolind filtrul pulmonar",
            "Accidentul vascular cerebral hemoragic prin ruptura unui anevrism micotic aortic"
          ],
          "correct": 3,
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
            "HTA mascată",
            "HTA de halat alb",
            "Profil tensional non-dipper",
            "HTA esențială stadiul 2",
            "HTA esențială stadiul 1"
          ],
          "correct": 1,
          "explanation": "HTA de halat alb este definită ca valori ale TA măsurate în cabinet mai mari sau egale cu percentila 95, dar cu valori medii ale TAS/TAD pe holter TA/24 ore sub percentila 95, în condițiile în care mai puțin de 25% din valori depășesc limita normală (load <25%). HTA mascată este situația inversă (TA normală în cabinet, dar crescută pe holter). Profilul non-dipper se referă la variabilitatea circadiană a TA, nu la discrepanța cabinet-holter.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 423-428"
        },
        {
          "id": "15-2",
          "stem": "Un sugar de 3 luni este diagnosticat cu hipertensiune arterială semnificativă persistentă. Conform distribuției etiologice a HTA în funcție de vârstă, care este cea mai frecventă cauză de HTA la această grupă de vârstă?",
          "options": [
            "Feocromocitomul",
            "Tromboza de arteră/venă renală",
            "Stenoza de arteră renală",
            "Tumora Wilms",
            "HTA esențială asociată obezității"
          ],
          "correct": 1,
          "explanation": "La nou-născut și sugar, cele mai frecvente cauze de HTA sunt tromboza de arteră/venă renală, anomaliile congenitale renale și coarctația de aortă. Tumora Wilms și stenoza de arteră renală sunt cauze predominante la copilul cu vârsta între 1 și 6 ani, iar HTA esențială predomină la adolescenți.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 423-428"
        },
        {
          "id": "15-3",
          "stem": "Un adolescent de 16 ani cu HTA secundară stenozei bilaterale de artere renale necesită inițierea tratamentului medicamentos antihipertensiv. Care dintre următoarele clase terapeutice este contraindicată în acest context?",
          "options": [
            "Diureticele de ansă",
            "Alfa-agoniștii centrali",
            "Inhibitorii enzimei de conversie a angiotensinei (IECA)",
            "Blocanții canalelor de calciu",
            "Beta-blocantele"
          ],
          "correct": 2,
          "explanation": "IECA și antagoniștii receptorilor angiotensinei II (ARA) au contraindicație absolută în stenoza bilaterală de artere renale, în sarcină și în hiperpotasemie. Celelalte clase menționate nu sunt contraindicate specific în stenoza bilaterală de artere renale conform textului.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 423-428"
        },
        {
          "id": "15-4",
          "stem": "Un copil de 8 ani se prezintă cu cefalee severă, vărsături și convulsii, cu valori tensionale mult crescute (peste 20% față de limita stadiului 2 de HTA) și encefalopatie hipertensivă. După internarea în terapie intensivă și inițierea tratamentului parenteral (de exemplu nitroprusiat de sodiu), care este strategia corectă de reducere a TA în primele ore?",
          "options": [
            "Reducerea TA cu maximum 25% din scăderea estimată în primele 6-8 ore, urmată de scădere graduală și continuă în următoarele 24-48 ore",
            "Reducerea TA la valori normale în primele 6-8 ore, cu continuarea tratamentului oral după 24 de ore",
            "Normalizarea rapidă a TA în prima oră, pentru a preveni cât mai repede afectarea organelor-țintă",
            "Reducerea imediată a TA cu 50% din valoarea inițială, urmată de menținerea constantă a acestei valori",
            "Administrarea tratamentului oral cu nifedipină, urmată de reevaluare la 24 de ore"
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
            "Doar adolescenții cu HTA esențială confirmată",
            "Toți copiii cu valori ale TA între percentilele 90 și 94, indiferent de comorbidități",
            "Doar copiii cu vârsta peste 12 ani, indiferent de stadiul HTA",
            "Doar copiii cu HTA de halat alb"
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
            "Diaree entero-invazivă/inflamatoare (citotoxică)",
            "Diaree exsudativă, cu enteropatie cu pierdere de proteine",
            "Diaree prin tulburări de motilitate (hipermotilitate)",
            "Diaree secretorie (non-inflamatoare/enterotoxică)",
            "Diaree prin scăderea suprafeței de absorbție (sindrom de intestin scurt)"
          ],
          "correct": 3,
          "explanation": "Diareea secretorie se caracterizează clinic prin scaune apoase, voluminoase, absența semnelor sistemice (febră), absența semnelor de inflamație/sânge în scaun și absența leucocitelor fecale - exact tabloul descris. Diareea entero-invazivă se însoțește de sindrom dizenteric, cu sânge, mucus, leucocite în scaun și semne sistemice, ceea ce nu se regăsește la acest pacient.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 743-762"
        },
        {
          "id": "16-2",
          "stem": "Un sugar de 2 luni este diagnosticat cu gastroenterită acută cu Salmonella non-tifoidă, coprocultură pozitivă, fără bacteriemie, cu stare generală relativ bună. Care este conduita corectă privind antibioterapia?",
          "options": [
            "Nu se administrează antibiotic, deoarece la gazdele normale, cu gastroenterită necomplicată, antibioterapia nu scurtează diareea și poate prelungi portajul",
            "Se administrează antibiotic, deoarece vârsta sub 3 luni reprezintă un factor de risc pentru boală invazivă la infecția cu Salmonella",
            "Se administrează antibiotic doar dacă apar convulsii febrile",
            "Se administrează antibiotic doar în cazul asocierii cu deshidratare severă",
            "Se administrează antibiotic doar dacă antibiograma arată rezistență la ampicilină"
          ],
          "correct": 1,
          "explanation": "Textul precizează că tratamentul antimicrobian este indicat pentru gastroenterita cu Salmonella non-tifoidă la pacienții cu risc crescut de boală invazivă, printre care sugarii cu vârsta sub 3 luni, indiferent de prezența bacteriemiei. În schimb, la gazdele normale cu gastroenterită necomplicată, antibioterapia nu scurtează durata diareei și poate prelungi eliminarea fecală (portajul).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 743-762"
        },
        {
          "id": "16-3",
          "stem": "Un copil de 4 ani prezintă diaree cu sânge, în context epidemiologic sugestiv pentru infecție cu E. coli enterohemoragic (ECEH O157:H7). Care este atitudinea corectă privind antibioterapia?",
          "options": [
            "Antibioterapia este contraindicată, deoarece poate crește riscul de sindrom hemolitic-uremic",
            "Se administrează metronidazol, ca în infecția cu Clostridium difficile",
            "Antibioterapia este obligatorie la orice vârstă, indiferent de tulpina implicată",
            "Se administrează ciprofloxacină imediat, pentru a scurta durata bolii",
            "Se administrează cotrimoxazol, ca tratament de primă linie"
          ],
          "correct": 0,
          "explanation": "Textul menționează explicit că antibioterapia este contraindicată în infecția cu ECEH-O157:H7. Studii retrospective și prospective au evidențiat un risc crescut de sindrom hemolitic-uremic atunci când se administrează antibiotice în timpul perioadei de diaree sangvinolentă cauzată de E. coli producător de toxină de tip Shiga.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 743-762"
        },
        {
          "id": "16-4",
          "stem": "Un copil de 3 ani cu gastroenterită acută și deshidratare ușoară-moderată prezintă vărsături repetate care împiedică rehidratarea orală. Care medicament este menționat ca fiind eficace și sigur pentru controlul vărsăturilor, crescând șansa de succes a rehidratării orale și reducând nevoia de spitalizare/terapie IV?",
          "options": [
            "Diosmectită",
            "Ondansetron",
            "Bismut subsalicilic",
            "Racecadotril",
            "Loperamid"
          ],
          "correct": 1,
          "explanation": "Ondansetronul administrat oral (sublingual), în doză unică, poate controla vărsăturile și ameliora succesul rehidratării orale la copiii cu gastroenterită și deshidratare ușoară până la moderată, reducând nevoia de spitalizare și de terapie IV. Loperamidul nu are efect antiemetic și este de altfel contraindicat la copiii mici, iar racecadotrilul, bismutul subsalicilic și diosmectita sunt agenți antidiareici/adsorbanți, nu antiemetice cu acest profil.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 743-762"
        },
        {
          "id": "16-5",
          "stem": "Părinții unui copil de 2 ani cu diaree acută infecțioasă întreabă dacă îi pot administra loperamid pentru a reduce numărul de scaune. Care este răspunsul corect, conform datelor din literatură?",
          "options": [
            "Loperamidul este de primă linie la copiii sub 5 ani cu diaree apoasă",
            "Loperamidul este contraindicat la copiii sub 12 ani, deoarece riscul de reacții adverse severe depășește beneficiul antidiareic modest",
            "Loperamidul poate înlocui rehidratarea orală în formele ușoare de diaree",
            "Loperamidul este indicat exclusiv în diareea invazivă cu Shigella",
            "Loperamidul se poate asocia în siguranță cu antibioterapia pentru a accelera vindecarea"
          ],
          "correct": 1,
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
            "Rehidratare orală cu soluții de rehidratare orală, în ritm lent",
            "Administrare de ser fiziologic 20 ml/kg intravenos în 10-15 minute, repetabil până la refacerea volemiei (maximum 60 ml/kg)",
            "Administrare de glucoză 5% intravenos, 100 ml/kg în 24 de ore",
            "Restricție hidrică până la reluarea diurezei spontane",
            "Administrare de bicarbonat de sodiu intravenos ca primă măsură terapeutică"
          ],
          "correct": 1,
          "explanation": "În SDA severă, primul obiectiv terapeutic este refacerea volemiei. Textul precizează administrarea de ser fiziologic 20 ml/kg în 10-15 minute, care se poate repeta până la refacerea volemiei, până la maximum 60 ml/kg. Rehidratarea orală este rezervată formelor ușoare/moderate, iar bicarbonatul se folosește pentru corectarea acidozei, nu ca primă măsură în șocul hipovolemic.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "17-2",
          "stem": "Un sugar cu aport hidric redus din cauza vărsăturilor persistente prezintă la examenul clinic febră, letargie, hipertonie musculară și hiperreflexie, în timp ce diureza este relativ păstrată, iar tahicardia este doar moderată. Acest tablou clinic, cu simptomatologie mai puțin evidentă decât în alte forme de deshidratare, este caracteristic pentru:",
          "options": [
            "Deshidratarea hiponatremică (extracelulară)",
            "Deshidratarea hipernatremică (celulară)",
            "Deshidratarea prin pierderi renale izolate, fără afectare a natremiei",
            "Deshidratarea izonatremică (mixtă)",
            "Hipovolemia prin hemoragie acută"
          ],
          "correct": 1,
          "explanation": "Deshidratarea hipernatremică (Na>150 mEq/l) apare prin pierdere de apă liberă și se caracterizează prin febră, letargie/iritabilitate și hipertonie/hiperreflexie. Simptomatologia este adesea mai puțin evidentă decât în deshidratarea hipotonă, diureza putând fi păstrată, iar tahicardia fiind moderată, deoarece trecerea apei din spațiul intracelular în cel extracelular protejează volumul intravascular.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "17-3",
          "stem": "Un copil cu deshidratare hipernatremică severă este supus rehidratării intravenoase. Care este principala complicație asociată cu scăderea prea rapidă a osmolarității extracelulare în cursul corectării?",
          "options": [
            "Mielinoză pontină centrală",
            "Acidoză metabolică severă prin pierdere de bicarbonat",
            "Edem cerebral și convulsii, prin trecerea apei din spațiul extracelular în celulele creierului",
            "Hemoragie intracraniană prin deshidratare celulară persistentă",
            "Insuficiență renală acută prin necroză tubulară"
          ],
          "correct": 2,
          "explanation": "Textul precizează că scăderea rapidă a osmolarității extracelulare în timpul corectării hipernatremiei determină trecerea apei din spațiul extracelular în celulele creierului, producând edem cerebral și convulsii. Din acest motiv, corectarea hipernatremiei severe se realizează lent, în 3-4 zile, evitându-se ritmul rapid în primele 8 ore. Mielinoza pontină centrală este, în schimb, complicația corecției rapide a hiponatremiei.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "17-4",
          "stem": "Un sugar de 10 kg cu deshidratare hiponatremică (Na seric inițial 118 mEq/l) necesită corectarea deficitului de sodiu conform formulei Deficit sodiu = 0,6 x G x (Na+d - Na+i). Care este rata maximă recomandată de corecție a natremiei în primele 24 de ore, pentru a evita riscul de mielinoză pontină centrală?",
          "options": [
            "6 mEq/l în 24 de ore",
            "12 mEq/l în 24 de ore",
            "20 mEq/l în 24 de ore",
            "24 mEq/l în 24 de ore",
            "30 mEq/l în 24 de ore"
          ],
          "correct": 1,
          "explanation": "Conform textului, în deshidratarea hiponatremică se corectează cel mult 12 mEq/l în 24 de ore, corectarea rapidă având risc de mielinoză pontină centrală. Aceeași limită de 12 mEq/l/24 ore este menționată și pentru scăderea natremiei în cursul corectării deshidratării hipernatremice.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "17-5",
          "stem": "Pentru un copil cu greutatea de 14 kg, necesarul zilnic de lichide calculat după metoda Holliday-Segar este:",
          "options": [
            "1000 ml/zi",
            "1100 ml/zi",
            "1200 ml/zi",
            "1300 ml/zi",
            "1500 ml/zi"
          ],
          "correct": 2,
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
            "Exclude orice etiologie a steatoreei la acest pacient",
            "Sugerează o boală primară a mucoasei intestinului subțire, precum boala celiacă",
            "Sugerează insuficiență pancreatică exocrină, prin maldigestia luminală a lipidelor",
            "Confirmă diagnosticul de deficit congenital de lactază",
            "Este un semn caracteristic pentru limfangiectazia intestinală primară"
          ],
          "correct": 2,
          "explanation": "Testul cu pată Sudan diferențiază trigliceridele neutre (nedigerate) de acizii grași liberi rezultați după digestia lipazică. Textul precizează explicit că prezența de grăsime neutră excesivă în scaun este sugestivă pentru insuficiența pancreatică exocrină (maldigestie), spre deosebire de bolile mucoasei intestinale (ca boala celiacă), unde apar acizi grași neabsorbiți, nu grăsimi neutre.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 168-176"
        },
        {
          "id": "18-2",
          "stem": "Un copil de 3 ani cu retard staturo-ponderal marcat, malnutriție severă și edeme este investigat pentru fibroză chistică, în absența oricărui tablou respirator sugestiv. Testul sudorii arată clor 68 mmol/l (valoare pozitivă), dar testarea genetică pentru mutații CFTR este negativă. Care este cea mai probabilă explicație pentru acest rezultat al testului sudorii?",
          "options": [
            "Reprezintă un rezultat fals negativ al testului sudorii",
            "Confirmă cert diagnosticul de fibroză chistică, indiferent de rezultatul testului genetic",
            "Rezultat fals pozitiv al testului sudorii, favorizat de malnutriția severă",
            "Este sugestiv pentru sindromul Shwachman-Diamond",
            "Este expresia unei mutații CFTR de clasa a VI-a, cu turnover accentuat"
          ],
          "correct": 2,
          "explanation": "Printre cauzele de test al sudorii fals pozitiv, textul menționează explicit malnutriția severă, alături de insuficiența adrenală, hipotiroidismul netratat sau boala celiacă. Absența tabloului respirator, testul genetic negativ și contextul de malnutriție severă orientează spre un fals pozitiv, nu spre confirmarea fibrozei chistice.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 186-197"
        },
        {
          "id": "18-3",
          "stem": "Un copil cu fibroză chistică și insuficiență pancreatică primește tratament substitutiv cu preparate enzimatice pancreatice în doze care depășesc 10000 UI lipază/kg corp/zi. Ulterior dezvoltă dureri abdominale și constipație, iar investigațiile imagistice evidențiază stricturi la nivelul colonului. Care este cel mai probabil diagnostic?",
          "options": [
            "Boală Crohn cu debut colonic",
            "Sindrom de obstrucție intestinală distală, independent de doza de enzime",
            "Invaginație intestinală recurentă",
            "Colonopatie fibrozantă, complicație asociată dozelor mari de enzime pancreatice",
            "Prolaps rectal recidivant"
          ],
          "correct": 3,
          "explanation": "Textul precizează că administrarea de doze mari de enzime pancreatice a fost asociată cu apariția stricturilor colonice (colonopatie fibrozantă), complicație ce poate apărea la doze mai mari de 10000 UI lipază/kg corp/zi. De aceea, tratamentul substitutiv enzimatic nu trebuie să depășească acest prag.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 186-197"
        },
        {
          "id": "18-4",
          "stem": "O fetiță de 6 ani cu diaree cronică, distensie abdominală și stagnare ponderală este evaluată pentru boală celiacă. Nivelul IgA total seric este normal, iar anticorpii anti-transglutaminază tisulară (TG2) de tip IgA au o valoare de peste 10 ori limita superioară a normalului. Conform algoritmului de diagnostic ESPGHAN, care este conduita recomandată?",
          "options": [
            "Se renunță la biopsia duodenală și se recomandă testarea HLA-DQ2/DQ8 împreună cu anticorpii antiendomisium (EMA)",
            "Este obligatorie efectuarea biopsiei duodenale înainte de a putea stabili diagnosticul",
            "Se repetă dozarea IgA totale peste 6 luni, fără alte investigații suplimentare",
            "Se exclude diagnosticul de boală celiacă dacă testul EMA este negativ, fără a mai fi necesară biopsia",
            "Se inițiază direct dieta fără gluten, fără nicio altă testare de confirmare"
          ],
          "correct": 0,
          "explanation": "Conform textului, atunci când anticorpii TG2 depășesc de peste 10 ori valoarea normală, biopsia duodenală nu mai este necesară, iar algoritmul ESPGHAN recomandă testarea HLA-DQ2/DQ8 și a anticorpilor antiendomisium (EMA) pentru susținerea diagnosticului. Biopsia rămâne obligatorie doar în restul situațiilor, cu valori anticorpi sub acest prag.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 180-184"
        },
        {
          "id": "18-5",
          "stem": "Un sugar prezintă steatoree și insuficiență pancreatică exocrină documentată, cu tulburări de creștere, dar testul sudorii este repetat normal. Evaluarea hematologică arată neutropenie cronică și trombocitopenie, iar radiografia scheletică relevă anomalii metafizare. Care este diagnosticul cel mai probabil?",
          "options": [
            "Boala incluziunilor vilozitare",
            "Abetalipoproteinemia",
            "Deficiență de enterokinază",
            "Sindromul Shwachman-Diamond",
            "Fibroză chistică, cu test al sudorii fals negativ"
          ],
          "correct": 3,
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
            "Se definește colita ulcerativă steroid-refractară, fiind necesară trecerea la terapia de linia a doua (infliximab, ciclosporină, tacrolimus sau chirurgie)",
            "Este un răspuns terapeutic satisfăcător; se continuă corticoterapia intravenoasă până la 14 zile",
            "Se introduce azatioprină în monoterapie, pentru inducerea rapidă a remisiunii",
            "Se inițiază nutriție enterală exclusivă ca terapie de primă intenție pentru inducerea remisiunii",
            "Se crește doza de corticoid intravenos și se reevaluează răspunsul după încă 5 zile"
          ],
          "correct": 0,
          "explanation": "Conform scorului PUCAI, o valoare > 65 menținută în ziua a 5-a de corticoterapie intravenoasă definește colita ulcerativă steroid-refractară și impune trecerea la terapia de linia a doua (infliximab, ciclosporină, tacrolimus sau chirurgie). Nutriția enterală exclusivă nu este eficace în colita ulcerativă, iar tiopurinele (azatioprina) nu sunt eficace pentru inducerea remisiunii, ci doar pentru menținere.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 846-863"
        },
        {
          "id": "19-2",
          "stem": "Un adolescent de 13 ani este adus la control pentru încetinirea vitezei de creștere staturală, documentată pe parcursul ultimelor 6 luni, fără dureri abdominale, diaree sau scădere ponderală semnificativă, cu VSH și PCR normale. Care este atitudinea corectă?",
          "options": [
            "Absența triadei clasice (durere abdominală, diaree, scădere ponderală) exclude diagnosticul de boală inflamatorie intestinală",
            "Copilul trebuie investigat pentru boală inflamatorie intestinală, în special boala Crohn, deoarece încetinirea vitezei de creștere poate precede cu mult timp semnele digestive",
            "Diagnosticul de boală inflamatorie intestinală poate fi exclus, deoarece markerii inflamatori sangvini sunt normali",
            "Se recomandă doar monitorizarea periodică a curbei de creștere, investigațiile fiind indicate exclusiv la apariția semnelor digestive",
            "Retardul de creștere este o trăsătură specifică colitei ulcerative și nu justifică investigarea pentru boala Crohn"
          ],
          "correct": 1,
          "explanation": "Retardul de creștere și încetinirea vitezei de creștere pot precede cu mult timp instalarea semnelor digestive, mai ales în boala Crohn, motiv pentru care orice copil cu întârziere de creștere fără altă cauză aparentă trebuie investigat și pentru boală inflamatorie intestinală. Triada clasică a bolii Crohn apare doar la o parte dintre copii, iar markerii inflamatori pot fi normali la diagnostic la o proporție semnificativă a cazurilor.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 846-863"
        },
        {
          "id": "19-3",
          "stem": "Un copil de 10 ani este diagnosticat cu boală Crohn ileo-colonică, formă ușoară-moderată, necomplicată (fără fistule, abcese sau stenoze). Care este terapia de elecție pentru inducerea remisiunii, conform abordării terapeutice utilizate de rutină la copil?",
          "options": [
            "Infliximab administrat de la debut, conform schemei „top-down”",
            "Nutriția enterală exclusivă, administrată timp de 6-8 (maximum 12) săptămâni",
            "Azatioprină în monoterapie, pentru inducerea remisiunii",
            "Sulfasalazină orală în doză maximă",
            "Corticoterapie orală cu prednison, ca primă linie de tratament"
          ],
          "correct": 1,
          "explanation": "Nutriția enterală exclusivă reprezintă terapia de elecție și de primă intenție pentru inducerea remisiunii în boala Crohn necomplicată la copil, fiind cel puțin la fel de eficace ca și corticoizii, dar fără reacțiile adverse ale acestora, cu o rată de vindecare a mucoasei net superioară (74% față de 33%). Corticoterapia se folosește când nutriția enterală exclusivă nu este tolerată/posibilă, iar azatioprina și derivații 5-ASA nu sunt eficienți pentru inducerea remisiunii în boala Crohn.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 846-863"
        },
        {
          "id": "19-4",
          "stem": "O pacientă cu colită ulcerativă cu debut la vârsta de 8 ani, formă pancolonică, se află acum la 10 ani de evoluție a bolii, aflată în remisie clinică. Care este conduita corectă privind supravegherea riscului de cancer colorectal?",
          "options": [
            "Nu este necesară nicio supraveghere suplimentară, întrucât pacienta este asimptomatică și în remisie clinică",
            "Supravegherea colonoscopică se recomandă a fi începută abia după 20 de ani de evoluție a bolii",
            "Riscul de cancer colorectal la pacienții cu boală inflamatorie intestinală este similar cu cel al populației generale, deci nu se justifică o supraveghere specifică",
            "Se inițiază monitorizarea colonoscopică la fiecare 1-2 ani, având în vedere durata de evoluție și extinderea pancolonică a bolii",
            "Este suficientă determinarea anuală a calprotectinei fecale, fără a fi necesară colonoscopia"
          ],
          "correct": 3,
          "explanation": "Incidența cancerului colorectal este de 4-20 de ori mai crescută la pacienții cu boală inflamatorie intestinală, mai ales în formele severe cu pancolită, astfel încât după 8-10 ani de evoluție se impune monitorizarea colonoscopică, la fiecare 1-2 ani. Remisia clinică nu exclude riscul, iar prezența inflamației cronice crește suplimentar acest risc.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 846-863"
        },
        {
          "id": "19-5",
          "stem": "Un copil cu boală Crohn aflat sub terapie de menținere cu infliximab prezintă reapariția simptomelor. Dozarea arată nivel seric scăzut de infliximab și titru crescut de anticorpi împotriva agentului anti-TNFα (AAT). Conform principiilor de optimizare terapeutică bazate pe monitorizarea farmacologică, care este conduita corectă?",
          "options": [
            "Se scurtează intervalul dintre administrările de infliximab, fără a modifica agentul terapeutic",
            "Se crește doza de infliximab la 10 mg/kg, păstrând același interval între administrări",
            "Se oprește definitiv orice terapie biologică și se recomandă direct intervenția chirurgicală",
            "Se schimbă agentul anti-TNFα cu un altul din aceeași clasă (de exemplu adalimumab), eventual cu asociere de imunomodulator",
            "Se continuă schema terapeutică nemodificată, deoarece anticorpii anti-infliximab nu au semnificație clinică"
          ],
          "correct": 3,
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
            "Apendicita acută",
            "Volvulusul și enterocolita ulceronecrotică",
            "Boala Hirschsprung necomplicată",
            "Hernia încarcerată",
            "Invaginația intestinală"
          ],
          "correct": 1,
          "explanation": "Textul precizează că la nou-născut etiologia cea mai frecventă a durerii abdominale este reprezentată de volvulus și de enterocolita ulceronecrotică. Hernia încarcerată, invaginația intestinală și complicațiile maladiei Hirschsprung sunt caracteristice până la vârsta de 2 ani, iar apendicita acută devine frecventă după vârsta de 5 ani.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 298-301"
        },
        {
          "id": "20-2",
          "stem": "Un copil de 8 ani acuză durere abdominală cu debut brusc, care precede la scurt timp apariția vărsăturilor. Conform elementelor de anamneză descrise pentru abdomenul acut, acest tipar temporal orientează diagnosticul mai degrabă către:",
          "options": [
            "O afecțiune chirurgicală",
            "O gastroenterită acută virală",
            "Durerea abdominală funcțională",
            "Migrena abdominală",
            "Colicile de tip funcțional"
          ],
          "correct": 0,
          "explanation": "Textul menționează că în afecțiunile chirurgicale durerea abdominală precede de obicei episoadele de vărsătură, în timp ce în afecțiunile medicale vărsăturile preced durerea abdominală. Acest element de anamneză ajută la orientarea diagnosticului diferențial.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 298-301"
        },
        {
          "id": "20-3",
          "stem": "Un sugar de 3 luni este adus la camera de gardă pentru vărsături repetate. Din anamneză reiese caracterul bilios al vărsăturilor. Care este conduita corectă recomandată în această situație?",
          "options": [
            "Administrarea de antiemetice și reevaluare peste 24 de ore",
            "Monitorizare la domiciliu, fără investigații suplimentare",
            "Tratament antispastic și externare cu recomandări de dietă",
            "Investigarea obligatorie pentru o posibilă obstrucție intestinală",
            "Efectuarea de rutină a ecografiei abdominale doar dacă apare febră"
          ],
          "correct": 3,
          "explanation": "Textul precizează explicit că orice vărsătură bilioasă trebuie investigată pentru posibilitatea unei obstrucții intestinale, aceasta fiind un semn de alarmă care nu trebuie ignorat sau tratat simptomatic.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 298-301"
        },
        {
          "id": "20-4",
          "stem": "Un copil de 10 ani se prezintă cu durere în cadranul abdominal inferior drept, suspectă de apendicită acută. Se decide efectuarea unei ecografii abdominale. Conform datelor din text, care sunt valorile aproximative ale sensibilității și specificității acestei investigații pentru diagnosticul apendicitei acute la copil?",
          "options": [
            "Sensibilitate 60-70% și specificitate 70-80%",
            "Sensibilitate 40-50% și specificitate 90-95%",
            "Sensibilitate și specificitate egale, de aproximativ 75%",
            "Sensibilitate 99% și specificitate 50%",
            "Sensibilitate 90-96% și specificitate 94-98%"
          ],
          "correct": 4,
          "explanation": "Textul menționează că sensibilitatea și specificitatea ecografiei abdominale în diagnosticul apendicitei acute la copilul cu durere abdominală sunt de 90-96%, respectiv de 94-98%, ceea ce face din ecografie investigația imagistică de elecție inițială.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 298-301"
        },
        {
          "id": "20-5",
          "stem": "Un copil evaluat în urgență pentru durere abdominală acută prezintă ameliorare simptomatică după administrarea de antialgice, fără modificări ale examenului clinic inițial. Conform criteriilor menționate în text, care este condiția principală pentru a decide externarea la domiciliu?",
          "options": [
            "Diminuarea simptomatologiei dureroase și menținerea funcțiilor vitale și a saturației oxigenului",
            "Trecerea unui interval minim de 24 de ore de observație în spital",
            "Normalizarea completă a hemogramei și a probelor inflamatorii",
            "Absența oricărei sensibilități abdominale la palpare superficială",
            "Obținerea unei ecografii abdominale strict normale"
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
            "6 luni",
            "2 săptămâni",
            "3 luni",
            "1 lună",
            "2 luni"
          ],
          "correct": 3,
          "explanation": "Textul precizează că modificarea criteriilor a constat în scăderea duratei simptomelor necesare de la două luni la o lună, pentru a fi în concordanță cu ghidurile ESPGHAN, NASPGHAN și NASPGHAN Nutrition Constipation, deoarece intervalul de două luni din Roma III putea întârzia tratamentul. Diagnosticul de constipație funcțională necesită cel puțin două dintre criteriile Roma, prezente minimum o dată pe săptămână, timp de cel puțin o lună. Acest interval mai scurt este similar cu cel folosit pentru definiția constipației funcționale la nou-născut/sugar.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 250-257"
        },
        {
          "id": "21-2",
          "stem": "Un nou-născut la termen elimină primul scaun meconial la 60 de ore de la naștere, iar ulterior dezvoltă constipație severă cu distensie abdominală importantă. Care este afecțiunea pe care acest tablou clinic trebuie să o ridice în primul rând ca suspiciune diagnostică?",
          "options": [
            "Fibroza chistică",
            "Stenoza anală funcțională",
            "Boala Hirschsprung",
            "Hipotiroidismul congenital",
            "Alergia la proteinele laptelui de vacă"
          ],
          "correct": 2,
          "explanation": "Textul menționează explicit că întârzierea eliminării meconiului peste 48 de ore la un nou-născut la termen crește probabilitatea bolii Hirschsprung și este listată printre semnele de alarmă în constipație. Debutul constipației în prima lună de viață și istoricul familial de boală Hirschsprung sunt alte elemente de alarmă asociate acestei afecțiuni. Celelalte cauze organice enumerate în text nu se asociază caracteristic cu întârzierea pasajului meconial.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 250-257"
        },
        {
          "id": "21-3",
          "stem": "Care dintre următoarele investigații reprezintă, conform textului, standardul de aur pentru diagnosticul bolii Hirschsprung la un copil evaluat pentru constipație intractabilă?",
          "options": [
            "Manometria anorectală",
            "Radiografia abdominală pe gol",
            "RMN de coloană lombosacrală",
            "Clisma baritată",
            "Rectosigmoidoscopia/colonoscopia cu biopsie rectală"
          ],
          "correct": 4,
          "explanation": "Textul afirmă clar că rectosigmoidoscopia/colonoscopia cu biopsie rectală reprezintă standardul de aur pentru diagnosticul bolii Hirschsprung. Manometria anorectală este indicată în principal pentru evaluarea reflexului inhibitor anorectal în constipația intractabilă, iar clisma baritată nu ar trebui utilizată de primă intenție. Radiografia abdominală și RMN-ul au alte indicații (impactare fecală, respectiv suspiciune de patologie medulară).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 250-257"
        },
        {
          "id": "21-4",
          "stem": "Un copil de 6 ani prezintă, de peste o lună, episoade de defecație în locuri inadecvate contextului social. La evaluare nu se decelează istoric de retenție a materiilor fecale, iar o evaluare medicală adecvată exclude o altă patologie subiacentă. Care este diagnosticul cel mai probabil?",
          "options": [
            "Boală Hirschsprung cu debut tardiv",
            "Incontinență fecală nonretențională (encoprezis)",
            "Sindrom de intestin iritabil",
            "Constipație funcțională cu incontinență prin supraplin",
            "Abuz sexual cu manifestări digestive"
          ],
          "correct": 1,
          "explanation": "Criteriile din text pentru incontinența fecală nonretențională impun istoric de cel puțin o lună de defecație în locuri inadecvate contextului social, la un copil peste 4 ani, în absența retenției de materii fecale, simptome ce nu pot fi explicate de altă patologie după evaluare adecvată. Spre deosebire de constipația funcțională, acești copii prezintă evacuare completă a conținutului colonic, nu doar pătarea lenjeriei. Textul menționează abuzul sexual doar ca element de investigat în context, nu ca diagnostic implicit.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 250-257"
        },
        {
          "id": "21-5",
          "stem": "În cadrul dezimpactării fecale la un copil cu constipație cronică și retenție stercorală, care dintre următoarele metode NU este recomandată, din cauza riscului de toxicitate?",
          "options": [
            "Polietilenglicol administrat oral sau pe sondă nazogastrică",
            "Ulei mineral administrat intrarectal la un copil peste 1 an",
            "Clisme cu ser fiziologic, de două ori pe zi, timp de trei zile",
            "Clisme cu soluții cu magneziu",
            "Supozitoare cu glicerină, folosite intermitent la sugar"
          ],
          "correct": 3,
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
            "Greutatea la naștere",
            "Prezența icterului încă de la naștere",
            "Sexul pacientului",
            "Vârsta la care se efectuează intervenția chirurgicală",
            "Nivelul seric al alfa-1-antitripsinei"
          ],
          "correct": 3,
          "explanation": "Textul precizează că succesul intervenției Kasai depinde de mai mulți factori, cel mai important fiind vârsta la care se intervine: flux biliar restabilit la 80% dintre cazuri când intervenția se realizează sub vârsta de 60 de zile, cu reducerea șansei de reușită la 20% peste vârsta de 90 de zile. De aceea diagnosticul precoce al atreziei biliare este esențial, intervenția trebuind efectuată înainte de 45-60 de zile.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        },
        {
          "id": "22-2",
          "stem": "Un sugar la termen, alimentat exclusiv natural cu tehnică corectă de alăptare (supt frecvent, fără suplimentare cu apă), cu creștere ponderală satisfăcătoare, prezintă icter cu debut după ziua a 5-a de viață, cu valoare maximă în zilele 10-15 (bilirubină indirectă 14 mg/dL). Nu există hemoliză, hepatosplenomegalie sau modificări ale testelor hepatice. Care este diagnosticul cel mai probabil?",
          "options": [
            "Hipotiroidism congenital",
            "Sindrom Crigler-Najjar tip 2",
            "Icter la laptele matern (Breastmilk Jaundice)",
            "Atrezie de căi biliare",
            "Icterul copilului alimentat la sân (Breastfeeding Jaundice)"
          ],
          "correct": 2,
          "explanation": "Diagnosticul icterului la laptele matern este clinic, bazat pe icter prezent după ziua a 5-a de viață, la un sugar alimentat la sân, sănătos, cu creștere ponderală satisfăcătoare, fără hemoliză sau alte cauze patologice de icter. Icterul copilului alimentat la sân (Breastfeeding Jaundice) debutează în schimb în primele 5 zile și este cauzat de o tehnică de alăptare necorespunzătoare, cu aport caloric redus. Atrezia biliară ar asocia hiperbilirubinemie directă și scaune acolice, iar celelalte variante nu se corelează cu tabloul descris.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        },
        {
          "id": "22-3",
          "stem": "Un nou-născut prezintă hiperbilirubinemie indirectă severă, cu creșterea rapidă a bilirubinei (valoare maximă 40 mg/dL) în ciuda fototerapiei corect aplicate. Testele hepatice, inclusiv bilirubina directă, sunt normale, nu există hemoliză, iar histologia hepatică este normală. După administrarea de fenobarbital timp de 48 de ore, nivelul bilirubinei serice rămâne nemodificat. Care este diagnosticul cel mai probabil?",
          "options": [
            "Sindrom Dubin-Johnson",
            "Sindrom Gilbert",
            "Icter la laptele matern",
            "Sindrom Crigler-Najjar tip 1",
            "Sindrom Crigler-Najjar tip 2"
          ],
          "correct": 3,
          "explanation": "În sindromul Crigler-Najjar tip 1, UDP-glucuronil-transferaza este complet absentă, bilirubina serică atinge valori maxime de 15-50 mg/dL, iar răspunsul la fenobarbital este absent. În tipul 2, defectul enzimatic este parțial, bilirubina maximă este mai mică (12-22 mg/dL), iar fenobarbitalul scade nivelul bilirubinei cu 40-80% la 48 de ore. Sindromul Gilbert produce hiperbilirubinemie mult mai moderată (2-6 mg/dL), iar sindromul Dubin-Johnson determină hiperbilirubinemie directă, nu indirectă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        },
        {
          "id": "22-4",
          "stem": "Un sugar cu colestază intrahepatică familială progresivă (PFIC) prezintă icter, hepatomegalie și prurit moderat. Testele biochimice arată GGT serică crescută, de peste 10 ori valoarea normală, colesterol seric normal și nivel biliar scăzut al fosfolipidelor. Care tip de PFIC este cel mai probabil?",
          "options": [
            "Deficit de sinteză a acizilor biliari",
            "Sindrom Alagille",
            "PFIC tip 2 (deficit de BSEP)",
            "PFIC tip 1 (deficit de FIC1)",
            "PFIC tip 3 (deficit de MDR3)"
          ],
          "correct": 4,
          "explanation": "Spre deosebire de PFIC 1 și PFIC 2, la care GGT rămâne normală, în PFIC 3 (deficit de MDR3) GGT este crescută, frecvent de peste 10 ori valoarea normală, iar caracteristica biochimică este nivelul biliar scăzut al fosfolipidelor (fosfatidilcolina), cu nivel biliar normal al acizilor biliari. Acest profil biochimic permite diagnosticul diferențial între formele de PFIC.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        },
        {
          "id": "22-5",
          "stem": "Un sugar de 3 luni prezintă colestază cronică cu prurit, facies particular (frunte largă, hipertelorism ușor, bărbie ascuțită), suflu sistolic prin stenoză periferică a arterei pulmonare și embriotoxon posterior la examenul oftalmologic. Biopsia hepatică evidențiază paucitatea duetelor biliare intrahepatice. Care este diagnosticul cel mai probabil?",
          "options": [
            "Colestaza intrahepatică familială progresivă tip 1",
            "Atrezie de căi biliare",
            "Colangită sclerozantă neonatală",
            "Fibroză chistică",
            "Sindrom Alagille"
          ],
          "correct": 4,
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
            "Sugerează o etiologie virală acută a afectării hepatice",
            "Sugerează o etiologie metabolică a afectării hepatice",
            "Exclude diagnosticul de ciroză hepatică",
            "Este caracteristică hepatitei autoimune de tip 1",
            "Indică un răspuns favorabil la terapia cu interferon"
          ],
          "correct": 1,
          "explanation": "Raportul AST/ALT (indicele de Ritis) este un parametru orientativ asupra etiologiei afectării hepatice: valori peste 2 sugerează o afecțiune metabolică, valori sub 1 sunt caracteristice hepatitelor virale, iar raportul crește la peste 1 în ciroza hepatică. O valoare de 2,5 orientează deci către o cauză metabolică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 278-291"
        },
        {
          "id": "23-2",
          "stem": "Un copil cu icter colestatic și timp de protrombină prelungit primește vitamină K parenteral, iar timpul de protrombină se corectează prompt. Acest tip de răspuns terapeutic este caracteristic pentru:",
          "options": [
            "Disfuncție hepatocitară severă, necorectabilă farmacologic",
            "Colestază cu deficit al factorilor de coagulare vitamina K-dependenți",
            "Ciroza hepatică decompensată, clasa Child-Pugh C",
            "Macro-aspartat transaminaza (macro-AST)",
            "Hepatita autoimună de tip 2"
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
            "Clasa C Child (10-15 puncte)",
            "Nu poate fi încadrat în sistemul Child-Pugh, este necesar scorul MELD",
            "Clasa D Child (peste 15 puncte)"
          ],
          "correct": 2,
          "explanation": "Scorul Child-Turcotte-Pugh însumează punctajul (1-3 puncte) pentru encefalopatie, ascită, bilirubină, albumină și timp de protrombină/INR. Clasificarea în clase de severitate este: Clasa A = 5-6 puncte, Clasa B = 7-9 puncte, Clasa C = 10-15 puncte. Un scor total de 10 puncte încadrează pacientul în Clasa C, cea mai severă formă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 293-295"
        },
        {
          "id": "23-4",
          "stem": "O adolescentă se prezintă cu debut acut și sever al unei hepatite cronice, cu recidive frecvente. Testele serologice evidențiază anticorpi anti-LKM1 pozitivi, în timp ce ANA și ASMA sunt negativi. Care este tipul de hepatită autoimună cel mai probabil?",
          "options": [
            "Hepatita autoimună de tip 1",
            "Hepatita autoimună de tip 2",
            "Hepatita cronică virală B",
            "Boala Wilson",
            "Steatohepatita nonalcoolică (NASH)"
          ],
          "correct": 1,
          "explanation": "Hepatita autoimună de tip 2 se caracterizează serologic prin prezența anticorpilor antimicrozomali anti-LKM1, iar tabloul clinic și leziunile histopatologice sunt de afecțiune acută și severă, cu recidive frecvente. Hepatita autoimună de tip 1 este definită de ANA și/sau ASMA pozitivi, are debut la adolescență și răspuns terapeutic în general bun.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 278-291"
        },
        {
          "id": "23-5",
          "stem": "La un copil cu hepatită cronică virală B se efectuează elastografie hepatică tranzitorie (FibroScan), obținându-se o valoare a rigidității hepatice de 13 kPa. Această valoare este sugestivă pentru:",
          "options": [
            "Fibroză absentă (F0)",
            "Ciroză hepatică",
            "Fibroză semnificativă, fără ciroză",
            "Rezultat neinterpretabil, este necesară biopsia hepatică",
            "Fibroză portală fără septuri (F1)"
          ],
          "correct": 1,
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
            "Frotiul de sânge periferic",
            "Timpul de protrombină",
            "Testul Gregersen/hem-test din scaun",
            "Dozarea bilirubinei indirecte",
            "Testul Apt-Downey"
          ],
          "correct": 4,
          "explanation": "Testul Apt-Downey constă în adăugarea de apă sterilă și NaOH 1% peste vărsătura cu sânge. Dacă sângele este de proveniență maternă rezultă o culoare galbenă, iar dacă provine de la nou-născut culoarea rămâne neschimbată, deoarece hemoglobina fetală este alcalinorezistentă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 238-248"
        },
        {
          "id": "24-2",
          "stem": "Un copil de 2 ani se prezintă cu un episod de hematochezie masivă, nedureroasă, cu debut brusc. Se suspectează diverticulul Meckel drept sursă a sângerării, cauzată de ulcerația peptică la joncțiunea dintre mucoasa ectopică și ileonul normal. Care este investigația de elecție pentru confirmarea diagnosticului?",
          "options": [
            "Scintigrafia cu Techneţiu-99m",
            "Clisma baritată",
            "Ecografia abdominală Doppler",
            "Colonoscopia cu prelevare de biopsii",
            "Radiografia abdominală pe gol"
          ],
          "correct": 0,
          "explanation": "Diagnosticul diverticulului Meckel se stabilește pe baza scintigrafiei cu Tc99m, care evidențiază mucoasa ectopică (de obicei gastrică), prezentă în peste 80% din cazuri și responsabilă de ulcerația peptică ce determină sângerarea.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 238-248"
        },
        {
          "id": "24-3",
          "stem": "Un copil de 4 ani, cu istoric recent de diaree cu sânge, se prezintă cu durere abdominală severă, difuză, oligurie și paloare. Analizele evidențiază anemie hemolitică microangiopatică și trombocitopenie, iar coprocultura este pozitivă pentru un serotip enterohemoragic de E. coli. Care este diagnosticul cel mai probabil?",
          "options": [
            "Purpură Henoch-Schönlein",
            "Boală inflamatorie intestinală",
            "Sindrom hemolitic-uremic",
            "Invaginație intestinală",
            "Colită pseudomembranoasă"
          ],
          "correct": 2,
          "explanation": "Triada diaree sangvinolentă (asociată E. coli producătoare de verotoxină/toxină Shiga), anemie hemolitică microangiopatică și trombocitopenie este caracteristică sindromului hemolitic-uremic, care se poate complica cu invaginație, pancreatită sau perforație intestinală.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 238-248"
        },
        {
          "id": "24-4",
          "stem": "În cadrul managementului inițial al unui copil cu hemoragie digestivă masivă și instabilitate hemodinamică, la ce valoare a numărului de trombocite este indicată administrarea de masă trombocitară?",
          "options": [
            "Sub 50.000/mm3",
            "Sub 100.000/mm3",
            "Sub 150.000/mm3",
            "Sub 20.000/mm3",
            "Indiferent de valoare, dacă hemoragia este activă"
          ],
          "correct": 0,
          "explanation": "Conform managementului terapeutic descris, masa trombocitară se administrează doar dacă numărul trombocitelor este sub 50.000/mm3, alături de fluide izotone, produse de sânge, vitamină K administrată empiric și, la nevoie, plasmă proaspătă congelată.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 238-248"
        },
        {
          "id": "24-5",
          "stem": "La un copil cu suspiciune de hemoragie digestivă superioară se montează sondă nazogastrică și se efectuează lavaj gastric, care evidențiază conținut clar, fără urme de sânge proaspăt sau aspect de „zaț de cafea”. Ce concluzie susține acest rezultat?",
          "options": [
            "Exclude o sursă hemoragică situată deasupra ligamentului Treitz",
            "Confirmă o sursă hemoragică activă situată deasupra ligamentului Treitz",
            "Confirmă o sursă hemoragică oprită, situată deasupra ligamentului Treitz",
            "Indică prezența varicelor esofagiene",
            "Impune repetarea imediată a lavajului cu ser rece"
          ],
          "correct": 0,
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
            "Ciroza hepatică postnecrotică",
            "Cavernomul de venă portă (transformarea cavernomatoasă a venei porte)",
            "Fibroza hepatică congenitală",
            "Sindromul Budd-Chiari",
            "Scleroza hepatoportală"
          ],
          "correct": 1,
          "explanation": "Obstrucția venei porte (bloc presinusoidal/prehepatic) duce la transformarea cavernomatoasă a venei porte, care se manifestă clinic prin splenomegalie izolată, fără hepatomegalie, cu teste hepatice normale, diagnostic confirmat ecografic. Aproape 40% dintre cazuri au antecedente de cateterism venos ombilical, iar semnele de hipertensiune portală apar precoce, complicându-se frecvent cu hemoragie digestivă înaintea vârstei de 3 ani. Fibroza hepatică congenitală și scleroza hepatoportală pot avea și ele teste hepatice normale, dar nu se asociază tipic cu cateterismul ombilical.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 951-952"
        },
        {
          "id": "25-2",
          "stem": "Un copil cu hepatopatie cronică dezvoltă ascită. Se efectuează paracenteză diagnostică, iar din analiza lichidului se calculează gradientul albuminei ser-lichid de ascită (SAAG). Care valoare a SAAG susține puternic (sensibilitate 97%) diagnosticul de ascită secundară hipertensiunii portale?",
          "options": [
            "SAAG nu are valoare diagnostică în ascita copilului",
            "SAAG sub 1,1 g/dL",
            "SAAG între 0,5-1,0 g/dL, indiferent de proteinele din lichid",
            "SAAG peste 1,1 g/dL",
            "SAAG egal cu 0"
          ],
          "correct": 3,
          "explanation": "Gradientul albuminei ser-lichid de ascită (SAAG) este util pentru diferențierea ascitei prin hipertensiune portală de alte cauze de ascită. O valoare SAAG > 1,1 g/dL susține puternic, cu o sensibilitate de 97%, diagnosticul de hipertensiune portală, alături de alți parametri precum concentrația scăzută de proteine în lichidul de ascită.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 951-952"
        },
        {
          "id": "25-3",
          "stem": "Un sugar de 5 săptămâni este diagnosticat cu atrezie de căi biliare, confirmată prin colangiografie intraoperatorie. Pentru a obține cele mai mari șanse de restabilire a fluxului biliar prin hepatoportoenterostomie (operația Kasai), intervenția chirurgicală trebuie efectuată, ideal, înainte de:",
          "options": [
            "6 luni de viață",
            "30 de zile de viață",
            "60 de zile de viață",
            "1 an de viață",
            "120 de zile de viață"
          ],
          "correct": 2,
          "explanation": "Succesul intervenției Kasai depinde în principal de vârsta la care se intervine chirurgical: fluxul biliar este restabilit la 80% dintre cazuri când intervenția se realizează sub vârsta de 60 de zile, șansa de reușită scăzând la doar 20% la o vârstă mai mare de 90 de zile. De aceea diagnosticul precoce al atreziei biliare este esențial, pentru a permite efectuarea intervenției înaintea vârstei de 45-60 de zile.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        },
        {
          "id": "25-4",
          "stem": "Un sugar de 6 săptămâni cu icter colestatic, scaune parțial decolorate și urini hipercrome este evaluat pentru colestază neonatală. Ecografia abdominală evidențiază o veziculă biliară de dimensiuni reduse, cu pereți neregulați, și o zonă triunghiulară hiperecogenă situată anterior de bifurcația ramurilor venei porte („triangular cord”). Care este diagnosticul cel mai probabil sugerat de acest aspect ecografic?",
          "options": [
            "Atrezia de căi biliare",
            "Chistul de coledoc",
            "Sindromul Alagille",
            "Hepatita neonatală idiopatică",
            "Cavernomul de venă portă"
          ],
          "correct": 0,
          "explanation": "Ecografia abdominală în atrezia de căi biliare poate evidenția o veziculă biliară anormală, cu pereți neregulați sau absentă, și semnul „triangular cord” - zona triunghiulară hiperecogenă situată anterior de bifurcația ramurilor venei porte - aspecte sugestive pentru acest diagnostic. Ecografia nu este însă suficientă singură pentru confirmare, fiind necesare investigații suplimentare (scintigrafie hepatobiliară, biopsie hepatică).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 924-948"
        },
        {
          "id": "25-5",
          "stem": "Un sugar de 4 luni prezintă colestază progresivă cu prurit sever, hepatosplenomegalie, diaree cronică și hipotrofie staturo-ponderală, fără xantoame. Acizii biliari serici sunt marcat crescuți, dar gama-glutamiltranspeptidaza (GGT) este normală. Care este cel mai probabil diagnostic?",
          "options": [
            "Sindromul Alagille",
            "Atrezia de căi biliare",
            "Colestaza intrahepatică familială progresivă tip 1 (boala Byler)",
            "Colestaza intrahepatică familială progresivă tip 3",
            "Colestaza asociată nutriției parenterale totale"
          ],
          "correct": 2,
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
            "Este îndeplinit un singur criteriu (durerea abdominală caracteristică), deoarece lipaza nu atinge pragul de minimum 3 ori valoarea normală, iar imagistica este negativă, fiind necesare investigații suplimentare pentru confirmarea diagnosticului",
            "Este necesară doar repetarea dozării lipazei peste 24 de ore, fiind singurul criteriu validat pentru diagnostic",
            "Diagnosticul este exclus, deoarece ecografia abdominală este investigația standard de aur, iar rezultatul ei negativ infirmă pancreatita acută",
            "Diagnosticul de pancreatită acută este confirmat, fiind suficiente durerea caracteristică și creșterea lipazei serice, indiferent de valoarea acesteia",
            "Sunt îndeplinite deja 2 din cele 3 criterii de diagnostic (durerea și enzimele pancreatice), astfel diagnosticul este confirmat"
          ],
          "correct": 0,
          "explanation": "Diagnosticul pozitiv de pancreatită acută necesită întrunirea a cel puțin 2 din 3 criterii: durere abdominală caracteristică, amilază și/sau lipază serică de cel puțin 3 ori limita superioară a normalului și dovezi imagistice de pancreatită. În acest caz este îndeplinit doar criteriul clinic (durerea), lipaza nu atinge pragul de 3x, iar ecografia este negativă, deci sunt necesare investigații suplimentare (de exemplu CT abdominal cu contrast) pentru confirmarea diagnosticului.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 198-207"
        },
        {
          "id": "26-2",
          "stem": "În managementul analgeziei la un copil cu pancreatită acută severă, care dintre următoarele substanțe trebuie evitată, deoarece determină creșterea presiunii la nivelul sfincterului Oddi și poate agrava evoluția bolii?",
          "options": [
            "Acetaminofen",
            "Ketorolac",
            "Fentanil",
            "Meperidină",
            "Morfină"
          ],
          "correct": 4,
          "explanation": "Textul precizează explicit că se evită utilizarea morfinei ca analgezic în pancreatita acută, deoarece s-a demonstrat că aceasta determină creșterea presiunii la nivelul sfincterului Oddi și poate agrava cursul bolii. Analgezia se realizează, în schimb, prin administrare intravenoasă de acetaminofen, meperidină sau petidină, cu ajustarea dozei în funcție de necesar.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 198-207"
        },
        {
          "id": "26-3",
          "stem": "Un adolescent cu pancreatită cronică și insuficiență pancreatică exocrină este tratat cu supliment enzimatic pancreatic (extract porcin – pancreatină). Care este principalul risc asociat administrării unor doze care depășesc 10000 UI lipază/kg/zi?",
          "options": [
            "Agravarea diabetului zaharat tip 3c prin efect toxic pancreatic direct",
            "Hepatotoxicitate severă, cu insuficiență hepatică acută",
            "Stenoze/stricturi colonice, prin hipertrofia muscularei colonice",
            "Nefrocalcinoză secundară hipercalcemiei induse enzimatic",
            "Precipitarea unui nou episod de pancreatită acută prin hiperstimulare secretorie"
          ],
          "correct": 2,
          "explanation": "Textul atrage atenția că dozele de enzime pancreatice care depășesc 10000 UI de lipază/kg/zi nu sunt recomandate, existând riscul producerii de stenoze/stricturi colonice prin hipertrofia muscularei colonice, aspect discutat în special în contextul terapiei substitutive din fibroza chistică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 198-207"
        },
        {
          "id": "26-4",
          "stem": "Care este particularitatea insuficienței pancreatice endocrine la copiii cu pancreatită cronică calcifiantă, conform datelor prezentate în text?",
          "options": [
            "Diabetul zaharat apare rar, iar atunci când apare, riscul de episoade hipoglicemice este scăzut",
            "50-70% dintre acești pacienți dezvoltă diabet zaharat de tip 3c, cu risc crescut de episoade hipoglicemice",
            "Insuficiența endocrină precede întotdeauna instalarea insuficienței exocrine",
            "Diabetul zaharat de tip 1, prin mecanism autoimun, este forma cea mai frecvent întâlnită",
            "Toleranța la glucoză rămâne normală indiferent de gradul de fibroză și calcificare pancreatică"
          ],
          "correct": 1,
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
            "Diskeratoza congenitală",
            "Sindromul Shwachman-Diamond"
          ],
          "correct": 4,
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
            "Istoric familial de cardiomiopatie dilatativă la rude de gradul I",
            "Fracția de ejecție a ventriculului stâng sub 30%",
            "Dilatarea severă și cronică a ventriculului stâng",
            "Prezența trombilor intracavitari la ecocardiografie"
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
            "Miocardita fulminantă are întotdeauna un prognostic rezervat, majoritatea cazurilor decedând în ciuda suportului mecanic",
            "Miocardita fulminantă asociază un risc mai mare de progresie spre cardiomiopatie dilatativă comparativ cu miocardita acută",
            "Suportul ECMO este contraindicat în miocardita fulminantă din cauza riscului aritmic crescut",
            "Miocardita fulminantă nu necesită terapie agresivă, evoluând spontan favorabil în majoritatea cazurilor"
          ],
          "correct": 0,
          "explanation": "Textul arată că, în ciuda tabloului dramatic, în cazul unui management agresiv care implică suport mecanic ECMO, cazurile de miocardită fulminantă pot evolua cu recuperare completă și risc scăzut de a dezvolta CMD, spre deosebire de miocardita acută, care asociază un prognostic pe termen lung mai sever, cu progresie mai frecventă spre CMD.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 433-438"
        },
        {
          "id": "27-3",
          "stem": "La biopsia endomiocardică a unui copil cu suspiciune clinică de miocardită se descrie un infiltrat inflamator limfocitar la nivel miocardic, fără evidențierea necrozei sau a degenerării miocitare asociate. Conform criteriilor histopatologice Dallas, acest aspect corespunde:",
          "options": [
            "Miocardită cronică/CMD cu inflamație",
            "Fibroelastoză endomiocardică",
            "Miocardită borderline",
            "Aspect histologic normal, care exclude diagnosticul de miocardită",
            "Miocardită acută"
          ],
          "correct": 2,
          "explanation": "Conform criteriilor Dallas, miocardita acută presupune infiltrat inflamator asociat cu necroză miocitară și degenerarea miocitelor subiacente, în timp ce miocardita borderline este definită ca infiltrat inflamator limfocitar fără distrucție miocardică și necroză, exact aspectul descris în vinietă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 433-438"
        },
        {
          "id": "27-4",
          "stem": "Un adolescent cu cardiomiopatie hipertrofică obstructivă, aflat sub tratament cu propranolol în doză maximă tolerată, prezintă în continuare episoade sincopale, iar examinarea Doppler evidențiază un gradient pe tractul de ejecție al ventriculului stâng de 65 mmHg în repaus. Care este conduita terapeutică indicată în această situație?",
          "options": [
            "Creșterea dozei de digoxin pentru ameliorarea funcției sistolice",
            "Tratament chirurgical prin miectomie septală",
            "Asocierea diureticelor în doze mari pentru reducerea presarcinii",
            "Continuarea aceleiași scheme terapeutice, fără modificări, cu reevaluare la 6 luni",
            "Administrarea de isoproterenol intravenos pentru susținerea debitului cardiac"
          ],
          "correct": 1,
          "explanation": "Textul precizează că pacienților cu CMH obstructivă simptomatică, cu sincope și fără răspuns la terapia beta-blocantă, în prezența unui gradient pe tractul de ejecție al VS ≥50 mmHg în repaus sau provocat, le este recomandat tratamentul chirurgical (miectomia septală). Digitalicele, diureticele în doze mari și isoproterenolul sunt de altfel contraindicate/evitate în CMH obstructivă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 411-417"
        },
        {
          "id": "27-5",
          "stem": "La un copil diagnosticat cu cardiomiopatie dilatativă, care dintre următorii parametri se asociază cu un prognostic nefavorabil?",
          "options": [
            "Insuficiență mitrală ușoară și staționară",
            "Absența tulburărilor de ritm și de conducere",
            "Fracția de ejecție a ventriculului stâng sub 30%",
            "Clasa funcțională NYHA/Ross I",
            "Funcție ventriculară dreaptă normală, fără dilatare"
          ],
          "correct": 2,
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
            "Mai mult de 10 mmHg",
            "Mai mult de 25 mmHg",
            "Mai mult de 15 mmHg",
            "Mai mult de 20 mmHg",
            "Mai mult de 5 mmHg"
          ],
          "correct": 0,
          "explanation": "Textul precizează că, în tamponada cardiacă, alături de triada Beck (zgomote cardiace asurzite, hipotensiune, presiune venoasă centrală crescută), apare pulsul paradoxal, definit ca scăderea tensiunii arteriale sistolice cu mai mult de 10 mmHg în timpul inspirului. Tamponada cardiacă reprezintă o urgență majoră ce necesită măsuri terapeutice prompte.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 446-449"
        },
        {
          "id": "28-2",
          "stem": "Un sugar cu pneumonie severă dezvoltă durere toracică cu debut brusc, febră înaltă, tahicardie și tahipnee; ecocardiografia evidențiază un revărsat pericardic important, iar analiza lichidului pericardic sugerează etiologie bacteriană. Care este conduita terapeutică optimă în această situație?",
          "options": [
            "Antiinflamatoare nesteroidiene în monoterapie, cu reevaluare ecocardiografică la o săptămână",
            "Antibioterapie empirică cu spectru larg timp de 7 zile, fără evacuarea colecției",
            "Corticoterapie sistemică, dată fiind evoluția potențial fulminantă",
            "Doar monitorizare clinică, întrucât pericardita purulentă are evoluție spontan favorabilă la copil",
            "Antibioterapie adecvată asociată evacuării colecției pericardice, cu durată de minimum 4-6 săptămâni"
          ],
          "correct": 4,
          "explanation": "În pericardita purulentă, tratamentul se bazează pe identificarea agentului etiologic (hemoculturi, analiza lichidului pericardic), inițierea antibioterapiei adecvate asociată evacuării colecției pericardice reprezentând măsurile terapeutice optime. Durata antibioterapiei se recomandă a fi de cel puțin 4-6 săptămâni, evitându-se antibioterapia cu spectru larg nedirijată etiologic.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 446-449"
        },
        {
          "id": "28-3",
          "stem": "Un copil provenit dintr-o zonă endemică prezintă febră joasă, transpirații nocturne, scădere ponderală și dispnee; lichidul pericardic obținut prin pericardiocenteză este serosangvinolent, cu conținut proteic crescut și predominanță limfocitară, ridicând suspiciunea de pericardită tuberculoasă. Ce valoare a adenozin-deaminazei (ADA) în lichidul pericardic susține acest diagnostic?",
          "options": [
            "Peste 30 U/L",
            "Peste 100 U/L",
            "Peste 10 U/L",
            "Peste 50 U/L",
            "Peste 20 U/L"
          ],
          "correct": 3,
          "explanation": "Textul menționează că determinarea adenozin deaminazei din lichidul pericardic are valoare diagnostică pentru pericardita tuberculoasă la un nivel de peste 50 U/L, aceasta fiind utilă mai ales pentru orientarea rapidă a diagnosticului, întrucât izolarea bacililor tuberculoși în culturi poate necesita până la șase săptămâni.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 446-449"
        },
        {
          "id": "28-4",
          "stem": "Un copil cu suspiciune de endocardită infecțioasă are două hemoculturi separate pozitive cu Streptococcus viridans și, la ecocardiografie, se evidențiază o vegetație mobilă la nivelul valvei mitrale, cu regurgitare valvulară nou apărută. Conform criteriilor Duke modificate, cum se interpretează acest tablou?",
          "options": [
            "Diagnostic incert, impunând repetarea hemoculturilor înainte de orice concluzie",
            "Diagnostic exclus, în absența criteriilor minore asociate",
            "Diagnostic posibil, necesitând obligatoriu confirmare prin biopsie endocardică",
            "Diagnostic incert, fiind necesare minimum cinci criterii minore suplimentare",
            "Diagnostic cert de endocardită infecțioasă, fiind îndeplinite două criterii clinice majore"
          ],
          "correct": 4,
          "explanation": "Hemoculturile pozitive cu germen etiologic specific (Streptococcus viridans) și evidența ecocardiografică a implicării endocardice (vegetație, regurgitare valvulară nouă) reprezintă fiecare câte un criteriu clinic major. Diagnosticul pozitiv de endocardită infecțioasă este susținut, printre altele, de îndeplinirea a două criterii clinice majore.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 439-445"
        },
        {
          "id": "28-5",
          "stem": "Un copil aflat sub tratament antibiotic pentru endocardită infecțioasă dezvoltă embolii pulmonare recurente, iar ecocardiografia evidențiază o vegetație la nivelul valvei tricuspide cu diametrul de 25 mm. Care este conduita terapeutică indicată în această situație?",
          "options": [
            "Tratament chirurgical, cu înlăturarea vegetației",
            "Pericardiocenteză evacuatorie de urgență",
            "Continuarea antibioterapiei, fără altă intervenție, întrucât vegetațiile tricuspidiene regresează spontan",
            "Anticoagulare terapeutică, fără modificarea antibioterapiei",
            "Schimbarea empirică a antibioticului, fără altă măsură suplimentară"
          ],
          "correct": 0,
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
            "Solicitarea consultului de electrofiziologie pediatrică",
            "Sedare profundă cu monitorizare EKG continuă",
            "Administrarea de flecainidă intravenos",
            "Conversia electrică sincronă (cardioversie)"
          ],
          "correct": 0,
          "explanation": "Textul menționează explicit riscul administrării adenozinei la pacienții cu fibrilație atrială și sindrom WPW, deoarece poate crește frecvența ventriculară prin favorizarea conducerii pe calea accesorie, cu risc de degenerare în fibrilație ventriculară, mai ales la interval RR < 230 ms. În schimb, pentru tahicardia antidromică/FiA cu WPW, conversia electrică (clasa I) și flecainida IV (clasa IIa) sunt opțiuni recomandate conform tabelului de tratament acut.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 660-676"
        },
        {
          "id": "29-2",
          "stem": "Un copil de 10 ani se prezintă cu palpitații cu debut și sfârșit brusc; EKG în criză arată o tahicardie cu complex QRS îngust, frecvență 220/min. În derivația V1 se observă o mică deflexiune pozitivă la finalul complexului QRS (aspect „pseudo-r′”), iar intervalul RP este sub 70 ms. Acest aspect ECG este cel mai sugestiv pentru:",
          "options": [
            "Tahicardie joncțională permanentă reciprocă (PJRT)",
            "Tahicardie atrială ectopică",
            "Tahicardie ortodromică prin reintrare pe cale accesorie (AVRT)",
            "Tahicardie prin reintrare în nodul atrioventricular (AVNRT)",
            "Flutter atrial cu conducere 2/1"
          ],
          "correct": 3,
          "explanation": "Textul precizează că prezența unui pattern pseudo-r′ în V1 cu interval RP sub 70 ms este un argument pentru reintrare nodală (AVNRT), impulsul fiind transmis retrograd la atriu pe calea rapidă a nodului atrioventricular. Un interval RP peste 70 ms ar sugera, în schimb, reintrare pe cale accesorie (AVRT).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 660-676"
        },
        {
          "id": "29-3",
          "stem": "Un adolescent cu sindrom de QT lung cunoscut prezintă episoade sincopale declanșate în mod caracteristic de stimuli auditivi bruști (de exemplu, soneria telefonului sau alarma ceasului). Acest tipar de declanșare este caracteristic pentru:",
          "options": [
            "LQT3",
            "Sindromul Timothy",
            "LQT1",
            "Sindromul Andersen-Tawil",
            "LQT2"
          ],
          "correct": 4,
          "explanation": "Conform textului, factorii declanșatori ai aritmiilor în sindromul de QT lung diferă pe tipuri: efortul fizic și factorii stresanți pentru tipul 1, stimulii auditivi (zgomote bruște, alarma de ceas) pentru tipul 2, iar în tipul 3 aritmiile apar de obicei în repaus.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 660-676"
        },
        {
          "id": "29-4",
          "stem": "La un făt diagnosticat cu bloc atrioventricular complet congenital, în contextul unei mame cu anticorpi anti-Ro/La pozitivi, care dintre următoarele elemente reprezintă factori de risc dovediți pentru mortalitate crescută?",
          "options": [
            "Hidrops fetal și frecvență ventriculară sub 55/min",
            "Debutul blocului atrioventricular după săptămâna 30 de gestație",
            "Absența unei boli autoimune materne manifeste clinic",
            "Sexul feminin al fătului",
            "Titrul scăzut de anticorpi anti-Ro materni"
          ],
          "correct": 0,
          "explanation": "Textul precizează că factorii de risc dovediți pentru mortalitate în BAV congenital autoimun sunt hidropsul fetal și frecvența ventriculară sub 55/min. BAV complet la făt se instalează tipic în săptămânile 16-24 de gestație, iar diagnosticul matern de lupus este adesea stabilit abia după decelarea blocului la nou-născut.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 660-676"
        },
        {
          "id": "29-5",
          "stem": "Un nou-născut cu bloc atrioventricular complet congenital, pe cord structural normal, este asimptomatic clinic și este urmărit prin monitorizare Holter EKG. Care dintre următoarele constatări reprezintă, conform ghidurilor citate, o indicație de cardiostimulare permanentă chiar în absența simptomelor?",
          "options": [
            "Interval PR normal pentru vârstă asociat",
            "Frecvență cardiacă medie în somn sub 50/min",
            "Pauze ventriculare mai scurte decât durata unui ciclu al ritmului de scăpare",
            "Absența disfuncției sistolice de ventricul stâng",
            "Complex QRS îngust al ritmului de scăpare, cu frecvență peste 80/min"
          ],
          "correct": 1,
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
            "Contextul epidemiologic sezonier de infecție virală respiratorie",
            "Prezența wheezing-ului expirator difuz",
            "Febra asociată tabloului respirator",
            "Ralurile sibilante bilaterale la auscultația pulmonară",
            "Hepatomegalia și ritmul de galop"
          ],
          "correct": 4,
          "explanation": "Textul precizează că tabloul clinic al IC la sugar (tahipnee, dificultăți de alimentație) poate mima o bronșiolită acută, dar semnele cardiovasculare asociate — hepatomegalia, tahicardia peste valorile vârstei și ritmul de galop — sunt cele care orientează diagnosticul spre insuficiența cardiacă. Wheezing-ul, ralurile sibilante, febra și contextul epidemiologic sunt sugestive pentru o cauză respiratorie, nu cardiacă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 418-422"
        },
        {
          "id": "30-2",
          "stem": "Un sugar cu insuficiență cardiacă prezintă diaforeză marcată la fiecare supt, tahipnee importantă în timpul alimentației și falimentul creșterii, fără simptome prezente în repaus. Conform clasificării Ross a insuficienței cardiace la copil, acest tablou clinic corespunde clasei funcționale:",
          "options": [
            "Clasa II",
            "Clasa I",
            "Clasificarea Ross nu se aplică la sugar",
            "Clasa IV",
            "Clasa III"
          ],
          "correct": 4,
          "explanation": "Conform tabelului de clasificare Ross, clasa III la sugar este definită prin tahipnee marcantă, diaforeză la efortul de supt și falimentul creșterii. Clasa II presupune manifestări mai ușoare (tahipnee ușoară/diaforeză, fără afectarea curbei de creștere), iar clasa IV presupune simptome prezente în repaus, ceea ce nu este cazul aici.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 418-422"
        },
        {
          "id": "30-3",
          "stem": "La un copil cu insuficiență cardiacă cronică decompensată, care dintre următoarele modificări biologice reprezintă un factor de prognostic negativ, sugerând un grad important de retenție volemică?",
          "options": [
            "Hipercreatininemia ușoară, izolată",
            "Leucocitoza moderată",
            "Hiperpotasemia",
            "Creșterea ușoară a transaminazelor",
            "Hiponatremia"
          ],
          "correct": 4,
          "explanation": "Textul menționează explicit că hiponatremia la copilul cu IC indică un grad de retenție volemică și reprezintă un factor de prognostic negativ. Hiperpotasemia este descrisă ca apărând în stadiile avansate prin insuficiență renală de debit cardiac scăzut, dar factorul de prognostic negativ legat de retenția volemică menționat explicit este hiponatremia.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 418-422"
        },
        {
          "id": "30-4",
          "stem": "Un copil de 6 ani se prezintă cu semne de insuficiență cardiacă acută: hipoperfuzie periferică și retenție hidrosalină evidentă (edeme, hepatomegalie, raluri de stază). Care este conduita terapeutică medicamentoasă de primă linie?",
          "options": [
            "Digoxin oral, în doză de întreținere",
            "Inițierea unui inhibitor de enzimă de conversie în doză maximă",
            "Carvedilol, cu titrare rapidă a dozei",
            "Furosemid injectabil, cu monitorizarea TA, electroliților și funcției renale",
            "Milrinonă în perfuzie continuă"
          ],
          "correct": 3,
          "explanation": "Textul precizează că tratamentul medicamentos de primă linie al IC acute cu retenție hidrosalină este diureticul de ansă (furosemid) administrat injectabil, cu monitorizarea TA, electroliților (risc de hipopotasemie și hiponatremie) și a funcției renale. Agenții inotropi precum milrinona se folosesc doar în lipsa răspunsului la diuretice, iar IEC și beta-blocantele nu sunt indicate în faza acută necontrolată.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 418-422"
        },
        {
          "id": "30-5",
          "stem": "Un sugar de 10 luni cu insuficiență cardiacă cronică și disfuncție sistolică de ventricul stâng necesită inițierea terapiei cu inhibitor al enzimei de conversie. Care este molecula recomandată ca primă alegere la această vârstă?",
          "options": [
            "Captopril",
            "Losartan",
            "Enalapril",
            "Perindopril",
            "Ramipril"
          ],
          "correct": 0,
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
            "Administrare intramusculară de vitamină D, considerată superioară administrării orale pentru refacerea rezervelor de 25(OH)D",
            "Administrare de calcitriol [1,25(OH)2D] ca tratament de primă linie al deficitului de vitamină D",
            "Administrare de calciferol (D2 sau D3) 2.000 UI/zi, pe cale orală, timp de 8 săptămâni",
            "Continuarea dozei profilactice de 400 UI/zi de vitamină D, fără alte măsuri suplimentare",
            "Administrare a unei doze unice mari de vitamină D („stoss therapy”) pentru asigurarea complianței terapeutice"
          ],
          "correct": 2,
          "explanation": "Tratamentul curativ al rahitismului nutrițional la sugarii 0-6 luni constă în calciferol 2.000 UI/zi, oral, timp de 8 săptămâni. Doza unică mare („stoss therapy”) nu este recomandată din cauza riscului de hipercalcemie, iar derivații 1-alfa-hidroxilați (calcitriol) nu sunt indicați în tratamentul de rutină. Administrarea orală este preferată deoarece restabilește mai rapid rezervele de 25(OH)D comparativ cu cea intramusculară.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1161-1164"
        },
        {
          "id": "31-2",
          "stem": "Adolescentă de 15 ani se prezintă în urgență cu parestezii periorale, spasm carpal și anxietate marcată, instalate în timpul unui episod de plâns intens, cu hiperventilație. Calcemia recoltată de urgență este în limite normale. Care este explicația fiziopatologică cea mai probabilă a tabloului clinic?",
          "options": [
            "Hipoparatiroidism funcțional indus acut de stresul emoțional",
            "Alcaloza respiratorie indusă de hiperventilație, care poate produce tetanie chiar în absența hipocalcemiei",
            "Hipomagneziemie acută secundară hiperventilației",
            "Hipocalcemie tranzitorie, nedetectabilă prin dozarea calciului total",
            "Acidoză metabolică secundară hiperventilației, cu pierderea efectului protector asupra excitabilității neuromusculare"
          ],
          "correct": 1,
          "explanation": "Textul menționează explicit că alcaloza respiratorie produsă prin hiperventilație poate determina tetanie chiar în absența hipocalcemiei, prin creșterea legării calciului de albumină și scăderea fracției ionizate. Semnul Trousseau poate fi indus voluntar prin hiperventilație, ceea ce confirmă acest mecanism.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1152-1153"
        },
        {
          "id": "31-3",
          "stem": "Sugar de 10 luni cu semne radiologice de rahitism (metafize lărgite, cu aspect neregulat) prezintă la bilanțul biologic: calciu seric normal, fosfat seric scăzut, fosfatază alcalină crescută, PTH în limite normale. Care este cea mai probabilă formă etiopatogenică de rahitism?",
          "options": [
            "Rahitism calcipenic prin deficit alimentar de calciu, cu hiperparatiroidism secundar",
            "Rahitism prin deficit de 1-alfa-hidroxilază, cu PTH crescut compensator",
            "Rahitism dependent de vitamina D tip II, cu rezistență la acțiunea vitaminei D și PTH crescut",
            "Rahitism calcipenic prin deficit de vitamină D, la care PTH este invariabil crescut",
            "Rahitism fosfopenic (de exemplu hipofosfatemic), la care nivelul PTH este frecvent normal"
          ],
          "correct": 4,
          "explanation": "Conform textului, nivelul PTH este un element biologic esențial pentru diagnosticul diferențial: este invariabil crescut în rahitismul calcipenic și frecvent normal în rahitismul fosfopenic. Asocierea calciu normal, fosfat scăzut și PTH normal orientează spre o formă fosfopenică, nu spre una calcipenică (în care PTH ar fi crescut).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1161-1164"
        },
        {
          "id": "31-4",
          "stem": "Copil de 2 ani, provenit dintr-o zonă geografică cu prevalență crescută a sindroamelor talasemice, prezintă o anemie microcitară hipocromă ușoară, cu aspect clinic altfel normal. Care dintre următoarele seturi de rezultate paraclinice orientează diagnosticul spre beta-talasemie minoră (heterozigotă) și nu spre anemie feriprivă?",
          "options": [
            "Capacitate totală de legare a fierului crescută, cu receptor solubil al transferinei crescut",
            "Sideremie normală, cu niveluri crescute de HbA2 și HbF",
            "Feritinemie scăzută sub 35 ng/L, cu sideremie scăzută",
            "Protoporfirină eritrocitară liberă foarte mult crescută, cu plumburie crescută",
            "RDW și HDW crescute, cu hematii „palide” pe frotiul de sânge periferic"
          ],
          "correct": 1,
          "explanation": "Beta-talasemia minoră (heterozigotă) se caracterizează prin anemie ușoară, microcitară și normosideremică, cu HbA2 și HbF crescute, spre deosebire de anemia feriprivă, în care feritina și sideremia sunt scăzute, iar capacitatea de legare a fierului și receptorul solubil al transferinei sunt crescute. Protoporfirina liberă crescută cu plumburie crescută este caracteristică intoxicației cu plumb, alt diagnostic diferențial al anemiei microcitare.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1190-1194"
        },
        {
          "id": "31-5",
          "stem": "Copil de 6 ani cu anemie macrocitară prezintă parestezii la nivelul extremităților, ataxie și diminuarea reflexelor osteotendinoase. Înainte de inițierea tratamentului cu acid folic, care este măsura obligatorie?",
          "options": [
            "Excluderea unei hemoglobinopatii prin electroforeza hemoglobinei",
            "Administrarea empirică simultană de acid folic și vitamină B12, fără alte investigații",
            "Excluderea deficitului de vitamină B12, deoarece acidul folic nu ameliorează simptomele neurologice și le poate agrava",
            "Efectuarea testului Schilling pentru documentarea unui deficit alimentar de acid folic",
            "Determinarea nivelului seric de fier și feritină, pentru excluderea unei anemii feriprive asociate"
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
            "Debut al unei leucemii acute limfoblastice",
            "Sindrom hemolitic-uremic asociat infecției",
            "Criză aplastică prin infecție cu parvovirus B19",
            "Anemie megaloblastică asociată, prin deficit de acid folic",
            "Criză de deglobulizare (hemolitică), prin accentuarea hemolizei declanșată de infecție"
          ],
          "correct": 4,
          "explanation": "În sferocitoza ereditară, infecțiile (virale sau bacteriene), stresul emoțional, frigul sau efortul fizic pot declanșa crize de deglobulizare, manifestate prin febră, dureri abdominale, accentuarea icterului și palorii, urină hipercromă și agravarea anemiei cu reticulocite crescute. Acestea se diferențiază de crizele aplastice (asociate infecției cu parvovirus B19), în care agravarea anemiei se însoțește de reticulopenie, nu de reticulocitoză. Prezența reticulocitozei (12%) în acest caz susține criza hemolitică, nu cea aplastică.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1194-1201"
        },
        {
          "id": "32-2",
          "stem": "Un băiat de 4 ani, fără antecedente semnificative, dezvoltă la 36 de ore de la administrarea de cotrimoxazol pentru o infecție urinară icter intens, urini hipercrome și paloare accentuată. Frotiul de sânge periferic evidențiază corpi Heinz. Care este mecanismul fiziopatologic cel mai probabil implicat?",
          "options": [
            "Deficit de glucozo-6-fosfat-dehidrogenază, cu precipitarea hemoglobinei oxidate în interiorul hematiei",
            "Defect de sinteză a spectrinei membranare eritrocitare",
            "Deficit de piruvatkinază cu alterarea glicolizei anaerobe",
            "Prezența de autoanticorpi IgG la cald pe suprafața hematiilor",
            "Mutație somatică a genei PIG-A cu hemoliză mediată de complement"
          ],
          "correct": 0,
          "explanation": "Cotrimoxazolul (sulfamidele) figurează pe lista medicamentelor cu potențial oxidant care declanșează hemoliză la pacienții cu deficit de G6PD, tipic la 24-48 de ore de la expunere. Hemoliza se datorează precipitării hemoglobinei oxidate sub formă de corpi Heinz, vizibili pe frotiu doar în primele 3-4 zile, deoarece hematiile care îi conțin sunt rapid îndepărtate din circulație. Boala este recesivă, legată de cromozomul X, motiv pentru care afectează tipic sexul masculin.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1194-1201"
        },
        {
          "id": "32-3",
          "stem": "Un copil de 7 ani cu sferocitoză ereditară formă medie (moderată), fără dependență transfuzională, este evaluat pentru indicația de splenectomie. Care dintre următoarele afirmații este corectă?",
          "options": [
            "Vaccinarea antipneumococică se recomandă doar după splenectomie, nu înainte",
            "Splenectomia totală este preferată la această vârstă, deoarece riscul infecțios este mai scăzut după vârsta de 6 ani, cu condiția vaccinării antipneumococice, anti-Hib și antimeningococice în prealabil",
            "Splenectomia parțială este obligatorie la toți pacienții, indiferent de vârstă",
            "Splenectomia este contraindicată înainte de vârsta de 10 ani, indiferent de forma clinică",
            "Splenectomia nu influențează evoluția bolii, sferocitoza eritrocitară dispărând spontan postoperator"
          ],
          "correct": 1,
          "explanation": "Conform textului, splenectomia (totală sau parțială) este indicată la vârsta peste 6 ani, preferându-se splenectomia totală, deoarece riscul infecțios este mai scăzut după această vârstă; la copiii sub 1 an, dependenți de transfuzii sau cu anemie severă, se preferă splenectomia parțială. Anterior splenectomiei, pacienții trebuie vaccinați antipneumococic, anti-Hib și antimeningococic. Postsplenectomie icterul dispare și Hb se corectează, dar sferocitoza eritrocitară persistă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1194-1201"
        },
        {
          "id": "32-4",
          "stem": "Un copil de 3 ani cu beta-talasemie majoră (anemia Cooley), aflat sub program transfuzional regulat, are valori ale feritinei serice de peste 2000 ng/mL. Care este conduita terapeutică indicată în acest moment?",
          "options": [
            "Exsangvinotransfuzie repetată la interval de 2 săptămâni",
            "Întreruperea transfuziilor până la normalizarea feritinei",
            "Inițierea terapiei chelatoare de fier (desferoxamină, deferipironă sau deferasirox), cu scopul menținerii feritinei sub 1000 ng/mL",
            "Splenectomie de urgență, indiferent de dimensiunea splinei",
            "Administrare de fier oral pentru corectarea rapidă a anemiei"
          ],
          "correct": 2,
          "explanation": "În beta-talasemia majoră, fierul acumulat din absorbția intestinală crescută și din transfuziile repetate determină hemosideroză cu afectare hepatică, cardiacă și endocrină. De aceea, chelarea cu desferoxamină, deferipironă sau deferasirox se începe de la vârsta de 2-4 ani, concomitent cu transfuziile, cu scopul menținerii feritinei sub 1000 ng/mL. Fierul oral este contraindicat, iar transfuziile regulate reprezintă tratamentul de bază, nu trebuie întrerupte.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1194-1201"
        },
        {
          "id": "32-5",
          "stem": "O adolescentă de 14 ani dezvoltă, în contextul unei infecții recente cu Mycoplasma pneumoniae, paloare, fenomene de acrocianoză/tip Raynaud la expunerea la frig și urini hipercrome. Testul Coombs direct este pozitiv doar pentru fracțiuni ale complementului, fără IgG detectabil. Care este mecanismul fiziopatologic cel mai probabil?",
          "options": [
            "Mutație a genei PIG-A cu pierderea proteinelor ancorate la suprafața hematiei",
            "Anticorpi IgG la cald, care opsonizează hematiile fără a activa complet complementul, determinând hemoliză extravasculară splenică",
            "Anticorpi IgM la rece, care aglutinează hematiile și activează complementul până la C9, cu hemoliză intravasculară",
            "Defect al proteinelor de membrană eritrocitară (spectrină), agravat de infecție",
            "Deficit ereditar de piruvatkinază declanșat de infecție"
          ],
          "correct": 2,
          "explanation": "Anemia hemolitică cu anticorpi la rece este frecvent secundară infecției cu Mycoplasma pneumoniae sau virusului Epstein-Barr. Anticorpii sunt de tip IgM, compleți, care aglutinează hematiile la temperaturi scăzute și activează complementul până la C9, producând hemoliză intravasculară; deoarece IgM se disociază de hematii în regiunile mai calde ale corpului, testul Coombs evidențiază ulterior doar fracțiunile complementului. Pacienții prezintă tipic fenomene Raynaud sau acrocianoză la expunerea la frig.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1194-1201"
        }
      ]
    },
    {
      "num": 33,
      "title": "Sindroame hemoragice: trombocitopenii, trombocitopatii, coagulopatii, CID, fibrinoliza acută, trombozele venoase și arteriale",
      "questions": [
        {
          "id": "33-1",
          "stem": "Un copil în vârstă de 4 ani este adus la camera de gardă pentru apariția bruscă, la 2 săptămâni după un episod febril viral, a unor echimoze și peteșii cu dispoziție „haotică” pe tegumente, fără alte acuze. Hemoleucograma arată trombocite = 18.000/mm3, cu leucocite, formulă leucocitară, hemoglobină și reticulocite normale, iar frotiul de sânge periferic este normal. Se suspectează purpură trombocitopenică imună (PTI). Care dintre următoarele elemente, dacă ar fi prezent la examenul clinic, ar impune excluderea diagnosticului de PTI necomplicată și căutarea unei alte cauze de trombocitopenie?",
          "options": [
            "Echimoze la nivelul membrelor inferioare",
            "Epistaxis moderat",
            "Peteșii la nivelul mucoasei bucale",
            "Splenomegalie",
            "Gingivoragii minore"
          ],
          "correct": 3,
          "explanation": "În PTI necomplicată, în afara purpurei și a sângerărilor mucoase, examenul clinic este normal, iar copilul nu arată bolnav, lipsind adenopatiile și splenomegalia. Prezența splenomegaliei (alături de adenopatii sau hepatomegalie) ridică suspiciunea de leucemie, limfom sau altă boală de fond, impunând investigații suplimentare.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1202-1206"
        },
        {
          "id": "33-2",
          "stem": "Un sugar cu hemofilie A formă severă (activitate FVIII sub 1%), cu greutatea de 10 kg, prezintă o hemartroză acută la nivelul genunchiului. Se dorește obținerea unui nivel plasmatic al factorului VIII de 40%, știind că activitatea actuală a pacientului este considerată practic 0%. Conform formulei uzuale de calcul a dozei de substituție în hemofilia A (fiecare unitate de FVIII/kg crește nivelul plasmatic cu aproximativ 2%), câte unități de factor VIII trebuie administrate?",
          "options": [
            "40 UI",
            "200 UI",
            "800 UI",
            "100 UI",
            "400 UI"
          ],
          "correct": 1,
          "explanation": "Numărul de unități de FVIII de administrat se calculează astfel: (nivel țintă - nivel actual) x greutatea (kg)/2, deoarece fiecare unitate de FVIII infuzată pe kilogram crește nivelul plasmatic cu aproximativ 2%. În acest caz: (40-0) x 10/2 = 200 UI.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1202-1206"
        },
        {
          "id": "33-3",
          "stem": "O adolescentă cunoscută cu boală von Willebrand tip 2B este programată pentru o intervenție chirurgicală minoră. Din cauza mecanismului particular al bolii (mutații care cresc afinitatea factorului von Willebrand pentru glicoproteina Ib plachetară, cu formarea de agregate și clearance crescut al complexului FvW-trombocite), un anumit tratament este relativ contraindicat, deoarece poate agrava trombocitopenia. Care este acest tratament?",
          "options": [
            "Acidul tranexamic",
            "Plasma proaspătă congelată",
            "Concentratul de FVIII îmbogățit cu factor von Willebrand",
            "Transfuzia de masă trombocitară",
            "Desmopresina (DDAVP)"
          ],
          "correct": 4,
          "explanation": "În boala von Willebrand tip 2B, desmopresina (1-desamino-8D-arginina vasopresină) determină eliberarea factorului von Willebrand anormal, cu risc de inducere a unor agregate trombocitare și de agravare a trombocitopeniei, motiv pentru care se recomandă evitarea ei în acest subtip, tratamentul de elecție fiind concentratul de FVIII-FvW.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 512-519"
        },
        {
          "id": "33-4",
          "stem": "Un copil cu sepsis sever dezvoltă peteșii cu caracter necrotic la nivelul pulpei degetelor și al pavilioanelor urechilor, sângerări la locurile de puncție venoasă și șoc progresiv. Se suspectează coagulare intravasculară diseminată (CID) în faza de coagulopatie de consum. Care dintre următoarele modificări NU corespunde tabloului biologic tipic descris pentru această fază a CID?",
          "options": [
            "Fibrinogen sub 1,5 g/L",
            "Trombocite sub 100.000/mm3",
            "Scurtarea timpului parțial de tromboplastină activată (APTT)",
            "Prezența D-dimerilor",
            "Factor V sub 50%"
          ],
          "correct": 2,
          "explanation": "Constelația tipică a CID în faza de coagulopatie de consum este: fibrinogen sub 1,5 g/L, trombocite sub 100.000/mm3, factor V sub 50%, produși de degradare a fibrinei peste 10 μg/ml și D-dimeri prezenți. Timpul parțial de tromboplastină activată este crescut (TPTA > 1,5xN), nu scăzut, deoarece factorii de coagulare sunt consumați.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 525-529"
        },
        {
          "id": "33-5",
          "stem": "Un adolescent de 16 ani se prezintă cu al treilea episod de tromboză venoasă profundă a membrului inferior, fără factor declanșator identificabil (fără imobilizare, traumatism, cateter venos sau tratament trombogen recent). Conform criteriilor menționate pentru orientarea investigării unei trombofilii ereditare, această situație clinică justifică efectuarea unui bilanț complet de trombofilie. Care dintre următoarele situații, în schimb, NU reprezintă în mod obișnuit o indicație pentru un astfel de screening amplu?",
          "options": [
            "Tromboembolism neprovocat la vârstă tânără",
            "Tromboză cu sediu neobișnuit",
            "Tromboză venoasă profundă recurentă, neprovocată",
            "Antecedente familiale pozitive pentru tromboză",
            "Tromboză venoasă superficială apărută la locul unei cateterizări venoase centrale, la un copil altfel sănătos"
          ],
          "correct": 4,
          "explanation": "Screeningul pentru trombofilie ereditară este indicat în prezența anamnezei familiale pozitive, a trombembolismului neprovocat la vârstă tânără, a trombozei recurente sau cu sediu neobișnuit. Un screening al tuturor persoanelor cu tromboză provocată de factori dobândiți precum cateterizarea venoasă centrală nu este justificat, aceasta fiind încadrată drept condiție dobândită predispozantă, nu o indicație pentru bilanț extins de trombofilie ereditară.",
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
            "Utilizarea de sânge integral neiradiat, indiferent de vechimea recoltării",
            "Utilizarea concentratului eritrocitar cu buffy-coat, fără adaos de plasmă proaspătă congelată",
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
            "Indicație de transfuzie eritrocitară suplimentară",
            "Semn de coagulare intravasculară diseminată activă",
            "Caracter refractar al transfuziei trombocitare",
            "Răspuns transfuzional normal, eficient",
            "Formă acută de purpură trombocitopenică imună"
          ],
          "correct": 2,
          "explanation": "Valori ale incrementului corectat mai mici de 7,5 la o oră și sub 4,5 la 24 de ore definesc caracterul refractar al trombocitopeniei la transfuzie. Valorile din vignetă (5 la 1 oră și 3 la 24 de ore) se situează sub aceste praguri.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 480-486"
        },
        {
          "id": "34-3",
          "stem": "Un copil anemic, normovolemic, are Hb 7 g/dl și prezintă insuficiență cardiacă asociată (factor de risc), fără semne evidente de hipoxie anemică. Conform indicațiilor de transfuzie eritrocitară în anemia acută, care este conduita adecvată?",
          "options": [
            "Doar monitorizare clinică, fără nicio intervenție transfuzională",
            "Transfuzie eritrocitară indicată, dat fiind că este vorba de o compensare limitată în prezența unui factor de risc",
            "Administrare de plasmă proaspătă congelată ca alternativă la masa eritrocitară",
            "Abținere de la transfuzie, deoarece Hb este peste pragul de 6 g/dl",
            "Transfuzie de concentrat trombocitar în locul celui eritrocitar"
          ],
          "correct": 1,
          "explanation": "Pentru valori ale Hb de 6-8 g/dl, transfuzia este indicată atunci când compensarea este limitată de prezența unor factori de risc precum insuficiența cardiacă, spre deosebire de situația compensării adecvate fără factori de risc, când transfuzia nu este indicată la aceleași valori ale Hb.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 480-486"
        },
        {
          "id": "34-4",
          "stem": "Un nou-născut aflat sub ventilație asistată, în prima zi de viață, are un hematocrit de 38%. Conform indicațiilor de transfuzie eritrocitară la nou-născut și sugarul sub 4 luni, care este conduita corectă?",
          "options": [
            "Nu se indică transfuzie, deoarece Ht este apropiat de valoarea normală medie pentru vârstă",
            "Transfuzie indicată doar dacă Ht scade sub 25%, indiferent de statusul respirator",
            "Transfuzie eritrocitară indicată, întrucât Ht este sub pragul de 40% pentru ziua 1 de viață la un nou-născut cu necesar de ventilație asistată",
            "Se recomandă exclusiv administrare de eritropoietină, fără transfuzie",
            "Transfuzie indicată numai în cazul unei intervenții chirurgicale programate"
          ],
          "correct": 2,
          "explanation": "Pentru ziua 1 de viață, valoarea medie normală a Ht este 56%, iar pragul sub care se indică transfuzia este 40%; prezența ventilației asistate este una dintre condițiile care susțin indicația de transfuzie. Un Ht de 38% la un nou-născut ventilat se situează sub acest prag.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 480-486"
        },
        {
          "id": "34-5",
          "stem": "Un pacient aflat în tratament cronic cu antivitamine K (AVK) necesită o intervenție chirurgicală de urgență. Care produs de sânge este recomandat pentru corectarea rapidă a coagulării în această situație?",
          "options": [
            "Masa eritrocitară deleucocitată",
            "Crioprecipitatul (concentrat de FVIII, FvW, fibrinogen)",
            "Concentratul granulocitar",
            "Concentratul PPSB (concentrat de FII, FVII, FIX, FX)",
            "Albumina umană"
          ],
          "correct": 3,
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
            "Bacteriurie asimptomatică recurentă",
            "ITU nevindecată",
            "ITU cronică complicată cu factor obstructiv",
            "Reinfecție fără semnificație clinică, deoarece urina a fost sterilă între episoade"
          ],
          "correct": 0,
          "explanation": "ITU recurentă se definește, printre altele, prin prezența a cel puțin două episoade de pielonefrită acută la același pacient, urina fiind sterilă între episoade. ITU nevindecată presupune persistența infecției (rezistență la antibiotic, necomplianță sau factori care interferă cu concentrația urinară a antibioticului), nu sterilizarea urinei între episoade.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 599-605"
        },
        {
          "id": "35-2",
          "stem": "Sugar de 8 luni, cu antecedente de infecții urinare recurente, necesită confirmarea prin urocultură a unui nou episod de ITU, fiind esențială eliminarea riscului de contaminare a probei. Care este metoda de recoltare a urinei considerată standard de aur în acest context, conform ghidurilor pediatrice americane?",
          "options": [
            "Puncția vezicală suprapubiană",
            "Colectorul steril (punga din plastic atașată)",
            "Tampoane speciale pentru colectarea urinei",
            "Cateterismul vezical",
            "Recoltarea din mijlocul jetului urinar"
          ],
          "correct": 0,
          "explanation": "Puncția vezicală suprapubiană este considerată metoda standard pentru diagnosticul ITU recidivante la copiii sub 2 ani, deoarece nu există riscul contaminării. Colectorul steril, deși simplu și puțin traumatizant, are o rată de rezultate fals pozitive de 85-90%, iar cateterismul vezical este invaziv și presupune risc de introducere a unor microorganisme.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 599-605"
        },
        {
          "id": "35-3",
          "stem": "O fetiță de 6 ani se prezintă cu disurie și polakiurie. Examenul de urină pe bandeletă arată esterază leucocitară pozitivă, dar testul nitriților este negativ. Urocultura ulterioară evidențiază Staphylococcus saprophyticus. Care este explicația cea mai probabilă pentru rezultatul negativ al testului nitriților în acest caz?",
          "options": [
            "Contactul prelungit dintre urină și bacterii determină degradarea nitriților formați",
            "Bacteriile Gram-pozitive nu sintetizează nitritoxidaza, enzima necesară transformării nitraților urinari în nitriți",
            "Leucocituria asociată inhibă reacția chimică de detectare a nitriților pe bandeletă",
            "Testul nitriților este util doar pentru diagnosticul bacteriuriei asimptomatice",
            "Concentrația urinară crescută de proteine interferă cu reacția testului nitriților"
          ],
          "correct": 1,
          "explanation": "Testul nitriților se bazează pe capacitatea bacteriilor de a sintetiza nitritoxidaza, enzimă care transformă nitrații urinari în nitriți. Bacteriile Gram-pozitive, precum Staphylococcus saprophyticus, nu sintetizează această enzimă, motiv pentru care testul este negativ chiar în prezența unei infecții urinare reale.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 599-605"
        },
        {
          "id": "35-4",
          "stem": "Un copil de 4 ani prezintă al treilea episod de cistită, documentat prin urocultură pozitivă; ecografia renală este normală. Care este conduita corectă privind investigarea unui eventual reflux vezicoureteral la acest pacient?",
          "options": [
            "Nu se recomandă uretrocistografia micțională; se preferă efectuarea ecografiei asociate cu scintigrafia renală",
            "Se efectuează uretrocistografie micțională de urgență, indiferent de vârstă",
            "Se recomandă puncție vezicală suprapubiană pentru reconfirmarea diagnosticului de ITU",
            "Se indică uro-RMN cu substanță de contrast ca primă investigație imagistică",
            "Nu este necesară nicio investigație suplimentară, fiind suficientă o ecografie renală normală"
          ],
          "correct": 0,
          "explanation": "Uretrocistografia micțională nu este indicată la copiii de peste 3 ani, chiar în caz de ITU recurentă; în această situație se efectuează ecografie asociată cu scintigrafie renală. Uretrocistografia micțională rămâne indicată doar la sugarii sub 6 luni cu ITU recurentă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 599-605"
        },
        {
          "id": "35-5",
          "stem": "Care dintre următoarele situații NU reprezintă, prin ea însăși, o indicație de spitalizare la un copil cu infecție de tract urinar?",
          "options": [
            "Vărsături persistente, cu imposibilitatea tolerării lichidelor pe cale orală",
            "Stare toxică",
            "Vârstă mai mare de 6 luni, fără alte semne de severitate asociate",
            "Deshidratare medie sau severă",
            "Prezența unei obstrucții de tract urinar"
          ],
          "correct": 2,
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
            "Gradul III",
            "Gradul II",
            "Gradul I",
            "Gradul V",
            "Gradul IV"
          ],
          "correct": 4,
          "explanation": "Gradul IV se caracterizează prin dilatarea ureterului, a bazinetului și a calicelor, fără tortuozitate marcată a ureterului, aceasta din urmă fiind caracteristică gradului V. Gradele IV și V sunt denumite \"reflux de dilatare\", ambele necesitând o rată de rezoluție spontană mult mai mică decât gradele mici.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 607-610"
        },
        {
          "id": "36-2",
          "stem": "Un copil de 3 ani cu VUR de grad III, diagnosticat după o pielonefrită acută, este menținut sub profilaxie antibiotică continuă cu doză mică, fără intervenție chirurgicală. Care dintre următoarele afirmații privind managementul medical conservator al VUR este corectă?",
          "options": [
            "Administrarea intermitentă a antibioticului este superioară administrării continue în prevenirea apariției de noi leziuni renale",
            "Administrarea continuă a profilaxiei antibiotice este mai eficientă decât administrarea intermitentă pentru prevenirea de noi leziuni renale",
            "Profilaxia antibiotică trebuie întreruptă imediat ce copilul devine asimptomatic, indiferent de gradul refluxului",
            "Refluxul steril determină leziuni renale progresive chiar și în absența disfuncției vezicale",
            "Managementul chirurgical precoce s-a dovedit superior celui medical în privința cicatrizării renale, conform Studiului Internațional de Reflux la Copii"
          ],
          "correct": 1,
          "explanation": "Administrarea continuă a profilaxiei cu antibiotic este mai bună decât administrarea intermitentă pentru prevenirea de noi leziuni renale la pacienții tratați conservator. Studiul Internațional de Reflux la Copii nu a găsit niciun avantaj al tratamentului chirurgical față de cel medical privind cicatrizarea sau funcția renală, iar refluxul steril nu produce leziuni renale la pacienții cu funcție vezicală normală.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 607-610"
        },
        {
          "id": "36-3",
          "stem": "Un nou-născut de sex masculin este diagnosticat cu valvă de uretră posterioară și VUR bilateral asociat cu golire vezicală sever disfuncțională. Care este conduita chirurgicală recomandată în acest context?",
          "options": [
            "Reimplantare ureterovezicală bilaterală, efectuată imediat după ablația valvei",
            "Cistoplastie de augmentare, efectuată concomitent cu ablația valvei",
            "Nefrostomie bilaterală definitivă, fără altă intervenție ulterioară",
            "Injectare subureterală endoscopică de hidrogel, ca primă opțiune terapeutică",
            "Vezicostomie, intervenția antireflux fiind rezervată doar după o evaluare atentă ulterioară"
          ],
          "correct": 4,
          "explanation": "Chirurgia antireflux trebuie efectuată numai după o evaluare atentă la pacienții cu valvă de uretră posterioară, vezică neurogenă sau golire disfuncțională severă. La acești pacienți, vezicostomia este, de obicei, o opțiune mai bună decât intervenția antireflux imediată.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 607-610"
        },
        {
          "id": "36-4",
          "stem": "La ecografia antenatală efectuată la 30 de săptămâni de gestație se constată o dilatație a bazinetului renal fetal de 22 mm. Care este semnificația prognostică a acestei valori?",
          "options": [
            "Risc scăzut (aproximativ 3%) de răsunet clinic postnatal",
            "Valoarea nu are nicio semnificație prognostică, doar aspectul parenchimului contează",
            "Reprezintă o indicație absolută de întrerupere a sarcinii",
            "Indică cu certitudine un reflux vezicoureteral, excluzând o cauză obstructivă",
            "Risc crescut (aproximativ 94%) de răsunet clinic postnatal"
          ],
          "correct": 4,
          "explanation": "O dilatație intrauterină a bazinetului mai mare de 20 mm se asociază cu o rată crescută a răsunetului clinic postnatal (94%), spre deosebire de dimensiunile sub 10 mm, care au o rată de doar 3%. Diferențierea intrauterină între cauzele obstructive și cele neobstructive nu este posibilă, cu excepția valvei de uretră posterioară.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 612-618"
        },
        {
          "id": "36-5",
          "stem": "Un nou-născut de 2 săptămâni cu hidronefroză stângă diagnosticată antenatal efectuează o scintigrafie renală cu MAG3 și test diuretic cu furosemid pentru a diferenția o dilatare obstructivă de una neobstructivă. Testul nu arată un răspuns concludent la furosemid. Care este interpretarea corectă a acestui rezultat?",
          "options": [
            "Spălarea întârziată a radiotrasorului confirmă întotdeauna diagnosticul de obstrucție, indiferent de vârstă",
            "Rezultatul neconcludent poate fi explicat prin imaturitatea funcțională nefronală specifică primelor patru săptămâni de viață, iar testul trebuie interpretat cu prudență",
            "MAG3 este contraindicat la nou-născuți din cauza toxicității renale",
            "Testul diuretic trebuie repetat imediat cu DMSA pentru a obține un rezultat interpretabil",
            "Absența răspunsului exclude cu certitudine o uropatie obstructivă la această vârstă"
          ],
          "correct": 1,
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
            "Glomerulonefrită membranoproliferativă",
            "Glomerulonefrită acută post-streptococică",
            "Nefrita lupică",
            "Nefropatia IgA (boala Berger)",
            "Sindrom Goodpasture"
          ],
          "correct": 3,
          "explanation": "În nefropatia IgA, hematuria macroscopică episodică se instalează caracteristic în primele 2-3 zile de la debutul unei infecții respiratorii acute (hematurie sincronă infecției). În GNAPS, dimpotrivă, există o perioadă de latență asimptomatică de aproximativ 2-3 săptămâni (până la 4-6 săptămâni în infecțiile cutanate) între infecția streptococică și debutul nefropatiei. C3 este normal în nefropatia IgA, spre deosebire de GNAPS unde este scăzut la peste 90% din cazuri.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 629-637"
        },
        {
          "id": "37-2",
          "stem": "Un copil de 6 ani este investigat pentru hematurie. Se constată: debut la 3 săptămâni după o infecție cutanată streptococică, oligurie, densitate urinară normală, iar examinarea ecografică renală arată rinichi de dimensiuni normale. Aceste elemente clinico-paraclinice pledează cel mai mult pentru:",
          "options": [
            "Glomerulonefrită acută",
            "Rinichi polichistic",
            "Sindrom nefrotic cu leziuni minime",
            "Glomerulonefrită cronică",
            "Nefropatie de reflux"
          ],
          "correct": 0,
          "explanation": "Textul precizează explicit criteriile de diagnostic diferențial: pledează pentru GNA debutul postinfecțios (la interval de minimum două săptămâni), oliguria, densitatea urinară normală și dimensiunea normală a rinichilor la ecografie. Pentru GNC ar pleda instalarea hematuriei în cursul infecțiilor acute, poliuria, densitatea urinară scăzută și rinichii mici, hiperecogeni.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 629-637"
        },
        {
          "id": "37-3",
          "stem": "Un copil diagnosticat cu glomerulonefrită acută post-streptococică prezintă, la 8 săptămâni de la debut, valori persistent scăzute ale complementului C3 seric, care nu s-au normalizat. Conform conduitei descrise, această situație reprezintă o indicație pentru:",
          "options": [
            "Amigdalectomie",
            "Corticoterapie orală prelungită, fără investigații suplimentare",
            "Repetarea tratamentului antibiotic cu benzatin penicilină pe termen lung",
            "Inițierea de urgență a epurării extrarenale",
            "Puncție-biopsie renală"
          ],
          "correct": 4,
          "explanation": "Puncția-biopsie renală nu este recomandată de rutină în GNA, ci doar în situații particulare: titru ASO normal, C3 normal sau C3 scăzut peste 6-8 săptămâni, retenție azotată cu clearance al creatininei sub 30 ml/min/s.c. sau hematurie recurentă. Persistența hipocomplementemiei peste 6-8 săptămâni ridică suspiciunea unei alte forme de GN și impune biopsia.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 629-637"
        },
        {
          "id": "37-4",
          "stem": "O fetiță de 5 ani prezintă purpură cutanată la nivelul membrelor inferioare, dureri abdominale colicative și hematurie microscopică, tabloul fiind sugestiv pentru purpura Henoch-Schönlein cu afectare renală. Complementul seric C3 este dozat și se constată valori normale. Cum trebuie interpretat acest rezultat?",
          "options": [
            "Indică o glomerulonefrită postinfecțioasă activă",
            "Sugerează o endocardită infecțioasă asociată",
            "Este un rezultat tipic, purpura Henoch-Schönlein neasociindu-se de regulă cu hipocomplementemie",
            "Exclude diagnosticul de nefrită din purpura Henoch-Schönlein",
            "Este caracteristic nefritei lupice active"
          ],
          "correct": 2,
          "explanation": "Fracțiunea C3 a complementului are valori normale în poliarterita nodoasă, purpura Henoch-Schönlein, nefropatia IgA, GNRP, sindromul Goodpasture sau sindromul Alport. În schimb, C3 este scăzut în GN postinfecțioasă, GN membranoproliferativă, endocardita infecțioasă, nefrita de șunt, nefrita lupică și crioglobulinemia mixtă esențială.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 629-637"
        },
        {
          "id": "37-5",
          "stem": "Un adolescent cu nefropatie IgA confirmată bioptic prezintă proteinurie de 1,5 g/24 ore, persistentă de 4 luni sub tratament cu inhibitor al enzimei de conversie, fără declin rapid al funcției renale și fără semilune extinse la examenul histopatologic. Conform conduitei terapeutice descrise, această situație reprezintă o indicație pentru:",
          "options": [
            "Rituximab, ca terapie de primă linie",
            "Tratament imunosupresor, cu glucocorticosteroizi ca primă intenție",
            "Transplant renal preventiv",
            "Amigdalectomie, ca primă măsură terapeutică",
            "Doar restricție dietetică de sodiu, fără altă intervenție terapeutică"
          ],
          "correct": 1,
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
            "Hipertensiunea arterială",
            "Hematuria macroscopică",
            "Hiperlipidemia",
            "Prezența edemelor generalizate",
            "Retenția azotată"
          ],
          "correct": 2,
          "explanation": "Textul precizează explicit că, pentru a susține diagnosticul pozitiv de sindrom nefrotic, trebuie demonstrate trei criterii: proteinurie de rang nefrotic, hipoalbuminemie și hiperlipidemie. Hematuria, hipertensiunea și retenția azotată reprezintă criterii de impurificare, nu criterii diagnostice obligatorii. Edemul, deși frecvent prezent (95% din cazuri), nu figurează printre cele trei criterii enumerate la diagnosticul pozitiv.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1322-1331"
        },
        {
          "id": "38-2",
          "stem": "Un copil cu sindrom nefrotic primitiv primește tratament cu prednison 60 mg/m2/zi, zilnic, timp de 5 săptămâni, fără a intra în remisiune. Cum se clasifică acest răspuns terapeutic conform textului?",
          "options": [
            "Sindrom nefrotic corticodependent",
            "Sindrom nefrotic corticorezistent",
            "Sindrom nefrotic corticosensibil cu remisiune întârziată",
            "Sindrom nefrotic impur",
            "Sindrom nefrotic cu recăderi frecvente"
          ],
          "correct": 1,
          "explanation": "Sindromul nefrotic corticorezistent este definit ca inabilitatea de a induce remisiunea în 4 săptămâni de corticoterapie zilnică cu 60 mg/m2/zi; textul precizează că absența răspunsului la prednison în primele 30 de zile de administrare susține această încadrare. Corticodependența presupune recăderea în timpul reducerii dozei sau în primele săptămâni de la oprirea corticoterapiei, situație diferită de lipsa oricărui răspuns inițial.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1322-1331"
        },
        {
          "id": "38-3",
          "stem": "Conform recomandărilor KDIGO 2012 citate în text, la care dintre următorii copii cu sindrom nefrotic nou diagnosticat se poate iniția corticoterapia înaintea efectuării biopsiei renale?",
          "options": [
            "Copil de 5 ani, cu funcție renală normală, fără hematurie macroscopică, fără semne de boală sistemică, complement seric normal și screening viral negativ",
            "Copil de 6 ani cu hematurie macroscopică și complement C3 scăzut",
            "Copil de 7 ani cu febră, eritem cutanat și dureri articulare, sugestive pentru o boală sistemică",
            "Sugar de 9 luni cu tablou sugestiv de sindrom nefrotic congenital",
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
            "Transfuzie de masă trombocitară pentru corectarea stării procoagulante",
            "Antiagregare cu acid acetilsalicilic, fără altă intervenție terapeutică",
            "Anticoagulare profilactică empirică, inițiată de rutină la toți copiii cu sindrom nefrotic",
            "Tromboliză cu heparină și/sau agenți fibrinolitici, urmată de profilaxie secundară cu warfarină timp de 6 luni",
            "Corticoterapie intravenoasă în doze mari, fără terapie antitrombotică asociată"
          ],
          "correct": 3,
          "explanation": "Textul precizează că anticoagularea empirică profilactică nu are indicație în sindromul nefrotic la copil, dar tratamentul unui eveniment tromboembolic constituit se realizează inițial prin tromboliză cu heparină și/sau agenți fibrinolitici (activator de plasminogen, streptokinază sau urokinază), urmată de profilaxie secundară cu warfarină timp de 6 luni.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1322-1331"
        },
        {
          "id": "38-5",
          "stem": "Un copil cu sindrom nefrotic corticosensibil, aflat sub corticoterapie, dezvoltă febră, dureri abdominale intense, distensie abdominală, apărare musculară și oprirea tranzitului intestinal, tablou sugestiv de peritonită. Care este agentul etiologic predominant citat în text pentru această complicație infecțioasă?",
          "options": [
            "Proteus mirabilis",
            "Pseudomonas aeruginosa",
            "Staphylococcus aureus",
            "Klebsiella pneumoniae",
            "Streptococcus pneumoniae"
          ],
          "correct": 4,
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
            "Glomerulonefrită acută postinfecțioasă",
            "Insuficiență renală acută prerenală",
            "Insuficiență renală acută intrinsecă prin necroză tubulară acută",
            "Nefrită interstițială acută",
            "Insuficiență renală acută postrenală prin obstrucție"
          ],
          "correct": 1,
          "explanation": "Markerii urinari descriși (Na urinar < 10 mEq/L, fracția de excreție a Na+ < 1%, densitate urinară > 1020, cilindri hialini) sunt caracteristici IRA prerenale, spre deosebire de IRA intrinsecă unde FeNa > 1%, Na urinar > 20 mEq/L, densitate < 1010 și apar cilindri granulari. Contextul clinic (deshidratare prin pierderi digestive) susține mecanismul prerenal, potențial reversibil după refacerea volemică.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1359-1366"
        },
        {
          "id": "39-2",
          "stem": "Copil de 3 ani cu sindrom hemolitic-uremic dezvoltă insuficiență renală acută cu anurie de 50 de ore, sub tratament conservator maximal. Care dintre următoarele reprezintă o indicație absolută pentru inițierea terapiei de substituție renală în acest caz?",
          "options": [
            "Ureea serică de 20 mmol/L",
            "Acidoză metabolică ușoară, corectată cu bicarbonat de sodiu",
            "Anuria de peste 48 de ore, mai ales în contextul sindromului hemolitic-uremic",
            "Potasiul seric de 5,8 mmol/L, fără modificări EKG",
            "Hipervolemie moderată, responsivă la doza inițială de furosemid"
          ],
          "correct": 2,
          "explanation": "Textul precizează explicit anuria de peste 48 de ore, mai ales în sindromul hemolitic-uremic, ca indicație absolută pentru inițierea epurării extrarenale. Celelalte situații descrise (uree 20 mmol/L, K+ 5,8 fără modificări EKG, hipervolemie responsivă la diuretic, acidoză ușoară corectabilă medicamentos) nu ating pragurile absolute menționate (uree > 40 mmol/L, K+ > 6,5 mEq/L, acidoză severă refractară, hipervolemie refractară la diuretic).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1359-1366"
        },
        {
          "id": "39-3",
          "stem": "Copil cu insuficiență renală acută are potasiu seric de 6,2 mmol/L, fără modificări electrocardiografice. Conform conduitei terapeutice descrise pentru acest interval al hiperpotasemiei, care este atitudinea inițială cea mai adecvată?",
          "options": [
            "Administrare de soluție de NaCl hipertonă conform formulei de corecție a natremiei",
            "Doar restricție alimentară de potasiu, fără altă intervenție",
            "Hemodializă de urgență, fără alte măsuri prealabile",
            "Nebulizare cu salbutamol ca unică măsură terapeutică",
            "Hidratare, bolus lent de calciu gluconic 10% sub monitorizare EKG, perfuzie de glucoză cu insulină și Kayexalate, cu corectarea acidozei dacă rezerva alcalină este scăzută"
          ],
          "correct": 4,
          "explanation": "Pentru K+ între 6,0-6,5 mmol/L textul indică sistarea medicației economisitoare de K, restricție alimentară, hidratare, bolus lent de calciu gluconic 10% (0,5 mL/kg) sub monitorizare EKG, perfuzie de glucoză tamponată cu insulină, Kayexalate și, dacă rezerva alcalină este sub 18 mmol/L, bicarbonat de sodiu. Hemodializa și nebulizarea cu salbutamol sunt rezervate hiperpotasemiei severe (K+ > 6,5 mmol/L).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1359-1366"
        },
        {
          "id": "39-4",
          "stem": "Un biomarker urinar se secretă după instalarea leziunii ischemice renale, precede cu 2-4 zile creșterea creatininei serice și reprezintă un excelent predictor al instalării insuficienței renale acute la copiii cu sindrom hemolitic-uremic. Despre care biomarker este vorba?",
          "options": [
            "Cistatina C serică",
            "Molecula de injurie renală (KIM-1)",
            "Neutrophil Gelatinase-Associated Lipocalin (NGAL)",
            "Interleukina 18 urinară",
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
            "Faza anurică",
            "Faza poliurică și de recuperare funcțională",
            "Faza de recuperare funcțională tardivă (la un an)",
            "Evoluție spre insuficiență renală cronică"
          ],
          "correct": 2,
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
            "Diagnosticul de BCR necesită obligatoriu confirmare prin puncție-biopsie renală la această vârstă",
            "Diagnosticul de BCR poate fi pus doar dacă leziunile renale sau reducerea RFG persistă cel puțin 3 luni, criteriu valabil și la această vârstă",
            "La copiii sub 2 ani, criteriul RFG sub 60 ml/min/1,73 m2 este întotdeauna aplicabil, indiferent de vârstă",
            "La copiii cu vârsta sub 3 luni, criteriul duratei de persistență a leziunilor (peste 3 luni) nu poate fi aplicat pentru definirea BCR",
            "RFG estimată prin formula Schwartz modificată (bedside) este validă la această vârstă pentru diagnosticul de BCR"
          ],
          "correct": 3,
          "explanation": "Textul menționează explicit două excepții pediatrice de la criteriile NKF/KDOQI: la copiii sub 2 ani nu se poate aplica criteriul RFG sub 60 ml/min/1,73 m2 (valorile normale fiind fiziologic mai mici, trebuie adaptate vârstei), iar la copiii sub 3 luni nu se poate aplica criteriul duratei. În plus, formula Schwartz modificată este validată doar pentru populația de 1-16 ani.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 639-649"
        },
        {
          "id": "40-2",
          "stem": "Copil de 3 ani, diagnosticat cu boală cronică de rinichi în contextul unei hipoplazii/displazii renale bilaterale asociate cu reflux vezicoureteral. Conform datelor de epidemiologie prezentate, care este cea mai frecventă categorie etiologică de BCR la copiii cu vârsta sub 5 ani?",
          "options": [
            "Nefropatia cu IgA",
            "Sindromul hemolitic-uremic",
            "Nefrita lupică",
            "Anomaliile congenitale ale rinichiului și tractului urinar (CAKUT)",
            "Glomeruloscleroza focală și segmentară"
          ],
          "correct": 3,
          "explanation": "La copil, afecțiunile care conduc la BCR sunt dominate de anomaliile congenitale ale rinichiului și tractului urinar (CAKUT), mai ales displazia/hipoplazia renală asociată sau nu cu reflux vezicoureteral sau obstrucție, în primii cinci ani de viață. Nefropatiile glomerulare (inclusiv GSFS) ocupă locul al doilea, iar la adolescenți ordinea se inversează.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 639-649"
        },
        {
          "id": "40-3",
          "stem": "Copil de 11 ani cu BCR stadiul IV (RFG 22 ml/min/1,73 m2) prezintă paloare tegumentară cu tentă teroasă și astenie fizică. Hemoleucograma arată anemie normocromă normocitară, cu sideremie, feritină, vitamina B12 și acid folic în limite normale. Care este mecanismul patogenic cel mai important implicat în anemia acestui pacient?",
          "options": [
            "Pierderile cronice de sânge prin gastrita uremică",
            "Deficitul de fier secundar aportului alimentar insuficient",
            "Supresia medulară secundară hiperparatiroidismului sever (mielofibroză)",
            "Scăderea duratei de viață a hematiilor prin acțiunea toxinelor uremice",
            "Reducerea producției de eritropoietină de către celulele din corticala renală"
          ],
          "correct": 4,
          "explanation": "Textul precizează că mecanismul patogenic cel mai important al anemiei din BCR este reducerea producției de eritropoietină de către celulele din corticala renală, la care se adaugă, secundar, scăderea duratei de viață a hematiilor, deficitele nutriționale și supresia medulară. În acest caz, cu deficitele nutriționale excluse prin dozări normale, mecanismul dominant rămâne deficitul de eritropoietină.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 639-649"
        },
        {
          "id": "40-4",
          "stem": "Copil de 9 ani cu BCR stadiul IV prezintă dureri osoase, o fractură survenită la traumatism minim și genu valgum. Biologic: hipocalcemie, hiperfosfatemie, parathormon seric mult crescut și fosfatază alcalină crescută; radiologic se observă eroziuni periostale și fracturi metafizare. Care este diagnosticul cel mai probabil?",
          "options": [
            "Boala adinamică osoasă (turnover redus)",
            "Osteoporoză idiopatică juvenilă",
            "Osteodistrofia renală cu turnover osos ridicat (osteitis fibrosa)",
            "Hiperparatiroidism primar",
            "Rahitism carențial prin deficit alimentar de vitamină D"
          ],
          "correct": 2,
          "explanation": "Forma cu turnover ridicat (osteitis fibrosa) este cea mai frecventă la copilul cu BCR și se caracterizează biologic prin hipocalcemie, hiperfosfatemie, creșterea PTH și a fosfatazei alcaline, radiologic prin eroziuni periostale și fracturi metafizare, iar clinic prin dureri osoase, fracturi la traumatisme minime și deformări precum genu valgum. Boala adinamică osoasă are, dimpotrivă, PTH supresat și hipercalcemie.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 639-649"
        },
        {
          "id": "40-5",
          "stem": "Copil de 18 luni cu boală cronică de rinichi stadiul terminal necesită inițierea epurării extrarenale. Abordul vascular este dificil din cauza vârstei mici, iar familia dorește o metodă ce poate fi efectuată la domiciliu, de către aparținători. Care este metoda de epurare extrarenală de primă intenție în acest caz?",
          "options": [
            "Hemodializa prin cateter venos central tunelizat",
            "Dializa peritoneală",
            "Hemodializa prin fistulă arteriovenoasă",
            "Transplantul renal de la donator decedat, fără pregătire prealabilă",
            "Hemodializa zilnică de scurtă durată efectuată în centru"
          ],
          "correct": 1,
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
            "Absența unui contact cunoscut cu un caz de tuberculoză activă",
            "Papulă IDR-PPD cu diametrul peste 10 mm (hiperergie tuberculinică)",
            "Radiografie toracică normală",
            "Vârsta peste 10 ani"
          ],
          "correct": 2,
          "explanation": "Criteriile de probabilitate OMS presupun un caz suspect plus cel puțin unul dintre: hiperergie tuberculinică (papulă peste 10 mm), aspect radiologic sau histologic sugestiv, BAAR pozitiv sau răspuns favorabil la terapia anti-TB. Un rezultat BAAR negativ sau o radiografie normală nu susțin trecerea de la suspiciune la probabilitate.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 367-379"
        },
        {
          "id": "41-2",
          "stem": "Un sugar de 8 luni prezintă febră, vărsături și redoare de ceafă instalate progresiv în ultimele 10 zile, fără răspuns la antibioterapie empirică. Se suspectează meningită tuberculoasă și se efectuează puncție lombară. Care dintre următoarele aspecte ale LCR este cel mai sugestiv pentru etiologia tuberculoasă?",
          "options": [
            "LCR cu eozinofilie marcată și glicorahie crescută",
            "LCR clar, acelular, cu proteinorahie și glicorahie normale",
            "LCR hemoragic, cu eritrocite numeroase și proteinorahie normală",
            "LCR clar, cu citorahie de 200-500 elemente/mm3 cu predominanță limfocitară, proteinorahie peste 100 mg% și glicorahie sub 30 mg%",
            "LCR tulbure, purulent, cu polimorfonucleare peste 1000/mm3 și glicorahie normală"
          ],
          "correct": 3,
          "explanation": "În meningita tuberculoasă, LCR este clar, cu citorahie de 200-500 elemente/mm3 cu predominanță limfocitară (peste 50-80%), proteinorahie crescută (peste 100 mg%, uneori peste 3 g% sugerând blocaj medular) și glicorahie scăzută (sub 30 mg%). Persistența acestor modificări este caracteristică pentru etiologia tuberculoasă, spre deosebire de aspectul purulent din meningitele bacteriene.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 367-379"
        },
        {
          "id": "41-3",
          "stem": "Un copil de 4 ani este diagnosticat cu meningită tuberculoasă și se inițiază schema de tratament antituberculos în faza intensivă. Față de schemele standard folosite în alte forme de tuberculoză pulmonară, care este modificarea recomandată și motivul ei?",
          "options": [
            "Se folosește doar izoniazidă în monoterapie, pentru penetrabilitate meningeală maximă",
            "Se înlocuiește pirazinamida cu acid paraaminosalicilic încă din prima linie de tratament",
            "Se elimină rifampicina din schemă din cauza toxicității hepatice crescute la nivel meningeal",
            "Se înlocuiește etambutolul cu streptomicină, deoarece etambutolul nu traversează bariera meningeală",
            "Se dublează doza de pirazinamidă și se elimină izoniazida din schemă"
          ],
          "correct": 3,
          "explanation": "Textul precizează explicit că în meningita tuberculoasă se folosește streptomicina în locul etambutolului, deoarece acesta din urmă nu traversează bariera meningoencefalică, în timp ce streptomicina, deși cu difuziune redusă în LCR în mod normal, are penetrabilitate crescută în prezența inflamației meningeale.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 367-379"
        },
        {
          "id": "41-4",
          "stem": "Un copil de 3 ani necesită asociere de tuberculostatice pentru o formă de tuberculoză pulmonară extinsă. Deși etambutolul are o penetrabilitate bună inclusiv în SNC, la această vârstă utilizarea sa este evitată. Care este motivul principal?",
          "options": [
            "Risc de nevrită retrobulbară, ale cărei simptome (scăderea acuității vizuale, scotoame) nu pot fi sesizate sau comunicate de copilul mic",
            "Interferează semnificativ cu absorbția digestivă a rifampicinei",
            "Risc crescut de ototoxicitate ireversibilă specific acestei vârste",
            "Risc crescut de hepatotoxicitate severă și ireversibilă",
            "Necesită obligatoriu asociere cu piridoxină pentru prevenirea neuropatiei periferice"
          ],
          "correct": 0,
          "explanation": "Etambutolul poate produce, la doze mari, nevrită retrobulbară cu scăderea acuității vizuale, vedere în ceață și scotoame centrale. Textul menționează că se recomandă după vârsta de 5 ani, deoarece sub această vârstă copilul nu poate sesiza sau relata tulburările de vedere, reacție adversă posibilă a medicamentului.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 367-379"
        },
        {
          "id": "41-5",
          "stem": "O lăuză este diagnosticată imediat postpartum cu miliarie tuberculoasă, formă cu diseminare hematogenă. Nou-născutul este asimptomatic la naștere. Care este conduita corectă în acest caz?",
          "options": [
            "Se administrează doar vaccinarea BCG, fără alte investigații sau tratament",
            "Copilul este evaluat pentru tuberculoză congenitală (inclusiv examen histologic al placentei), separat de mamă până la momentul necontagiozității acesteia și tratat cu izoniazidă până la testarea IDR-PPD la 4-6 luni",
            "Se inițiază direct schema completă de patru tuberculostatice timp de 12 luni, indiferent de rezultatele investigațiilor",
            "Alăptarea continuă fără nicio restricție, iar copilul se testează IDR-PPD abia la vârsta de 1 an",
            "Nu sunt necesare investigații suplimentare, deoarece transmiterea la nou-născut prin această cale este exclusă"
          ],
          "correct": 1,
          "explanation": "În cazul mamei cu diseminare hematogenă (meningită TB, miliarie, TB osteoarticulară), nou-născutul trebuie evaluat pentru tuberculoză congenitală, inclusiv prin examinarea histologică a placentei. Dacă aspectul clinic și radiologic nu sunt sugestive pentru boală congenitală, copilul se separă de mamă până la necontagiozitate și primește izoniazidă până la testarea IDR-PPD la 4-6 luni, tratament care se prelungește sau se sistează în funcție de rezultat.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 367-379"
        }
      ]
    },
    {
      "num": 42,
      "title": "Sifilisul congenital și dobândit",
      "questions": [
        {
          "id": "42-1",
          "stem": "Un nou-născut de 3 săptămâni prezintă hepatosplenomegalie, icter, rinoree persistentă hemoragică ('guturai'), erupție maculopapuloasă pe palme și plante cu tendință la descuamare și iritabilitate marcată, cu refuzul de a mișca membrul superior stâng. Radiografia evidențiază osteocondrită la nivelul metafizelor. Care este cel mai probabil diagnostic?",
          "options": [
            "Sifilis congenital precoce, cu pseudoparalizie Parrot",
            "Scorbut infantil (deficit de vitamina C)",
            "Artrită septică de umăr",
            "Rahitism carențial cu fracturi patologice",
            "Osteomielită hematogenă acută stafilococică"
          ],
          "correct": 0,
          "explanation": "Asocierea hepatosplenomegalie, icter, rinită persistentă (snuffles), erupție maculopapuloasă/veziculobuloasă cu descuamare palmoplantară și osteocondrită dureroasă este caracteristică sifilisului congenital precoce. Durerea osoasă determină iritabilitate și refuzul de a mișca membrul afectat, fenomen numit pseudoparalizia lui Parrot.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1592-1599"
        },
        {
          "id": "42-2",
          "stem": "La un nou-născut din mamă cu serologie reactivă pentru sifilis se compară titrul nontreponemic (RPR/VDRL) al copilului cu cel matern, conform algoritmului de evaluare a nou-născutului la risc. Care rezultat susține cel mai puternic diagnosticul de sifilis congenital cert sau foarte probabil?",
          "options": [
            "Testul treponemal matern este negativ",
            "Titrul RPR al copilului este mai mic decât titrul matern",
            "Titrul RPR al copilului este egal cu titrul matern",
            "Titrul RPR al copilului este de cel puțin 4 ori mai mare decât titrul matern",
            "Titrul RPR al copilului devine nedetectabil până la 3-6 luni"
          ],
          "correct": 3,
          "explanation": "Un titru al sugarului cel puțin de 4 ori (2 diluții) mai mare decât titrul matern, coroborat cu examen fizic sau evaluare anormală, indică sifilis congenital dovedit sau foarte probabil. Un titru egal sau mai mic decât cel matern sugerează mai degrabă transfer pasiv de anticorpi materni, care în mod normal devine nedetectabil în 3-6 luni.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1592-1599"
        },
        {
          "id": "42-3",
          "stem": "Triada Hutchinson, manifestare tardivă a sifilisului congenital netratat (copii peste 2 ani), este alcătuită din:",
          "options": [
            "Dinți Hutchinson, keratită interstițială și surditate prin afectarea nervului VIII",
            "Nas în șa, tibii 'în iatagan' și scapulă scafoidă",
            "Pseudoparalizia Parrot, hepatosplenomegalie și icter",
            "Frunte olimpiană, semnul Higoumenaki și rhagade",
            "Articulația Clutton, molari 'în mure' și keratită interstițială"
          ],
          "correct": 0,
          "explanation": "Triada Hutchinson este definită de textul de referință ca fiind formată din dinții Hutchinson, keratita interstițială și surditatea (afectarea nervului acustic, VIII). Celelalte semne enumerate (nas în șa, tibii în iatagan, scapulă scafoidă, frunte olimpiană, semnul Higoumenaki, rhagade, articulația Clutton, molari în mure) sunt manifestări tardive distincte, dar nu fac parte din această triadă.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1592-1599"
        },
        {
          "id": "42-4",
          "stem": "Un sugar de 2 săptămâni este diagnosticat cu sifilis congenital cert. Care este conduita terapeutică corectă?",
          "options": [
            "Penicilină G benzatinică, în doză unică, intramuscular",
            "Ceftriaxonă intramusculară, în doză unică",
            "Azitromicină orală, timp de 10 zile",
            "Penicilină G cristalină apoasă, administrată parenteral (intravenos), timp de 10 zile",
            "Doxiciclină intravenoasă, timp de 14 zile"
          ],
          "correct": 3,
          "explanation": "Penicilina G apoasă administrată parenteral este singurul tratament documentat eficace pentru sifilisul congenital, deoarece asigură concentrații treponemicide susținute (inclusiv în LCR) pe durata necesară, dat fiind timpul lung de diviziune al T. pallidum. Penicilina benzatinică nu atinge concentrații adecvate în LCR, iar doxiciclina și macrolidele nu sunt folosite pentru tratamentul sifilisului congenital la sugar.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1592-1599"
        },
        {
          "id": "42-5",
          "stem": "Un adolescent cu sifilis secundar (erupție maculopapuloasă generalizată, inclusiv palmoplantară) primește penicilină G benzatinică intramuscular. La câteva ore după administrare dezvoltă febră, frisoane și mialgii tranzitorii. Care este conduita corectă?",
          "options": [
            "Continuarea tratamentului cu penicilină, reacția fiind autolimitată",
            "Întreruperea penicilinei și trecerea la doxiciclină",
            "Desensibilizare de urgență la penicilină",
            "Oprirea definitivă a oricărui tratament antibiotic",
            "Dublarea imediată a dozei de penicilină administrate"
          ],
          "correct": 0,
          "explanation": "Tabloul descris corespunde reacției Jarisch-Herxheimer, o reacție febrilă sistemică tranzitorie determinată de eliberarea masivă de antigene de tip endotoxinic în urma lizei bacteriene, care apare la 15-20% dintre pacienții cu sifilis dobândit sau congenital tratați cu penicilină. Aceasta nu reprezintă o indicație de întrerupere a tratamentului cu penicilină.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1592-1599"
        }
      ]
    },
    {
      "num": 43,
      "title": "Deficite imune genetice și dobândite: Imunodeficiența combinată severă, Imunodeficiența variabilă comună, Sindromul Wiskott-Aldrich, Sindromul di George, Agamaglobulinemia Bruton, Boala granulomatoasă cronică, Deficit de Ig A, Ataxia-Teleangiectazia, Deficitele de complement",
      "questions": [
        {
          "id": "43-1",
          "stem": "Un sugar de 2 luni este internat pentru pneumonie severă cu Pneumocystis jirovecii, diaree cronică și candidoză orală extinsă. Imunofenotiparea evidențiază limfopenie marcată prin absența limfocitelor T, iar testul de screening neonatal (cercurile de excizie a rearanjamentului receptorului de celule T) este anormal. Care este conduita terapeutică definitivă, cu șanse de succes de peste 90% dacă este aplicată înainte de instalarea unor infecții severe ireversibile?",
          "options": [
            "Terapie substitutivă cu imunoglobuline intravenoase",
            "Profilaxie antiinfecțioasă cu trimetoprim-sulfametoxazol și antifungice",
            "Transplant de țesut timic cultivat",
            "Terapie cu interferon-gamma",
            "Transplant de celule stem hematopoietice"
          ],
          "correct": 4,
          "explanation": "Imunodeficiența combinată severă (SCID) este o urgență pediatrică: sugarii sunt limfopenici de la naștere prin absența limfocitelor T, iar testul TREC din picătura de sânge uscat este folosit pentru screeningul neonatal. Textul precizează că SCID poate fi tratată cu succes prin transplant de celule stem hematopoietice în peste 90% din cazuri dacă diagnosticul este stabilit înainte de apariția unor infecții grave, netratabile. Transplantul de țesut timic este rezervat aplaziei timice complete (sindrom di George complet), nu SCID.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1107-1118"
        },
        {
          "id": "43-2",
          "stem": "Un sugar de sex masculin este asimptomatic până la vârsta de 7 luni, când dezvoltă otite medii recurente, pneumonii și sinuzite cu Streptococcus pneumoniae și Haemophilus influenzae. Examenul obiectiv relevă amigdale mici, absente, și ganglioni limfatici nepalpabili, iar funcția și numărul limfocitelor T sunt normale. Care modificare imunologică confirmă cel mai probabil diagnosticul de agamaglobulinemie Bruton (X-linkată)?",
          "options": [
            "Trombocite mici, în număr scăzut, cu megacariocite medulare normale",
            "Absența limfocitelor T circulante, cu limfopenie severă generalizată",
            "CH50 absent, cu C3 și C4 serice scăzute",
            "Absența limfocitelor B circulante (CD19/CD20), cu limfocite T normale numeric și funcțional",
            "Nivel seric crescut de IgM, cu IgG și IgA scăzute"
          ],
          "correct": 3,
          "explanation": "În agamaglobulinemia X-linkată (XLA), defectul genei Btk blochează dezvoltarea limfocitelor B în stadiul pre-B, rezultând absența practic completă a limfocitelor B circulante (sub 1%), în timp ce procentul și funcția limfocitelor T sunt normale. Clinic apar amigdale mici/absente și absența ganglionilor palpabili (lipsa centrelor germinative), iar simptomele apar după epuizarea IgG materne transferate transplacentar, de regulă după 6-9 luni. IgM crescut cu IgG/IgA scăzute sugerează sindrom hiper-IgM, iar trombocitele mici cu megacariocite normale sunt caracteristice sindromului Wiskott-Aldrich.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1107-1118"
        },
        {
          "id": "43-3",
          "stem": "Un nou-născut prezintă convulsii hipocalcemice în perioada neonatală, o malformație cardiacă conotruncală și dismorfism facial (filtru scurt, hipertelorism, urechi jos implantate și rotate posterior). Se suspectează sindromul de deleție 22q11.2 (sindrom di George) cu aplazie timică completă. Ținând cont de susceptibilitatea acestor pacienți la boala grefă-contra-gazdă, care este cea mai importantă măsură de precauție?",
          "options": [
            "Administrarea profilactică de imunoglobuline intravenoase, indiferent de nivelul lor seric",
            "Administrarea exclusivă de produse de sânge iradiate",
            "Evitarea vaccinurilor inactivate până la normalizarea calcemiei",
            "Corecția chirurgicală a malformației cardiace înaintea oricărei evaluări imunologice",
            "Izolarea strictă a copilului până la vârsta de 2 ani"
          ],
          "correct": 1,
          "explanation": "Pacienții cu aplazie timică completă din sindromul di George au o susceptibilitate similară SCID la infecții oportuniste și la boala grefă-contra-gazdă produsă de transfuzii de sânge neiradiat, deoarece limfocitele T alogene din produsul sanguin pot prolifera necontrolat într-o gazdă lipsită de imunitate celulară funcțională. De aceea, orice produs de sânge administrat acestor pacienți trebuie iradiat. Diagnosticul precoce prin numărătoarea limfocitelor T și dozarea calcemiei este esențial la orice nou-născut cu hipoparatiroidism, malformație conotruncală sau sindrom CHARGE.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1107-1118"
        },
        {
          "id": "43-4",
          "stem": "Un băiat de 3 ani prezintă abcese cutanate recurente cu Staphylococcus aureus, limfadenită supurativă și pneumonie cu Aspergillus, cu antecedente de granuloame hepatice. Testele de chemotactism, fagocitoză și degranulare a neutrofilelor sunt normale. Care este testul de elecție pentru confirmarea diagnosticului de boală granulomatoasă cronică?",
          "options": [
            "Citometria în flux cu dihidrorodamină (DHR) pentru evaluarea exploziei oxidative a neutrofilelor",
            "Dozarea activității hemolitice totale a complementului (CH50) și a căii alternative (AH50)",
            "Numărătoarea limfocitelor T naive (CD45RA) prin citometrie în flux",
            "Testul cercurilor de excizie a rearanjamentului receptorului de celule T (TREC)",
            "Dozarea isohemaglutininelor"
          ],
          "correct": 0,
          "explanation": "Boala granulomatoasă cronică (CGD) este determinată de un defect al NADPH oxidazei fagocitare, prin care neutrofilele și monocitele au chemotactism, ingestie și degranulare normale, dar nu pot genera metaboliți oxigenați microbicizi, fiind incapabile să distrugă microorganismele catalază-pozitive (S. aureus, Aspergillus, Serratia marcescens, Burkholderia cepacia). Testul actual de diagnostic este citometria în flux cu dihidrorodamină (DHR), care măsoară explozia oxidativă; testul cu nitroblue tetrazolium este folosit doar rar în prezent.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1139-1140"
        },
        {
          "id": "43-5",
          "stem": "Un adolescent anterior sănătos dezvoltă al doilea episod de meningită meningococică, de această dată cu un serotip neobișnuit (diferit de A, B sau C). Care este cea mai probabilă anomalie imunologică subiacentă și testele de screening indicate pentru confirmare?",
          "options": [
            "Deficit selectiv de IgA, evaluat prin dozarea IgA serică",
            "Agamaglobulinemie X-linkată, evaluată prin citometrie în flux pentru limfocite B",
            "Deficit de subclase de IgG, evaluat prin dozarea IgG2 și IgG4 serice",
            "Boală granulomatoasă cronică, evaluată prin testul DHR",
            "Deficit al unei componente tardive a complementului (C5-C9) sau al căii alternative, evaluat prin CH50 și AP50"
          ],
          "correct": 4,
          "explanation": "Textul precizează explicit că un adolescent sau tânăr anterior sănătos cu meningită meningococică produsă de un serotip neobișnuit (nu A, B sau C) trebuie evaluat pentru deficitul unei componente tardive a complementului sau al căii alternative, prin testele CH50 și AP50. Infecțiile diseminate cu Neisseria (gonococ, meningococ) sunt manifestarea tipică a deficitelor de complement, în special ale componentelor terminale C5-C9 care formează complexul de atac membranar.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1154-1154"
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
            "Radiografia cardio-pulmonară",
            "Mielograma (aspiratul medular)",
            "Puncția lombară",
            "Biopsia ganglionară",
            "Ecografia abdominală"
          ],
          "correct": 1,
          "explanation": "Formele aleucemice (leucocite < 10.000/mmc, fără blaști pe frotiul periferic) sunt frecvente în LAL, astfel încât diagnosticul se stabilește prin mielogramă. Măduva osoasă este constant hipercelulară și infiltrată, fiind suficientă prezența a peste 25% limfoblaști pentru diagnosticul de leucemie acută. Puncția lombară și celelalte explorări sunt utile ulterior, pentru evaluarea extensiei bolii, nu pentru diagnosticul de bază.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1230-1247"
        },
        {
          "id": "44-2",
          "stem": "Un copil de 5 ani se prezintă cu febră, adenopatii cervicale generalizate, splenomegalie, iar pe frotiul de sânge periferic se observă limfocitoză cu limfocite atipice. Tabloul clinico-biologic mimează o leucemie acută limfoblastică. Care este diagnosticul cel mai probabil ce trebuie exclus prin aspirat medular și serologie specifică înainte de a susține diagnosticul de LAL?",
          "options": [
            "Limfomul Hodgkin",
            "Mononucleoza infecțioasă (infecție cu virus Epstein-Barr)",
            "Artrita reumatoidă juvenilă",
            "Purpura trombocitopenică imună",
            "Anemia aplastică"
          ],
          "correct": 1,
          "explanation": "Mononucleoza infecțioasă și alte infecții virale pot prezenta un tablou clinic asemănător leucemiei acute, cu adenopatii generalizate, splenomegalie, febră și limfocitoză. Limfocitele atipice din infecția cu EBV pot fi ușor confundate cu celulele blastice, fiind necesare aspiratul medular și serologia pentru EBV pentru diagnosticul de certitudine. Celelalte entități nu asociază tipic limfocite atipice cu acest tablou.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1230-1247"
        },
        {
          "id": "44-3",
          "stem": "Un sugar cu leucemie acută limfoblastică prezintă un număr de leucocite de 80.000/mmc la debut, rearanjament al genei MLL cu t(4;11) și infiltrare a sistemului nervos central. Cum trebuie interpretat acest ansamblu de caracteristici din punct de vedere prognostic și al încadrării terapeutice?",
          "options": [
            "Prognostic favorabil, independent de vârstă, datorită hiperdiploidiei asociate frecvent la sugari",
            "Prognostic nefavorabil, cu încadrare în grupa de risc înalt/foarte înalt",
            "Este caracteristic formei L3 cu celule B mature și se tratează conform protocolului de limfom Burkitt",
            "Nu influențează prognosticul, fiind necesară doar profilaxia meningocerebrală standard",
            "Indică o leucemie congenitală cu prognostic identic populației generale cu LAL"
          ],
          "correct": 1,
          "explanation": "Vârsta sub 1 an, leucocitoza peste 50.000/mmc, rearanjamentele MLL t(4;11) și infiltrarea SNC sunt toate criterii de prognostic nefavorabil în LAL. Pacienții cu t(4;11) sunt de obicei sugari cu leucocitoză mare și infiltrare SNC, adesea fără remisiune la finalul inducției, fiind încadrați în grupele de risc înalt/foarte înalt din stratificarea COG.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1230-1247"
        },
        {
          "id": "44-4",
          "stem": "Un copil cu leucemie acută limfoblastică hiperleucocitară (leucocite 180.000/mmc) dezvoltă, la inițierea tratamentului, acid uric seric peste 10 mg/dL, hiperpotasemie și semne incipiente de insuficiență renală acută. Care este diagnosticul și conduita terapeutică imediată corectă?",
          "options": [
            "Sepsis sever - antibioterapie empirică cu spectru larg",
            "Coagulare intravasculară diseminată - administrare de plasmă proaspătă congelată",
            "Infiltrare blastică renală - biopsie renală de urgență",
            "Leucostazie cerebrală - transfuzie de masă eritrocitară",
            "Sindrom de liză tumorală - hiperhidratare, alcalinizare cu bicarbonat de sodiu și allopurinol"
          ],
          "correct": 4,
          "explanation": "Liza blastică rapidă din leucemiile hiperleucocitare determină hiperuricemie (peste 10 mg/dL, cu precipitarea uraților în tubii renali), hiperpotasemie, hiperfosfatemie și insuficiență renală acută, tablou caracteristic sindromului de liză tumorală. Tratamentul constă în hiperhidratare (3.000 mL/m2/zi), alcalinizare cu bicarbonat de sodiu și allopurinol, cu reducerea dozei acestuia din urmă în caz de insuficiență renală.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1230-1247"
        },
        {
          "id": "44-5",
          "stem": "Un copil cu leucemie acută mieloidă se prezintă cu sângerări gingivale severe, echimoze extinse, trombocitopenie marcată, timpi de protrombină și de trombină prelungiți și D-dimeri crescuți, iar mielograma evidențiază promielocite atipice. Care este conduita terapeutică specifică ce trebuie inițiată rapid, chiar la simpla suspiciune a acestui subtip de LAM?",
          "options": [
            "Radioterapia craniană profilactică",
            "Imatinibul (inhibitor de tirozin-kinază)",
            "Vincristina asociată cu prednison",
            "Acidul all-trans-retinoic (ATRA)",
            "Metotrexatul intratecal, izolat"
          ],
          "correct": 3,
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
            "Puncția lombară cu examinarea lichidului cefalorahidian",
            "Evidențierea cromozomului Philadelphia prin citogenetică standard",
            "Determinarea expresiei CD30 prin imunohistochimie",
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
            "Leucemie mieloidă cronică în criză blastică",
            "Limfom non-Hodgkinian, stadiul IV",
            "Limfom Hodgkin cu afectare medulară",
            "Leucemie acută limfoblastică cu determinare abdominală"
          ],
          "correct": 2,
          "explanation": "Textul precizează că prezența a peste 25% blaști în măduva osoasă definește leucemia acută limfoblastică, în timp ce un procent sub 25% blaști medulari, în contextul unei mase tumorale extramedulare, sugerează limfom non-Hodgkinian stadiul IV (prin definiție, afectarea medulară sau a SNC încadrează boala în stadiul IV). Cazul prezentat, cu 18% blaști medulari, se încadrează astfel ca LMNH stadiul IV, nu ca leucemie acută limfoblastică.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1252-1262"
        },
        {
          "id": "45-3",
          "stem": "Un copil este diagnosticat cu limfom Burkitt abdominal, cu masă tumorală voluminoasă și risc crescut de sindrom de liză tumorală. Care este conduita corectă înaintea inițierii chimioterapiei citostatice?",
          "options": [
            "Administrare imediată de doxorubicină în doză redusă, fără hidratare prealabilă",
            "Hiperhidratare intravenoasă (3.000 mL/m²/24h), alcalinizarea urinei cu bicarbonat izoton și administrare de allopurinol",
            "Radioterapie profilactică pe abdomen, urmată de chimioterapie standard",
            "Restricție hidrică pentru prevenirea edemului cerebral, asociată cu diuretice de ansă",
            "Transfuzie de masă eritrocitară, indiferent de valoarea hemoglobinei"
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
            "Adenopatia mediastinală de dimensiuni mari",
            "Nivelul albuminei serice sub 3,5 g/dL",
            "Stadiul IV de boală",
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
            "Stadiul IIIA",
            "Stadiul IA",
            "Stadiul IIA",
            "Stadiul IIB",
            "Stadiul IVB"
          ],
          "correct": 2,
          "explanation": "Conform clasificării prezentate, stadiul II corespunde afectării mai multor grupe ganglionare situate de aceeași parte a diafragmului, situație întâlnită la acest pacient (adenopatii cervicale bilaterale și axilare drepte, toate supradiafragmatice). Absența simptomelor generale (scădere ponderală, febră, transpirații nocturne) încadrează cazul în categoria A, rezultând stadiul IIA.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1252-1262"
        }
      ]
    },
    {
      "num": 46,
      "title": "Aplazia medulară idiopatică și secundară. Anemiile hipoplastice congenitale și dobândite: Anemia Blackfan-Diamond, Anemia pură dobândită, Anemia Fanconi, Sindrom Schwachman-Diamond",
      "questions": [
        {
          "id": "46-1",
          "stem": "Sugar de 8 luni se prezintă cu paloare marcată, instalată progresiv în ultimele săptămâni. Hemograma arată: Hb 5,5 g/dL, VEM crescut pentru vârstă, reticulocite absolute scăzute, leucocite și trombocite în limite normale. Examenul clinic evidențiază police bilateral hipoplazic, cu eminență tenară aplatizată, și nas în șa. Care este cel mai probabil diagnostic?",
          "options": [
            "Criza aplastică din infecția cu parvovirus B19",
            "Anemia Blackfan-Diamond",
            "Sindromul Schwachman-Diamond",
            "Anemia Fanconi",
            "Eritroblastopenia tranzitorie a copilăriei (TEC)"
          ],
          "correct": 1,
          "explanation": "Anemia Blackfan-Diamond este o aplazie eritroidă pură, congenitală, ce devine simptomatică în primul an de viață (peste 90% din cazuri diagnosticate până la 1 an), cu anemie macrocitară, reticulocitopenie și celelalte linii hematopoietice normale; 40-50% dintre pacienți au anomalii congenite, cele mai frecvente fiind cele ale policelui și cele craniofaciale. TEC apare de obicei după vârsta de 12 luni, fără anomalii congenite și cu VEM normal, iar aplazia din anemia Fanconi apare de regulă mai târziu, ca pancitopenie, nu ca aplazie eritroidă izolată la sugar.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 2510-2512"
        },
        {
          "id": "46-2",
          "stem": "Un copil de 2 ani este diagnosticat cu anemie Blackfan-Diamond (Hb 6 g/dL, reticulocitopenie, precursori eritroizi absenți la nivel medular). Care este tratamentul de primă intenție pentru corectarea anemiei la această vârstă?",
          "options": [
            "Transfuzii cronice de masă eritrocitară la 3-5 săptămâni",
            "Corticoterapie orală (prednison, aproximativ 2 mg/kg/zi)",
            "Transplantul de celule stem hematopoietice de la un donator HLA-identic",
            "Terapie cu androgeni (oxymetolonă)",
            "Imunosupresie cu ser antitimocitar și ciclosporină"
          ],
          "correct": 1,
          "explanation": "Corticoterapia reprezintă tratamentul de bază al anemiei Blackfan-Diamond, aproximativ 80% dintre pacienți răspunzând inițial; se folosește o doză de start de prednison de aproximativ 2 mg/kg/zi, cu creșterea reticulocitelor medulare în 1-3 săptămâni. La sugarii sub 1 an mulți hematologi preferă transfuziile cronice și amână corticoterapia din cauza efectelor asupra creșterii, dar la un copil de 2 ani corticoterapia este opțiunea de primă linie.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 2510-2512"
        },
        {
          "id": "46-3",
          "stem": "Băiat de 6 ani este evaluat pentru statură mică, pete cafe-au-lait multiple, hipoplazie bilaterală de police și trombocitopenie recent instalată, cu macrocitoză eritrocitară. Care este testul de elecție pentru confirmarea diagnosticului suspectat?",
          "options": [
            "Nivelul hemoglobinei fetale (HbF)",
            "Biopsia osteo-medulară cu evaluarea celularității",
            "Testul de fragilitate cromozomială la limfocite cu diepoxibutan (DEB) sau mitomicină C (MMC)",
            "Măsurarea lungimii telomerelor leucocitare",
            "Dozarea adenozin-dezaminazei eritrocitare (eADA)"
          ],
          "correct": 2,
          "explanation": "Tabloul clinic (anomalii scheletice ale policelui, pete cafe-au-lait, statură mică, citopenii) este sugestiv pentru anemia Fanconi. Diagnosticul se confirmă prin testul de fragilitate cromozomială la limfocite, cu creșterea marcată a rupturilor cromatidiene după expunerea la agenți de crosslinking precum DEB sau MMC; nicio altă pancitopenie ereditară nu prezintă această hipersensibilitate marcată in vitro.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 2573-2580"
        },
        {
          "id": "46-4",
          "stem": "Un copil de 8 ani cu pancitopenie dobândită idiopatică are: neutrofile absolute 300/mm3, trombocite 15.000/mm3, reticulocite corectate 0,5% și celularitate medulară sub 30% la biopsie. Are un frate HLA-identic sănătos. Care este conduita terapeutică de elecție?",
          "options": [
            "Imunosupresie cu ser antitimocitar (ATG) și ciclosporină",
            "Transplant allogenic de celule stem hematopoietice de la fratele HLA-identic",
            "Factor de creștere granulocitar (G-CSF) în monoterapie",
            "Corticoterapie sistemică în doză mare",
            "Terapie cu androgeni (oxymetolonă sau danazol)"
          ],
          "correct": 1,
          "explanation": "Valorile de laborator (neutrofile <500/mm3, trombocite <20.000/mm3, reticulocite <1%, celularitate medulară <30%) îndeplinesc criteriile de aplazie medulară severă. Pentru pacienții care au un donator familial HLA-identic, transplantul allogenic de celule stem hematopoietice este tratamentul de elecție, oferind aproximativ 90% șanse de supraviețuire pe termen lung, superior imunosupresiei, care este rezervată pacienților fără donator compatibil.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 2573-2580"
        },
        {
          "id": "46-5",
          "stem": "Sugar de 10 luni prezintă steatoree, retard al creșterii staturo-ponderale și infecții bacteriene recurente. Hemoleucograma arată neutropenie cronică, iar testul de fragilitate cromozomială cu DEB/MMC este negativ. Radiografia bazinului evidențiază anomalii metafizare. Care este diagnosticul cel mai probabil?",
          "options": [
            "Fibroza chistică",
            "Anemia Fanconi",
            "Sindromul Pearson",
            "Anemia Blackfan-Diamond",
            "Sindromul Schwachman-Diamond"
          ],
          "correct": 4,
          "explanation": "Asocierea dintre insuficiență pancreatică exocrină (steatoree, malabsorbție), neutropenie cronică, anomalii scheletice (displazie metafizară) și statură mică este caracteristică sindromului Schwachman-Diamond. Testul de fragilitate cromozomială la DEB/MMC este negativ, ceea ce îl diferențiază de anemia Fanconi, iar afectarea predominant neutropenică și pancreatică îl diferențiază de sindromul Pearson (anemie severă transfuzie-dependentă de la naștere) și de anemia Blackfan-Diamond (aplazie eritroidă pură).",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 2573-2580"
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
            "Chimioterapie empirică imediată, înaintea oricărei tentative de biopsie",
            "Biopsie mediastinală sub anestezie generală, ca primă intenție",
            "Radioterapie empirică imediată asupra masei mediastinale, fără diagnostic histologic anterior",
            "Biopsierea adenopatiei periferice palpabile, deoarece este mai rapidă și mai puțin invazivă decât biopsia mediastinală",
            "Sedare conștientă cu anxiolitice pentru realizarea unei biopsii mediastinale ghidate CT"
          ],
          "correct": 3,
          "explanation": "Textul precizează că, dacă există adenopatii periferice, se recomandă biopsierea acestora, fiind mai rapidă și mai puțin invazivă decât biopsia mediastinală. Anestezia generală la acești pacienți comportă risc mare de insuficiență respiratorie/cardiacă și intubație dificilă, iar sedarea conștientă cu anxiolitice poate fi contraindicată deoarece deprimă respirația și produce vasodilatație periferică. Radioterapia sau chimioterapia empirică, fără diagnostic de certitudine, pot compromite interpretarea histopatologică ulterioară.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 588-598"
        },
        {
          "id": "47-2",
          "stem": "Un copil de 12 ani, aflat la 10 zile de la chimioterapie pentru leucemie acută limfoblastică, dezvoltă neutropenie severă, febră, dureri abdominale și diaree. Ecografia abdominală evidențiază îngroșarea peretelui la nivelul cecului și ileonului terminal, fără semne de perforație sau necroză, iar trombocitele și coagularea sunt în limite normale. Care este conduita terapeutică inițială cea mai adecvată pentru acest tablou clinic sugestiv de tiflită?",
          "options": [
            "Drenaj chirurgical percutanat al colecției, fără antibioterapie",
            "Laparotomie exploratorie imediată cu rezecție de cec",
            "Apendicectomie de urgență",
            "Repaus digestiv strict și monitorizare, fără antibioterapie",
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
            "Ambii pacienți necesită RMN imediat doar dacă durerea este accentuată nocturn",
            "Al doilea pacient poate aștepta 24 de ore, deoarece parapareza este reversibilă spontan în majoritatea cazurilor",
            "La ambii pacienți este suficientă radiografia simplă de coloană, RMN nefiind necesar"
          ],
          "correct": 0,
          "explanation": "Textul precizează că orice copil cu deficite neurologice nou apărute trebuie investigat imagistic imediat prin RMN, deoarece paraplegia se poate instala rapid și poate fi ireversibilă. La copiii cu dureri toracolombare localizate, fără deficite neurologice focale, investigația RMN poate fi amânată 24 de ore.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 588-598"
        },
        {
          "id": "47-4",
          "stem": "Un copil cu leucemie acută mieloblastică prezintă hiperleucocitoză severă (leucocite 350.000/mm3) și trombocitopenie cu valoare de 15.000/mm3, fără sângerare activă. Care dintre următoarele afirmații privind conduita transfuzională este corectă?",
          "options": [
            "Exsangvinotransfuzia este contraindicată la copiii cu hiperleucocitoză, indiferent de severitatea simptomelor",
            "Transfuzia de masă trombocitară este contraindicată la orice valoare a trombocitelor, din cauza riscului de agravare a leucostazei",
            "Transfuzia de masă trombocitară este permisă pentru profilaxia hemoragiei, deoarece trombocitele nu modifică semnificativ vâscozitatea sanguină",
            "Transfuzia de concentrat eritrocitar trebuie administrată imediat, fără restricții, pentru corectarea anemiei",
            "Transfuzia de plasmă proaspătă congelată este tratamentul de primă intenție al hiperleucocitozei"
          ],
          "correct": 2,
          "explanation": "Pacienții cu trombocitopenie sub 20.000/ml pot primi transfuzie de masă trombocitară pentru prevenirea hemoragiei, deoarece trombocitele nu modifică semnificativ vâscozitatea sanguină. În schimb, concentratul eritrocitar crește vâscozitatea sanguină și trebuie utilizat cu prudență la acești pacienți. Exsangvinotransfuzia și/sau leucafereza pot fi utile pentru scăderea rapidă a numărului de leucocite în formele severe.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 588-598"
        },
        {
          "id": "47-5",
          "stem": "Un copil de 8 ani, aflat sub tratament cu vincristină, prezintă hiponatremie severă simptomatică (natremie 116 mmol/l, cu convulsii), atribuită SIADH. Se decide corectarea natremiei cu soluție salină hipertonă și furosemid intravenos. Care este rata maximă recomandată de corecție a natremiei, pentru a evita o complicație neurologică gravă?",
          "options": [
            "4-6 mmol/l/oră",
            "Fără limită, corecția trebuie să fie cât mai rapidă posibil",
            "Natremia trebuie normalizată complet în primele 2 ore",
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
            "Efect motor intestinal direct al catecolaminelor secretate în exces de tumoră",
            "Secreție tumorală de peptid intestinal vasoactiv (sindrom Kerner-Morrison), în cadrul unui neuroblastom",
            "Sindrom de malabsorbție prin infiltrare limfatică mezenterică, specific histiocitozei Langerhans",
            "Insuficiență pancreatică exocrină secundară compresiei ductului pancreatic de către tumoră"
          ],
          "correct": 2,
          "explanation": "Textul menționează explicit, printre simptomele asociate producerii de catecolamine de către neuroblastom, sindromul Kerner-Morrison - o tumoră secretantă de peptid vasoactiv intestinal, care determină diaree cronică cu falimentul creșterii și niveluri scăzute de potasiu. Localizarea retroperitoneală, de-a lungul lanțului simpatic, este tipică pentru neuroblastom.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1264-1269"
        },
        {
          "id": "48-2",
          "stem": "O fetiță de 3 ani este evaluată pentru mișcări oculare haotice, multidirecționale (opsoclonus), mioclonii ale trunchiului și ataxie de mers, instalate progresiv în câteva săptămâni. Investigațiile decelează o tumoră retroperitoneală, iar examenul histopatologic stabilește diagnosticul de neuroblastom bine diferențiat, care este extirpat chirurgical. Care dintre următoarele afirmații despre acest tablou clinic este corectă?",
          "options": [
            "Sindromul de ataxie-opsoclonus-mioclonus asociază, de regulă, un prognostic oncologic favorabil, dar simptomatologia neurologică poate persista chiar și după extirparea tumorii",
            "Sindromul descris este specific tumorii Wilms și nu a fost descris în neuroblastom",
            "Ataxia-opsoclonus-mioclonus este determinată exclusiv de metastazele cerebrale ale neuroblastomului",
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
            "Sindromul WAGR, prin deleția genei WT1 de pe cromozomul 11p13",
            "Sindromul Perlman, în contextul unor mutații ale genelor care codează ribonucleaza",
            "Sindromul Li-Fraumeni, prin mutații ale genelor TP53 și CHEK2",
            "Sindromul Beckwith-Wiedemann, prin deleția genei WT2 de pe cromozomul 11p15"
          ],
          "correct": 1,
          "explanation": "Sindromul WAGR reunește tumora Wilms cu aniridia, malformații genito-urinare (hipospadias, criptorhidie, rinichi în potcoavă) și retard mintal, fiind asociat cu deleția cromozomului 11p13 (gena WT1). Beckwith-Wiedemann, Denys-Drash, Li-Fraumeni și Perlman sunt alte sindroame asociate nefroblastomului, dar cu tablou clinic și anomalii genetice diferite, descrise distinct în text.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1296-1298"
        },
        {
          "id": "48-4",
          "stem": "Un sugar anterior eutrofic dezvoltă, în decurs de câteva luni, o caşexie marcată, cu emaciere severă, în absența unor modificări evidente ale apetitului sau a unor simptome digestive; paradoxal, copilul pare alert, uneori euforic. Care este localizarea cea mai probabilă a unei tumori cerebrale la acest sugar?",
          "options": [
            "Tumoră de emisferă cerebrală",
            "Tumoră/infiltrare de trunchi cerebral",
            "Tumoră/infiltrare diencefalică (regiune hipotalamică), cu sindrom diencefalic",
            "Tumoră a regiunii pineale, cu sindrom Parinaud",
            "Tumoră infratentorială, de fosă posterioară"
          ],
          "correct": 2,
          "explanation": "Tabelul cu semnele și simptomele tumorilor SNC în funcție de localizare arată că tumora/infiltrarea diencefalică se manifestă prin sindrom diencefalic - cașexie apărută la sugarii inițial eutrofici, spre deosebire de tumorile pineale (sindrom Parinaud), infratentoriale (ataxie, nistagmus) sau de trunchi cerebral (oftalmoplegie orizontală, pareze de nervi cranieni).",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1264-1269"
        },
        {
          "id": "48-5",
          "stem": "Un copil de 4 ani prezintă poliurie și polidipsie, exoftalmie bilaterală progresivă și leziuni osteolitice multiple ale calotei craniene, vizibile radiologic, cu aspect de „hartă geografică\". Care este diagnosticul cel mai probabil?",
          "options": [
            "Tumoră Wilms cu metastaze osoase craniene",
            "Craniofaringiom",
            "Neuroblastom cu determinări metastatice osoase craniene",
            "Histiocitoza Langerhans, forma localizată (granulom eozinofil unifocal)",
            "Histiocitoza Langerhans, forma diseminată cronică (Hand-Schuller-Christian)"
          ],
          "correct": 4,
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
            "Deshidratare severă (peste 10% din greutatea corporală)",
            "Deshidratare sub 3% din greutatea corporală, fără semnificație clinică",
            "Deshidratare ușoară (3-5% din greutatea corporală)",
            "Nu se poate aprecia clinic, fiind necesară exclusiv determinarea greutății pre-boală",
            "Deshidratare medie (6-9% din greutatea corporală)"
          ],
          "correct": 0,
          "explanation": "Conform tabelului 17.2, asocierea puls slab și rapid, oligoanurie, față încercănată, fontanelă deprimată, pliu cutanat persistent, absența lacrimilor, mucoase uscate și timp de recolorare capilară foarte întârziat caracterizează deshidratarea severă (>10% din greutate). Formele ușoare și medii au tablou clinic mai puțin sever (puls normal/tahicardie și diureză redusă, respectiv oligurie și iritabilitate/letargie, fără pliu persistent sau TRC foarte întârziat).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "49-2",
          "stem": "Un copil cu greutatea de 25 kg necesită calcularea necesarului hidric de întreținere pe 24 de ore, conform metodei Holliday-Segar descrise în text. Care este necesarul de lichide/zi?",
          "options": [
            "1000 ml/zi",
            "1500 ml/zi",
            "2000 ml/zi",
            "1600 ml/zi",
            "1250 ml/zi"
          ],
          "correct": 3,
          "explanation": "Pentru greutăți peste 20 kg, metoda Holliday-Segar prevede 1500 ml + 20 ml pentru fiecare kg peste 20 kg. Pentru 25 kg: 1500 ml + 20 ml x 5 kg = 1600 ml/zi. Această metodă este utilizată pentru calcularea necesarului de lichide și electroliți în cele 24-48 de ore de corectare a deshidratării.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "49-3",
          "stem": "Un sugar cu gastroenterită acută, la care pierderile hidroelectrolitice prin diaree au fost înlocuite predominant cu apă, dezvoltă o natremie de 122 mEq/l. Care este mecanismul fiziopatologic principal ce explică reducerea marcată a volumului intravascular la acest tip de deshidratare?",
          "options": [
            "Pierderea insensibilă crescută prin evaporare cutanată",
            "Trecerea apei din spațiul extracelular în spațiul intracelular",
            "Creșterea secreției de hormon antidiuretic cu retenție hidrică intravasculară",
            "Extravazarea lichidelor intravasculare în al treilea spațiu",
            "Trecerea apei din spațiul intracelular în spațiul extracelular"
          ],
          "correct": 1,
          "explanation": "Textul precizează că deshidratarea hiponatremică (Na<130 mEq/l) determină o reducere importantă a volumului intravascular, explicată prin trecerea apei din spațiul extracelular în spațiul intracelular. Acest tip apare când pierderile de lichide bogate în sodiu sunt înlocuite cu apă, concentrația sodiului seric scăzând suplimentar.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "49-4",
          "stem": "Un sugar cu deshidratare hipernatremică (Na=168 mEq/l) este corectat rapid prin administrare de lichide hipotone, iar în cursul corectării dezvoltă convulsii și alterarea stării de conștiență. Care este explicația fiziopatologică cea mai probabilă, conform textului?",
          "options": [
            "Hipocalcemie secundară administrării masive de bicarbonat de sodiu",
            "Hemoragie intracraniană prin creșterea bruscă a volumului intravascular",
            "Edem cerebral prin trecerea apei din spațiul extracelular hipoton în celulele creierului, ca urmare a scăderii rapide a osmolarității extracelulare",
            "Hipoglicemie secundară administrării de soluții glucozate concentrate",
            "Mielinoliză pontină centrală prin corectare rapidă a sodiului"
          ],
          "correct": 2,
          "explanation": "Textul arată că scăderea rapidă a osmolarității extracelulare în timpul corectării hipernatremiei determină trecerea apei din spațiul extracelular în celulele creierului, producând edem cerebral și convulsii. Din acest motiv, corectarea hipernatremiei trebuie făcută lent, în 3-4 zile în formele severe, fără ritm rapid în primele 8 ore. Mielinoliza pontină centrală este riscul asociat corectării rapide a hiponatremiei, nu al hipernatremiei.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        },
        {
          "id": "49-5",
          "stem": "Un sugar de 6 luni se prezintă în stare de șoc hipovolemic secundar unei gastroenterite acute severe (puls slab și rapid, oligoanurie, timp de recolorare capilară foarte întârziat). Care este conduita inițială recomandată pentru refacerea volemiei?",
          "options": [
            "Ser fiziologic 20 ml/kg administrat în 10-15 minute, repetabil până la refacerea volemiei (maximum 60 ml/kg)",
            "Bicarbonat de sodiu în bolus, pentru corectarea acidozei metabolice asociate",
            "Soluție glucozată 5% în bolus de 20 ml/kg administrată rapid",
            "Soluție hipotonă de clorură de sodiu 0,45% în bolus de 20 ml/kg",
            "Rehidratare orală sau pe sondă nazogastrică, similar deshidratării ușoare/moderate"
          ],
          "correct": 0,
          "explanation": "În SDA severă, pentru refacerea volemiei se administrează ser fiziologic 20 ml/kg în 10-15 minute, repetabil până la refacerea volemiei, până la maximum 60 ml/kg. Rehidratarea orală/nazogastrică este rezervată formelor ușoare/moderate, iar soluțiile glucozate sau hipotone nu sunt indicate pentru refacerea rapidă a volemiei în șocul hipovolemic.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 165-167"
        }
      ]
    },
    {
      "num": 50,
      "title": "Sindromul hemolitic-uremic. Purpura trombotică trombocitopenică",
      "questions": [
        {
          "id": "50-1",
          "stem": "Un copil în vârstă de 2 ani prezintă, în lunile de vară, un episod de diaree inițial apoasă, ulterior cu scaune sangvinolente și dureri abdominale intense. La aproximativ o săptămână de la debutul diareei apar brusc paloare marcată, iritabilitate și oligurie. Laboratorul evidențiază anemie cu schizocite pe frotiul periferic și trombocitopenie de 45.000/mm3. Care este etiologia cel mai probabil implicată?",
          "options": [
            "Escherichia coli enterohemoragică (producătoare de shiga-toxină), tulpina O157:H7",
            "Rejet de transplant medular",
            "Infecție invazivă cu Streptococcus pneumoniae",
            "Administrare de antiinflamatoare nesteroidiene",
            "Deficit congenital de factor H al complementului"
          ],
          "correct": 0,
          "explanation": "Tabloul descris (diaree inițial apoasă, apoi sangvinolentă, urmată la 1-2 săptămâni de paloare, iritabilitate și oligurie, cu anemie hemolitică microangiopatică și trombocitopenie) este caracteristic sindromului hemolitic-uremic tipic asociat cu diaree (D+SHU), care reprezintă peste 90% din cazurile de SHU la copil și apare tipic vara-toamna la copii mici. Tulpina E. coli O157:H7 este responsabilă de 3/4 dintre cazurile de SHU.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1318-1320"
        },
        {
          "id": "50-2",
          "stem": "Un copil cu diaree acută este diagnosticat precoce cu infecție cu Escherichia coli enterohemoragic (producătoare de shiga-toxină). Care este atitudinea corectă privind antibioterapia?",
          "options": [
            "Se evită terapia antibiotică, deoarece poate accelera eliberarea de shiga-toxină în circulație și poate precipita apariția SHU",
            "Se administrează penicilină G în doză de 100.000 UI/kg/zi",
            "Se administrează obligatoriu vancomicină asociată cu o cefalosporină de generația a treia",
            "Se administrează imediat un antibiotic cu spectru larg pentru a preveni apariția SHU",
            "Se administrează eritromicină pentru efectul său antiinflamator asupra migrării PMN"
          ],
          "correct": 0,
          "explanation": "Textul precizează explicit că se va evita terapia antibiotică în diareea cu Escherichia coli, întrucât aceasta accelerează eliberarea de shiga-toxină în circulație, putând precipita apariția SHU. Asocierea vancomicină-cefalosporină de generația a treia este rezervată SHU asociat infecției pneumococice, nu celui produs de E. coli.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1318-1320"
        },
        {
          "id": "50-3",
          "stem": "Un copil cu sindrom hemolitic-uremic dezvoltă hiperpotasemie de 8 mEq/L asociată cu modificări electrocardiografice semnificative. Care este conduita indicată?",
          "options": [
            "Plasmafereză de urgență, aceasta fiind eficientă în toate formele de SHU",
            "Transfuzie de masă eritrocitară în regim de urgență",
            "Inițierea hemodializei sau a dializei peritoneale",
            "Administrare de gluconat de calciu și continuarea monitorizării, fără dializă",
            "Administrarea de furosemid și reevaluare peste 24 de ore, fără alte măsuri"
          ],
          "correct": 2,
          "explanation": "Printre criteriile de inițiere a dializei în SHU se numără hiperpotasemia peste 7,5 mEq/L, în special dacă este asociată cu modificări semnificative ECG și tulburări de ritm, alături de uree > 100 mg/dL, insuficiență cardiacă congestivă și encefalopatie hipertensivă. Plasmafereza nu și-a dovedit eficiența în SHU produs de shiga-toxine.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1318-1320"
        },
        {
          "id": "50-4",
          "stem": "O adolescentă de 15 ani se prezintă cu febră, confuzie cu debut recent, peteșii și paloare. Laboratorul arată anemie hemolitică cu schizocite pe frotiu, trombocitopenie marcată și o ușoară creștere a ureei și creatininei. Testele de coagulare (PT, PTT) sunt normale. Care este diagnosticul cel mai probabil?",
          "options": [
            "Sindrom hemolitic-uremic tipic asociat cu diaree",
            "Sindrom Evans",
            "Coagulare intravasculară diseminată",
            "Purpură trombotică trombocitopenică (PTT)",
            "Purpură trombocitopenică imună (idiopatică)"
          ],
          "correct": 3,
          "explanation": "PTT este o microangiopatie trombotică definită prin pentada febră, anemie hemolitică microangiopatică, trombocitopenie, afectare renală și modificări la nivelul sistemului nervos central, tablou clinic similar SHU, dar care apare de obicei la adulți și ocazional la adolescenți. Coagularea intravasculară diseminată se însoțește tipic de teste de coagulare alterate, iar purpura trombocitopenică imună și sindromul Evans nu asociază anemie hemolitică microangiopatică cu schizocite și afectare renală.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 2614-2614"
        },
        {
          "id": "50-5",
          "stem": "În forma dobândită (autoimună) de purpură trombotică trombocitopenică, care este mecanismul patogenic principal și care este tratamentul de elecție?",
          "options": [
            "Deficit dobândit de ADAMTS13, prin autoanticorpi anti-ADAMTS13; tratamentul de elecție este plasmafereza (schimbul plasmatic)",
            "Deficit de proteină C; tratamentul de elecție este anticoagularea cu heparină",
            "Infecție cu Escherichia coli producătoare de shiga-toxină; tratamentul este exclusiv de susținere",
            "Deficit congenital de factor H al complementului; tratamentul de elecție este eculizumab",
            "Nivel normal de ADAMTS13, cu mecanism mediat prin complement; tratamentul de elecție este antibioterapia"
          ],
          "correct": 0,
          "explanation": "Majoritatea cazurilor de PTT sunt cauzate de un deficit dobândit, mediat prin autoanticorpi, al metaloproteazei ADAMTS13, responsabilă de clivarea multimerilor de factor von Willebrand; nivelurile de ADAMTS13 sunt de obicei normale în SHU. Tratamentul PTT dobândite este plasmafereza, eficientă la 80-95% dintre pacienți, în timp ce forma congenitală se tratează prin perfuzii repetate de plasmă proaspătă congelată.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 2614-2614"
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
            "Hiperparatiroidismul neonatal sever, secundar unei mutații homozigote inactivatoare a CaSR",
            "Sindromul Williams",
            "Intoxicația cu vitamina D transmisă transplacentar de la mamă",
            "Hipofosfatazia congenitală",
            "Hipercalcemia hipocalciurică familială benignă (formă heterozigotă)"
          ],
          "correct": 0,
          "explanation": "Textul descrie hiperparatiroidismul neonatal sever ca fiind caracterizat prin hipercalcemie neonatală severă, hipercalciurie (raport clearance calciu/creatinină > 0,01), niveluri crescute de PTH, deshidratare, eșecul creșterii, demineralizare osoasă, fracturi multiple și deformații ale cutiei toracice, apărând la copii cu părinți consangvini prin mutații homozigote ale CaSR. Hipercalcemia hipocalciurică familială benignă are hipercalciurie marcat redusă (clearance calciu/creatinină < 0,01) și tablou clinic mult mai discret. Sindromul Williams și intoxicația cu vitamina D se asociază cu niveluri scăzute de PTH, nu crescute.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1143-1153"
        },
        {
          "id": "51-2",
          "stem": "Un copil de 8 ani este internat pentru hipercalcemie severă simptomatică (vărsături, dureri abdominale), cu semne clinice de deshidratare moderată. Care este prima măsură terapeutică recomandată?",
          "options": [
            "Administrarea imediată de furosemid, fără expansiune volemică prealabilă",
            "Corticoterapie sistemică în doză mare, ca primă linie terapeutică",
            "Bisfosfonat intravenos, ca primă linie, indiferent de starea de hidratare",
            "Dializă peritoneală de urgență",
            "Hidratare intravenoasă cu ser fiziologic 0,9%, urmată, dacă este necesar, de diuretic de ansă după corectarea stării de hidratare"
          ],
          "correct": 4,
          "explanation": "Textul precizează că hidratarea intravenoasă crește excreția renală de calciu și este măsura de urgență inițială, iar diureticele de ansă sunt utilizate doar la copiii cu stare de hidratare adecvată, deoarece depleția intravasculară exacerbează hipercalcemia. Dializa este rezervată hipercalcemiei severe cu oligurie, iar corticoterapia necesită excluderea prealabilă a unei cauze maligne.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1143-1153"
        },
        {
          "id": "51-3",
          "stem": "Un sugar aflat sub tratament cu amfotericină B pentru o infecție fungică sistemică dezvoltă hipocalcemie simptomatică, cu tetanie. Administrarea de calciu intravenos nu ameliorează semnificativ simptomele. Care este explicația fiziopatologică cea mai probabilă și conduita corectă?",
          "options": [
            "Hipocalcemia este secundară unei rezistențe la vitamina D; se indică doze mari de calcitriol",
            "Hipocalcemia reflectă un hipoparatiroidism autoimun asociat; se indică imunosupresie",
            "Hipocalcemia se datorează unui sindrom \"hungry bone\"; se indică restricția aportului de calciu",
            "Hipocalcemia este secundară hipomagneziemiei induse de amfotericină, care diminuă secreția de PTH și induce rezistență la acțiunea acestuia; este necesară corectarea magneziului",
            "Hipocalcemia este secundară hiperfosfatemiei induse de amfotericină; se indică chelatori de fosfat"
          ],
          "correct": 3,
          "explanation": "Textul menționează aminoglicozidele, amfotericina și cisplatinul drept cele mai comune medicamente care induc hipomagneziemie, iar depleția de magneziu induce hipocalcemie prin diminuarea secreției de PTH și rezistență musculară la acțiunea PTH. Hipocalcemia secundară hipomagneziemiei nu răspunde la tratamentul cu calciu, fiind necesară corectarea magneziului.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1143-1153"
        },
        {
          "id": "51-4",
          "stem": "Un sugar de 10 luni prezintă retard de dezvoltare motorie, hipotonie musculară generalizată, dureri osoase și un episod de convulsii hipocalcemice. Radiografia articulației radiocarpiene arată aspecte clasice de rahitism, cu debut precoce. Bilanțul biologic evidențiază hipocalcemie severă, grade variate de hipofosfatemie, fosfataze alcaline crescute, PTH mult crescut, nivel seric normal de 25(OH)D, dar nivel absent sau foarte redus de 1,25(OH)2D. Care este diagnosticul cel mai probabil și tratamentul de elecție?",
          "options": [
            "Rahitism hipofosfatemic X-linkat prin mutație PHEX; tratament cu supliment oral de fosfor",
            "Rahitism nutrițional prin deficit de vitamină D; tratament cu doze standard de colecalciferol oral",
            "Rezistență ereditară la acțiunea vitaminei D prin mutație a receptorului VDR (tip II); tratament cu doze foarte mari de calciu intravenos",
            "Deficit de 25-hidroxilază hepatică; tratament cu administrare exogenă de 25(OH)D",
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
            "Rahitism nutrițional prin deficit de vitamină D; tratament cu doză unică mare de colecalciferol (\"stoss therapy\")",
            "Deficit de 1-α-hidroxilază; tratament cu doze fiziologice de calcitriol în monoterapie",
            "Rahitism hipofosfatemic X-linkat, prin mutație a genei PHEX; tratament cu supliment oral de fosfor asociat cu 1,25(OH)2D",
            "Sindrom Fanconi; tratament cu bicarbonat și restricție proteică",
            "Hiperparatiroidism primar; paratiroidectomie"
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
            "Alcaptonurie",
            "Boala Wilson",
            "Fenilcetonurie",
            "Galactozemie",
            "Homocistinurie"
          ],
          "correct": 2,
          "explanation": "Tabloul descris este caracteristic fenilcetonuriei: pigmentaţie scăzută a pielii, părului şi ochilor, semne progresive de suferinţă a SNC (întârziere motorie, convulsii), eczemă şi mirosul de mucegai/şoarece al transpiraţiei şi urinei. Homocistinuria asociază habitus marfanoid şi luxaţie de cristalin, galactozemia apare după iniţierea alimentaţiei lactate cu icter şi hepatomegalie, boala Wilson debutează mai tardiv cu manifestări hepatice şi inelul Kayser-Fleischer, iar alcaptonuria se manifestă cu urină brun-neagră şi ocronoză la vârstă adultă.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 754-769"
        },
        {
          "id": "52-2",
          "stem": "În tratamentul de urgenţă al hiperamoniemiei neonatale severe, secundare unei anomalii a ciclului ureei, care dintre următoarele substanţe este contraindicată, deoarece creşte nivelul seric al amoniacului?",
          "options": [
            "Benzoat de sodiu",
            "Fenilbutirat de sodiu",
            "Arginină",
            "Carnitină",
            "Acid valproic"
          ],
          "correct": 4,
          "explanation": "Textul precizează explicit că în hiperamoniemie nu se administrează corticosteroizi (induc balanţă negativă a nitrogenului), manitol (ineficient în edemul cerebral din hiperamoniemie) sau acid valproic, deoarece acesta creşte nivelul seric de amoniac. Fenilbutiratul de sodiu, benzoatul de sodiu, arginina şi carnitina fac parte, dimpotrivă, din schema terapeutică recomandată.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 754-769"
        },
        {
          "id": "52-3",
          "stem": "Un nou-născut la termen, alimentat natural, dezvoltă în a doua săptămână de viaţă vărsături, diaree, icter, hepatomegalie şi letargie; probele de laborator arată galactozurie şi acidoză metabolică hipercloremică. Care este conduita terapeutică esenţială pentru asigurarea unui prognostic favorabil?",
          "options": [
            "Substituţie enzimatică cu agalsidază beta",
            "Dietă săracă în fenilalanină şi tirozină",
            "Restricţie proteică asociată cu administrare de benzoat de sodiu",
            "Dietă restrictivă în grăsimi, cu gustări dese, bogate în hidraţi de carbon",
            "Excluderea completă şi permanentă a alimentaţiei lactate (lapte şi produse lactate)"
          ],
          "correct": 4,
          "explanation": "Tabloul clinico-biologic este sugestiv pentru galactozemie, iar tratamentul de bază constă în excluderea alimentaţiei lactate pe toată perioada vieţii, ceea ce asigură o durată de viaţă şi un coeficient de inteligenţă normale. Textul menţionează că o întârziere a tratamentului de peste o lună determină leziuni cerebrale ireversibile, cataractă, ataxie şi deficit de vorbire. Celelalte conduite corespund altor boli metabolice (fenilcetonurie, tulburări ale acizilor graşi, boala Fabry).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 754-769"
        },
        {
          "id": "52-4",
          "stem": "Un adolescent de 15 ani acuză crampe musculare declanşate de efortul fizic, însoţite de episoade de mioglobinurie; nu prezintă hepatomegalie, iar glicemia este normală. Care tip de glicogenoză este cel mai probabil sugerat de acest tablou clinic?",
          "options": [
            "Tipul Ia (boala von Gierke)",
            "Tipul II (boala Pompe)",
            "Tipul III (boala Cori)",
            "Tipul V (boala McArdle)",
            "Tipul IV (boala Andersen)"
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
            "Este eficientă doar la pacienţii homozigoţi, fiind ineficientă la heterozigoţi",
            "Reduce mortalitatea cu 50%, faţă de doar 25% dacă tratamentul este iniţiat după accidentul coronarian",
            "Nu influenţează mortalitatea, ci doar dimensiunea xantoamelor tendinoase",
            "Reduce mortalitatea cu 90%, dar numai dacă tratamentul este iniţiat înainte de vârsta de 10 ani"
          ],
          "correct": 2,
          "explanation": "Textul precizează că tratamentul precoce cu statine reduce mortalitatea prin boală coronariană cu 50%, în timp ce, dacă tratamentul începe după producerea unui atac coronarian deja instalat, mortalitatea se reduce cu numai 25%. Aceasta subliniază importanţa diagnosticului şi tratamentului precoce în hipercolesterolemia familială, boală autozomal dominantă cu prevalenţă de 1:500 în populaţia generală.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 754-769"
        }
      ]
    },
    {
      "num": 53,
      "title": "Hiperglicemiile sugarului și copilului",
      "questions": [
        {
          "id": "53-1",
          "stem": "Un sugar cu hiperglicemie severă (glicemie 700 mg/dL) prezintă o natremie măsurată de 128 mEq/L. Folosind formula de corecție a natremiei în context de hiperglicemie ([Na]corectat = [Na]măsurat + 1,6 × ([glucoză] − 100)/100), care este natremia corectată, cea care reflectă raportul real dintre Na+ total și apa totală a organismului?",
          "options": [
            "Rămâne 128 mEq/L, deoarece hiperglicemia nu influențează natremia măsurată",
            "Aproximativ 137-138 mEq/L (practic normală)",
            "Aproximativ 158 mEq/L (hipernatremie severă)",
            "Aproximativ 148 mEq/L (hipernatremie ușoară)",
            "Aproximativ 118 mEq/L (hiponatremie severă, agravată)"
          ],
          "correct": 1,
          "explanation": "Aplicând formula: (700-100)/100 = 6, 6 × 1,6 = 9,6; 128 + 9,6 ≈ 137,6 mEq/L, adică aproape normală. Hiperglicemia crește osmolalitatea plasmatică și determină deplasarea apei din spațiul intracelular în cel extracelular, diluând Na+ măsurat, fără ca aceasta să reprezinte un deficit real de sodiu. Când hiperglicemia se rezolvă, apa revine intracelular și natremia măsurată crește spre valoarea corectată.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 390-390"
        },
        {
          "id": "53-2",
          "stem": "Un copil cu deshidratare hipertonă severă (hipernatremie) prezintă și hiperglicemie moderată asociată. Care este conduita corectă privind hiperglicemia în acest context?",
          "options": [
            "Se administrează insulină intravenos pentru corectarea rapidă a glicemiei, indiferent de natremie",
            "Se întrerupe complet aportul de lichide și se administrează exclusiv ser fiziologic hiperton 3%",
            "Se administrează un bolus de glucoză hipertonă 25% pentru prevenirea hipoglicemiei de rebound",
            "Se corectează natremia cu peste 10 mEq/L în 24 de ore pentru a compensa hiperglicemia",
            "Hiperglicemia nu se tratează de regulă cu insulină, deoarece scăderea bruscă a glicemiei poate precipita edem cerebral prin scăderea rapidă a osmolalității plasmatice"
          ],
          "correct": 4,
          "explanation": "Textul precizează explicit că hiperglicemia asociată hipernatremiei nu este de obicei tratată cu insulină, deoarece scăderea acută a glicemiei poate precipita edem cerebral prin scăderea rapidă a osmolalității plasmatice; rareori este necesară doar reducerea concentrației de glucoză din fluidele intravenoase. Corectarea hipernatremiei trebuie făcută lent, cu maximum 10 mEq/L/24h, pentru a evita edemul cerebral.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 390-390"
        },
        {
          "id": "53-3",
          "stem": "Nou-născutul unei mame cu diabet zaharat pregestațional dezvoltă macrosomie fetală (greutate mare pentru vârsta gestațională). Care este secvența fiziopatologică principală descrisă pentru acest fenomen?",
          "options": [
            "Hiperglicemia maternă determină hiperglicemie fetală, care declanșează hiperinsulinism fetal, cu creșterea captării hepatice a glucozei, glicogenogeneză, lipogeneză și sinteză proteică accelerate",
            "Hipoglicemia maternă determină hipoinsulinism fetal și catabolism proteic crescut la făt",
            "Hiperglicemia fetală inhibă dezvoltarea celulelor beta pancreatice fetale, ducând la hipoinsulinism compensator",
            "Insulina maternă traversează placenta și stimulează direct creșterea țesuturilor fetale",
            "Hiperglicemia maternă determină restricție de creștere intrauterină prin vasoconstricție placentară"
          ],
          "correct": 0,
          "explanation": "Textul descrie secvența: hiperglicemia maternă traversează placenta, determinând hiperglicemie fetală; răspunsul pancreatic fetal produce hiperinsulinemie/hiperinsulinism, care cresc captarea hepatică a glucozei, glicogenogeneza, lipogeneza și sinteza proteică, ducând la macrosomie. Este subliniat explicit că insulina maternă (și cea exogenă) nu traversează placenta, spre deosebire de glucoză.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 983-983"
        },
        {
          "id": "53-4",
          "stem": "Un nou-născut macrosom, din mamă cu diabet zaharat necontrolat, dezvoltă cardiomegalie cu hipertrofie septală interventriculară și stenoză subaortică hipertrofică tranzitorie, atribuită hiperglicemiei și hiperinsulinismului cronic fetal (încărcare cu glicogen la nivel miocardic). Care dintre următoarele conduite este CONTRAINDICATĂ în acest context?",
          "options": [
            "Monitorizarea ecocardiografică în așteptarea rezoluției spontane",
            "Evitarea suprasolicitării volemice cardiace",
            "Administrarea de beta-blocante, care pot ameliora obstrucția",
            "Conduita conservatoare, cu urmărire clinică atentă",
            "Administrarea de agenți inotropi, deoarece agravează obstrucția la ejecție"
          ],
          "correct": 4,
          "explanation": "Textul precizează că agenții inotropi agravează obstrucția în stenoza subaortică hipertrofică tranzitorie a nou-născutului din mamă diabetică și sunt contraindicați, în timp ce beta-blocantele pot ameliora obstrucția, iar afecțiunea se remite de regulă spontan în timp, motiv pentru care conduita uzuală este conservatoare, cu supraveghere.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 983-983"
        },
        {
          "id": "53-5",
          "stem": "Un nou-născut mic pentru vârsta gestațională dezvoltă în prima zi de viață poliurie, deshidratare, scădere ponderală și acidoză, tabloul fiind sugestiv pentru diabet zaharat neonatal tranzitor (TNDM). Care este cea mai frecventă cauză genetică descrisă pentru această afecțiune?",
          "options": [
            "Mutație activatoare a canalului KATP (subunitatea KCNJ11)",
            "Mutație în gena insulinei (INS), cu transmitere autozomal dominantă",
            "Deleție a genei glucokinazei (GCK)",
            "Anomalie de amprentare (imprinting) la nivelul locusului cromozomial 6q24",
            "Anomalie cromozomială de tip trisomie 21"
          ],
          "correct": 3,
          "explanation": "Textul menționează că diabetul zaharat neonatal tranzitor apare tipic în prima zi de viață, la nou-născuți mici pentru vârsta gestațională, manifestându-se prin poliurie, deshidratare, scădere ponderală și acidoză, iar cauza cea mai frecventă (70% din cazuri) este o perturbare a locusului amprentat de pe cromozomul 6q24; unii pacienți au risc de recurență a diabetului mai târziu în viață.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 983-983"
        }
      ]
    },
    {
      "num": 54,
      "title": "Hipoglicemiile sugarului și copilului",
      "questions": [
        {
          "id": "54-1",
          "stem": "Un nou-născut macrosom, provenit din mamă fără diabet gestațional, dezvoltă hipoglicemie severă la 4-6 ore de la ultima masă. La momentul hipoglicemiei se constată insulinemie >5 µU/mL, beta-hidroxibutirat și acizi grași liberi plasmatici scăzuți, absența cetonuriei, iar administrarea de glucagon produce o creștere a glicemiei cu peste 40 mg/dL. Care este diagnosticul cel mai probabil?",
          "options": [
            "Hipoglicemie hiperinsulinemică congenitală (defect al canalului KATP al celulei beta)",
            "Insuficiență corticosuprarenaliană primară (boala Addison)",
            "Deficit de acil-CoA dehidrogenază a acizilor grași",
            "Hipoglicemie cetotică idiopatică",
            "Glicogenoză tip I (deficit de glucozo-6-fosfatază)"
          ],
          "correct": 0,
          "explanation": "Textul descrie hiperinsulinismul congenital ca fiind sugerat de macrosomie fără istoric de diabet matern, dezvoltarea rapidă a hipoglicemiei la 4-8 ore de post, insulinemie >5 µU/mL, hipocetonemie și hipoacidemie grasă, plus un răspuns glicemic la glucagon >40 mg/dL, care confirmă rezerve hepatice de glicogen intacte dar suprimate de insulină. Hipoglicemia cetotică și defectele enzimatice se asociază cu cetonurie prezentă, absentă în acest caz.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 848-862"
        },
        {
          "id": "54-2",
          "stem": "Un sugar de 2 luni este adus în urgență cu o criză convulsivă; glicemia capilară este 22 mg/dL. Conform conduitei recomandate pentru hipoglicemia simptomatică însoțită de convulsii la sugar, care este bolusul intravenos inițial de glucoză recomandat?",
          "options": [
            "4 mL/kg glucoză 10% (D10W)",
            "2 mL/kg glucoză 25% (D25W)",
            "10 mL/kg glucoză 5% (D5W)",
            "Doar gel oral cu dextroză 40%, fără abord intravenos",
            "1 mL/kg glucoză 50% (D50W)"
          ],
          "correct": 0,
          "explanation": "Tratamentul hipoglicemiei simptomatice acute la nou-născut/sugar constă în bolus IV de 2 mL/kg D10W urmat de perfuzie continuă de 6-8 mg/kg/min; dacă sunt prezente convulsii hipoglicemice, textul recomandă un bolus mai mare, de 4 mL/kg D10W. Gelul de dextroză oral este menționat ca alternativă la alimentația enterală, nu ca tratament al convulsiilor.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 848-862"
        },
        {
          "id": "54-3",
          "stem": "O fetiță de 3 ani, cu o infecție respiratorie și aport alimentar redus în seara precedentă, este găsită dificil de trezit dimineața și prezintă o criză convulsivă. Glicemia este 35 mg/dL, cu cetonurie marcată; insulinemia recoltată la momentul hipoglicemiei este ≤5 µU/mL. Care este diagnosticul cel mai probabil?",
          "options": [
            "Boala urinilor cu miros de arțar (MSUD)",
            "Sindrom Beckwith-Wiedemann",
            "Insulinom (adenom de celule insulare)",
            "Hipoglicemie cetotică idiopatică",
            "Hiperinsulinism congenital"
          ],
          "correct": 3,
          "explanation": "Hipoglicemia cetotică idiopatică este cea mai frecventă cauză de hipoglicemie a copilăriei, apare tipic între 18 luni și 5 ani, este precipitată de aport caloric redus în context de boală intercurentă și se caracterizează prin cetonurie/cetonemie marcată cu insulinemie adecvat scăzută (≤5 µU/mL). Hiperinsulinismul și insulinomul sunt excluse de prezența cetonuriei, care nu apare când insulina este inadecvat crescută.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 848-862"
        },
        {
          "id": "54-4",
          "stem": "Un sugar de 6 luni prezintă un episod de comă hipoglicemică declanșat de post prelungit în context febril, asociat cu hepatomegalie, cardiomiopatie și hipotonie. Investigațiile arată hipoglicemie fără cetonemie/cetonurie, carnitină plasmatică scăzută și aciduria dicarboxilică în urină. Care este cauza cea mai probabilă?",
          "options": [
            "Hipoglicemie cetotică idiopatică",
            "Glicogenoză tip I (deficit de glucozo-6-fosfatază)",
            "Deficit de acil-CoA dehidrogenază a acizilor grași cu lanț lung/mediu",
            "Deficit de fructozo-1,6-difosfatază",
            "Hiperinsulinism congenital"
          ],
          "correct": 2,
          "explanation": "Textul descrie exact acest tablou pentru deficitul de acil-CoA dehidrogenază a acizilor grași cu lanț lung sau mediu: hipoglicemie de post cu hepatomegalie, cardiomiopatie, hipotonie, carnitină plasmatică scăzută, absența cetozei și aciduria dicarboxilică, uneori cu tablou tip Reye sau evenimente asemănătoare morții subite. Celelalte entități se însoțesc fie de cetonurie prezentă (hipoglicemie cetotică, glicogenoze), fie de absența cardiomiopatiei/carnitinei scăzute (hiperinsulinism).",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 848-862"
        },
        {
          "id": "54-5",
          "stem": "Care este mecanismul de acțiune al diazoxidului în tratamentul hipoglicemiei hiperinsulinemice?",
          "options": [
            "Stimulează secreția de glucagon la nivelul celulelor alfa pancreatice",
            "Inhibă competitiv legarea insulinei de receptorul său hepatic",
            "Inhibă glucokinaza, reducând fosforilarea intracelulară a glucozei în celula beta",
            "Menține deschis canalul de potasiu ATP-dependent (KATP) al celulei beta pancreatice, inhibând astfel secreția de insulină",
            "Blochează influxul de calciu prin interferență directă cu canalele de calciu, similar octreotidului"
          ],
          "correct": 3,
          "explanation": "Conform textului, sulfonilureele declanșează secreția de insulină prin închiderea canalului KATP, în timp ce diazoxidul inhibă acest proces, menținând canalul deschis și blocând depolarizarea membranară necesară exocitozei insulinei. Octreotidul acționează printr-un mecanism diferit, prin interferența cu influxul de calciu.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 848-862"
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
            "Cetoacidoză diabetică severă",
            "Cetoacidoză diabetică moderată",
            "Cetoacidoză diabetică ușoară",
            "Acidoză lactică",
            "Comă hiperglicemică hiperosmolară"
          ],
          "correct": 1,
          "explanation": "Conform tabelului de stadializare a CAD, forma moderată se caracterizează prin pH < 7,20, CO2 total 15-11 mEq/L, glicemie 600-800 mg% și tabloul clinic cu anorexie, vărsături, semne de deshidratare, halenă acetonemică și respirație Kussmaul, fără elementele de severitate (hipotensiune, hipotonie musculară, comă) specifice formei severe. Forma severă presupune pH < 7,10, deshidratare intensă cu facies cadaveric, hipotensiune și comă, elemente absente în acest caz.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 403-432"
        },
        {
          "id": "55-2",
          "stem": "Un copil de 3 ani este adus în urgență după o posibilă ingestie accidentală de medicamente, prezentând polipnee, alterarea stării de conștiență și deshidratare, fără istoric anterior de poliurie sau polidipsie. Glicemia este 220 mg/dL, corpii cetonici sunt rareori evidențiați în urină, iar concentrația serică a unei anumite substanțe este marcat crescută. Care este cel mai probabil diagnostic?",
          "options": [
            "Intoxicație cu salicilați",
            "Acidoză tubulară renală",
            "Cetoacidoză diabetică inaugurală",
            "Comă hiperglicemică hiperosmolară",
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
            "Hipoglicemia de rebound",
            "Edemul cerebral",
            "Hipopotasemia severă",
            "Acidoza lactică"
          ],
          "correct": 2,
          "explanation": "Textul precizează explicit că, printre obiectivele tratamentului CAD, se numără prevenirea complicațiilor acestuia, edemul cerebral fiind cel mai de temut. Rehidratarea trebuie făcută atent, cu atât mai lentă cu cât dezechilibrul metabolic inițial este mai mare, iar glicemia nu trebuie corectată prea rapid tocmai pentru a evita această complicație gravă.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 403-432"
        },
        {
          "id": "55-4",
          "stem": "Un copil diagnosticat cu diabet zaharat tip 1 de 6 săptămâni necesită în prezent o doză de insulină de 0,4 UI/kg/zi, nu prezintă glicozurie, iar HbA1c este 6,2%, acest tablou menținându-se de peste o lună. Cum se caracterizează corect această evoluție?",
          "options": [
            "Control metabolic nesatisfăcător, necesitând creșterea dozelor",
            "Remisiune totală, cu posibilitatea opririi insulinoterapiei",
            "Debut lent al bolii, nu remisiune",
            "Remisiune parțială (\"luna de miere\")",
            "Fenomen Somogyi"
          ],
          "correct": 3,
          "explanation": "Remisiunea parțială se definește prin 4 criterii obligatorii: doză de insulină < 0,5 UI/kg/zi, glicozurie absentă, HbA1c < 7% și durată mai mare de 4 săptămâni, toate îndeplinite în acest caz. Remisiunea totală, mult mai rară (doar 3% din cazuri), presupune oprirea completă a insulinoterapiei cu menținerea echilibrului metabolic, ceea ce nu este cazul aici, deoarece pacientul continuă tratamentul insulinic.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 403-432"
        },
        {
          "id": "55-5",
          "stem": "Un adolescent cu diabet zaharat tip 1 aflat sub insulinoterapie intensivă prezintă în mod repetat hiperglicemie matinală. Determinarea glicemiei nocturne, în jurul orei 3:00, evidențiază o valoare scăzută, fără manifestări clinice sesizate de pacient. Care este conduita terapeutică corectă?",
          "options": [
            "Creșterea dozei de insulină intermediară administrată la ora 22:00",
            "Scăderea dozei de insulină administrată seara",
            "Trecerea imediată la pompa de insulină",
            "Administrarea de glucagon injectabil în fiecare seară",
            "Creșterea aportului de glucide la cina de la ora 19:00, fără modificarea insulinei"
          ],
          "correct": 1,
          "explanation": "Tabloul descris corespunde fenomenului Somogyi: hiperglicemie matinală consecutivă unei hipoglicemii nocturne neconștientizate, produsă prin descărcarea hormonilor de contrareglare (glucagon, cortizol, adrenalină, hormon de creștere). Tratamentul constă în scăderea dozei de insulină de seară, spre deosebire de fenomenul \"dawn\", în care hiperglicemia matinală apare fără hipoglicemie nocturnă și se tratează prin creșterea dozei de insulină intermediară de la ora 22:00.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 403-432"
        }
      ]
    },
    {
      "num": 56,
      "title": "Cromozomopatii: trisomia 21, sindromul Turner, sindromul Klinefelter",
      "questions": [
        {
          "id": "56-1",
          "stem": "Un nou-născut la termen prezintă hipotonie generalizată, pliu palmar transvers unic, fante palpebrale oblice în sus, epicantus, urechi mici displazice şi vărsături bilioase repetate cu distensie abdominală minimă; radiografia abdominală evidenţiază aspectul de \"double bubble\" (atrezie duodenală). Care este diagnosticul cel mai probabil?",
          "options": [
            "Sindrom Klinefelter",
            "Sindrom Down (trisomia 21)",
            "Sindrom Edwards (trisomia 18)",
            "Sindrom Turner",
            "Sindrom Noonan"
          ],
          "correct": 1,
          "explanation": "Hipotonia, pliul palmar transvers unic, fantele palpebrale oblice în sus şi urechile mici displazice sunt trăsături caracteristice ale sindromului Down în perioada neonatală. Atrezia duodenală este una dintre anomaliile gastrointestinale congenitale asociate frecvent trisomiei 21, conform textului.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 659-671"
        },
        {
          "id": "56-2",
          "stem": "Un copil de 8 ani cu sindrom Down doreşte să participe la gimnastică în cadrul Special Olympics, sport care presupune hiperextensia gâtului. Ştiind că această populaţie are risc crescut de instabilitate atlantoaxială, care este conduita recomandată înaintea participării?",
          "options": [
            "Ecocardiografie de control, fără alte investigaţii",
            "Repetarea cariotipului pentru confirmarea diagnosticului",
            "RMN cerebral de rutină la toţi copiii cu sindrom Down",
            "Radiografii de coloană cervicală în flexie şi extensie completă",
            "Interzicerea definitivă a oricărei activităţi sportive"
          ],
          "correct": 3,
          "explanation": "Până la 15% dintre copiii cu sindrom Down au subluxaţie/instabilitate a vertebrei C1, ceea ce îi expune riscului de leziune medulară la hiperextensia sau flexia extremă a gâtului. Special Olympics recomandă radiografii de col cervical în extensie şi flexie completă înainte de participarea la sporturi care implică stres asupra gâtului.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 659-671"
        },
        {
          "id": "56-3",
          "stem": "O nou-născută prezintă edeme ale mâinilor şi picioarelor, exces de piele la nivelul cefei (aspect de higrom chistic in utero) şi torace în scut cu mameloane larg spaţiate; ecocardiografia decelează o coarctaţie de aortă. Care este diagnosticul cel mai probabil?",
          "options": [
            "Sindrom Noonan",
            "Trisomia 21",
            "Sindrom Klinefelter",
            "Sindrom Turner",
            "Trisomia 18"
          ],
          "correct": 3,
          "explanation": "Limfedemul mâinilor şi picioarelor, pielea în exces la nivelul cefei şi toracele în scut cu mameloane larg spaţiate sunt semne caracteristice ale sindromului Turner la nou-născut, iar coarctaţia de aortă şi valva aortică bicuspidă sunt cele mai frecvente malformaţii cardiace asociate. Deşi sindromul Noonan are trăsături similare (gât scurt/palmat, torace în scut), acesta afectează ambele sexe şi se asociază tipic cu leziuni cardiace drepte, nu cu coarctaţie de aortă.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 659-671"
        },
        {
          "id": "56-4",
          "stem": "La o pacientă cu sindrom Turner şi mozaicism 45,X/46,XY, analiza FISH confirmă prezenţa de material din cromozomul Y. Ce conduită este recomandată, având în vedere riscul asociat?",
          "options": [
            "Monitorizare ecografică anuală a gonadelor, fără intervenţie chirurgicală",
            "Administrare de hormon de creştere, fără investigaţii suplimentare",
            "Ovarectomie unilaterală doar dacă apare pubertate precoce",
            "Gonadectomie laparoscopică, din cauza riscului crescut de gonadoblastom",
            "Nicio conduită specială, deoarece riscul de tumoră gonadală este neglijabil"
          ],
          "correct": 3,
          "explanation": "Femeile fenotipice cu mozaicism 45,X/46,XY au un risc de 15-30% de a dezvolta gonadoblastom. Academia Americană de Pediatrie recomandă testarea FISH pentru mozaicism cu cromozom Y la toate pacientele 45,X, iar dacă se identifică material Y, se recomandă gonadectomie laparoscopică.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 659-671"
        },
        {
          "id": "56-5",
          "stem": "Un adolescent de 16 ani, cu statură înaltă, testicule mici, ginecomastie şi dificultăţi de limbaj, este diagnosticat prin cariotip cu 47,XXY (sindrom Klinefelter). Care este mecanismul descris în literatură pentru afectarea cognitivă observată la aceşti pacienţi?",
          "options": [
            "Deficitul cognitiv este cauzat de expansiunea repetitivă CGG din gena FMR1",
            "Afectarea este secundară hipotiroidismului congenital, frecvent asociat acestui sindrom",
            "IQ-ul acestor pacienţi este independent de numărul de cromozomi X suplimentari",
            "Fiecare cromozom X suplimentar reduce IQ-ul cu aproximativ 10-15 puncte, cu efect predominant asupra limbajului şi domeniului social",
            "Afectarea cognitivă se datorează exclusiv nivelului scăzut de testosteron seric"
          ],
          "correct": 3,
          "explanation": "Textul precizează că, în sindromul Klinefelter, fiecare cromozom X suplimentar reduce IQ-ul cu 10-15 puncte comparativ cu fraţii tipici, efectul principal manifestându-se în domeniul limbajului şi al abilităţilor sociale. Cu cât aneuploidia este mai mare (48,XXXY, 49,XXXXY), cu atât afectarea intelectuală şi dismorfismul sunt mai severe.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 659-671"
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
            "Artrită septică",
            "Artrită idiopatică juvenilă oligoarticulară",
            "Artrită asociată entezitei",
            "Reumatism articular acut (RAA)",
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
            "Nu, cardita izolată nu poate fi considerată criteriu de diagnostic fără artrită asociată",
            "Da, dar numai dacă se asociază și titrul ASLO în dinamică crescător de cel puțin două ori valoarea inițială",
            "Da, un criteriu major (cardita) și două criterii minore (febră, VSH crescut), alături de dovada infecției streptococice, sunt suficiente",
            "Nu, este necesară în plus prezența coreei pentru confirmarea diagnosticului",
            "Nu, sunt necesare obligatoriu două criterii majore"
          ],
          "correct": 2,
          "explanation": "Pentru episodul inițial de RAA, diagnosticul se stabilește fie prin două criterii majore, fie printr-un criteriu major și două criterii minore, alături de dovada infecției streptococice recente. În acest caz, cardita (criteriu major) se asociază cu febra și VSH crescut (criterii minore), plus ASLO crescut ca dovadă a infecției streptococice, îndeplinind astfel condițiile diagnostice.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 740-744"
        },
        {
          "id": "57-3",
          "stem": "Un copil cunoscut cu artrită idiopatică juvenilă formă sistemică dezvoltă brusc febră persistentă, hepatosplenomegalie, trombocitopenie, scădere bruscă a VSH-ului și valori ale feritinei serice de peste 10000 ng/mL. Care este cea mai probabilă complicație?",
          "options": [
            "Sepsis bacterian intercurent",
            "Recădere simplă a bolii de bază (puseu articular)",
            "Sindrom de activare macrofagică (MAS)",
            "Amiloidoză secundară",
            "Pericardită reumatismală"
          ],
          "correct": 2,
          "explanation": "MAS este o complicație severă a AIJ sistemice, cu mortalitate raportată între 11% și 30%, caracterizată prin febră înaltă, hepatosplenomegalie, bi- sau pancitopenie (mai ales trombocitopenie), scădere bruscă a VSH-ului și valori ale feritinei frecvent peste 10000 ng/mL. Recunoașterea precoce este esențială deoarece tratamentul imunosupresor prompt poate fi salvator de viață.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 725-737"
        },
        {
          "id": "57-4",
          "stem": "O fetiță de 3 ani este diagnosticată cu artrită idiopatică juvenilă formă oligoarticulară (afectarea genunchiului), cu anticorpi antinucleari (ANA) pozitivi în titru semnificativ. Ținând cont de factorii de risc identificați pentru această formă de boală, care este măsura de monitorizare cea mai importantă la acest moment?",
          "options": [
            "Consult oftalmologic periodic pentru depistarea uveitei, frecvent asimptomatică",
            "Dozarea periodică a complementului seric (C3, C4)",
            "Radiografie toracică pentru depistarea unei eventuale pericardite",
            "Puncție medulară pentru excluderea unei leucemii acute",
            "Electroencefalogramă pentru depistarea coreei"
          ],
          "correct": 0,
          "explanation": "Sexul feminin, vârsta mică la debut și pozitivitatea ANA reprezintă factori de risc importanți pentru uveita cronică anterioară, care este de obicei asimptomatică și poate duce, dacă nu este depistată la timp, la sechele grave (sinechii, cataractă, glaucom). De aceea, toți pacienții cu oligoartrită necesită consult oftalmologic periodic, la 3, 6 sau 12 luni, în funcție de factorii de risc.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 725-737"
        },
        {
          "id": "57-5",
          "stem": "Un băiat de 12 ani prezintă dureri la nivelul inserției calcaneene a tendonului ahilian, artrită asimetrică a genunchiului și este HLA-B27 pozitiv. Care este diagnosticul cel mai probabil?",
          "options": [
            "Reumatism articular acut",
            "Artrită idiopatică juvenilă poliarticulară cu factor reumatoid pozitiv",
            "Artrita asociată entezitei (ERA)",
            "Artrită idiopatică juvenilă cu debut sistemic",
            "Lupus eritematos sistemic"
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
            "Clasa I - nefrită lupică cu leziuni mezangiale minime",
            "Clasa V - nefrită lupică membranoasă",
            "Clasa IV - nefrită lupică proliferativă difuză",
            "Clasa II - nefrită lupică cu leziuni mezangiale proliferative"
          ],
          "correct": 3,
          "explanation": "Conform clasificării ISN/RPS 2004, clasa IV reprezintă nefrita lupică proliferativă difuză, segmentală sau globală, cu afectare extinsă a glomerulilor. Clasele I și II corespund leziunilor mezangiale minime, respectiv proliferative, iar clasa III este forma focală (afectare mai limitată). Clasa V este forma membranoasă, cu tablou histologic distinct.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 754-769"
        },
        {
          "id": "58-2",
          "stem": "O fetiță de 8 ani se prezintă cu slăbiciune musculară proximală simetrică, instalată insidios în 3 luni, asociată cu un rash violaceu periorbitar cu edem palpebral și leziuni eritematoase la nivelul suprafețelor de extensie ale articulațiilor mâinilor. Care este diagnosticul cel mai probabil?",
          "options": [
            "Dermatomiozita juvenilă",
            "Vasculita din purpura Henoch-Schonlein",
            "Artrita idiopatică juvenilă forma sistemică",
            "Lupus eritematos sistemic",
            "Sclerodermia sistemică"
          ],
          "correct": 0,
          "explanation": "Tabloul descris este caracteristic dermatomiozitei juvenile: slăbiciune musculară proximală simetrică, rash heliotrop periorbitar cu edem al pleoapelor și papule Gottron la nivelul suprafețelor de extensie ale articulațiilor mâinilor. Aceste manifestări cutanate sunt patognomonice și fac parte din criteriile Bohan și Peter pentru diagnosticul bolii.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1404-1406"
        },
        {
          "id": "58-3",
          "stem": "Un băiat de 6 ani dezvoltă purpură palpabilă la nivelul membrelor inferioare și feselor, dureri abdominale colicative și artralgii la nivelul genunchilor și gleznelor, la o săptămână după o infecție respiratorie. Care dintre următorii factori este menționat ca fiind predictiv pentru afectarea renală persistentă în purpura Henoch-Schonlein?",
          "options": [
            "Prezența edemului scrotal",
            "Vârsta la debut peste 10 ani",
            "Sexul masculin",
            "Absența manifestărilor articulare",
            "Vârsta la debutul bolii sub 7 ani"
          ],
          "correct": 4,
          "explanation": "Factorii predictibili pentru afectarea renală persistentă în purpura Henoch-Schonlein menționați în text sunt: vârsta la debut sub 7 ani, persistența leziunilor purpurice, intensitatea simptomatologiei abdominale (forme severe) și scăderea activității factorului XIII. Sexul masculin este doar un factor de frecvență a bolii, nu un predictor de afectare renală.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1416-1418"
        },
        {
          "id": "58-4",
          "stem": "Un copil de 2 ani prezintă febră de 6 zile, neresponsivă la antitermice, hiperemie conjunctivală bilaterală nepurulentă, eritem și fisuri ale buzelor, limbă zmeurie, edem al mâinilor și un exantem polimorf pe trunchi. Care este conduita terapeutică inițială recomandată?",
          "options": [
            "Antivirale cu spectru larg asociate cu antiinflamatoare nesteroidiene",
            "Antibioterapie cu cefalosporină de generația a III-a în doză mare",
            "Aspirină în doză mare, fără imunoglobuline intravenoase",
            "Corticoterapie sistemică în puls-terapie, ca monoterapie",
            "Imunoglobuline intravenoase 2 g/kg în perfuzie lentă, asociate cu aspirină în doză mare"
          ],
          "correct": 4,
          "explanation": "Copilul întrunește criteriile clinice clasice pentru boala Kawasaki (febră peste 5 zile plus cel puțin 4 din cele 5 criterii principale). Tratamentul standard constă în imunoglobuline intravenoase 2 g/kg în perfuzie lentă de 8-12 ore, asociate cu aspirină în doză mare (80-100 mg/kg/zi), administrate optim în primele 7-10 zile de boală pentru a reduce riscul de anevrisme coronariene.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 695-705"
        },
        {
          "id": "58-5",
          "stem": "Un copil de origine armeană prezintă de la vârsta de 4 ani episoade recurente de febră cu durată de 12-72 ore, însoțite de dureri abdominale intense care mimează abdomenul acut și monoartrită tranzitorie, cu perioade complet asimptomatice între atacuri. Care este tratamentul de elecție pentru prevenirea atacurilor și a celei mai de temut complicații pe termen lung a acestei afecțiuni?",
          "options": [
            "Corticoterapia continuă în doză mică",
            "Antibioterapie profilactică cu penicilină",
            "Colchicina",
            "Anakinra ca primă linie",
            "Metotrexat săptămânal"
          ],
          "correct": 2,
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
            "Prognostic favorabil, indiferent de scor, la vârsta de sugar",
            "Prognostic favorabil (scor 0-2)",
            "Prognostic rezervat-letal (scor peste 3)",
            "Scorul nu se poate calcula fără leucocitele din LCR",
            "Prognostic sever (scor 3)"
          ],
          "correct": 2,
          "explanation": "Scorul prognostic în meningococemia fulminantă acordă câte un punct pentru fiecare element prezent (leucocite LCR<20/mmc, colaps cardiovascular, purpură peteșială apărută în primele 12 ore, trombocitopenie, absența leucocitozei sanguine, VSH normal, hiperpirexie rectală >39°C). Pacientul din vinietă întrunește 4 puncte, iar un scor peste 3 se asociază cu prognostic rezervat-letal. Un scor de 0-2 înseamnă prognostic favorabil, iar un scor de 3 înseamnă prognostic sever.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 805-815"
        },
        {
          "id": "59-2",
          "stem": "Un copil cu sindrom meningian și febră are puncție rahidiană cu următoarele rezultate: LCR tulbure, peste 1500 elemente/mmc cu predominanța polimorfonuclearelor, proteinorahie mult crescută și glicorahie scăzută. Ce etiologie sugerează cel mai probabil acest tablou al LCR?",
          "options": [
            "Meningită bacteriană",
            "Meningism asociat unei viroze respiratorii",
            "Meningită virală",
            "Reacție meningiană cu biochimie normală",
            "Meningită tuberculoasă"
          ],
          "correct": 0,
          "explanation": "Conform textului, un LCR tulbure cu peste 1500 elemente/mmc, cu predominanța polimorfonuclearelor, proteinorahie foarte crescută și glicorahie scăzută este caracteristic meningitei bacteriene. Meningitele virale au de regulă 10-1500 elemente/mmc cu predominanță limfocitară și glicorahie normală, iar meningita tuberculoasă are 200-400 elemente/mmc cu predominanță limfocitară.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 805-815"
        },
        {
          "id": "59-3",
          "stem": "O gravidă dezvoltă febră, cefalee și alterarea progresivă a stării de conștiență, cu paralizii de nervi cranieni sugestive pentru suferință de trunchi cerebral. Examenul LCR arată proporții egale de polimorfonucleare și limfocite, cu hiperproteinorahie și hipoglicorahie. Care este etiologia cea mai probabilă și schema de tratament etiologic de elecție?",
          "options": [
            "Listeria monocytogenes; ampicilină asociată cu gentamicină",
            "Cryptococcus neoformans; amfotericină B",
            "Haemophilus influenzae; ampicilină în monoterapie",
            "Neisseria meningitidis; penicilină G",
            "Streptococcus pneumoniae; cefalosporină de generația a treia"
          ],
          "correct": 0,
          "explanation": "Meningita cu Listeria monocytogenes apare tipic la organisme imunodeficitare, inclusiv gravide, are tablou de meningoencefalită cu afectare de trunchi cerebral și paralizii de nervi cranieni, iar în LCR proporțiile de polimorfonucleare și limfocite se egalizează, cu hiperproteinorahie și hipoglicorahie constante. Tratamentul etiologic constă în dublă asociere de ampicilină cu gentamicină.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 805-815"
        },
        {
          "id": "59-4",
          "stem": "Un pacient prezintă tulburări de conștiență cu semne neurologice de focar, iar RMN cerebral evidențiază un aspect pseudotumoral temporofrontal; examenul LCR arată pleiocitoză cu proteinorahie crescută, fără identificarea altor agenți patogeni bacterieni sau fungici. Care este conduita terapeutică imediată corectă?",
          "options": [
            "Se instituie tuberculostatice în așteptarea culturii LCR",
            "Se administrează doar corticoterapie, fără tratament antiviral",
            "Se administrează empiric aciclovir intravenos, 10 mg/kgc la fiecare 8 ore",
            "Se așteaptă rezultatul PCR pentru HSV înainte de a începe orice tratament",
            "Se inițiază cefalosporină de generația a treia în monoterapie"
          ],
          "correct": 2,
          "explanation": "Manifestările sugestive pentru o leziune la nivelul lobului temporal, împreună cu pleiocitoza LCR și absența altor patogeni, orientează spre encefalita cu virus herpes simplex. În encefalite, singura indicație de terapie etiologică este cea din encefalita herpetică, cu aciclovir intravenos 10 mg/kgc la fiecare 8 ore (30 mg/kgc/zi), tratament ce trebuie inițiat prompt, fără a aștepta confirmarea etiologică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 815-819"
        },
        {
          "id": "59-5",
          "stem": "Un băiat de 10 ani, cu istoric de rujeolă la vârsta de 18 luni, prezintă de câteva luni deteriorare intelectuală progresivă și scăderea performanței școlare, iar recent au apărut mioclonii ample, brusc instalate, cu relaxare lentă, repetitive la intervale de 10-60 de secunde. Care este diagnosticul cel mai probabil?",
          "options": [
            "Encefalita herpetică",
            "Encefalita cu virusul West Nile",
            "Panencefalita sclerozantă subacută (PESS)",
            "Meningita tuberculoasă",
            "Meningococemie fulminantă"
          ],
          "correct": 2,
          "explanation": "Tabloul descris este caracteristic panencefalitei sclerozante subacute (PESS), complicație tardivă a rujeolei survenite la vârste mici, cu debut la 8-10 ani distanță de infecția inițială. Stadiul 1 al bolii se manifestă prin deteriorare intelectuală progresivă și scăderea performanței școlare, iar stadiul 2 prin instalarea mioclonilor ample, cu relaxare lentă, la intervale de 10-60 de secunde.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 815-819"
        }
      ]
    },
    {
      "num": 60,
      "title": "Infecții cu exantem: rujeola, rubeola, boala mână-picior-gură, varicela, herpes zoster, scarlatina",
      "questions": [
        {
          "id": "60-1",
          "stem": "Un copil de 7 ani este diagnosticat cu scarlatină (angină eritematoasă, exantem micropapulos aspru, ciclu lingual prezent), fără istoric de alergie la penicilină. Care este conduita terapeutică etiologică corectă?",
          "options": [
            "Doar tratament simptomatic cu antitermice, antibioticul nefiind necesar la copil imunocompetent",
            "Cefalosporină de generația a III-a, în doză unică, fără necesitatea continuării tratamentului",
            "Penicilină G (IM) sau penicilină V (oral) timp de 7-10 zile, urmată de benzatin-penicilină o doză pe săptămână, 3 săptămâni consecutiv",
            "Aciclovir oral, 30 mg/kg/zi, în patru prize, timp de 5-10 zile",
            "Imunoglobuline standard intravenos, fără antibioterapie"
          ],
          "correct": 2,
          "explanation": "Pentru pacienții fără alergie la penicilină, tratamentul de elecție al scarlatinei este penicilina G (de preferat injectabil) sau penicilina V oral, 7-10 zile, urmate de benzatin-penicilină săptămânal, 3 săptămâni consecutiv. Aciclovirul este tratamentul specific al varicelei/zonei zoster, nu al scarlatinei, iar scarlatina netratată antibiotic are risc crescut de complicații poststreptococice.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1504-1508"
        },
        {
          "id": "60-2",
          "stem": "Un copil nevaccinat, în vârstă de 3 ani, prezintă de 3 zile febră progresivă (39-40°C), coriză intensă, tuse și conjunctivită cu fotofobie. La examinarea cavității bucale, pe mucoasa jugală, în dreptul molarilor, se observă mici pete albicioase, ca bobițele de griș, pe fond eritematos. Ce reprezintă acest semn și ce boală indică?",
          "options": [
            "Semnul Grozovici-Pastia, specific scarlatinei",
            "Enantemul rubeolic de pe palatul moale",
            "Herpangina, specifică bolii mână-picior-gură",
            "Semnul Koplik, patognomonic pentru rujeolă, apărut cu 2 zile înaintea erupției",
            "Masca Filatov, semn caracteristic scarlatinei"
          ],
          "correct": 3,
          "explanation": "Enantemul cu pete albe pe fond eritematos la nivelul mucoasei jugale și gingivale, în dreptul molarilor, reprezintă semnul Koplik, patognomonic pentru rujeolă; acesta apare cu 2 zile anterior erupției și persistă încă 2 zile după apariția acesteia, fiind util pentru diagnosticul precoce, înaintea exantemului. Masca Filatov și semnul Grozovici-Pastia sunt caracteristice scarlatinei, nu rujeolei.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1515-1519"
        },
        {
          "id": "60-3",
          "stem": "Un sugar de 8 luni, aflat într-o perioadă cu focar comunitar de boală mână-picior-gură, este adus pentru febră, iritabilitate și fotofobie, fără redoare de ceafă netă. Puncția lombară arată pleiocitoză moderată, cu glicorahie normală. Care este cea mai probabilă etiologie a acestei meningite virale la sugarul mic?",
          "options": [
            "Virusul varicelo-zosterian",
            "Virusul rubeolic",
            "Enterovirusuri (de tipul Coxsackie sau ECHO), cauza cea mai frecventă de meningită virală la copil",
            "Streptococul beta-hemolitic de grup A",
            "Virusul rujeolic"
          ],
          "correct": 2,
          "explanation": "Enterovirusurile (aceleași care produc boala mână-picior-gură) reprezintă cea mai frecventă cauză de meningită virală la copil, fiind responsabile de până la 90% sau mai mult din cazurile cu etiologie identificată, în special la sugarii sub 3 luni; tabloul cu pleiocitoză moderată și glicorahie normală/ușor scăzută este tipic. Streptococul, virusul rujeolic, rubeolic sau varicelo-zosterian nu sunt cauze tipice de meningită aseptică în acest context epidemiologic.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1701-1708"
        },
        {
          "id": "60-4",
          "stem": "Un copil de 5 ani, aflat în a treia zi de la debutul erupției variceloase caracteristice, dezvoltă brusc febră ridicată, tuse, dispnee și expectorație cu striuri de sânge. Care este complicația cel mai probabil implicată?",
          "options": [
            "Sindromul Reye",
            "Suprainfecția bacteriană cutanată a veziculelor",
            "Purpura trombocitopenică",
            "Encefalita variceloasă",
            "Pneumonia variceloasă"
          ],
          "correct": 4,
          "explanation": "Pneumonia variceloasă, mai frecventă la imunodeprimați, debutează brusc la 2-6 zile de la debutul bolii, cu febră ridicată, dispnee, tuse și uneori expectorație cu striuri de sânge, exact tabloul descris. Encefalita variceloasă apare la 4-7 zile și se manifestă predominant cu tulburări de conștiență și convulsii, nu cu simptomatologie respiratorie.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 790-791"
        },
        {
          "id": "60-5",
          "stem": "O gravidă la 10 săptămâni de amenoree, fără istoric de rubeolă sau vaccinare antirubeolică, are contact confirmat cu un copil bolnav de rubeolă, urmat la două săptămâni de febră, exantem maculopapulos fin și adenopatie occipitală/retroauriculară. Care este principala consecință fetală de care trebuie ținut cont în acest context?",
          "options": [
            "Nu există risc fetal semnificativ, rubeola fiind considerată inofensivă în sarcină",
            "Risc de scarlatină neonatală cu evoluție spre șoc toxic",
            "Risc crescut de malformații fetale (cardiace, oculare, auditive), dat fiind că infecția a survenit în primele 4 luni de sarcină",
            "Risc de pneumonie interstițială cu celule gigante Hecht la nou-născut",
            "Risc de encefalită herpetică neonatală"
          ],
          "correct": 2,
          "explanation": "Rubeola contractată de gravidă în primele patru luni de sarcină are potențial teratogen important, viremia afectând endoteliul vascular placentar; malformațiile caracteristice sunt cele cardiace (75%), oculare (45%) și auditive, iar sarcina se poate solda și cu avort spontan sau făt mort. Riscul teratogen justifică, în caz de IgM pozitiv la vârsta de sarcină cu risc, discutarea întreruperii sarcinii.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 788-789"
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
            "Torsiunea de testicul",
            "Hernia inghinală strangulată",
            "Orhita urliană",
            "Varicocelul",
            "Orhiepididimita septică veneriană"
          ],
          "correct": 2,
          "explanation": "Textul precizează că orhita urliană apare concomitent cu parotidita sau la 1-2 zile după aceasta, în special la pacienții aflați după pubertate, manifestându-se prin debut brusc cu febră, frisoane, cefalee, vărsături, durere testiculară vie, tumefacție și congestie. Contextul de parotidită concomitentă exclude celelalte entități din diagnosticul diferențial (orhiepididimita septică cu scurgeri purulente, hernia ștrangulată, varicocelul).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 794-795"
        },
        {
          "id": "61-2",
          "stem": "Un copil diagnosticat cu parotidită epidemică (oreion) dezvoltă, la aproximativ trei săptămâni de la debutul bolii, febră, delir, convulsii, comă și paralizii de nervi cranieni. Despre care complicație este vorba și care este letalitatea asociată, conform textului?",
          "options": [
            "Encefalita urliană, cu letalitate de 18-30%",
            "Encefalita urliană, cu letalitate de 1-2%",
            "Pancreatita urliană, cu letalitate de 1-2%",
            "Meningita urliană, cu letalitate de 1-2%",
            "Miocardita urliană, cu letalitate de 20%"
          ],
          "correct": 1,
          "explanation": "Encefalita urliană (0,2-0,5% din cazuri) apare tardiv, după aproximativ trei săptămâni de la debut, cu febră, delir, convulsii, comă, paralizii de nervi cranieni și periferici, letalitatea fiind de 1-2%. Meningita urliană, spre deosebire de encefalită, apare precoce (ziua 4-7) și are evoluție benignă cu LCR clar.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 794-795"
        },
        {
          "id": "61-3",
          "stem": "Un copil cu parotidită epidemică dezvoltă semne de meningită urliană cu LCR clar (cefalee, vărsături, contractură meningiană). Știind că nu există tratament etiologic pentru infecția urliană, care este conduita terapeutică adecvată?",
          "options": [
            "Doar repaus la pat, fără altă intervenție terapeutică",
            "Antibioterapie cu penicilină G în doze mari",
            "Imunoglobuline intravenoase",
            "Aciclovir intravenos timp de 10 zile",
            "Corticoterapie (prednison 1 mg/kgc/zi), cu măsuri suplimentare (dietă hiposodată, protecție gastrică)"
          ],
          "correct": 4,
          "explanation": "Deoarece nu există tratament etiologic pentru infecția urliană, tratamentul este simptomatic, iar corticoterapia (prednison 1 mg/kgc/zi) este indicată specific pacienților cu meningită și orhită, însoțită de măsuri împotriva efectelor adverse (dietă hiposodată, protecție gastrică, fără exces de glucide).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 794-795"
        },
        {
          "id": "61-4",
          "stem": "În investigarea unui sindrom mononucleozic se efectuează reacția Paul-Bunnell-Davidsohn în două etape, cu absorbția serului pe hematii de bou și, respectiv, pe extract de rinichi de cobai. Care este criteriul de confirmare a diagnosticului de mononucleoză infecțioasă?",
          "options": [
            "Testul rămâne pozitiv după ambele tipuri de absorbție",
            "Testul este pozitiv doar în prima etapă, fără a necesita etapa a doua",
            "Testul se negativează după absorbția cu hematii de bou și rămâne nemodificat după absorbția cu rinichi de cobai",
            "Testul se negativează după ambele tipuri de absorbție",
            "Testul se negativează după absorbția cu rinichi de cobai și rămâne nemodificat după absorbția cu hematii de bou"
          ],
          "correct": 2,
          "explanation": "Conform textului, hematiile de bou leagă ireversibil exclusiv anticorpii din mononucleoza infecțioasă, iar rinichiul de cobai leagă toți ceilalți anticorpi, cu excepția celor din mononucleoză. Astfel, diagnosticul se confirmă dacă testul se negativează în proba tratată cu hematii de bou și rămâne nemodificat în proba tratată cu extract de rinichi de cobai.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 795-797"
        },
        {
          "id": "61-5",
          "stem": "Un adolescent prezintă febră prelungită, angină eritemato-pultacee, adenopatii generalizate și splenomegalie. A fost tratat empiric cu ampicilină pentru suspiciunea de angină bacteriană, moment în care a dezvoltat un exantem cutanat generalizat. Care este cea mai probabilă explicație a acestui tablou clinic?",
          "options": [
            "Angină difterică, cu exantem toxic asociat",
            "Reacție alergică idiosincratică la ampicilină, fără legătură cu boala de fond",
            "Mononucleoză infecțioasă, la care eritemul cutanat apare la aproximativ 90% dintre pacienții tratați cu ampicilină",
            "Toxoplasmoză acută, cu exantem tipic post-antibiotic",
            "Scarlatină suprainfectată, cu exantem caracteristic"
          ],
          "correct": 2,
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
            "Tuse însoțită de wheezing expirator și raluri sibilante difuze bilateral",
            "Accese de tuse chinuitoare, constituite din chinte repetate, fiecare cu un inspir profund șuierător (repriza), urmate frecvent de vărsături",
            "Tuse productivă cu expectorație muco-purulentă abundentă, însoțită de febră înaltă continuă",
            "Tuse uscată cu debut brusc, evoluție de câteva ore și stridor inspirator sever",
            "Tuse nocturnă izolată, fără accese, ameliorată de bronhodilatatoare inhalatorii"
          ],
          "correct": 1,
          "explanation": "În faza de stare, tusea convulsivă se manifestă prin accese constituite din chinte repetate; fiecare chintă are un inspir profund șuierător (repriza), urmat de sacade expiratorii de tuse, iar accesul este frecvent urmat de vărsături. Această succesiune caracteristică diferențiază tusea convulsivă de alte cauze de tuse cronică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 802-803"
        },
        {
          "id": "62-2",
          "stem": "Un sugar de 4 luni este diagnosticat cu tuse convulsivă în faza de stare, fără intoleranță digestivă și fără alte contraindicații. Care este tratamentul etiologic de primă intenție?",
          "options": [
            "Claritromicină 15 mg/kgc/zi, timp de 10-14 zile",
            "Corticoterapie sistemică, asociată cu antitusive centrale",
            "Aminoglicozid parenteral, timp de 10 zile",
            "Cefalosporină de generația a treia, timp de 14 zile",
            "Amoxicilină-clavulanat în doză standard, timp de 7 zile"
          ],
          "correct": 0,
          "explanation": "Tratamentul etiologic rapid indicat este claritromicina în doză de 15 mg/kgc/zi, timp de 10-14 zile; amoxicilina sau ampicilina reprezintă alternative, în special la copiii mici cu intoleranță gastrică. Aminoglicozidele sau cefalosporinele de generația a treia se rezervă complicațiilor infecțioase, iar corticoterapia doar formelor severe cu insuficiență respiratorie sau complicații nervoase.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 802-803"
        },
        {
          "id": "62-3",
          "stem": "Un sugar cu tuse convulsivă severă prezintă, în timpul unui acces de tuse, un episod de apnee prelungită urmat de stop respirator. Din ce categorie de complicații ale tusei convulsive face parte acest tablou?",
          "options": [
            "Complicații infecțioase",
            "Complicații hemoragice",
            "Complicații mecanice",
            "Complicații pulmonare",
            "Complicații toxice"
          ],
          "correct": 4,
          "explanation": "Textul clasifică apneea cu stop respirator drept complicație toxică a tusei convulsive, distinctă de complicațiile mecanice (hernieri), hemoragice (prin hipertensiune în teritoriul cav superior), pulmonare (pneumotorax, emfizem) sau infecțioase (pneumonii, suprainfecții).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 802-803"
        },
        {
          "id": "62-4",
          "stem": "Un copil anterior sănătos, aflat în context de epidemie gripală, dezvoltă brusc febră înaltă, edem pulmonar acut și insuficiență respiratorie acută. Ce formă clinică de gripă sugerează acest tablou?",
          "options": [
            "Bronșiolita virală",
            "Sindromul Reye",
            "Laringita acută gripală",
            "Gripa necomplicată, formă medie",
            "Gripa malignă"
          ],
          "correct": 4,
          "explanation": "Textul descrie gripa malignă drept o formă clinică gravă, caracterizată prin debut brusc, febril, cu edem pulmonar acut și manifestări de insuficiență respiratorie acută, spre deosebire de formele necomplicate sau de complicațiile respiratorii obișnuite.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 798-800"
        },
        {
          "id": "62-5",
          "stem": "Un adult nevaccinat, aflat într-un focar epidemic de gripă și cu risc crescut de complicații, este confirmat cu infecție cu virus gripal B. Care este conduita corectă privind chimioprofilaxia cu amantadină/rimantadină?",
          "options": [
            "Se administrează doar în asociere cu oseltamivir, pentru potențare terapeutică",
            "Nu este indicată, deoarece amantadina/rimantadina sunt eficiente numai pentru infecția cu virus gripal A",
            "Se indică exclusiv ca tratament curativ, nu ca profilaxie",
            "Este contraindicată la persoanele nevaccinate aflate în focar",
            "Se administrează 100-200 mg/zi, fiind eficientă și pentru virusul gripal B"
          ],
          "correct": 1,
          "explanation": "Chimioprofilaxia cu amantadină sau rimantadină (100-200 mg/zi) se administrează persoanelor nevaccinate, aflate în focar și cu risc crescut de complicații, dar este indicată numai pentru infecția cu virus gripal A, nefiind eficientă împotriva virusului gripal B.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 798-800"
        }
      ]
    },
    {
      "num": 63,
      "title": "Șocul. Anafilaxia",
      "questions": [
        {
          "id": "63-1",
          "stem": "Un copil de 8 ani este înțepat de o viespe. La câteva minute apar urticarie generalizată, extremități calde, puls periferic săltăreț, tahicardie marcată și hipotensiune arterială. Din punct de vedere fiziopatologic, acest tip de șoc se caracterizează prin creșterea debitului cardiac și scăderea rezistenței vasculare periferice, secundare tulburărilor tonusului vasomotor. Despre ce tip de șoc este vorba?",
          "options": [
            "Șoc septic",
            "Șoc cardiogen",
            "Șoc distributiv (anafilactic)",
            "Șoc obstructiv",
            "Șoc hipovolemic"
          ],
          "correct": 2,
          "explanation": "Conform clasificării tipurilor de șoc, șocul distributiv (în principal anafilactic) se produce prin tulburări ale tonusului vasomotor, cu debit cardiac crescut și scăderea rezistenței vasculare periferice, etiologia principală fiind anafilaxia. Extremitățile calde și pulsul săltăreț descriu tabloul de „șoc cald”, tipic vasodilatației din anafilaxie, spre deosebire de vasoconstricția din șocul hipovolemic.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 453-468"
        },
        {
          "id": "63-2",
          "stem": "Un copil cu sepsis sever prezintă, după administrarea a 60 ml/kg ser fiziologic în bolusuri, persistența hipotensiunii, puls periferic slab, extremități reci și prelungirea timpului de recolorare capilară („șoc rece”). Care este agentul vasoactiv recomandat ca primă opțiune în această situație?",
          "options": [
            "Adrenalina (epinefrina), preferată în prezent dopaminei",
            "Norepinefrina, ca vasopresor de primă linie",
            "Dobutamina, pentru efectul de vasodilatație periferică",
            "Corticoterapia în doză mare, ca tratament hemodinamic de primă linie",
            "Doze mari de dopamină cu efect exclusiv vasopresor"
          ],
          "correct": 0,
          "explanation": "În șocul septic refractar la repleția volemică, dacă tabloul este de „șoc rece” (puls slab, extremități reci, recolorare capilară prelungită, hipotensiune), se impune administrarea de adrenalină, recent preferată dopaminei ca primă opțiune. Norepinefrina este recomandată de primă intenție în „șocul cald”, cu extremități calde și puls săltăreț.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 453-468"
        },
        {
          "id": "63-3",
          "stem": "Un sugar cu enterocolită acută severă prezintă tahicardie, recolorare capilară prelungită, stare de iritabilitate și scăderea diurezei, în timp ce tensiunea arterială sistolică este încă în limite normale. Care este interpretarea corectă a acestui tablou clinic?",
          "options": [
            "TA sistolică normală exclude diagnosticul de șoc hipovolemic la acest sugar",
            "Prezența tahicardiei fără hipotensiune indică un șoc cardiogen, nu hipovolemic",
            "Tahicardia și semnele de hipoperfuzie periferică sunt parametri mai relevanți pentru starea circulatorie decât TA, care rămâne conservată o perioadă",
            "Debitul urinar scăzut nu are valoare diagnostică în șocul hipovolemic al sugarului",
            "Este necesară doar monitorizarea seriată a TA pentru aprecierea gradului de deshidratare"
          ],
          "correct": 2,
          "explanation": "Textul precizează că tahicardia și scăderea perfuziei periferice (recolorare capilară, stare mintală, debit urinar, acidoză metabolică) reprezintă parametri mai relevanți pentru aprecierea stării circulatorii decât TA, aceasta fiind un parametru bine conservat o perioadă de timp, mai ales la sugar, unde semnele depleției volemice pot fi subtile la debut.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 453-468"
        },
        {
          "id": "63-4",
          "stem": "Un copil de 6 ani dezvoltă, la 15 minute după consumul de alune, urticarie generalizată, edem labial și vărsături repetate, fără dispnee, wheezing sau hipotensiune. Conform criteriilor de diagnostic pentru anafilaxie, acest tablou clinic:",
          "options": [
            "Necesită obligatoriu dozarea triptazei serice pentru confirmare înainte de inițierea tratamentului",
            "Reprezintă o reacție alergică izolată, neîncadrabilă ca anafilaxie în absența afectării respiratorii sau cardiovasculare",
            "Îndeplinește criteriile de anafilaxie, prin asocierea afectării cutaneo-mucoase cu simptome gastrointestinale persistente, apărute rapid după expunerea la un alergen probabil",
            "Îndeplinește criteriile de anafilaxie numai dacă se asociază bronhospasm documentat spirometric",
            "Nu îndeplinește criteriile de anafilaxie, fiind obligatorie prezența hipotensiunii arteriale"
          ],
          "correct": 2,
          "explanation": "Anafilaxia este foarte probabilă când apar rapid, după expunerea la un alergen probabil, două sau mai multe dintre: afectare cutaneo-mucoasă, compromitere respiratorie, scăderea TA sau simptome gastrointestinale persistente. În acest caz, urticaria/edemul (afectare cutaneo-mucoasă) asociate cu vărsăturile repetate (simptom GI persistent) îndeplinesc acest criteriu, fără a fi necesară prezența hipotensiunii sau a afectării respiratorii.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1228-1234"
        },
        {
          "id": "63-5",
          "stem": "Un adolescent aflat în tratament cronic cu un beta-blocant dezvoltă anafilaxie după o înțepătură de albină și nu răspunde la administrări repetate de adrenalină intramusculară, persistând hipotensiunea. Care este conduita terapeutică suplimentară adecvată în această situație?",
          "options": [
            "Se administrează atropină ca substitut al adrenalinei pentru susținerea tensiunii arteriale",
            "Se administrează glucagon, care are efecte inotrope și cronotrope independente de receptorii catecolaminergici",
            "Se cresc dozele de adrenalină IM fără limită superioară, fiind singurul tratament posibil",
            "Se așteaptă instalarea efectului corticoterapiei, considerată tratamentul de elecție la acești pacienți",
            "Se întrerupe adrenalina și se tratează exclusiv cu corticosteroizi în doză mare"
          ],
          "correct": 1,
          "explanation": "La pacienții tratați cu beta-blocante, răspunsul la adrenalină poate fi suboptimal, iar anafilaxia refractoră la doze repetate de adrenalină a fost tratată, anecdotic, cu glucagon, un polipeptid cu efecte inotrope și cronotrope cardiace independente de calea catecolaminergică. Atropina este rezervată bradicardiei persistente, nu ca substitut al adrenalinei, iar corticosteroizii au doar rol secundar, cu debut de acțiune tardiv.",
          "source": "Nelson Textbook of Pediatrics, 21E, pag. 1228-1234"
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
            "Flumazenil, care acționează prin antagonism competitiv pe receptorii GABA",
            "N-acetilcisteină, care reconstituie stocurile hepatice de glutation",
            "Fizostigmină, care inhibă acetilcolinesteraza",
            "Deferoxamină, care chelează fierul liber circulant",
            "Naloxonă, care blochează competitiv receptorii opioizi"
          ],
          "correct": 1,
          "explanation": "În intoxicația cu paracetamol, metabolitul toxic (N-acetil-benzo-paraquinonimina) se leagă covalent de hepatocit atunci când rezervele de glutation sunt depășite, producând necroză hepatică centrolobulară. N-acetilcisteina este antidotul specific deoarece este un precursor de glutation și reconstituie stocurile hepatice ale acestuia. Tratamentul cu antidot durează, în funcție de protocol, 72 de ore.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1589-1590"
        },
        {
          "id": "64-2",
          "stem": "O adolescentă de 15 ani este adusă în urgență în comă calmă, hipotonă, cu abolirea reflexelor osteotendinoase și depresie respiratorie moderată, la aproximativ o oră după ingestia voluntară a unei cantități mari de diazepam. Care este antidotul specific și modul său de acțiune?",
          "options": [
            "Fizostigmină, inhibitor de acetilcolinesterază",
            "Naloxonă, antagonist pur al receptorilor opioizi",
            "N-acetilcisteină, precursor de glutation",
            "Flumazenil, cu acțiune competitivă pe receptorii GABA",
            "Atropină, antagonist al receptorilor muscarinici"
          ],
          "correct": 3,
          "explanation": "Depresia respiratorie și coma din intoxicația cu benzodiazepine sunt reversibile la administrarea de flumazenil (Anexate), care are acțiune antagonistă competitivă la nivelul receptorilor GABA. Provocarea de vărsături și spălătura gastrică sunt inutile și contraindicate în intoxicația cu diazepam, din cauza absorbției rapide a medicamentului.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1589-1590"
        },
        {
          "id": "64-3",
          "stem": "Un copil aflat în tratament cronic cu digoxin pentru insuficiență cardiacă dezvoltă brusc bradicardie severă sub 40 bpm, care nu răspunde la atropină, extrasistole ventriculare bigeminate și hiperpotasemie, cu nivel seric al digoxinei mult crescut. Care este tratamentul specific indicat în această situație?",
          "options": [
            "Diureză forțată prin hidratare masivă și furosemid",
            "Dimercaprol (BAL) intramuscular",
            "Anticorpi antidigitalici specifici (fragmente Fab, de tip Digibind), administrați intravenos",
            "Bicarbonat de sodiu molar în perfuzie, pentru alcalinizare",
            "Administrarea de gluconat de calciu intravenos pentru corectarea rapidă a hiperpotasemiei"
          ],
          "correct": 2,
          "explanation": "Antidotul specific al intoxicației digitalice grave, cu aritmii amenințătoare de viață, este reprezentat de anticorpii antidigitalici de tip Digibind (fragmente Fab), care se leagă de molecula digitalică și eliberează ATP-aza membranară blocată. Administrarea de calciu este contraindicată, deoarece crește toxicitatea miocardică a digitalicelor, iar diureza forțată și dializa sunt în general ineficiente în această intoxicație.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1580-1582"
        },
        {
          "id": "64-4",
          "stem": "Un copil de 2 ani ingeră accidental o soluție de hidroxid de sodiu (sodă caustică). La prezentare este conștient, cu sialoree abundentă, disfagie și leziuni de arsură la nivelul cavității bucale. Care este conduita imediată corectă?",
          "options": [
            "Se neutralizează chimic substanța caustică prin administrarea orală a unei soluții acide diluate",
            "Se interzic neutralizarea chimică, spălătura gastrică și cărbunele activat; se internează de urgență pentru endoscopie digestivă în primele 24 de ore",
            "Se provoacă vărsătura pentru evacuarea rapidă a conținutului gastric",
            "Se administrează cărbune activat 1 g/kg în prima oră de la ingestie",
            "Se efectuează spălătură gastrică imediată cu ser fiziologic pentru îndepărtarea toxicului restant"
          ],
          "correct": 1,
          "explanation": "În intoxicațiile cu substanțe caustice este interzisă neutralizarea chimică, spălătura gastrică și administrarea de cărbune activat, manevre care pot agrava leziunile. Conduita corectă este internarea de urgență, cu efectuarea unei endoscopii digestive în primele 24 de ore pentru aprecierea gravității leziunilor, alături de terapie intensivă de susținere.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 1600-1602"
        },
        {
          "id": "64-5",
          "stem": "Un copil este resuscitat dintr-un incendiu domestic și adus în stare de comă, cu nivel de carboxihemoglobină (HbCO) de 30%. Care este tratamentul de elecție indicat, având în vedere severitatea intoxicației cu monoxid de carbon?",
          "options": [
            "Albastru de metilen administrat intravenos lent",
            "Oxigenoterapie pe mască 5-10 L/minut, fără alte măsuri asociate",
            "Hidroxicobalamină intravenoasă, ca unică măsură terapeutică",
            "Oxigenoterapie hiperbară",
            "Exsangvinotransfuzie"
          ],
          "correct": 3,
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
            "Diagnosticul necesită INR > 2,0, indiferent de prezența encefalopatiei hepatice",
            "Diagnosticul necesită coagulopatie corectabilă după administrarea de vitamina K",
            "Diagnosticul se stabilește exclusiv pe baza nivelului transaminazelor, indiferent de valoarea INR",
            "Diagnosticul necesită prezența unei boli hepatice cronice preexistente",
            "INR-ul de 1,6 în prezența encefalopatiei hepatice este suficient pentru susținerea diagnosticului de insuficiență hepatică acută"
          ],
          "correct": 4,
          "explanation": "Conform criteriilor PALF din anul 2000, IHA la copil este definită prin absența unei afecțiuni cronice hepatice, coagulopatie necorectată după vitamina K parenterală, cu INR de 1,5-1,9 în prezența encefalopatiei hepatice sau INR > 2,0 în absența encefalopatiei. Un INR de 1,6 asociat cu encefalopatie hepatică se încadrează exact în acest criteriu diagnostic.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 978-990"
        },
        {
          "id": "65-2",
          "stem": "O adolescentă de 15 ani se prezintă cu icter intens, anemie hemolitică cu test Coombs negativ, transaminaze ușor-moderat crescute (raport AST/ALT > 4) și tulburări severe de coagulare, în contextul unei insuficiențe hepatice acute. Care este diagnosticul cel mai probabil și conduita terapeutică imediată?",
          "options": [
            "Intoxicație cu paracetamol; se administrează N-acetilcisteină",
            "Hepatită autoimună tip 2; se inițiază corticoterapie în doze mari",
            "Sindrom Reye; se instituie restricție proteică și lactuloză",
            "Boala Wilson; se inițiază tratament cu D-penicilamină imediat ce se suspectează diagnosticul, chiar înainte de confirmarea biochimică",
            "Hepatită virală B fulminantă; se administrează imunoglobulină specifică anti-VHB"
          ],
          "correct": 3,
          "explanation": "Asocierea IHA cu transaminaze ușor/moderat crescute, raport AST/ALT > 4, bilirubină mult crescută prin hemoliză nonimună (Coombs negativ) este înalt sugestivă pentru boala Wilson, formă de debut caracteristică mai ales la adolescente. Textul precizează că tratamentul cu D-penicilamină trebuie inițiat imediat ce se suspectează boala, chiar în absența rezultatelor biochimice de confirmare.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 978-990"
        },
        {
          "id": "65-3",
          "stem": "Un copil cu insuficiență hepatică acută și encefalopatie hepatică grad IV dezvoltă semne de hipertensiune intracraniană prin edem cerebral. Care este mecanismul principal al edemului cerebral în acest context și o măsură terapeutică adecvată?",
          "options": [
            "Edem citotoxic, care afectează în primul rând substanța cenușie, tratat cu soluții hiperosmolare (manitol 20% sau soluție salină NaCl 3%)",
            "Edem hemoragic, secundar coagulopatiei, tratat cu plasmă proaspătă congelată în doze mari",
            "Edem interstițial, secundar hidrocefaliei, tratat cu acetazolamidă",
            "Edem vasogenic, prin creșterea permeabilității capilare, tratat cu corticosteroizi în doze mari",
            "Edem obstructiv, prin blocarea circulației LCR, tratat prin derivație ventriculo-peritoneală"
          ],
          "correct": 0,
          "explanation": "Textul precizează că edemul cerebral, complicația de temut a encefalopatiei hepatice, afectează în primul rând substanța cenușie și este produs prin mecanism citotoxic, motiv pentru care răspunde la terapia cu manitol sau soluție salină hipertonă. Alte măsuri menționate sunt reducerea temperaturii corporale, hiperventilația și restricția de lichide.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 978-990"
        },
        {
          "id": "65-4",
          "stem": "Un copil cu insuficiență hepatică acută secundară intoxicației cu paracetamol prezintă pH arterial = 7,25, fără alte criterii asociate. Conform criteriilor King's College pentru IHA indusă de paracetamol, această situație clinică:",
          "options": [
            "Impune doar monitorizare, deoarece criteriile de transplant necesită minimum 3 din 4 criterii asociate, ca la cauzele non-paracetamol",
            "Reprezintă, prin ea însăși, criteriu de indicație pentru transplant hepatic de urgență, independent de celelalte criterii (creatinină, comă)",
            "Reprezintă criteriu de transplant doar dacă se asociază cu creatinină > 3,4 mg/dL și comă de grad III/IV",
            "Nu se aplică, deoarece criteriile King's College sunt valabile doar pentru cauzele non-paracetamol de IHA",
            "Nu reprezintă criteriu de indicație pentru transplant hepatic de urgență, fiind necesară obligatoriu și asocierea unui INR > 6"
          ],
          "correct": 1,
          "explanation": "Conform criteriilor King's College pentru IHA din intoxicația cu paracetamol, pH < 7,3 constituie singur criteriu suficient de indicație pentru transplant hepatic de urgență; alternativ, se pot asocia INR > 6, creatinină > 3,4 mg/dL și comă de grad III/IV. Criteriile pentru celelalte cauze de IHA (necesitatea a 3 din 4 elemente) sunt diferite și separate în text.",
          "source": "Iordăchescu - Tratat de Pediatrie, pag. 978-990"
        },
        {
          "id": "65-5",
          "stem": "Un copil cu insuficiență hepatică acută, fără sângerare activă, necesită montarea unui cateter venos central. Trombocitele sunt 12.000/mm3, iar INR este crescut. Care este conduita corectă conform ghidului de tratament?",
          "options": [
            "Se administrează masă trombocitară, având în vedere valoarea sub 15.000/mm3 în absența hemoragiei, procedura invazivă justificând corectarea",
            "Corectarea coagulopatiei nu este necesară, deoarece nu există sângerare activă",
            "Se amână manopera până la normalizarea completă a INR, indiferent de necesitatea clinică a cateterului",
            "Se administrează plasmă proaspătă congelată de rutină, pentru corectarea INR înainte de orice manoperă",
            "Se administrează factor VII recombinant doar dacă trombocitele scad ulterior sub 50.000/mm3, indiferent de context"
          ],
          "correct": 0,
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
            "PPC = 35 mmHg; valoare sub pragul minim acceptat pentru copiii peste 3 ani (>50-60 mmHg), asociată cu risc crescut de ischemie cerebrală",
            "PPC = 70 mmHg; valoare normală, nu necesită nicio intervenție terapeutică",
            "PPC nu poate fi calculată fără cunoașterea valorii PaCO2",
            "PPC = 35 mmHg; valoare peste pragul minim acceptat pentru vârsta sa, fără risc de ischemie cerebrală"
          ],
          "correct": 1,
          "explanation": "PPC se calculează după formula PPC = PAM - PIC, deci 70 - 35 = 35 mmHg. Valorile minime acceptate ale PPC pentru a preveni ischemia cerebrală la copiii peste 3 ani sunt >50-60 mmHg, iar o PPC sub 40 mmHg este un predictor important de mortalitate la copiii cu traumatism cranio-cerebral. Valoarea obținută este deci periculos de scăzută.",
          "source": "Protocoale de diagnostic și tratament în Pediatrie (2023), pag. 347-354"
        },
        {
          "id": "66-2",
          "stem": "Un copil cu hipertensiune intracraniană decompensată prezintă brusc bradicardie, hipertensiune arterială și respirații neregulate. Ce reprezintă acest tablou clinic și ce implicație are?",
          "options": [
            "Semn de șoc septic decompensat, ce impune inițierea antibioterapiei de urgență",
            "Triada Cushing, semn de angajare cerebrală severă/iminentă, care impune măsuri de urgență pentru reducerea PIC",
            "Semn tipic de deshidratare severă, ce impune reechilibrare volemică rapidă cu ser fiziologic",
            "Semn de convulsii subclinice, ce impune doar administrare de diazepam intravenos",
            "Semn de hipoglicemie acută, ce impune administrare imediată de glucoză 10%"
          ],
          "correct": 1,
          "explanation": "Asocierea bradicardie-hipertensiune arterială-respirații neregulate constituie triada Cushing, descrisă în text ca semn clinic asociat angajării cerebrale. Recunoașterea ei impune intervenție de urgență pentru scăderea presiunii intracraniene, nu doar corectarea unor tulburări metabolice sau volemice.",
          "source": "Protocoale de diagnostic și tratament în Pediatrie (2023), pag. 347-354"
        },
        {
          "id": "66-3",
          "stem": "Un copil cu hipertensiune intracraniană dezvoltă brusc ptoză palpebrală și midriază unilaterală fixă, areactivă, de aceeași parte, însoțite de hemipareză controlaterală. Care sindrom de angajare cerebrală este cel mai probabil sugerat de acest tablou?",
          "options": [
            "Hernia transforaminală (a amigdalelor cerebeloase)",
            "Hernia transtentorială laterală (uncală), prin compresia nervului III de către uncus și girusul parahipocampic",
            "Hernia subfalcină (a girusului cingular)",
            "Hernia transtentorială centrală",
            "Hernia transtentorială ascendentă (în sus, deasupra cerebelului și mezencefalului)"
          ],
          "correct": 1,
          "explanation": "Paralizia de nerv III (ptoză palpebrală, midriază unilaterală) însoțită de hemipareză este manifestarea caracteristică a herniei transtentoriale laterale (uncale), produsă prin deplasarea uncusului și girusului parahipocampic medial, cu compresia nervului oculomotor. Celelalte tipuri de angajare au tablouri clinice diferite (mioză bilaterală/pupile fixe în hernia centrală, privire „în apus de soare” în cea ascendentă, redoare de ceafă și apnee în cea transforaminală).",
          "source": "Protocoale de diagnostic și tratament în Pediatrie (2023), pag. 347-354"
        },
        {
          "id": "66-4",
          "stem": "Un copil cu traumatism cranio-cerebral sever are scor Glasgow (GCS) = 6, respirații neregulate cu efort respirator crescut și cianoză de tip central. Care este conduita imediată recomandată în cadrul managementului hipertensiunii intracraniene decompensate?",
          "options": [
            "Intubație endotraheală de urgență în secvență rapidă, cu agent de inducție (propofol sau tiopental) și relaxant muscular cu acțiune rapidă",
            "Sedare orală cu diazepam și reevaluare clinică peste 2 ore",
            "Hiperventilație susținută, cu menținerea PaCO2 sub 25 mmHg, ca metodă de primă linie de reducere a PIC",
            "Puncție lombară pentru măsurarea presiunii LCR, înaintea oricărei alte manevre",
            "Administrare imediată de manitol în doză mare, fără alte măsuri de stabilizare"
          ],
          "correct": 0,
          "explanation": "Un scor Glasgow < 8, semnele de detresă respiratorie și de ventilare/oxigenare inadecvată (cianoză centrală, respirații neregulate cu efort) reprezintă indicații de intubație endotraheală de urgență în secvență rapidă, cu agent de inducție și relaxant muscular cu acțiune rapidă. Hiperventilația agresivă și susținută este contraindicată (risc de vasoconstricție și ischemie cerebrală), fiind acceptată doar temporar și în situații de iminență de angajare.",
          "source": "Protocoale de diagnostic și tratament în Pediatrie (2023), pag. 347-354"
        },
        {
          "id": "66-5",
          "stem": "Un copil cu tumoră cerebrală prezintă edem cerebral peritumoral de tip vasogenic și semne de hipertensiune intracraniană compensată. Care este tratamentul specific recomandat pentru acest tip de edem?",
          "options": [
            "Manitol în doză mare, administrat ca primă linie de tratament",
            "Barbiturice în doze mari (tiopental intravenos)",
            "Craniectomie decompresivă de urgență",
            "Corticoterapie (dexametazonă intravenos, 0,5-1 mg/kg/zi, divizată în 2-4 subdoze zilnice)",
            "Soluție salină hipertonă 3% în bolus, ca primă intervenție"
          ],
          "correct": 3,
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
            "Meningoencefalită virală",
            "Encefalopatie hepatică",
            "Meningită bacteriană acută",
            "Hemoragie subarahnoidiană",
            "Abces cerebral"
          ],
          "correct": 3,
          "explanation": "Prezența semnelor de iritație meningeală în context febril orientează către o infecție a sistemului nervos central, dar dacă aceste semne nu se asociază cu febră, diagnosticul trebuie orientat către hemoragie subarahnoidiană. Absența febrei exclude etiologia infecțioasă ca primă ipoteză.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 683-688"
        },
        {
          "id": "67-2",
          "stem": "Un copil aflat în stare de comă prezintă midriază unilaterală, fixă și areactivă. Cum trebuie interpretat acest semn clinic?",
          "options": [
            "Semn de intoxicație cu substanțe atropinice, care necesită doar monitorizare",
            "Semn caracteristic stării postcritice, după o criză de convulsii tonico-clonice",
            "Semn de comă cu siderare vegetativă indus de hipotermie severă",
            "Semn de intoxicație cu substanțe organofosforate",
            "Semn de urgență neurochirurgicală, sugestiv pentru hernierea subtentorială a lobului temporal"
          ],
          "correct": 4,
          "explanation": "Midriaza unilaterală este descrisă în text ca semn de urgență neurochirurgicală, reprezentând de obicei hernierea subtentorială a lobului temporal. Midriaza bilaterală, în schimb, poate apărea în stările postcritice sau în intoxicații cu atropinice, simpatomimetice ori benzodiazepine.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 683-688"
        },
        {
          "id": "67-3",
          "stem": "Un copil suferă un traumatism cranio-cerebral și rămâne inițial conștient (interval liber). La aproximativ 36 de ore de la traumatism, starea sa se alterează progresiv și intră în comă. Ce tip de leziune hemoragică este cel mai probabil sugerat de această evoluție?",
          "options": [
            "Contuzie cerebrală simplă, fără hematom asociat",
            "Comoție cerebrală",
            "Hematom extradural",
            "Hematom subdural subacut",
            "Hematom subdural cronic"
          ],
          "correct": 3,
          "explanation": "Conform textului, dacă intervalul liber este sub 12 ore se suspectează hematom extradural, dacă este între 24 și 48 de ore se are în vedere hematomul subdural subacut, iar dacă depășește 72 de ore, hematomul subdural cronic. Un interval liber de 36 de ore se încadrează în intervalul sugestiv pentru hematom subdural subacut.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 683-688"
        },
        {
          "id": "67-4",
          "stem": "La examinarea unui copil aflat în comă se remarcă o halenă particulară, asemănătoare mirosului de „mere putrede”. Care dintre următoarele situații clinice se asociază cel mai frecvent cu această halenă acetonemică?",
          "options": [
            "Intoxicația cu substanțe organofosforate",
            "Diabetul zaharat sau hipoglicemia cetotică cu vărsături incoercibile",
            "Insuficiența renală cronică",
            "Intoxicația voluntară cu alcool etilic",
            "Insuficiența hepatică (foetor hepatic)"
          ],
          "correct": 1,
          "explanation": "Halena de tip „mere putrede”, acetonemică, este descrisă în text ca fiind întâlnită în diabet, dar și la copiii cu hipoglicemie cetotică sau cu vărsături incoercibile. Halena de amoniac orientează spre insuficiență renală cronică, iar halena de ficat crud spre insuficiență hepatică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 683-688"
        },
        {
          "id": "67-5",
          "stem": "Un copil aflat în comă din cauza unei meningite bacteriene dezvoltă sindrom de secreție inadecvată de hormon antidiuretic (sindrom Schwartz-Bartter). Care este elementul de conduită specific menționat pentru această situație?",
          "options": [
            "Expansiune volemică agresivă cu ser fiziologic izoton",
            "Reducerea volumului soluțiilor perfuzabile administrate și monitorizarea atentă a ionogramei sanguine",
            "Restricția hidrică nu este necesară dacă natremia este normală",
            "Administrarea de diuretice osmotice în doze mari, indiferent de ionogramă",
            "Administrarea de soluții saline hipertone în ritm crescut"
          ],
          "correct": 1,
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
            "Convulsie febrilă simplă",
            "Frison",
            "Stare de rău convulsiv febril",
            "Convulsie febrilă complexă",
            "Spasmul hohotului de plâns"
          ],
          "correct": 1,
          "explanation": "Frisoanele sunt frecvent confundate cu convulsiile febrile, dar sunt mișcări oscilatorii ritmice, fine, ale întregului corp, care nu se asociază cu pierderea stării de conștiență și apar concomitent cu/urmate de ascensiunea termică, spre deosebire de convulsiile febrile propriu-zise. Convulsia febrilă presupune pierderea stării de conștiență. Spasmul hohotului de plâns este precedat de plâns și expir prelungit, nefiind legat de febră.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 667-682"
        },
        {
          "id": "68-2",
          "stem": "Un copil de 2 ani, în a doua zi a unei viroze respiratorii febrile, prezintă o criză convulsivă cu debut prin deviere a capului și ochilor spre dreapta, cu durată de aproximativ 20 de minute; la câteva ore, în cadrul aceluiași episod febril, prezintă o a doua criză cu aceleași caracteristici. Cum se clasifică acest tip de convulsie febrilă?",
          "options": [
            "Convulsie febrilă complexă",
            "Criză de absență tipică",
            "Epilepsie parțială continuă",
            "Frison",
            "Convulsie febrilă simplă"
          ],
          "correct": 0,
          "explanation": "Convulsiile febrile complexe se caracterizează prin debut focal, durată prelungită (peste 15 minute) și caracter recurent în cursul aceluiași episod de boală acută febrilă — toate trei elemente fiind prezente în acest caz. Convulsiile febrile simple sunt generalizate, durează sub 15 minute și apar o singură dată în episodul febril respectiv.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 667-682"
        },
        {
          "id": "68-3",
          "stem": "Un sugar de 7 luni, cu schemă de vaccinare incompletă (fără nicio doză de vaccin anti-Haemophilus influenzae tip b sau anti-pneumococic), este adus la urgență după o convulsie febrilă cu caracteristici de convulsie febrilă simplă. Examenul clinic este normal, fără semne de iritație meningeală. Care este conduita corectă conform recomandărilor citate în text?",
          "options": [
            "Se indică tomografie computerizată cerebrală de urgență",
            "Se indică electroencefalogramă de urgență, înaintea externării",
            "Nu este necesară nicio investigație suplimentară, doar tratamentul afecțiunii febrile subiacente",
            "Se indică efectuarea puncției lombare, având în vedere statusul vaccinal incomplet",
            "Se indică internare cu monitorizare video-EEG timp de 24 de ore"
          ],
          "correct": 3,
          "explanation": "Conform recomandărilor Academiei Americane de Pediatrie citate în text, puncția lombară este indicată la copiii cu convulsii febrile care sunt nevaccinați anti-Haemophilus influenzae tip b sau anti-Streptococcus pneumoniae, sau la care vaccinarea este incertă, chiar în absența altor semne clinice de meningită. La copiii cu CFS tipice și examen neurologic normal, în general nu sunt necesare EEG, neuroimagistică sau puncție lombară, dar acest caz are un factor de risc specific menționat explicit ca indicație pentru puncție lombară.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 667-682"
        },
        {
          "id": "68-4",
          "stem": "Un copil febril se prezintă la urgență aflat încă în criză convulsivă generalizată, cu o durată estimată de 7 minute de la debut. Abordul venos periferic nu poate fi obținut rapid. Care este conduita terapeutică de primă linie în această situație?",
          "options": [
            "Fenitoină intravenoasă 20 mg/kg, prin abord osos de urgență",
            "Midazolam cu administrare bucală sau nazală, 0,2 mg/kg",
            "Așteptare fără tratament, deoarece convulsiile febrile durează întotdeauna sub 5 minute",
            "Fenobarbital intramuscular, în doze anticonvulsivante",
            "Antipiretic administrat oral, criza urmând să cedeze spontan odată cu scăderea febrei"
          ],
          "correct": 1,
          "explanation": "Convulsiile febrile cu durată mai mare de 5 minute au indicație de oprire farmacologică; anticonvulsivantele de primă linie sunt diazepamul și lorazepamul intravenos, iar dacă nu se poate aborda calea intravenoasă, midazolamul cu administrare bucală sau nazală, 0,2 mg/kg, reprezintă opțiunea corectă. Fenitoina se rezervă cazurilor care nu răspund la benzodiazepine, în cadrul stării de rău convulsiv.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 667-682"
        },
        {
          "id": "68-5",
          "stem": "Un sugar de 8 luni are prima convulsie febrilă simplă. Din anamneză reiese: vârsta sub 1 an, mama a prezentat convulsii febrile în copilărie, temperatura măsurată în departamentul de urgență a fost relativ scăzută, iar intervalul dintre debutul febrei și apariția crizei a fost scurt. Ținând cont de asocierea acestor factori de risc, care este riscul aproximativ de recurență a convulsiilor febrile la acest copil?",
          "options": [
            "100%, recurența fiind inevitabilă",
            "50-65%",
            "Sub 20%",
            "Cel puțin 70%",
            "30-35%"
          ],
          "correct": 3,
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
            "Monoplegie congenitală a membrului superior drept",
            "Hemisindrom neonatal tranzitoriu",
            "Hemiplegie spastică dreaptă",
            "Paralizie obstetricală de plex brahial drept",
            "Diplegie spastică cu afectare asimetrică a membrelor superioare"
          ],
          "correct": 2,
          "explanation": "Textul descrie exact acest tablou clinic: primele manifestări ale hemiplegiei spastice apar în jurul vârstei de 4-5 luni, când sugarul folosește preferențial un membru superior, cu prehensiune caracterizată de hiperextensia și răsfirarea degetelor, flexia cotului și abducția excesivă a brațului, iar membrul inferior este în extensie cu picior în var equin. Paralizia obstetricală de plex brahial se diferențiază prin semne de afectare a neuronului motor periferic, iar hemisindroamele neonatale sunt tranzitorii.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 654-664"
        },
        {
          "id": "69-2",
          "stem": "Un copil de 8 luni prezintă hemiplegie dreaptă cu instalare relativ bruscă, după un episod de convulsii de hemicorp drept. La examenul clinic se constată hipotonie a membrelor afectate și pareză facială (nerv VII) de tip central pe aceeași parte. Aceste elemente clinice pledează cel mai mult pentru:",
          "options": [
            "Diplegie atonă cu afectare asimetrică",
            "Hemiplegie dobândită (survenită după perioada neonatală)",
            "Hemiplegie congenitală cu debut tardiv",
            "Paralizie obstetricală de plex brahial",
            "Leucomalacie periventriculară simetrică bilaterală"
          ],
          "correct": 1,
          "explanation": "Conform textului, este greu de diferențiat forma congenitală de cea dobândită la vârsta de sugar, dar prezența hipotoniei și a paraliziei faciale de tip central pledează pentru hemiplegia dobândită. De asemenea, sunt descrise cazuri rare cu debut brusc, după accident vascular cerebral sau convulsii de hemicorp, când hemiplegia inițial flască devine ulterior spastică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 654-664"
        },
        {
          "id": "69-3",
          "stem": "Un nou-născut la termen suferă un episod de hipoperfuzie cerebrală severă, cu afectare predominantă a zonei corticale de graniță (watershed) dintre teritoriile arteriale. Conform mecanismelor fiziopatologice descrise, care este forma clinică de paralizie cerebrală cel mai probabil rezultată?",
          "options": [
            "Diplegie atonă",
            "Formă dischinetică/extrapiramidală",
            "Hemiplegie spastică",
            "Paralizie cerebrală ataxică",
            "Tetraplegie spastică"
          ],
          "correct": 4,
          "explanation": "Textul precizează că, la nou-născutul la termen, hipoperfuzia lezează zona de graniță (watershed) a cortexului, ducând la tetraplegie spastică, în timp ce leziunile vasculare din teritoriul arterei cerebrale medii determină hemiplegie spastică, iar afectarea ganglionilor bazali produce forme extrapiramidale/dischinetice.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 654-664"
        },
        {
          "id": "69-4",
          "stem": "Copil de 4 ani cu tetrapareză spastică severă, neambulator, este urmărit în cadrul unei echipe multidisciplinare de recuperare neuromotorie. Care este conduita corectă de screening pentru o complicație osteoarticulară frecventă la acest tip de pacient?",
          "options": [
            "Radiografie de coloană vertebrală lunară",
            "IRM cerebral anual pentru reevaluarea leziunilor",
            "Tomografie computerizată cerebrală anuală",
            "Radiografie de bazin la interval de 6-12 luni",
            "Ecografie transfontanelară la fiecare 6 luni"
          ],
          "correct": 3,
          "explanation": "Textul recomandă urmărirea și screeningul afectării șoldului (displazie, subluxație, dislocare) la copiii cu PC, în special la cei nonambulatorii cu tetrapareză spastică, prin efectuarea unei radiografii de bazin la interval de 6-12 luni. Intervenția chirurgicală precoce (osteotomie femurală și/sau de pelvis) pare să aibă rezultate mai bune.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 654-664"
        },
        {
          "id": "69-5",
          "stem": "Un copil de 5 ani cu diplegie spastică la nivelul membrelor inferioare, nivel funcțional înalt și capacitate cognitivă adecvată pentru a susține terapia de reabilitare postoperatorie, este evaluat pentru rizotomie dorsală selectivă. Care dintre următoarele afirmații despre această procedură este corectă, conform textului?",
          "options": [
            "Se recomandă la copii cu vârsta peste 10 ani, după consolidarea deformărilor osoase",
            "Este indicată cu precădere în formele mixte de PC cu distonie marcantă",
            "Constă în secționarea selectivă a rădăcinilor nervoase posterioare (senzoriale) L1-S2, cu conservarea rădăcinilor motorii",
            "Presupune plasarea unei pompe cu eliberare continuă de baclofen la nivel subarahnoidian",
            "Constă în secționarea rădăcinilor nervoase anterioare (motorii) L1-S2, cu conservarea celor senzoriale"
          ],
          "correct": 2,
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
            "Diagnosticul de SHP este exclus, fiind vorba despre reflux gastroesofagian fiziologic",
            "Diagnosticul de stenoză hipertrofică de pilor formă atipică trebuie luat în discuție",
            "Tabloul clinic este tipic pentru invaginația intestinală",
            "Ameliorarea rapidă după rehidratare exclude o patologie obstructivă digestivă",
            "Alcaloza hipocloremică orientează în mod caracteristic spre gastroenterită acută"
          ],
          "correct": 1,
          "explanation": "Textul precizează că forma atipică de SHP trebuie luată în discuție la un sugar de vârstă mică cu vărsături nonbilioase repetate, alcaloză metabolică hipocloremică și/sau ameliorare clinică rapidă după rehidratare. Aceste elemente, deși nespecifice, nu exclud SHP, ci impun suspiciune diagnostică suplimentară. Palparea olivei pilorice este oricum mai rar pozitivă în prezent (aproximativ 49% din cazuri).",
          "source": "Pleșca - Tratat de Pediatrie, pag. 302-304"
        },
        {
          "id": "70-2",
          "stem": "Un sugar diagnosticat cu stenoză hipertrofică de pilor prezintă și icter. Care este afirmația corectă referitoare la această asociere?",
          "options": [
            "Icterul la un sugar cu SHP impune amânarea pilorotomiei până la investigarea completă a unei atrezii de căi biliare",
            "Hiperbilirubinemia asociată SHP este exclusiv de tip direct și nu se remite postoperator",
            "Asocierea icter-SHP este întâlnită la peste jumătate din cazuri",
            "Prezența icterului contraindică intervenția chirurgicală până la normalizarea bilirubinei",
            "Reprezintă sindromul ictero-piloric, întâlnit la aproximativ 14% dintre cazurile de SHP, cu rezoluție după intervenția chirurgicală"
          ],
          "correct": 4,
          "explanation": "Textul menționează explicit că hiperbilirubinemia poate însoți SHP, determinând sindromul ictero-piloric în 14% din cazuri, cu rezoluție după intervenția chirurgicală. Nu se descrie necesitatea amânării intervenției sau contraindicarea acesteia din cauza icterului.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 302-304"
        },
        {
          "id": "70-3",
          "stem": "Un sugar de 5 săptămâni cu suspiciune clinică de stenoză hipertrofică de pilor este investigat ecografic. Care dintre următoarele seturi de valori corespunde limitelor superioare descrise pentru grosimea și lungimea mușchiului piloric, respectiv diametrul pilorului, susținând diagnosticul de SHP?",
          "options": [
            "Grosime 3-4 mm, lungime 15-19 mm, diametru 10-14 mm",
            "Grosime 1-2 mm, lungime 8-10 mm, diametru 5-7 mm",
            "Grosime 10 mm, lungime 15-19 mm, diametru 3-4 mm",
            "Grosime 3-4 mm, lungime 5-7 mm, diametru 10-14 mm",
            "Grosime 6-8 mm, lungime 25-30 mm, diametru 18-20 mm"
          ],
          "correct": 0,
          "explanation": "Textul precizează că la ecografia abdominală se apreciază grosimea mușchiului piloric (limita superioară de 3-4 mm), lungimea mușchiului piloric (limita superioară de 15-19 mm) și diametrul pilorului (limita superioară de 10-14 mm). Ecografia abdominală are sensibilitate și specificitate de peste 95% pentru SHP.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 302-304"
        },
        {
          "id": "70-4",
          "stem": "Un sugar se prezintă cu vărsături bilioase, aspect care nu este caracteristic stenozei hipertrofice de pilor. Care este investigația imagistică inițială recomandată pentru a exclude o cauză distală de obstrucție intestinală?",
          "options": [
            "Tomografia computerizată abdominală",
            "Ecografia abdominală, ca investigație de rutină pentru SHP",
            "Examenul radiologic cu substanță de contrast per os",
            "Radiografia abdominală pe gol",
            "Endoscopia digestivă superioară"
          ],
          "correct": 3,
          "explanation": "Textul precizează că radiografia abdominală pe gol se efectuează în cazul sugarilor cu vărsături bilioase la care se suspectează o cauză distală de obstrucție, spre deosebire de SHP, care se manifestă tipic prin vărsături nonbilioase. Examenul cu substanță de contrast se rezervă cazurilor incerte clinic și ecografic, iar endoscopia se folosește extrem de rar.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 302-304"
        },
        {
          "id": "70-5",
          "stem": "Un sugar cu stenoză hipertrofică de pilor prezintă alcaloză hipocloremică semnificativă la evaluarea preoperatorie. Care este conduita corectă înaintea intervenției chirurgicale (pilorotomie extramucoasă Fredet-Weber-Ramstedt)?",
          "options": [
            "Alcaloza hipocloremică nu influențează evoluția postoperatorie și nu necesită corectare prealabilă",
            "Se recomandă restricție hidrică strictă până la normalizarea spontană a electroliților",
            "Intervenția chirurgicală trebuie efectuată imediat, iar corectarea electrolitică se realizează exclusiv postoperator",
            "Corectarea se realizează exclusiv prin administrarea de KCl în bolus rapid intravenos",
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
            "Tomografia computerizată abdominală",
            "Ecografia abdominală",
            "Radiografia abdominală simplă",
            "Tranzitul baritat",
            "Rezonanța magnetică abdominală"
          ],
          "correct": 1,
          "explanation": "Ecografia abdominală reprezintă investigația de elecție în diagnosticul invaginației intestinale, fiind ușor de efectuat, neiradiantă și permițând identificarea unui posibil punct de plecare, cu aspect tipic „în cocardă” sau „pseudorinichi”. Radiografia abdominală are valoare limitată, oferind doar semne indirecte, iar CT și IRM nu sunt utilizate de rutină.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 305-307"
        },
        {
          "id": "71-2",
          "stem": "În cadrul reducerii pneumatice a invaginației intestinale sub ghidaj fluoroscopic sau ecografic, care este gazul cel mai frecvent utilizat pentru insuflare și care este motivul principal al preferinței acestuia?",
          "options": [
            "Oxigenul, deoarece asigură cea mai bună vizualizare fluoroscopică a tumorii de invaginație",
            "Azotul, deoarece are cea mai mică solubilitate sanguină dintre gazele disponibile",
            "Aerul atmosferic, deoarece este disponibil imediat și nu necesită echipament suplimentar",
            "Dioxidul de carbon, deoarece este rapid absorbit din intestin, creează un disconfort redus și nu este asociat cu embolii gazoase",
            "Heliul, deoarece reduce semnificativ riscul de perforație intestinală în timpul insuflării"
          ],
          "correct": 3,
          "explanation": "Textul precizează că dioxidul de carbon este cel mai utilizat gaz pentru reducerea pneumatică, fiind rapid absorbit din intestin, creând un disconfort redus și nefiind asociat cu embolii gazoase. Presiunea medie de insuflare variază între 80 și 120 mmHg, sub ghidaj fluoroscopic sau ecografic.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 305-307"
        },
        {
          "id": "71-3",
          "stem": "În timpul unei reduceri pneumatice a invaginației intestinale la un copil, survine o perforație intestinală cu pneumoperitoneu. Care este conduita imediată recomandată?",
          "options": [
            "Trecerea imediată la reducere hidrostatică cu substanță de contrast baritată",
            "Administrarea de antibiotice cu monitorizare clinică, fără intervenție imediată",
            "Laparoscopie exploratorie efectuată fără decompresia prealabilă a pneumoperitoneului",
            "Decompresia pe ac a pneumoperitoneului, urmată de explorarea chirurgicală",
            "Continuarea insuflării până la finalizarea reducerii, urmată de reevaluare ecografică"
          ],
          "correct": 3,
          "explanation": "Conform textului, în cazul unei perforații survenite în timpul reducerii pneumatice se recomandă decompresia pe ac a pneumoperitoneului, pentru a evita compromiterea statusului respirator, urmată de explorarea chirurgicală. Bariul nu mai este recomandat pentru reducerea hidrostatică tocmai din cauza riscului de peritonită severă în caz de perforație.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 305-307"
        },
        {
          "id": "71-4",
          "stem": "Un copil cu invaginație intestinală prezintă la evaluare semne de iritație peritoneală, iar radiografia abdominală evidențiază pneumoperitoneu. Care este conduita terapeutică adecvată?",
          "options": [
            "Abord laparoscopic, considerat metodă de elecție indiferent de context clinic",
            "Intervenție chirurgicală, reducerea nechirurgicală și abordul laparoscopic fiind contraindicate în acest context",
            "Reducere hidrostatică cu ser fiziologic sub ghidaj ecografic",
            "Repetarea tentativelor de reducere nechirurgicală la interval de 30 de minute",
            "Reducere pneumatică sub ghidaj fluoroscopic, ca primă intenție"
          ],
          "correct": 1,
          "explanation": "Semnele de afectare intestinală (iritație peritoneală sau pneumoperitoneu) reprezintă o indicație pentru managementul chirurgical, reducerea pneumatică sau hidrostatică fiind contraindicată în prezența semnelor de perforație. În plus, pneumoperitoneul și semnele de peritonită sunt contraindicații pentru abordul laparoscopic, impunând astfel chirurgia clasică.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 305-307"
        },
        {
          "id": "71-5",
          "stem": "Un copil a beneficiat de dezinvaginare nechirurgicală reușită pentru un episod de invaginație intestinală. Referitor la riscul și managementul reinvaginării, care afirmație este corectă conform datelor din literatură?",
          "options": [
            "Reinvaginarea apare la aproximativ 1% din cazuri și impune întotdeauna intervenție chirurgicală imediată",
            "Reinvaginarea apare la aproximativ 10% din cazurile reduse nechirurgical, o treime în primele 24 de ore, iar majoritatea în primele șase luni postreducere",
            "Reinvaginarea apare la aproximativ 50% din cazuri, majoritatea în prima săptămână postreducere",
            "Reinvaginarea apare mai frecvent decât episodul inițial, iar ratele de succes ale reducerii nechirurgicale sunt semnificativ mai scăzute",
            "Reinvaginarea nu poate fi niciodată tratată nechirurgical, fiind necesară laparotomia de fiecare dată"
          ],
          "correct": 1,
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
            "Sepsis neonatal tardiv necomplicat, fără afectare digestivă",
            "Peritonită primară neonatală",
            "Stadiul III – enterocolită necrozantă avansată",
            "Stadiul I – suspiciune de enterocolită necrozantă",
            "Stadiul II – enterocolită necrozantă certă"
          ],
          "correct": 3,
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
            "Gazul la nivelul venei porte se identifică radiografic la peste jumătate dintre cazuri",
            "Pneumoperitoneul este prezent la aproximativ 60% dintre cazuri și semnalează un prognostic rezervat"
          ],
          "correct": 4,
          "explanation": "Textul precizează că pneumoperitoneul, prezent la 60% din cazuri, indică un prognostic rezervat. Gazul la nivelul venei porte este prezent doar în 9% din cazuri (nu la majoritate), ecografia abdominală permite decelarea gazului portal, pneumatoza intestinală apare în stadiul de „ileus semnificativ” (nu în aspectul normal/ileus ușor), iar NIRS este menționată ca având deocamdată rezultate neconcludente.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 139-142"
        },
        {
          "id": "72-3",
          "stem": "Care dintre următorii factori este considerat, conform sursei, cel mai important factor predispozant pentru enterocolita necrozantă?",
          "options": [
            "Cateterizarea vaselor ombilicale",
            "Exsangvinotransfuzia",
            "Policitemia",
            "Prematuritatea",
            "Malformațiile congenitale cardiace (hipoplazia cordului stâng, coarctația de aortă, persistența canalului arterial)"
          ],
          "correct": 3,
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
            "Instalarea unui tub de dren la nivel peritoneal",
            "Transplant intestinal de urgență"
          ],
          "correct": 3,
          "explanation": "Textul precizează că instalarea unui tub de dren la nivel peritoneal reprezintă o tehnică alternativă la rezecția chirurgicală, propusă în cazurile cu stare critică, având ca scop temporizarea rezecției până la ameliorarea stării clinice a pacientului. Transplantul intestinal se impune doar în cazurile cu rezecții extensive deja efectuate, iar enteroplastia seriată este menționată ca tehnică chirurgicală mai nouă, nu ca metodă de temporizare.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 139-142"
        },
        {
          "id": "72-5",
          "stem": "Care dintre următoarele reprezintă o complicație tardivă posibilă a necrozei transmurale intestinale în evoluția enterocolitei necrozante, secundară proliferării fibroblastice locale, raportată în 10-35% din cazuri?",
          "options": [
            "Ciroza hepatică, independentă de durata nutriției parenterale",
            "Stricturile intestinale, cu evoluție ulterioară spre ocluzie intestinală",
            "Recurența enterocolitei necrozante",
            "Perforația gastrică izolată, fără antecedente de necroză intestinală",
            "Sindromul de intestin scurt la toți pacienții tratați exclusiv medical"
          ],
          "correct": 1,
          "explanation": "Conform textului, necroza transmurală poate evolua, printre altele, către proliferare fibroblastică locală cu formarea, în timp, de stricturi intestinale (în 10-35% din cazuri) și apoi de ocluzii intestinale. Recurența EN este raportată separat, în 5-10% din cazuri, sindromul de intestin scurt apare doar la cei operați (nu la toți tratați medical), iar ciroza hepatică este o complicație asociată nutriției parenterale totale prelungite, nu independentă de aceasta.",
          "source": "Pleșca - Tratat de Pediatrie, pag. 139-142"
        }
      ]
    }
  ]
};
