import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';

import { fetchRestaurants } from '../redux/ActionCreators';

let fetchCalled = false;

export default function Home() {
    const restaurants = useSelector(state => state.restaurants);
    const dispatch = useDispatch();

    useEffect(() => {
        
        if(!fetchCalled) {
            console.log('Fetch called!');
            dispatch(fetchRestaurants());
            fetchCalled = true;
        }

        console.log(JSON.stringify(restaurants));
    }, [restaurants]);

    if(restaurants.isLoading) {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='#000' />
            </View>
        );
    }
    else {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    {JSON.stringify(restaurants.restaurants)}
                </Text>
            </View>
        );
    }
}