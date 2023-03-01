////= components/script.js
("use strict");
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__mobile-menu");
const sliderButtons = document.querySelectorAll("#swiperInput");
const inputs = document.querySelectorAll(".form__input");
const slides = document.querySelectorAll(".swiperInput_slide");
const rangeInput = document.querySelector("#length");

rangeInput.addEventListener("mouseenter", (event) => {
  let value = event.target.value;
  rangeInput.addEventListener("click", function () {
    value = event.target.value;
    changeBg(value);
  });
  rangeInput.addEventListener("mousemove", function () {
    value = event.target.value;
    changeBg(value);
  });
});

function changeBg(elem) {
  rangeInput.style.backgroundImage =
    "-webkit-linear-gradient(left ,#FFCF7A 0%,#FFCF7A " +
    10 * elem +
    "%,#646464 " +
    10 * elem +
    "%, #646464 100%)";
}

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

const swiper = new Swiper(".swiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // mousehell: "true",
});

const swiperInput = new Swiper(".swiperInput", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

for (let i = 0; i < 2; i++) {
  sliderButtons[i].addEventListener("click", () => {
    for (let slide of slides) {
      if (slide.classList.contains("swiper-slide-active")) {
        inputs.forEach((input) => input.removeAttribute("checked"));
        inputs[slide.id - 1].setAttribute("checked", "true");
      }
    }
  });
}