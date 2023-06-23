import { View, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";

import styles from "./styles";

const Overview = ({ overviewText }: { overviewText: string }) => {
  const [overview, setOverview] = useState(overviewText);
  const [folded, setFolded] = useState(true);

  useEffect(() => {
    if (overviewText?.length > 150) {
      setOverview(`${overviewText.slice(0, 150)} ...`);
    }
  }, []);

  const onToggle = () => {
    setFolded((prev) => !prev);
    setOverview(overviewText);
  };

  return (
    <View>
      <Text style={styles.text}>
        {folded && overviewText?.length > 150
          ? `${overviewText?.slice(0, 150)} ...`
          : overviewText}
      </Text>
      {overview?.length > 150 && (
        <Pressable onPress={onToggle} style={{ alignItems: "flex-end" }}>
          <Text style={[styles.text, { fontWeight: "600" }]}>
            {folded ? "See more" : "Fold"}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default Overview;
