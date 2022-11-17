import {ActionTypes} from "../constants/action-types";

export const setFantasyBooks = (books) => {
    return {
        type: ActionTypes.SET_FANTASYBOOKS,
        payload: books,
    };
};

export const setMysteryBooks = (books) => {
    return {
        type: ActionTypes.SET_MYSTERYBOOKS,
        payload: books,
    };
};

export const setRomanceBooks = (books) => {
    return {
        type: ActionTypes.SET_ROMANCEBOOKS,
        payload: books,
    };
};

export const setYaBooks = (books) => {
    return {
        type: ActionTypes.SET_YABOOKS,
        payload: books,
    };
};

export const setBioBooks = (books) => {
    return {
        type: ActionTypes.SET_BIOBOOKS,
        payload: books,
    };
};


export const selectedBooks = (book) => {
    return {
        type: ActionTypes.SELECTED_BOOK,
        payload: book,
    };
};

export const addBooks = (book) => {
    return {
        type: ActionTypes.ADD_TO_TBR,
        payload: book,
    };
};

export const removeBooks = (book) => {
    return {
        type: ActionTypes.REMOVE_FROM_TBR,
        payload: book,
    };
};