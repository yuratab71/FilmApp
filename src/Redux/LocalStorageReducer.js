const SET_TO_LOCAL = "SET_TO_LOCAL";
const REMOVE_FROM_LOCAL = "REMOVE_FROM_LOCAL";
const SET_TO_DEFAULT = "SET_TO_DEFAULT";

const initialState = {
    locals: [],
    ids: []
};

const removeLocals = (id, arr) => {
    return arr.filter(e => {
        return e.id != id;
    })
}

const removeIds = (id, ids) => {
    return ids.filter(e => {
        return e != id;
    });
}

const LocalStorageReducer = (state = initialState, action) => {
    console.log(action, ">>>>>> LocalReducer")
    switch(action.type){
        case SET_TO_LOCAL: 
            localStorage.setItem(action.film.id, action.film.title)
            if (!state.ids.includes(action.film.id)) {
                return {
                    ...state,
                    locals: [...state.locals, action.film],
                    ids: [...state.ids, action.film.id]
                }
            }
            return state;
            break;
        case REMOVE_FROM_LOCAL:   
            localStorage.removeItem(action.id);    
        return {
                ...state,
                locals: removeLocals(action.id, state.locals),
                ids: removeIds(action.id, state.ids)
            }
            break;
        case SET_TO_DEFAULT:
            return {
                ...state,
                locals: [...state.locals, action.film],
                ids: [...state.ids, action.film.id]
            }
        default: 
            return state;
    }
}

export default LocalStorageReducer;

export const localStorageAC = (filmData) => {
    return {
        type: SET_TO_LOCAL,
        film: filmData
    }
}

export const localDeleteAC = (id) => {
    return {
        type: REMOVE_FROM_LOCAL,
        id: id
    }
}

export const setDefaltAC = (filmData) => {
    return {
        type: SET_TO_DEFAULT,
        film: filmData
    }
}