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
          onPress={onChangeFlagType(flagType)}
          flagType="Park"
          title="Park"
        />
        <Button
          onPress={onChangeFlagType('Canal')}
          flagType="Canal"
          title="Canal"
        />
        <Button
          onPress={onChangeFlagType('Beach')}
          flagType="Beach"
          title="Beach"
        />
      </View>
      <View style={Flags.buttonContianer}>
        <Button
<<<<<<< Updated upstream
          style={Flags.typeElement}
=======
          backgroundColor={rgb(84, 174, 51)}
>>>>>>> Stashed changes
          onPress={onChangeFlagType('Street')}
          flagType="Street"
          title="Street"
        />
        <Button
          onPress={onChangeFlagType('Woodland')}
          flagType="Woodland"
          title="Woodland"
        />
        <Button
          onPress={onChangeFlagType('Cemetery')}
          flagType="Cemetery"
          title="Cemetery"
        />
      </View>
    </SafeAreaView>
  );
}
