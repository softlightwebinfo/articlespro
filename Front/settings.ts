import {MenuModel} from "./MenuModel";
import ListCategory from '@material-ui/icons/Category';
import Offer from '@material-ui/icons/LocalOffer';
import Directory from '@material-ui/icons/ViewList';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import Assignment from '@material-ui/icons/Assignment';
import Home from '@material-ui/icons/Home';
import Projects from '@material-ui/icons/AccountTree';
import PublishArticle from '@material-ui/icons/Publish';
import PedirPresupuesto from '@material-ui/icons/ShoppingBasket';
import Promotions from '@material-ui/icons/ShoppingCart';
import ListPremium from '@material-ui/icons/Star';

export const settingsMenu = [
    new MenuModel("Inicio", Home, "index"),
    new MenuModel("Listado de anuncios", Assignment, "listArticles"),
    new MenuModel("Listado de categorias", ListCategory, "listCategories"),
    new MenuModel("Galeria de fotos", PhotoLibrary, "listPhotos"),
    new MenuModel("Listado de projectos", Projects, "listProjects"),
    new MenuModel("Articulos Premium", ListPremium, "listPlusArticles"),
    new MenuModel("Publicar articulo", PublishArticle, "publish"),
    new MenuModel("Pedir Presupuesto", PedirPresupuesto, "publishBudget"),
    new MenuModel("Promociones", Promotions, "listPromotions"),
    new MenuModel("Ofertas", Offer, "listOffers"),
    new MenuModel("Profesionales", Directory, "directory"),
];

export const API = "http://localhost:3000/api";

export const getApi = (url: string) => `${API}/${url}/`;
