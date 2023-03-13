import React from 'react';
import { StyleSheet,Text, View,TouchableOpacity } from 'react-native';


const Ex3 = (props) =>{
    return(
        <View style={styles.button}>
            <TouchableOpacity onPress={props.onPress}>
                <Text style = {styles.char}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
        button: {
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fc647c',
                margin: 10,
                alignSelf: 'center',
                
                
        },
        char:{
                color: 'white',
                padding: 10,
                paddingHorizontal: 20,
        },
});

export default Ex3;