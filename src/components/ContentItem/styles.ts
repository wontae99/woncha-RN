import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginHorizontal: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: 140,
    height: 200,
    resizeMode: "cover",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

export default styles;
