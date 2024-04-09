import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Logo } from "./Logo";
import { CreateInput } from "../../utils/CreateInput";

export const Navigation = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const [boxShow, setBoxShow] = useState(false);

  const onInputChangeHandler = (data) => {
    setSearchData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchData}`);
    searchData(initialState);
  };

  const handleClick = () => {
    setBoxShow(!boxShow);
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-20">
        <nav className="mx-auto h-[56px] bg-black flex justify-between items-center px-[2%]">
          <Logo />
          <form action="" onSubmit={handleSubmit} className="hidden lg:block">
            <div className="flex h-[40px] shrink-0 flex-wrap">
              <CreateInput
                inputType={"text"}
                placeholder={"search"}
                name={"search"}
                value={searchData}
                onInputChange={onInputChangeHandler}
                isMobile={false}
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
                <CreateInput
                  inputType={"text"}
                  placeholder={"search"}
                  name={"search"}
                  value={searchData}
                  onInputChange={onInputChangeHandler}
                  isMobile={true}
                />
                <button className=" text-white" type="submit">
                  <SearchIcon style={{ fontSize: 30 }} />
                </button>
              </form>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
