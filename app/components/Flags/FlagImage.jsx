import React from 'react';
import {
  StyleSheet, Text, SafeAreaView, TextInput, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
// import Request from './request';

export default function FlagImage({
  image, onChangeImage, onNext,
} = props) {
  return (
    <SafeAreaView>
      <Text>Create a flag</Text>
      <Text>Images</Text>

      <TextInput
        style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeImage(text)}
        image={image}
      />
      <Button
        onPress={onNext}
        title="Next"
      />
      <ProgressBar style={styles.progressBar} progress={0.6} color={Colors.green500} />
      <Text>3 of 5</Text>
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
