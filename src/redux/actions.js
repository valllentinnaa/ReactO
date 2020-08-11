import types from './action-types';
import networkClient from '../network/network-client';
import constants from "../utils/constants";

export function setArticles (articles) {
    return {type: types.SET_ARTICLES, payload: articles}
}
export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

export const getArticles = () => async dispatch => {
    try {
        const res = await networkClient.get(
            `${constants.baseURL}/api/articles/all`);
        dispatch(setArticles(res.articles));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export const removeArticle = (id) => async dispatch => {
    try {
        await networkClient.delete(`${constants.baseURL}/api/articles/delete/${id}`);
        dispatch(getArticles());
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function setArticle (article) {
    return {type: types.SET_ARTICLE, payload: article}
}

export const getArticle = id => async dispatch => {
    try {
        const response = await networkClient.get(
            `api/articles/${id}`);
        dispatch(setArticle(response));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};