import React from "react";
import { categories } from "../../utils/categories";
import { SideBarLink } from "./SideBarLink";

export const SideBar = ({ category, setCategory }) => {
  return (
    <div
      className={`fixed top-[56px] left-0 max-sm:w-full w-[220px] bg-black px-2 z-10 transition-all max-sm:h-[auto] h-[100vh]`}
    >
      <div className="h-full overflow-hidden max-sm:overflow-x-scroll sm:hover:overflow-y-scroll scroll">
        <div className="flex max-sm:flex-row flex-col items-start pt-4 pb-2 px-3 gap-4">
          {categories.map((item) => {
            return (
              <SideBarLink
                item={item}
                category={category}
                setCategory={setCategory}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
