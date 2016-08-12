function validateForm(){
  //checking for the category to be checked:
        if ($("#Category").val() !== "Select Category") {
          var fieldConfirmed = true;
          console.log("category selected");
          $("#category-invalid-message").empty();
        } 
        else {
          var fieldConfirmed = false;
          document.getElementById("category-invalid-message").innerHTML = "Please Select a Category";
          return;
        }
         //checking for book related fields: 
        if (cat == "Books") {
            //Checking for the subject to be selected:
          if ($("#SelectSubject").val() !== "Select Subject") {
            var fieldConfirmed = true;
            console.log("subject selected");
            $("#subject-invalid-message").empty();
          } 
          else {
            var fieldConfirmed = false;
            document.getElementById("subject-invalid-message").innerHTML = "Please Select a Subject";
            return;
          }
          //Checking for the coursename to be selected:
          var enteredVal = document.getElementById("ChooseSubject").value;
          var allowedCourses = ["ma201 - math 1", "ma204 - math 2", "ma221 - math 2m", "ma301 - math 3", "ma404, ma405, ma406 - math 4", "ma407, ma408, ma409 - precalculus", "ma411, ma412, ma413 - statistics", "ma421, ma422, ma423 - precalculus bc", "ma431, ma432, ma433 - finite math with applications", "ma461 - intro to robotics", "ma465 - intro to ios programming", "ma466 - intro to web programming", "ma504, ma505, ma506 - honors calculus ab", "ma511, ma512, ma513 - honors statistics", "ma518 - honors math seminar: calculus c", "ma521, ma522, ma523 - honors calculus bc", "ma527, ma528, ma529 - honors calculus-based prob & stats", "ma533 - honors math seminar: computational geometry and proof", "ma536 - honors math seminar: multivariable calculus", "ma537 - honors math seminar: differential eqns", "ma538 - honors math seminar: number theory", "ma551 - statistical reasoning in sports", "ma555, ma556, ma557 - honors computer programming", "in530 - honors calculus ab with physics", "es401 - intro to web programming (online)", "ma599 - ind. study: math",  //ENGLISH COURSES// 
  "hu201 - humanities - english","en301 - english iii","en421 - the novel","en422 - advanced poetry","en423 - essay writing","en501 - writing seminar","en502 - introduction to literature","en503 – fiction seminar","en505 - style and expression in creative writing","en506 – literary journalism","en507 - literature of national pastime","en508 - african american literature","en510 - literature of the beat generation","en513 - nobel pulitzer national booker","en516 - essays of reflection","en518 - literature as philosophy","en519 - southern african literature","en523 - hemingway","en525 - irish literature","en528 - law as literature","en531 - gender and literature","en533 - moby dick","en536 - creative non-fiction","en540 - poetry seminar","en542 - southern literature","en544 - shakespeare's comedies: masks we wear","en547 - the screwball comedy: from shakespeare to hollywood and beyond","en548 - west of everything","en549 - the wild western","en551 - signifying nothing: experimental novels","en553 - trauma and the literary imagination","en554 - chaucer: text and context","en555 - boarding school literature","en556 - modern english plays","en561 – storytelling in literature and film","en563 – american literature and the free market","en564 - mystery of language: detective fiction","en565 - war stories","en570 – gender in gothic and magic realist litereature","en571 – ovidian tradition in western literature","in504 - legal practice and procedures","in505 – ethics and literature","in509 – science and literature","in510 - linguistics: dr. johnson to dr. chomsky","in511 - modern thought and literature","in524 - immigration stories/theories","in570 - from freud to the void","in571 - the truth about trenton","en599 - ind. study: english", //HISTORY COURSES// 
   "hu204 - humanities - cultural studies","hi301 - forces that shaped the modern world","hi421, hi422, hi423 - themes in u.s. history","hi451 - economics","hi507 - history of latin america since independence","hi511, hi512, hi513 - honors u.s. history","hi515 - advanced research seminar","hi521, hi522, hi523 - honors government","hi525 - civil liberties and the american constitution","hi527 - lincoln","hi530 - european history: the renaissance","hi531 - european history: revolutions","hi532 - european history: the totalitarian state","hi551, hi552, hi553 - honors economics","hi556 - public policy economics","hi572 - u.s. foreign policy: 1945-present","hi573 - american studies: the 1960s","hi575 - the american presidency","hi576 - history of modern china","hi577 - history of japan","hi579 - a \"house divided\": the civil war era","hi580 - canadian studies","hi585 - topics in history of women and gender","hi587 - reporting vietnam","in520 - africa: then and now","in521 - interpreting the ancient maya","in522 - the middle east - myth and history","in524 - immigration stories/theories","in517 - russian language and history","in516 - russia: history and memory","in514 - poverty in the developing world","es501 - destruction of slavery (online)","es502 – introduction to theater history (online)","hi599 - ind. study: history",//LANGUAGE COURSES// 
    "la201 - french 1","la211 - spanish 1","la221 - chinese 1","la241 - latin 1","la301 - french 2","la311 - spanish 2","la321 - chinese 2","la341 - latin 2","la401, la402, la403 - french 3","la404, la405, la406 - french 3v","la411, la412, la413 - spanish 3","la421, la422, la423 - chinese 3","la441, la442, la443 - latin 3","la444 - advanced latin i","la445 - advanced latin ii","la446 - advanced latin iii","la450, la451, la452 - latin 3v","la484 - advanced chinese i","la485 - advanced chinese ii","la486 - advanced chinese iii","la490 - advanced french i","la491 - advanced french ii","la492 - advanced french iii","la494 - advanced spanish i","la495 - advanced spanish ii","la496 - advanced spanish iii","la522 honors chinese: topics in modern china ii","la523 honors chinese: topics in modern china iii","la527 - honors chinese: journalism i","la528 - honors chinese: journalism ii","la529 - honors chinese: journalism iii","la541 - honors latin: cicero and the fall of the republic","la542 - honors latin: vergil and roman identity","la543 - honors latin: augustan rome","la547 - honors latin: roman history/roman lives","la548 - honors latin: roman comedy","la549 - honors latin: latin literature in shakespeare","la565 - honors french: french cinema","la566 - honors french: the ninth art","la567 - honors french: paris - capital of the 19th century","la568 - honors french: lettres scandaleuses","la591 - honors spanish: spain and latin america","la592 - honors spanish: art as social expression","la594 - honors spanish: improvisaciones","la595 - honors spanish: fiction and reality","la596 - honors spanish","espanol en linea","la597 - honors spanish: news and culture","in526 - honors french: versailles","in527 - advanced spanish: community outreach","in528 - honors spanish: politics & poetry","in555 - honors chinese:topics in modern china i","es511, es512, es513 – arabic (online)","la599 - ind. study: language", //Science Courses//
                     "sc205 - inquiries in biological and environmental sciences","sc325 - inquiries in chemical and physical sciences","sc410 - human evolution","sc411 - the biological roots of human behavior","sc413 - evolution of reproduction","sc414 - human disease","sc415 - human anatomy and physiology","sc416 - atmosphere and ocean dynamics","sc431, sc432, sc433 - conceptual physics","sc437 - astronomy","sc438 - observational astronomy","sc511 - honors ecology","sc513 - research in molecular biology","sc516, sc517, sc518 - honors biology","sc519 - research in field ecology","sc522, sc523, sc524 - honors chemistry","sc562 - intro to engineering","sc526 - research in applied chemistry","sc528 - biochemistry","sc531, sc532, sc533 - physics","sc544, sc545, sc546 - physics / mechanics","sc557, sc558, sc559 - honors physics / mechanics","sc573 - sustainability seminar","sc584, sc585, sc586 - honors environmental science","sc590 - learning and memory","in531 - honors physics with calculus","in558 - bioethics","in562 - food studies","in560 - race","in572 - water and humanity:a collaborative study (hybrid)","sc599 - ind. study: science", //Interdisciplinary Courses//
                     "in504 - legal practice and procedures","in505 – ethics and literature","in509 – science and literature","in510 - linguistics: dr. johnson to dr. chomsky","in511 - modern thought and literature","in514 - poverty in the developing world","in516 - russia: history and memory","in517 - russian language and history","in520 - africa: then and now","in521 - interpreting the ancient maya","in522 - the middle east - myth and history","in524 - immigration stories/theories","in526 - honors french: versailles","in527 - advanced spanish: community outreach","in528 - honors spanish: politics & poetry","in530 - honors calculus ab with physics","in531 - honors physics with calculus","in534 - popular music in america","in536 - reason & faith: brecht's \"galileo\"","in538 - varieties of religious experience","in540 - islamic world: arab-israeli conflict","in542 - the karma of words","in544 - religious dimensions of music","in546 - religion and ecology","in548 - heresy: philosophy, religion, & science","in550 - makers modern mind","in554 - the universe story","in555 - honors chinese:topics in modern china i","in558 - bioethics","in560 - race","in562 - food studies","in564 - honors art history","in566 - time, space & light: the 20th century","in568 - design for social change","in570 - from freud to the void","in571 - the truth about trenton","in572 - water and humanity:a collaborative study (hybrid)","in584 - urban education in america","in588 - interdisciplinary: capstone",//Religion&Philosophy Courses//
                     "rp414 - philosophy","rp405 - chinese philosophy","rp301 - world religions","rp402 - social ethics and genocide","rp407 - studies in christian origins","rp408 - hebrew bible: studies & methodologies","rp409 - judaism","rp410 - three forms of buddhism","rp411 - hinduism: belief and practice","rp412 - islamic studies: east and west","rp413 - ethics","rp515 - jerusalem","rp521 – topics in religion: religion and film","in538 - varieties of religious experience","in540 - islamic world: arab-israeli conflict","in542 - the karma of words","in544 - religious dimensions of music","in546 - religion and ecology","in548 - heresy: philosophy, religion, & science","in550 - makers modern mind","in554 - the universe story","in558 - bioethics","rp599 - ind study: relig / philos",//Performing Arts//
                     "pa010 - the lawrentians","pa201 - foundations of music","pa221 - foundations of theater","pa301 - foundations of music","pa304 - the lawrentians","pa310 - explorations of music","pa321 - foundations of theatre","pa322 - acting & directing","pa323 - theatrical design & directing","pa324 - explorations of theatre","pa330 - shapes and styles of music","pa421 - fundamentals of theatre","pa501 - honors music theory","pa502 - honors music theory","pa503 - honors music theory","pa504 - chamber music","pa505 - vocal artistry","pa508 - digital music composition","in534 - popular music in america","in536 - reason & faith: brecht's \"galileo\"","pa599 - ind. study: music or theatre", //Visual Arst// 
                     "va200 - foundations of art i","va300 - foundations of art","va301 - drawing","va302 - design","va401 - painting","va402 - watercolor","va410 - architecture","va412 - ceramics i","va414 - photography i","va416 - printmaking-etching","va420 - structures in 3d","va422 - ceramics ii","va424 - photography ii","va430 - filmmaking: sight & sound","va501 - advanced studio","in564 - honors art history","in566 - time, space & light: the 20th century","va599 - ind. study: visual arts",];//allowedCourse
          
          if ($.inArray(enteredVal, allowedCourses)!== -1){  
              var fieldConfirmed = true;
              $("#course-invalid-message").empty();
              console.log(enteredVal);
          }
          else {
            fieldConfirmed = false;
            document.getElementById("course-invalid-message").innerHTML = "please choose a course";
            return;
          } 
        }
        //checking for a title name:
        if ($("#Title").val() !== "") {
          var fieldConfirmed = true;
          console.log("title entered");
          $("#title-invalid-message").empty();
        } 
        else {
          var fieldConfirmed = false;
          document.getElementById("title-invalid-message").innerHTML = "Please enter a title";
          return;
        }
        //checking for a price:
        if ($("#Price").val() !== "") {
          var fieldConfirmed = true;
          console.log("price entered");
          $("#price-invalid-message").empty();
        } 
        else {
          var fieldConfirmed = false;
          document.getElementById("price-invalid-message").innerHTML = "Please enter a price";
          return;
        }
         
        if (fieldConfirmed == true){
          givePermission();
        }
}