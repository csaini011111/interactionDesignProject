import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontFamily,
  FontSize,
  Gap,
  Padding,
  Border,
  Color,
} from "../GlobalStyles";

const Favourites = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.favourites, styles.favouritesFlexBox]}>
      <View style={[styles.statusBarNotchIphoneXOr, styles.kcWrapperFlexBox]}>
        <Image
          style={styles.leftSideIcon}
          contentFit="cover"
          source={require("../assets/left-side1.png")}
        />
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch2.png")}
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
            source={require("../assets/recording-indicator.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.frameParent, styles.frameParentFlexBox]}
        onPress={() => navigation.navigate("RestaurantNearYou")}
      >
        <View style={[styles.arrowLeftWrapper, styles.frameParentFlexBox]}>
          <Image
            style={styles.arrowLeftIcon}
            contentFit="cover"
            source={require("../assets/arrowleft1.png")}
          />
        </View>
        <Text style={[styles.favorites, styles.pokeBowlTypo]}>Favorites</Text>
      </Pressable>
      <View style={styles.foodCardParent}>
        <View style={styles.foodCardLayout}>
          <Image
            style={styles.image12Icon}
            contentFit="cover"
            source={require("../assets/image-12.png")}
          />
          <View style={styles.frameGroup}>
            <View style={[styles.pokeBowlParent, styles.parentFlexBox]}>
              <Text style={[styles.pokeBowl, styles.pokeBowlTypo]}>
                Poke Bowl
              </Text>
              <Text style={[styles.pokeBowl, styles.pokeBowlTypo]}>170 Kc</Text>
            </View>
            <Image
              style={[styles.bag2Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bag21.png")}
            />
          </View>
        </View>
        <View style={styles.foodCardLayout}>
          <Image
            style={styles.image13Icon}
            contentFit="cover"
            source={require("../assets/image-13.png")}
          />
          <View style={styles.foodCardInner}>
            <View style={styles.parentFlexBox}>
              <Text style={[styles.pokeBowl, styles.pokeBowlTypo]}>
                Blonde Roast
              </Text>
              <View style={[styles.kcWrapper, styles.kcWrapperFlexBox]}>
                <Text
                  style={[styles.pokeBowl, styles.pokeBowlTypo]}
                >{`99 Kc `}</Text>
              </View>
            </View>
          </View>
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
          <Image
            style={[styles.bag2Icon1, styles.bag2IconPosition]}
            contentFit="cover"
            source={require("../assets/bag21.png")}
          />
          <Image
            style={[styles.bag2Icon2, styles.bag2IconPosition]}
            contentFit="cover"
            source={require("../assets/bag21.png")}
          />
        </View>
        <View>
          <View style={styles.foodCardLayout}>
            <View style={styles.rectangleParent}>
              <View style={[styles.frameChild, styles.framePosition]} />
              <Image
                style={styles.image5Icon}
                contentFit="cover"
                source={require("../assets/image-5.png")}
              />
              <Image
                style={[styles.frameItem, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-35.png")}
              />
            </View>
            <View style={styles.foodCardInner}>
              <View style={styles.parentFlexBox}>
                <Text
                  style={[styles.pokeBowl, styles.pokeBowlTypo]}
                >{`Strawberry
Shortcake`}</Text>
                <Text style={[styles.pokeBowl, styles.pokeBowlTypo]}>
                  130 Kc
                </Text>
              </View>
            </View>
            <Image
              style={[styles.heartIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/heart2.png")}
            />
            <Image
              style={[styles.bag2Icon1, styles.bag2IconPosition]}
              contentFit="cover"
              source={require("../assets/bag22.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  favouritesFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  kcWrapperFlexBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  frameParentFlexBox: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
  },
  pokeBowlTypo: {
    textAlign: "left",
    fontFamily: FontFamily.hammersmithOneRegular,
    fontSize: FontSize.labelL1_size,
  },
  parentFlexBox: {
    gap: Gap.gap_2xs,
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 28,
    width: 28,
  },
  bag2IconPosition: {
    left: 308,
    top: 78,
    height: 28,
    position: "absolute",
    width: 28,
  },
  framePosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  leftSideIcon: {
    height: 11,
    width: 28,
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
    position: "absolute",
    height: 11,
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
    position: "absolute",
    display: "none",
  },
  rightSide: {
    width: 67,
    height: 11,
  },
  statusBarNotchIphoneXOr: {
    width: 390,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  arrowLeftIcon: {
    height: 24,
    width: 24,
  },
  arrowLeftWrapper: {
    borderRadius: Border.br_5xl,
    borderStyle: "solid",
    borderColor: Color.tint2,
    borderWidth: 1,
    width: 44,
    padding: Padding.p_3xs,
    zIndex: 0,
  },
  favorites: {
    marginLeft: -43,
    top: 10,
    color: Color.shade4,
    zIndex: 1,
    left: "50%",
    fontFamily: FontFamily.hammersmithOneRegular,
    fontSize: FontSize.labelL1_size,
    position: "absolute",
  },
  frameParent: {
    width: 350,
    justifyContent: "space-between",
  },
  image12Icon: {
    width: 147,
    height: 152,
  },
  pokeBowl: {
    color: Color.shade1,
  },
  pokeBowlParent: {
    zIndex: 0,
  },
  bag2Icon: {
    top: 55,
    left: 156,
    zIndex: 1,
    position: "absolute",
  },
  frameGroup: {
    width: 211,
    gap: Gap.gap_xl,
    height: 152,
  },
  foodCardLayout: {
    gap: Gap.gap_sm,
    padding: Padding.p_base,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    width: 350,
    flexDirection: "row",
  },
  image13Icon: {
    width: 125,
    height: 123,
    zIndex: 0,
  },
  kcWrapper: {
    alignItems: "baseline",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  foodCardInner: {
    alignSelf: "stretch",
    zIndex: 1,
    flex: 1,
  },
  heartIcon: {
    zIndex: 2,
  },
  bag2Icon1: {
    zIndex: 3,
  },
  bag2Icon2: {
    zIndex: 4,
  },
  frameChild: {
    marginTop: -45,
    marginLeft: -54,
    width: 108,
    height: 90,
  },
  image5Icon: {
    top: -25,
    left: -53,
    width: 227,
    height: 185,
    position: "absolute",
  },
  frameItem: {
    marginTop: -99.3,
    marginLeft: -59,
    height: 197,
    width: 120,
  },
  rectangleParent: {
    borderRadius: Border.br_5xs,
    height: 136,
    width: 120,
    zIndex: 0,
    overflow: "hidden",
    backgroundColor: Color.tint2,
  },
  foodCardParent: {
    height: 691,
    gap: Gap.gap_3xl,
    width: 350,
  },
  favourites: {
    borderRadius: Border.br_13xl,
    width: "100%",
    height: 844,
    gap: 27,
    flex: 1,
    backgroundColor: Color.tint2,
    alignItems: "center",
  },
});

export default Favourites;
