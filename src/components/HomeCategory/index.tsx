import { Text, FlatList, StyleSheet, View } from "react-native";

import ContentItem from "../ContentItem";
import SkeletonList from "../ui/Skeleton/SkeletonList";

interface CategoryProps {
  title: string;
  data: [];
  loading: boolean;
}

const Category: React.FC<CategoryProps> = ({ title, data, loading }) => {
  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.listContainer}>
        {loading && <SkeletonList />}
        {!loading && (
          <FlatList
            data={data}
            renderItem={({ item }) => <ContentItem data={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
};

export default Category;

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
