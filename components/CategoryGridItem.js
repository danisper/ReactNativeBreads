import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

import React from 'react'

const CategoryGridItem = ({item, onSelected}) => {

    return (
        <View style={styles.gridItem}>
            <TouchableOpacity 
            onPress= {() => onSelected(item)}
            style = {{...styles.container, backgroundColor: item.color}}
            >
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryGridItem

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 10,
        height: 150,
    },
    container : {
        flex: 1,
        borderRadius:6,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0 , height: 2},
        elevation: 5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    title: {
        // fontFamily: 'open-sans'
    }
})
