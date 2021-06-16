import React, { ReactElement } from 'react';
import { Text, SafeAreaView, View} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import EventTypeSelectButtons from './EventTypeSelectButtons';
import Events from '../../assets/stylesheets/Events';
import Main from '../../assets/stylesheets/Main';
import NextPreviousButtons from '../NextPreviousButtons';
import { ApiEventType } from '../../../ApiTypes';

type EventTypeProps = {
  eventType: ApiEventType;
  onChangeEventType: (eventType: ApiEventType) => void;
  onNext: () => void;
  onPrevious: () => void;
  route: any;
};

export default function EventType({
  eventType, onChangeEventType, onNext, onPrevious, route,
}: EventTypeProps): ReactElement {
  function validateInput() {
    if (eventType !== null) {
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
          <Text style={Events.primaryHeading}>What type of event is it?</Text>
          <Text style={Main.tellUsMore}>
            Don't see the correct type of event? {'\n'} Select 'Other'.
          </Text>
        </View>
        <EventTypeSelectButtons
          eventType={eventType}
          onChangeEventType={onChangeEventType}
          route={route}
        />
        <NextPreviousButtons onPrevious={onPrevious} onNext={validateInput} />
      </ScrollView>
    </SafeAreaView>
  );
}
