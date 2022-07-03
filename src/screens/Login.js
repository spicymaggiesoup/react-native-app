import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import styled, { css } from 'styled-components/native';
import { login } from '../utils/styles'; 
// import { submitButton } from '../components/Button';

const Login = () => {

  const TitleText = styled.Text`
    color: #5F5F5F;
    margin-bottom: 10px;
  `;

  const placeholders ={
    id: 'ID를 입력하세요.',
    pw: 'PW를 입력하세요.',
  };
  
  const [ idText, setIdText ] = useState(''),
    [ pwText, setPwText ] = useState('');

  const fnChangeText = () => {
    // Alert.alert(`Your ID: ${idText}, PW: ${pwText} `);
    alert(`Your ID: ${idText}, PW: ${pwText} `);

    navigation.navigate('Count');

    // setIdText(idText);
    // setPwText(pwText);

  };

  return (
    <View style={login.container}>
        <TitleText>LOGIN</TitleText>
        <View class="container-form" style={{marginBottom:20}}>
            <TextInput
                style={login.input}
                placeholder={placeholders.id}
                autoFocus={true}
                value={idText}
                onChangeText={newText => setIdText(newText)}
            ></TextInput>
            <TextInput
                style={login.input}
                placeholder={placeholders.pw}
                secureTextEntry={true}
                value={pwText}
                onChangeText={newText => setPwText(newText)}
            ></TextInput>
        </View>
        <Button title="확인"
          color='#7166DE'
          onPress={fnChangeText}
        />
    </View>
  );
}

export default Login;