import Album from "../album.js";
import AlbumImage from "../picture.js";

function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let testAssets = [];

for (let i = 0; i < 25; i++) {
    let width = getRandomSize(200, 400);
    let height = getRandomSize(200, 400);
    testAssets.push(new AlbumImage(`https://placekitten.com/${width}/${height}`, 'pretty kitty'));
}

export const TestAlbum =  new Album('test', {
    title: 'Test Albumn',
    subtitle: 'A cool ol test',
    keywords: ['cats', 'kittens'],
    date: '2021-04-06',
    assets: testAssets
});