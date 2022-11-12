import { ActionTypes } from "../constants/action-types";

const initialState = {
    fantasyBooks: [],
    mysteryBooks: [],
    horrorBooks: [],
    yaBooks: [],
    bioBooks: []
};
export const bookReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_BOOKS:
            return {
                ...state, 
                fantasyBooks: payload,
                mysteryBooks: payload,
                horrorBooks: payload,
                yaBooks: payload,
                bioBooks: payload
            };
        default: 
            return state;
    }
}