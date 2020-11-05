import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

function EventScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>A list of all the events will be here </Text>
      </SafeAreaView> 
    );
}

export default EventScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 25
    }
  });