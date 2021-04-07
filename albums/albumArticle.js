export default class AlbumArticle extends HTMLElement {
    constructor(album) {
        super();
        this.album = album;
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadow.innerHTML = `
            <link href="../../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
            <link href="../../css/site.css" rel="stylesheet" />
            <style>
                .photos-grid {               
                    line-height: 1;
                    -webkit-column-count: 5;
                    -webkit-column-gap:   5px;
                    -moz-column-count:    5;
                    -moz-column-gap:      5px;
                    column-count:         5;
                    column-gap:           5px;  
                }
                
                .photos-grid img {
                    /* Just in case there are inline attributes */
                    width: 100% !important;
                    height: auto !important;
                    margin: 3px 0px;
                }
                
                @media (max-width: 1200px) {
                   .photos-grid {
                        -moz-column-count:    4;
                        -webkit-column-count: 4;
                        column-count:         4;
                    }
                }
                @media (max-width: 1000px) {
                    .photos-grid {
                        -moz-column-count:    3;
                        -webkit-column-count: 3;
                        column-count:         3;
                    }
                }
                @media (max-width: 800px) {
                    .photos-grid {
                        -moz-column-count:    2;
                        -webkit-column-count: 2;
                        column-count:         2;
                    }
                }
                @media (max-width: 400px) {
                    .photos-grid {
                        -moz-column-count:    1;
                        -webkit-column-count: 1;
                        column-count:         1;
                    }
                }
            </style>
            
             <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto">
                    <h1 class="display-4 fw-normal">${this.album.meta.title}</h1>
                    <p class="lead fw-normal">${this.album.meta.subtitle}</p>
                </div>
            </div>
            
            <div class="photos-grid"></div>
        `;
        this.album.assets.forEach(asset => {
            this.shadow.querySelector('.photos-grid').append(asset);
        })

    }

}

window.customElements.define('album-article', AlbumArticle);
