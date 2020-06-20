export const actionTypes = {
    LAST_PROMOTIONS: 'LAST_PROMOTIONS',
    FAILURE_LAST_PROMOTIONS: 'FAILURE_LAST_PROMOTIONS',
    SUCCESS_LAST_PROMOTIONS: 'SUCCESS_LAST_PROMOTIONS',
    LAST_OFFERS: 'LAST_OFFERS',
    FAILURE_LAST_OFFERS: 'FAILURE_LAST_OFFERS',
    SUCCESS_LAST_OFFERS: 'SUCCESS_LAST_OFFERS',
    LAST_ARTICLES: 'LAST_ARTICLES',
    FAILURE_LAST_ARTICLES: 'FAILURE_LAST_ARTICLES',
    SUCCESS_LAST_ARTICLES: 'SUCCESS_LAST_ARTICLES',
    DIRECTORY: 'DIRECTORY',
    FAILURE_DIRECTORY: 'FAILURE_DIRECTORY',
    SUCCESS_DIRECTORY: 'SUCCESS_DIRECTORY',
    FAVORITES: 'FAVORITES',
    SUCCESS_FAVORITES: 'SUCCESS_FAVORITES',
    FAILURE_FAVORITES: 'FAILURE_FAVORITES',
    SET_FAVORITE: 'SET_FAVORITE',
    SUCCESS_SET_FAVORITE: 'SUCCESS_SET_FAVORITE',
    FAILURE_SET_FAVORITE: 'FAILURE_SET_FAVORITE',
};
export const ActionLastPromotions = () => ({type: actionTypes.LAST_PROMOTIONS});
export const FailureLastPromotions = (error) => ({type: actionTypes.FAILURE_LAST_PROMOTIONS, data: error});
export const SuccessLastPromotions = (success) => ({type: actionTypes.SUCCESS_LAST_PROMOTIONS, data: success});

export const ActionLastOffers = () => ({type: actionTypes.LAST_OFFERS});
export const FailureLastOffers = (error) => ({type: actionTypes.FAILURE_LAST_OFFERS, data: error});
export const SuccessLastOffers = (success) => ({type: actionTypes.SUCCESS_LAST_OFFERS, data: success});

export const ActionLastArticles = () => ({type: actionTypes.LAST_ARTICLES});
export const FailureLastArticles = (error) => ({type: actionTypes.FAILURE_LAST_ARTICLES, data: error});
export const SuccessLastArticles = (success) => ({type: actionTypes.SUCCESS_LAST_ARTICLES, data: success});

export const ActionDirectory = () => ({type: actionTypes.DIRECTORY});
export const FailureDirectory = (error) => ({type: actionTypes.FAILURE_DIRECTORY, data: error});
export const SuccessDirectory = (success) => ({type: actionTypes.SUCCESS_DIRECTORY, data: success});

export const ActionGetFavorites = (ctx) => ({type: actionTypes.FAVORITES, ctx});
export const FailureGetFavorites = (error) => ({type: actionTypes.FAILURE_FAVORITES, data: error});
export const SuccessGetFavorites = (success) => ({type: actionTypes.SUCCESS_FAVORITES, data: success});

export const ActionSetFavorite = (id) => ({type: actionTypes.SET_FAVORITE, data: id});
export const FailureSetFavorite = (error) => ({type: actionTypes.FAILURE_SET_FAVORITE, data: error});
export const SuccessSetFavorite = (success, data) => ({
    type: actionTypes.SUCCESS_SET_FAVORITE, data: {
        success,
        id: data,
    }
});
