import { FlatList, FlatListProps, View } from "react-native";
import { useRef, useState } from "react";

import GoTopIcon from "./GoTopIcon";

const GoTopFlatList = (props: FlatListProps<any>) => {
  const listRef = useRef<any>(null);
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
  const CONTENT_OFFSET_THRESHOLD = 300;

  return (
    <View>
      <FlatList
        ref={listRef}
        // data={props.data}
        // renderItem={({ item }) => <VideoItem video={item} />}
        onScroll={(event) => {
          setContentVerticalOffset(event.nativeEvent.contentOffset.y);
        }}
        {...props}
      />
      {contentVerticalOffset > CONTENT_OFFSET_THRESHOLD && (
        <GoTopIcon
          onPress={() => {
            listRef.current.scrollToOffset({ offset: 0, animated: true });
          }}
        />
      )}
    </View>
  );
};

export default GoTopFlatList;
