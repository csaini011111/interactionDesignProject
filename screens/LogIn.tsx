import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logIn}>
      <View style={styles.logInChild} />
      <Text style={styles.text}>{`<`}</Text>
      <Text
        style={[styles.loginIntoYour, styles.logIn1Typo]}
      >{`Login into your account
`}</Text>
      <View style={[styles.logInItem, styles.logLayout]} />
      <Text
        style={[styles.chiragsainigmailcom, styles.text1Typo]}
      >{`chiragsaini@gmail.com
`}</Text>
      <View style={[styles.logInInner, styles.logLayout]} />
      <Text style={[styles.text1, styles.text1Typo]}>{`************
`}</Text>
      <Image
        style={[styles.userRegular1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/userregular-1.png")}
      />
      <Image
        style={[styles.lockSolid1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/locksolid-1.png")}
      />
      <Pressable
        style={[styles.forgetPasswordContainer, styles.needHelpPosition]}
        onPress={() => navigation.navigate("Verification")}
      >
        <Text style={styles.needHelpTypo}>Forget password ?</Text>
      </Pressable>
      <Text style={[styles.needHelp, styles.needHelpTypo]}>{`Need help?
`}</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Home")}
      />
      <Text style={[styles.logIn1, styles.logIn1Typo]}>{`Log in
`}</Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logIn1Typo: {
    fontFamily: FontFamily.hammersmithOneRegular,
    textAlign: "center",
    position: "absolute",
  },
  logLayout: {
    height: 54,
    borderWidth: 1,
    borderColor: Color.accent,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 25,
    width: 361,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text1Typo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.labelL1_size,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 27,
    position: "absolute",
    overflow: "hidden",
  },
  needHelpPosition: {
    top: 362,
    position: "absolute",
  },
  needHelpTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.labelL1_size,
    textAlign: "center",
  },
  logInChild: {
    top: 65,
    left: 77,
    height: 59,
    width: 361,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 73,
    left: 32,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  loginIntoYour: {
    top: 85,
    left: 102,
    fontSize: FontSize.labelL1_size,
    fontFamily: FontFamily.hammersmithOneRegular,
    color: Color.colorBlack,
  },
  logInItem: {
    top: 172,
  },
  chiragsainigmailcom: {
    top: 186,
    left: 103,
  },
  logInInner: {
    top: 251,
  },
  text1: {
    top: 274,
    left: 151,
  },
  userRegular1Icon: {
    top: 187,
    left: 40,
  },
  lockSolid1Icon: {
    top: 266,
    left: 43,
  },
  forgetPasswordContainer: {
    left: 208,
  },
  needHelp: {
    left: 39,
    top: 362,
    position: "absolute",
  },
  rectanglePressable: {
    top: 402,
    backgroundColor: Color.accent,
    width: 356,
    height: 62,
    borderRadius: Border.br_3xs,
    left: 25,
    position: "absolute",
  },
  logIn1: {
    top: 416,
    left: 163,
    fontSize: FontSize.headingH6_size,
    color: Color.colorWhite,
  },
  rectangleIcon: {
    top: 485,
    left: 0,
    borderBottomRightRadius: Border.br_21xl,
    borderBottomLeftRadius: Border.br_21xl,
    width: 464,
    height: 362,
    position: "absolute",
  },
  logIn: {
    borderRadius: Border.br_13xl,
    flex: 1,
    width: "100%",
    height: 822,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default LogIn;
