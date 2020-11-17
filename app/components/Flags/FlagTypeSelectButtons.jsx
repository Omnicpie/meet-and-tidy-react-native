import React from 'react';
import {
  SafeAreaView, Button,
} from 'react-native';

export default function FlagTypeSelectButtons({
  flagType, onChangeFlagType
} = props) {
  return (
    // TODO this currently only selects the last one from the list
    <SafeAreaView>
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
      <Button
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
    </SafeAreaView>
  );
}
