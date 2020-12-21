import React from 'react';
import { SafeAreaView, Button, View } from 'react-native';
import Flags from '../../assets/stylesheets/Flags';

export default function FlagTypeSelectButtons({
  flagType, onChangeFlagType
} = props) {
  return (
    // TODO this currently only selects the last one from the list
    <SafeAreaView style={Flags.flagTypeContainer}>
      <View style={Flags.buttonContianer}>
        <Button
          color="#54ae33"
          onPress={onChangeFlagType(flagType)}
          flagType="Park"
          title="Park"
        />
        <Button
          color="#54ae33"
          onPress={onChangeFlagType('Canal')}
          flagType="Canal"
          title="Canal"
        />
        <Button
          color="#54ae33"
          onPress={onChangeFlagType('Beach')}
          flagType="Beach"
          title="Beach"
        />
      </View>
      <View style={Flags.buttonContianer}>
        <Button
          color="#54ae33"
          style={Flags.typeElement}
          onPress={onChangeFlagType('Street')}
          flagType="Street"
          title="Street"
        />
        <Button
          color="#54ae33"
          onPress={onChangeFlagType('Woodland')}
          flagType="Woodland"
          title="Woodland"
        />
        <Button
          color="#54ae33"
          onPress={onChangeFlagType('Cemetery')}
          flagType="Cemetery"
          title="Cemetery"
        />
      </View>
    </SafeAreaView>
  );
}
