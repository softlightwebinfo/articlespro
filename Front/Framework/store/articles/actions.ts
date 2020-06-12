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
