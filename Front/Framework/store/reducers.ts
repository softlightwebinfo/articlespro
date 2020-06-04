import {combineReducers} from "redux";
import exampleReducer from "./example/reducers";

export default combineReducers({
    example: exampleReducer
});
