import { memo } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { HomeParamList, Video } from "../../../types";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";

const VideoItem = ({ video }: { video: Video }) => {
  const navigation = useNavigation<StackNavigationProp<HomeParamList>>();

  const posterUri = `https://i3.ytimg.com/vi/${video.key}/hqdefault.jpg`;
  const date = video.published_at.slice(0, 10);

  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      onPress={() => {
        navigation.navigate("VideoScreen", { video });
      }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Image source={{ uri: posterUri }} style={styles.image} />
      <View style={{ padding: 10 }}>
        {video.official && <Text style={styles.official}>Offical</Text>}
        <Text style={styles.title}>{video.name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </Pressable>
  );
};

export default memo(VideoItem);
