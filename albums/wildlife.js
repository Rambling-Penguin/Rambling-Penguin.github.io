import Album from "../js/album.js";
import SmugmugImage, {SMUGMUG_SIZES} from "../js/smugmugImage.js";
import SmugmugImageFactory from "../js/smugmugImageFactory.js";

const SMUGMUG_ACCOUNTID = 'e06339ba';
const GALLERY_NAME = 'Wildlife';
const GALLERY_ID = 'n-TVHHwm';

export const Wildlife =  new Album('wildlife', {
    title: 'Wildlife',
    subtitle: 'Things that live outside',
    keywords: ['wildlife', 'birds', 'outdoors'],
    date: '2021-04-06',
    assets: new SmugmugImageFactory(SMUGMUG_ACCOUNTID, GALLERY_NAME, GALLERY_ID).createImages([
        "D8VZPvp",
        "TR9j4RD",
        "jWpF8Bz",
        "b2D43RH",
        "pXpKBNw",
        "PsWnVRj",
        "KshMCnn",
        "x9TcC6X",
        "SwdHXCs",
        "pNdXqTZ",
        "W4Vk7pN"
    ])
});
