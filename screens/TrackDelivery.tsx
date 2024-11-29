import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Padding,
  Color,
  Border,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const TrackDelivery = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={[styles.trackDeliveryIcon, styles.trackDeliveryIconLayout]}
      resizeMode="cover"
      source={require("../assets/trackdelivery.png")}
    >
      <View
        style={[styles.statusBarNotchIphoneXOr, styles.frameParentSpaceBlock]}
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
        style={[styles.trackDeliveryInner, styles.frameParentPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.close24OutlineWrapper}>
          <Image
            style={[styles.close24Outline, styles.homeIconLayout]}
            contentFit="cover"
            source={require("../assets/close--24--outline.png")}
          />
        </View>
      </Pressable>
      <Image
        style={styles.trackDeliveryChild}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={styles.trackDeliveryItem}
        contentFit="cover"
        source={require("../assets/vector-21.png")}
      />
      <View style={[styles.vuesaxboldhome, styles.vuesaxboldhomeShadowBox]}>
        <Image
          style={styles.homeIconLayout}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </View>
      <View style={[styles.vuesaxboldhome1, styles.a45eWrapperFlexBox]}>
        <Image
          style={styles.homeIconLayout}
          contentFit="cover"
          source={require("../assets/box1.png")}
        />
      </View>
      <View style={[styles.vuesaxboldhome2, styles.vuesaxboldhomeShadowBox]}>
        <Image
          style={styles.homeIconLayout}
          contentFit="cover"
          source={require("../assets/shop1.png")}
        />
      </View>
      <Pressable
        style={[styles.frameParent, styles.frameParentPosition]}
        onPress={() => navigation.navigate("TrackDeliveryFullModal")}
      >
        <View style={[styles.a45eWrapper, styles.a45eWrapperFlexBox]}>
          <Text style={[styles.a45e, styles.a45eFlexBox]}>#33-A45E</Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.remainingTimeParent}>
            <Text style={[styles.remainingTime, styles.a45eFlexBox]}>
              Remaining time
            </Text>
            <Text style={[styles.mins, styles.a45eFlexBox]}>3 mins</Text>
          </View>
          <View style={styles.frameChild} />
          <View style={styles.remainingTimeParent}>
            <Text style={[styles.remainingTime, styles.a45eFlexBox]}>
              Estimated time
            </Text>
            <Text style={[styles.mins, styles.a45eFlexBox]}>12 mins</Text>
          </View>
        </View>
        <View style={[styles.homeIndicator, styles.frameParentPosition]} />
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  trackDeliveryIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameParentSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xl,
  },
  frameParentPosition: {
    left: "50%",
    position: "absolute",
  },
  homeIconLayout: {
    height: 24,
    width: 24,
  },
  vuesaxboldhomeShadowBox: {
    justifyContent: "center",
    shadowColor: "rgba(64, 63, 62, 0.24)",
    height: 48,
    width: 48,
    borderWidth: 2,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    borderRadius: Border.br_5xl,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  a45eWrapperFlexBox: {
    backgroundColor: Color.accent,
    justifyContent: "center",
    alignItems: "center",
  },
  a45eFlexBox: {
    textAlign: "left",
    letterSpacing: 0.1,
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
    right: "0%",
    bottom: "94.87%",
    left: "0%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  close24Outline: {
    overflow: "hidden",
  },
  close24OutlineWrapper: {
    backgroundColor: Color.colorWhite,
    width: 44,
    height: 44,
    padding: Padding.p_3xs,
    borderRadius: Border.br_5xl,
    alignItems: "center",
    flexDirection: "row",
  },
  trackDeliveryInner: {
    height: "5.21%",
    marginLeft: -179,
    top: "6.64%",
    bottom: "88.15%",
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  trackDeliveryChild: {
    top: 252,
    left: 142,
    width: 182,
    height: 448,
    position: "absolute",
  },
  trackDeliveryItem: {
    top: 434,
    left: 195,
    width: 129,
    height: 266,
    position: "absolute",
  },
  vuesaxboldhome: {
    top: 209,
    left: 119,
    backgroundColor: Color.shade1,
  },
  vuesaxboldhome1: {
    top: 428,
    left: 174,
    shadowColor: "rgba(120, 196, 164, 0.4)",
    height: 48,
    width: 48,
    borderWidth: 2,
    borderColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    backgroundColor: Color.accent,
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    flexDirection: "row",
    position: "absolute",
  },
  vuesaxboldhome2: {
    top: 646,
    left: 306,
    backgroundColor: Color.primary,
  },
  a45e: {
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "left",
    letterSpacing: 0.1,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  a45eWrapper: {
    borderRadius: Border.br_6xl,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    zIndex: 0,
  },
  remainingTime: {
    fontSize: FontSize.labelL2_size,
    fontFamily: FontFamily.labelL1,
    color: Color.colorWhite,
    textAlign: "left",
    letterSpacing: 0.1,
  },
  mins: {
    fontSize: FontSize.headingH6_size,
    color: Color.tint1,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    textAlign: "left",
    letterSpacing: 0.1,
  },
  remainingTimeParent: {
    gap: Gap.gap_5xs,
  },
  frameChild: {
    alignSelf: "stretch",
    borderColor: Color.colorGray_100,
    borderRightWidth: 1,
    width: 1,
    borderStyle: "solid",
  },
  frameGroup: {
    gap: Gap.gap_2xl,
    zIndex: 1,
    flexDirection: "row",
  },
  homeIndicator: {
    marginLeft: -40,
    top: 6,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_100,
    width: 80,
    height: 4,
    zIndex: 2,
  },
  frameParent: {
    marginLeft: -183,
    top: 708,
    backgroundColor: Color.shade2,
    width: 366,
    gap: Gap.gap_sm,
    borderRadius: Border.br_5xl,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xl,
  },
  trackDeliveryIcon: {
    borderRadius: Border.br_13xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default TrackDelivery;
