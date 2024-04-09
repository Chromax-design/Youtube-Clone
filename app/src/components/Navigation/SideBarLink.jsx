export const SideBarLink = ({item, category, setCategory}) => {
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
};
