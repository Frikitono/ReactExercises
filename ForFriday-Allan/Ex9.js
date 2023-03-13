import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const Ex9 = () => {
    const [people,setPeople] = useState([])

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=100&inc=name')
        .then(response => response.json())
        .then(data => setPeople(data.results))
        .catch((error =>{
             console.log(error);
             alert("Something went wrong!");
         })
        );
        

    },[])
    return (

        <FlatList
        data={people}
        keyExtractor={(item)=>`${item.name.first}-${item.name.last}`}
         renderItem={({item})=>(
                <View style={styles.row}>
                    <Text style={styles.name}>{item.name.first} {item.name.last} </Text>
                    <View style={styles.serparator}/>
                </View>
                
            )}
        />
    );
};

const styles = StyleSheet.create({
    row:{
        padding: 10,
    },
    name:{
        fontSize: 16,
    },
    serparator:{
        height: 1,
        backgroundColor: 'gray',
    }

});

    export default Ex9;