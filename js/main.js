document.addEventListener("DOMContentLoaded", () => {

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

}

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}

});

const buttons = document.querySelectorAll(".primary,.secondary,.client-btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{
btn.style.transform="translateY(-3px)";
});

btn.addEventListener("mouseleave",()=>{
btn.style.transform="translateY(0)";
});

});

const hero = document.querySelector(".hero");

window.addEventListener("load",()=>{

hero.style.opacity="1";
hero.style.transform="translateY(0)";

});

});
