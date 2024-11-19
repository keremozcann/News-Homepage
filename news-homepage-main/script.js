const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const menu = document.querySelector(".navbar");
const body = document.body;
const background = document.querySelector(".background");

menuIcon.addEventListener("click", function () {
  menu.style.display = "flex";
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
  background.style.display = "block";
  body.classList.add("menu-open");
});

closeIcon.addEventListener("click", function () {
  menu.style.display = "none";
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
  background.style.display = "none";
  body.classList.remove("menu-open");
});

window.addEventListener("orientationchange", function () {
  handleMenuState();
});

window.addEventListener("resize", function () {
  handleMenuState();
});

function handleMenuState() {
  if (window.innerWidth >= 768) {
    menu.style.display = "flex";
    menuIcon.style.display = "none";
    closeIcon.style.display = "none";
    background.style.display = "none";
    body.classList.remove("menu-open");
  } else {
    if (!body.classList.contains("menu-open")) {
      menu.style.display = "none";
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
      background.style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  handleMenuState();
});
