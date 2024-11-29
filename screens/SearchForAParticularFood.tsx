import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SearchForAParticularFood = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchForAParticularFood}>
      <Image
        style={styles.searchForAParticularFoodChild}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <View
        style={[styles.searchForAParticularFoodItem, styles.searchLayout]}
      />
      <Text style={[styles.pizza, styles.pizzaFlexBox]}>Pizza</Text>
      <Pressable
        style={[styles.pressable, styles.pizzaHutPosition]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.text, styles.pizzaFlexBox]}>{`<`}</Text>
      </Pressable>
      <Image
        style={[styles.magnifyingGlassSolid1Icon, styles.solid1IconLayout]}
        contentFit="cover"
        source={require("../assets/magnifyingglasssolid-1.png")}
      />
      <Image
        style={[styles.circleXmarkSolid1Icon, styles.solid1IconLayout]}
        contentFit="cover"
        source={require("../assets/circlexmarksolid-1.png")}
      />
      <Text style={[styles.restaurantsAroundYou, styles.pizzaFlexBox]}>
        88 restaurants around you
      </Text>
      <Image
        style={[styles.searchForAParticularFoodInner, styles.searchLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Text style={[styles.pizzaParadise, styles.pizzaFlexBox]}>
        Pizza Paradise
      </Text>
      <Text style={[styles.italian, styles.minimumTypo]}>$$ Italian</Text>
      <Text style={[styles.minimumOrder299, styles.minimumTypo]}>
        Minimum order 299 CZK
      </Text>
      <View style={styles.motorcycleSolid1} />
      <View style={[styles.starSolid1, styles.starLayout]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.text1, styles.textTypo1]}>4.7</Text>
      <Text style={[styles.text2, styles.textTypo1]}>(137)</Text>
      <View style={[styles.starSolid4, styles.starLayout]} />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.text3, styles.textTypo]}>4.3</Text>
      <Text style={[styles.text4, styles.textTypo]}>(187)</Text>
      <View style={[styles.motorcycleSolid3, styles.starLayout]} />
      <View style={[styles.starSolid3, styles.starLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.searchLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Text style={[styles.pizzaHut, styles.pizzaHutPosition]}>Pizza hut</Text>
      <Text style={[styles.states, styles.minimumTypo]}>$$ States</Text>
      <Text style={[styles.minimumOrder150, styles.minimumTypo]}>
        MInimum order 150 CZK
      </Text>
      <View style={[styles.motorcycleSolid2, styles.starLayout]} />
      <View style={[styles.starSolid2, styles.starLayout]} />
      <View style={styles.tabBar}>
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/home1.png")}
        />
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/vuesaxboldheart.png")}
        />
        <Image
          style={styles.homeIcon}
          contentFit="cover"
          source={require("../assets/bag21.png")}
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
  searchLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  pizzaFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  pizzaHutPosition: {
    left: 16,
    position: "absolute",
  },
  solid1IconLayout: {
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  minimumTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.labelL1_size,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  starLayout: {
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "3.84%",
    height: "1.72%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo1: {
    top: 416,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.labelL1_size,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    top: 727,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.labelL1_size,
    textAlign: "left",
    position: "absolute",
  },
  searchForAParticularFoodChild: {
    top: 0,
    left: 0,
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    width: 430,
    height: 69,
    position: "absolute",
  },
  searchForAParticularFoodItem: {
    top: 83,
    left: 69,
    borderStyle: "solid",
    borderColor: Color.accent,
    borderWidth: 1,
    width: 325,
    height: 51,
    backgroundColor: Color.colorWhite,
  },
  pizza: {
    left: 178,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.headingH6_size,
    textAlign: "left",
    top: 96,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  pressable: {
    top: 91,
  },
  magnifyingGlassSolid1Icon: {
    top: 100,
    left: 81,
  },
  circleXmarkSolid1Icon: {
    left: 347,
    top: 96,
  },
  restaurantsAroundYou: {
    top: 150,
    left: 12,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.headingH6_size,
    textAlign: "left",
    position: "absolute",
  },
  searchForAParticularFoodInner: {
    top: 200,
    left: 6,
    width: 405,
    height: 204,
  },
  pizzaParadise: {
    top: 418,
    width: 168,
    height: 27,
    left: 15,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.headingH6_size,
    textAlign: "left",
    position: "absolute",
  },
  italian: {
    top: 449,
    left: 15,
  },
  minimumOrder299: {
    top: 479,
    left: 17,
    width: 230,
    height: 22,
  },
  motorcycleSolid1: {
    top: 471,
    left: 149,
    height: 15,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  starSolid1: {
    top: 421,
    left: 274,
    width: 18,
    height: 16,
  },
  vectorIcon: {
    top: "44.96%",
    right: "30.12%",
    bottom: "53.33%",
    left: "66.05%",
  },
  text1: {
    left: 311,
    color: Color.colorBlack,
  },
  text2: {
    left: 341,
    color: Color.colorGray_200,
  },
  starSolid4: {
    top: 732,
    left: 264,
    width: 18,
    height: 16,
  },
  vectorIcon1: {
    top: "78.33%",
    right: "32.44%",
    bottom: "19.96%",
    left: "63.72%",
  },
  text3: {
    left: 301,
    color: Color.colorBlack,
  },
  text4: {
    left: 331,
    color: Color.colorGray_200,
  },
  motorcycleSolid3: {
    top: 918,
    left: 161,
    width: 20,
  },
  starSolid3: {
    top: 821,
    left: 286,
    width: 18,
    height: 16,
  },
  rectangleIcon: {
    top: 518,
    left: 5,
    width: 412,
    height: 185,
  },
  pizzaHut: {
    top: 722,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.headingH6_size,
  },
  states: {
    top: 762,
    left: 20,
  },
  minimumOrder150: {
    top: 786,
    left: 12,
  },
  motorcycleSolid2: {
    top: 805,
    left: 172,
    width: 20,
  },
  starSolid2: {
    top: 708,
    left: 297,
    width: 18,
    height: 16,
  },
  homeIcon: {
    width: 28,
    height: 28,
  },
  tabBar: {
    marginLeft: -193,
    top: 854,
    left: "50%",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.accent,
    width: 386,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_3xl,
    position: "absolute",
  },
  searchForAParticularFood: {
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

export default SearchForAParticularFood;
