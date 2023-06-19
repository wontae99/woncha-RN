import { Skeleton, SkeletonProps } from "@rneui/base";
import { StyleSheet } from "react-native";

const DefaultSkeleton = (props: SkeletonProps) => {
  return <Skeleton {...props} style={[styles.defaultColor, props.style]} />;
};

const styles = StyleSheet.create({
  defaultColor: {
    backgroundColor: "#474747",
  },
});

export default DefaultSkeleton;
