import AlbumCard from "./albumCard.js";

export default class PortfolioContainer extends HTMLElement {
    constructor(albums) {
        super();
        this.albums = albums;
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadow.innerHTML = `
                <link href="css/site.css" rel="stylesheet" />
             <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
             
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

             <!--<div style="margin-left: 1rem; margin-right: 1rem"> 
                <input type="text" name="filter" class="form-control" placeholder="filter"/>
             </div>-->

             <div id="portfolioContainer" style="">
             
             </div>
        `;


        this.albums.forEach(album => {
             this.shadow.querySelector('#portfolioContainer').append(new AlbumCard(album))
        });
    }

}

window.customElements.define('portfolio-container', PortfolioContainer);