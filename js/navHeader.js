const menu = [
    {
        text: 'Rambling Penguin',
        link: '/'
    },
    {
        text: 'Albums',
        link: '/albums/'
    }
];

export default class NavHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let active = location.pathname;
        console.log(active);
        this.innerHTML = `
            <header class="site-header sticky-top py-1">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
                    <div class="container">
                        <a class="navbar-brand" href="/">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
                            </span>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItems" aria-controls="navbarItems" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
    
                        <div class="collapse navbar-collapse" id="navbarItems">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                ${menu.map(link => `
                                    <li class="nav-item">
                                        <a class="nav-link ${link.link === active ? 'active' : ''}" aria-current="page" href=${link.link}>${link.text}</a>
                                    </li>
                                `).join('')};
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>`;
    }
}

window.customElements.define('nav-header', NavHeader);