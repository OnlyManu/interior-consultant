const body=document.querySelector("body");
const navbar=document.querySelector("nav");
const burgerIcon=document.getElementById("burger");
const closeIcon=document.getElementById("close");


const openCloseMenu=()=>{
    navbar.classList.toggle("open");
    body.classList.toggle("hide");
}

burgerIcon.addEventListener("click", openCloseMenu);
closeIcon.addEventListener("click", openCloseMenu)