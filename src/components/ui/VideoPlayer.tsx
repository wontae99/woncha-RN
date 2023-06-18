import { StyleSheet } from "react-native";
import { useState, useCallback } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

import { Video } from "../../../types";

const VideoPlayer = ({ video }: { video: Video }) => {
  //   const videoUri = `https://www.youtube.com/embed/${video.key}`;
  //   const posterUri = `https://i3.ytimg.com/vi/${video.key}/hqdefault.jpg`;

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <YoutubePlayer
      height={250}
      play={playing}
      videoId={video.key}
      onChangeState={onStateChange}
    />
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({});
