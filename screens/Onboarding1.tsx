import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const Onboarding1 = () => {
  return (
    <View style={styles.onboarding}>
      <View style={styles.frameParent}>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>{`
Find your favorite restaurants 

`}</Text>
        </View>
        <View style={styles.frameChild} />
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
          source={require("../assets/notch.png")}
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
        source={require("../assets/illustration.png")}
      />
      <Text style={styles.text}>{`
`}</Text>
      <View style={[styles.onboardingChild, styles.onboardingLayout]} />
      <View style={[styles.onboardingItem, styles.onboardingLayout]} />
      <Text style={[styles.logIn, styles.logInTypo]}>{`Log in 
`}</Text>
      <Text style={[styles.signUp, styles.logInTypo]}>{`Sign up
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  batteryIconPosition: {
    top: 0,
    position: "absolute",
  },
  onboardingLayout: {
    height: 58,
    width: 140,
    backgroundColor: Color.shade4,
    top: 646,
    position: "absolute",
  },
  logInTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.hammersmithOneRegular,
    top: 667,
    textAlign: "center",
    fontSize: FontSize.labelL1_size,
    position: "absolute",
  },
  heading: {
    fontSize: FontSize.size_21xl,
    lineHeight: 56,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.tint1,
    textAlign: "left",
    width: 325,
    height: 146,
  },
  headingWrapper: {
    alignSelf: "stretch",
  },
  frameChild: {
    height: 265,
    alignSelf: "stretch",
  },
  frameParent: {
    marginLeft: -172,
    top: 393,
    width: 350,
    gap: Gap.gap_4xl,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    left: "50%",
    overflow: "hidden",
  },
  illustrationIcon: {
    height: "28.8%",
    width: "54.74%",
    top: "21.21%",
    right: "25.77%",
    bottom: "49.99%",
    left: "19.49%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 668,
    left: 142,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    height: 104,
    transform: [
      {
        rotate: "90.5deg",
      },
    ],
    textAlign: "center",
    fontSize: FontSize.labelL1_size,
    position: "absolute",
  },
  onboardingChild: {
    left: 17,
  },
  onboardingItem: {
    left: 198,
  },
  logIn: {
    left: 242,
  },
  signUp: {
    left: 55,
  },
  onboarding: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.accent,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding1;
