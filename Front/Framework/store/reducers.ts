import {combineReducers} from "redux";
import authReducer from "./user/reducer/auth";

export const rootReducer = combineReducers({
    auth: authReducer,
});


