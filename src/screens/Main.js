import React, { useRef, useState } from "react";
// import { StatusBar } from 'expo-status-bar';
import { DrawerLayoutAndroid, View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { main } from '../utils/styles';

import Login from './Login';
import Menu from './Menu';

const Main = () => {
  
  const titleText = "COWKITE 2022";
  const drawer = useRef(null);
  const [ drawerPosition ] = useState("left");

  const Stack = createStackNavigator();

  return (
    // <ScrollView />
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={Menu}
    > 
      <View class="container" style={main.container}>
          <View>
            <Icon.Button
              name="menu"
              size={30}
              color='#A6A6A6'
              style={main.menuButton}
              onPress={() => drawer.current.openDrawer()}
            >
            {titleText}
            </Icon.Button>
          </View>
          {/* <Stack> */}
          <Login/>
          {/* </Stack> */}
      </View>
    </DrawerLayoutAndroid>
  ); 
}

export default Main;