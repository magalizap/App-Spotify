import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
import { ApiSpotify } from '../data/api-spotify'

const HomeScreen = ({navigation}) => {

  const handleSelectedCategory = (items) => {
    navigation.navigate('Library', {
      PlaylistID: items.id,
      name: items.name
    })
  }

  const renderGridItem = ({items}) => (
    <GridItem items={items} onSelected={handleSelectedCategory}/>
  )

    
  

  return (
    <FlatList
      data={ApiSpotify}
      keyExtractor={(items) => items.id}
      renderItem={renderGridItem}
    />

    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#283618',
        justifyContent:'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#fefae0',
        marginBottom: 25
    }
})