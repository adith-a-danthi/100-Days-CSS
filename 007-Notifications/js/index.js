const searchBtn = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");
const menuBtn = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

searchBtn.addEventListener("click", () => {
  searchInput.classList.toggle("active");
});

menuBtn.addEventListener("click", () => {
  document.querySelector(".card").classList.toggle("show-menu");
  menu.classList.toggle("active");
});
