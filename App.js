import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default function App() {

  const fetchApiCall = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin", {
      "method": "GET"
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Native API Calls</Text>
      <Text>Example with fetch and Axios</Text>
      <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> Use Fetch API</Text>
        </View>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    color: '#fff'
  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#0645AD'
  },
  buttonText: {
    color: '#FFF'
  },
});
