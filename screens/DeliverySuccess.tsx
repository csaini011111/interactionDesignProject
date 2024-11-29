import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
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

const DeliverySuccess = () => {
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
          source={require("../assets/notch1.png")}
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
      <Pressable
        style={[styles.deliverySuccessInner, styles.image18ParentPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.close24OutlineWrapper}>
          <Image
            style={styles.close24Outline}
            contentFit="cover"
            source={require("../assets/close--24--outline1.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.image18Parent, styles.parentFlexBox]}>
        <Image
          style={styles.image18Icon}
          contentFit="cover"
          source={require("../assets/image-18.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.orderSuccessfullyPlacedParent}>
            <Text style={[styles.orderSuccessfullyPlaced, styles.orderTypo]}>
              Order successfully placed
            </Text>
            <Text style={[styles.yourOrderIs, styles.orderTypo]}>
              Your order is confirmed and will be delivered soon.
            </Text>
          </View>
          <View style={styles.parentFlexBox}>
            <Pressable
              style={[styles.button, styles.buttonFlexBox]}
              onPress={() => navigation.navigate("TrackDelivery")}
            >
              <Text style={[styles.trackDelivery, styles.orderAgainTypo]}>
                <Text style={styles.trackTypo}>{`Track `}</Text>
                <Text style={styles.delivery}>Delivery</Text>
              </Text>
            </Pressable>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Text style={[styles.orderAgain, styles.trackTypo]}>
                Order again
              </Text>
            </View>
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
  image18ParentPosition: {
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  parentFlexBox: {
    gap: Gap.gap_lg,
    alignItems: "center",
  },
  orderTypo: {
    textAlign: "center",
    fontFamily: FontFamily.hammersmithOneRegular,
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  orderAgainTypo: {
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontSize: FontSize.size_mid,
  },
  trackTypo: {
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
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
    height: "5.13%",
    top: "0%",
    bottom: "94.87%",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
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
  image18Icon: {
    width: 246,
    height: 207,
  },
  orderSuccessfullyPlaced: {
    fontSize: FontSize.headingH6_size,
    color: Color.shade4,
  },
  yourOrderIs: {
    alignSelf: "stretch",
    fontSize: FontSize.labelL2_size,
    letterSpacing: 0.2,
    lineHeight: 28,
    color: Color.tint7,
  },
  orderSuccessfullyPlacedParent: {
    width: 326,
    gap: Gap.gap_3xs,
    alignItems: "center",
  },
  delivery: {
    fontFamily: FontFamily.hammersmithOneRegular,
  },
  trackDelivery: {
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
  orderAgain: {
    color: Color.accent,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontSize: FontSize.size_mid,
  },
  button1: {
    borderRadius: Border.br_11xl,
  },
  frameParent: {
    gap: Gap.gap_2xl,
    alignItems: "center",
  },
  image18Parent: {
    marginTop: -231,
    marginLeft: -175,
    left: "50%",
    position: "absolute",
    top: "50%",
    gap: Gap.gap_lg,
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

export default DeliverySuccess;
