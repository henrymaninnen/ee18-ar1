/* 1958 Amerikanska rymdmyndigheten NASA bildat */

/* 1962 En nylonstrumpa över TV:N är tillräckligt för att de ska bli färg enligt ett aprilskät i samma apparat */

/* 1948 Kinsey publicerar sin första "rapport" om manlig sexualitet */

/* 1960 Anita Ekberg badar i fontatna di trevi filmen Det ljuva livet */

/* 1927 Kanadaensikst hockeybesök för första gången, Sverige får stryk med 17-1
 */
/* 1963 Vulkanön surtsey föds och stiger upp ur vattnet */

/* 1960 Jan Guillou relegeras från Solbacka läroverk för tjuvrökning inomhus */

/* 1889 Eiffeltornet i Paris byggs som ett järnsklettet en teknik som var hypermodern för sin tid */

/* 1954 Roger Bannister är först i världen att springa engeslka milen under 4 minuter, den s k "drömmilen" är uppnåd */

/* Globala variabler och konstanter */

var frågor = [
    "Amerikanska rymdmyndigheten NASA bildat",
    "En nylonstrumpa över TV:N är tillräckligt för att de ska bli färg enligt ett aprilskät i samma apparat",
    "Kinsey publicerar sin första rapport om manlig sexualitet",
    "Anita Ekberg badar i fontatna di trevi filmen Det ljuva livet",
    "Kanadaensikst hockeybesök för första gången, Sverige får stryk med 17-1",
    "Vulkanön surtsey föds och stiger upp ur vattnet",
    "Jan Guillou relegeras från Solbacka läroverk för tjuvrökning inomhus",
    "Eiffeltornet i Paris byggs som ett järnsklettet en teknik som var hypermodern för sin tid",
    "Roger Bannister är först i världen att springa engeslka milen under 4 minuter, den s k drömmilen är uppnåd",
    "Globala variabler"
];

var årtal = [
    1958, 1962, 1948, 1960, 1927, 1963, 1960, 1889, 1954
]
const elementkontainer = document.querySelector(".kontainer");
const elementFrågaRuta = document.querySelector("textarea");
const elementÅrtalRuta = document.querySelector("input");
const elementKnappSkicka = document.querySelector("#skicka");
const elementKnappNästa = document.querySelector("#nästa");
var slumptal, 
poäng = 0;
varv = 10;
const elementTummeUp = document.querySelector("#up");
const elementTummeNer = document.querySelector("#ner");
const elementPoängRuta = document.querySelector("#poäng");
/* skapa en funkmtion för att slumpa fram en fråga */
function nyFråga() {
    slumptal = Math.floor(Math.random() * 10);
    console.log(frågor[slumptal]);
    console.log(årtal[slumptal]);

    elementFrågaRuta.value = frågor[slumptal];
    elementÅrtalRuta.value = "";
}
/* Körs i början */
elementTummeUp.style.display = "none"
elementTummeNer.style.display = "none"
/* kör funktionen */
nyFråga();
/* Dölj tummarna */
elementTummeUp.style.display = "none"
elementTummeNer.style.display = "none"

/* skriv ut ny fråga när man klickar på knappen nästa */
elementKnappNästa.addEventListener("click", nyFråga);

/* jämföra svaret med årtalen */

elementKnappSkicka.addEventListener("click", kollaSvaret)

/* Skapa en funktion för att kolla om svaret är rätt */

function kollaSvaret() {
    /* Läs av svaret */
    var svaret = elementÅrtalRuta.value;
    console.log(svaret);

    /* Antal varv */
    varv--;

    if (varv == 0) {
        if (poäng == 10) {
            elementkontainer.innerHTML = "Grattis du har haft alla rätt!!!";
        } else {
            
        }
        elementkontainer.innerHTML = "Du har förlorat";
    }

    /* Det rätta årtalet */
    var årtalet = årtal[slumptal];

    /* Kolla om svaret är rätt */
    if (svaret == årtalet) {
        console.log("yippi rätt svar");
        elementTummeUp.style.display = "block"
        elementTummeNer.style.display = "none"
        poäng = poäng + 1;

    } else {
        console.log("lol försök igen");
        elementTummeNer.style.display = "block"
        elementTummeUp.style.display = "none"


    }


    /* Skriv ut poäng */
 elementPoängRuta.value = poäng;


}