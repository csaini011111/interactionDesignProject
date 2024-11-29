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

const ProductPageFood = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productPageFood}>
      <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <View style={[styles.statusBarNotchIphoneXOr, styles.frameParentFlexBox]}>
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
        style={[styles.frameParent, styles.framePosition]}
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
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <View style={[styles.descriptionParent, styles.parentPosition]}>
        <Text style={[styles.description, styles.descriptionTypo]}>
          Description
        </Text>
        <Text style={[styles.pokeBowlContains, styles.minsTypo]}>
          Poke bowl (contains rice, avacado, tomato, mango, salmon, nuts, )
        </Text>
      </View>
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View style={[styles.frameContainer, styles.vectorParentSpaceBlock]}>
          <View style={styles.buttonFlexBox}>
            <View style={[styles.clockParent, styles.frameParentFlexBox]}>
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
          <View style={styles.buttonFlexBox}>
            <View style={[styles.clockParent, styles.frameParentFlexBox]}>
              <Image
                style={styles.clockIcon}
                contentFit="cover"
                source={require("../assets/messages3.png")}
              />
              <Text style={[styles.mins, styles.minsClr]}>99+</Text>
            </View>
            <Text style={[styles.delivery, styles.deliveryFlexBox]}>
              Review
            </Text>
          </View>
          <View style={styles.frameChild} />
          <View style={styles.buttonFlexBox}>
            <View style={[styles.clockParent, styles.frameParentFlexBox]}>
              <Image
                style={styles.clockIcon}
                contentFit="cover"
                source={require("../assets/star.png")}
              />
              <Text style={[styles.mins, styles.minsClr]}>4.2</Text>
            </View>
            <Text style={[styles.delivery, styles.deliveryFlexBox]}>
              Ratings
            </Text>
          </View>
        </View>
        <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
          <View style={styles.pokeBowlParent}>
            <Text style={[styles.pokeBowl, styles.minsClr]}>Poke Bowl</Text>
            <Text style={[styles.kc, styles.kcTypo]}>
              <Text style={styles.text2}>{`170 `}</Text>
              <Text style={styles.kc1}>Kc</Text>
            </Text>
          </View>
          <View style={[styles.vectorParent, styles.vectorParentSpaceBlock]}>
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/line-3.png")}
            />
            <Text style={styles.text3}>1</Text>
            <Text style={styles.text3}>+</Text>
          </View>
        </View>
      </View>
      <View style={[styles.addExtraIngredientParent, styles.parentPosition]}>
        <Text style={[styles.addExtraIngredient, styles.descriptionTypo]}>
          Add extra Ingredient
        </Text>
        <Image
          style={styles.arrowDownIcon}
          contentFit="cover"
          source={require("../assets/arrowdown2.png")}
        />
      </View>
      <Pressable
        style={[styles.button, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("ProductPageDrink")}
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
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  framePosition: {
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
  parentPosition: {
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  descriptionTypo: {
    fontSize: FontSize.labelL2_size,
    textAlign: "left",
  },
  minsTypo: {
    letterSpacing: 0.2,
    fontFamily: FontFamily.labelL1,
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
  buttonFlexBox: {
    gap: Gap.gap_2xs,
    alignItems: "center",
  },
  homeIndicator1: {
    marginTop: -2,
    marginLeft: -60,
    top: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.shade4,
    height: 4,
    width: 120,
    left: "50%",
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
  image7Icon: {
    top: 120,
    left: 21,
    width: 337,
    height: 287,
    position: "absolute",
  },
  description: {
    color: Color.shade4,
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
  },
  pokeBowlContains: {
    fontFamily: FontFamily.labelL1,
    lineHeight: 28,
    textAlign: "left",
    width: 350,
  },
  descriptionParent: {
    top: 656,
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
  },
  delivery: {
    fontSize: FontSize.size_sm,
    color: Color.tint10,
    fontFamily: FontFamily.labelL1,
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
  pokeBowl: {
    fontSize: FontSize.headingH6_size,
    lineHeight: 28,
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
  },
  text2: {
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
  pokeBowlParent: {
    justifyContent: "flex-end",
    gap: Gap.gap_4xs,
  },
  frameInner: {
    maxHeight: "100%",
    width: 12,
  },
  text3: {
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
  },
  frameGroup: {
    top: 416,
    gap: Gap.gap_2xl,
  },
  addExtraIngredient: {
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.accent1,
  },
  arrowDownIcon: {
    width: 18,
    height: 18,
  },
  addExtraIngredientParent: {
    top: 602,
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
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
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_xl,
    width: 350,
    left: 20,
    position: "absolute",
    flexDirection: "row",
    borderRadius: Border.br_13xl,
    gap: Gap.gap_2xs,
  },
  productPageFood: {
    backgroundColor: Color.tint1,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_13xl,
  },
});

export default ProductPageFood;
