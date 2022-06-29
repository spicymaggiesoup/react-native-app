import React, { createContext } from 'react';
import { Provider } from 'react-redux';
// import { configureStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import store from './store';
import Main from './screens/Main';
import store from './Context/store';
// import Provider from './Context/Provider';

const App = () => {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
};

export default App;