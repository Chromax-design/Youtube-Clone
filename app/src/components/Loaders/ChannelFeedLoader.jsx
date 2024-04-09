import React from "react";

export default function ChannelFeedLoader() {
  let skeleton = [];
  for (let i = 0; i < 15; i++) {
    skeleton.push(
      <div className=" rounded-lg">
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
    <div className="max-w-5xl mx-auto min-h-[100vh] bg-black p-3">
      <div className="flex max-sm:flex-col max-sm:text-center items-center gap-5 mt-[70px]">
        <div className="w-[160px] h-[160px] rounded-full skeleton"></div>
        <div>
          <p className="h-2 w-[170px] skeleton mb-4 rounded-lg"></p>
          <p className="h-2 w-[150px] skeleton mt-2 rounded-lg"></p>
          <p className="h-2 w-[100px] skeleton mt-2 rounded-lg"></p>
        </div>
      </div>
      <div className="mt-6 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(276px,1fr))] gap-3">
        {skeleton}
      </div>
    </div>
  );
}
