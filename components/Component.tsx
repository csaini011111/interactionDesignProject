import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Component = () => {
  return <Text style={styles.text}>{`<`}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 55,
  },
});

export default Component;
