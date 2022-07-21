import React, { useState, useRef } from 'react';
import { DrawerLayoutAndroid, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import styled, { css } from 'styled-components/native';
import { setIcon } from '../../utils/styles';
import Icon from 'react-native-vector-icons/Ionicons';


const Index = () => {

    const titleText = "COWKITE 2022";
    const drawer = useRef(null);
    const [ drawerPosition ] = useState("left");

    return (
        <View>
            
        </View>
    );
}

export default Index;