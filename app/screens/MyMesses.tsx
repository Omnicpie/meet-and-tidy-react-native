import React, { ReactElement } from 'react';
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import BottomNavBar from "../components/BottomNavBar";
import Main from "../assets/stylesheets/Main";

type MyMessesScreenProps = {
  navigation: any;
};

function MyMessesScreen({ navigation }: MyMessesScreenProps): ReactElement {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <View>
          <Text style={Main.regHeading}>MyMesses</Text>
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default MyMessesScreen;
