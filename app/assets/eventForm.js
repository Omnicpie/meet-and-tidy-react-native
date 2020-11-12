import React from 'react';
import { Text, View, TextInput} from 'react-native';

export default function eventForm() {
const [value, onChangeText] = React.useState('Useless Placeholder');
    return (
    <View>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
        />
    </View>
    )
}

