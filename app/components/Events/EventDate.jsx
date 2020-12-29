import React, { useState } from 'react';
import { Text, View, Button, Pressable, Keyboard } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Events from '../../assets/stylesheets/Events';

export default function EventDate({
  onChangeDate, onNext, onPrevious,
} = props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePickerText, setDatePickerText] = useState('Select a date');

  const validateInput = () => {
    if (datePickerText !== 'Select a date') {
      onNext();
    } else {
      alert('Please enter a valid date.');
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = String(date);

    setDatePickerText(formattedDate);
    onChangeDate(formattedDate);
    hideDatePicker();
  };

  const handleCancel = () => {
    Keyboard.dismiss();
    hideDatePicker();
  };

  return (
    <View style={Events.mainContainer}>
      <ProgressBar style={Events.progressBar} progress={0.25} color={Colors.green500} />
      <Text style={Events.centeredText}>2 of 8</Text>
      <Text style={Events.primaryHeading}>When is your event?</Text>
      <View style={Events.dateInputContainer}>
        <Pressable onPress={showDatePicker}>
          <Text style={Events.dateInputButton}>{datePickerText}</Text>
        </Pressable>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          minimumDate={new Date()}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          locale="en_GB"
        />
      </View>
      <View style={Events.buttonContianer} marginBottom={75}>
        <Button
          onPress={onPrevious}
          title="Previous"
        />
        <Button
          onPress={validateInput}
          title="Next"
        />
      </View>
    </View>
  );
}
