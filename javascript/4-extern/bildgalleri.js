/* Kod som körs vid start */
/* Välja ut elemnt vi ska använda */
const elementBildruta = document.querySelector("#bildruta")

/* Kod som körs efter start, när man klickar på en miniatyr */
function visaBild(nr) {
    elementBildruta.innerHTML = "<img src=\"./foton/foto" + nr + " " + " .jpg\" alt=\"Foto 1\">"
}