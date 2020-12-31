import React, { ReactElement } from 'react';
import {
  ScrollView, SafeAreaView, View, Text,
} from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import Activities from '../assets/stylesheets/Activities';
import Main from '../assets/stylesheets/Main';

type MyActivitiesScreenProps = {
  navigation: any;
};

function MyActivitiesScreen({ navigation }: MyActivitiesScreenProps): ReactElement {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView style={Activities.scrollContainer}>
        <Text style={Main.primaryHeading}>My Activities</Text>
        <View style={Activities.even}>
          <Text style={Activities.subheading}>Events I’m Attending</Text>
          <Text style={Activities.paragraph}>You’re not attending any events</Text>
        </View>
        <View style={Activities.odd}>
          <Text style={Activities.subheading}>Events I’m Organising</Text>
          <Text style={Activities.paragraph}>You’re not organising any events</Text>
        </View>
        <View style={Activities.even}>
          <Text style={Activities.subheading}>Messes I’ve Flagged</Text>
          <Text style={Activities.paragraph}>1</Text>
        </View>
        <View style={Activities.odd}>
          <Text style={Activities.subheading}>Your badges</Text>
          <Text style={Activities.paragraph}>You don’t have any badges at the moment</Text>
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default MyActivitiesScreen;
