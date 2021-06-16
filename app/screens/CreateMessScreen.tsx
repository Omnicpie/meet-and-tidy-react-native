import React, { ReactElement, useState } from 'react';
import { ApolloError, gql, useMutation } from '@apollo/client';
import {
  View, SafeAreaView, Button,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MessLocation from '../components/Messes/MessLocation';
import MessType from '../components/Messes/MessType';
import MessTitle from '../components/Messes/MessTitle';
import MessDescription from '../components/Messes/MessDescription';
import MessImage from '../components/Messes/MessImage';
import MessPreview from '../components/Messes/MessPreview';
import Events from '../assets/stylesheets/Events';

type CreateMessScreenProps = {
  navigation: any;
  route: any;
};

function CreateMessScreen({ navigation, route }: CreateMessScreenProps): ReactElement {
  const [title, onChangeTitle] = useState('');
  const [description, onChangeDescription] = useState('');
  const [location, onChangeLocation] = useState('');
  const [messType, onChangeMessType] = useState('');
  const [image, onChangeImage] = useState('');
  const [imagePreview, onChangeImagePreview] = useState('');
  const [screen, setScreen] = useState(1);

  const CREATE_MESS = gql`
  mutation CreateMess($description: String, $messTypeId: ID!, $location: String, $title: String!) {
    createMess(description: $description, messTypeId: $messTypeId, location: $location, title: $title) {
      errors
    }
  }
  `;

  const responses = {
    onCompleted(data: any) {
      console.log(data);
      if (data.createMess.errors.length) {
        console.log('completed with errors');
        console.log(data.createMess.errors);
      } else {
        console.log('completed without errors');
        navigation.navigate('HomeScreen');
      }
    },
    onError(_error: ApolloError) {
      console.log(_error);
    },
  };

  const [createMess, _messResult] = useMutation(CREATE_MESS, responses);

  function createMessAndProceed() {
    createMess({
      variables: {
        description, messTypeId: messType.id, location, title,
      },
    });
  }

  function onNext() {
    setScreen(screen + 1);
  }

  function onPrevious() {
    setScreen(screen - 1);
  }

  function currentScreen() {
    switch (screen) {
      case 1:
        return (
          <View>
            <MessLocation
              location={location}
              onChangeLocation={onChangeLocation}
              onNext={onNext}
            />
          </View>
        );
      case 2:
        return (
          <View>
            <MessType
              messType={messType}
              onChangeMessType={onChangeMessType}
              onNext={onNext}
              onPrevious={onPrevious}
              route={route}
            />
          </View>
        );
      case 3:
        return (
          <View>
            <MessTitle
              title={title}
              onChangeTitle={onChangeTitle}
              onNext={onNext}
              onPrevious={onPrevious}
              location={location}
              messType={messType}
            />
          </View>
        );
      case 4:
        return (
          <View>
            <MessDescription
              description={description}
              onChangeDescription={onChangeDescription}
              onNext={onNext}
              onPrevious={onPrevious}
            />
          </View>
        );
      case 5:
        return (
          <View>
            <MessImage
              image={image}
              onChangeImage={onChangeImage}
              onChangeImagePreview={onChangeImagePreview}
              onNext={onNext}
              onPrevious={onPrevious}
            />
          </View>
        );
      case 6:
        return (
          <View>
            <MessPreview
              title={title}
              description={description}
              location={location}
              messType={messType}
              image={image}
              imagePreview={imagePreview}
              onPrevious={onPrevious}
              navigation={navigation}
            />
            <View style={Events.buttonContainer}>
              <View style={Events.buttonElement}>
                <Button
                  onPress={onPrevious}
                  title="Previous"
                />
                <Button
                  onPress={createMessAndProceed}
                  title="Save"
                />
              </View>
            </View>
          </View>
        );
      default:
        return (<> </>);
    }
  }
  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        {currentScreen()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreateMessScreen;
