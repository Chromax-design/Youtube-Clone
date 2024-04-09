export const ChannelInfo = ({channels}) => {
  const imgContainerstyle =
    "w-[160px] h-[160px] rounded-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg')] bg-cover bg-center";

  return (
    <div className="flex max-sm:flex-col max-sm:text-center items-center gap-5 mt-[70px]">
      <div className={imgContainerstyle}>
        <img
          src={channels?.brandingSettings?.image?.bannerExternalUrl}
          alt=""
          className="w-[160px] h-[160px] rounded-full object-cover"
        />
      </div>
      <div className="gap-2 flex flex-col justify-center">
        <h2 className="capitalize text-2xl sm:text-4xl font-semibold text-white">
          {channels?.brandingSettings?.channel?.title}
        </h2>
        <p className=" text-[#AAAAAA]">
          {channels?.snippet?.customUrl} <br />{" "}
          {channels?.statistics?.subscriberCount} subscribers •{" "}
          {channels?.statistics?.videoCount} videos
        </p>
      </div>
    </div>
  );
};
