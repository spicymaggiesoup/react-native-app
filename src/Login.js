import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 50,
    padding: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#0000,',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
      display: 'flex',
      width: 250,
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#A6A6A6',
      padding: 10,
      marginBottom: 10,
      color: '#A6A6A6'
  }
});

const Login = () => {

  const [text, setText ] = useState('');

  const fnChangeText = () => {
    alert('콘솔 fnChangeText', this);
  };

  return (
    <View class="container" style={styles.container}>
        <Text style={{color: '#5F5F5F', marginBottom: 10}}>LOGIN</Text>
        <View class="container-form" style={{marginBottom:20}}>
            <TextInput
                style={styles.input}
                placeholder="ID를 입력하세요."
                onChangeText={newText => setText(newText)}
            />
            <TextInput
                style={styles.input}
                placeholder="PW를 입력하세요."
                onChangeText={newText => setText(newText)}
            />
        </View>
        <Button title="확인" onPress={fnChangeText}/>
    </View>
  );
}

export default Login;