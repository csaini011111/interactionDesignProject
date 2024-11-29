import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Gap,
  FontFamily,
  FontSize,
  Border,
  Color,
  Padding,
} from "../GlobalStyles";

const DeliverySuccess1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.deliverySuccess}>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <View
        style={[
          styles.statusBarNotchIphoneXOr,
          styles.deliverySuccessInnerFlexBox,
        ]}
      >
        <Image
          style={styles.leftSideIcon}
          contentFit="cover"
          source={require("../assets/left-side1.png")}
        />
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch4.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery1.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            contentFit="cover"
            source={require("../assets/mobile-signal1.png")}
          />
          <Image
            style={styles.recordingIndicatorIcon}
            contentFit="cover"
            source={require("../assets/recording-indicator1.png")}
          />
        </View>
      </View>
      <View style={[styles.deliverySuccessInner, styles.imageParentPosition]}>
        <View style={styles.close24OutlineWrapper}>
          <Image
            style={styles.close24Outline}
            contentFit="cover"
            source={require("../assets/close--24--outline.png")}
          />
        </View>
      </View>
      <View style={[styles.imageParent, styles.parentFlexBox]}>
        <View style={[styles.image, styles.buttonFlexBox]}>
          <Image
            style={styles.confettiIcon}
            contentFit="cover"
            source={require("../assets/confetti.png")}
          />
        </View>
        <View style={styles.frameParent}>
          <View style={styles.orderSuccessfullyDeliveredParent}>
            <Text
              style={[
                styles.orderSuccessfullyDelivered,
                styles.yourOrder33A45eContainerTypo,
              ]}
            >
              Order successfully delivered
            </Text>
            <Text
              style={[
                styles.yourOrder33A45eContainer,
                styles.yourOrder33A45eContainerTypo,
              ]}
            >
              <Text style={styles.yourOrder}>{`Your order `}</Text>
              <Text style={styles.a45e}>#33-A45E</Text>
              <Text
                style={styles.yourOrder}
              >{` has been successfully delivered. 
Enjoy your food `}</Text>
            </Text>
          </View>
          <View style={styles.parentFlexBox}>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text
                style={[
                  styles.orderSuccessfullyDelivered1,
                  styles.continueShoppingTypo,
                ]}
              >
                Order successfully delivered
              </Text>
            </View>
            <Pressable
              style={[styles.button1, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("Home")}
            >
              <Text
                style={[styles.continueShopping, styles.continueShoppingTypo]}
              >
                Continue Shopping
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  deliverySuccessInnerFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  imageParentPosition: {
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  parentFlexBox: {
    gap: Gap.gap_lg,
    alignItems: "center",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  yourOrder33A45eContainerTypo: {
    textAlign: "center",
    fontFamily: FontFamily.hammersmithOneRegular,
  },
  continueShoppingTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontSize: FontSize.size_mid,
  },
  homeIndicator1: {
    marginTop: -2,
    marginLeft: -60,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.shade4,
    width: 120,
    height: 4,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  homeIndicator: {
    height: "4.03%",
    top: "95.97%",
    bottom: "0%",
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
    top: 0,
    right: 0,
    width: 24,
    height: 11,
    position: "absolute",
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
    marginTop: -422,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    top: "50%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    overflow: "hidden",
  },
  close24Outline: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  close24OutlineWrapper: {
    borderRadius: Border.br_5xl,
    borderStyle: "solid",
    borderColor: Color.tint3,
    borderWidth: 1,
    width: 44,
    height: 44,
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  deliverySuccessInner: {
    height: "5.21%",
    top: "6.16%",
    bottom: "88.63%",
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  confettiIcon: {
    width: 104,
    height: 104,
    borderRadius: Border.br_61xl,
  },
  image: {
    backgroundColor: Color.tint2,
    width: 160,
    height: 160,
    borderRadius: Border.br_61xl,
  },
  orderSuccessfullyDelivered: {
    fontSize: FontSize.headingH6_size,
    color: Color.shade4,
  },
  yourOrder: {
    color: Color.tint7,
  },
  a45e: {
    color: Color.shade4,
  },
  yourOrder33A45eContainer: {
    alignSelf: "stretch",
    fontSize: FontSize.labelL2_size,
    letterSpacing: 0.2,
    lineHeight: 28,
  },
  orderSuccessfullyDeliveredParent: {
    width: 326,
    gap: Gap.gap_3xs,
    alignItems: "center",
  },
  orderSuccessfullyDelivered1: {
    color: Color.colorWhite,
  },
  button: {
    backgroundColor: Color.accent,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_3xl,
    width: 350,
    borderRadius: Border.br_13xl,
    justifyContent: "center",
  },
  continueShopping: {
    color: Color.accent,
  },
  button1: {
    borderRadius: Border.br_11xl,
  },
  frameParent: {
    gap: Gap.gap_2xl,
    alignItems: "center",
  },
  imageParent: {
    marginTop: -221.5,
    marginLeft: -175,
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  deliverySuccess: {
    backgroundColor: Color.tint1,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_13xl,
  },
});

export default DeliverySuccess1;
