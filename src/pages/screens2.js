/** Comments
 * 
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


export default class SecondPage extends Component {

  static navigationOptions = {
    //Title of the Second Screen
    title: 'SecondScreen',
  };
  
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.textStyle}>
          {global.MyVar}
          {/*Global Variable*/}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
});