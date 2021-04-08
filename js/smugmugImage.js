export const SMUGMUG_SIZES = {
    TINY: 'Ti',
    THUMB: 'Th',
    SMALL: 'S',
    MEDIUM: 'M',
    LARGE: 'L',
    XLARGE: 'XL',
    XXLARGE: 'X2',
    XXXLARGE: 'X3'
};

export default class SmugmugImage extends HTMLElement {
    constructor(accountId, galleryName, galleryId, photoId, size, withWatermark) {
        super();
        this.accountId = accountId;
        this.galleryName = galleryName;
        this.galleryId = galleryId;
        this.photoId = photoId;
        this.size = size;
        this.waterFlag = withWatermark ? '1' : '2';

        this.dataset.accountId = accountId;
        this.dataset.photoId = photoId;

        this.dataset.bsToggle = 'modal';
        this.dataset.id = this.accountId + '_' + this.photoId;
        this.dataset.bsTarget = '#' + this.dataset.id;
        this.style.cursor = 'pointer';
    }

    connectedCallback() {
        this.innerHTML = `<img src="${this.getImgUrl(SMUGMUG_SIZES.SMALL)}">`;

        let modalDiv = document.createElement('div');
        modalDiv.classList.add('modal', 'fade');
        modalDiv.id = this.dataset.id;
        modalDiv.tabIndex = "-1";
        modalDiv.setAttribute('aria-hidden', 'true');
        modalDiv.innerHTML = `
              <div class="modal-dialog modal-xl">
                <div class="modal-content image-container" style="background-color: transparent;border: none;"  data-photo-id="${this.photoId}">
                   
                </div>
              </div>
        `;

        document.body.append(modalDiv);
        this.modal = new bootstrap.Modal(document.querySelector('#' + this.dataset.id));
        this.onclick = () => {
            this.showModal();
        }
    }

    showModal() {
        let link = document.querySelector(`.image-container[data-photo-id="${this.photoId}"]`);

        if (history.pushState) {
            let newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?a=${this.accountId}&i=${this.photoId}`;
            window.history.pushState({path:newurl},'',newurl);
        }

        if (link.children.length === 0) {
            link.innerHTML = `<img src="${this.getImgUrl(this.size)}" style="max-width: 100vw">
                <div class="dropdown">
                  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Options
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li> 
                        <a  class="dropdown-item" 
                            data-photo-id="${this.photoId}" 
                            href="https://danantal.smugmug.com/${this.galleryName}/${this.galleryId}/i-${this.photoId}/A" target="_blank">
                                Printing
                        </a>
                    </li>
                  </ul>
                </div>
               `;
        }


        this.modal.show();
    }

    getImgUrl(size) {
        return `https://photos.smugmug.com/photos/i-${this.photoId}/${this.waterFlag}/${this.accountId}/${size}/i-${this.photoId}-${size}.png`;
    }
}

window.customElements.define('smugmug-image', SmugmugImage);