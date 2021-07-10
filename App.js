import React from 'react';
import HomeScreen from './Components/HomeScreen';
import { View } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      word:' ', 
      definition:' ', 
      lexicalCategory:' ',
      text:'',
      displayText:''
    }
  }
  render(){
  return (
    <View>
      <HomeScreen />
    </View>
  );
}
}
