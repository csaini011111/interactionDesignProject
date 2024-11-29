import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  Border,
  Gap,
  FontFamily,
  FontSize,
  Padding,
} from "../GlobalStyles";

const CartOrBasket = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.cartOrBasket, styles.lineIconLayout]}>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={[styles.homeIndicator1, styles.frameChildPosition]} />
      </View>
      <View style={[styles.statusBarNotchIphoneXOr, styles.parentFlexBox1]}>
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
      <View style={[styles.frameParent, styles.button1Position]}>
        <View style={[styles.arrowLeftWrapper, styles.vectorParentBorder]}>
          <Image
            style={styles.arrowLeftIcon}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
        </View>
        <Text style={[styles.cart, styles.cartPosition]}>Cart</Text>
      </View>
      <View style={styles.foodCardParent}>
        <View style={[styles.foodCard, styles.foodCardLayout]}>
          <View style={styles.rectangleParent}>
            <View style={[styles.frameChild, styles.frameChildPosition]} />
            <Image
              style={styles.image8Icon}
              contentFit="cover"
              source={require("../assets/image-8.png")}
            />
          </View>
          <View style={styles.frameGroup}>
            <View style={[styles.pokeBowlParent, styles.parentFlexBox]}>
              <Text style={[styles.pokeBowl, styles.freeTypo]}>Poke Bowl</Text>
              <Text style={[styles.pokeBowl, styles.freeTypo]}>170 Kc</Text>
            </View>
            <View style={[styles.vectorParent, styles.cartPosition]}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/line-3.png")}
              />
              <Text style={[styles.text, styles.cartTypo]}>1</Text>
              <Text style={[styles.text, styles.cartTypo]}>+</Text>
            </View>
          </View>
        </View>
        <View style={[styles.foodCard1, styles.foodCardLayout]}>
          <View style={styles.frameGroup}>
            <View style={[styles.pokeBowlParent, styles.parentFlexBox]}>
              <Text style={[styles.pokeBowl, styles.freeTypo]}>cappuccino</Text>
              <View style={styles.kcWrapper}>
                <Text
                  style={[styles.pokeBowl, styles.freeTypo]}
                >{`99 Kc `}</Text>
              </View>
            </View>
            <View style={[styles.vectorParent, styles.cartPosition]}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/line-3.png")}
              />
              <Text style={[styles.text, styles.cartTypo]}>2</Text>
              <Text style={[styles.text, styles.cartTypo]}>+</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={styles.frameParent1}>
          <View style={[styles.ticketDiscountParent, styles.parentFlexBox1]}>
            <Image
              style={styles.arrowLeftIcon}
              contentFit="cover"
              source={require("../assets/ticketdiscount.png")}
            />
            <Text
              style={[styles.enterPromoCode, styles.subtotalTypo]}
            >{`Enter promo code `}</Text>
          </View>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.apply, styles.applyTypo]}>Apply</Text>
          </View>
        </View>
        <View style={styles.frameParent2}>
          <View style={styles.parentFlexBox}>
            <View style={[styles.subtotalParent, styles.parentFlexBox1]}>
              <Text style={[styles.subtotal, styles.subtotalTypo]}>
                Subtotal
              </Text>
              <Text
                style={[styles.pokeBowl, styles.freeTypo]}
              >{`269 Kc `}</Text>
            </View>
            <View style={[styles.subtotalParent, styles.parentFlexBox1]}>
              <Text style={[styles.subtotal, styles.subtotalTypo]}>
                Delivery fee
              </Text>
              <Text style={styles.freeTypo}>
                <Text style={styles.free1}>Free</Text>
                <Text style={styles.text4}>{` `}</Text>
              </Text>
            </View>
          </View>
          <Image
            style={[styles.lineIcon, styles.lineIconLayout]}
            contentFit="cover"
            source={require("../assets/line-4.png")}
          />
          <View style={[styles.subtotalParent, styles.parentFlexBox1]}>
            <Text style={[styles.total, styles.freeTypo]}>Total</Text>
            <Text style={[styles.pokeBowl, styles.freeTypo]}>{`269 Kc `}</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.image11Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <View style={[styles.button1, styles.buttonFlexBox]}>
        <Pressable onPress={() => navigation.navigate("DeliverySuccess")}>
          <Text style={[styles.checkout1, styles.applyTypo]}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  homeIndicatorPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  frameChildPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  parentFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  button1Position: {
    width: 350,
    left: "50%",
    position: "absolute",
  },
  vectorParentBorder: {
    borderWidth: 1,
    borderColor: Color.tint3,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  cartPosition: {
    zIndex: 1,
    position: "absolute",
  },
  foodCardLayout: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    width: 350,
    flexDirection: "row",
  },
  parentFlexBox: {
    gap: Gap.gap_2xs,
    alignSelf: "stretch",
  },
  freeTypo: {
    color: Color.shade1,
    textAlign: "left",
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
  },
  cartTypo: {
    textAlign: "left",
    fontSize: FontSize.labelL1_size,
  },
  subtotalTypo: {
    color: Color.tint7,
    fontSize: FontSize.labelL2_size,
    textAlign: "left",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  applyTypo: {
    lineHeight: 20,
    letterSpacing: 0.1,
    fontSize: FontSize.size_mid,
    textAlign: "left",
  },
  homeIndicator1: {
    marginTop: -2,
    marginLeft: -60,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.shade4,
    height: 4,
    width: 120,
    left: "50%",
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
    width: 24,
    right: 0,
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
    justifyContent: "space-between",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    overflow: "hidden",
  },
  arrowLeftIcon: {
    height: 24,
    width: 24,
  },
  arrowLeftWrapper: {
    width: 44,
    height: 44,
    padding: Padding.p_3xs,
    zIndex: 0,
    borderRadius: Border.br_5xl,
    borderColor: Color.tint3,
  },
  cart: {
    marginLeft: -32,
    top: 9,
    color: Color.shade4,
    textAlign: "left",
    fontSize: FontSize.labelL1_size,
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
    left: "50%",
  },
  frameParent: {
    height: "5.21%",
    top: "6.16%",
    bottom: "88.63%",
    marginLeft: -175,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    marginTop: -45,
    marginLeft: -54,
    width: 108,
    height: 90,
    left: "50%",
  },
  image8Icon: {
    top: 3,
    left: 0,
    height: 133,
    width: 120,
    position: "absolute",
  },
  rectangleParent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.tint2,
    height: 136,
    width: 120,
    overflow: "hidden",
  },
  pokeBowl: {
    fontSize: FontSize.labelL1_size,
  },
  pokeBowlParent: {
    zIndex: 0,
  },
  frameItem: {
    width: 12,
    maxHeight: "100%",
  },
  text: {
    color: Color.colorBlack,
    fontFamily: FontFamily.labelL1,
  },
  vectorParent: {
    top: 85,
    borderRadius: Border.br_11xl,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.tint3,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    right: 0,
    justifyContent: "space-between",
    width: 120,
  },
  frameGroup: {
    gap: Gap.gap_xl,
    alignSelf: "stretch",
    flex: 1,
  },
  foodCard: {
    padding: Padding.p_base,
    gap: Gap.gap_sm,
  },
  kcWrapper: {
    alignItems: "baseline",
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  foodCard1: {
    paddingLeft: 146,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_base,
  },
  foodCardParent: {
    top: 120,
    gap: Gap.gap_sm,
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  enterPromoCode: {
    letterSpacing: 0.2,
    fontFamily: FontFamily.labelL1,
  },
  ticketDiscountParent: {
    gap: Gap.gap_xs,
  },
  apply: {
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.tint1,
  },
  button: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.shade1,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_base,
  },
  frameParent1: {
    borderColor: Color.colorSilver,
    borderWidth: 0.5,
    height: 48,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_xs,
    paddingRight: 4,
    paddingBottom: Padding.p_xs,
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  subtotal: {
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
  },
  subtotalParent: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  free1: {
    fontSize: FontSize.labelL2_size,
  },
  text4: {
    fontSize: FontSize.labelL1_size,
  },
  lineIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  total: {
    fontSize: FontSize.labelL2_size,
  },
  frameParent2: {
    alignSelf: "stretch",
    gap: Gap.gap_sm,
  },
  frameView: {
    top: 496,
    left: 20,
    gap: 48,
    position: "absolute",
  },
  image11Icon: {
    top: 303,
    left: 37,
    width: 117,
    height: 95,
    position: "absolute",
  },
  checkout1: {
    fontFamily: FontFamily.hammersmithOneRegular,
    color: Color.colorWhite,
  },
  button1: {
    marginLeft: -179,
    top: 739,
    backgroundColor: Color.accent,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_3xl,
    width: 350,
    left: "50%",
    position: "absolute",
    borderRadius: Border.br_13xl,
  },
  cartOrBasket: {
    backgroundColor: Color.tint1,
    height: 844,
    overflow: "hidden",
    flex: 1,
    borderRadius: Border.br_13xl,
  },
});

export default CartOrBasket;
