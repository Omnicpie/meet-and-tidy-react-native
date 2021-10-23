import React, { ReactElement } from 'react';
import { View, Image } from 'react-native';
import Main from '../assets/stylesheets/Main';

type EventOrMessImageProps = {
  imageUrl: string | null
};

export default function EventOrMessImage({ imageUrl }: EventOrMessImageProps): ReactElement {
  return (
    <View>
      {imageUrl ? (
        <Image
          style={Main.apiImage}
          source={{ uri: imageUrl }}
        />
      ) : (
        <View style={Main.apiMissingImage} />
      )}
    </View>
  );
}
