const hero = document.querySelector("#hero");
const header = document.querySelector('header')

const projects = document.querySelectorAll(".project-card");

const headerVisibilityObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.classList.remove("visible")
    } else {
      header.classList.add("visible")
    }
  })
})

const visibilityObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    } else {
      entry.target.classList.remove("visible")
    }
  })
}, {
  threshold: .7,
})

headerVisibilityObserver.observe(hero)

projects.forEach(project => {
  visibilityObserver.observe(project)
})