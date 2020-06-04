import {rootReducer} from "./reducers";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

export interface State {
    tick: string;
}

export const initStore = (initialState = {}) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, logger))
    )
};
const makeStore: MakeStore<State> = (context: Context) => initStore();
export const wrapper = createWrapper<State>(makeStore, {debug: true});
