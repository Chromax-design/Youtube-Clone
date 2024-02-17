import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import liked from "/assets/icons/liked.svg";
import { Link, useParams } from "react-router-dom";
import {
  useGetSuggestedVideosQuery,
  useGetVideoCommentsQuery,
  useGetVideoDetailsQuery,
} from "../features/apiSlice";
import ReactPlayer from "react-player";
import { formatToDateString } from "../utils/formatDate";
import VideoLoader from "../components/Loaders/VideoLoader";

const CommentComponent = ({ comment }) => {
  return (
    <div className="flex gap-3 items-start mt-3">
      <img
        src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt=""
        className="w-12 h-12 rounded-full"
      />
      <div>
        <h3 className="font-bold capitalize ">
          {comment.snippet.topLevelComment.snippet.authorDisplayName}
        </h3>
        <p className="text-sm mt-1">
          {comment.snippet.topLevelComment.snippet.textDisplay}
        </p>
        <div className="flex gap-4 items-center mt-3">
          <div className="flex gap-1 items-center">
            <img src={liked} alt="" className="w-6" />
            <span className="text-sm text-[#aaa]">
              {comment.snippet.topLevelComment.snippet.likeCount}
            </span>
          </div>
          <span className="capitalize text-sm text-[#aaa]">reply</span>
        </div>
      </div>
    </div>
  );
};

const SuggestedVideo = ({ video }) => {
  if (!video?.snippet?.thumbnails?.high?.url || !video) {
    return null; // handle this later, video does not exist
  }
  return (
    <div className="flex gap-2 items-start">
      <Link to={`/video/${video.id.videoId}`}>
        <img
          src={video?.snippet?.thumbnails?.high?.url}
          alt=""
          className=" aspect-video max-w-[170px] h-full rounded-lg"
        />
      </Link>
      <div>
        <Link to={`/video/${video.id.videoId}`}>
          <h3 className="text-white mb-3 mt-2 text-sm font-medium line-clamp-2">
            {video.snippet.title}
          </h3>
        </Link>
        <div className="text-xs capitalize space-y-1">
          <p className="text-[#aaa]">{video.snippet.channelTitle}</p>
          <p className="text-[#aaa]">
            {formatToDateString(video.snippet.publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Video() {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const { data, isLoading } = useGetVideoDetailsQuery(id);
  const response = useGetSuggestedVideosQuery(id);
  const commentResponse = useGetVideoCommentsQuery(id);

  useEffect(() => {
    if (data) {
      setVideoDetails(data.items[0]);
    } else {
      setVideoDetails([]);
    }
  }, [data]);

  useEffect(() => {
    if (response.data) {
      setSuggestedVideos(response.data.items);
    } else {
      setSuggestedVideos([]);
    }
  }, [response.data]);

  useEffect(() => {
    if (commentResponse.data) {
      setComments(commentResponse.data.items);
    } else {
      setComments([]);
    }
  }, [commentResponse.data]);
  return (
    <>
      <Navigation />
      {isLoading ? (
        <VideoLoader />
      ) : (
        <div className="bg-black min-h-[100vh] p-5">
          <div className="max-w-6xl mx-auto mt-[56px] grid lg:grid-cols-[60%,40%] gap-5">
            <div className="text-white">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                width={"100%"}
                controls
              />
              <div className="text-white mt-5">
                <p className="text-lg">{videoDetails?.snippet?.title}</p>
                <div className="flex justify-between items-center mt-2 border-y border-[#313131] py-2">
                  <h2 className=" capitalize font-medium text-lg">
                    {videoDetails?.snippet?.channelTitle}
                  </h2>
                  <div className="flex items-center gap-4 text-sm mt-3">
                    <span className="text-[#aaa] font-semibold">
                      {videoDetails?.statistics?.likeCount} likes
                    </span>
                    <span className="text-[#aaa] font-semibold text-sm">
                      {videoDetails?.statistics?.viewCount} views
                    </span>
                  </div>
                </div>
                <div className="mt-5 hidden lg:block">
                  <h2 className="text-[#aaa] capitalize font-semibold text-lg">
                    comments
                  </h2>
                  <div>
                    {comments.map((comment, i) => {
                      return <CommentComponent key={i} comment={comment} />;
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="capitalize font-medium text-white text-xl mb-3">
                suggested videos
              </h2>
              <div className="space-y-2">
                {suggestedVideos.map((video) => {
                  return <SuggestedVideo video={video} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
