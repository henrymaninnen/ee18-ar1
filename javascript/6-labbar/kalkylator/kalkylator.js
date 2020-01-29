/* Element vi använder */
const elementFönster = document.querySelector("#fönster");
const elementKol4 = document.querySelector(".kol4");

elementKol4.addEventListener("click", tryck);
function tryck(event) {
    
    
    if (event.target.tagName == "BUTTON") {
        console.log(event.target.tagName);


        switch (event.target.tagName) {
            case 0:
                elementFönster.value = event.target.tagName 
                break;
            case 0:
                elementFönster.value = event.target.tagName 
                break;
            case 0:
                elementFönster.value = event.target.tagName 
                break;
            case 2:
                elementFönster.value = event.target.tagName 
                break;
            case 3:
                elementFönster.value = event.target.tagName 
                break;
            case 4:
                elementFönster.value = event.target.tagName 
                break;
            case 5:
                elementFönster.value = event.target.tagName 
                break;
            case 6:
                elementFönster.value = event.target.tagName 
                break;

        
            default:
                break;
        }







       // elementFönster.value = event.target.tagName;
    }
}