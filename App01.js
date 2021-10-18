import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Item from "./components/Item"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

export default class App01 extends React.Component {
    render() {
        console.log("App01") // tą konsolę zobacz w przeglądarce
        return (
            <View style={styles.container}>
                <Item f={1} b="#FFFF00" t={"Header"} />
                <Item f={4} b="#FF0000" t={"Content"} />
                <Item f={1} b="#00FF00" t={"Footer"} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff00',
    },

});