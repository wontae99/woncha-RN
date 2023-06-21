import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Content, HomeParamList } from "../../../../types";
import { StackNavigationProp } from "@react-navigation/stack";

interface itemProps {
  item: Content;
}
const SearchListItem = (props: itemProps) => {
  const navigation = useNavigation<StackNavigationProp<HomeParamList>>();

  const { item } = props;
  const imageUrl = `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;
  const title = item.title ? item.title : item.name;

  const onPressItem = () => {
    navigation.navigate("ContentDetailsScreen", {
      id: item.id,
      media_type: item.title ? "movie" : "tv",
    });
  };

  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [pressed && styles.pressed, styles.container]}
      onPress={onPressItem}
    >
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  container: {
    flexDirection: "row",
    // justifyContent: "space-between",
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  image: {
    width: 150,
    height: 84,
    borderRadius: 4,
  },
  titleContainer: {
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  title: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    // flexShrink: 1,
  },
});

export default SearchListItem;
