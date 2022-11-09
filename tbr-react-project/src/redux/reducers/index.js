import {combinedReducers} from 'redux';
import { bookReducer } from './bookReducer';

const reducers = combinedReducers({
    allBooks: bookReducer,
})