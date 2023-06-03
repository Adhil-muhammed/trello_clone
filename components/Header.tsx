import React from "react";
import Image from "next/image";
// import "../app/globals.css";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg"
          alt="image"
          width={100}
          height={50}
          className="w-40"
        />

        <div>
          {/* search box  */}
          <form className="flex h-12 flex-1  items-center space-x-5 bg-white rounded-md p-2 shadow-md md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              className="outline-none flex-1 p-2"
              placeholder="Search"
            />
            <button hidden>search</button>
          </form>

          {/* avatar */}
        </div>
      </div>
    </header>
  );
}

export default Header;
