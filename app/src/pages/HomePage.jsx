import React, { useEffect, useState } from "react";
import { useGetYoutubeVideosQuery } from "../features/apiSlice";
import { SideBar } from "../components/Navigation/SideBar";
import { HomeFeedLoader } from "../components/Loaders/HomeFeedLoader";
import { VideoComponent } from "../components/VideoComponent";
import { MainContainer } from "../UI/MainContainer";

export const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState("new");
  const { data, isLoading } = useGetYoutubeVideosQuery(`${category}`);
  console.log(data)

  useEffect(() => {
    if (data) {
      setVideos(data.items);
    } else {
      setVideos([]);
    }
  }, [data, category]);

  return (
    <>
      <SideBar category={category} setCategory={setCategory} />
      <div className="bg-black min-h-[100vh] ">
        <MainContainer className={"max-sm:mt-[112px] mt-[56px] p-5"}>
          <div className="max-sm:w-full w-[calc(100%-220px)] max-sm:mx-auto sm:ml-auto">
            <h2 className="text-white text-2xl capitalize font-semibold mb-4">
              {category} videos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
              {isLoading == true ? (
                <HomeFeedLoader />
              ) : (
                videos.map((video, i) => {
                  return <VideoComponent video={video} key={i} />;
                })
              )}
            </div>
          </div>
        </MainContainer>
      </div>
    </>
  );
};
