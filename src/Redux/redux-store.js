import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import FilmListReducer from "./FIlmListReducer";
import SearchReducer from "./SearchReducer";

let reducers = combineReducers({
    filmList: FilmListReducer,
    search: SearchReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
