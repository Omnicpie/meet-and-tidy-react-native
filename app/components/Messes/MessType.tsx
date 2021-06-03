import React, { ReactElement } from 'react';
import { SafeAreaView, Text, View} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import MessTypeSelectButtons from './MessTypeSelectButtons';
import Events from '../../assets/stylesheets/Events';
import Main from '../../assets/stylesheets/Main';

type MessTypeProps = {
  messType: string;
  onChangeMessType: (messType: string) => void;
  onNext: () => void;
};

export default function MessType({ messType, onChangeMessType, onNext }: MessTypeProps): ReactElement {
  function validateInput() {
    if (messType.length > 3 && typeof messType === 'string') {
      onNext();
    } else {
      alert('Please select a mess type.');
    }
  }

  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.333} color={Colors.green500} />
        <Text style={Events.centeredText}>2 of 6</Text>
        <View>
          <Text style={Events.primaryHeading}>What type of mess?</Text>
          <Text style={Main.tellUsMore}>Don't see the correct type of mess? {"\n"} Select 'Other'.</Text>
        </View>
        <MessTypeSelectButtons
          messTypes={messType}
          onChangeMessTypes={onChangeMessType}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
