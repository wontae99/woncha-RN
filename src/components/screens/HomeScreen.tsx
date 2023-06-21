import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  getTopRatedContents,
  getTrendingContents,
} from "../../util/movie-data";

import Category from "../HomeCategory";
import IconButton from "../ui/IconButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeParamList } from "../../../types";

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<HomeParamList>>();

  const [loading, setLoading] = useState(false);

  const [trendingMovies, setTrendingMovies] = useState<[]>([]);
  const [trendingSeries, setTrendingSeries] = useState<[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<[]>([]);
  const [topRatedSeries, setTopRatedSeries] = useState<[]>([]);

  useEffect(() => {
    async function fetchContents() {
      setLoading(true);
      const trendingMovieData = await getTrendingContents("movie");
      const trendingSeriesData = await getTrendingContents("tv");
      const topRatedMovieData = await getTopRatedContents("movie");
      const topRatedSeriesData = await getTopRatedContents("tv");
      setTrendingMovies(trendingMovieData);
      setTrendingSeries(trendingSeriesData);
      setTopRatedMovies(topRatedMovieData);
      setTopRatedSeries(topRatedSeriesData);

      setLoading(false);
    }

    fetchContents();
  }, []);

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
                  ...trendingMovies,
                  ...trendingSeries,
                  ...topRatedMovies,
                  ...topRatedSeries,
                ],
              })
            }
          />
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Category
            title="Trending Movies"
            data={trendingMovies}
            loading={loading}
          />
          <Category
            title="Trending Series"
            data={trendingSeries}
            loading={loading}
          />
          <Category
            title="Top Rated Movies"
            data={topRatedMovies}
            loading={loading}
          />
          <Category
            title="Top Rated Series"
            data={topRatedSeries}
            loading={loading}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
