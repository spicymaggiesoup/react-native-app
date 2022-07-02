import { StyleSheet } from 'react-native';

export const login = StyleSheet.create({
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

export const main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
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

export const button = StyleSheet.create({
    
});