import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { BottomTabParamList } from "../../types";

import HomeStackNav from "./HomeStackNav";
import SearchScreen from "../components/screens/SearchScreen";
import ProfileScreen from "../components/screens/ProfileScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNav() {
  const navigation = useNavigation();
  const tabBarLabel = (text: string, focused: boolean, color: string) => {
    return (
      <Text
        style={[
          { color: focused ? "#fff" : color },
          { fontSize: 10, paddingBottom: 4 },
        ]}
      >
        {text}
      </Text>
    );
  };

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          height: 60,
          justifyContent: "space-evenly",
        },
        tabBarActiveTintColor: "#f54260",
        tabBarInactiveTintColor: "#ccc",
        tabBarActiveBackgroundColor: "#0f0f0f",
        tabBarInactiveBackgroundColor: "#0f0f0f",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackNav}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) =>
            tabBarLabel("Home", focused, color),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: ({ focused, color }) =>
            tabBarLabel("Search", focused, color),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      /> */}
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused, color }) =>
            tabBarLabel("My Woncha", focused, color),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
