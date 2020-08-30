import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../baseUrl';

export const restaurantsLoading = () => {
    return {
        type: ActionTypes.RESTAURANTS_LOADING
    };
};

export const addRestaurants = (restaurants) => {
    return {
        type: ActionTypes.ADD_RESTAURANTS,
        payload: restaurants
    };
};

export const restaurantsFailed = (errMess) => {
    return {
        type: ActionTypes.RESTAURANTS_FAILED,
        payload: errMess
    };
};

export const fetchRestaurants = () => (dispatch) => {
    dispatch(restaurantsLoading());

    return fetch(baseUrl + 'restaurants', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok)
            return response;

        const error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }, (error) => { throw error; })
    .then(response => response.json())
    .then(restaurants => {
        console.log(JSON.stringify(restaurants));
        dispatch(addRestaurants(restaurants));
    }, error => { throw error; })
    .catch(error => console.log(error.message));
}