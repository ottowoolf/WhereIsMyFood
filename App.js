import { StatusBar as ExpoSatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            padding: 16,
            backgroundColor: "green",
            marginTop: StatusBar.currentHeight,
          }}
        >
          <Text>Search</Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 16,
            backgroundColor: "blue",
          }}
        >
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoSatusBar style='auto' />
    </>
  );
}
