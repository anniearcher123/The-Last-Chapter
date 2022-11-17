import { combineReducers } from 'redux';
import { bookReducer, selectedBookReducer, tbrListReducer } from './bookReducer';

const reducers = combineReducers({
    allBooks: bookReducer,
    book: selectedBookReducer,
    tbrBooks: tbrListReducer
});

export default reducers;