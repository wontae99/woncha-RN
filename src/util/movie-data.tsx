import { MOVIE_API } from "@env";

const api_key = MOVIE_API;

type contentType = {
  movie: string;
  tv: string;
};

export async function getTrendingContents(contentType: keyof contentType) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/${contentType}/week?api_key=${api_key}`
    );
    const data = await response.json();
    return data.results;
  } catch (err) {
    throw new Error(err.message || "Failed to fetch movie data.");
  }
}

export async function getTopRatedContents(contentType: keyof contentType) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${contentType}/top_rated?api_key=${api_key}&language=en-US&page=1`
    );
    const data = await response.json();
    return data.results;
  } catch (err) {
    throw new Error(err.message || `Failed to fetch ${contentType} data`);
  }
}

export async function getAllContentIds(contentType: keyof contentType) {
  const topRatedContents = await getTopRatedContents(contentType);
  const trendingContents = await getTrendingContents(contentType);

  const contents = topRatedContents.concat(trendingContents);

  const contentIdList = [];
  for (let content of contents) {
    contentIdList.push(content.id.toString());
  }

  return contentIdList;
}

export async function getDataWithId(
  contentType: keyof contentType,
  id: string
) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${contentType}/${id}?api_key=${api_key}`
    );

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err.message || "Failed to fetch data.");
  }
}

export async function getVideoWithId(
  contentType: keyof contentType,
  id: string
) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${contentType}/${id}/videos?api_key=${api_key}`
    );

    const data = await response.json();
    let videoData;

    if (data) {
      videoData = data.results;
      return videoData;
    }

    return;
  } catch (err) {
    throw new Error(err.message || "Failed to fetch movie data");
  }
}
