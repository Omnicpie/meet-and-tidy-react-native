import { useReactiveVar } from '@apollo/client'
import React, { ReactElement } from 'react'
import { Pressable, ScrollView, SafeAreaView, Text, View } from 'react-native'
import Activities from '../assets/stylesheets/Activities'
import Main from '../assets/stylesheets/Main'

type MyActivitiesScreenProps = {
  navigation: any;
};

function MyActivitiesScreen ({ navigation }: MyActivitiesScreenProps): ReactElement {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView style={Activities.scrollContainer}>
        <Pressable
          style={Activities.even}
          onPress={() => navigation.navigate('Attending')}
        >
          <View>
            <Text style={Activities.subheading}>Events I’m Attending</Text>
          </View>
        </Pressable>
        <Pressable
          style={Activities.odd}
          onPress={() => navigation.navigate('Organising')}
        >
          <View>
            <Text style={Activities.subheading}>Events I’m Organising</Text>
          </View>
        </Pressable>
        <Pressable
          style={Activities.even}
          onPress={() => navigation.navigate('MyMesses')}
        >
          <View>
            <Text style={Activities.subheading}>Messes I've logged</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MyActivitiesScreen
