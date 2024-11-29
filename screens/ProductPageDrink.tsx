import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

const ProductPageDrink = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productPageDrink}>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={[styles.homeIndicator1, styles.image10IconPosition]} />
      </View>
      <View
        style={[styles.statusBarNotchIphoneXOr, styles.homeIndicatorPosition]}
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
        style={[styles.frameParent, styles.frameParentPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.arrowLeftWrapper, styles.vectorParentBorder]}>
          <Image
            style={styles.arrowLeftIcon}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
        </View>
        <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
        <View style={[styles.arrowLeftWrapper, styles.vectorParentBorder]}>
          <Image
            style={styles.arrowLeftIcon}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.image10Wrapper, styles.frameParentPosition]}>
        <Image
          style={[styles.image10Icon, styles.image10IconPosition]}
          contentFit="cover"
          source={require("../assets/image-10.png")}
        />
      </View>
      <View style={[styles.descriptionParent, styles.image10IconPosition]}>
        <Text style={[styles.description, styles.descriptionTypo]}>
          Description
        </Text>
        <Text style={[styles.ourClassicCheeseburger, styles.minsTypo]}>
          Our classic cheeseburger is made with a fresh, never-frozen beef patty
          that is cooked to perfection and topped with melted American cheese,
          lettuce, tomato, pickles, and onions. It is served on a toasted bun
          and is sure to satisfy your hunger.
        </Text>
      </View>
      <View style={[styles.frameGroup, styles.frameParentPosition]}>
        <View style={[styles.frameContainer, styles.vectorParentSpaceBlock]}>
          <View style={styles.frameView}>
            <View style={styles.clockParent}>
              <Image
                style={styles.clockIcon}
                contentFit="cover"
                source={require("../assets/clock.png")}
              />
              <Text style={[styles.mins, styles.minsClr]}>12mins</Text>
            </View>
            <Text style={[styles.delivery, styles.deliveryFlexBox]}>
              Delivery
            </Text>
          </View>
          <View style={styles.frameChild} />
          <View style={styles.frameView}>
            <View style={styles.clockParent}>
              <Image
                style={styles.clockIcon}
                contentFit="cover"
                source={require("../assets/messages3.png")}
              />
              <Text style={[styles.mins, styles.minsClr]}>2k+</Text>
            </View>
            <Text style={[styles.delivery, styles.deliveryFlexBox]}>
              Review
            </Text>
          </View>
          <View style={styles.frameChild} />
          <View style={styles.frameView}>
            <View style={styles.clockParent}>
              <Image
                style={styles.clockIcon}
                contentFit="cover"
                source={require("../assets/star.png")}
              />
              <Text style={[styles.mins, styles.minsClr]}>4.8</Text>
            </View>
            <Text style={[styles.delivery, styles.deliveryFlexBox]}>
              Ratings
            </Text>
          </View>
        </View>
        <View style={styles.frameParent3}>
          <View style={styles.cappuccinoParent}>
            <Text style={[styles.cappuccino, styles.minsClr]}>cappuccino</Text>
            <Text style={[styles.kc, styles.kcTypo]}>
              <Text style={styles.text1}>{`99 `}</Text>
              <Text style={styles.kc1}>Kc</Text>
            </Text>
          </View>
          <View style={[styles.vectorParent, styles.vectorParentSpaceBlock]}>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/line-3.png")}
            />
            <Text style={styles.text2}>1</Text>
            <Text style={styles.text2}>+</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent4, styles.frameParentPosition]}>
        <View style={styles.frameParent5}>
          <View style={[styles.paperCup1Parent, styles.paperParentLayout]}>
            <Image
              style={styles.arrowLeftIcon}
              contentFit="cover"
              source={require("../assets/papercup-1.png")}
            />
            <Text style={[styles.small, styles.minsTypo]}>Small</Text>
          </View>
          <View style={[styles.paperCup21Parent, styles.paperParentLayout]}>
            <Image
              style={styles.paperCup21}
              contentFit="cover"
              source={require("../assets/papercup-2-1.png")}
            />
            <Text style={[styles.medium, styles.minsClr]}>Medium</Text>
          </View>
          <View style={[styles.paperCup21Parent, styles.paperParentLayout]}>
            <Image
              style={styles.paperCup211}
              contentFit="cover"
              source={require("../assets/papercup-2-11.png")}
            />
            <Text style={[styles.medium, styles.minsClr]}>Large</Text>
          </View>
        </View>
        <View style={styles.frameParent3}>
          <Text style={[styles.addToppings, styles.descriptionTypo]}>
            Add Toppings
          </Text>
          <Image
            style={styles.clockIcon}
            contentFit="cover"
            source={require("../assets/arrowdown.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("CartOrBasket")}
      >
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/bag2.png")}
        />
        <Text style={[styles.addToCart, styles.deliveryFlexBox]}>
          Add to cart
        </Text>
      </Pressable>
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
  image10IconPosition: {
    left: "50%",
    position: "absolute",
  },
  frameParentPosition: {
    left: 20,
    position: "absolute",
  },
  vectorParentBorder: {
    borderWidth: 1,
    borderColor: Color.tint3,
    borderStyle: "solid",
    alignItems: "center",
  },
  detailsTypo: {
    color: Color.shade4,
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
  },
  descriptionTypo: {
    fontSize: FontSize.labelL2_size,
    textAlign: "left",
  },
  minsTypo: {
    letterSpacing: 0.2,
    fontSize: FontSize.labelL2_size,
  },
  vectorParentSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  minsClr: {
    color: Color.shade1,
    textAlign: "left",
  },
  deliveryFlexBox: {
    letterSpacing: 0.1,
    textAlign: "left",
  },
  kcTypo: {
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
  },
  paperParentLayout: {
    gap: Gap.gap_3xs,
    height: 96,
    width: 96,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
  },
  homeIndicator1: {
    marginTop: -2,
    marginLeft: -60,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.shade4,
    height: 4,
    width: 120,
    top: "50%",
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
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  arrowLeftIcon: {
    height: 24,
    width: 24,
  },
  arrowLeftWrapper: {
    borderRadius: Border.br_5xl,
    width: 44,
    height: 44,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  details: {
    textAlign: "left",
    fontSize: FontSize.labelL1_size,
  },
  frameParent: {
    top: 52,
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  image10Icon: {
    marginTop: -120,
    marginLeft: -161,
    width: 317,
    height: 259,
    top: "50%",
    left: "50%",
  },
  image10Wrapper: {
    top: 112,
    borderRadius: Border.br_base,
    height: 296,
    width: 350,
    overflow: "hidden",
    backgroundColor: Color.tint1,
    left: 20,
  },
  description: {
    color: Color.shade4,
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
  },
  ourClassicCheeseburger: {
    fontFamily: FontFamily.labelL1,
    lineHeight: 28,
    textAlign: "left",
    width: 350,
  },
  descriptionParent: {
    marginLeft: -175,
    top: 772,
    gap: Gap.gap_4xs,
  },
  clockIcon: {
    width: 20,
    height: 20,
  },
  mins: {
    fontFamily: FontFamily.labelL1,
    letterSpacing: 0.2,
    fontSize: FontSize.labelL2_size,
  },
  clockParent: {
    gap: Gap.gap_4xs,
    alignItems: "center",
    flexDirection: "row",
  },
  delivery: {
    fontSize: FontSize.size_sm,
    color: Color.tint10,
    fontFamily: FontFamily.labelL1,
  },
  frameView: {
    gap: Gap.gap_2xs,
    alignItems: "center",
  },
  frameChild: {
    borderRightWidth: 1,
    width: 1,
    height: 50,
    borderColor: Color.tint3,
    borderStyle: "solid",
  },
  frameContainer: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.tint2,
    gap: Gap.gap_3xl,
    width: 350,
  },
  cappuccino: {
    fontSize: FontSize.headingH6_size,
    lineHeight: 28,
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
  },
  text1: {
    color: Color.accent,
    fontSize: FontSize.labelL1_size,
  },
  kc1: {
    fontSize: FontSize.size_mid,
    color: Color.tint10,
  },
  kc: {
    textAlign: "left",
  },
  cappuccinoParent: {
    justifyContent: "flex-end",
    gap: Gap.gap_4xs,
  },
  frameInner: {
    maxHeight: "100%",
    width: 12,
  },
  text2: {
    color: Color.colorBlack,
    fontFamily: FontFamily.labelL1,
    textAlign: "left",
    fontSize: FontSize.labelL1_size,
  },
  vectorParent: {
    borderRadius: Border.br_11xl,
    borderWidth: 1,
    borderColor: Color.tint3,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "space-between",
    width: 120,
  },
  frameParent3: {
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroup: {
    top: 416,
    gap: Gap.gap_2xl,
  },
  small: {
    color: Color.tint1,
    textAlign: "left",
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
  },
  paperCup1Parent: {
    backgroundColor: Color.shade1,
  },
  paperCup21: {
    width: 32,
    height: 32,
  },
  medium: {
    letterSpacing: 0.2,
    fontSize: FontSize.labelL2_size,
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
  },
  paperCup21Parent: {
    backgroundColor: Color.colorWhite,
  },
  paperCup211: {
    width: 40,
    height: 40,
  },
  frameParent5: {
    gap: Gap.gap_sm,
    flexDirection: "row",
  },
  addToppings: {
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.accent1,
  },
  frameParent4: {
    top: 618,
    gap: Gap.gap_sm,
    alignItems: "center",
  },
  addToCart: {
    lineHeight: 20,
    fontFamily: FontFamily.hammersmithOneRegular,
    color: Color.colorWhite,
    fontSize: FontSize.size_mid,
  },
  button: {
    top: 742,
    backgroundColor: Color.accent,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    gap: Gap.gap_2xs,
    width: 350,
    left: 20,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    borderRadius: Border.br_13xl,
  },
  productPageDrink: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_13xl,
    backgroundColor: Color.tint1,
  },
});

export default ProductPageDrink;
