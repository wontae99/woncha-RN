import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type buttonProps = {
  name: keyof typeof Ionicons.glyphMap;
  text: string;
  onPress: () => void;
};

const IconTextButton: React.FC<buttonProps> = ({ name, text, onPress }) => {
  return (
    <View style={[styles.buttonContainer]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#fff" }}
        style={({ pressed }) => [
          pressed && Platform.OS === "ios" && styles.pressed,
        ]}
      >
        <View style={styles.center}>
          <Ionicons name={name} size={30} color="#fff" />
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default IconTextButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 75,
    overflow: "hidden",
  },
  center: {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
  pressed: {
    opacity: 0.7,
  },
});
