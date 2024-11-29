import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Frame = () => {
  return <View style={styles.frameView} />;
};

const styles = StyleSheet.create({
  frameView: {
    backgroundColor: Color.colorWhite,
    width: 18,
    height: 1,
    overflow: "hidden",
  },
});

export default Frame;
