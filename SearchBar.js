import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  return (
    <View>
        <FlatList>
            <Left>
                {/* <Thumbnail /> */}
            </Left>
            <Body>
                <Text>Name</Text>
                <Text note>Address</Text> 
            </Body>
        </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({

});
