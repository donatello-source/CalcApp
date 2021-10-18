import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityBase,
    View
} from 'react-native';

import Item from "./components/ItemCalc"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wart: { a: 0 }
        };

    }
    render() {

        return ( <
            View style = { styles.container } >
            <
            View style = { styles.header } >
            <
            Item / >
            <
            Item / >
            <
            /View>

            <
            View style = { styles.footer } >
            <
            View style = { styles.left } >
            <
            Item f = { '1' }
            b = { 'grey' }
            g = { '25%' }
            l = { '100/3%' }
            /> <
            Item f = { '4' }
            b = { 'grey' }
            g = { '25%' }
            l = { '100/3%' }
            /> <
            Item f = { '7' }
            b = { 'grey' }
            g = { '25%' }
            l = { '100/3%' }
            /> <
            Item f = { '0' }
            b = { 'grey' }
            g = { '25%' }
            l = { '100/3%' }
            /> <
            Item f = { '2' }
            b = { 'grey' }
            g = { '25%' }
            l = { '100/3%' }
            /> <
            Item f = { '5' }
            b = { 'grey' }
            g = { '25%' }
            l = { '100/3%' }
            /> <
            Item f = { '8' }
            b = { 'grey' }
            g = { '25%' }
            l = { '100/3%' }
            /> <
            Item f = { '.' }
            b = { 'grey' }
            g = { '25%' }
            l = { '100/3%' }
            /> <
            Item f = { '3' }
            b = { 'grey' }
            g = { '25%' }
            l = { '100/3%' }
            /> <
            Item f = { '6' }
            b = { 'grey' }
            g = { '25%' }
            l = { '100/3%' }
            /> <
            Item f = { '9' }
            b = { 'grey' }
            g = { '25%' }
            l = { '100/3%' }
            /> <
            Item f = { '=' }
            b = { 'grey' }
            g = { '25%' }
            l = { '100/3%' }
            /> <
            /View> <
            View style = { styles.right } >
            <
            Item style = { styles.item }
            b = { '#565656' }
            f = { 'C' }
            g = { '20%' }
            l = { '100%' }
            /> <
            Item style = { styles.item }
            b = { '#565656' }
            f = { '/' }
            g = { '20%' }
            l = { '100%' }
            /> <
            Item style = { styles.item }
            b = { '#565656' }
            f = { '*' }
            g = { '20%' }
            l = { '100%' }
            /> <
            Item style = { styles.item }
            b = { '#565656' }
            f = { '-' }
            g = { '20%' }
            l = { '100%' }
            /> <
            Item style = { styles.item }
            b = { '#565656' }
            f = { '+' }
            g = { '20%' }
            l = { '100%' }
            /> <
            /View> <
            /View>

            <
            /View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'yellow',
    },
    header: {
        flex: 2,
        backgroundColor: '#47FFCC',
    },
    footer: {
        flex: 5,
        flexDirection: 'row',

    },
    left: {
        flex: 3,
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#303030',
    },
    right: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#202020',
    },

    item: {
        width: '5px',
        backgroundColor: 'grey',
    },
});