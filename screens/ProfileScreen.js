import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Perfil</Text>
      </View>
    );
  }
}

export default ProfileScreen;
