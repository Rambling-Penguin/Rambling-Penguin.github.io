import AlbumArticle from "./albumArticle.js";
import {AllAlbums} from "./albums.js";

let href = window.location.href;
let parts = href.split('/');
let id = parts[parts.length - 2];

let currentAlbum = AllAlbums.find(e => e.id === id);

document.querySelector('main').append(new AlbumArticle(currentAlbum));
