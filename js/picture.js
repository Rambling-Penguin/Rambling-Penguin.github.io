export default class AlbumImage extends HTMLImageElement {
    constructor(source, title, largeImage) {
        super();
        this.src = source;
        this.alt = title;
        this.largeImage = largeImage;
        this.dataset.bsToggle = 'modal';
        this.dataset.id = source.replace(/\W/g, '')
        this.dataset.bsTarget = '#' + this.dataset.id;
        this.style.cursor = 'pointer';
        document.body.innerHTML += `
            <div class="modal fade" id="${this.dataset.id}" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                 
                    <img src="${this.largeImage}">
                 </div>
              </div>
            </div>
        `;
        this.modal = new bootstrap.Modal(document.querySelector('#' + this.dataset.id));
        this.onclick = () => {
            this.showModal();
        }
        if (window.location.hash.toString().substr(1) === this.dataset.id) {
            console.log('test');
        }
    }

    showModal() {
        window.location.hash = this.dataset.id;
        this.modal.show();
    }


}

window.customElements.define('album-image', AlbumImage, {extends: 'img'});
