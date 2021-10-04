import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default (props) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>{props.desc}</Text>
            <View style = {styles.separator}/>
            <Text style = {styles.text}>{props.fab}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    

    container: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        borderRadius: 4,
        padding: 12,
        marginBottom: 12,
        shadowColor: "#B0E0E6",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.84,
        elevation: 3,
    },

    text: {
        fontSize: 16,
        alignItems: 'center',
        textAlign: 'center',
    },

    separator: {
        borderBottomColor: '#8B0000',
        borderWidth: 1.5,
    }
})