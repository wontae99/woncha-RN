import { Skeleton, SkeletonProps } from "@rneui/themed";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import DefaultSkeleton from "./DefaultSkeleton";

export default function DetailSkeleton() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <DefaultSkeleton
        width={width}
        height={(width * 9) / 16}
        animation="none"
      />
      <View style={styles.detailContainer}>
        <DefaultSkeleton
          width={(width * 1) / 2}
          height={24}
          animation="wave"
          style={{ marginVertical: 5 }}
        />
        <DefaultSkeleton
          width={(width * 1) / 3}
          height={24}
          animation="wave"
          style={{ marginVertical: 5 }}
        />
        <DefaultSkeleton
          width={(width * 1) / 2}
          height={24}
          animation="wave"
          style={{ marginVertical: 5 }}
        />
        <View style={styles.overview}>
          <DefaultSkeleton height={16} animation="none" style={styles.text} />
          <DefaultSkeleton height={16} animation="none" style={styles.text} />
          <DefaultSkeleton height={16} animation="none" style={styles.text} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailContainer: {
    padding: 12,
  },
  overview: {
    paddingVertical: 5,
  },
  text: {
    marginVertical: 3,
  },
});
