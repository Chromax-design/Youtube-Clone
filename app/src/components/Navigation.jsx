import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/assets/icons/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export default function Navigation() {
  const navigate = useNavigate();
  const initialState = {
    search: "",
  };
  const [searchData, setSearchData] = useState(initialState);
  const [boxShow, setBoxShow] = useState(false);

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

  const handleClick = () => {
    setBoxShow(!boxShow);
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
          <form action="" onSubmit={handleSubmit} className="hidden lg:block">
            <div className="flex h-[40px] shrink-0 flex-wrap">
              <input
                type="text"
                className="w-[400px] h-full bg-[#121212] rounded-tl-full rounded-bl-full placeholder:capitalize placeholder:text-[#aaa] p-2 border-[#303030] border-2 focus:outline-none text-white focus:bg-[#121212] active:bg-[#121212]"
                placeholder="search"
                name="search"
                value={searchData.search}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="flex text-white text-xl justify-center items-center w-12 bg-[#303030] rounded-tr-full rounded-br-full"
              >
                <SearchIcon />
              </button>
            </div>
          </form>
          <div className="lg:hidden">
            <button
              type="button"
              className="text-center text-2xl text-white"
              onClick={handleClick}
            >
              {boxShow ? <CloseIcon /> : <SearchIcon />}
            </button>
            {boxShow && (
              <form
                className="fixed flex gap-2 items-center top-[56px] bg-black left-0 w-full z-30 h-auto p-5"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  className="w-full p-2 rounded-full bg-[#121212] border-[#303030] border-2 focus:outline-none text-white"
                  name="search"
                  value={searchData.search}
                  onChange={handleChange}
                />
                <button className=" text-white" type="submit">
                  <SearchIcon style={{ fontSize: 30 }} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
