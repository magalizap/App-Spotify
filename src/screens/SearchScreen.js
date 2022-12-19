import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>SearchScreen</Text>
      <Button title='Back to Home' color={'#fefae0'} onPress={() => navigation.navigate('Home')}/>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#606c38',
        justifyContent:'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#fefae0',
        marginBottom: 25
    }
})