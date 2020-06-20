import {FailureDirectory, FailureGetFavorites, FailureLastArticles, FailureLastOffers, FailureLastPromotions, FailureSetFavorite, SuccessDirectory, SuccessGetFavorites, SuccessLastArticles, SuccessLastOffers, SuccessLastPromotions, SuccessSetFavorite} from "./actions";
import {put} from 'redux-saga/effects'
import {getApi} from "../../../settings";
import {FailureLogin, SetLogin} from "../user";

export function* getLastPromotionsSaga() {
    try {
        const res = yield fetch(getApi("promotions/last"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const response = yield res.json();
        if (!res.ok) {
            yield put(FailureLastPromotions(response.error));
            return;
        }
        yield put(SuccessLastPromotions(response));
    } catch (err) {
        console.log(err);
        yield put(FailureLastPromotions(err));
    }
}

export function* getLastOffersSaga() {
    try {
        const res = yield fetch(getApi("offers/last"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const response = yield res.json();
        if (!res.ok) {
            yield put(FailureLastOffers(response.error));
            return;
        }
        yield put(SuccessLastOffers(response));
    } catch (err) {
        console.log("Errr", err);
        yield put(FailureLastOffers(err));
    }
}

export function* getLastArticlesSaga() {
    try {
        const res = yield fetch(getApi("articles/last"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const response = yield res.json();
        if (!res.ok) {
            yield put(FailureLastArticles(response.error));
            return;
        }
        yield put(SuccessLastArticles(response));
    } catch (err) {
        console.log("Errr", err);
        yield put(FailureLastArticles(err));
    }
}

export function* getDirectorySaga() {
    try {
        const res = yield fetch(getApi("users/directory"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        });
        const response = yield res.json();
        if (!res.ok) {
            yield put(FailureDirectory(response.error));
            return;
        }
        yield put(SuccessDirectory(response));
    } catch (err) {
        console.log("Errr", err);
        yield put(FailureDirectory(err));
    }
}

export function* getFavoritesSaga(data) {
    try {
        const res = yield fetch(getApi("articles/favorites"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'cookie': data.ctx.req.headers.cookie,
            },
            method: "GET",
        });
        const response = yield res.json();
        yield put(SuccessGetFavorites(response));
    } catch (err) {
        yield put(FailureGetFavorites(err));
    }
}

export function* setFavoriteSaga(data) {
    try {
        const res = yield fetch(getApi("articles/favorite/" + data.data), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: "POST",
        });
        const response = yield res.json();
        if (response.success) {
            yield put(SuccessSetFavorite(response, data.data));
        } else {
            yield put(FailureSetFavorite(response));
        }
    } catch (err) {
        yield put(FailureSetFavorite(err));
    }
}
