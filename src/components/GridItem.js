import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'

const GridItem = ({items, onSelected}) => {
  return (
    <View style={styles.gridItem}>
        <TouchableOpacity style={styles.container} onPress={()=> onSelected(items)}>
            <View>
            {
                items && items.map(play=>{
                
                    return(
                        <View key={play.id}>
                            <Text>{play.name}</Text>
                        </View>
                    )
                })
            }
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 8
    },
   
})