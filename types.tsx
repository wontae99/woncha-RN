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

// export type Movie = {
//   adult: boolean;
//   media_type: "movie";
//   backdrop_path: string;
//   genre_ids: number[];
//   id: number;
//   original_title: string;
//   overview: string;
//   poster_path: string;
//   release_date: string;
//   title: string;
//   video: boolean;
// };

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

// {
//   "id":"648238dcd2b209014e07bac6",
//   "iso_3166_1":"US",
//   "iso_639_1":"en",
//   "key":"Yxaw1otUuUI",
//   "name":"Clip - Meet Jessica Drew",
//   "official":true,
//   "published_at":"2023-06-08T18:00:29.000Z",
//   "site":"YouTube",
//   "size":1080,
//   "type":"Clip"
// },
