import React from 'react';
import {
  StyleSheet, View, Button,
} from 'react-native';

export default function NextPreviousButtons({
  onNext, onPrevious
} = props) {
  return (
    <View>
      <View style={styles.buttonContianer}>
        <View style={styles.buttonElement}>
          <Button
            onPress={onPrevious}
            title="Previous"
          />
        </View>
        <View style={styles.buttonElement}>
          <Button
            onPress={onNext}
            title="Next"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    marginTop: 50,
  },
  textInput: {
    height: 40,
    width: '100%',
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 50,

  },
  buttonContianer: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonElement: {
    width: '48%',
    marginRight: 5,
    marginLeft: 5,
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 50,
    marginBottom: 50,
  },
  centeredText: {
    textAlign: 'center',
    marginTop: 5,
  },
});
