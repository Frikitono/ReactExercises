import { KeyboardAvoidingView, TextInput,TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { useState } from "react";


const Ex7 = () => {
    const [Name, setName] = useState("");
    return (
    <KeyboardAvoidingView>
        <View>
                <Text style={styles.header}>What is your name?</Text>
                
                <TextInput
                style={styles.input}
                placeholder="John Doe"
                value={Name}
                autoCorrect={false}
                onChangeText={(text) => setName(text)}
                defaultValue={Name}
                
                />
            <TouchableOpacity onPress={() => Alert.alert("Ex7!",`Hello, ${Name}!`)}>
                <Text style={styles.text}>Say Hello</Text>
            </TouchableOpacity>
         </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    header:{
        fontWeight: "bold",
        fontSize: 20,
        padding: 10,
    },
    text: {
        textAlign: "center",
        color: "royalblue",
        padding: 10,
        paddingBottom: 20,
    },
    input: {
        backgroundColor: "gainsboro",
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 5,
    },
});

export default Ex7;
