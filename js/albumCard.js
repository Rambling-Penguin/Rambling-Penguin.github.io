import {SMUGMUG_SIZES} from "./smugmugImage.js";

export default class AlbumCard extends HTMLElement {
    constructor(album) {
        super();
        this.album = album;
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadow.innerHTML = `
            <link href="../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
            <style>
                a {
                    color: inherit !important;
                    text-decoration: none !important;
                }
            
            </style>

            <a href="/albums/${this.album.id}.html">               
    
                <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden album-card" style="margin-top: 1rem">
                    <div class="my-3 p-3">
                        <h2 class="display-5">${this.album.meta.title}</h2>
                        <p class="lead">${this.album.meta.subtitle ? this.album.meta.subtitle : ''}</p>
                        <p class="lead">
                            ${this.album.meta.keywords.map(key => `<span class="badge bg-secondary" style="margin: 3px">${key}</span>`).join('')}
                        </p>
                    </div>
                    <div class="shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0; background-image: url(${this.album.meta.cover.getImgUrl(SMUGMUG_SIZES.LARGE)}); background-position: center; background-repeat: no-repeat;background-size: cover;"></div>
                </div>
            </a>
        `;

        this.onmouseover = () => {
            let card = this.shadow.querySelector('.album-card');
            card.classList.remove('bg-light');
            card.classList.add('bg-primary');
        }

        this.onmouseout = () => {
            let card = this.shadow.querySelector('.album-card');
            card.classList.remove('bg-primary');
            card.classList.add('bg-light');
        }
    }

    applyFilter(searchTerms) {
        let tokens = this.album.getSearchTokens();
        let match = true;
        if (tokens.length > 0) {
            let matchedTerms = searchTerms.filter(term => {
                return tokens.filter(token => {
                    return token.indexOf(term) > -1
                }).length > 0
            });
            match = matchedTerms.length >= searchTerms.length;
        }

        if (match) {
            this.classList.remove('d-none');
        } else {
            this.classList.add('d-none');
        }
    }
}

window.customElements.define('album-card', AlbumCard);