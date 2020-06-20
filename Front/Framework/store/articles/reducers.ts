import {actionTypes} from "./actions";
import {Favoritesmodel} from "../../Models/FavoriteModel";

export const exampleInitialState = {
    lastPromotions: null,
    lastOffers: null,
    lastArticles: null,
    directory: null,
    favorites: null,
};

function reducers(state = exampleInitialState, action) {
    switch (action.type) {
        case '__NEXT_REDUX_WRAPPER_HYDRATE__': {
            const nextState = {
                ...state, // use previous state
                ...action.payload.articles, // apply delta from hydration
            };
            if (state.lastPromotions) nextState.lastPromotions = state.lastPromotions;
            if (state.lastOffers) nextState.lastOffers = state.lastOffers;
            if (state.lastArticles) nextState.lastArticles = state.lastArticles;
            if (state.directory) nextState.directory = state.directory;
            if (state.favorites) nextState.favorites = state.favorites;
            return nextState
        }
        case actionTypes.SUCCESS_LAST_PROMOTIONS: {
            return {
                ...state,
                lastPromotions: action.data,
            }
        }
        case actionTypes.SUCCESS_LAST_OFFERS: {
            return {
                ...state,
                lastOffers: action.data,
            }
        }
        case actionTypes.SUCCESS_LAST_ARTICLES: {
            return {
                ...state,
                lastArticles: action.data,
            }
        }
        case actionTypes.SUCCESS_DIRECTORY: {
            return {
                ...state,
                directory: action.data,
            }
        }
        case actionTypes.SUCCESS_FAVORITES: {
            return {
                ...state,
                favorites: action.data,
            }
        }
        case actionTypes.SUCCESS_SET_FAVORITE: {
            const favorites = state.favorites;

            let favoritesmodel = Favoritesmodel.init(favorites);
            const id = action.data.id;
            if (favoritesmodel.hasKey(id)) {
                favorites.count--;
                delete favorites.result[id];
            } else {
                favorites.count++;
                favorites.result[id] = {id};
            }

            return {
                ...state,
                favorites: favorites,
            }
        }
        default:
            return state
    }
}

export default reducers
