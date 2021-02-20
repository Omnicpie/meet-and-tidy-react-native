import React from 'react';
import { View, Image } from 'react-native';
import Main from '../assets/stylesheets/Main';

type EventImageProps = {
  imageUrl: string
};

export default function EventImage({ imageUrl }: EventImageProps): JSX.Element {
  return (
    <View>
      <Image
        style={Main.apiImage}
        source={{ uri: imageUrl }}
      />
    </View>
  );
}
