import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import Popular from "./screens/popular";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Recommended from "./screens/recommended.js";

export default function App() {
  return <AppContainer />;
}

const AppTopNavigation = createMaterialTopTabNavigator({
  RecommendedMovies: {
    screen: Recommended,
    navigationOptions: {
      tabBarLabel: "Recommended",
      tabBarOptions: {
        tabStyle: { backgroundColor: "white" },
        labelStyle: { color: "black" },
        indicatorStyle: { backgroundColor: "black" },
      },
    },
  },
  PopularMovies: {
    screen: Popular,
    navigationOptions: {
      tabBarLabel: "Popular",
      tabBarOptions: {
        tabStyle: { backgroundColor: "white" },
        labelStyle: { color: "black" },
        indicatorStyle: { backgroundColor: "black" },
      },
    },
  },
});

const AppStackNavigator = createStackNavigator({
  Home: { screen: Home, navigationOptions: { headerShown: false } },
  AppTopNavigation: {
    screen: AppTopNavigation,
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: "white",
      headerTitle: "Recommended Movies",
      headerStyle: { backgroundColor: "#d500f9" },
      headerTitleStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize: RFValue(18),
      },
    },
  },
},{
  initialRouteName:"Home"
});

const AppContainer=createAppContainer(AppStackNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
