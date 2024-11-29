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
  FontFamily,
  Color,
  Border,
  FontSize,
  Gap,
} from "../GlobalStyles";

const TrackDeliveryFullModal = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={[
        styles.trackDeliveryFullModal,
        styles.trackDeliveryFullModalLayout,
      ]}
      resizeMode="cover"
      source={require("../assets/trackdeliveryfullmodal.png")}
    >
      <View
        style={[
          styles.statusBarNotchIphoneXOr,
          styles.trackDeliveryModalSpaceBlock,
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
        style={[styles.trackDeliveryFullModalInner, styles.trackPosition]}
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
        style={styles.trackDeliveryFullModalChild}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={styles.trackDeliveryFullModalItem}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={[styles.vuesaxboldhome, styles.wrapperFlexBox]}>
        <Image
          style={styles.homeIconLayout}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </View>
      <View style={[styles.vuesaxboldhome1, styles.wrapperFlexBox]}>
        <Image
          style={styles.homeIconLayout}
          contentFit="cover"
          source={require("../assets/box.png")}
        />
      </View>
      <View style={[styles.vuesaxboldhome2, styles.wrapperFlexBox]}>
        <Image
          style={styles.homeIconLayout}
          contentFit="cover"
          source={require("../assets/shop.png")}
        />
      </View>
      <View style={[styles.trackDeliveryModal, styles.trackPosition]}>
        <View style={styles.frameParent}>
          <View style={[styles.a45eWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.a45e, styles.a45eTypo]}>#33-A45E</Text>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.remainingTimeParent}>
              <Text style={[styles.remainingTime, styles.fromClr]}>
                Remaining time
              </Text>
              <Text style={[styles.mins, styles.a45eTypo]}>3 mins</Text>
            </View>
            <View style={[styles.frameChild, styles.frameBorder]} />
            <View style={styles.remainingTimeParent}>
              <Text style={[styles.remainingTime, styles.fromClr]}>
                Estimated time
              </Text>
              <Text style={[styles.mins, styles.a45eTypo]}>12 mins</Text>
            </View>
          </View>
          <View style={[styles.frameItem, styles.frameBorder]} />
          <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
            <View style={styles.fromParent}>
              <Text style={[styles.from, styles.fromClr]}>From</Text>
              <Text
                style={[styles.blehradsk110120, styles.a45eTypo]}
              >{`Bělehradská 110, 
120 00`}</Text>
            </View>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/line-7.png")}
            />
            <View style={styles.toParent}>
              <Text style={[styles.from, styles.fromClr]}>To</Text>
              <Text
                style={[styles.blehradsk110120, styles.a45eTypo]}
              >{`Legerova 62, 
110 00`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.riderDetailsParent}>
          <Text style={[styles.riderDetails, styles.fromClr]}>
            Rider details
          </Text>
          <View style={styles.frameView}>
            <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
              <View style={[styles.chingsParent, styles.wrapperFlexBox]}>
                <Text style={[styles.blehradsk110120, styles.a45eTypo]}>
                  chings
                </Text>
                <Text style={[styles.id5885554, styles.fromClr]}>
                  ID: 5885554
                </Text>
              </View>
            </View>
            <View style={styles.buttonParent}>
              <Pressable
                style={[styles.button, styles.buttonFlexBox]}
                onPress={() => navigation.navigate("DeliverySuccess1")}
              >
                <Image
                  style={styles.homeIconLayout}
                  contentFit="cover"
                  source={require("../assets/call.png")}
                />
                <Text style={[styles.callRider, styles.messageTypo]}>
                  Call Rider
                </Text>
              </Pressable>
              <View style={[styles.button1, styles.buttonFlexBox]}>
                <Image
                  style={styles.homeIconLayout}
                  contentFit="cover"
                  source={require("../assets/messagetext.png")}
                />
                <Text style={[styles.message, styles.messageTypo]}>
                  Message
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.homeIndicator, styles.trackPosition]} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  trackDeliveryFullModalLayout: {
    width: "100%",
    overflow: "hidden",
  },
  trackDeliveryModalSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xl,
  },
  trackPosition: {
    left: "50%",
    position: "absolute",
  },
  homeIconLayout: {
    height: 24,
    width: 24,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  a45eTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  fromClr: {
    color: Color.tint4,
    textAlign: "left",
  },
  frameBorder: {
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  frameContainerFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "center",
    borderRadius: Border.br_5xl,
    alignItems: "center",
    flexDirection: "row",
  },
  messageTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
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
  trackDeliveryFullModalInner: {
    height: "5.21%",
    marginLeft: -175,
    top: "6.16%",
    bottom: "88.63%",
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  trackDeliveryFullModalChild: {
    top: 252,
    left: 142,
    width: 182,
    height: 448,
    position: "absolute",
  },
  trackDeliveryFullModalItem: {
    top: 434,
    left: 195,
    width: 129,
    height: 266,
    position: "absolute",
  },
  vuesaxboldhome: {
    top: 209,
    left: 119,
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
    justifyContent: "center",
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.shade1,
    shadowColor: "rgba(64, 63, 62, 0.24)",
  },
  vuesaxboldhome1: {
    top: 428,
    left: 174,
    shadowColor: "rgba(120, 196, 164, 0.4)",
    backgroundColor: Color.accent1,
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
    justifyContent: "center",
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    flexDirection: "row",
    position: "absolute",
  },
  vuesaxboldhome2: {
    top: 646,
    left: 306,
    backgroundColor: Color.primary,
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
    justifyContent: "center",
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    flexDirection: "row",
    position: "absolute",
    shadowColor: "rgba(64, 63, 62, 0.24)",
  },
  a45e: {
    color: Color.colorWhite,
    letterSpacing: 0.1,
    fontSize: FontSize.size_sm,
  },
  a45eWrapper: {
    borderRadius: Border.br_6xl,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    backgroundColor: Color.accent,
  },
  remainingTime: {
    fontFamily: FontFamily.labelL1,
    color: Color.tint4,
    fontSize: FontSize.labelL2_size,
    letterSpacing: 0.1,
  },
  mins: {
    fontSize: FontSize.headingH6_size,
    color: Color.tint2,
    letterSpacing: 0.1,
  },
  remainingTimeParent: {
    gap: Gap.gap_5xs,
  },
  frameChild: {
    borderColor: Color.colorGray_100,
    borderRightWidth: 1,
    width: 1,
    alignSelf: "stretch",
  },
  frameGroup: {
    gap: Gap.gap_2xl,
    flexDirection: "row",
  },
  frameItem: {
    borderColor: Color.shade1,
    borderTopWidth: 1,
    height: 1,
    alignSelf: "stretch",
  },
  from: {
    fontFamily: FontFamily.labelL1,
    color: Color.tint4,
    fontSize: FontSize.labelL2_size,
  },
  blehradsk110120: {
    letterSpacing: 0.2,
    color: Color.tint1,
    fontSize: FontSize.labelL2_size,
  },
  fromParent: {
    paddingRight: Padding.p_base,
    gap: Gap.gap_4xs,
    flex: 1,
  },
  frameInner: {
    maxHeight: "100%",
    width: 30,
  },
  toParent: {
    paddingLeft: Padding.p_base,
    gap: Gap.gap_4xs,
    flex: 1,
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  frameParent: {
    zIndex: 0,
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  riderDetails: {
    fontSize: FontSize.labelL1_size,
    fontWeight: "500",
    fontFamily: FontFamily.headingH6,
  },
  id5885554: {
    fontFamily: FontFamily.labelL1,
    color: Color.tint4,
    letterSpacing: 0.1,
    fontSize: FontSize.size_sm,
  },
  chingsParent: {
    gap: Gap.gap_5xs,
  },
  frameWrapper: {
    width: 225,
    paddingLeft: 62,
    flexDirection: "row",
  },
  callRider: {
    color: Color.tint1,
  },
  button: {
    gap: Gap.gap_4xs,
    backgroundColor: Color.accent,
  },
  message: {
    color: Color.tint2,
  },
  button1: {
    gap: Gap.gap_2xs,
  },
  buttonParent: {
    gap: Gap.gap_sm,
    flexDirection: "row",
  },
  frameView: {
    gap: Gap.gap_lg,
  },
  riderDetailsParent: {
    borderRadius: Border.br_xs,
    padding: Padding.p_base,
    gap: Gap.gap_xs,
    zIndex: 1,
    alignSelf: "stretch",
    backgroundColor: Color.shade1,
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
  trackDeliveryModal: {
    marginLeft: -189,
    top: 347,
    backgroundColor: Color.shade2,
    width: 366,
    gap: Gap.gap_4xl,
    borderRadius: Border.br_5xl,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xl,
  },
  trackDeliveryFullModal: {
    borderRadius: Border.br_13xl,
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default TrackDeliveryFullModal;
