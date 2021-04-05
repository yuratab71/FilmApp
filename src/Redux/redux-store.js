import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import FilmListReducer from "./FIlmListReducer";
import LocalStorageReducer from "./LocalStorageReducer";
import SearchReducer from "./SearchReducer";

let reducers = combineReducers({
    filmList: FilmListReducer,
    search: SearchReducer,
    locals: LocalStorageReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
