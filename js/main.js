let openMenu = document.querySelector("#open-menu");
let closeMenu = document.querySelector("#close-menu");
let navList = document.querySelector("#nav-list");
let navLinks = document.querySelectorAll(".nav-link");

openMenu.addEventListener("click", () => {
    navList.classList.add("active");
})

closeMenu.addEventListener("click", () => {
    navList.classList.remove("active");
})

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        navList.classList.remove("active");
    })
})
