import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Drawer2 extends React.Component {
  static navigationOptions = { title: 'Drawer2' };

  render() {
    return (
      <View style={styles.container}>
        <Text>Drawer 2</Text>

        <Button 
          title="To Drawer 1" 
          onPress={() => this.props.navigation.navigate('Drawer1')}
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
