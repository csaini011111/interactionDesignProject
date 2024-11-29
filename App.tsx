const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import TabBar from "./components/TabBar";
import Onboarding1 from "./screens/Onboarding1";
import ProductPageDrink from "./screens/ProductPageDrink";
import Favourites from "./screens/Favourites";
import LogInFail from "./screens/LogInFail";
import TrackDeliveryFullModal from "./screens/TrackDeliveryFullModal";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";
import Verification from "./screens/Verification";
import SearchForAParticularFood from "./screens/SearchForAParticularFood";
import Onboarding from "./screens/Onboarding";
import RestaurantNearYou from "./screens/RestaurantNearYou";
import Home from "./screens/Home";
import DeliverySuccess1 from "./screens/DeliverySuccess1";
import LogIn from "./screens/LogIn";
import CartOrBasket from "./screens/CartOrBasket";
import DeliverySuccess from "./screens/DeliverySuccess";
import ProductPageFood from "./screens/ProductPageFood";
import RestaurantMenu from "./screens/RestaurantMenu";
import TrackDelivery from "./screens/TrackDelivery";
import Rectangle from "./components/Rectangle";
import Frame from "./components/Frame";
import Component from "./components/Component";
import Heart from "./components/Heart";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "HammersmithOne-Regular": require("./assets/fonts/HammersmithOne-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductPageDrink"
              component={ProductPageDrink}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Favourites"
              component={Favourites}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogInFail"
              component={LogInFail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrackDeliveryFullModal"
              component={TrackDeliveryFullModal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Verification"
              component={Verification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchForAParticularFood"
              component={SearchForAParticularFood}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestaurantNearYou"
              component={RestaurantNearYou}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeliverySuccess1"
              component={DeliverySuccess1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CartOrBasket"
              component={CartOrBasket}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeliverySuccess"
              component={DeliverySuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductPageFood"
              component={ProductPageFood}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestaurantMenu"
              component={RestaurantMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrackDelivery"
              component={TrackDelivery}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
