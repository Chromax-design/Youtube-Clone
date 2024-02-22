import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import {
  useGetSuggestedVideosQuery,
  useGetVideoCommentsQuery,
  useGetVideoDetailsQuery,
} from "../features/apiSlice";
import ReactPlayer from "react-player/youtube";
import VideoLoader from "../components/Loaders/VideoLoader";
import CommentComponent from "../components/CommentComponent";
import SuggestedVideo from "../components/SuggestedVideo";

export default function Video() {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const { data: videoInfo, isLoading } = useGetVideoDetailsQuery(id);
  const { data: suggested } = useGetSuggestedVideosQuery(id);
  const { data: commented } = useGetVideoCommentsQuery(id);

  useEffect(() => {
    if (videoInfo) {
      setVideoDetails(videoInfo.items[0]);
    } else {
      setVideoDetails([]);
    }

    if (suggested) {
      setSuggestedVideos(suggested.items);
    } else {
      setSuggestedVideos([]);
    }

    if (commented) {
      setComments(commented.items);
    } else {
      setComments([]);
    }
  }, [videoInfo, suggested, commented]);

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
                    {!comments ? (
                      <div className="text-sm tracking-widest capitalize mt-5 font-medium text-[#aaa]">
                        No comments found
                      </div>
                    ) : (
                      comments?.map((comment, i) => {
                        return <CommentComponent key={i} comment={comment} />;
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="capitalize font-medium text-white text-xl mb-3">
                suggested videos
              </h2>
              <div className="space-y-2">
                {suggestedVideos?.map((video) => {
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
