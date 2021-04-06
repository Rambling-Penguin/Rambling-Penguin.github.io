export default class AlbumImage extends Image {
    constructor(source, title, largeImage) {
        super();
        this.src = source;
        this.alt = title;
        this.largeImage = largeImage;
        this.dataset.bsToggle = 'modal';
        this.dataset.id = randomId();
        this.dataset.bsTarget = '#' + this.dataset.id;
        this.style.cursor = 'pointer';
        document.body.innerHTML += `
            <div class="modal fade" id="${this.dataset.id}" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${this.alt}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body" style="display: flex;align-content: center;justify-content: center;">
                    <img src="${this.largeImage}">
                  </div>
                </div>
              </div>
            </div>
        `;
        let modal = new bootstrap.Modal(document.querySelector('#' + this.dataset.id));
        this.onclick = () => {
            window.location.hash = this.dataset.id;
            modal.show();
        }
    }
}

function randomId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

window.customElements.define('album-image', AlbumImage, {extends: 'img'});
