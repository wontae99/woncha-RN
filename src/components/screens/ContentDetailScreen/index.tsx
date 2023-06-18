import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import {
  useRoute,
  RouteProp,
  useNavigation,
  NavigationProp,
} from "@react-navigation/native";

import { getVideoWithId } from "../../../util/movie-data";
import { ContentDetailParam, Video } from "../../../../types";

import ContentDetail from "./ContentDetail";
import VideoItem from "../../VideoItem";
import GoTopFlatList from "../../ui/GoTopFlatLIst";

export default function ContentDetailScreen() {
  const [videos, setVideos] = useState<Video[]>([]);

  const navigation: NavigationProp<{ params: ContentDetailParam }> =
    useNavigation();
  const route: RouteProp<{ params: ContentDetailParam }> = useRoute();
  const { id, media_type } = route.params;

  useEffect(() => {
    async function getVidoes(type: "movie" | "tv", id: string) {
      const videoData: Video[] = await getVideoWithId(type, id);
      setVideos(videoData);
      navigation.setParams({ videoData });
    }

    getVidoes(media_type, id.toString());
  }, []);

  return (
    <>
      <GoTopFlatList
        data={videos}
        renderItem={({ item }) => <VideoItem video={item} />}
        ListHeaderComponent={<ContentDetail />}
      />
      {/* <FlatList
        data={videos}
        renderItem={({ item }) => <VideoItem video={item} />}
        ListHeaderComponent={<ContentDetail />}
      /> */}
    </>
  );
}
