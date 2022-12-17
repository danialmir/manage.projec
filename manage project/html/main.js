const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function (){
    const navbar = document.querySelector(".nav");
    navbar.classList.toggle("active")
}