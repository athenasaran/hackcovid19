import * as WebBrowser from 'expo-web-browser';
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

class HomeScreen extends Component {
  render() {
  return (
    <View style={styles.container}>
      <Text>Diário</Text>
    </View>
  );
}}

HomeScreen.navigationOptions = {
  header: null,
};



