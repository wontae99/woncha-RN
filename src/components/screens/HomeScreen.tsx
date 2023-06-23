import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  getTopRatedContents,
  getTrendingContents,
} from "../../util/movie-data";

import Category from "../HomeCategory";
import IconButton from "../ui/IconButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Content, HomeParamList } from "../../../types";

type contents = {
  trendingMovies: Content[];
  trendingSeries: Content[];
  topRatedMovies: Content[];
  topRatedSeries: Content[];
};

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<HomeParamList>>();

  const [loading, setLoading] = useState(false);
  const [contents, setContents] = useState<contents>();

  useEffect(() => {
    async function fetchContents() {
      setLoading(true);
      const trendingMovies = await getTrendingContents("movie");
      const trendingSeries = await getTrendingContents("tv");
      const topRatedMovies = await getTopRatedContents("movie");
      const topRatedSeries = await getTopRatedContents("tv");

      setContents({
        trendingMovies,
        trendingSeries,
        topRatedMovies,
        topRatedSeries,
      });
      setLoading(false);
    }

    fetchContents();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color="#f54260" size="large" />
      </View>
    );
  }
  return (
    <>
      <SafeAreaView style={{ padding: 10 }}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.title}>WONCHA</Text>
          </View>
          <IconButton
            icon="search"
            size={28}
            color="#fff"
            onPress={() =>
              navigation.navigate("SearchScreen", {
                data: [
                  ...(contents?.topRatedMovies as []),
                  ...(contents?.topRatedSeries as []),
                  ...(contents?.trendingMovies as []),
                  ...(contents?.trendingSeries as []),
                ],
              })
            }
          />
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Category title="Trending Movies" data={contents?.trendingMovies!} />
          <Category title="Trending Series" data={contents?.trendingSeries!} />
          <Category title="Top Rated Movies" data={contents?.topRatedMovies!} />
          <Category title="Top Rated Series" data={contents?.topRatedSeries!} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "#f54260",
    fontSize: 28,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingBottom: 20,
  },
});
