import { ADD_TO_LIST, CLEAR_LIST, REMOVE_FROM_LIST } from "../ActionTypes";


const ListReducer = (state=[], action) => {
    switch(action.type){
        case ADD_TO_LIST:
            let newState = [...state];
            newState.push(action.payload);
            return newState;
        case REMOVE_FROM_LIST:
            newState = [...state];
            newState.pop();
            return newState;
        case CLEAR_LIST:
            newState = [...state];
            newState.clear();
            return newState;
        default:
            return state;
    }
}

export default ListReducer;