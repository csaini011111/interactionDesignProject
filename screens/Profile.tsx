import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profile, styles.profilePosition1]}>
      <Image
        style={[styles.profileChild, styles.profilePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={[styles.profileItem, styles.profilePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Text style={[styles.text, styles.yourTypo]}>{`<`}</Text>
      <Text style={[styles.setUpYour, styles.yourTypo]}>
        Set up your profile
      </Text>
      <Image
        style={[styles.userRegular1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/userregular-11.png")}
      />
      <Text style={[styles.name, styles.nameTypo]}>{`Name
`}</Text>
      <Text
        style={[styles.chiragSaini, styles.locationTypo]}
      >{`Chirag saini `}</Text>
      <Image
        style={[styles.penSolid1Icon, styles.penIconPosition]}
        contentFit="cover"
        source={require("../assets/pensolid-1.png")}
      />
      <Image
        style={[styles.penSolid2Icon, styles.penIconPosition]}
        contentFit="cover"
        source={require("../assets/pensolid-1.png")}
      />
      <Image
        style={[styles.penSolid3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/pensolid-1.png")}
      />
      <Image
        style={[styles.phoneSolid1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/phonesolid-1.png")}
      />
      <Text style={[styles.phoneNumber, styles.nameTypo]}>Phone number</Text>
      <Image
        style={styles.locationPinSolid1Icon}
        contentFit="cover"
        source={require("../assets/locationpinsolid-1.png")}
      />
      <Text style={[styles.location, styles.locationTypo]}>{`Location
`}</Text>
      <Text style={styles.somewhere10000Praha}>{`Somewhere, 10000, Praha
`}</Text>
      <Text
        style={[styles.uploadYourProfile, styles.yourTypo]}
      >{`Upload your profile picture
`}</Text>
      <Image
        style={[styles.penSolid2Icon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/pensolid-2.png")}
      />
      <View style={styles.profileInner} />
      <Pressable
        style={styles.next}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={[styles.next1, styles.yourTypo]}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePosition1: {
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
  },
  profilePosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  yourTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  iconLayout: {
    height: 25,
    width: 25,
  },
  nameTypo: {
    color: Color.colorGray_300,
    left: 85,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.labelL1_size,
    position: "absolute",
  },
  locationTypo: {
    left: 88,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.labelL1_size,
    position: "absolute",
  },
  penIconPosition: {
    left: 328,
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: 234,
    position: "absolute",
    overflow: "hidden",
  },
  profileChild: {
    top: 0,
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    height: 69,
  },
  profileItem: {
    top: 604,
    height: 328,
    borderBottomLeftRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
  },
  text: {
    top: 76,
    left: 21,
    color: Color.colorBlack,
    fontSize: FontSize.labelL1_size,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  setUpYour: {
    top: 88,
    left: 113,
    color: Color.colorBlack,
    fontSize: FontSize.labelL1_size,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  userRegular1Icon: {
    top: 163,
    left: 42,
    position: "absolute",
    overflow: "hidden",
  },
  name: {
    top: 151,
  },
  chiragSaini: {
    top: 176,
    color: Color.colorBlack,
  },
  penSolid1Icon: {
    top: 156,
  },
  penSolid2Icon: {
    top: 240,
  },
  penSolid3Icon: {
    top: 329,
    left: 375,
    position: "absolute",
    overflow: "hidden",
  },
  phoneSolid1Icon: {
    left: 41,
    height: 25,
    width: 25,
  },
  phoneNumber: {
    top: 215,
  },
  locationPinSolid1Icon: {
    top: 315,
    left: 44,
    height: 36,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  location: {
    top: 304,
    color: Color.colorGray_400,
  },
  somewhere10000Praha: {
    top: 335,
    left: 85,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.labelL1_size,
    position: "absolute",
  },
  uploadYourProfile: {
    top: 428,
    left: 55,
    textDecoration: "underline",
    color: Color.colorBlack,
    fontSize: FontSize.labelL1_size,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  penSolid2Icon1: {
    left: 329,
    width: 16,
    height: 16,
  },
  profileInner: {
    top: 525,
    left: 28,
    borderRadius: Border.br_xl,
    backgroundColor: Color.accent,
    borderStyle: "solid",
    borderColor: Color.accent,
    borderWidth: 1,
    width: 366,
    height: 62,
    position: "absolute",
  },
  next1: {
    fontSize: FontSize.size_13xl,
    color: Color.colorWhite,
  },
  next: {
    left: 169,
    top: 536,
    position: "absolute",
  },
  profile: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Profile;
