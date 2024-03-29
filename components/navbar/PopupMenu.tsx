import React from "react";
import CloseIcon from "assets/icons/close.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const FilterCard = ({
//   tags,
//   userflows,
//   selectedList,
  onClose,
//   onSelect,
//   onRemove,
//   index,
//   onClear
}) => {
  const router = useRouter();
  
  return (
    <div className="z-99 fixed h-screen top-0 py-4 sm:w-auto w-full px-4 sm:px-0 right-0 sm:pr-4 text-left text-gray-700">
      <div onClick={onClose} className="w-full h-screen top-0 left-0 bg-black z-0 fixed opacity-5" />
      <div className="bg-white rounded-4xl sm:w-96 mx-auto sm:mx-0 filter-drop-shadow-extended h-full flex flex-col overflow-hidden z-50 relative">
        <div className="font-extrabold flex bg-white w-full justify-between">
          <div className="pl-8 pt-7 pb-3">
            <h1 className="text-xl">Menu</h1>
          </div>
          <div onClick={onClose} className="rounded-full m-2 cursor-pointer h-12 w-12 flex items-center justify-center  border-2 border-solid border-gray-200 hover:bg-gray-200">
            <CloseIcon />
          </div>
        </div>
        <ul className="text-center sm:hidden mt-2 py-6">
          <li className={`text-gray-500 text-lg ${router.pathname.startsWith("/apps") ? "active" : ""} `}>
            <Link href="/">Screens</Link>
          </li>
        </ul>
        <ul className="text-center sm:hidden mt-2 py-6">
          <li className={`text-gray-500 text-lg ${router.pathname.startsWith("/articles") ? "active" : ""} `}>
            <Link href="/articles">Articles</Link>
          </li>
        </ul>
        <ul className="text-center sm:hidden mt-2 py-6">
          <li className={`text-gray-500 text-lg ${router.pathname.startsWith("/about") ? "active" : ""} `}>
            <Link href="/about">About this project</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterCard;
