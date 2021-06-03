import React, { ReactElement } from 'react';
import { View, Image } from 'react-native';
import Main from '../assets/stylesheets/Main';

type EventOrMessImageProps = {
  imageUrl: string
};

export default function EventOrMessImage({ imageUrl }: EventOrMessImageProps): ReactElement {
  return (
    <View>
      <Image
        style={Main.apiImage}
        source={{ uri: imageUrl }}
      />
    </View>
  );
}
