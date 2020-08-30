import * as ActionTypes from './ActionTypes';

export const Restaurants = (state = {
    isLoading: true,
    restaurants: [],
    errMess: null
}, action) => {
    switch(action.type) {
        case ActionTypes.RESTAURANTS_LOADING:
            return {
                ...state,
                isLoading: true,
                restaurants: [],
                errMess: null
            };

        case ActionTypes.ADD_RESTAURANTS:
            return {
                ...state,
                isLoading: false,
                restaurants: action.payload,
                errMess: null
            };

        case ActionTypes.RESTAURANTS_FAILED:
            return {
                ...state,
                isLoading: false,
                restaurants: [],
                errMess: action.payload
            };

        default:
            return state;
    }
};