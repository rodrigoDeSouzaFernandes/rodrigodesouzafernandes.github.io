const hero = document.querySelector("#hero");
let header = document.querySelector('header');

customElements.whenDefined('app-header').then(() => {
  if(!header) {
    header = document.querySelector('header');
    header.classList.add('visible')
  }
})

if (hero) {
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

}

const projects = document.querySelectorAll(".project-card");



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


projects.forEach(project => {
  visibilityObserver.observe(project)
})