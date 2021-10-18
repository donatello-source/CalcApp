import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Item from './components/Item1';

export default function App() {
    console.log("App") // tą konsolę zobacz w przeglądarce
    const [items, setItems] = useState({
        items: ["red", "yellow", "blue", "orange", "green", "pink"]
    })
    return ( <
            View style = { styles.main } > {
                items.items.map((contE, i) =>
                    <
                    View key = { i }
                    style = {
                        [styles.container, { flexDirection: i % 2 == 1 ? 'column' : 'column-reverse' }]
                    } > {
                        items.items.map((e, index) => < Item key = { index }
                            id = { index + 1 }
                            color = { e }
                            />)} </View >
                        )
                    } < /View>
                )
            }

            const styles = StyleSheet.create({
                main: {
                    flex: 1,
                    flexDirection: 'row',
                },
                container: {
                    flex: 1,
                    backgroundColor: '#FFFFFF',
                },
            });