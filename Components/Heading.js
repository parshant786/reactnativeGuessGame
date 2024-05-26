import { StyleSheet, Text } from "react-native";
import { colors } from "../constants/colour";

export const Heading = ({ children }) => {
  return <Text style={[styles.heading]}>{children}</Text>;
};
const styles = StyleSheet.create({
  heading: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    color: colors.primary500,
    borderWidth: 1,
    borderColor: colors.primary500,
    fontSize:28,
    textAlign: 'center',

    fontFamily:"open-sansBold"

  },
});
