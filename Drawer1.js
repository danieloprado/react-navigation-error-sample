import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Drawer1 extends React.Component {
  static navigationOptions = { title: 'Drawer1' };

  render() {
    return (
      <View style={styles.container}>
        <Text>Drawer 1</Text>

        <Button 
          title="To Drawer 2" 
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
});
