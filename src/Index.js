import React, { useRef, useState } from "react";
import { DrawerLayoutAndroid, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// styles
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
// utils
import { setIcon } from './utils/styles';
// screens
import Login from './screens/Login';
import Main from './screens/Main';
import Menu from './screens/Menu';

const Tab = createBottomTabNavigator();
const Index = () => {

    const drawer = useRef(null);
    const [ drawerPosition ] = useState("left");

    return(
        <NavigationContainer
            initialRouteName="Login"
            >
            <Tab.Navigator>
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={setIcon()}
                >
                </Tab.Screen>
                <Tab.Screen
                    name="Main"
                    component={Main}
                    options={setIcon()}
                >
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Index;
