import React, { useState, useEffect } from "react";
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
import ErrorPanel from "./ErrorPanel";

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

export default function PopularEventScroll({ navigation }) {
  const { data, error, loading, refetch } = useQuery(POPULAR_EVENTS_QUERY);

  const [popularEvents, setPopularEvents] = useState([]);

  useEffect(() => {
    if (data) {
      const sortedEvents = data.events.slice().sort((eventA, eventB) => {
        if (eventA.attendances.length > eventB.attendances.length) {
          return 1;
        }
        if (eventB.attendances.length > eventA.attendances.length) {
          return -1;
        }
        if (eventA.attendances.length === eventB.attendances.length) {
          return 0;
        }
      });
      setPopularEvents(sortedEvents.reverse());
    }
  }, [loading, data]);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />;
  }

  function firstImage(event) {
    const url = event.imageUrls.length ? event.imageUrls[0] : null;

    return <ApiImage imageUrl={url} />;
  }

  return (
    <View style={Main.scrollerContainer}>
      <Text style={Main.scrollerTitle}>Popular events</Text>
      <View>
        <FlatList
          data={popularEvents}
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
