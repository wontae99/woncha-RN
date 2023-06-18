import { Skeleton } from "@rneui/base";
import { ScrollView, StyleSheet } from "react-native";

export default function SkeletonList() {
  return (
    <ScrollView horizontal>
      <Skeleton
        width={140}
        height={200}
        animation="none"
        style={styles.skeleton}
      />
      <Skeleton
        width={140}
        height={200}
        animation="none"
        style={styles.skeleton}
      />
      <Skeleton
        width={140}
        height={200}
        animation="none"
        style={styles.skeleton}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  skeleton: {
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#3b3b3b",
  },
});
