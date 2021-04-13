const menu = [
    {
        text: 'Photos',
        link: '/albums/index.html'
    },
    {
        text: 'Videos',
        link: '/video/index.html'
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
               <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
                <div class="container">
                  <a class="navbar-brand" href="/">Rambling Penguin</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">  
                    </span>
                  </button>
            
                  <div class="collapse navbar-collapse" id="navbarsExample07">
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
