/* Element vi jobbar med */
const elementAntal = document.querySelector("#antal");
const elementFrukt = document.querySelector("#frukt");
const elementSkicka = document.querySelector("#skicka");
const elementRadera = document.querySelector("#radera");
const elementFel = document.querySelector("#fel");
const elementOutput = document.querySelector("#output");


/* Tryck på knappen skicka */
elementSkicka.addEventListener("click", skicka);
elementRadera.addEventListener("click", radera);

function skicka() {
    var antal = elementAntal.value;
    var frukt = elementFrukt.value;

    elementFel.textContent = "";

    if (antal == "") {
        elementFel.innerHTML = "Du har inte anget antal <br>"
    }
    if (frukt == "") {
        elementFel.innerHTML += "du har inte anget frukten <br>"
    }
    if (frukt != "äpplen") {
        elementFel.innerHTML += "Välj äpplen istället för " + frukt
    }

    if (antal < 1) {
        antal = "ett"
    }
    if (antal == 1) {
       antal = "ett"
    }
    if (antal == 2) {
        antal = "två"
    }
    if (antal > 2) {
        antal = "två"
    }

    elementOutput.innerHTML = "Doktorn säger att " + antal + " " + frukt + " om dagen håller doktorn borta!";
}
function radera() {
    elementAntal.value = "";
    elementFrukt.value = "";
    elementOutput.textContent = "";
    elementFel.textContent = "";
}