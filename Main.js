import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';

export default function Main() {
    const Stack = createStackNavigator();

    const HomeStackNavigator = () => {
        return(
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerTitleAlign: 'center'
            }}>
                <Stack.Screen options={{ title: 'Foody' }} name='Home' component={Home} />
            </Stack.Navigator>
        )
    }

    return(
        <NavigationContainer>
            <HomeStackNavigator />
        </NavigationContainer>
    );
}