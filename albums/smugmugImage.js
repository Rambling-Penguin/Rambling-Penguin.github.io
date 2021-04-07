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
    constructor(accountId, galleryName, photoId, size, withWatermark) {
        super();
        this.accountId = accountId;
        this.galleryName = galleryName;
        this.photoId = photoId;
        this.size = size;
        this.waterFlag = withWatermark ? '1' : '2';

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
              <div class="modal-dialog">
                <div class="modal-content" style="background-color: transparent;border: none;">
                    <a data-photo-id="${this.photoId}" href="https://danantal.smugmug.com/${this.galleryName}/n-TVHHwm/i-${this.photoId}/A" target="_blank" style="display: flex; align-content: center; justify-content: center;">
                       
                    </a>
                </div>
              </div>
        `;

        document.body.append(modalDiv);

        let modal = new bootstrap.Modal(document.querySelector('#' + this.dataset.id));
        this.onclick = () => {
            let link = document.querySelector(`a[data-photo-id="${this.photoId}"]`);
            if (link.children.length === 0) {
                link.innerHTML = `<img src="${this.getImgUrl(this.size)}">`;
            }
            window.location.hash = this.dataset.id;
            modal.show();
        }
    }

    getImgUrl(size) {
        return `https://photos.smugmug.com/photos/i-${this.photoId}/${this.waterFlag}/${this.accountId}/${size}/i-${this.photoId}-${size}.png`;
    }
}

window.customElements.define('smugmug-image', SmugmugImage);