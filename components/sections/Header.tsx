import React from "react";
const Header = ({ title, onOpenFilter }) => (
  <div className="mt-32 hidden xl:hidden">
    <div className="flex">
      <div className="w-3/6 text-5xl leading-loose font-extralight tracking-tighter">
        <h1>{title}</h1>
      </div>

      <div className="text-right w-3/6 text-xs mt-11">
        <span
          onClick={onOpenFilter}
          className="bg-black cursor-pointer text-white text-xs px-4 leading-4 py-3 font-bold transition-250ms rounded-full"
        >
          Filter by Categories
        </span>
      </div>
    </div>
  </div>
);

export default Header;
