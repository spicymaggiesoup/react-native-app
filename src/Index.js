import React from 'react';
// import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { configureStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import store from './store';
// import store from './Context/store';
// import Provider from './Context/Provider';
import Main from './screens/Main';
import Count from './screens/Count';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Count" component={Count} />
      </Stack.Navigator>
    </NavigationContainer>

    /* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer> */
  )
};

export default App;