import { Pressable, Image, View } from "react-native";
import { memo } from "react";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import styles from "./styles";
import { Content, HomeParamList } from "../../../types";

const ContentItem = ({ data }: { data: Content }) => {
  const navigation = useNavigation<StackNavigationProp<HomeParamList>>();

  function onPressItem() {
    navigation.navigate("ContentDetailsScreen", {
      id: data.id,
      media_type: data.name ? "tv" : "movie",
    });
  }
  const imageUrl = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#fff" }}
        onPress={onPressItem}
        style={({ pressed }) => pressed && styles.buttonPressed}
      >
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </Pressable>
    </View>
  );
};

export default memo(ContentItem);
