/* Element vi använder */
const elememtRutaTal1 = document.querySelector("#tal1")
const elememtRutaTal2 = document.querySelector("#tal2")

const elememtKnappPlus = document.querySelector("#plus")
const elememtKnappMinus = document.querySelector("#minus")
const elememtKnappGånger = document.querySelector("#gånger")
const elememtKnappDividera = document.querySelector("#dividera")

const elememtKnappRutaResultat = document.querySelector("#resultat")


/* Lyssna på om man klickar på plusknappen */

elememtKnappPlus.addEventListener("click", summera);

function summera() {
    /* Läs av tal1 och tal2 */
    var tal1 = Number(elememtRutaTal1.value);
    var tal2 = Number(elememtRutaTal2.value);

    /* Läs av tal1 + tal2 */
    var summa = tal1 + tal2;

    /* Skriver ut svaret i resultat rutan */
    elememtKnappRutaResultat.value = summa
}

elememtKnappMinus.addEventListener("click", minus);

function minus() {
    /* Läs av tal1 och tal2 */
    var tal1 = Number(elememtRutaTal1.value);
    var tal2 = Number(elememtRutaTal2.value);




    /* Läs av tal1 - tal2 */
    var summa = tal1 - tal2;


    /* Skriver ut svaret i resultat rutan */
    elememtKnappRutaResultat.value = summa
}
elememtKnappGånger.addEventListener("click", multiplikation);

function multiplikation() {
    /* Läs av tal1 och tal2 */
    var tal1 = Number(elememtRutaTal1.value);
    var tal2 = Number(elememtRutaTal2.value);

    /* Läs av tal1 - tal2 */
    var summa = tal1 * tal2;

    /* Skriver ut svaret i resultat rutan */
    elememtKnappRutaResultat.value = summa
}
elememtKnappDividera.addEventListener("click", division);

function division() {
    /* Läs av tal1 och tal2 */
    var tal1 = Number(elememtRutaTal1.value);
    var tal2 = Number(elememtRutaTal2.value);

    /* Läs av tal1 - tal2 */
    var summa = tal1 / tal2;

    /* Skriver ut svaret i resultat rutan */
    elememtKnappRutaResultat.value = summa
}