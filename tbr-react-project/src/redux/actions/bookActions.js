import {ActionTypes} from "../constants/action-types";

export const setBooks = (books) => {
    return {
        type: ActionTypes.SET_BOOKS,
        payload: books,
    };
};

export const selectedBooks = (book) => {
    return {
        type: ActionTypes.SELECTED_BOOK,
        payload: book,
    };
};