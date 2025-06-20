const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }
);

elements.forEach((elem) => {
  observer.observe(elem);
});
