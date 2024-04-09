import React from "react";

export const VideoLoader = () => {

  let comments = [];
  for (let i = 0; i < 5; i++) {
    comments.push(
      <div className="flex gap-3 items-start mt-3" key={i}>
        <div className="w-12 h-12 rounded-full skeleton"></div>
        <div className="w-full mt-3">
          <div className="mb-2 skeleton w-[70%] h-2 rounded-lg"></div>
          <div className="mb-2 skeleton w-[50%] h-2 rounded-lg"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-black min-h-[100vh] p-5">
      <div className="max-w-5xl mx-auto mt-[56px]">
        <div>
          <div className="w-full h-[320px] skeleton rounded-lg"></div>
          <div className="mt-3">
            <p className="h-2 skeleton rounded-lg"></p>
            <div className="flex justify-between items-center py-2">
              <h2 className="h-2 skeleton w-24 rounded-lg"></h2>
              <div className="flex items-center gap-4">
                <span className="h-2 w-10 skeleton rounded-lg"></span>
                <span className="h-2 w-10 skeleton rounded-lg"></span>
              </div>
            </div>
            <div className="mt-3 hidden lg:block">
              <h2 className="h-2 skeleton rounded-lg w-[60%]"></h2>
              <div>{comments}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
