const hero = document.querySelector("#hero");
const header = document.querySelector('header')

const headerVisibilityObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.remove("visible")
    } else {
      header.classList.add("visible")
    }
  })
})

headerVisibilityObserver.observe(hero)