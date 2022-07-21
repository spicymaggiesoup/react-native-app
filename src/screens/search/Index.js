import React, { useRef, useState } from "react";
import { StyleSheet } from 'react-native';
import { DrawerLayoutAndroid, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from '../login/Index';
import Menu from '../home/Index';

const Index = () => {
  
  const titleText = "COWKITE 2022";
  const drawer = useRef(null);
  const [ drawerPosition ] = useState("left");

  return (
    // <ScrollView />
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={Menu}
    > 
      <View class="container" style={styles.container}>
          <View>
            <Icon.Button
              name="menu"
              size={30}
              color='#A6A6A6'
              style={styles.menuButton}
              onPress={() => drawer.current.openDrawer()}
            >
            {titleText}
            </Icon.Button>
          </View>
          <Login/>
      </View>
    </DrawerLayoutAndroid>
  ); 
} 

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 50,
  },
  menu: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ecf0f1",
      padding: 16
  },
  title: {
      color: '#35363A',
      fontSize: 20,
  },
  menuButton: {
      color: '#A6A6A6',
      backgroundColor: '#fff',
  }
});

export default Index;