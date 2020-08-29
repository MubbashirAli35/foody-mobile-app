import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';

export default function Main() {
    const drawerNavigatorIcon = () => {
        return(
            <FontAwesome5 name='bars' solid style={{ marginLeft: 13, fontSize: 20, color: '#ed441a' }} />
        )
    }

    const appbarTitle = ( title ) => {
        return(
            <Text h6 style={{ color: '#ed441a' }}>
                {title}
            </Text>
        )
    }

    const Stack = createStackNavigator();

    const HomeStackNavigator = () => {
        return(
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerTitleAlign: 'center',
                headerLeft: drawerNavigatorIcon
            }}>
                <Stack.Screen options={{ title: appbarTitle('Foody') }} name='Home' component={Home} />
            </Stack.Navigator>
        )
    }

    return(
        <NavigationContainer>
            <HomeStackNavigator />
        </NavigationContainer>
    );
}