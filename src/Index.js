import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// styles
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
// utils
import { setIcon } from './utils/styles';
// screens
import Login from './screens/Login';


const Tab = createBottomTabNavigator();
const Main = () => {
    return(
        <NavigationContainer
            initialRouteName="Login"
            >
            <Tab.Navigator>
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={setIcon()}
                >
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Main;
