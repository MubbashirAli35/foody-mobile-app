import React from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RNU from 'react-native-units';
import { Text } from 'react-native-elements';
import { AppLoading } from 'expo'
import { useFonts, DancingScript_700Bold } from '@expo-google-fonts/dancing-script'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, 
        DrawerContentScrollView, 
        DrawerItemList } from '@react-navigation/drawer';

import Home from './Screens/Home';

export default function Main() {
    let [fontsLoaded] = useFonts({
        DancingScript_700Bold
    });

    const CustomDrawerContent = (props) => {
        return(
            <DrawerContentScrollView {...props}>
                <SafeAreaView style={{ flex: 1 }} >
                    <View style={styles.drawerHeader} >
                        <Text h4 style={{ color: '#fff' }}>
                            Log In / Create Account
                        </Text>
                    </View>
                </SafeAreaView>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        )
    }

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
            <Drawer.Navigator drawerContentOptions={{
                activeBackgroundColor: '#fff'
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name='Home' component={HomeStackNavigator}
                    options={{
                        drawerLabel: () => {
                            return(
                                <Text style={{ fontSize: 20 }}>
                                    Home
                                </Text>
                            )
                        },
                        drawerIcon: () => {
                            return(
                                <FontAwesome5 name='scroll' solid style={{ color: '#ed441a', fontSize: 20 }} />
                            )
                        }
                    }} />
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

const styles = StyleSheet.create({
    drawerHeader: {
        height: RNU.vh(30), 
        backgroundColor: '#ed441a',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 10,
        paddingLeft: 10
    }
})