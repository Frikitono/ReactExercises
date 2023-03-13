
import React from 'react';
import {StyleSheet,Text, View } from 'react-native';

export default function Ex5() {
    return(
        <View style={styles.container}>
            <View style={[styles.squares, {backgroundColor: '#34e5eb'}]}>
            <Text style={styles.text}>Square 1</Text>
            </View>
            
            <View style={[styles.squares, {backgroundColor: 'powderblue'}]}>
            <Text style={styles.text}>Square 2</Text>
            </View>

            <View style={[styles.squares, {backgroundColor: '#fc647c'}]}>
            <Text style={styles.text}>Square 3</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    squares: {
        width: 100,
        height: 100,
        margin: 10,
    },
    text: {
        color: 'black',
        textAlign: 'center',
        paddingTop: 40,
    },
});