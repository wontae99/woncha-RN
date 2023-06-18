import { StyleSheet } from "react-native";
import { Icon } from "@rneui/base";

interface GoTopIcon {
  onPress: () => void;
}
export default function GoTopIcon({ onPress }: GoTopIcon) {
  return (
    <Icon
      name="north"
      type="material"
      color="#f54260"
      raised
      reverse
      containerStyle={styles.scrollTopButton}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  scrollTopButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
});
