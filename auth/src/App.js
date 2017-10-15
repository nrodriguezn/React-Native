import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDahRwTuxcLhyy4GX_qWf-v-rKaOm0Ivp0',
    authDomain: 'auth-dbf5f.firebaseapp.com',
    databaseURL: 'https://auth-dbf5f.firebaseio.com',
    projectId: 'auth-dbf5f',
    storageBucket: 'auth-dbf5f.appspot.com',
    messagingSenderId: '427886833902'
  });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
