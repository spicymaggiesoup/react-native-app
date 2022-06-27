import { StyleSheet, Text, View, Button } from 'react-native';

const Toolbar = () => {

  const menuIcon = '❤️';

  const fnToggleDrawer = () => {
    drawer.current.openDrawer()
  };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Cowkite</Text>
        <Button
          title={menuIcon}
          onPress={fnToggleDrawer}
        />
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

export default Toolbar;