import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Restaurants } from './restaurants';

export const configureStore = () => {
    const store = createStore(combineReducers({
        restaurants: Restaurants
    }), applyMiddleware(thunk));

    return store;
}