import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//screens
import HomeScreen from "../components/screens/HomeScreen";
import ContentDetailScreen from "../components/screens/ContentDetailScreen";
import VideoScreen from "../components/screens/VideoScreen";
// param types
import { HomeParamList } from "../../types";
//nav animation
import { forHorizontalModal } from "./navAnimation";
import SearchScreen from "../components/screens/SearchScreen";

const HomeStack = createStackNavigator<HomeParamList>();

const HomeStackNav = () => {
  return (
    <HomeStack.Navigator id="HomeStackNav">
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ContentDetailsScreen"
        component={ContentDetailScreen}
        options={{
          title: "",
          presentation: "modal",
          gestureDirection: "horizontal",
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <HomeStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: "",
          presentation: "modal",
          cardStyleInterpolator: forHorizontalModal,
        }}
      />
      <HomeStack.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{
          headerShown: false,
          // title: "",
          presentation: "modal",
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
