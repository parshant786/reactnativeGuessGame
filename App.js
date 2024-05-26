import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { StartScreen } from "./Screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { GameScreen } from "./Screens/GameScreen";
import { colors } from "./constants/colour";
import { GameOverScreen } from "./Screens/GameOverScreen";
import { useFonts } from "expo-font";
export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [currentScreen, setCurrentScreen] = useState("startScreen");
  const [rounds, setRounds] = useState(0);
  const handlePickedNumber = (number) => {
    setPickedNumber(number);
    setCurrentScreen("gameScreen");
  };
  const [ fontsLoaded ] = useFonts({
    "open-sansBold": require("./assets/OpenSans-Bold.ttf"),
  });
  console.log(fontsLoaded)
  if (!fontsLoaded) {
    return;
  }
  return (
    <LinearGradient
      style={[styles.container]}
      colors={[colors.yellow500, colors.primary500]}
    >
      <ImageBackground
        source={require("./assets/backgroundImage.jpg")}
        style={[styles.container]}
        resizeMode="cover"
        imageStyle={[styles.backgroundImage]}
      >
        <SafeAreaView style={[styles.container, styles.marginForNohe]}>
          {currentScreen == "startScreen" && (
            <StartScreen handlePickedNumber={handlePickedNumber} />
          )}
          {currentScreen == "gameScreen" && (
            <GameScreen
              pickedNumber={pickedNumber}
              setCurrentScreen={setCurrentScreen}
              setRounds={setRounds}
            />
          )}
          {currentScreen == "gameoverScreen" && (
            <GameOverScreen
              setCurrentScreen={setCurrentScreen}
              rounds={rounds}
              pickedNumber={pickedNumber}
            />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marginForNohe: {
    marginTop: StatusBar.currentHeight,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
