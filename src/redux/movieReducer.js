const initialState = {
    movies : [], 
    genres : [] 
}

export function movieReducer(state=initialState, action){
    switch(action.type){
        case "GET_GENRES":{
            return {
                ...state,
                genres : action.payload
            }
        }
        default:{
            return state;
        }
    }
}