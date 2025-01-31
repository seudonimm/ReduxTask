import { CHANGE_BG_BLUE, CHANGE_BG_GREEN } from "../ActionTypes";


export const changeBGGreen = (set) => {
    return{
        type: CHANGE_BG_GREEN,
        payload: set
    }
};

export const changeBGBlue = (set) => {
    return{
        type: CHANGE_BG_BLUE,
        payload: set
    }
};