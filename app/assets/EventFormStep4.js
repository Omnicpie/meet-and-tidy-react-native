import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
// import Request from './request';

export default function EventFormStep4({
  title, onChangeTitle, onNext,
} = props) {
  return (
    <View>
      <Text>Create an event</Text>
      <Text>Title</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeTitle(text)}
        title={title}
      />
      <Button
        onPress={onNext}
        title="Next"
      />
      <ProgressBar style={styles.progressBar} progress={0.5} color={Colors.green500} />
      <Text>4 of 8</Text>
    </View>
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
