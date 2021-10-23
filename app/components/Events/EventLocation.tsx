import React from 'react'
import {
  Button, Text, View, TextInput, SafeAreaView
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ProgressBar, Colors } from 'react-native-paper'
import Events from '../../assets/stylesheets/Events'
import Main from '../../assets/stylesheets/Main'
import PossibleMapView from '../PossibleMapView'

export default function EventLocation ({
  location, onChangeLocation, onNext
} = props) {
  function validateInput () {
    if (location.length > 2) {
      onNext()
    } else {
      alert('Please enter a location name that is at least 3 characters long.')
    }
  }

  const region = {
    latitude: 54.3781,
    longitude: -3,
    latitudeDelta: 9,
    longitudeDelta: 9
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.1} color={Colors.green500} />
        <Text style={Events.centeredText}>1 of 8</Text>
        <View>
          <Text style={Events.primaryHeading}>Where is your event?</Text>
          <Text style={Main.tellUsMore}>Tell us where your event will be held.</Text>
        </View>
        <TextInput
          defaultValue={location}
          style={Events.textInput}
          onChangeText={(text) => onChangeLocation(text)}
          location={location}
          value={location}
          clearButtonMode="while-editing"
        />
        <View style={Events.container}>
          <PossibleMapView
            region={region}
          />
        </View>
        <View style={Events.buttonContainer} marginBottom={75}>
          <Button
            onPress={validateInput}
            title="Next"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
