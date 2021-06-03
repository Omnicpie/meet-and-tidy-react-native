import React, { ReactElement } from 'react';
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import Main from "../assets/stylesheets/Main";

type OrganisingScreenProps = {
  navigation: any;
};

function OrganisingScreen({ navigation }: OrganisingScreenProps): ReactElement {
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
