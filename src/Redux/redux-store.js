import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import FilmListReducer from "./FIlmListReducer";

let reducers = combineReducers({
    filmList: FilmListReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
