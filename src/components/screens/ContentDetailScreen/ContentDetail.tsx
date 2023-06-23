import { View, Text, Image, ScrollView } from "react-native";
import { useCallback, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../../../store/itemSlice";
import { RootState } from "../../../store";

import { useRoute, RouteProp } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import { Content, ContentDetailParam } from "../../../../types";

import Overview from "./Overview";
import IconTextButton from "../../ui/IconTextButton";
import styles from "./styles";

interface ContentProps {
  content: Content;
}

const ContentDetail = (props: ContentProps) => {
  const { content } = props;
  const route: RouteProp<{ params: ContentDetailParam }> = useRoute();
  const { id, media_type } = route.params;

  const dispatch = useDispatch();
  const { items, isAdded } = useSelector((state: RootState) => state.item);

  console.log(items);
  useEffect(() => {
    dispatch(itemActions.checkIsAdded({ id, media_type }));
  }, [dispatch]);

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

  //button functions
  const toggleItem = useCallback(() => {
    dispatch(itemActions.toggleItem({ id, media_type }));
  }, []);

  const listButton = isAdded ? (
    <IconTextButton name="checkmark" text="Added" onPress={toggleItem} />
  ) : (
    <IconTextButton name="add-sharp" text="Add" onPress={toggleItem} />
  );

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
          {listButton}
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
};

export default ContentDetail;
