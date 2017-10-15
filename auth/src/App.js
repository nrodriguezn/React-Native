import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDahRwTuxcLhyy4GX_qWf-v-rKaOm0Ivp0',
    authDomain: 'auth-dbf5f.firebaseapp.com',
    databaseURL: 'https://auth-dbf5f.firebaseio.com',
    projectId: 'auth-dbf5f',
    storageBucket: 'auth-dbf5f.appspot.com',
    messagingSenderId: '427886833902'
  });

  firebase.auth().onAuthStateChanged((user) => {
    console.log(firebase.auth().currentUser);
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
            </Button>
          );
      case false:
          return <LoginForm />;
      default:
          return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
