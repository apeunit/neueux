import React from "react";
import Link from "next/link";

const HeaderView = ({ app }) => (
  <div className="">
    <div className="mt-5">
      <Link href="/">
      <a className="back-button rounded-full bg-gray-100 px-5 py-3 font-bold text-xs">
        <img src="/img/arrow.png" className="inline-block mr-2" />
        Back
      </a>
      </Link>
    </div>
    <div className="text-center mt-7">
      <div className="flex justify-center">
        <img src={app.icon} />
      </div>
      <p className="text-sm mt-4 font-extrabold leading-6 tracking-tighter">
        {app.name}
      </p>
      <span className="text-sm text-gray-500 mt-1 tracking-tighter leading-6">
        {app.description}
      </span>
    </div>
    <div className="flex">
      <div className="w-3/6 text-5xl leading-loose font-extralight tracking-tighter"></div>

      <div className="text-right w-3/6 text-xs mt-7 mb-5">
        <a className="bg-black text-white text-xs px-4 leading-4 py-3 font-bold transition-250ms rounded-full">
          Filter by Categories
        </a>
      </div>
    </div>
  </div>
);

export default HeaderView;
