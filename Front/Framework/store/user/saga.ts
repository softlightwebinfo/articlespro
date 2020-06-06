import {Failure, Success} from "./actions";
import {delay, put} from 'redux-saga/effects'
import {getApi} from "../../../settings";

export function* authRegisterUserSaga(data) {
    try {
        const res = yield fetch(getApi("user/register"), {
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST"
        });
        yield put(Success(res));
        delay(2000);
        yield put(Success(null));
    } catch (err) {
        yield put(Failure(err));
    }
}
