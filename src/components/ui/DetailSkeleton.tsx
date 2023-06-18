import { Skeleton } from "@rneui/themed";
import { View, StyleSheet, useWindowDimensions } from "react-native";

export default function DetailSkeleton() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Skeleton
        width={width}
        height={(width * 9) / 16}
        animation="none"
        style={{ backgroundColor: "#3b3b3b" }}
      />

      <View style={styles.detailContainer}>
        <Skeleton
          width={(width * 1) / 3}
          height={30}
          animation="wave"
          style={{ marginVertical: 10 }}
        />
        <Skeleton width={(width * 1) / 2} height={24} animation="wave" />
        <View style={styles.overview}>
          <Skeleton height={16} animation="pulse" style={styles.text} />
          <Skeleton height={16} animation="pulse" style={styles.text} />
          <Skeleton height={16} animation="pulse" style={styles.text} />
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
