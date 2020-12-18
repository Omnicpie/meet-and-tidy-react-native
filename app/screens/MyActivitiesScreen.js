import React from 'react';
import { ScrollView, SafeAreaView, View, Text } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import Main from '../assets/stylesheets/Main';

function MyActivitiesScreen({ navigation }) {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <View>
          <Text style={Main.subheading}>Events I'm Attending</Text>
          <Text style={Main.paragraph}>You're not attending any events</Text>
        </View>
        <View>
          <Text style={Main.subheading}>Events I'm Organising</Text>
          <Text style={Main.paragraph}>You're not organising any events</Text>
        </View>
        <View>
          <Text style={Main.subheading}>Messes I've Flagged</Text>
          <Text style={Main.paragraph}>1</Text>
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default MyActivitiesScreen;
