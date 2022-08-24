import React, { ReactElement, useState } from 'react'
import {
  Text, View, Button, Pressable, Keyboard
} from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import Events from '../../assets/stylesheets/Events'

type EventDateProps = {
  date: string;
  onChangeDate: (date: string) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function EventDate ({
  date, onChangeDate, onNext, onPrevious
}: EventDateProps): ReactElement {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [datePickerText, setDatePickerText] = useState(date || 'Select a date')

  const validateInput = () => {
    if (datePickerText !== 'Select a date') {
      onNext()
    } else {
      alert('Please enter a valid date.')
    }
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (newDate: Date): void => {
    const formattedDate = String(newDate)
    hideDatePicker()

    setDatePickerText(formattedDate)
    onChangeDate(formattedDate)
  }

  const handleCancel = () => {
    Keyboard.dismiss()
    hideDatePicker()
  }

  const pickerDate = date === '' ? new Date() : new Date(date)

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
          date={pickerDate}
          isVisible={isDatePickerVisible}
          mode="datetime"
          minimumDate={new Date()}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          locale="en_GB"
        />
      </View>
      <View style={Events.buttonContainer}>
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
  )
}
