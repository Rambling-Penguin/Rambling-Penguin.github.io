import AlbumCard from "./albumCard.js";

export default class PortfolioContainer extends HTMLElement {
    constructor(albums) {
        super();
        this.albums = albums;
    }

    connectedCallback() {
        this.innerHTML = `             
             <style>
                #portfolioContainer {
                    display: grid; 
                    grid-template-columns: 1fr 1fr; 
                    margin-left: 1rem
                }
                
                @media (max-width: 1200px) {
                    #portfolioContainer {
                        grid-template-columns: 1fr;
                    } 
                }
             
            </style>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">

                <input type="text" class="form-control" id="inputTextSearch" placeholder="Filter albums">
          </div>
                
                

             <div id="portfolioContainer" style="">
             
             </div>
        `;

        this.albums.forEach(album => {
             this.querySelector('#portfolioContainer').append(new AlbumCard(album))
        });

        let searchParams = new URLSearchParams(window.location.search);
        if (searchParams.get('filter')) {
            this.querySelector('#inputTextSearch').value = searchParams.get('filter');
            this.applySearch();
        }

        this.querySelector('#inputTextSearch').addEventListener('keyup', (e) => {
            this.applySearch();
        });
    }

    applySearch() {
        let searchTerms = this.querySelector('#inputTextSearch').value.split(' ').map(t => t.toLowerCase());
        Array.from(this.querySelectorAll('#portfolioContainer album-card')).forEach(albumCard => {
            albumCard.applyFilter(searchTerms);
        });
        if (history.pushState) {
            let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?filter=' + encodeURI(searchTerms.join(' '));
            window.history.pushState({path:newurl},'',newurl);
        }
    }
}

window.customElements.define('portfolio-container', PortfolioContainer);