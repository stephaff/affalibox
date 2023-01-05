import { combineReducers } from 'redux';
import { movieReducer } from '../redux/movieReducer';

export const rootReducer = combineReducers({
        movieReducer: movieReducer
    }
);