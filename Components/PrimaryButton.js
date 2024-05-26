import { Pressable, Text, View, StyleSheet } from "react-native";

export const PrimaryButton = ({ children,onPress }) => {
 
  return (
    <View style={[styles.outerContainer]}>
      <Pressable
        onPress={onPress}
        style={({pressed})=> pressed? [styles.innerContainer,styles.pressed]:[styles.innerContainer]}
        android_ripple={{ color: "#126f2c" }}
      >
        <Text style={[styles.textContainer]}>{children}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: "#087206",

    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  textContainer: {
    textAlign: "center",
    color: "white",
  },
  pressed:{
    opacity:0.75
  }
});
