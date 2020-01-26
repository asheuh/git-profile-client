import { combineReducers } from 'redux';
import * as t from '../constants';

const initialState = {
    data: [],
    error: null,
    loading: false
};


const fetch_reducer = (state = initialState, action) => {
    switch(action.type) {
        case t.FETCH_REQUEST:
            return {
                ...state,
                loading: true
            };

        case t.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };

        case t.FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({gitdata: fetch_reducer});

export default rootReducer;
