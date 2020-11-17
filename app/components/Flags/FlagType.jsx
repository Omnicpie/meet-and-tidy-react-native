import React from 'react';
import {
  StyleSheet, Text, SafeAreaView, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import FlagTypeSelectButtons from './FlagTypeSelectButtons';

export default function FlagType({
  flagType, onChangeFlagType, onNext,
} = props) {
  function validateInput() {
    if (flagType.length > 3 && typeof flagType === 'string') {
      onNext();
    } else {
      alert('Please select an flag type.');
    }
  }
  return (
    <SafeAreaView>
      <Text>Create a flag</Text>
      <Text>Flag Type</Text>
      <FlagTypeSelectButtons
        flagType={flagType}
        onChangeFlagType={onChangeFlagType}
      />
      <Button
        onPress={validateInput}
        title="Next"
      />
      <ProgressBar style={styles.progressBar} progress={0.4} color={Colors.green500} />
      <Text>2 of 5</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  progressBar: {
    marginTop: 50,
  },
});
