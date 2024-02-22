import React from 'react'
import { Link} from 'react-router-dom';
import { formatToDateString } from '../utils/formatDate';

export default function SuggestedVideo({ video }) {
    if (!video?.snippet?.thumbnails?.high?.url || !video) {
      return null;
    }
    return (
      <div className="flex max-sm:flex-col sm:gap-2 items-start">
        <Link to={`/video/${video?.id?.videoId}`}>
          <img
            src={video?.snippet?.thumbnails?.high?.url}
            alt=""
            className=" aspect-video sm:max-w-[170px] h-full rounded-lg"
          />
        </Link>
        <div>
          <Link to={`/video/${video?.id?.videoId}`}>
            <h3 className="text-white mb-3 sm:mt-2 text-sm font-medium line-clamp-2">
              {video?.snippet?.title}
            </h3>
          </Link>
          <div className="text-xs capitalize space-y-1">
            <p className="text-[#aaa]">{video?.snippet?.channelTitle}</p>
            <p className="text-[#aaa]">
              {formatToDateString(video?.snippet?.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    );
}
