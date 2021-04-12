import React, { useEffect } from "react";

import WatchlistScreen from "./app/screens/WatchlistScreen";
import TopListScreen from "./app/screens/TopListScreen";
import CoinInputScreen from "./app/screens/CoinInputScreen";
import LoginScreen from "./app/screens/LoginScreen";
import CoinCardScreen from "./app/screens/CoinCardScreen";
import CoinCardScreen2 from "./app/screens/CoinCardScreen2";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image, View, StyleSheet } from "react-native";

import colors from "./app/config/colors";
import ScreenArea from "./app/components/ScreenArea";

import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import OfflineError from "./app/components/OfflineError";

const Stack = createStackNavigator();
const LoginScreenNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="TabNavigator" component={TabNavigator} />
  </Stack.Navigator>
);

const Tab = createMaterialTopTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: { backgroundColor: colors.primary },
      activeTintColor: colors.light,
      indicatorStyle: { backgroundColor: colors.light },
      inactiveTintColor: colors.white,
      labelStyle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        textAlign: "left",
      },
    }}
  >
    <Tab.Screen name="Top Coins" component={TopListNavigator} />
    <Tab.Screen name="Watchlist" component={WatchListNavigator} />
  </Tab.Navigator>
);

//const Stack = createStackNavigator();
const WatchListNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="WatchlistScreen" component={WatchlistScreen} />
    <Stack.Screen name="CoinInputScreen" component={CoinInputScreen} />
    <Stack.Screen name="CoinCardScreen2" component={CoinCardScreen2} />
  </Stack.Navigator>
);

//const Stack = createStackNavigator();
const TopListNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="TopListScreen" component={TopListScreen} />
    <Stack.Screen name="CoinCardScreen" component={CoinCardScreen} />
  </Stack.Navigator>
);

export default function App() {
  //Checking for internet connection
  NetInfo.addEventListener((netInfo) => console.log(netInfo));

  const netInfo = useNetInfo();

  return (
    <ScreenArea>
      {/*If the app is offline render offline error */}
      {!netInfo.isInternetReachable && <OfflineError />}
      <View
        style={{
          backgroundColor: colors.primary,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: 70,
        }}
      >
        <Image
          style={styles.image}
          source={require("./app/assets/images/coincoinlogo.png")}
        />
      </View>

      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ScreenArea>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 36,
    marginTop: 30,
  },
});
