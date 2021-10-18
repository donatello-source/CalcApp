import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Item(props) {
    const onPressHandler = () => {
        alert(`ID: ${props.id} 
        \n Color: ${props.color}`)
    }
    return ( < TouchableOpacity onPress = { onPressHandler }
        style = {
            { flex: 1 }
        } >
        <
        View style = {
            { flex: 1, backgroundColor: props.color, justifyContent: "center", alignItems: "center" }
        } >
        <
        Text style = {
            [styles.text, { color: "white" }]
        } > { props.id } <
        /Text>  <
        /View>  <
        /TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 48,
        padding: 20,
    },
});