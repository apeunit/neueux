import React from "react";
const Header = ({ title }) => (
    <div className="mt-32">
      <div className="flex">
        <div className="w-3/6 text-5xl leading-loose font-extralight tracking-tighter">
          <h1>{title}</h1>
        </div>

        <div className="text-right w-3/6 text-xs mt-11">
          <a className="bg-black text-white text-xs px-4 leading-4 py-3 font-bold transition-250ms rounded-full">
            Filter by Categories
          </a>
        </div>
      </div>
    </div>
);

export default Header;
