import {combineReducers} from "redux";
import userReducer from "./user/reducers";
import exampleReducer from "./example/reducers";
import articlesReducer from "./articles/reducers";

export default combineReducers({
    example: exampleReducer,
    user: userReducer,
    articles: articlesReducer,
});
