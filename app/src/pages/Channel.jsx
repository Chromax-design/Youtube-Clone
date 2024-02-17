import { Link, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import banner from "/assets/thumbs/banner.jpg";
import avatar from "/assets/avatar.png";
import notifications from "/assets/icons/notifications.svg";
import arrowBottom from "/assets/icons/arrowBottom.png";
import play from "/assets/icons/play.svg";
import search from "/assets/icons/search.svg";
import video from "/assets/thumbs/videoBanner.jpg";
import PartSide from "../components/PartSide";
import { useGetChannelDetailsQuery } from "../features/apiSlice";
import { useEffect, useState } from "react";

export default function Channel() {
  const { id } = useParams();
  const [channels, setChannel] = useState([]);
  const { data } = useGetChannelDetailsQuery(id);

  useEffect(() => {
    if (data) {
      setChannel(data.items);
    } else {
      setChannel([]);
    }
  }, [data]);

  console.log(data);
  let playList = [];
  for (let i = 0; i < 5; i++) {
    playList.push(
      <div className="" key={i}>
        <img src={video} alt="" className="w-full" />
        <div className="py-2">
          <div className="space-y-2">
            <Link to={"/"} className="text-xs font-bold capitalize text-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, vitae.
              </p>
            </Link>
            <div className="text-xs font-normal capitalize text-[#aaa]">
              <Link to={"/"}>john doe</Link>
              <p>15k views • 1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Navigation />
      <PartSide />
      <div className="w-[calc(100%-220px)] ml-auto min-h-[100vh] bg-black">
        <div className="bg-[#212121]">
          <img src={banner} alt="" className="w-full h-[192px] mt-[56px]" />
          {/* <div className=" max-w-6xl mx-auto py-5 px-10 flex justify-between items-center">
            <div className="flex items-center gap-4 text-white">
              <img
                src={avatar}
                alt=""
                className="w-[120px] h-[120px] rounded-full"
              />
              <div className="space-y-1">
                <h2 className="capitalize text-2xl font-semibold">
                  Micheal faraday
                </h2>
                <p className="text-sm text-[#AAAAAA]">
                  @NinjaNerdOfficial • 2.84M subscribers • 590 videos
                </p>
              </div>
            </div>
            <button className=" bg-[#303030] hover:bg-gray-600 text-white capitalize font-bold rounded-full flex items-center py-3 px-5 gap-1">
              <img src={notifications} alt="" />
              <span>subscribe</span>
              <img src={arrowBottom} alt="" className="w-7" />
            </button>
          </div>
          <div className="max-w-6xl mx-auto px-10 flex items-center h-[48px] gap-2">
            <Link className="h-full font-bold text-sm uppercase px-4 flex justify-center items-center border-b text-white">
              Home
            </Link>
            <Link className="text-[#aaa] h-full font-bold text-sm uppercase px-4 flex justify-center items-center hover:border-b hover:text-white">
              videos
            </Link>
            <Link className="text-[#aaa] h-full font-bold text-sm uppercase px-4 flex justify-center items-center hover:border-b hover:text-white">
              playlist
            </Link>
            <Link className="text-[#aaa] h-full font-bold text-sm uppercase px-4 flex justify-center items-center hover:border-b hover:text-white">
              community
            </Link>
            <Link className="text-[#aaa] h-full font-bold text-sm uppercase px-4 flex justify-center items-center hover:border-b hover:text-white">
              channels
            </Link>
            <Link className="text-[#aaa] h-full font-bold text-sm uppercase px-4 flex justify-center items-center hover:border-b hover:text-white">
              about
            </Link>
            <div className="h-full flex justify-center items-center px-4">
              <img
                src={search}
                alt=""
                className="w-6 h-6 hover:cursor-pointer"
              />
            </div>
          </div> */}
        </div>
        {/* <div className="max-w-6xl mx-auto my-10">
          <div className="grid grid-cols-[340px,420px] gap-5 max-w-3xl">
            <div className="">
              <img src={video} alt="" className="w-full" />
            </div>
            <div className="space-y-3">
              <h2 className="text-white text-sm">
                Blind Woodturner: Turning passion into fine art
              </h2>
              <span className="text-[#aaa] text-[13px] font-bold">
                576,969 views . 3 weeks ago
              </span>
              <p className="text-white text-sm">
                Chris Fisher, also known as the Blind Woodturner, learned his
                craft by listening to hundreds of hours of YouTube videos and
                experimenting in his workshop. Now he’s a YouTube creator
                himself, sells his products worldwide, and does demonstrations
                all around the country.
              </p>
            </div>
          </div>
        </div> */}
        <hr className="max-w-6xl mx-auto" />
        <div className="max-w-6xl mx-auto mt-5">
          {/* <div className="flex items-center gap-5">
            <h1 className="capitalize text-white font-bold text-sm">
              search on '21
            </h1>
            <div className="flex items-center gap-2 hover:cursor-pointer">
              <img src={play} alt="" className="w-3" />
              <span className="uppercase text-[#aaa] font-bold">play all</span>
            </div>
          </div> */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(276px,1fr))] gap-5 mt-6">
            {/* {channels.map((channel, i) => {
              return (
                <div className="" key={i}>
                  <img
                    src={channel?.snippet?.thumbnails?.high?.url}
                    alt=""
                    className="w-full"
                  />
                  <div className="py-2">
                    <div className="space-y-2">
                      <Link
                        to={"/"}
                        className="text-xs font-bold capitalize text-white"
                      >
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptas, vitae.
                        </p>
                      </Link>
                      <div className="text-xs font-normal capitalize text-[#aaa]">
                        <Link to={"/"}>john doe</Link>
                        <p>15k views • 1 week ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
}
