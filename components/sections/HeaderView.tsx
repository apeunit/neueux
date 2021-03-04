import React from "react";
import Link from "next/link";
import ArrowIcon from "public/img/arrow.svg";
const HeaderView = ({ app }) => (
  <div className="">
    <div className="mt-5">
      <div className="pt-1">
      <Link href="/">
        <a className="back-button hover:bg-gray-200 cursor-pointer rounded-full bg-gray-100 px-5 py-3 font-bold text-xs">
          <ArrowIcon className="inline-block mx-2"/>
          Back
        </a>
      </Link>
      </div>
      
    </div>
    <div className="text-center mt-8">
      <div className="flex justify-center">
        <img src={`/${app.icon}`} className="w-16 h-16 filter-drop-shadow-view rounded-lg" />
      </div>
      <p className="text-xl mt-4 font-extrabold leading-6 tracking-tighter">
        {app.name}
      </p>
      <span className="text-sm text-gray-500 mt-1 tracking-tighter leading-6">
        {app.description}
      </span>
    </div>
  </div>
);

export default HeaderView;
