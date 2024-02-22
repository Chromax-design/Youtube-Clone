import React from "react";
import liked from "/assets/icons/liked.svg"

export default function CommentComponent({ comment }) {
  return (
    <div className="flex gap-3 items-start mt-3">
      <img
        src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        alt=""
        className="w-12 h-12 rounded-full"
      />
      <div>
        <h3 className="font-bold capitalize ">
          {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </h3>
        <p className="text-sm mt-1">
          {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
        </p>
        <div className="flex gap-4 items-center mt-3">
          <div className="flex gap-1 items-center">
            <img src={liked} alt="" className="w-6" />
            <span className="text-sm text-[#aaa]">
              {comment?.snippet?.topLevelComment?.snippet?.likeCount}
            </span>
          </div>
          <span className="capitalize text-sm text-[#aaa]">reply</span>
        </div>
      </div>
    </div>
  );
}
