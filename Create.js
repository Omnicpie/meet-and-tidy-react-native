import React from 'react';
import { Button, StyleSheet, View} from 'react-native';

export default function Create() {
  return (
  <View>
    <View style={styles.container}>
      <Button style={styles.createButton} title={'+ Create'}/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButton: {
    alignItems: 'right',
    justifyContent: 'right',
  },
  tagLine: {
    color: '#888', 
    fontSize: 15
  },
  logo: {
    width: 250, 
    height: 125,
    marginTop: 25
  }
});
