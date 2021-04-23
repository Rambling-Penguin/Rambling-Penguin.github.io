import Album from "../js/album.js";
import SmugmugImage, {SMUGMUG_SIZES} from "../js/smugmugImage.js";

const SMUGMUG_ACCOUNTID = 'e06339ba';
const GALERY_NAME = 'Nature-Gallery';
const GALLERY_ID = 'n-TVHHwm';

export const Nature =  new Album('nature', {
    title: 'Nature',
    subtitle: 'There is a lot of stuff outside, and I took some pictures of it.',
    keywords: ['outdoors'],
    date: '2021-04-06',
    cover: new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, GALLERY_ID,  'WzWnCw3', SMUGMUG_SIZES.XXXLARGE),
    assets: [
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, GALLERY_ID,  'bLDZsHK', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, GALLERY_ID,  'ZTx5DPM', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, GALLERY_ID,  'grJTdLw', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, GALLERY_ID,  'Vdk4TrD', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, GALLERY_ID,  'mH25MDK', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, GALLERY_ID,  'WzWnCw3', SMUGMUG_SIZES.XXXLARGE),
    ]
});
