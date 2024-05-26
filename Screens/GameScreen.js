import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import { Heading } from "../Components/Heading";
import { Logitem } from "../Components/Logitem";
import { PrimaryButton } from "../Components/PrimaryButton";

export const GameScreen = ({ pickedNumber, setCurrentScreen,setRounds }) => {
  const getRandomNumber = (min, max, exclude) => {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
      getRandomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  };
  let [currentGuess, setCurrentGuess] = useState(
    getRandomNumber(1, 100, pickedNumber)
  );
  let [limits, setLimits] = useState({
    min: 1,
    max: 100,
  });
  let [logs, setLogs] = useState([currentGuess]);
  const handlebuttonPress = (type) => {
    if (
      (type === "lower" && pickedNumber > currentGuess) ||
      (type === "higher" && pickedNumber < currentGuess)
    ) {
      Alert.alert("Please select", "d", [{ text: "ok" }]);
      return;
    }

    if (type === "lower") {
      setLimits((pre) => {
        return {
          ...pre,
          max: currentGuess,
        };
      });
      let guessNumber = getRandomNumber(limits.min, currentGuess, currentGuess);
      setCurrentGuess(guessNumber);
      setLogs((pre) => [guessNumber, ...pre]);
    } else {
      setLimits((pre) => {
        return {
          ...pre,
          min: currentGuess + 1,
        };
      });
      let guessNumber = getRandomNumber(
        currentGuess + 1,
        limits.max,
        currentGuess
      );
      setCurrentGuess(guessNumber);
      setLogs((pre) => [guessNumber, ...pre]);
    }
  };
  useEffect(() => {
    if (currentGuess == pickedNumber) {
      setCurrentScreen("gameoverScreen");
      setRounds(logs.length + 1);
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Heading>Opponent's Guess {currentGuess} </Heading>
      </View>
      <View>
        <PrimaryButton onPress={handlebuttonPress.bind(this, "lower")}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={handlebuttonPress.bind(this, "higher")}>
          +
        </PrimaryButton>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={logs}
          renderItem={({ item, index }) => {
            console.log(item, index);
            return <Logitem title={item} index={logs?.length - index} />;
          }}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headingContainer: {
    marginTop: 400,
    paddingHorizontal: 24,
  },
  listContainer: {
    marginBottom: 30,
    flex: 1,
  },
});
