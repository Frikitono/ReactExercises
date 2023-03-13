import React from 'react';
import { ScrollView} from "react-native";
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';
import Ex6 from './Ex6';
import Ex7 from './Ex7';
import Ex8 from './Ex8';
import Ex9 from './Ex9';


export default function App() {
  return (
    <ScrollView horizontal={false}>
    <View style={styles.container}>
      
            
      <View style = {styles.square}>
       
        <Text style={styles.sectionTitle}>Hello, world!</Text>
        
        </View>
        
        <Ex2/>

        <Ex3 text={'Say hello'} onPress={()=>console.log("Test")}/>
        <Ex3 text={'Say goodbye'} onPress={()=>console.log("Different Button!")} />

        <Ex4/>
        
        <Ex5/>

        <Ex6/>

        <Ex7/>
        <Text style={{fontSize:50,fontWeight:900, alignContent:"center", justifyContent:"center" }}>
          This is Ex8!
        </Text>
        <Ex8/>

        <Text style={{fontSize:50,fontWeight:900, alignContent:"center", justifyContent:"center" }}>
          This is Ex9!
        </Text>
        <Ex9/>


        <StatusBar style="auto" />
      </View>
    </ScrollView>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  square:{
    width: 100,
    height: 100,
    backgroundColor: '#00FFFF',
  },
  sectionTitle: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingLeft: 10,

  },


});
