import {FailureLastArticles, FailureLastOffers, FailureLastPromotions, SuccessLastArticles, SuccessLastOffers, SuccessLastPromotions} from "./actions";
import {put} from 'redux-saga/effects'
import {getApi} from "../../../settings";

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
