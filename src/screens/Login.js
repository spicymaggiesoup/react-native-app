import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { login } from '../utils/styles'; 
// import { submitButton } from '../components/Button';

const Login = () => {

  const placeholders ={
    id: 'ID를 입력하세요.',
    pw: 'PW를 입력하세요.',
  };
  const [ idText, setIdText ] = useState(''),
    [ pwText, setPwText ] = useState('');

  const fnChangeText = () => {
    alert(`Your ID: ${idText}, PW: ${pwText} `);
  };

  return (
    <View style={login.container}>
        <Text style={{color: '#5F5F5F', marginBottom: 10}}>LOGIN</Text>
        <View class="container-form" style={{marginBottom:20}}>
            <TextInput
                style={login.input}
                placeholder={placeholders.id}
                autoFocus={true}
                onChangeText={newText => setIdText(newText)}
            >{idText}</TextInput>
            <TextInput
                style={login.input}
                placeholder={placeholders.pw}
                secureTextEntry={true}
                onChangeText={newText => setPwText(newText)}
            >{pwText}</TextInput>
        </View>
        <Button title="확인"
          color='#7166DE'
          onPress={fnChangeText}
        />
    </View>
  );
}

export default Login;