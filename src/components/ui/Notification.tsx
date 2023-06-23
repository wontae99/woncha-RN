import { StyleSheet, Text, View } from "react-native";
import { memo, useState, useEffect } from "react";

interface NotificationProps {
  status: "error" | "success";
  message: string;
}

const Notification = (props: NotificationProps) => {
  const { status, message } = props;
  const bgColor = status === "error" ? "#ff5252" : "#fff";

  return (
    <View style={[{ backgroundColor: bgColor }, styles.container]}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 18,
    paddingVertical: 12,
    width: "auto",
    alignSelf: "center",
  },
  message: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default memo(Notification);
