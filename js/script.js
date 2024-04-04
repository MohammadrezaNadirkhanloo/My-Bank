const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const nav = document.querySelector("nav");

const fixNav = document.querySelector("#section-1").getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (window.scrollY > fixNav.top) {
    nav.classList.add("fixed-top");
  } else {
    nav.classList.remove("fixed-top");
  }
});
