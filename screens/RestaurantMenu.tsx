import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const RestaurantMenu = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.restaurantMenu}
      onPress={() => navigation.navigate("SearchForAParticularFood")}
    >
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
      </Pressable>
      <Image
        style={styles.image14Icon}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <Text style={[styles.menu, styles.menuTypo]}>Menu</Text>
      <Text style={[styles.snack, styles.textTypo]}>Snack</Text>
      <Text style={[styles.text, styles.textTypo]}>+</Text>
      <Text style={[styles.text1, styles.textTypo]}>-</Text>
      <Pressable
        style={[styles.mainFood, styles.snackPosition]}
        onPress={() => navigation.navigate("RestaurantNearYou")}
      >
        <Text style={[styles.mainFood1, styles.textTypo]}>Main food</Text>
      </Pressable>
      <Image
        style={[styles.restaurantMenuChild, styles.restaurantLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Image
        style={[styles.restaurantMenuItem, styles.restaurantLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-51.png")}
      />
      <Image
        style={[styles.restaurantMenuInner, styles.restaurantLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-42.png")}
      />
      <Text style={[styles.mangoTangyBowl, styles.czkPosition]}>
        Mango Tangy Bowl
      </Text>
      <Text
        style={[styles.mixedGreensRipe, styles.riceNoodlesInTypo]}
      >{`Mixed greens, ripe mango slices, 
cherry tomatoes, cucumber ribbon.`}</Text>
      <Text style={[styles.czk, styles.czkTypo]}>129 CZK</Text>
      <Text style={[styles.rainbowSushiRolls, styles.czk2Position]}>
        Rainbow Sushi Rolls
      </Text>
      <Text
        style={[styles.colorfulSushiRolls, styles.riceNoodlesInTypo]}
      >{`Colorful sushi rolls filled with avocado, 
cucumber, carrot, and marinated tofu.`}</Text>
      <Text style={[styles.czk1, styles.czk1Position]}>199 CZK</Text>
      <Text style={[styles.thaiCoconutCurry, styles.czk1Position]}>
        Thai Coconut Curry noodle
      </Text>
      <Text
        style={[styles.riceNoodlesIn, styles.czk1Position]}
      >{`Rice noodles in coconut curry sauce with 
tofu, broccoli, bell peppers, and bean.`}</Text>
      <Text style={[styles.czk2, styles.czk2Position]}>329 CZK</Text>
      <Text style={[styles.text2, styles.text2Typo]}>+</Text>
      <Text style={[styles.drink, styles.text2Typo]}>Drink</Text>
      <Text
        style={[styles.greenGoddessDelight, styles.chings12345PrahaTypo]}
      >{`Green Goddess Delight
`}</Text>
      <Text
        style={[styles.chings12345Praha, styles.chings12345PrahaTypo]}
      >{`123 chings, 12345, Praha `}</Text>
      <Text
        style={[styles.veganBowlsSmoothie, styles.riceNoodlesInTypo]}
      >{`Vegan Bowls, Smoothie Bowls,
 Raw Desserts, Plant-based`}</Text>
      <View style={styles.tabBar}>
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
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/heart4.png")}
          />
        </Pressable>
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/bag23.png")}
        />
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/profilecircle1.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  menuTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorBlack,
  },
  snackPosition: {
    left: 47,
    position: "absolute",
  },
  restaurantLayout: {
    height: 112,
    width: 110,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  czkPosition: {
    left: 136,
    textAlign: "center",
  },
  riceNoodlesInTypo: {
    textAlign: "left",
    fontSize: FontSize.labelL2_size,
  },
  czkTypo: {
    fontFamily: FontFamily.labelL1,
    color: Color.colorBlack,
    position: "absolute",
  },
  czk2Position: {
    left: 138,
    fontFamily: FontFamily.labelL1,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  czk1Position: {
    left: 133,
    fontFamily: FontFamily.labelL1,
    color: Color.colorBlack,
    position: "absolute",
  },
  text2Typo: {
    top: 770,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.headingH6_size,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  chings12345PrahaTypo: {
    fontSize: FontSize.labelL1_size,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  icon: {
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
  },
  wrapper: {
    left: 0,
    top: 0,
    width: 430,
    height: 69,
    position: "absolute",
  },
  image14Icon: {
    left: 28,
    width: 97,
    height: 87,
    top: 79,
    position: "absolute",
  },
  menu: {
    top: 201,
    left: 155,
    textAlign: "center",
    fontSize: FontSize.size_13xl,
  },
  snack: {
    top: 254,
    fontSize: FontSize.headingH6_size,
    left: 47,
    position: "absolute",
  },
  text: {
    top: 245,
    left: 13,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  text1: {
    top: 292,
    left: 21,
    width: 5,
    height: 5,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  mainFood1: {
    fontSize: FontSize.headingH6_size,
  },
  mainFood: {
    top: 301,
  },
  restaurantMenuChild: {
    top: 374,
    left: 11,
    width: 110,
    borderRadius: Border.br_xl,
  },
  restaurantMenuItem: {
    top: 644,
    left: 13,
  },
  restaurantMenuInner: {
    top: 500,
    left: 11,
    width: 110,
    borderRadius: Border.br_xl,
  },
  mangoTangyBowl: {
    top: 376,
    fontSize: FontSize.headingH6_size,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  mixedGreensRipe: {
    top: 409,
    width: 249,
    fontFamily: FontFamily.labelL1,
    color: Color.colorBlack,
    position: "absolute",
    left: 135,
    textAlign: "left",
  },
  czk: {
    top: 464,
    fontSize: FontSize.labelL2_size,
    left: 136,
    textAlign: "center",
  },
  rainbowSushiRolls: {
    top: 499,
    fontSize: FontSize.headingH6_size,
  },
  colorfulSushiRolls: {
    top: 534,
    fontFamily: FontFamily.labelL1,
    color: Color.colorBlack,
    position: "absolute",
    left: 135,
    textAlign: "left",
  },
  czk1: {
    top: 586,
    fontSize: FontSize.labelL2_size,
    textAlign: "center",
  },
  thaiCoconutCurry: {
    top: 644,
    fontSize: FontSize.headingH6_size,
    textAlign: "center",
  },
  riceNoodlesIn: {
    top: 676,
    width: 299,
    height: 52,
    textAlign: "left",
    fontSize: FontSize.labelL2_size,
  },
  czk2: {
    top: 728,
    fontSize: FontSize.labelL2_size,
  },
  text2: {
    left: 23,
  },
  drink: {
    left: 53,
  },
  greenGoddessDelight: {
    fontFamily: FontFamily.interSemiBold,
    left: 156,
    fontWeight: "600",
    fontSize: FontSize.labelL1_size,
    top: 79,
  },
  chings12345Praha: {
    top: 111,
    left: 170,
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
  },
  veganBowlsSmoothie: {
    top: 147,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.accent,
    left: 156,
    position: "absolute",
  },
  homeIcon: {
    width: 28,
    height: 28,
  },
  tabBar: {
    marginLeft: -191,
    top: 837,
    left: "50%",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.accent,
    width: 394,
    height: 77,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_13xl,
    paddingTop: 30,
    paddingBottom: Padding.p_3xl,
    position: "absolute",
  },
  restaurantMenu: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_21xl,
    borderBottomLeftRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default RestaurantMenu;
