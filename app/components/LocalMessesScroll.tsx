import React, { ReactElement } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import ApiImage from '../helpers/ApiImage';
import { dayOfMonth, shortMonthName } from '../helpers/DateHelpers';
import Main from '../assets/stylesheets/Main';

import { ApiMess } from '../../ApiTypes';
import ErrorPanel from './ErrorPanel';

type LocalMessesScrollProps = {
  navigation: any;
};

const LOCAL_MESSES_QUERY = gql`
  query LocalMessess {
    messes {
      id
      name
      description
      location
      imageUrls
      createdAt
    }
  }
`;

export default function LocalMessesScroll({ navigation }: LocalMessesScrollProps): ReactElement {
  const {
    data, error, loading, refetch,
  } = useQuery(LOCAL_MESSES_QUERY);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />;
  }

  function firstImage(mess: ApiEvent) {
    if (mess.imageUrls.length) {
      return <ApiImage imageUrl={mess.imageUrls[0]} />;
    }
    return null;
  }

  return (
    <View style={Main.popularEventsContainer}>
      <Text style={Main.popularEventsTitle}>Local messes</Text>
      <View>
        <FlatList<ApiMess>
          data={data.messes}
          horizontal
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate('Mess', { id: item.id })}>
              <View style={Main.popularEventsTile}>
                {firstImage(item)}
                <View style={Main.popularEventsTileLower}>
                  <View style={Main.popularEventsTileLeft}>
                    <Text style={Main.date}>{dayOfMonth(item.createdAt)}</Text>
                    <Text style={Main.month}>{shortMonthName(item.createdAt)}</Text>
                  </View>
                  <View style={Main.popularEventsTileRight}>
                    <Text style={Main.eventTitle}>
                      {item.name}
                    </Text>
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
