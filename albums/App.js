//import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//create a Component
const App = () => (
  <Text>Some text</Text>
);

//render it to the device
AppRegistry.registerComponent('albums', () => App);
