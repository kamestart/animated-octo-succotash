const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navbar-list");
hamburger.addEventListener("click", (e) => {
    e.preventDefault()
    mobileMenu()
    console.log('fre')
});


function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}