import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Ex2() {
        return (

                        <Pressable
                                style={styles.button}
                                onPress={() => alert('hello!')}>
                                <Text>Press me</Text>
                        </Pressable>

        );
}

const styles = StyleSheet.create({

        button: {
                alignItems: 'center',
                padding: 10,
        },
});