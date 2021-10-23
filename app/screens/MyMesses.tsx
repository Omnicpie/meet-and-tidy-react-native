import React, { ReactElement } from 'react'
import { SafeAreaView, Text, View, ScrollView } from 'react-native'
import Main from '../assets/stylesheets/Main'

type MyMessesScreenProps = {
  navigation: any;
};

function MyMessesScreen ({ navigation }: MyMessesScreenProps): ReactElement {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <View>
          <Text style={Main.regHeading}>MyMesses</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MyMessesScreen
