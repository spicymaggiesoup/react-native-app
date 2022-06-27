import { StyleSheet, Text, View } from 'react-native';

const Menu = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Cowkite</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    padding: 10,
    alignItems: 'center',
    top: 0,
  },
  text: {
      color: '#35363A',
      fontSize: 20,
  }
});

export default Menu;