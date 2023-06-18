import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

import {
  getTopRatedContents,
  getTrendingContents,
} from "../../util/movie-data";

import Category from "../HomeCategory";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
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
      <SafeAreaView>
        <View style={styles.brandContainer}>
          <Text style={styles.title}>WONCHA</Text>
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
  brandContainer: {
    padding: 10,
  },
  title: {
    color: "#f54260",
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingBottom: 20,
  },
});
