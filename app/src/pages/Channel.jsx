import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import {
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery,
} from "../features/apiSlice";
import { useEffect, useState } from "react";
import { VideoComponent } from "../components/VideoComponent";
import ChannelFeedLoader from "../components/Loaders/ChannelFeedLoader";
import Nodata from "../components/Nodata";

export default function Channel() {
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
      <Navigation />
      {isLoading == true ? (
        <ChannelFeedLoader />
      ) : !channelVideos ? (
        <Nodata />
      ) : (
        <div className=" max-w-5xl mx-auto min-h-[100vh] bg-black p-3">
          <div className="flex max-sm:flex-col max-sm:text-center items-center gap-5 mt-[70px]">
            <div className="w-[160px] h-[160px] rounded-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg')] bg-cover bg-center">
              <img
                src={channels?.brandingSettings?.image?.bannerExternalUrl}
                alt=""
                className="w-[160px] h-[160px] rounded-full object-cover"
              />
            </div>
            <div className="gap-2 flex flex-col justify-center">
              <h2 className="capitalize text-2xl sm:text-4xl font-semibold text-white">
                {channels?.brandingSettings?.channel?.title}
              </h2>
              <p className=" text-[#AAAAAA]">
                {channels?.snippet?.customUrl} <br />{" "}
                {channels?.statistics?.subscriberCount} subscribers •{" "}
                {channels?.statistics?.videoCount} videos
              </p>
            </div>
          </div>
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
}
