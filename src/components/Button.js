import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export const submitButton = () => {
    return (<Button title="확인" onPress={}/>);
};

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