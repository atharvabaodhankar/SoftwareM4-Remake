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

// var navAnimate = gsap.timeline();

// navAnimate.from(".nav-left", {
//   y:-100
// })

var preloader = gsap.timeline();


preloader.from(".preloader h1 span", {
  letterSpacing: "60px",
  duration: 1,
  opacity: 0,
  stagger:.15
})

preloader.to(".preloader h1 span", {
  letterSpacing: "60px",
  duration: 1,
  opacity: 0,
  stagger:.15
})
preloader.to(".preloader", {
  opacity: 0,
})
preloader.to(".preloader", {
  left:"-100%"
})

