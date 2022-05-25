const burgerIcon=document.getElementById("burger");
const closeIcon=document.getElementById("close");
const navbar=document.querySelector("nav");

const openCloseMenu=()=>{
    navbar.classList.toggle("open");
}

burgerIcon.addEventListener("click", openCloseMenu);
closeIcon.addEventListener("click", openCloseMenu)