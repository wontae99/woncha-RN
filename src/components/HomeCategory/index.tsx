import { Text, FlatList, StyleSheet, View } from "react-native";
import { memo } from "react";

import { Content } from "../../../types";
import ContentItem from "../ContentItem";
import SkeletonList from "../ui/Skeleton/SkeletonList";

interface CategoryProps {
  title: string;
  data: Content[];
}

const Category: React.FC<CategoryProps> = ({ title, data }) => {
  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ContentItem data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default memo(Category);

const styles = StyleSheet.create({
  textContainer: {
    padding: 15,
  },
  listContainer: {
    marginHorizontal: 15,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
