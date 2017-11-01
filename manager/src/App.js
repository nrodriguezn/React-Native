import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
      const config = {
      apiKey: 'AIzaSyCAQ1a3HWKdYu-eLFfUtbyuVLmAxyZ-5f0',
      authDomain: 'manager-18445.firebaseapp.com',
      databaseURL: 'https://manager-18445.firebaseio.com',
      projectId: 'manager-18445',
      storageBucket: 'manager-18445.appspot.com',
      messagingSenderId: '942565716975'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
