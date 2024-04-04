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

const allsection = document.querySelectorAll("section");
const showsection = function (e,observer) {
  const [entry] = e;
  if(!entry.isIntersecting) return
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target)
};
const sectionObserver = new IntersectionObserver(showsection, {
  root: null,
  threshold: 0.1,
});

allsection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
