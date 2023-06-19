import { ScrollView, StyleSheet } from "react-native";

import DefaultSkeleton from "./DefaultSkeleton";

export default function SkeletonList() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <DefaultSkeleton
        width={140}
        height={200}
        animation="none"
        style={styles.skeleton}
      />
      <DefaultSkeleton
        width={140}
        height={200}
        animation="none"
        style={styles.skeleton}
      />
      <DefaultSkeleton
        width={140}
        height={200}
        animation="none"
        style={styles.skeleton}
      />
      <DefaultSkeleton
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
  },
});
