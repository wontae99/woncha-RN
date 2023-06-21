import { StyleSheet, Text, View } from "react-native";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import VideoPlayer from "../ui/VideoPlayer";
import {
  ContentDetailParam,
  HomeParamList,
  Video,
  VideoParams,
} from "../../../types";
import CollapsibleHeader from "../ui/CollapsibleHeader";

const VideoScreen = () => {
  const route: RouteProp<{ params: VideoParams }> = useRoute();
  const navigation: NavigationProp<
    any | { name: HomeParamList } | { params: ContentDetailParam }
  > = useNavigation();
  const { video } = route.params;
  const videoData = navigation
    .getState()
    .routes.filter((route) => route.name === "ContentDetailsScreen")[0].params!
    .videoData;

  const date = video.published_at.slice(0, 10);

  const Header = (
    <View>
      <VideoPlayer video={video} />
    </View>
  );

  return (
    <View style={styles.rootContainer}>
      {Header}
      <CollapsibleHeader
        data={videoData?.filter((item: Video) => item.id !== video.id)}
      >
        <View style={styles.infoContainer}>
          {video.official && <Text style={styles.official}>[Official]</Text>}
          <Text style={styles.title}>{video.name}</Text>
          <Text style={styles.date}>Updated: {date}</Text>
        </View>
      </CollapsibleHeader>
      {/* <FlatList
        data={videoData?.filter((item) => item.id !== video.id)}
        renderItem={({ item }) => <VideoItem video={item} />}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 25,
    marginBottom: 300,
  },
  infoContainer: {
    paddingHorizontal: 12,
    paddingBottom: 5,
    backgroundColor: "#141414",
  },
  official: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  date: {
    color: "darkgrey",
    fontSize: 13,
  },
});

export default VideoScreen;
