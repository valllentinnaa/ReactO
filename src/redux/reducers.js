import {combineReducers} from "redux";
import types from "./action-types";

function articles(state = [], action) {
    switch (action.type) {
        case types.SET_ARTICLES: {
            return [...action.payload];
        }
        case types.REMOVE_ARTICLE: {
            return [...action.payload];
        }
        default:
            return state;
    }
}

function places(state = [], action) {
    switch (action.type) {
        case types.SET_PLACES: {
            return [...action.payload];
        }
        default:
            return state;
    }
}

function article(state = {}, action) {
    switch (action.type) {
        case types.SET_ARTICLE: {
            return {...action.payload};
        }

        default:
            return state;
    }
}

export default combineReducers({
    articles,
    article,
    places
});