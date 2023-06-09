import React from 'react';
import Route from './src/navigation/routes';
import { Provider } from 'react-redux';
import store from './src/store/index';

// create our root router app
export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }

}

console.disableYellowBox = true;
