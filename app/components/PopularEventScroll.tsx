import React, { ReactElement } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import { gql, useQuery } from "@apollo/client";
import ApiImage from "../helpers/ApiImage";
import { dayOfMonth, shortMonthName } from "../helpers/DateHelpers";
import Main from "../assets/stylesheets/Main";

import { ApiEvent } from "../../ApiTypes";
import ErrorPanel from "./ErrorPanel";

type PopularEventScrollProps = {
  navigation: any;
};

const POPULAR_EVENTS_QUERY = gql`
  query PopularEvents {
    events {
      id
      title
      description
      startsAt
      imageUrls
      attendances {
        eventId
        userId
      }
    }
  }
`;

export default function PopularEventScroll({
  navigation,
}: PopularEventScrollProps): ReactElement {
  const { data, error, loading, refetch } = useQuery(POPULAR_EVENTS_QUERY);

  if (loading) {
    return <ActivityIndicator />;
  }

  // Add attendences to query on this page and pull in events
  console.log(data.events);

  // Isolate the attendances array and order items based on which has the highest amount of userId's each
  data.events.map((event) => (
     console.log(event)
  ))}

  // Str

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />;
  }

  function firstImage(event: ApiEvent) {
    if (event.imageUrls.length) {
      return <ApiImage imageUrl={event.imageUrls[0]} />;
    }
    return null;
  }

  return (
    <View style={Main.scrollerContainer}>
      <Text style={Main.scrollerTitle}>Popular events</Text>
      <View>
        <FlatList<ApiEvent>
          data={data.events}
          horizontal
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => navigation.navigate("Event", { id: item.id })}
            >
              <View style={Main.scrollerTile}>
                {firstImage(item)}
                <View style={Main.scrollerTileLower}>
                  <View style={Main.scrollerTileLeft}>
                    <Text style={Main.date}>{dayOfMonth(item.startsAt)}</Text>
                    <Text style={Main.month}>
                      {shortMonthName(item.startsAt)}
                    </Text>
                  </View>
                  <View style={Main.scrollerTileRight}>
                    <Text style={Main.eventTitle}>{item.title}</Text>
                    <Text style={Main.eventDescription} numberOfLines={1}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}
