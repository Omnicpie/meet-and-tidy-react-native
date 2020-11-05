import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

function RegistrationScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>A registration form will be here </Text>
      </SafeAreaView> 
    );
}

export default RegistrationScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 25
    }
  });