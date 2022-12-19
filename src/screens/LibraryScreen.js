import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const LibraryScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>LibraryScreen</Text>
      <Button title='Go to Search' color={'#fefae0'} onPress={() => navigation.navigate('Search')}/>
    </View>
  )
}

export default LibraryScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#bc6c25',
        justifyContent:'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#fefae0',
        marginBottom: 25
    },
})