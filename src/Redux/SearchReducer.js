const SEARCH = "SEARCH";

let initialState = {
    searchExpression: ""
}

const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                searchExpression: action.expression
            }
        default:
            return state;    
    }
}

export const SearchAC = (expression) => {
    return {
        type: SEARCH,
        expression: expression
    }
}

export default SearchReducer;