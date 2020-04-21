/* Element vi JObbar med */

const eNamn = document.querySelector("#namn");
const eVerb = document.querySelector("#verb");
const eKnapp = document.querySelector("button");
const eOutput = document.querySelector("#output");

/* Vad händer när vi klickar på Skicka */

var rum = "entren";
var poäng = 0;
eOutput.innerHTML = "Du är i entren" + ".<br>";

eKnapp.addEventListener("click", function() {
    /* Läs av input-rutorna */
    var namn = eNamn.value;
    var verb = eVerb.value;

    /* Vad vill man göra */
    if (rum == "entren") {
        if (verb == "fram") {
            rum = "kafeterian";
            eOutput.innerHTML += "Du är i " + rum + "<br>";

        } else if (verb == "höger") {
            rum = "biblioteket";
            eOutput.innerHTML += "Du är i " + rum + "<br>";
            if (verb == "plocka") {
                poäng++;
                eOutput.innerHTML += "DU hitta en krona" + "<br>";
            }

        } else if (verb == "vänster") {
            rum = "rum 1";
            eOutput.innerHTML += "Du är i " + rum + "<br>";
        }

    } else if (rum == "kafeterian") {
        if (verb == "tillbaka") {
            rum = "entren"
            eOutput.innerHTML += "Du är i " + rum + "<br>";
        }

    } else if (rum == "biblioteket") {
        if (verb == "tillbaka") {
            rum = "entren"
            eOutput.innerHTML += "Du är i " + rum + "<br>";
        }
    } else if (rum == "rum 1") {
        if (verb == "tillbaka") {
            rum = "entren"
            eOutput.innerHTML += "Du är i " + rum + "<br>";
        } if (rum == "rum 2") {
            rum = "rum
            eOutput.innerHTML += "Du är i " + rum + "<br>";  
        }
    } else if (rum == "rum2") {
        if (verb == "fram") {
            rum = "slutet"
            eOutput.innerHTML += "Du är i " + rum + "<br>"; 
        }
    }
})