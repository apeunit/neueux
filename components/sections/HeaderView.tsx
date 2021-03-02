import React from "react";
import Link from "next/link";

const HeaderView = ({ app, onOpenFilter }) => (
  <div className="">
    <div className="mt-5">
      <Link href="/">
        <a className="back-button cursor-pointer rounded-full bg-gray-100 px-5 py-3 font-bold text-xs">
          <img src="/img/arrow.svg" className="inline-block mr-2" />
          Back
        </a>
      </Link>
    </div>
    <div className="text-center mt-7">
      <div className="flex justify-center">
        <img src={`/${app.icon}`} className="w-10" />
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
   

      <div className="text-right w-2/4 text-xs ">
        <span
          onClick={onOpenFilter}
          className="bg-black text-white text-xs px-4 leading-4 py-3 font-bold transition-250ms rounded-full"
        >
          Filter by Categories
        </span>
      </div>
    </div>
  </div>
);

export default HeaderView;
