import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { PrimaryButton } from "../Components/PrimaryButton";
import { colors } from "../constants/colour";

export const GameOverScreen = ({ setCurrentScreen ,rounds,pickedNumber}) => {
  const handleRestart = () => {
    setCurrentScreen("startScreen");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Game Over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/backgroundImage.jpg")}
        />
      </View>
      <Text style={styles.info}>
        You have take <Text style={styles.number}>{rounds}</Text> rounds to guess{" "}
        <Text style={styles.number}>{pickedNumber}</Text>
      </Text>
      <PrimaryButton onPress={handleRestart}>Restart Game</PrimaryButton>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    color: "white",
    borderColor: "white",
    padding: 4,
    borderWidth: 2,
    marginBottom: 12,
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  info: {
    fontSize: 20,
    color: "white",
    borderColor: "white",
  },
  number: {
    color: colors.yellow500,
  },
});
