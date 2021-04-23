import SmugmugImage, {SMUGMUG_SIZES} from "./smugmugImage.js";

export default class SmugmugImageFactory {
    constructor(accountId, galleryName, galleryId, photoId, size, withWatermark) {
        this.accountId = accountId;
        this.galleryName = galleryName;
        this.galleryId = galleryId;
    }

    createImages(ids) {
        return ids.map(id => new SmugmugImage(this.accountId, this.galleryName, this.galleryId, id, SMUGMUG_SIZES.XXXLARGE));
    }
}