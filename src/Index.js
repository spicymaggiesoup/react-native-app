import React, { useRef, useState } from "react";
import { DrawerLayoutAndroid, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components/native';
// utils
import { setIcon } from './utils/styles';
// tabs
import { tabOption } from "./components/Tabs";
// screens
import Login from './screens/login/Index';
import Search from './screens/search/Index';
import Alarm from './screens/alaram/Index';
import Home from './screens/home/Index';

const Tab = createBottomTabNavigator();
const Index = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={tabOption}
                >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={setIcon()}
                >
                </Tab.Screen>
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={setIcon('feature-search-outline')}
                >
                </Tab.Screen>
                <Tab.Screen
                    name="Alarm"
                    component={Alarm}
                    options={setIcon('bell-outline')}
                >
                </Tab.Screen>
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={setIcon('fingerprint')}
                >
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}  

export default Index;
