import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#35363A',
    padding: 10,
    alignItems: 'center',
    top: 0,
  },
  text: {
      color: 'white',
      fontSize: 20,
  }
});

const Menu = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Cowkite</Text>
    </View>
  );
}

export default Menu;