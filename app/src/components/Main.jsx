import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetYoutubeVideosQuery } from "../features/apiSlice";
import HomeFeedLoader from "./Loaders/HomeFeedLoader";
import PartSide from "./PartSide";
import { VideoComponent } from "./VideoComponent";

export default function () {
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState("new");
  const { data, isLoading } = useGetYoutubeVideosQuery(`${category}`);

  useEffect(() => {
    if (data) {
      setVideos(data.items);
    } else {
      setVideos([]);
    }
  }, [data, category]);
  return (
    <>
      <PartSide category={category} setCategory={setCategory} />
      <div className="bg-black min-h-[100vh] max-sm:mt-[112px] mt-[56px] p-5">
        <div className="max-sm:w-full w-[calc(100%-220px)] ml-auto">
        <h2 className="text-white text-2xl capitalize font-semibold mb-4">{category} videos</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
            {isLoading == true ? (
              <HomeFeedLoader />
            ) : (
              videos.map((video, i) => {
                return <VideoComponent video={video} key={i} />;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
