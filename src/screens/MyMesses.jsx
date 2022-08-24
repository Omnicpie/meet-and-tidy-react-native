import React, { ReactElement } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import Main from '../assets/stylesheets/Main';

function MyMessesScreen({ navigation }) {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <View>
          <Text style={Main.regHeading}>MyMesses</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MyMessesScreen;
