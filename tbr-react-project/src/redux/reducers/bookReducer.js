import { Action } from "@remix-run/router";
import { ActionTypes } from "../constants/action-types";

// const initialState = {
//     fantasyBooks: [],
//     mysteryBooks: [],
//     romanceBooks: [],
//     yaBooks: [],
//     bioBooks: [],
//     tbrList: []
// };
export const bookReducer = (state, {type, payload}) => {

    if (state === undefined){
        state = {
            fantasyBooks: [],
    mysteryBooks: [],
    romanceBooks: [],
    yaBooks: [],
    bioBooks: [],
    tbrList: []
        }
    }
    
    switch(type) {
        case ActionTypes.SET_FANTASYBOOKS:
            return {
                ...state, 
                fantasyBooks: payload,
            };
        case ActionTypes.SET_MYSTERYBOOKS:
            return {
                ...state, 
                mysteryBooks: payload,
            };
        case ActionTypes.SET_ROMANCEBOOKS:
            return {
                ...state, 
                romanceBooks: payload,
            };
        case ActionTypes.SET_YABOOKS:
            return {
                ...state, 
                yaBooks: payload,
            };
        case ActionTypes.SET_BIOBOOKS:
            return {
                ...state, 
                bioBooks: payload,
            };
        default: 
            return state;
    }
}

export const selectedBookReducer = (state, {type, payload}) => {
    if (state === undefined){
        state = {
            fantasyBooks: [],
    mysteryBooks: [],
    romanceBooks: [],
    yaBooks: [],
    bioBooks: [],
    tbrList: []
        }
    }
    switch(type) {
        case ActionTypes.SELECTED_BOOK:
            return{...state, ...payload};
        default: 
            return state;
    }
}

export const tbrListReducer = (state, {type, payload}) => {
    if (state === undefined){
        state = {
            fantasyBooks: [],
    mysteryBooks: [],
    romanceBooks: [],
    yaBooks: [],
    bioBooks: [],
    tbrList: []
        }
    }
    switch(type) {
        case ActionTypes.ADD_TO_TBR:
            return{
                ...state,
                tbrList: state.tbrList.concat(payload),
            };
        case ActionTypes.REMOVE_FROM_TBR:
            return{
                ...state, 
                tbrList: state.tbrList.filter(book=>{
                    return book.id != payload.id
                })
            }
        default: 
            return state;
        
    }
}