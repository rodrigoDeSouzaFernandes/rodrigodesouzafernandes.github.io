const elements = document.querySelectorAll(".animate");

const animationObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px",
  }
);

elements.forEach((elem) => {
  animationObserver.observe(elem);
});
