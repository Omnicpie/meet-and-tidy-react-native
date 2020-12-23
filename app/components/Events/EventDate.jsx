import React, { useState } from "react";
import { TextInput, Text, View, Button, Pressable, Keyboard  } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Events from '../../assets/stylesheets/Events';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function EventDate({
  date, onChangeDate, onNext, onChange,
} = props) {
  function validateInput() {
    if (date.length > 6 && typeof date === 'string') {
      onNext();
    } else {
      alert(`Please enter a valid date, "${date}" needs to be at least 5 characters long.`);
    }
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePickerText, setDatePickerText] = useState('Select a date');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDatePickerText(date.toLocaleDateString('en-GB'));
    hideDatePicker();
  };

  const handleCancel = () => {
    Keyboard.dismiss();
    hideDatePicker();
  };

  return (
    <View style={Events.mainContainer}>
      <ProgressBar style={Events.progressBar} progress={0.25} color={Colors.green500} />
      <Text style={Events.centeredText} >2 of 8</Text>
      <Text style={Events.primaryHeading} >When is your event?</Text>
      <View style={Events.dateInputContainer}>
        <Pressable onPress={showDatePicker}>
          <Text style={Events.dateInputButton}>{datePickerText}</Text>
        </Pressable>

        {/* <Button title="Show Date Picker" onPress={showDatePicker} style={Events.dateInputButton} /> */}
        {/* <TextInput
          defaultValue={date}
          style={Events.textInput}
          onFocus={showDatePicker}
          onChangeText={(text) => onChangeDate(text)}
          date={date}
        /> */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          locale="en_GB"
          onChange={ date => onChange.setState({ date }) }
        />
      </View>

    </View>
  );
};
