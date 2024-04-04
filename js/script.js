const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const header = document.querySelector("header");
const nav = document.querySelector("nav");

const navY = nav.getBoundingClientRect().height;

const fixedNav = function (e) {
  const [entry] = e;
  if (!entry.isIntersecting) {
    nav.classList.add("fixed-top");
  } else {
    nav.classList.remove("fixed-top");
  }
};

const headerObserver = new IntersectionObserver(fixedNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navY}px`,
});

headerObserver.observe(header);
