import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
export default function Item(props) {
    var wynik = 0

    function onPressHandler() {
        if (props.f != undefined) {
            console.log(props.f)
        }
    }
    return ( <
        TouchableOpacity onPress = { onPressHandler }
        style = {
            { backgroundColor: props.b, height: props.g, width: props.l }
        } >
        <
        Text style = { styles.text } > { props.f } < /Text>  <
        /TouchableOpacity>

    );
}
const styles = StyleSheet.create({
    text: { fontSize: 48, color: "white", textAlign: 'center', justifyContent: 'center', alignSelf: 'center', margin: 'auto' },
});