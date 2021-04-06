import Album from "./album.js";
import AlbumImage from "./picture.js";
import {TestAlbum} from "./test/album.js";

export const AllAlbums = [
    TestAlbum,
    new Album('test1', {
        title: 'Another Headline',
        subtitle:  'And an even wittier subheading.',
        date: '2021-04-01',
        keywords: ['sca', 'test'],
        assets: [

        ]
    }),
    new Album('test2', {
        title: 'Another Headline',
        subtitle:  'And an even wittier subheading.',
        date: '2021-04-01',
        keywords: ['sca', 'test'],
        assets: [

        ]
    }),
    new Album('test3', {
        title: 'Another Headline',
        subtitle:  'And an even wittier subheading.',
        date: '2021-04-01',
        keywords: ['sca', 'test'],
        assets: [

        ]
    }),
    new Album('test4', {
        title: 'Another Headline',
        subtitle:  'And an even wittier subheading.',
        date: '2021-04-01',
        keywords: ['sca', 'test'],
        assets: [

        ]
    })
];