import { ADD_TO_LIST, REMOVE_FROM_LIST } from "../ActionTypes";


export const addToList = (item) => {
    return{
        type: ADD_TO_LIST,
        payload: item
    };
};

export const removeFromList = () => {
    return{
        type: REMOVE_FROM_LIST
    }
};