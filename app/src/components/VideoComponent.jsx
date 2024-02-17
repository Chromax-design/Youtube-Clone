import React from 'react'
import { Link } from 'react-router-dom';
import { formatToDateString } from '../utils/formatDate';

export const VideoComponent = ({ video }) => {
    if (!video.id.videoId) {
      return null;
    }
    return (
      <div className="">
        <Link className="w-full" to={`/video/${video.id.videoId}`}>
          <img
            src={video?.snippet?.thumbnails?.high.url}
            alt=""
            className=" aspect-video object-cover w-full rounded-lg"
          />
        </Link>
        <div className="py-2">
          <div className="space-y-2">
            <Link
              to={`/video/${video.id.videoId}`}
              className="text-sm font-semibold capitalize text-white line-clamp-2"
            >
              <p>{video.snippet.title}</p>
            </Link>
            <div className="text-sm font-normal capitalize text-[#aaa]">
              <Link to={`/channel/${video.snippet.channelId}`}>
                {video.snippet.channelTitle}
              </Link>
              <p>{formatToDateString(video.snippet.publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
