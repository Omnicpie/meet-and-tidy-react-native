import React from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import Main from '../assets/stylesheets/Main';

function OrganisingScreen({ navigation }) {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <View>
          <Text style={Main.regHeading}>Organising</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OrganisingScreen;
