import React, { ReactElement } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import Main from '../assets/stylesheets/Main';
import AttendingEvent from '../components/AttendingEvent';

function AttendingScreen({ navigation }) {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <View>
          <Text style={Main.regHeading}>Events you&apos;re attending</Text>
          <AttendingEvent navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AttendingScreen;
