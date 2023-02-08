/* eslint-disable @next/next/no-img-element */
import React from "react";
import BookmarkIcon from "@heroicons/react/24/outline/BookmarkIcon";
import ChatIcon from "@heroicons/react/24/outline";
import DotsHorizontalIcon from "@heroicons/react/24/solid";
import EmojiHappyIcon from "@heroicons/react/24/outline";
import HeartIcon from "@heroicons/react/24/outline";
import PaperAirplaneIconIcon from "@heroicons/react//outline/PaperAirplaneIcon";
function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm ">
      {/* Header */}

      <div className="flex items-center p-5  ">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3 "
          src={userImg}
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 " />
      </div>

      {/* img */}
      <img className="object-cover w-full " src={img} alt="" />

      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4 ">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIconIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      {/* caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* input Box */}
      <form className="flex items-center p-4 ">
        <EmojiHappyIcon className="h-7" />
        <input
          className="border-none flex-1 focus:ring-0 outline-none"
          type="text"
          placeholder="Add a comment..."
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
