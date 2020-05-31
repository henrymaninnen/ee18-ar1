 function sendToPage() {
     var input = document.getElementById("search").value;
     //alert(input);
     if (input == "bcaa") {
         location.href = "./bcaa.html";
         return false;

     } else if (input == "protein") {
         location.href = "./protein.html";
         return false;

     } else if (input == "pwo") {
         location.href = "./pwo.html";
         return false;
     } else {
         alert('Ogiltigt alternativ');
     }
 }