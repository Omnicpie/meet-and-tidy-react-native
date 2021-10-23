import React from 'react'
import { ActivityIndicator, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { gql, useQuery } from '@apollo/client'
import ApiImage from '../helpers/ApiImage'
import Messes from '../assets/stylesheets/Messes'
import ErrorPanel from '../components/ErrorPanel'
import { ApiMess } from '../../ApiTypes'
import { dayOfMonth, shortMonthName, fullYear } from '../helpers/DateHelpers'

type MessDetailScreenProps = {
  navigation: any;
  route: any;
}

const MESS_QUERY = gql`
  query Mess($id: ID!) {
    mess(id: $id) {
      id
      title
      description
      createdAt
      imageUrls
      location
    }
  }
`

function MessDetailScreen ({ navigation, route } : MessDetailScreenProps) {
  const { id } = route.params
  const {
    data, error, loading, refetch
  } = useQuery(MESS_QUERY, { variables: { id } })

  if (loading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />
  }

  function firstImage (mess: ApiMess) {
    if (mess.imageUrls.length) {
      return <ApiImage imageUrl={mess.imageUrls[0]} />
    }
    return null
  }

  const { mess } = data

  return (
    <SafeAreaView style={Messes.mainPreviewContainer}>
      <ScrollView>
        <View>
          <View>
            {firstImage(mess)}
            <Text style={Messes.paragraph}>{mess.mess_type}</Text>
          </View>
          <View>
            <Text style={Messes.detailPrimaryHeading}>{mess.title}</Text>
            <Text style={Messes.detailSecondaryHeading}>{mess.messType}</Text>
            <Text style={Messes.paragraph}>{mess.description}</Text>
          </View>
          <View>
            <Text style={Messes.subheading}>
              Logged on:
              {` ${dayOfMonth(mess.createdAt)} ${shortMonthName(mess.createdAt)} ${fullYear(mess.createdAt)}`}
            </Text>
          </View>
          <View>
            <Text style={Messes.subheading}>Location</Text>
            <Text style={Messes.infoTile}>{mess.location}</Text>
          </View>
          <View style={Messes.attendMessButtonContainer}>
            <Pressable onPress={() => navigation.navigate('Registration')}>
              <Text style={Messes.attendMessButton}>Claim</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MessDetailScreen
