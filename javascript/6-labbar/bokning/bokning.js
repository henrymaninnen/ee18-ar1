/* Start */

/* element vi använder */
const elementRum = document.querySelectorAll('input[name="rum"]');
const elementAntalNätter = document.querySelector('select');
const elementTillägg = document.querySelectorAll('input[name="tillägg"]')
const elementKampanjkod = document.querySelector("#kampanjkod")
const elementKnapp = document.querySelector("button")
const elementP = document.querySelector("p")
/* Läsa av bokningen */
elementKnapp.addEventListener("click", räknaUt);

/* räkna ut kostnaden */
function räknaUt(params) {
    var kostnad = 0, rumspris

    /* Val av rum */
    if (elementRum[0].checked == true) {
        rumspris = 500;
    }

    if (elementRum[1].checked == true) {
        rumspris = 800;
    }

    if (elementRum[2].checked == true) {
        rumspris = 1000;
    }
/* Hur många nätter har valts? */
    var antalNätter = elementAntalNätter.value;
    kostnad = rumspris * antalNätter

    /* Villka tilläg har valts */
if (elementTillägg[0].checked == true) {
    kostnad = kostnad + 200;
}
if (elementTillägg[1].checked == true) {
    kostnad = kostnad + 300;
}
if (elementTillägg[2].checked == true) {
    kostnad = kostnad + 3000;
}
if (elementTillägg[3].checked == true) {
    kostnad = kostnad + 200;
}
console.log(kostnad);

    
    var kostnad = 0
    var kampanjkod = elementKampanjkod.value;

    /* Har vi en kampanjkod */
    var kampanjkod = elementKampanjkod.value;

    if (kampanjkod == "sportlov20") {
        kostnad = kostnad * 0.01
    }
    if (kampanjkod == "sommar2020") {
        kostnad = kostnad * 0.02
    }
    if (kampanjkod == "NTI2020") {
        kostnad = kostnad * 0.99
    }

    elementP.textContent = "Dina val ger en kostnad på " + kostnad + "kr";
    
}

/* Visa kostnaden */

