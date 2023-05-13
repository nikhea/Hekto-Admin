import axios from "axios";

export const FetchYoutubeData = async (query: string) => {
  const video = await axios.get(
    "https://youtube-search-results.p.rapidapi.com/youtube-search/",
    {
      params: { q: query },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RapidAPI_Key,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RapidAPI_Host,
      },
    }
  );
  return video.data;
};
// process.env.NEXT_PUBLIC_YouTubeAPI_Key
export const FetchYoutubwData = async (query: string) => {
  const video = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${query}&key=${process.env.NEXT_PUBLIC_YouTubeAPI_Key}`
  );
  console.log(video);

  return video.data;
};
export const fetchYouTubeVideos = async (query: string) => {
  // const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${query}&key=${process.env.NEXT_PUBLIC_YouTubeAPI_Key}`;
  // try {
  //   const response = await axios.get(url);
  //   return response.data;
  // } catch (error) {
  //   console.error(error);
  //   return null;
  // }
  return "hello";
};
