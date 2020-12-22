import React, { useState } from "react";
import { TextInput, Text, View, Button } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Events from '../../assets/stylesheets/Events';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function EventDate({
  date, onChangeDate, onNext,
} = props) {
  function validateInput() {
    if (date.length > 6 && typeof date === 'string') {
      onNext();
    } else {
      alert(`Please enter a valid date, "${date}" needs to be at least 5 characters long.`);
    }
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View style={Events.mainContainer}>
      <ProgressBar style={Events.progressBar} progress={0.25} color={Colors.green500} />
      <Text style={Events.centeredText} >2 of 8</Text>
      <Text style={Events.primaryHeading} >When is your event?</Text>
      <View>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          locale="en_GB"
        />
      </View>
      <TextInput
        defaultValue={date}
        style={Events.textInput}
        onChangeText={(text) => onChangeDate(text)}
        date={date}
      />
    </View>
  );
};
