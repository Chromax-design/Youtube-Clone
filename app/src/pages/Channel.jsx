import { useParams } from "react-router-dom";
import {
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery,
} from "../features/apiSlice";
import { useEffect, useState } from "react";
import { VideoComponent } from "../components/VideoComponent";
import { ChannelFeedLoader } from "../components/Loaders/ChannelFeedLoader";
import {Nodata} from "../components/Nodata";
import { ChannelInfo } from "../components/Channel/ChannelInfo";

export const Channel = () => {
  const { id } = useParams();
  const [channels, setChannel] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);
  const { data: channelDetail } = useGetChannelDetailsQuery(id);
  const { data: channelVideo, isLoading } = useGetChannelVideosQuery(id);

  useEffect(() => {
    if (channelDetail) {
      setChannel(channelDetail?.items[0]);
    } else {
      setChannel([]);
    }

    if (channelVideo) {
      setChannelVideos(channelVideo?.items);
    } else {
      setChannelVideos([]);
    }
  }, [channelDetail, channelVideo]);

  return (
    <>
      {isLoading == true ? (
        <ChannelFeedLoader />
      ) : !channelVideos ? (
        <Nodata />
      ) : (
        <div className=" max-w-5xl mx-auto min-h-[100vh] bg-black p-3">
          <ChannelInfo channels={channels} />
          <div className="mt-6">
            <h2 className="text-3xl capitalize text-white font-semibold">
              videos
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(276px,1fr))] gap-3 mt-3">
              {channelVideos.map((video) => {
                return <VideoComponent video={video} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
