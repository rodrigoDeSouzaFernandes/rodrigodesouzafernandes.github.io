class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    const headerElement = document.createElement('header');

    const html = `
      <div class="header-container">
        <img class="profile-img" src="../assets/images/rodrigo.jpeg" alt="Rodrigo - Foto de perfil" />
        <p class="name">Rodrigo <span class="lastname">de Souza Fernandes</span></p>
        
        <button class="header-menu-icon" aria-label="Abrir menu de navegação">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>
        
        <nav class="navbar">
          <a href="/#" class="career-info">
            <img src='../assets/icons/home.png' alt='Ícone de home' />
            <span>Home</span>
          </a>
          <a href="/pages/career.html" class="career-info">
            <img src='../assets/icons/carreira.png' alt='Ícone de carreira' />
            <span>Carreira</span>
          </a>
          <a 
            href="/assets/curriculo_rodrigo_dev_frontend.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Abrir currículo em nova aba"
            class="career-info"
          >
            <img src='../assets/icons/cv.png' alt='Ícone de currículo' />
            <span>Currículo</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/rodrigo-de-souza-fernandes" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Abrir LinkedIn em nova aba"
            class="career-info"
          >
            <img src="../assets/logos/linkedin.png" alt="Ícone do LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </nav>
      </div>
    `;

    headerElement.innerHTML = html;
    this.appendChild(headerElement);

    // 🔁 Menu toggle
    headerElement.querySelector('.header-menu-icon').addEventListener('click', () => {
      const nav = headerElement.querySelector('.navbar');
      nav.classList.toggle('open');
    });
  }
}

customElements.define('app-header', HeaderComponent);
