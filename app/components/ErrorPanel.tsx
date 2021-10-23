import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

import { Text, View } from './Themed'

type ErrorPanelProps = {
  message: string;
  reload: VoidFunction;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    padding: 5,
    alignItems: 'center'
  },
  errorText: {
    textAlign: 'center'
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    height: 40,
    width: 125,
    borderRadius: 23,
    marginTop: 20,
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center'
  }
})

export default function ({ message, reload }: ErrorPanelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Oops!</Text>
      <Text style={styles.errorText}>
        Application message:
        {'\n'}
        {message}
      </Text>
      <Text style={styles.errorText}>Please check your internet connection.</Text>
      <Pressable onPress={() => reload()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Try again</Text>
        </View>
      </Pressable>
    </View>
  )
}
