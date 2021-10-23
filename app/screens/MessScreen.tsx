import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View, ScrollView } from 'react-native'
import Request from '../helpers/Request'
import Messes from '../assets/stylesheets/Messes'

function MessScreen (props) {
  const messId = props.route.params
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    new Request('GET', `/messes/${messId}`).make()
      .then((response) => response.json())
      .then((json) => {
        setData(json[0])
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        {isLoading
          ? <ActivityIndicator />
          : (
          <View>
            <Text style={Messes.primaryHeading}>{data.title}</Text>
            <Text style={Messes.paragraph}>{data.description}</Text>
          </View>
            )}
      </ScrollView>
    </SafeAreaView>
  )
}
