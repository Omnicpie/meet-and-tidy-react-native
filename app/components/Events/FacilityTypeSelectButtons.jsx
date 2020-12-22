import React from 'react';
import { View, Button, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Events from '../../assets/stylesheets/Events'

export default function FacilityTypeSelectButtons({
  onChangeFacilityType,
} = props) {
  return (
  // TODO this currently only selects the last one from the list
    <SafeAreaView style={Events.flagTypeContainer}>
    <View style={Events.buttonContianer}>
      <TouchableOpacity
        onPress={onChangeFacilityType('Disabled Access')}
        facilityType="Disabled Access"
        style={Events.eventTypeButton}>
          <Text style={Events.eventTypeButtonText}>Disabled Access</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onChangeFacilityType('Child Friendly')}
        facilityType="Child Friendly"
        style={Events.eventTypeButton}>
          <Text style={Events.eventTypeButtonText}>Child Friendly</Text>
      </TouchableOpacity>
    </View>
    <View style={Events.buttonContianer}>
      <TouchableOpacity
        onPress={onChangeFacilityType('Toilets Nearby')}
        facilityType="Toilets Nearby"
        style={Events.eventTypeButton}>
          <Text style={Events.eventTypeButtonText}>Toilets Nearby</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onChangeFacilityType('Parking Nearby')}
        facilityType="Parking Nearby"
        style={Events.eventTypeButton}>
          <Text style={Events.eventTypeButtonText}>Parking Nearby</Text>
      </TouchableOpacity>
    </View>
    <View style={Events.buttonContianer}>
      <TouchableOpacity
        onPress={onChangeFacilityType('First Aiders')}
        facilityType="First Aiders"
        style={Events.eventTypeButton}>
          <Text style={Events.eventTypeButtonText}>First Aiders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onChangeFacilityType('Transport Routes Nearby')}
        facilityType="Transport Routes Nearby"
        style={Events.eventTypeButton}>
          <Text style={Events.eventTypeButtonText}>Transport Routes Nearby</Text>
      </TouchableOpacity>
    </View>
    <View style={Events.buttonContianer}>
      <TouchableOpacity
        onPress={onChangeFacilityType('Other')}
        facilityType="Other"
        style={Events.eventTypeButton}>
          <Text style={Events.eventTypeButtonText}>Other</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
}
