import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <Image
        style={styles.signUpChild}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Text style={[styles.text, styles.textFlexBox]}>{`<`}</Text>
      <Text
        style={[styles.createYourAccount, styles.textFlexBox]}
      >{`Create your account
`}</Text>
      <View style={[styles.signUpItem, styles.signLayout]} />
      <View style={[styles.signUpInner, styles.signLayout]} />
      <Text style={[styles.dateOfBirth, styles.nameTypo]}>Date of birth</Text>
      <Image
        style={[styles.calendarSolid1Icon, styles.solid1IconLayout]}
        contentFit="cover"
        source={require("../assets/calendarsolid-1.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Verification")}
      />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Text
        style={[styles.phoneNumberOr, styles.nameTypo]}
      >{`Phone number or email address
`}</Text>
      <View style={styles.mobileSolid1} />
      <Image
        style={[styles.phoneSolid1Icon, styles.solid1IconLayout]}
        contentFit="cover"
        source={require("../assets/phonesolid-1.png")}
      />
      <View style={styles.userRegular1} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.alreadyHaveAContainer, styles.textFlexBox]}>
        <Text style={styles.alreadyHaveA}>{`already have a account , `}</Text>
        <Text style={styles.login}>login</Text>
      </Text>
      <Image
        style={[styles.arrowIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Text style={[styles.next, styles.textFlexBox]}>Next</Text>
      <Image
        style={[styles.illustrationIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/illustration1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  signLayout: {
    height: 57,
    borderWidth: 1,
    borderColor: Color.accent,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 24,
    width: 430,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  nameTypo: {
    color: Color.colorGray_300,
    fontSize: FontSize.labelL1_size,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    position: "absolute",
  },
  solid1IconLayout: {
    height: 25,
    width: 25,
    left: 52,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout: {
    left: 23,
    height: 57,
    borderWidth: 1,
    borderColor: Color.accent,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: 430,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  signUpChild: {
    top: 26,
    left: 0,
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    height: 69,
    width: 430,
    position: "absolute",
  },
  text: {
    top: 330,
    width: 41,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.size_13xl,
    left: 24,
  },
  createYourAccount: {
    top: 329,
    left: 80,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.size_13xl,
  },
  signUpItem: {
    top: 394,
  },
  signUpInner: {
    top: 568,
  },
  dateOfBirth: {
    left: 106,
    top: 585,
  },
  calendarSolid1Icon: {
    top: 585,
  },
  rectanglePressable: {
    top: 706,
    backgroundColor: Color.accent,
  },
  rectangleView: {
    top: 477,
    backgroundColor: Color.colorWhite,
    left: 23,
  },
  phoneNumberOr: {
    top: 489,
    left: 89,
  },
  mobileSolid1: {
    top: 385,
    left: 33,
    width: 12,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  phoneSolid1Icon: {
    top: 492,
  },
  userRegular1: {
    top: 352,
    width: 32,
    height: 33,
    left: 52,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "2.69%",
    width: "5.81%",
    top: "48.99%",
    right: "83.45%",
    bottom: "48.32%",
    left: "10.74%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  name: {
    top: 410,
    left: 110,
  },
  alreadyHaveA: {
    fontFamily: FontFamily.interRegular,
  },
  login: {
    fontFamily: FontFamily.jaini,
  },
  alreadyHaveAContainer: {
    top: 647,
    left: 30,
    fontSize: FontSize.labelL2_size,
    color: Color.colorGray_200,
  },
  arrowIcon: {
    top: 655,
    left: 93,
    width: 100,
  },
  next: {
    top: 717,
    left: 191,
    fontFamily: FontFamily.hammersmithOneRegular,
    color: Color.colorWhite,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
  },
  illustrationIcon: {
    height: "28.91%",
    width: "44.95%",
    top: "7.73%",
    right: "26%",
    bottom: "63.37%",
    left: "29.05%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  signUp: {
    borderRadius: Border.br_13xl,
    flex: 1,
    width: "100%",
    height: 841,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default SignUp;
