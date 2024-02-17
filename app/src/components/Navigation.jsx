import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/assets/icons/logo.svg";
import search from "/assets/icons/search.svg";

export default function Navigation() {
  const navigate = useNavigate();
  const initialState = {
    search: "",
  };
  const [searchData, setSearchData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchData.search}`);
    searchData(initialState);
  };

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-20">
        <div className="mx-auto h-[56px] bg-black flex justify-between items-center px-[2%]">
          <div className="flex gap-3 items-center">
            <Link to={"/"}>
              <img src={Logo} alt="" className="" />
            </Link>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex h-[40px] shrink-0">
              <input
                type="text"
                className="w-[250px] sm:w-[420px] h-full bg-[#121212] rounded-tl-full rounded-bl-full placeholder:capitalize placeholder:text-[#aaa] p-2 border-[#303030] border-2 focus:outline-none text-white focus:bg-[#121212]"
                placeholder="search"
                name="search"
                value={searchData.search}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="flex justify-center items-center w-16 bg-[#303030] rounded-tr-full rounded-br-full"
              >
                <img
                  src={search}
                  alt=""
                  className="w-6 h-6 hover:cursor-pointer"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
