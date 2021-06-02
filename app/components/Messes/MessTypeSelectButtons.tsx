import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import Messes from '../../assets/stylesheets/Messes';

export default function MessTypeSelectButtons({
  messType, onChangeMessType
} = props) {
  return (
    // TODO this currently only selects the last one from the list
    <SafeAreaView style={Messes.messTypeContainer}>
      <View style={Messes.buttonContianer}>
        <TouchableOpacity
          onPress={onChangeMessType('Park')}
          messType="Park"
          style={Messes.messTypeButton}>
            <Text style={Messes.messTypeButtonText}>Park</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onChangeMessType('Canal')}
          messType="Canal"
          style={Messes.messTypeButton}>
            <Text style={Messes.messTypeButtonText}>Canal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onChangeMessType('Beach')}
          messType="Beach"
          style={Messes.messTypeButton}>
            <Text style={Messes.messTypeButtonText}>Beach</Text>
        </TouchableOpacity>
      </View>
      <View style={Messes.buttonContianer}>
        <TouchableOpacity
          onPress={onChangeMessType('Street')}
          messType="Street"
          style={Messes.messTypeButton}>
            <Text style={Messes.messTypeButtonText}>Street</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onChangeMessType('Woodland')}
          messType="Woodland"
          style={Messes.messTypeButton}>
            <Text style={Messes.messTypeButtonText}>Woodland</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onChangeMessType('Cemetery')}
          messType="Cemetery"
          style={Messes.messTypeButton}>
            <Text style={Messes.messTypeButtonText}>Cemetery</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
