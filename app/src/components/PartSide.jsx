import React from "react";
import { categories } from "../utils/categories";
import "./partpage.css"

export default function PartSide({ category, setCategory }) {
  return (
    <div
      className={`fixed top-[56px] left-0 max-sm:w-full w-[220px] bg-black px-2 z-10 transition-all max-sm:h-[auto] h-[100vh]`}
    >
      <div className="h-full overflow-hidden max-sm:overflow-x-scroll sm:hover:overflow-y-scroll scroll">
        <div className="flex max-sm:flex-row flex-col items-start pt-4 pb-2 px-3 gap-4">
          {categories.map((item) => {
            return (
              <button
                type="button"
                className={`${
                  category == item.title ? "bg-[#cc0000]" : ""
                } flex items-center max-sm:gap-2 max-sm:px-4 gap-4 w-full p-2 rounded-full group hover:bg-[#CC0000]`}
                onClick={() => setCategory(item.title)}
              >
                <div
                  className={`${
                    category == item.title ? "text-white" : "text-[#CC0000]"
                  } group-hover:text-white flex justify-center items-center`}
                >
                  {item?.icon}
                </div>
                <span
                  className={`${
                    category == item.title ? "opacity-100" : "opacity-80"
                  } text-white group-hover:opacity-100 capitalize font-medium tracking-wider text-sm`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
