import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

function FlagCreateScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>The flag creation screen will be here </Text>
      </SafeAreaView> 
    );
}

export default FlagCreateScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 25
    }
  });