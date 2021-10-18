import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Item from "./components/Item"

export default class App02 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [{ a: 3, b: "#FFFF00", h: 1 }, { a: 4, b: "#00FF00", h: 1 }, { a: 1, b: "#00FFFF", h: 1 }, { a: 2, b: "#FF0F0F", h: 1 }, { a: 7, b: "#FFFF00", h: 1 }, , { a: 9, b: "#00FF00", h: 1 }]
        };

    }

    render() {
        console.log("App02") // tą konsolę zobacz w przeglądarce
        return (
            <View style={styles.container}>
                {
                    this.state.colors.map(function (e, i) {
                        return <Item f={e.h} b={e.b} t={i} />
                    })
                }
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