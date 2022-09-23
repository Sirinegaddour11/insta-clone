/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

import SearchIcon from "@heroicons/react/outline/SearchIcon";
import HomeIcon from "@heroicons/react/solid/HomeIcon";

import PlusCircleIcon from "@heroicons/react/outline/PlusCircleIcon";
import UserGroupIcon from "@heroicons/react/outline/UserGroupIcon";
import HeartIcon from "@heroicons/react/outline/HeartIcon";
import MenuIcon from "@heroicons/react/outline/MenuIcon";
import PaperAirplaneIcon from "@heroicons/react/outline/PaperAirplaneIcon";
/* eslint-disable jsx-a11y/alt-text */
function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
    <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
      {/* Left */}
      <div className="relative hidden lg:inline-grid  w-24 cursor-pointer">
        <Image
          src="http://Links.papareact.com/ocw"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer">
        <Image
          src="http://Links.papareact.com/jjm"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Search */}
      <div className="max-w-xs">
        <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md 
       focus:ring-black focus:border-black "
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4">
        <HomeIcon className="navBtn" />
        <MenuIcon className="h-7 md:hidden cursor-pointer" />
        <div className="relative navBtn">
          <PaperAirplaneIcon className="navBtn rotate-45" />
          <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
        </div>

        <PlusCircleIcon className="navBtn" />
        <UserGroupIcon className="navBtn" />
        <HeartIcon className="navBtn" />
        <img
          src="https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png"
          alt="profile pic"
          className="h-10 rounded-full cursor-pointer"
        />
      </div>
    </div>
    </div>
  );
}
export default Header;
