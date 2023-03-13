import React from 'react';
import {StyleSheet,Text, View,TouchableOpacity } from 'react-native';
import { useState } from 'react';
export default function Ex4() {

    const [count, setCount] = useState(0);

    function increment(){
        
        setCount(count => ++count);
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>You've pressed the button: {count} time(s)</Text>
            <TouchableOpacity style={styles.button} onPress={increment}>
                <Text style={styles.buttonText}>Press me</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionTitle: {
        color: 'black',
    },
    button: {
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#067bba',
        fontSize: 16,
    },
});





