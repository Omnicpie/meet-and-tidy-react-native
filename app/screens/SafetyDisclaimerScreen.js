import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

function SafetyDisclaimerScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>A safety disclaimer will be here </Text>
    </SafeAreaView>
  );
}

export default SafetyDisclaimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
});
