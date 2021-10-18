import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
var ko
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return ( < View style = {
                { flex: this.props.f, backgroundColor: this.props.b, height: this.props.f } } >
            <
            Text style = { styles.text } > { this.props.t } < /Text>  <
            /View>
        );
    }

}
const styles = StyleSheet.create({
    text: { fontSize: 48, color: "white", },
});

export default Item;