class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    const headerElement = document.createElement('header');


    const html = `
      <nav class="navbar">
        <a href="/pages/career.html" class="career-info">
          carreira
        </a>
        <a href="/pages/career.html" class="career-info">
          <img src='../assets/logos/linkedin.png' alt='Ícone do linkedin' />
        </a>
      </nav>
    `

    headerElement.innerHTML = html;

    this.appendChild(headerElement)
  }
}
customElements.define('app-header', HeaderComponent)