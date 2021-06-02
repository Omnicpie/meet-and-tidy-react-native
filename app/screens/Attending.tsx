import React, { ReactElement } from 'react';
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import BottomNavBar from "../components/BottomNavBar";
import Main from "../assets/stylesheets/Main";

type AttendingScreenProps = {
  navigation: any;
};

function AttendingScreen({ navigation }: AttendingScreenProps): ReactElement {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <View>
          <Text style={Main.regHeading}>Attending</Text>
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default AttendingScreen;
