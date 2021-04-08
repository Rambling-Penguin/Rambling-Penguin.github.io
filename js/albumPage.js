import AlbumArticle from "./albumArticle.js";
import {AllAlbums} from "../albums/albums.js";

let href = window.location.href;
let parts = href.split('/');
let id = parts[parts.length - 1];
id = id.substring(0, id.length - '.html'.length);

let currentAlbum = AllAlbums.find(e => e.id === id);

document.querySelector('main').append(new AlbumArticle(currentAlbum));
