import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  FontFamily,
  Border,
  FontSize,
  Color,
  Padding,
  Gap,
} from "../GlobalStyles";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding}>
      <Pressable
        style={styles.frameParent}
        onPress={() => navigation.navigate("Onboarding1")}
      >
        <View style={styles.headingWrapper}>
          <Text style={[styles.heading, styles.headingTypo]}>{`


MEAL MATCHING`}</Text>
        </View>
        <View style={styles.headingWrapper}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.startOrdering, styles.headingTypo]}>
              Start Ordering
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.status}>
        <View style={styles.statusChild} />
        <View style={styles.statusChild} />
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupItem, styles.groupPosition]} />
        </View>
      </View>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
      </View>
      <View
        style={[styles.statusBarNotchIphoneXOr, styles.batteryIconPosition]}
      >
        <Image
          style={styles.leftSideIcon}
          contentFit="cover"
          source={require("../assets/left-side.png")}
        />
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch2.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={[styles.batteryIcon, styles.batteryIconPosition]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            contentFit="cover"
            source={require("../assets/mobile-signal.png")}
          />
          <Image
            style={styles.recordingIndicatorIcon}
            contentFit="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
      </View>
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headingTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupPosition: {
    left: 0,
    top: 0,
    height: 3,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  batteryIconPosition: {
    top: 0,
    position: "absolute",
  },
  heading: {
    fontSize: FontSize.size_21xl,
    lineHeight: 56,
    color: Color.tint1,
    alignSelf: "stretch",
  },
  headingWrapper: {
    alignSelf: "stretch",
  },
  startOrdering: {
    fontSize: FontSize.size_mid,
    letterSpacing: 0.1,
    lineHeight: 20,
    color: Color.tint3,
  },
  button: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.shade4,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xl,
    alignSelf: "stretch",
  },
  frameParent: {
    marginLeft: -167,
    top: 343,
    gap: Gap.gap_4xl,
    width: 350,
    left: "50%",
    position: "absolute",
  },
  statusChild: {
    height: 3,
    backgroundColor: Color.tint1,
    borderRadius: Border.br_base,
    flex: 1,
  },
  groupChild: {
    backgroundColor: "#ed8208",
    width: 106,
  },
  groupItem: {
    width: 53,
    backgroundColor: Color.tint1,
  },
  rectangleParent: {
    width: 106,
    height: 3,
  },
  status: {
    marginLeft: -175,
    top: 68,
    gap: Gap.gap_xs,
    flexDirection: "row",
    width: 350,
    left: "50%",
    position: "absolute",
  },
  homeIndicator1: {
    marginTop: -2,
    marginLeft: -60,
    top: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
    width: 120,
    height: 4,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    height: "4.03%",
    top: "95.97%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  leftSideIcon: {
    width: 28,
    height: 11,
  },
  notchIcon: {
    width: 219,
    height: 30,
    display: "none",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    width: 67,
    height: 11,
  },
  statusBarNotchIphoneXOr: {
    marginLeft: -195,
    width: 390,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    overflow: "hidden",
  },
  illustrationIcon: {
    height: "28.8%",
    width: "54.74%",
    top: "21.21%",
    right: "25.51%",
    bottom: "49.99%",
    left: "19.74%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  onboarding: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.accent,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Onboarding;
