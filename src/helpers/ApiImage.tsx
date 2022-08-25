import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import Main from "../assets/stylesheets/Main";
import { ROOT_URL } from "../config/config";

type EventOrMessImageProps = {
  imageUrl: string | null;
};

export default function EventOrMessImage({
  imageUrl,
}: EventOrMessImageProps): ReactElement {
  const getUrl = () => {
    return `${ROOT_URL}${imageUrl}`;
  };

  return (
    <View>
      {imageUrl ? (
        <Image style={Main.apiImage} source={{ uri: getUrl() }} />
      ) : (
        <View style={Main.apiMissingImage} />
      )}
    </View>
  );
}
