import AlbumCard from "./js/albumCard.js";
import PortfolioContainer from "./js/portfolioContainer.js";
import Album from './js/album.js';
import SubscribeButton from "./js/subscribeButton.js";
import {AllAlbums} from "./albums/albums.js";
import NavHeader from "./js/navHeader.js";

document.querySelector('main').append(new PortfolioContainer(AllAlbums))