const SET_FILM = "SET_LOCAL_ITEM";

let initialState = {
    id: "12345678"
};

const filmCardReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FILM: {
            return {
                ...state,
               id: action.id
            }
        }

        default: 
            return state;
    }
}

export default filmCardReducer;

export const setIdActionCreator = id => {
    return ({
        type: SET_FILM,
        id
    });
}