import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetVideoCommentsQuery,
  useGetVideoDetailsQuery,
} from "../features/apiSlice";
import ReactPlayer from "react-player/youtube";
import { VideoLoader } from "../components/Loaders/VideoLoader";
import { CommentComponent } from "../components/Comments/CommentComponent";
import { Comment } from "../components/Comments/Comment";
import { MainContainer } from "../UI/MainContainer";
export const Video = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const { data: videoInfo, isLoading } = useGetVideoDetailsQuery(id);
  const { data: commented } = useGetVideoCommentsQuery(id);

  useEffect(() => {
    if (videoInfo) {
      setVideoDetails(videoInfo.items[0]);
    } else {
      setVideoDetails([]);
    }

    if (commented) {
      setComments(commented.items);
    } else {
      setComments([]);
    }
  }, [videoInfo, commented]);

  return (
    <>
      {isLoading ? (
        <VideoLoader />
      ) : (
        <MainContainer className={"p-5 mt-[56px] text-white max-w-4xl"}>
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
            <Comment comments={comments} />
          </div>
        </MainContainer>
      )}
    </>
  );
};
