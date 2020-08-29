import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Text } from 'react-native-elements';
import { AppLoading } from 'expo'
import { useFonts, DancingScript_700Bold } from '@expo-google-fonts/dancing-script'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Screens/Home';

export default function Main() {
    let [fontsLoaded] = useFonts({
        DancingScript_700Bold
    });

    const Drawer = createDrawerNavigator();

    const appbarTitle = ( title ) => {
        return(
            <Text style={{ color: '#ed441a', fontFamily: 'DancingScript_700Bold', fontSize: 30 }}>
                {title}
            </Text>
        )
    }

    const DrawerNavigator = () => {
        return(
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={HomeStackNavigator} />
            </Drawer.Navigator>
        )
    };

    const Stack = createStackNavigator();

    const HomeStackNavigator = ({ navigation }) => {
        return(
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                headerTitleAlign: 'center',
                headerLeft: () => { return(
                    <FontAwesome5 name='bars' solid style={{ marginLeft: 13, fontSize: 20, color: '#ed441a' }}
                        onPress={() => navigation.openDrawer()} />
                ); }
            }}>
                <Stack.Screen options={{ title: appbarTitle('Foody') }} name='Home' component={Home} />
            </Stack.Navigator>
        )
    }

    if(!fontsLoaded) {
        return(
            <AppLoading />
        );
    }
    else {
        return(
            <NavigationContainer>
                <DrawerNavigator />
            </NavigationContainer>
        );
    }
}