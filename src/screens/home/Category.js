import React, { useState, useRef } from 'react';
import { DrawerLayoutAndroid, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import styled, { css } from 'styled-components/native';
import { setIcon } from '../../utils/styles';
import Icon from 'react-native-vector-icons/Ionicons';

import categories from '../../data/Category';

const CategoryButton = styled.Button`
    
`;

const Category = () => {
    return (
        <View>
            <CategoryButton

            ></CategoryButton>
        </View>
    );
}

export default Category;