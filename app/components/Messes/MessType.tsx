import React, { ReactElement } from 'react';
import {
  Text, SafeAreaView, View,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import MessTypeSelectButtons from './MessTypeSelectButtons';
import Events from '../../assets/stylesheets/Events';
import Main from '../../assets/stylesheets/Main';
import NextPreviousButtons from '../NextPreviousButtons';
import { ApiMessType } from '../../../ApiTypes';

type MessTypeProps = {
  messType: ApiMessType;
  onChangeMessType: (messType: ApiMessType) => void;
  onNext: () => void;
  onPrevious: () => void;
  route: any;
};

export default function MessType({
  messType, onChangeMessType, onNext, onPrevious, route,
}: MessTypeProps): ReactElement {
  function validateInput() {
    if (messType !== null) {
      onNext();
    } else {
      alert('Please select an event type.');
    }
  }

  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.375} color={Colors.green500} />
        <Text style={Events.centeredText}>3 of 8</Text>
        <View>
          <Text style={Events.primaryHeading}>What type of mess is it?</Text>
          <Text style={Main.tellUsMore}>Don't see the correct type of mess? {"\n"} Select 'Other'.</Text>
        </View>
        <MessTypeSelectButtons
          messType={messType}
          onChangeMessType={onChangeMessType}
          route={route}
        />
        <NextPreviousButtons
          onPrevious={onPrevious}
          onNext={validateInput}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
