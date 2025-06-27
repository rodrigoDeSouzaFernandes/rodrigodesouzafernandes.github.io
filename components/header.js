const navbarLinks = [
  {
    "href": "/#",
    "icon": "../assets/icons/home.png",
    "alt": "Ícone de home",
    "text": "Home",
    "target": null,
    "rel": null,
    "ariaLabel": null
  },
  {
    "href": "/pages/career.html",
    "icon": "../assets/icons/carreira.png",
    "alt": "Ícone de carreira",
    "text": "Carreira",
    "target": null,
    "rel": null,
    "ariaLabel": null
  },
  {
    "href": "/pages/contact.html",
    "icon": "../assets/icons/contact.png",
    "alt": "Ícone de contato",
    "text": "Contato",
    "target": null,
    "rel": null,
    "ariaLabel": null
  },
  {
    "href": "/assets/curriculo_rodrigo_dev_frontend.pdf",
    "icon": "../assets/icons/cv.png",
    "alt": "Ícone de currículo",
    "text": "Currículo",
    "target": "_blank",
    "rel": "noopener noreferrer",
    "ariaLabel": "Abrir currículo em nova aba"
  },

  {
    "href": "https://www.linkedin.com/in/rodrigo-de-souza-fernandes",
    "icon": "../assets/logos/linkedin.png",
    "alt": "Ícone do LinkedIn",
    "text": "LinkedIn",
    "target": "_blank",
    "rel": "noopener noreferrer",
    "ariaLabel": "Abrir LinkedIn em nova aba"
  }
];

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    const headerElement = document.createElement('header');

    const headerContainer = document.createElement('div')
    headerContainer.classList.add('header-container')

    const linkToHome = document.createElement('a');
    linkToHome.classList.add('link-home')
    linkToHome.href = '/#';

    const profileImg = document.createElement('img');
    profileImg.classList.add("profile-img");
    profileImg.src = "../assets/images/rodrigo.jpeg";
    profileImg.alt = "Rodrigo - Foto de perfil";

    const name = document.createElement('p');
    name.innerHTML = "Rodrigo <span class='lastname'>de Souza Fernandes</span>";
    name.classList.add("name");

    linkToHome.appendChild(profileImg)
    linkToHome.appendChild(name)

    const button = document.createElement('button');
    button.classList.add('header-menu-icon');
    button.ariaLabel = "Abrir menu de navegação";
    button.innerHTML = `
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
    `

    const nav = document.createElement('nav');
    nav.classList.add('navbar')

    navbarLinks.forEach(element => {
      const icon = document.createElement('img')
      icon.src = element.icon;
      icon.alt = element.alt;

      const text = document.createElement('span');
      text.innerText = element.text;

      const link = document.createElement('a');
      link.classList.add('career-info')
      link.href = element.href;
      if(element.target) link.target = element.target;
      if(element.rel) link.rel = element.rel;
      if(element.ariaLabel) link.ariaLabel = element.ariaLabel;

      link.addEventListener('click', (e) => {        
        nav.classList.remove('open')
      })

      link.appendChild(icon);
      link.appendChild(text);
      nav.appendChild(link);

    })

    headerContainer.appendChild(linkToHome);
    headerContainer.appendChild(button);
    headerContainer.appendChild(nav);

    
    
    headerElement.appendChild(headerContainer)
    this.appendChild(headerElement);

    button.addEventListener('click', () => {
      const nav = headerElement.querySelector('.navbar');
      nav.classList.toggle('open');
    });


  
  }
}

customElements.define('app-header', HeaderComponent);
