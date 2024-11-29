import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color, Padding } from "../GlobalStyles";

const TabBar = () => {
  return (
    <View style={styles.tabBar}>
      <Image
        style={styles.homeIcon}
        contentFit="cover"
        source={require("../assets/home3.png")}
      />
      <Image
        style={styles.homeIcon}
        contentFit="cover"
        source={require("../assets/heart5.png")}
      />
      <Image
        style={styles.homeIcon}
        contentFit="cover"
        source={require("../assets/bag22.png")}
      />
      <Image
        style={styles.homeIcon}
        contentFit="cover"
        source={require("../assets/profilecircle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    width: 28,
    height: 28,
  },
  tabBar: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.accent,
    width: 386,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_3xl,
  },
});

export default TabBar;
