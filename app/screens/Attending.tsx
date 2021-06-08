import React, { ReactElement } from 'react';
import {
  SafeAreaView, Text, View, ScrollView,
} from 'react-native';
import Main from '../assets/stylesheets/Main';
import AttendingEvent from '../components/AttendingEvent';

type AttendingScreenProps = {
  navigation: unknown;
};

function AttendingScreen({ navigation }: AttendingScreenProps): ReactElement {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <View>
          <Text style={Main.regHeading}>Attending</Text>
          <AttendingEvent
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AttendingScreen;
