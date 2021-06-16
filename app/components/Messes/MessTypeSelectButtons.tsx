import { gql, useQuery } from '@apollo/client';
import React, { ReactElement } from 'react';
import {
  ActivityIndicator, FlatList, SafeAreaView, Text, TouchableOpacity, View,
} from 'react-native';
import { ApiMessType } from '../../../ApiTypes';
import Events from '../../assets/stylesheets/Events';
import Messes from '../../assets/stylesheets/Messes';
import ErrorPanel from '../ErrorPanel';

const MESS_TYPE_QUERY = gql`
  query MessTypes {
    messTypes {
      id
      name
    }
  }
`;

type MessTypeSelecProps = {
  messType: any;
  onChangeMessType: (messType: ApiMessType) => void;
};

export default function MessTypeSelectButtons({ messType, onChangeMessType }:
  MessTypeSelecProps): ReactElement {
  const {
    data, error, loading, refetch,
  } = useQuery(MESS_TYPE_QUERY);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />;
  }

  const isSelected = (messTypeId : number) => messType.id === messTypeId;

  const updateSelected = (selectedType : ApiMessType) => {
    onChangeMessType(selectedType);
    console.log(selectedType);
  };

  return (
    <SafeAreaView style={Events.mainContainer}>
      <View style={Events.buttonContainer}>
        <FlatList
          data={data?.messTypes}
          horizontal
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => updateSelected(item)}
              style={isSelected(item.id)
                ? Messes.messTypeButtonSelected : Messes.messTypeButton}
            >
              <Text
                style={isSelected(item.id)
                  ? Messes.messTypeButtonTextSelected : Messes.messTypeButtonText}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
