const navBar = document.getElementById("navMenu");
const btnNav = document.getElementById("btnMenu");
const menuClose = document.querySelector(".menuClose");
const openMenu = document.querySelector("openMenu");

btnNav.addEventListener('click', ()=>{
    navBar.classList.toggle("active");
})