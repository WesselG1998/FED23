// JavaScript Document
let index = 0;

var clicked = false;
console.log("hey");

const deMenuButton = document.querySelector("header > img");
console.log(deMenuButton);

deMenuButton.addEventListener("click", toggleMenu);
const deNav = document.querySelector("header nav");

const deSluitButton = document.querySelector("header nav > img");
deSluitButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  deNav.classList.toggle("open");
}

// var hamburgerMenu = document.querySelector(".c-header__img");
// console.log(hamburgerMenu);

/* hamburgerMenu.addEventListener("click", () => {
  clicked = !clicked;

  if (clicked) {
    hamburgerMenu.src = "images/close.svg";
  } else {
    hamburgerMenu.src = "images/hamburger_menu.svg";
  }

  var navigatie = document.querySelector(".c-header__nav");
  navigatie.classList.toggle("d-none");
  console.log(navigatie);
}); */

var nextButton = document.querySelector("#nextBtn");
console.log(nextButton);

nextButton.addEventListener("click", () => {
  console.log("ik ben aangeklikt NEXT");
  if (index + 1 <= 2) {
    index = index + 1;
  }
  const slideshow = document.querySelector(".c-carousel");
  const calculate = index * 100;

  slideshow.style.translate = "-" + calculate + "%";

  console.log(slideshow);
});

var prevButton = document.querySelector("#prevBtn");
console.log(prevButton);

prevButton.addEventListener("click", () => {
  console.log("ik ben geklikt PREV");
  if (index - 1 >= 0) {
    index = index - 1;
  }
  const slideshow = document.querySelector(".c-carousel");
  const calculate = index * 100;
  slideshow.style.translate = "-" + calculate + "%";
  console.log(slideshow);
});
