var hamburger = document.querySelector(".hamburger");
var navbar = document.querySelector("nav");
const navBtns = document.querySelectorAll(".nav-btn");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
})

navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });

