const body = document.querySelector("body");
const burger = document.querySelector(".main-nav .fas");
const navUl = document.querySelector(".main-nav ul");

const faqLi = document.querySelectorAll(".faq-ul li");
const faqSpan = document.querySelectorAll(".faq-ul span");

const menuAnchors = document.querySelectorAll(".main-nav ul a");

body.addEventListener("click", function (e) {
  if (e.target === burger && navUl.classList.contains("hide")) {
    navUl.classList.remove("hide");
  } else if (e.target !== navUl) {
    navUl.classList.add("hide");
  }
});

faqLi.forEach((li) => {
  li.addEventListener("click", function (e) {
    if (e.target.firstElementChild.classList.contains("hide")) {
      e.target.firstElementChild.classList.remove("hide");
    } else {
      e.target.firstElementChild.classList.add("hide");
    }
  });
});
