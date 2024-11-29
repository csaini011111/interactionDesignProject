import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Heart = () => {
  return (
    <View style={styles.heart}>
      <Image
        style={styles.vuesaxboldheartIcon}
        contentFit="cover"
        source={require("../assets/vuesaxboldheart1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vuesaxboldheartIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  heart: {
    width: 28,
    height: 28,
  },
});

export default Heart;
