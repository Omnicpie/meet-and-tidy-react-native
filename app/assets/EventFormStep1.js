import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Request from '../assets/request'
import { ProgressBar, Colors } from 'react-native-paper';

export default function EventFormStep1({title, onChangeTitle, description, onChangeDescription, onNext} = props) {


    return (
    <View>
        <Text>Create an event</Text>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeTitle(text) }
        title={title}
        />
        <TextInput
        style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeDescription(text) }

        />
        <Button
            onPress={onNext}
            title="Next"
        />
        <ProgressBar style={styles.progressBar} progress={0.1} color={Colors.green500} />
        <Text>1 of 8</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 25
    },
    progressBar: {
      marginTop: 50
    }
  });