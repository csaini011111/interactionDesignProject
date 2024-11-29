import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const Verification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verification}>
      <Image
        style={[styles.verificationChild, styles.verificationPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={[styles.verificationItem, styles.verificationPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Text style={[styles.text, styles.textTypo2]}>{`<`}</Text>
      <Text style={[styles.weSentYou, styles.textTypo2]}>{`We sent you a code
`}</Text>
      <Text style={styles.enterItBelow}>{`Enter it below to verify it is you
`}</Text>
      <View
        style={[styles.verificationInner, styles.verificationChildLayout]}
      />
      <View style={[styles.rectangleView, styles.verificationChildLayout]} />
      <Text style={[styles.text1, styles.textTypo1]}>9</Text>
      <Text style={[styles.text2, styles.textTypo]}>1</Text>
      <View
        style={[styles.verificationChild1, styles.verificationChildLayout]}
      />
      <View
        style={[styles.verificationChild2, styles.verificationChildLayout]}
      />
      <Text style={[styles.text3, styles.textTypo1]}>4</Text>
      <Text style={[styles.text4, styles.textTypo]}>8</Text>
      <View style={styles.verificationChild3} />
      <Pressable
        style={styles.next}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.next1}>Next</Text>
      </Pressable>
      <Text
        style={[styles.didntReceiveCode, styles.resendTypo]}
      >{`Didn’t receive code?
`}</Text>
      <Text style={[styles.resend, styles.resendTypo]}>Resend</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  verificationPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  textTypo2: {
    textAlign: "center",
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  verificationChildLayout: {
    height: 48,
    width: 75,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
    top: 306,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  textTypo1: {
    top: 316,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.headingH6_size,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo: {
    top: 315,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.headingH6_size,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  resendTypo: {
    fontSize: FontSize.labelL1_size,
    top: 488,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  verificationChild: {
    top: 0,
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    height: 69,
  },
  verificationItem: {
    top: 604,
    height: 328,
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
    left: 0,
  },
  text: {
    top: 75,
    left: 17,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
  },
  weSentYou: {
    top: 144,
    left: 66,
    fontFamily: FontFamily.interRegular,
  },
  enterItBelow: {
    top: 233,
    left: 42,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.headingH6_size,
    textAlign: "center",
    position: "absolute",
  },
  verificationInner: {
    left: 48,
  },
  rectangleView: {
    left: 132,
  },
  text1: {
    left: 162,
  },
  text2: {
    left: 74,
  },
  verificationChild1: {
    left: 215,
  },
  verificationChild2: {
    left: 303,
  },
  text3: {
    left: 328,
  },
  text4: {
    left: 245,
  },
  verificationChild3: {
    top: 396,
    left: 28,
    borderRadius: Border.br_xl,
    backgroundColor: Color.accent,
    borderColor: Color.accent,
    width: 366,
    height: 62,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  next1: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_13xl,
  },
  next: {
    left: 175,
    top: 407,
    position: "absolute",
  },
  didntReceiveCode: {
    left: 35,
    color: Color.colorBlack,
    top: 488,
  },
  resend: {
    textDecoration: "underline",
    color: Color.accent,
    left: 245,
  },
  verification: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
  },
});

export default Verification;
