import {all, call, delay, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'

import {actionTypes as actionTypeExample} from './example/actions'
import {loadDataSaga} from "./example/saga";
import {authRegisterUserSaga, actionTypes as actionTypeUser} from "./user";

es6promise.polyfill();

function* rootSaga() {
    yield all([
        //call(runClockSaga),
        takeLatest(actionTypeExample.LOAD_DATA, loadDataSaga),
        takeLatest(actionTypeUser.AUTH_REGISTER, authRegisterUserSaga),
    ])
}

export default rootSaga
