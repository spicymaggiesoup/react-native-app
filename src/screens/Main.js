import React, { useRef, useState } from "react";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, DrawerLayoutAndroid, View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from './Login';
import Menu from './Menu';

const Main = () => {
  
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
          <View style={styles.toolbar}>
            <Icon.Button
              name="menu"
              size={30}
              color={styles.menuButton.color}
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
  toolbar: {
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

export default Main;