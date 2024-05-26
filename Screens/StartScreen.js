import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import { PrimaryButton } from "../Components/PrimaryButton";

export const StartScreen = ({ handlePickedNumber }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (value) => {
    setInputText(value);
  };
  const handleSet = () => {
    setInputText("");
  };
  const handleComfrim = () => {
    const value = parseInt(inputText);
    if (isNaN(value) || value <= 0 || value > 99) {
      Alert.alert("Invalid Number", "Please enter text b/w 1 to 99", [
        { text: "Ok", style: "destructive", onPress: handleSet },
      ]);
      return;
    }
    handlePickedNumber(value);
  };
  return (
    <View style={[styles.Container]}>
      <View style={[styles.inputContainer]}>
        <TextInput
          style={[styles.numberInput]}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={inputText}
          onChangeText={handleInputChange}
        />
      </View>
      <View style={[styles.buttonBarContainer]}>
        <View style={[styles.buttonContainer]}>
          <PrimaryButton onPress={handleSet}>Reset</PrimaryButton>
        </View>
        <View style={[styles.buttonContainer]}>
          <PrimaryButton onPress={handleComfrim}>Confrim</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#5b0932",
    padding: 16,
    borderRadius: 8,
    elevation: 6,
    shadowColor: "black",
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
  },
  inputContainer: {
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
  },
});
