import Album from "../album.js";
import SmugmugImage, {SMUGMUG_SIZES} from "../smugmugImage.js";

const SMUGMUG_ACCOUNTID = 'e06339ba';
const GALERY_NAME = 'Nature-Gallery';

export const Nature =  new Album('nature', {
    title: 'Nature',
    subtitle: 'There is a lot of stuff outside, and I took some pictures of it.',
    keywords: ['wildlife', 'landscape', 'birds', 'outdoors'],
    date: '2021-04-06',
    cover: new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'WzWnCw3', SMUGMUG_SIZES.XXXLARGE),
    assets: [
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'bLDZsHK', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'Sp9h5x5', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'tsdWLbJ', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'kN7GW7J', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'HQcKTTC', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'whFcmNT', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'ZTx5DPM', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'z2SXJvJ', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 't9PzJBG', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'grJTdLw', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'Vdk4TrD', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'mH25MDK', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'WzWnCw3', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'xL2cVZx', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'ZD7Pnxx', SMUGMUG_SIZES.XXXLARGE),
        new SmugmugImage(SMUGMUG_ACCOUNTID, GALERY_NAME, 'C6FpPZv', SMUGMUG_SIZES.XXXLARGE),
    ]
});