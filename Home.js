import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = { title: 'Home' };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>

        <Button 
          title="To Drawer 1" 
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Drawer1')}
         />

        <Button 
          title="To Drawer 2" 
          style={styles.button} 
          onPress={() => this.props.navigation.navigate('Drawer2')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20
  }
});
