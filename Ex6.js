import { ScrollView} from "react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Ex6() {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11];
    const squares = numbers.map((number) => {
        return (
            <View style={styles.squares}>
                <Text style={styles.text}>Square {number}</Text>
            </View>
        );
    });

    return (

            <ScrollView horizontal={false}>
                {squares}
            </ScrollView>

    );
}

const styles = StyleSheet.create({
    squares: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: "#5eafd1",
    },
    text: {
        textAlign: "center",
        paddingTop: 40,
    },
});
