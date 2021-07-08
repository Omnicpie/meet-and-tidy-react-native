import React, { ReactElement } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ProgressBar, Colors } from "react-native-paper";
import { ApiMessType } from "../../../ApiTypes";
import Events from "../../assets/stylesheets/Events";
import Main from "../../assets/stylesheets/Main";

type MessPreviewProps = {
  location: string;
  title: string;
  description: string;
  messType: ApiMessType;
  image: string;
};

export default function MessPreview({
  location,
  title,
  description,
  messType,
  image,
}: MessPreviewProps): ReactElement {
  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar
          style={Events.progressBar}
          progress={1}
          color={Colors.green500}
        />
        <Text style={Events.centeredText}>6 of 6</Text>
        <Text style={Events.previewHeading}>Preview mess</Text>
        {image !== "" && (
          <Image
            source={{ uri: `data:image/jpeg;base64,${image}` }}
            style={Events.imageSelected}
          />
        )}
        <Text style={Events.previewHeading}>{title}</Text>
        <Text style={Events.secondaryHeading}>{messType.name}</Text>
        <View>
          <Text style={Events.subheading}>Description</Text>
          <Text style={Events.paragraph}>{description}</Text>
        </View>
        <View>
          <Text style={Events.subheading}>Location</Text>
          <Text style={Main.mapPreviewTile}>{location}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
