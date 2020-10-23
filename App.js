import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';


export default function App() {
  let [joke, setJoke] = React.useState('')

  const fetchApiCall = () => {
    fetch("https://icanhazdadjoke.com/", {
      "method": "GET",
      "headers": {
        Accept: "application/json",
      }
    })
      .then(response => response.json())
      .then(response => {
        // console.log(response.joke);
        setJoke(response.joke)
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Random Dad Joke App</Text>
      <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> GET Joke!</Text>
        </View>
      </TouchableHighlight>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.joke}>{joke}</Text>
      </View>
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
    position: "absolute",
    top:100,
    fontSize: 35,
    color: '#fff'
  },
  button: {
    // position: 'absolute',
    // top: 200,
    padding: 20,
    marginVertical: 25,
    backgroundColor: '#0645AD'
  },
  buttonText: {
    color: '#FFF'
  },
  joke: {
    fontSize: 25,
    color: '#fff',
    position: 'relative',
    bottom: -100,
    padding: 20,

  },
});
