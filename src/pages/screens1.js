/** Comments
 * 
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class FirstPage extends Component {

  constructor() {
    super();
    //Setting up global variable
    global.MyVar = 'https://aboutreact.com';    
  }

  static navigationOptions = {
    //Title of the First Screen
    title: 'FirstScreen',
  };

  changeScreen = () => {
    //Function to navigate to the next screen
    this.props.navigation.navigate('Second');
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.textStyle}>
            {global.MyVar}
            {/*Global Variable*/}
          </Text>
        </View>
        <Button onPress={this.changeScreen} title="Next Screen" />
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