const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    //   observer.unobserve(entry.target);
    }
  });
},{
  threshold: .5, // 50% do elemento precisa estar visível
  rootMargin: '0px 0px -100px 0px' // ou ajusta conforme a necessidade
});

elements.forEach((elem) => {
  observer.observe(elem);
});
