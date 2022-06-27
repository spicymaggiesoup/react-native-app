import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Login from './Login';
import Menu from './Menu';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Menu/>
        <Login/>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
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