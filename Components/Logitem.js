import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Logitem = ({ title, index }) => {
  return (
    <View style={styles.bar}>
      <Text>{index}</Text>
      <Text> {title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    borderColor: "yellow",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 5,
    marginBottom:10
  },
});
