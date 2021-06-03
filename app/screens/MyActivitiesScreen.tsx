import React, { ReactElement } from 'react';
import { Pressable, ScrollView, SafeAreaView, Text, View } from 'react-native';
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
        <Pressable
          style={Activities.even}
          onPress={() => navigation.navigate('Attending')}
        >
          <View >
            <Text style={Activities.subheading}>Events I’m Attending</Text>
            <Text style={Activities.paragraph}>You’re not attending any events</Text>
          </View>
        </Pressable>
        <Pressable
          style={Activities.odd}
          onPress={() => navigation.navigate('Organising')}
        >
          <View>
            <Text style={Activities.subheading}>Events I’m Organising</Text>
            <Text style={Activities.paragraph}>You’re not organising any events</Text>
          </View>
        </Pressable>
        <Pressable
          style={Activities.even}
          onPress={() => navigation.navigate('MyMesses')}
        >
          <View>
            <Text style={Activities.subheading}>Messes I've logged</Text>
            <Text style={Activities.paragraph}>1</Text>
          </View>
        </Pressable>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default MyActivitiesScreen;
