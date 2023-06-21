import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Content } from "../../../../types";
import SearchListItem from "./SearchListItem";

type SearchParams = {
  data: Content[];
};
export default function SearchScreen() {
  const route: RouteProp<{ params: SearchParams }> = useRoute();
  const { data } = route.params;

  const [content, setContent] = useState(data);
  const [enteredTitle, setEnteredTitle] = useState("");

  function searchTitleHandler(query: string) {
    setEnteredTitle(query);
    setContent(
      data.filter((item) =>
        item.name
          ? item.name.toUpperCase().includes(query.toUpperCase())
          : item.title.toUpperCase().includes(query.toUpperCase())
      )
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            style={styles.searchIcon}
            name="search"
            size={24}
            color={"#ccc"}
          />
          <TextInput
            style={styles.input}
            placeholder="Search With Content Title."
            placeholderTextColor={"#ccc"}
            autoFocus={true}
            value={enteredTitle}
            onChangeText={searchTitleHandler}
          />
        </View>
        <Ionicons
          style={{ paddingRight: 10 }}
          name="mic"
          size={24}
          color={"#ccc"}
        />
      </View>
      {/* <ScrollView>
        {content.map((item) => (
          <SearchListItem
            item={item}
            key={`${item.media_type}${item.id.toString()}`}
          />
        ))}
      </ScrollView> */}
      <FlatList
        data={content}
        renderItem={({ item }) => <SearchListItem item={item} />}
        keyExtractor={(item) => `${item.media_type}${item.id.toString()}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#474747",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    marginLeft: 10,
    backgroundColor: "#474747",
    color: "#fff",
    flex: 0.9,
    fontSize: 18,
  },
});
