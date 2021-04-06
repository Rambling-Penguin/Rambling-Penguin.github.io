export default class AlbumImage extends Image {
    constructor(source, title) {
        super();
        this.src = source;
        this.alt = title;
    }

}

window.customElements.define('album-image', AlbumImage, {extends: 'img'});
