import { ActionTypes } from "../constants/action-types";

const initialState = {
    books: [
        {
        id: 1,
        title: "A Court of Thorns and Roses",
        category: "Fantasy"
        },
    ]
}
export const bookReducer = (state, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_BOOKS:
            return state;
        default: 
            return state;
    }
}