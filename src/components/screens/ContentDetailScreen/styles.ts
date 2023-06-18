import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  rowCenter: { flexDirection: "row", alignItems: "center" },
  rate: {
    color: "#f5f125",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 2,
    marginRight: 10,
  },
  date: {
    color: "#ccc",
    marginRight: 10,
  },
  text: {
    color: "#fff",
  },
  genreContainer: {
    backgroundColor: "#007d43",
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginRight: 8,
    borderRadius: 4,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 15,
  },
});

export default styles;
