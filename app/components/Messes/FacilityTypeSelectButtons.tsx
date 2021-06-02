import React from 'react';
import { SafeAreaView, Button, View } from 'react-native';
import Messes from '../../assets/stylesheets/Messes';

export default function FacilityTypeSelectButtons({
  onChangeFacilityType,
} = props) {
  return (
  // TODO this currently only selects the last one from the list

    <SafeAreaView style={Messes.messTypeContainer}>
      <View style={Messes.buttonContianer}>
        <Button
          onPress={onChangeFacilityType('Disabled Access')}
          facilityType="Disabled Access"
          title="Disabled Access"
        />
        <Button
          onPress={onChangeFacilityType('Child Friendly')}
          facilityType="Child Friendly"
          title="Child Friendly"
        />
        <Button
          onPress={onChangeFacilityType('Toilets Nearby')}
          facilityType="Toilets Nearby"
          title="Toilets Nearby"
        />
      </View>
      <View style={Messes.buttonContianer}>
        <Button
          onPress={onChangeFacilityType('Parking Nearby')}
          facilityType="Parking Nearby"
          title="Parking Nearby"
        />
        <Button
          onPress={onChangeFacilityType('First Aiders')}
          facilityType="First Aiders"
          title="First Aiders"
        />
      </View>
      <View style={Messes.buttonContianer}>
        <Button
          onPress={onChangeFacilityType('Transport Routes Nearby')}
          facilityType="Transport Routes Nearby"
          title="Transport Routes Nearby"
        />
        <Button
          onPress={onChangeFacilityType('Other')}
          facilityType="Other"
          title="Other"
        />
      </View>
    </SafeAreaView>
  );
}
