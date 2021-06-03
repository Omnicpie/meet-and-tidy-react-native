import React, { ReactElement } from 'react';
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import Main from "../assets/stylesheets/Main";

type SafetyDisclaimerScreenProps = {
  navigation: any;
};

export default function SafetyDisclaimerScreen({ navigation }: SafetyDisclaimerScreenProps): ReactElement {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <View>
          <Text style={Main.regHeading}>Safety Disclaimer</Text>
          <Text style={Main.regSubheading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
