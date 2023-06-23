import { useEffect, useState } from "react";
import {
  useRoute,
  RouteProp,
  useNavigation,
  NavigationProp,
} from "@react-navigation/native";
// fetch data
import { getVideoWithId, getDataWithId } from "../../../util/movie-data";
// types
import { ContentDetailParam, Video, Content } from "../../../../types";
// redux
// components
import ContentDetail from "./ContentDetail";
import VideoItem from "../../VideoItem";
import GoTopFlatList from "../../ui/GoTopFlatLIst";
import DetailSkeleton from "../../ui/Skeleton/DetailSkeleton";

export default function ContentDetailScreen() {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  const [content, setContent] = useState<Content>();

  const navigation: NavigationProp<{ params: ContentDetailParam }> =
    useNavigation();
  const route: RouteProp<{ params: ContentDetailParam }> = useRoute();
  const { id, media_type } = route.params;

  useEffect(() => {
    async function fetchData(type: "movie" | "tv", id: string) {
      setLoading(true);
      const contentData = await getDataWithId(type, id);
      setContent(contentData);
      setLoading(false);
    }

    async function getVidoes(type: "movie" | "tv", id: string) {
      const videoData: Video[] = await getVideoWithId(type, id);
      setVideos(videoData);
      navigation.setParams({ videoData });
    }

    fetchData(media_type, id.toString());
    getVidoes(media_type, id.toString());
  }, []);

  if (loading) {
    return <DetailSkeleton />;
  }
  return (
    <>
      <GoTopFlatList
        data={videos}
        renderItem={({ item }) => <VideoItem video={item} />}
        ListHeaderComponent={<ContentDetail content={content!} />}
      />
    </>
  );
}
