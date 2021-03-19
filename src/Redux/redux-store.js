import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import filmCardReducer from "./FilmCardReducer";

let reducers = combineReducers({
    filmCard: filmCardReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
