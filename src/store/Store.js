import { createStore, combineReducers, applyMiddleware } from "redux";
import ListReducer from "./reducers/ListReducer";
import BGReducer from "./reducers/BGReducers";

import logger from 'redux-logger'

export const rootReducer = combineReducers ({
    list: ListReducer,
    bg: BGReducer
});

export const store = () => {
    return createStore(rootReducer, applyMiddleware(logger));
};

