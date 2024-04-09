import React from "react";
import noData from "/assets/thumbs/no-data.svg";

export const Nodata = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col gap-2">
      <img src={noData} alt="" className="max-w-[400px]" />
      <h2 className="text-[#aaa] tracking-widest text-center capitalize">
        no results found
      </h2>
    </div>
  );
};
