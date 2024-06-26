import React, { useEffect, useState } from "react";
import { VideoComponent } from "../components/VideoComponent";
import { useParams } from "react-router-dom";
import { useGetYoutubeVideosQuery } from "../features/apiSlice";
import { HomeFeedLoader } from "../components/Loaders/HomeFeedLoader";
import { Nodata } from "../components/Nodata";

export const Search = () => {
  const { search } = useParams();
  const [results, setResults] = useState([]);
  const { data, isLoading } = useGetYoutubeVideosQuery(search);

  useEffect(() => {
    if (data) {
      setResults(data.items);
    } else {
      setResults([]);
    }
  }, [data]);

  return (
    <>
      <div className="max-w-5xl mx-auto mt-[56px] p-5">
        <h2 className="capitalize text-xl font-semibold tracking-widest text-white mt-10 mb-10">
          search results:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {isLoading ? (
            <HomeFeedLoader />
          ) : results.length > 0 ? (
            results.map((result, i) => {
              return <VideoComponent video={result} key={i} />;
            })
          ) : (
            <Nodata />
          )}
        </div>
      </div>
    </>
  );
};
