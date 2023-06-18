import {
  createStackNavigator,
  StackCardInterpolationProps,
  StackCardInterpolatedStyle,
} from "@react-navigation/stack";
import { Animated } from "react-native";

import HomeScreen from "../components/screens/HomeScreen";
import ContentDetailScreen from "../components/screens/ContentDetailScreen";
import { HomeParamList } from "../../types";
import VideoScreen from "../components/screens/VideoScreen";

const HomeStack = createStackNavigator<HomeParamList>();

const HomeStackNav = () => {
  return (
    <HomeStack.Navigator id="HomestackNav">
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

// modal horizontal animation function
export function forHorizontalModal({
  current,
  next,
  inverted,
  layouts: { screen },
}: StackCardInterpolationProps): StackCardInterpolatedStyle {
  const translateFocused = Animated.multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.width, 0],
      extrapolate: "clamp",
    }),
    inverted
  );

  const overlayOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.07],
    extrapolate: "clamp",
  });

  const shadowOpacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.3],
    extrapolate: "clamp",
  });

  return {
    cardStyle: {
      transform: [
        // Translation for the animation of the current card
        { translateX: translateFocused },
        // Translation for the animation of the card in back
        { translateX: 0 },
      ],
    },
    overlayStyle: { opacity: overlayOpacity },
    shadowStyle: { shadowOpacity },
  };
}

export default HomeStackNav;
