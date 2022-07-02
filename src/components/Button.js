import React from 'react';
import { StyleSheet, Button } from 'react-native';

import { button } from '../utils/styles';

export const submitButton = () => {
    const fnTest = () => {

    };
    return (<Button title="확인"
        onPress={fnTest}
        style={button}
        />
    );
};