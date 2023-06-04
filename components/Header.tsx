"use client";
import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div
          className="absolute left-0 right-0 w-full h-96 bg-gradient-to-br from-pink-400
            to-[#0055D1] rounded-md blur-3xl filter opacity-50 -z-50 "
        ></div>

        <Image
          src="https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg"
          alt="image"
          width={100}
          height={50}
          className="w-44"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full pt-10 md:pt-0">
          <form className="flex h-12 flex-1  items-center space-x-5 bg-white rounded-md p-2 shadow-md md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              className="outline-none flex-1 p-2"
              placeholder="Search"
            />
            <button hidden>search</button>
          </form>

          <Avatar name="Adhil muhammed" round color="#0055D1" size="50" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center text-sm font-light font-serif shadow-xl rounded-xl w-fit bg-white italic text-[#0055D1] p-5">
          <UserCircleIcon className="w-10 h-10 inline-block text-[#0055D1] mr-1" />
          GPT is summarising your tasks for the day...
        </p>
      </div>
    </header>
  );
}

export default Header;
