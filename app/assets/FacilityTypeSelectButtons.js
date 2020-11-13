import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';

export default function FacilityTypeSelectButtons({
  onChangeFacilityType
} = props) {

  return (

    <View>
      <Button
      onPress={onChangeFacilityType("Disabled Access")}
      facilityType="Disabled Access"
      title="Disabled Access"
      />
      <Button
        onPress={onChangeFacilityType("Child Friendly")}
        facilityType="Child Friendly"
        title="Child Friendly"
      />
      <Button
        onPress={onChangeFacilityType("Toilets Nearby")}
        facilityType="Toilets Nearby"
        title="Toilets Nearby"
      />
      <Button
        onPress={onChangeFacilityType("Parking Nearby")}
        facilityType="Parking Nearby"
        title="Parking Nearby"
      />
      <Button
        onPress={onChangeFacilityType("First Aiders")}
        facilityType="First Aiders"
        title="First Aiders"
      />
      <Button
        onPress={onChangeFacilityType("Transport Routes Nearby")}
        facilityType="Transport Routes Nearby"
        title="Transport Routes Nearby"
      />
      <Button
        onPress={onChangeFacilityType("Other")}
        facilityType="Other"
        title="Other"
      />
    </View>
  )
}
