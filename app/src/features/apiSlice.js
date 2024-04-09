import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "X-RapidAPI-Key": "5c62e3c946msh8e8d9da9095d2cep1b006cjsnc8c2809fd95d",
  "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
};

export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  tagTypes: "youtube",
  baseQuery: fetchBaseQuery({ baseUrl: "https://youtube-v31.p.rapidapi.com/" }),
  endpoints: (builder) => ({
    getYoutubeVideos: builder.query({
      query: (params = "music") => ({
        url: "search",
        params: {
          q: `${params}`,
          part: "snippet",
          maxResults: "50",
          regionCode: 'US',
          order: "date"
        },
        headers,
      }),
    }),
    getVideoDetails: builder.query({
      query: (params) => ({
        url: "videos",
        params: {
          id: `${params}`,
          part: "snippet,statistics",
        },
        headers,
      }),
    }),
    getSuggestedVideos: builder.query({
      query: (params) => ({
        url: "search",
        params: {
          relatedToVideoId: `${params}`,
          part: "id,snippet",
          type: "video",
          maxResults: "50",
        },
        headers,
      }),
    }),
    getVideoComments: builder.query({
      query: (params) => ({
        url: "commentThreads",
        params: {
          part: "snippet",
          videoId: `${params}`,
          maxResults: "100",
        },
        headers,
      }),
    }),
    getChannelDetails: builder.query({
      query: (params) => ({
        url: "channels",
        params: {
          id: `${params}`,
          part: "snippet,id",
          maxResults: "50",
        },
        headers,
      }),
    }),
    getChannelVideos: builder.query({
      query: (params) => ({
        url: "search",
        params: {
          channelId: `${params}`,
          part: "snippet,id",
          maxResults: "50",
        },
        headers,
      }),
    }),
  }),
});

export const {
  useGetYoutubeVideosQuery,
  useGetVideoDetailsQuery,
  useGetSuggestedVideosQuery,
  useGetVideoCommentsQuery,
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery
} = youtubeApi;
