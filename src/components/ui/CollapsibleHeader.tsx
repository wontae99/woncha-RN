import React, { useRef } from "react";
import { View, Animated, FlatList, StyleProp, ViewStyle } from "react-native";

import VideoItem from "../VideoItem";
import { Video } from "../../../types";
import GoTopFlatList from "./GoTopFlatLIst";

const H_MAX_HEIGHT = 150;
const H_MIN_HEIGHT = 5;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

interface CollapsibleHeaderProps {
  data: Video[] | undefined;
  children: React.ReactElement;
  style?: StyleProp<ViewStyle>;
}

const CollapsibleHeader = ({ data, children }: CollapsibleHeaderProps) => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  return (
    <View>
      <GoTopFlatList
        initialNumToRender={5}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={16}
        data={data}
        renderItem={({ item }) => <VideoItem video={item} />}
        ListHeaderComponent={<View style={{ paddingTop: 100 }}></View>}
        ListFooterComponent={<View style={{ paddingBottom: 200 }}></View>}
      />

      {/**
       * We put the header at the bottom of
       * our JSX or it will not take priority
       * on Android (for some reason, simply
       * setting zIndex does not work)
       **/}
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          overflow: "hidden",
          height: headerScrollHeight,
          width: "100%",
          zIndex: 999,
          // STYLE
        }}
      >
        {children}
      </Animated.View>
    </View>
  );
};

export default CollapsibleHeader;
