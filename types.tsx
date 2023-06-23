export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  ContentDetailsScreen: { id: number; media_type: string }; // set ScreenProps {id, media_type}
  SearchScreen: any;
  VideoScreen: { video: Video }; // VideoScreenProps {video}
};

export type ContentDetailParam = {
  id: number;
  media_type: "movie" | "tv";
  videoData?: Video[];
};

export type VideoParams = {
  video: Video;
};

export type Content = {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string; // Series
  release_date: string; // movie
  genre_ids: number[];
  id: number;
  media_type: string;
  title: string; // media_type이 movie
  name: string; // media_type이 tv
  original_name: string;
  overview: string;
  poster_path: string;
  genres?: {
    id: number;
    name: string;
  }[];
  status?: string;
  created_by?: {
    name: string;
  }[];
  vote_average: number;
  runtime?: number;
};

export type Video = {
  id: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  type: string;
};

/// redux state
export type itemState = {
  items: { id: number; media_type: "movie" | "tv" }[];
  isAdded: boolean | undefined;
};

export type uiState = {
  notification: null | {
    status: "error" | "success";
    message: string;
  };
  isShown: boolean;
};
