const SET_GENRE = "SET_GENRE";
const MOVIES = "Movies";

let initialState = {
    categorie: MOVIES
}

const FilmListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_GENRE:
            return {
                ...state,
                categorie: action.categorie
            }
        default: 
            return state;
    }
}

export const FilmListAC = (categorie) => {
    return {
        type: SET_GENRE,
        categorie: categorie
    }
}

export default FilmListReducer;