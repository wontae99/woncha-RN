import { View, Text, Image, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { getDataWithId } from "../../../util/movie-data";
import { ContentDetailParam, Content } from "../../../../types";
import styles from "./styles";
import DetailSkeleton from "../../ui/DetailSkeleton";
import Overview from "./Overview";
import IconTextButton from "../../ui/IconTextButton";

export default function ContentDetail() {
  const route: RouteProp<{ params: ContentDetailParam }> = useRoute();
  const { id, media_type } = route.params;

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<Content>();

  useEffect(() => {
    async function fetchData(type: "movie" | "tv", id: string) {
      setLoading(true);
      const contentData = await getDataWithId(type, id);
      setContent(contentData);
      setLoading(false);
    }

    fetchData(media_type, id.toString());
  }, []);

  const backDrop = `https://image.tmdb.org/t/p/w500/${content?.backdrop_path}`;
  const title = media_type === "movie" ? content?.title : content?.name;
  const rate = Math.round(content?.vote_average! * 10) / 10;
  const date =
    media_type === "movie" ? content?.release_date : content?.first_air_date;
  const genres = content?.genres?.map((genre) => (
    <View style={styles.genreContainer} key={genre.id}>
      <Text style={{ color: "#fff" }}>{genre.name}</Text>
    </View>
  ));

  if (loading) {
    return <DetailSkeleton />;
  }
  return (
    <>
      <Image style={styles.image} source={{ uri: backDrop }} />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.rowCenter, { paddingTop: 5 }]}>
          <View style={styles.rowCenter}>
            <Ionicons name="star" size={16} color="#f5f125" />
            <Text style={styles.rate}>{rate}</Text>
          </View>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.text}>{content?.status}</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingTop: 5, paddingBottom: 10 }}
        >
          {genres}
        </ScrollView>
        <Overview overviewText={content?.overview!} />

        {/* row with icon buttons */}
        <View style={styles.buttonsContainer}>
          <IconTextButton name="add-sharp" text="My List" onPress={() => {}} />
          <IconTextButton
            name="chatbox-ellipses"
            text="Comment"
            onPress={() => {}}
          />
          <IconTextButton name="share-social" text="Share" onPress={() => {}} />
        </View>
      </View>
    </>
  );
}
