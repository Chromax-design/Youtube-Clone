import React from "react";

export const HomeFeedLoader = () => {
  let skeleton = [];
  for (let i = 0; i < 15; i++) {
    skeleton.push(
      <div className=" rounded-lg" key={i}>
        <div className="w-full h-[250px] skeleton rounded-lg"></div>
        <div>
          <div>
            <p className="h-2 w-full skeleton mt-2 rounded-lg"></p>
            <p className="h-2 w-[80%] skeleton mt-2 rounded-lg"></p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black min-h-[100vh] p-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
        {skeleton}
      </div>
    </div>
  );
};
