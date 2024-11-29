import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  Gap,
  FontSize,
  Padding,
  Border,
} from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={[styles.statusBarNotchIphoneXOr, styles.barParentFlexBox]}>
        <Image
          style={styles.leftSideIcon}
          contentFit="cover"
          source={require("../assets/left-side1.png")}
        />
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch3.png")}
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
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator1, styles.tabBarPosition]} />
      </View>
      <View style={[styles.frameParent, styles.barParentFlexBox]}>
        <View style={[styles.element3Wrapper, styles.wrapperBorder]}>
          <Image
            style={styles.element3Icon}
            contentFit="cover"
            source={require("../assets/element3.png")}
          />
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.locationTickParent}>
            <Image
              style={styles.locationTickIcon}
              contentFit="cover"
              source={require("../assets/locationtick.png")}
            />
            <Text style={[styles.setYourLocation, styles.applyVoucherTypo]}>
              Set your location
            </Text>
          </View>
          <View style={styles.prague6Parent}>
            <Text
              style={[styles.prague6, styles.prague6Typo]}
            >{`Prague 6 `}</Text>
            <Image
              style={styles.arrowDownIcon}
              contentFit="cover"
              source={require("../assets/arrowdown1.png")}
            />
          </View>
        </View>
        <View style={[styles.element3Wrapper, styles.wrapperBorder]}>
          <Image
            style={styles.element3Icon}
            contentFit="cover"
            source={require("../assets/notification.png")}
          />
        </View>
      </View>
      <View style={[styles.searchNormalParent, styles.framePressableFlexBox]}>
        <Image
          style={styles.searchNormalIcon}
          contentFit="cover"
          source={require("../assets/searchnormal.png")}
        />
        <Text style={[styles.enterDishName, styles.text1Clr]}>{`Enter dish name
`}</Text>
      </View>
      <View style={[styles.adParent, styles.parentFlexBox]}>
        <View style={styles.ad}>
          <View style={[styles.frameContainer, styles.framePosition]}>
            <View style={styles.getUpTo60Parent}>
              <Text style={[styles.getUpTo, styles.getUpToTypo]}>
                Get up to 60%
              </Text>
              <Text style={[styles.doNotMiss, styles.doNotMissTypo]}>
                Do not miss the opportunity!
              </Text>
            </View>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <Text style={[styles.applyVoucher, styles.offClr]}>
                Apply Voucher
              </Text>
            </View>
          </View>
          <Image
            style={styles.saladIcon}
            contentFit="cover"
            source={require("../assets/salad-icon.png")}
          />
        </View>
        <View style={styles.adsBanner2}>
          <View style={[styles.frameView, styles.framePosition]}>
            <View style={styles.getUpTo60Parent}>
              <Text style={[styles.get15Off, styles.offClr]}>Get 15% off</Text>
              <Text style={[styles.offYourOrder, styles.offClr]}>
                off your order when you sign up for our newsletter.
              </Text>
            </View>
            <View style={[styles.button1, styles.buttonFlexBox]}>
              <Text style={[styles.applyVoucher, styles.offClr]}>
                Claim Voucher
              </Text>
            </View>
          </View>
          <Image
            style={styles.adsBanner2Child}
            contentFit="cover"
            source={require("../assets/rectangle-27.png")}
          />
        </View>
      </View>
      <View style={styles.frameParent1}>
        <View style={[styles.recommendedParent, styles.barParentFlexBox]}>
          <Text style={[styles.recommended, styles.allTypo]}>Recommended</Text>
          <Text style={[styles.viewAll, styles.allTypo]}>View all</Text>
        </View>
        <View style={styles.foodCardParent}>
          <View style={styles.foodCard}>
            <Image
              style={styles.image6Icon}
              contentFit="cover"
              source={require("../assets/image-6.png")}
            />
            <View style={styles.frameParent2}>
              <View style={styles.pokeBowlParent}>
                <Text style={[styles.pokeBowl, styles.text4Clr]}>
                  Poke Bowl
                </Text>
                <View style={[styles.kcParent, styles.barParentFlexBox]}>
                  <Text style={styles.allTypo}>
                    <Text style={styles.text}>{`170 `}</Text>
                    <Text style={styles.kc1}>Kc</Text>
                  </Text>
                  <View style={styles.unionParent}>
                    <Image
                      style={styles.unionIcon}
                      contentFit="cover"
                      source={require("../assets/union.png")}
                    />
                    <Text style={[styles.text1, styles.allTypo]}>4.2</Text>
                  </View>
                </View>
              </View>
              <Pressable
                style={[styles.framePressable, styles.heartWrapperFlexBox]}
                onPress={() => navigation.navigate("ProductPageFood")}
              >
                <View style={[styles.heartWrapper, styles.button2SpaceBlock]}>
                  <Image
                    style={styles.element3Icon}
                    contentFit="cover"
                    source={require("../assets/heart.png")}
                  />
                </View>
                <View style={[styles.button2, styles.button2SpaceBlock]}>
                  <Image
                    style={styles.element3Icon}
                    contentFit="cover"
                    source={require("../assets/bag24.png")}
                  />
                </View>
              </Pressable>
            </View>
          </View>
          <View style={styles.foodCard}>
            <View style={styles.foodCardInner}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-24.png")}
              />
            </View>
            <View style={styles.frameParent2}>
              <View style={styles.pokeBowlParent}>
                <Text style={[styles.pokeBowl, styles.text4Clr]}>
                  Margherita Pizza
                </Text>
                <View style={[styles.kcParent, styles.barParentFlexBox]}>
                  <Text style={styles.allTypo}>
                    <Text style={styles.kc1}>$</Text>
                    <Text style={styles.text4Clr}>8.50</Text>
                  </Text>
                  <View style={styles.unionParent}>
                    <Image
                      style={styles.unionIcon}
                      contentFit="cover"
                      source={require("../assets/union.png")}
                    />
                    <Text style={[styles.text1, styles.allTypo]}>4.8</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.framePressable, styles.heartWrapperFlexBox]}>
                <View style={[styles.heartWrapper, styles.button2SpaceBlock]}>
                  <Image
                    style={styles.element3Icon}
                    contentFit="cover"
                    source={require("../assets/heart.png")}
                  />
                </View>
                <View style={[styles.button2, styles.button2SpaceBlock]}>
                  <Image
                    style={styles.element3Icon}
                    contentFit="cover"
                    source={require("../assets/bag24.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.allParent, styles.parentFlexBox]}>
        <View style={styles.frameGroup}>
          <View style={styles.pizza}>
            <View style={[styles.pizzaChild, styles.pizzaPosition]} />
            <Image
              style={[styles.pizzaItem, styles.pizzaLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-28.png")}
            />
          </View>
          <Text style={[styles.all1, styles.allTypo]}>All</Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.pizza}>
            <View style={[styles.pizzaInner, styles.pizzaPosition]} />
            <Image
              style={[styles.rectangleIcon, styles.pizzaChild5Layout]}
              contentFit="cover"
              source={require("../assets/rectangle-241.png")}
            />
          </View>
          <Text style={[styles.pizza3, styles.allTypo]}>Pizza</Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.pizza}>
            <View style={[styles.pizzaInner, styles.pizzaPosition]} />
            <Image
              style={[styles.pizzaChild1, styles.pizzaLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-25.png")}
            />
          </View>
          <Text style={[styles.pizza3, styles.allTypo]}>Burger</Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.pizza}>
            <View style={[styles.pizzaInner, styles.pizzaPosition]} />
            <Image
              style={styles.pizzaChild3}
              contentFit="cover"
              source={require("../assets/rectangle-351.png")}
            />
          </View>
          <Text style={[styles.pizza3, styles.allTypo]}>Drinks</Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.pizza}>
            <View style={[styles.pizzaInner, styles.pizzaPosition]} />
            <Image
              style={[styles.pizzaChild5, styles.pizzaChild5Layout]}
              contentFit="cover"
              source={require("../assets/rectangle-38.png")}
            />
          </View>
          <Text style={[styles.pizza3, styles.allTypo]}>Fruits</Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.pizza}>
            <View style={[styles.pizzaInner, styles.pizzaPosition]} />
            <Image
              style={[styles.pizzaItem, styles.pizzaLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-28.png")}
            />
          </View>
          <Text style={[styles.pizza3, styles.allTypo]}>Snacks</Text>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/home2.png")}
        />
        <Pressable
          style={styles.homeIcon}
          onPress={() => navigation.navigate("Favourites")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vuesaxboldheart.png")}
          />
        </Pressable>
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/bag22.png")}
        />
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/profilecircle.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tabBarPosition: {
    backgroundColor: Color.shade4,
    left: "50%",
    position: "absolute",
  },
  wrapperBorder: {
    borderWidth: 1,
    borderColor: Color.tint3,
    borderStyle: "solid",
  },
  applyVoucherTypo: {
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  prague6Typo: {
    fontFamily: FontFamily.labelL1,
    letterSpacing: 0.2,
    textAlign: "left",
  },
  framePressableFlexBox: {
    gap: Gap.gap_xs,
    flexDirection: "row",
  },
  text1Clr: {
    color: Color.tint7,
    fontSize: FontSize.labelL2_size,
  },
  parentFlexBox: {
    gap: Gap.gap_md,
    flexDirection: "row",
    position: "absolute",
  },
  framePosition: {
    gap: Gap.gap_lg,
    left: 16,
    top: "50%",
    position: "absolute",
  },
  getUpToTypo: {
    lineHeight: 28,
    fontSize: FontSize.headingH6_size,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  doNotMissTypo: {
    width: 212,
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
    fontSize: FontSize.labelL2_size,
  },
  buttonFlexBox: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  offClr: {
    color: Color.tint1,
    textAlign: "left",
  },
  allTypo: {
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
    textAlign: "left",
  },
  text4Clr: {
    color: Color.shade1,
    fontSize: FontSize.labelL1_size,
  },
  heartWrapperFlexBox: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  button2SpaceBlock: {
    padding: Padding.p_xs,
    borderRadius: Border.br_5xl,
    flexDirection: "row",
  },
  pizzaPosition: {
    borderRadius: Border.br_37xl,
    left: "0.54%",
    bottom: "-0.71%",
    right: "-0.54%",
    top: "0.71%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  pizzaLayout: {
    width: 43,
    position: "absolute",
  },
  pizzaChild5Layout: {
    height: 61,
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
    right: 0,
    width: 24,
    height: 11,
    top: 0,
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
    marginLeft: -195,
    width: 390,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    left: "50%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator1: {
    marginTop: -2,
    marginLeft: -60,
    borderRadius: Border.br_81xl,
    height: 4,
    width: 120,
    top: "50%",
  },
  homeIndicator: {
    height: "4.03%",
    top: "95.97%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    display: "none",
    position: "absolute",
    width: "100%",
  },
  element3Icon: {
    height: 24,
    width: 24,
  },
  element3Wrapper: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_5xl,
    alignItems: "center",
    flexDirection: "row",
  },
  locationTickIcon: {
    height: 20,
    width: 20,
  },
  setYourLocation: {
    color: Color.tint8,
    textAlign: "left",
    fontSize: FontSize.labelL2_size,
  },
  locationTickParent: {
    justifyContent: "center",
    gap: Gap.gap_4xs,
    flexDirection: "row",
  },
  prague6: {
    color: Color.shade4,
    fontSize: FontSize.labelL2_size,
  },
  arrowDownIcon: {
    width: 16,
    height: 16,
  },
  prague6Parent: {
    justifyContent: "center",
    gap: Gap.gap_4xs,
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroup: {
    gap: Gap.gap_4xs,
    alignItems: "center",
  },
  frameParent: {
    marginLeft: -175,
    top: 52,
    width: 350,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  searchNormalIcon: {
    height: 22,
    width: 20,
  },
  enterDishName: {
    width: 171,
    height: 18,
    fontFamily: FontFamily.labelL1,
    letterSpacing: 0.2,
    textAlign: "left",
  },
  searchNormalParent: {
    height: "4.38%",
    marginLeft: -177,
    top: "38.39%",
    bottom: "57.23%",
    borderColor: Color.colorSilver,
    borderWidth: 0.5,
    width: 359,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignItems: "flex-end",
    gap: Gap.gap_xs,
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    left: "50%",
    position: "absolute",
  },
  getUpTo: {
    color: Color.shade4,
    textAlign: "left",
  },
  doNotMiss: {
    color: Color.shade4,
    textAlign: "left",
  },
  getUpTo60Parent: {
    gap: Gap.gap_4xs,
  },
  applyVoucher: {
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  button: {
    backgroundColor: Color.accent,
    borderRadius: Border.br_5xl,
  },
  frameContainer: {
    marginTop: -61,
  },
  saladIcon: {
    height: "87.5%",
    width: "50%",
    top: "17.05%",
    right: "-14.29%",
    bottom: "-4.55%",
    left: "64.29%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ad: {
    backgroundColor: Color.primary,
    borderRadius: Border.br_base,
    height: 176,
    width: 350,
    overflow: "hidden",
  },
  get15Off: {
    lineHeight: 28,
    fontSize: FontSize.headingH6_size,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
  },
  offYourOrder: {
    width: 212,
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
    fontSize: FontSize.labelL2_size,
  },
  button1: {
    backgroundColor: Color.shade1,
    borderRadius: Border.br_5xs,
  },
  frameView: {
    marginTop: -72,
  },
  adsBanner2Child: {
    top: 44,
    left: 200,
    width: 182,
    height: 182,
    position: "absolute",
  },
  adsBanner2: {
    backgroundColor: Color.accent,
    borderRadius: Border.br_base,
    height: 176,
    width: 350,
    overflow: "hidden",
  },
  adParent: {
    top: 124,
    left: 20,
    width: 352,
    height: 176,
  },
  recommended: {
    fontSize: FontSize.labelL1_size,
    color: Color.shade4,
  },
  viewAll: {
    color: Color.accent,
    fontSize: FontSize.labelL2_size,
  },
  recommendedParent: {
    width: 350,
    alignItems: "center",
  },
  image6Icon: {
    width: 79,
    height: 76,
  },
  pokeBowl: {
    fontFamily: FontFamily.headingH6,
    fontWeight: "500",
    textAlign: "left",
  },
  text: {
    color: Color.accent,
    fontSize: FontSize.labelL1_size,
  },
  kc1: {
    color: Color.tint10,
    fontSize: FontSize.size_mid,
  },
  unionIcon: {
    width: 13,
    height: 12,
  },
  text1: {
    color: Color.tint7,
    fontSize: FontSize.labelL2_size,
  },
  unionParent: {
    gap: Gap.gap_4xs,
    alignItems: "center",
    flexDirection: "row",
  },
  kcParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  pokeBowlParent: {
    gap: Gap.gap_2xs,
    alignSelf: "stretch",
  },
  heartWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderWidth: 1,
    borderColor: Color.tint3,
    borderStyle: "solid",
  },
  button2: {
    backgroundColor: Color.accent,
    justifyContent: "center",
    alignItems: "center",
  },
  framePressable: {
    alignSelf: "stretch",
    gap: Gap.gap_xs,
    flexDirection: "row",
  },
  frameParent2: {
    gap: Gap.gap_xl,
    alignSelf: "stretch",
    flex: 1,
  },
  foodCard: {
    width: 318,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_base,
    backgroundColor: Color.colorWhite,
    gap: Gap.gap_sm,
    borderRadius: Border.br_base,
    flexDirection: "row",
  },
  frameChild: {
    left: -30,
    width: 179,
    height: 153,
    top: 0,
    position: "absolute",
  },
  foodCardInner: {
    height: 136,
    backgroundColor: Color.tint2,
    borderRadius: Border.br_5xs,
    width: 120,
    overflow: "hidden",
  },
  foodCardParent: {
    gap: Gap.gap_sm,
    flexDirection: "row",
  },
  frameParent1: {
    top: 527,
    left: 14,
    width: 376,
    height: 195,
    gap: Gap.gap_sm,
    position: "absolute",
  },
  pizzaChild: {
    backgroundColor: Color.colorWhite,
  },
  pizzaItem: {
    marginTop: -23,
    marginLeft: -22,
    height: 46,
    top: "50%",
    left: "50%",
  },
  pizza: {
    width: 56,
    height: 56,
    overflow: "hidden",
  },
  all1: {
    color: Color.shade4,
    fontSize: FontSize.labelL2_size,
  },
  pizzaInner: {
    backgroundColor: Color.tint2,
  },
  rectangleIcon: {
    left: -8,
    width: 72,
    top: 0,
  },
  pizza3: {
    color: Color.tint9,
    fontSize: FontSize.labelL2_size,
  },
  pizzaChild1: {
    top: 11,
    left: 5,
    height: 36,
  },
  pizzaChild3: {
    marginTop: -25,
    marginLeft: -19,
    width: 38,
    height: 50,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  pizzaChild5: {
    marginTop: -29.9,
    marginLeft: -29,
    width: 57,
    top: "50%",
    left: "50%",
  },
  allParent: {
    top: 395,
    left: 12,
    width: 436,
  },
  homeIcon: {
    height: 28,
    width: 28,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  tabBar: {
    marginLeft: -184,
    top: 759,
    borderRadius: Border.br_21xl,
    alignItems: "baseline",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_3xl,
    width: 350,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  home: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.tint1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Home;
