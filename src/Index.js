import React, { useRef, useState } from "react";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, DrawerLayoutAndroid, View, ScrollView } from 'react-native';

import Login from './screens/Login';
import Toolbar from './screens/Toolbar';
import Menu from './screens/Menu';

const App = () => {
  
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  return (
    // <ScrollView>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={Menu}
      >
        <View style={styles.container}>
          <Toolbar/>
          <Login/>
        </View>
      </DrawerLayoutAndroid>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});

export default App;