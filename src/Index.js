import React from 'react';
// import { Provider } from 'react-redux';
// import { configureStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import store from './store';
import Main from './screens/Main';

const App = () => {

  // const store = configureStore({
  //   reducer: {
  //     counterReducer: counterReducer,
  //   },
  // });

  return (
    // <Provider store={store}>
    <Main/>
    // </Provider>
  );
};

export default App;