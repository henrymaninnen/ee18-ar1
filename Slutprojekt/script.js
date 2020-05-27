const menyToggle = document.querySelector(".meny-toggle");
const navBar = document.querySelector("header-navigation")
    
menyToggle.addEventListener("click", () => {
    navBar.classList.toggle("change");
});
