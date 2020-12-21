import React from 'react';
import { View, Button, SafeAreaView } from 'react-native';
import Events from '../../assets/stylesheets/Events'

export default function FacilityTypeSelectButtons({
  onChangeFacilityType,
} = props) {
  return (
  // TODO this currently only selects the last one from the list
    <SafeAreaView style={Events.flagTypeContainer}>
    <View style={Events.buttonContianer}>
      <Button
        color="#54ae33"
        onPress={onChangeFacilityType('Disabled Access')}
        facilityType="Disabled Access"
        title="Disabled Access"
      />
      <Button
        color="#54ae33"
        onPress={onChangeFacilityType('Child Friendly')}
        facilityType="Child Friendly"
        title="Child Friendly"
      />
    </View>
    <View style={Events.buttonContianer}>
      <Button
        color="#54ae33"
        onPress={onChangeFacilityType('Toilets Nearby')}
        facilityType="Toilets Nearby"
        title="Toilets Nearby"
      />
      <Button
        color="#54ae33"
        onPress={onChangeFacilityType('Parking Nearby')}
        facilityType="Parking Nearby"
        title="Parking Nearby"
      />
    </View>
    <View style={Events.buttonContianer}>
      <Button
        color="#54ae33"
        onPress={onChangeFacilityType('First Aiders')}
        facilityType="First Aiders"
        title="First Aiders"
      />
      <Button
        color="#54ae33"
        onPress={onChangeFacilityType('Transport Routes Nearby')}
        facilityType="Transport Routes Nearby"
        title="Transport Routes Nearby"
      />
    </View>
    <View style={Events.buttonContianer}>
      <Button
        color="#54ae33"
        onPress={onChangeFacilityType('Other')}
        facilityType="Other"
        title="Other"
      />
    </View>
  </SafeAreaView>
  );
}
