function toggleClass() {
    var menu = document.querySelector(".hamburger");
    menu.classList.toggle("toggleCls");
}
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", toggleClass)
