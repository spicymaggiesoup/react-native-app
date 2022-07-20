import React, { useState, useRef } from 'react';
import { DrawerLayoutAndroid, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import styled, { css } from 'styled-components/native';
import { setIcon } from '../utils/styles';
import Icon from 'react-native-vector-icons/Ionicons';


const Home = () => {

    const titleText = "COWKITE 2022";
    const drawer = useRef(null);
    const [ drawerPosition ] = useState("left");

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={() => {
                return (`<View></View>`);
            }}
        > 
        <View style={styles.container}>
            <View>
                <Icon.Button
                    name="menu"
                    size={30}
                    color='#A6A6A6'
                    style={styles.menuButton}
                    onPress={() => drawer.current.openDrawer()}
                >
                {titleText}
                </Icon.Button>
            </View>
            <View>

            </View>
        </View>
        </DrawerLayoutAndroid>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // paddingTop: 50,
    },
    menu: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 16
    },
    title: {
        color: '#35363A',
        fontSize: 20,
    },
    menuButton: {
        color: '#A6A6A6',
        backgroundColor: '#fff',
    }
});

export default Home;