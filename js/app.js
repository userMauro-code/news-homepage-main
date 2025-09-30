const navBar = document.getElementById("navMenu");
const btnNav = document.getElementById("btnMenu");
const btnIcon = btnNav.querySelector("img")


btnNav.addEventListener('click', ()=>{
    navBar.classList.toggle("active");
    if(btnNav.getAttribute("aria-expanded")==="false"){
        btnNav.setAttribute("aria-expanded", "true");
        btnIcon.setAttribute("src", "./assets/images/icon-menu-close.svg")
    }else{
        btnNav.setAttribute("aria-expanded", "false");
        btnIcon.setAttribute("src", "./assets/images/icon-menu.svg");
    }
})