import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
    borderRadius: 3,
  },
  pressed: { opacity: 0.7 },
  title: {
    color: "#fff",
  },
  official: {
    fontWeight: "bold",
    color: "#fff",
  },
  date: {
    color: "darkgrey",
    fontSize: 12,
  },
});

export default styles;
