import {all, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'

import {actionTypes as actionTypeExample} from './example/actions'
import {loadDataSaga} from "./example/saga";
import {authRegisterUserSaga, actionTypes as actionTypeUser, authLoginUserSaga, authInitialUserSaga, authLogoutUserSaga} from "./user";
import {getLastPromotionsSaga, actionTypes as actionTypeArticles, getLastOffersSaga, getLastArticlesSaga, getDirectorySaga} from "./articles";

es6promise.polyfill();

function* rootSaga() {
    yield all([
        //call(runClockSaga),
        takeLatest(actionTypeExample.LOAD_DATA, loadDataSaga),
        takeLatest(actionTypeUser.AUTH_REGISTER, authRegisterUserSaga),
        takeLatest(actionTypeUser.AUTH_LOGIN, authLoginUserSaga),
        takeLatest(actionTypeUser.AUTH_LOGIN_INICIAL, authInitialUserSaga),
        takeLatest(actionTypeUser.AUTH_LOGOUT, authLogoutUserSaga),
        takeLatest(actionTypeArticles.LAST_PROMOTIONS, getLastPromotionsSaga),
        takeLatest(actionTypeArticles.LAST_OFFERS, getLastOffersSaga),
        takeLatest(actionTypeArticles.LAST_ARTICLES, getLastArticlesSaga),
        takeLatest(actionTypeArticles.DIRECTORY, getDirectorySaga),
    ])
}

export default rootSaga
