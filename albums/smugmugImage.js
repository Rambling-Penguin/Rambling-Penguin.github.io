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

        document.body.innerHTML += `
            <div class="modal fade" id="${this.dataset.id}" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content" style="background-color: transparent;border: none;">
                    <a href="https://danantal.smugmug.com/${this.galleryName}/n-TVHHwm/i-${this.photoId}/A" target="_blank" style="display: flex; align-content: center; justify-content: center;">
                        <img src="https://photos.smugmug.com/photos/i-${this.photoId}/${this.waterFlag}/${this.accountId}/${this.size}/i-${this.photoId}-${this.size}.png">
                    </a>
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

    connectedCallback() {
        this.innerHTML = `
                <img src="https://photos.smugmug.com/photos/i-${this.photoId}/1/${this.accountId}/${SMUGMUG_SIZES.SMALL}/i-${this.photoId}-${SMUGMUG_SIZES.SMALL}.png" alt="">
        `;
    }
}

window.customElements.define('smugmug-image', SmugmugImage);