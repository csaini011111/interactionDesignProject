import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const RestaurantNearYou = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.restaurantNearYou}
      onPress={() => navigation.navigate("RestaurantMenu")}
    >
      <Image
        style={[styles.restaurantNearYouChild, styles.restaurantChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Text style={[styles.storiesFromNearby, styles.fromClr]}>
        Stories from nearby restaurants
      </Text>
      <Text style={[styles.theLastestFrom, styles.theLastestFromTypo]}>
        The lastest from the spots you
      </Text>
      <Image
        style={[styles.restaurantNearYouItem, styles.restaurantPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Image
        style={[styles.restaurantNearYouInner, styles.restaurantPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-41.png")}
      />
      <Image
        style={[styles.image16Icon, styles.restaurantPosition]}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
      <Text style={[styles.mammaMiaPizzeria, styles.veganTypo]}>{`Mamma Mia
Pizzeria`}</Text>
      <Text style={[styles.indianNature, styles.indianNatureTypo]}>
        Indian nature
      </Text>
      <Text style={[styles.spiceJunction, styles.indianNatureTypo]}>
        Spice Junction
      </Text>
      <Text style={[styles.hoursAgo, styles.agoTypo]}>{`2 hours ago
`}</Text>
      <Text style={[styles.hourAgo, styles.agoTypo]}>{`1 hour ago
`}</Text>
      <Text style={[styles.hoursAgo1, styles.agoTypo]}>{`4 hours ago
`}</Text>
      <Pressable
        style={styles.allRestaurant}
        onPress={() => navigation.navigate("SearchForAParticularFood")}
      >
        <Text style={[styles.allRestaurant1, styles.kmTypo]}>
          All restaurant
        </Text>
      </Pressable>
      <View style={[styles.rectangleView, styles.restaurantChildLayout1]} />
      <Text style={[styles.vegan, styles.minsClr]}>Vegan</Text>
      <View
        style={[styles.restaurantNearYouChild1, styles.restaurantChildLayout1]}
      />
      <Image
        style={[styles.caretDownSolid3Icon, styles.caretIconLayout]}
        contentFit="cover"
        source={require("../assets/caretdownsolid-3.png")}
      />
      <View
        style={[styles.restaurantNearYouChild2, styles.restaurantChildLayout1]}
      />
      <Image
        style={styles.image15Icon}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Image
        style={[styles.restaurantNearYouChild3, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <Image
        style={[styles.caretDownSolid1Icon, styles.caretIconLayout]}
        contentFit="cover"
        source={require("../assets/caretdownsolid-3.png")}
      />
      <Text style={[styles.mins, styles.minsClr]}>20-30 mins</Text>
      <Image
        style={[styles.caretDownSolid2Icon, styles.caretIconLayout]}
        contentFit="cover"
        source={require("../assets/caretdownsolid-3.png")}
      />
      <Text style={[styles.price, styles.textTypo1]}>Price</Text>
      <View
        style={[styles.restaurantNearYouChild4, styles.restaurantChildLayout1]}
      />
      <Text style={[styles.sort, styles.minsClr]}>{`Sort
`}</Text>
      <Image
        style={[styles.caretDownSolid4Icon, styles.caretIconLayout]}
        contentFit="cover"
        source={require("../assets/caretdownsolid-3.png")}
      />
      <Text style={[styles.greenGoddessDelight, styles.veganPosition]}>
        Green Goddess Delight
      </Text>
      <Text style={[styles.veganBowlsPlantBased, styles.veganPosition]}>
        Vegan Bowls, Plant-based
      </Text>
      <View
        style={[styles.restaurantNearYouChild5, styles.restaurantChildBorder2]}
      />
      <Text style={[styles.km, styles.kmTypo]}>4.7km</Text>
      <View
        style={[styles.restaurantNearYouChild6, styles.restaurantChildPosition]}
      />
      <View
        style={[styles.restaurantNearYouChild7, styles.restaurantChildLayout]}
      />
      <View
        style={[styles.restaurantNearYouChild8, styles.restaurantChildBorder1]}
      />
      <View
        style={[styles.restaurantNearYouChild9, styles.restaurantChildBorder1]}
      />
      <View
        style={[styles.restaurantNearYouChild10, styles.restaurantChildBorder1]}
      />
      <View
        style={[styles.restaurantNearYouChild11, styles.restaurantChildBorder]}
      />
      <View
        style={[styles.restaurantNearYouChild12, styles.restaurantChildBorder]}
      />
      <View
        style={[styles.restaurantNearYouChild13, styles.restaurantChildBorder]}
      />
      <Text style={[styles.harvestHaven, styles.kmTypo]}>Harvest Haven</Text>
      <Text style={[styles.organicSaladsColdPressed, styles.fromClr]}>
        Organic Salads, Cold-Pressed Juices,
      </Text>
      <Text style={[styles.zenVeggieBistro, styles.veganPosition]}>
        Zen Veggie Bistro
      </Text>
      <Text style={[styles.vegetableSushiVegan, styles.veganPosition]}>
        Vegetable Sushi, Vegan
      </Text>
      <Image
        style={[styles.starSolid1Icon, styles.starIconLayout]}
        contentFit="cover"
        source={require("../assets/starsolid-1.png")}
      />
      <Image
        style={[styles.starSolid2Icon, styles.starIconLayout]}
        contentFit="cover"
        source={require("../assets/starsolid-2.png")}
      />
      <Image
        style={[styles.starSolid3Icon, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/starsolid-2.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>4.8</Text>
      <Text style={styles.text1}>(169)</Text>
      <Text style={[styles.text2, styles.textTypo1]}>(236)</Text>
      <Text style={[styles.text3, styles.textTypo]}>4.7</Text>
      <Text style={[styles.text4, styles.textPosition]}>{`4.9
`}</Text>
      <Text style={[styles.text5, styles.textPosition]}>(127)</Text>
      <Text style={[styles.km1, styles.kmTypo]}>2.5km</Text>
      <Text style={[styles.km2, styles.textPosition]}>1.7km</Text>
      <Text style={[styles.mins1, styles.minsTypo]}>20-30mins</Text>
      <Text style={[styles.mins2, styles.minsTypo]}>15-20mins</Text>
      <Text style={[styles.mins3, styles.textPosition]}>10-15 mins</Text>
      <View
        style={[styles.restaurantNearYouChild14, styles.restaurantChildLayout2]}
      />
      <View style={styles.tabBar}>
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/home2.png")}
        />
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/heart3.png")}
        />
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/bag23.png")}
        />
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/profilecircle.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  restaurantChildLayout2: {
    width: 430,
    position: "absolute",
  },
  fromClr: {
    color: Color.colorBlack,
    textAlign: "center",
  },
  theLastestFromTypo: {
    fontSize: FontSize.labelL1_size,
    position: "absolute",
  },
  restaurantPosition: {
    height: 139,
    top: 162,
    position: "absolute",
  },
  veganTypo: {
    left: 16,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  indianNatureTypo: {
    color: Color.colorMediumslateblue_100,
    top: 320,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.labelL1_size,
    textAlign: "center",
    position: "absolute",
  },
  agoTypo: {
    top: 386,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.labelL1_size,
    textAlign: "center",
    position: "absolute",
  },
  kmTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  restaurantChildLayout1: {
    height: 31,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.accent,
    position: "absolute",
  },
  minsClr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  caretIconLayout: {
    height: 32,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIconLayout: {
    height: 77,
    width: 88,
    left: 12,
    position: "absolute",
  },
  textTypo1: {
    left: 247,
    fontSize: FontSize.labelL2_size,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  veganPosition: {
    left: 117,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  restaurantChildBorder2: {
    height: 24,
    borderWidth: 1,
    borderColor: Color.accent,
    borderStyle: "solid",
    top: 584,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  restaurantChildPosition: {
    left: 302,
    width: 116,
  },
  restaurantChildLayout: {
    width: 85,
    left: 204,
  },
  restaurantChildBorder1: {
    top: 851,
    height: 24,
    borderWidth: 1,
    borderColor: Color.accent,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  restaurantChildBorder: {
    top: 702,
    height: 24,
    borderWidth: 1,
    borderColor: Color.accent,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  starIconLayout: {
    height: 16,
    width: 18,
    overflow: "hidden",
  },
  textPosition: {
    top: 855,
    position: "absolute",
  },
  textTypo: {
    left: 222,
    fontSize: FontSize.labelL2_size,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  minsTypo: {
    left: 309,
    fontSize: FontSize.labelL2_size,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  restaurantNearYouChild: {
    top: 0,
    left: 0,
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    height: 69,
  },
  storiesFromNearby: {
    top: 68,
    left: 27,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    fontSize: FontSize.headingH6_size,
    position: "absolute",
  },
  theLastestFrom: {
    top: 119,
    left: 33,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
  },
  restaurantNearYouItem: {
    width: 117,
    borderRadius: Border.br_mini,
    height: 139,
    top: 162,
    left: 23,
  },
  restaurantNearYouInner: {
    left: 289,
    width: 117,
    borderRadius: Border.br_mini,
    height: 139,
    top: 162,
  },
  image16Icon: {
    left: 156,
    width: 129,
    height: 139,
    top: 162,
  },
  mammaMiaPizzeria: {
    top: 319,
    color: "#205cf7",
    fontSize: FontSize.labelL1_size,
    position: "absolute",
  },
  indianNature: {
    left: 152,
  },
  spiceJunction: {
    left: 286,
  },
  hoursAgo: {
    left: 18,
    color: Color.colorGray_200,
  },
  hourAgo: {
    left: 165,
    color: Color.colorGray_200,
  },
  hoursAgo1: {
    left: 299,
    color: Color.colorGray_200,
  },
  allRestaurant1: {
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    color: Color.colorBlack,
  },
  allRestaurant: {
    top: 429,
    left: 23,
    position: "absolute",
  },
  rectangleView: {
    width: 92,
    left: 6,
    top: 479,
  },
  vegan: {
    fontSize: FontSize.labelL2_size,
    top: 485,
    color: Color.colorWhite,
    left: 16,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  restaurantNearYouChild1: {
    left: 239,
    width: 102,
    top: 478,
  },
  caretDownSolid3Icon: {
    top: 477,
    left: 312,
  },
  restaurantNearYouChild2: {
    width: 116,
    left: 110,
    top: 479,
  },
  image15Icon: {
    top: 531,
    width: 98,
    height: 93,
    left: 12,
    position: "absolute",
  },
  rectangleIcon: {
    top: 651,
  },
  restaurantNearYouChild3: {
    top: 759,
  },
  caretDownSolid1Icon: {
    left: 73,
    top: 478,
  },
  mins: {
    top: 487,
    left: 110,
    fontSize: FontSize.labelL2_size,
    width: 92,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  caretDownSolid2Icon: {
    left: 205,
    top: 479,
  },
  price: {
    color: Color.colorWhite,
    position: "absolute",
    top: 485,
  },
  restaurantNearYouChild4: {
    left: 348,
    width: 78,
    top: 478,
  },
  sort: {
    left: 358,
    fontSize: FontSize.labelL2_size,
    top: 485,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  caretDownSolid4Icon: {
    top: 476,
    left: 402,
  },
  greenGoddessDelight: {
    top: 526,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.headingH6_size,
  },
  veganBowlsPlantBased: {
    top: 559,
    fontSize: FontSize.labelL2_size,
    fontFamily: FontFamily.interRegular,
  },
  restaurantNearYouChild5: {
    width: 72,
    left: 116,
  },
  km: {
    left: 124,
    top: 587,
    fontSize: FontSize.labelL2_size,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  restaurantNearYouChild6: {
    height: 24,
    borderWidth: 1,
    borderColor: Color.accent,
    borderStyle: "solid",
    top: 584,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  restaurantNearYouChild7: {
    height: 24,
    borderWidth: 1,
    borderColor: Color.accent,
    borderStyle: "solid",
    top: 584,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  restaurantNearYouChild8: {
    width: 72,
    left: 110,
  },
  restaurantNearYouChild9: {
    left: 296,
    width: 116,
  },
  restaurantNearYouChild10: {
    left: 198,
    width: 88,
    top: 851,
  },
  restaurantNearYouChild11: {
    width: 72,
    left: 116,
  },
  restaurantNearYouChild12: {
    left: 302,
    width: 116,
  },
  restaurantNearYouChild13: {
    width: 85,
    left: 204,
  },
  harvestHaven: {
    top: 636,
    left: 116,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.headingH6_size,
    position: "absolute",
  },
  organicSaladsColdPressed: {
    top: 671,
    left: 116,
    fontSize: FontSize.labelL2_size,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    position: "absolute",
  },
  zenVeggieBistro: {
    top: 744,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.headingH6_size,
  },
  vegetableSushiVegan: {
    top: 779,
    fontSize: FontSize.labelL2_size,
    fontFamily: FontFamily.interRegular,
  },
  starSolid1Icon: {
    top: 589,
    left: 208,
    position: "absolute",
  },
  starSolid2Icon: {
    top: 706,
    left: 204,
    height: 16,
    width: 18,
    position: "absolute",
  },
  starSolid3Icon: {
    left: 197,
    height: 16,
    width: 18,
    overflow: "hidden",
  },
  text: {
    top: 587,
  },
  text1: {
    left: 248,
    top: 587,
    fontSize: FontSize.labelL2_size,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    position: "absolute",
  },
  text2: {
    top: 704,
    color: Color.colorGray_200,
    position: "absolute",
  },
  text3: {
    top: 704,
  },
  text4: {
    left: 216,
    fontSize: FontSize.labelL2_size,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
  },
  text5: {
    left: 247,
    fontSize: FontSize.labelL2_size,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorGray_200,
  },
  km1: {
    left: 122,
    top: 704,
    fontSize: FontSize.labelL2_size,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  km2: {
    left: 120,
    fontSize: FontSize.labelL2_size,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
  },
  mins1: {
    top: 587,
  },
  mins2: {
    top: 704,
  },
  mins3: {
    left: 313,
    fontSize: FontSize.labelL2_size,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
  },
  restaurantNearYouChild14: {
    top: 798,
    height: 95,
    left: 6,
    backgroundColor: Color.colorWhite,
    width: 430,
  },
  homeIcon: {
    width: 28,
    height: 28,
  },
  tabBar: {
    marginLeft: -194,
    top: 839,
    left: "50%",
    borderRadius: Border.br_21xl,
    width: 385,
    height: 82,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_3xl,
    backgroundColor: Color.accent,
    position: "absolute",
  },
  restaurantNearYou: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_21xl,
    borderBottomLeftRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default RestaurantNearYou;
