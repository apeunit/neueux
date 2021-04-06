import React from "react";
import Link from "next/link";
import ArrowIcon from "assets/icons/arrow.svg";
import Button from "../Button"
const AppHeaderView = ({ app }) => (
  <div className="">
    <div className="mt-5">
      <div className="pt-1">
      <Link href="/">
        <a className=" ">
          <Button type="secondary" size="lg">
          <ArrowIcon className="inline-block mr-2"/>
                  Back  
          </Button>
        </a>
      </Link>
      </div>
      
    </div>
    <div className="text-center mt-8">
      <div className="flex justify-center">
        <img src={`/${app.icon}`} className="w-16 h-16 filter-drop-shadow-view rounded-lg bg-white" />
      </div>
      <h1 className="text-xl mt-4 font-extrabold leading-6 tracking-tighter">
        {app.name}
      </h1>
      <div className="w-1/2 mx-auto">
      <span className="text-sm text-gray-500 mt-1 tracking-tighter leading-6">
        {app.description}
      </span>
      </div>
      
    </div>
  </div>
);

export default AppHeaderView;
