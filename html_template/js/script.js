function myAge(a) {
    const age = 2022 - a;
    return age;
  }

  function display_image(src, width, height, alt) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    document.body.appendChild(a);
}


function myName() {
    var name=prompt("Quel est ton nom?","");
    var year=prompt("Quelle est ton annee de naissance?","");
    const yearInt=parseInt(year);    // Transform String to Number
    var month=prompt("Quel est ton mois de naissance en chiffre?","");
    
    document.body.innerHTML += "<h2> Ciao, " + name + "!</h2>";
    document.body.innerHTML += "<h3>  Un bel âge, " + myAge(yearInt) + " ans et " + month + " mois. Très jeune et déjà plein de sagesse. C'est un âge terrible. Car c'est l'âge ou nous devenons ce que nous sommes. Et ton signe astrologique chinois est : </h3>";
    
    var rat = [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020] ;
    var buffle = [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021] ;
    var tigre = [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022] ;
    var lapin = [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023] ;
    var dragon = [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024] ;
    var serpent = [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025] ;
    var cheval = [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026] ;
    var chevre = [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027] ;
    var singe = [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028] ;
    var coq = [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029] ;
    var chien = [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030] ;
    var cochon = [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031] ; 
    var index = 0

    while(index < rat.length) {
         if (rat[index]==year) {

            document.body.innerHTML += "<h4> ...et tu es du signe du 'RATATOUILLE' sans doute. Tu es Intelligent, débrouillard, versatile, gentil. C'est bon signe !</h4>";
            //document.body.innerHTML += <img src="img/rat.jfif">
            display_image('img/rat.jfif', 
                 276, 
                 250, 
                 'JavaScriptImage'); 
         }

         else if (buffle[index]==year) {

            document.body.innerHTML += "<h4> ...et tu es du signe du 'BUFFALO' sans doute. Tu es Studieux, fiable, fort, déterminé. C'est bon signe !</h4>";
            display_image('img/buffle.jpg', 
            276, 
            250, 
            'JavaScriptImage'); 
         }
         else if (tigre[index]==year) {

            document.body.innerHTML += "<h4> ...et tu es du signe du 'TIGROU' sans doute. Tu es Brave, confiant, compétiteur. C'est bon signe !</h4>";
            display_image('img/tigre.jpg', 
            276, 
            250, 
            'JavaScriptImage');   
         }
         else if (lapin[index]==year) {

            document.body.innerHTML += "<h4> ...et tu es du signe du petit 'LAPIN' sans doute. Tu es Silencieux, élégant, gentil, responsable. C'est bon signe !</h4>";
            display_image('img/lapin.jpg', 
            276, 
            250, 
            'JavaScriptImage'); 
         }
         else if (dragon[index]==year) {

            document.body.innerHTML += "<h4> ...et tu es du signe du 'DRAGON BALL Z' sans doute. Tu es Confiant, intelligent, enthousiaste. C'est bon signe !</h4>";
            display_image('img/dragon.jpg', 
            276, 
            250, 
            'JavaScriptImage'); 
         }
         else if (serpent[index]==year) {

            document.body.innerHTML += "<h4> ...et tu es du signe du 'SERPENT' sans doute. Tu es Énigmatique, intelligent, clairvoyant. C'est bon signe !</h4>";
            display_image('img/serpent.jpg', 
            276, 
            250, 
            'JavaScriptImage'); 
         }
         else if (cheval[index]==year) {

            document.body.innerHTML += "<h4> ...et tu es du signe du 'CHEVAL' sans doute. Tu es Énergique, actif, animé. C'est bon signe !</h4>";
            display_image('img/cheval.jpg', 
            276, 
            250, 
            'JavaScriptImage'); 
         }
         else if (chevre[index]==year) {

            document.body.innerHTML += "<h4> ...et tu es du signe du 'CHEVRE' sans doute. Tu es Calme, doux, sympathique. C'est bon signe !</h4>";
            display_image('img/chevre.jpg', 
            276, 
            250, 
            'JavaScriptImage'); 
         }
         else if (singe[index]==year) {

            document.body.innerHTML += "<h4> ...et tu es du signe du 'SINGE' sans doute. Tu es Vif, intelligent, curieux. C'est bon signe !</h4>";
            display_image('img/singe.jpg', 
            276, 
            250, 
            'JavaScriptImage'); 
         }
         else if (coq[index]==year) {

            document.body.innerHTML += "<h4> ...et tu es du signe du 'COCORICO' sans doute. Tu es Observateur, travailleur, courageux. C'est bon signe !</h4>";
            display_image('img/coq.jpg', 
            276, 
            250, 
            'JavaScriptImage'); 
         }
         else if (chien[index]==year) {

            document.body.innerHTML += "<h4> ...et tu es du signe du 'WAOUH WAOUH' sans doute. Tu es Mignon, honnête, prudent. C'est bon signe !</h4>";
            display_image('img/chien.jpg', 
            276, 
            250, 
            'JavaScriptImage'); 
         }
         else if (cochon[index]==year) {

            document.body.innerHTML += "<h4> ...et tu es du signe du 'COCHONOU' sans doute. Tu es Sentimental, généreux, studieux. C'est bon signe !</h4>";
            display_image('img/cochon.jpg', 
            276, 
            250, 
            'JavaScriptImage'); 
         }

         else {
           // document.body.innerHTML += "<h4> ...tu es un 'EXTRA-TERRESTRE' sans doute. C'est bon signe !</h4>";
        
          }
          index = index + 1
    
        
        }
        document.body.innerHTML += "<h5> A très bientôt et Bonne Année du tigre d'eau!</h5>";
  }


  

