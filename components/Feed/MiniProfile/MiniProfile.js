/* eslint-disable @next/next/no-img-element */
import React from "react";

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png"
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Syrineee11</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
