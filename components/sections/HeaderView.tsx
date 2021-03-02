import React from "react";
import Link from "next/link";

const HeaderView = ({ app, onOpenFilter }) => (
  <div className="">
    <div className="mt-5 hidden xl:block">
      <Link href="/">
        <a className="back-button cursor-pointer rounded-full bg-gray-100 px-5 py-3 font-bold text-xs">
          <img src="/img/arrow.svg" className="inline-block mr-2" />
          Back
        </a>
      </Link>
    </div>
    <div className="text-center mt-7 hidden xl:block">
      <div className="flex justify-center">
        <img src={`/${app.icon}`} className="w-16 h-16" />
      </div>
      <p className="text-sm mt-4 font-extrabold leading-6 tracking-tighter">
        {app.name}
      </p>
      <span className="text-sm text-gray-500 mt-1 tracking-tighter leading-6">
        {app.description}
      </span>
    </div>
    <div className="flex mt-7 mb-5">
      <div className="w-2/4">
      <Link href="/">
        <a className="back-button cursor-pointer rounded-full bg-gray-100 px-5 py-3 font-bold text-xs">
        Onboarding
        <img src="/img/remove.svg" className="inline-block ml-3"/>
        </a>
      </Link>
      </div>
   

      <div className="text-right w-2/4 text-xs hidden xl:block">
        <span
          onClick={onOpenFilter}
          className="bg-black text-white cursor-pointer text-xs px-4 leading-4 py-3 font-bold transition-250ms rounded-full"
        >
          Filter by Categories
        </span>
      </div>
    </div>
  </div>
);

export default HeaderView;
