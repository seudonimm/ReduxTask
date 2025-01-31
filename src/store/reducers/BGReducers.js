import { CHANGE_BG_BLUE, CHANGE_BG_GREEN } from "../ActionTypes";


const BGReducer = (state=false, action) => {
    switch(action.type){
        case CHANGE_BG_BLUE:
            let newState = state;
            newState = action.payload;
            return newState;
        case CHANGE_BG_GREEN:
            newState = state;
            newState = action.payload
            return newState;
        default:
            return state;
    }
}

export default BGReducer;