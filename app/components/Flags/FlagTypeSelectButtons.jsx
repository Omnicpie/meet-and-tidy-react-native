import React from 'react';
import { SafeAreaView, Button, View, TouchableOpacity, Text } from 'react-native';
import Flags from '../../assets/stylesheets/Flags';

export default function FlagTypeSelectButtons({
  flagType, onChangeFlagType
} = props) {
  return (
    // TODO this currently only selects the last one from the list
    <SafeAreaView style={Flags.flagTypeContainer}>
      <View style={Flags.buttonContianer}>
        <TouchableOpacity
          onPress={onChangeFlagType('Park')}
          flagType="Park"
          style={Flags.flagTypeButton}>
            <Text style={Flags.flagTypeButtonText}>Park</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={onChangeFlagType('Canal')}
          flagType="Canal"
          style={Flags.flagTypeButton}>
            <Text style={Flags.flagTypeButtonText}>Canal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onChangeFlagType('Beach')}
          flagType="Beach"
          style={Flags.flagTypeButton}>
            <Text style={Flags.flagTypeButtonText}>Beach</Text>
        </TouchableOpacity>
      </View>
      <View style={Flags.buttonContianer}>
        <TouchableOpacity
          onPress={onChangeFlagType('Street')}
          flagType="Street"
          style={Flags.flagTypeButton}>
            <Text style={Flags.flagTypeButtonText}>Street</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onChangeFlagType('Woodland')}
          flagType="Woodland"
          style={Flags.flagTypeButton}>
            <Text style={Flags.flagTypeButtonText}>Woodland</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onChangeFlagType('Cemetery')}
          flagType="Cemetery"
          style={Flags.flagTypeButton}>
            <Text style={Flags.flagTypeButtonText}>Cemetery</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
