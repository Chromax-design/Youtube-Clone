import React from "react";
import "./skeleton.css";

export default function VideoLoader() {
  let suggested = [];
  for (let i = 0; i < 5; i++) {
    suggested.push(
      <div className="flex gap-2 items-start">
        <div className="w-[170px] h-[100px] skeleton rounded-lg"></div>
        <div className="w-full mt-3">
          <div className="mb-2 skeleton w-[80%] h-2 rounded-lg"></div>
          <div className="mb-2 skeleton w-[70%] h-2 rounded-lg"></div>
          <div className="mb-2 skeleton w-[60%] h-2 rounded-lg"></div>
        </div>
      </div>
    );
  }

  let comments = [];
  for (let i = 0; i < 5; i++) {
    comments.push(
      <div className="flex gap-3 items-start mt-3">
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
      <div className="max-w-6xl mx-auto mt-[56px] grid grid-cols-[60%,40%] gap-5">
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
            <div className="mt-3">
              <h2 className="h-2 skeleton rounded-lg w-[60%]"></h2>
              <div>{comments}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-3 h-2 skeleton rounded-lg w-[70%]"></div>
          <div className="space-y-2">{suggested}</div>
        </div>
      </div>
    </div>
  );
}
