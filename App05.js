import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';

import Item from "./components/Item"

export default class App04 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [{ a: 3, b: "#FFFF00", h: 1, c: '' }, { a: 4, b: "#00FF00", h: 1 }, { a: 1, b: "#00FFFF", h: 1 }, { a: 2, b: "#FF0F0F", h: 1 }, { a: 7, b: "#FFFF0F", h: 1 }, { a: 9, b: "#00FFF0", h: 1 }]
        };

    }

    render() {
        console.log("App05") // tą konsolę zobacz w przeglądarce
        return ( <
            View style = { styles.container } >
            <
            View style = { styles.kolumn1 } > {
                this.state.colors.map(function(e, i) {
                    return <Item g = { "white" }
                    f = { e.h }
                    b = { e.b }
                    t = { i + 1 }
                    key = { i }
                    />
                })
            } <
            /View> <
            View style = { styles.kolumn2 } > {
                this.state.colors.map(function(e, i) {
                    return <Item g = { "black" }
                    f = { e.h }
                    b = { e.b }
                    t = { i + 1 }
                    key = { i }
                    />
                })
            } <
            /View> <
            /View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff00',
        flexDirection: 'row',
    },
    kolumn1: {
        flex: 1,
        flexDirection: 'column',
    },
    kolumn2: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
    text1: {
        color: "white"
    }

});