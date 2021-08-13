import React from "react";
// import FilterBadge from "./Badge";
import CloseIcon from "assets/icons/close.svg";
import ActiveLink from "../ActiveLink";

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
  return (
    <div className="z-99 fixed h-screen top-0 py-4 lg:w-auto md:w-auto sm:w-auto w-full px-4 lg:px-0 md:px-0 sm:px-0 right-0 lg:pr-4 md:pr-4 sm:pr-4 text-left text-gray-700">
      <div onClick={onClose} className="w-full h-screen top-0 left-0 bg-black z-0 fixed opacity-5" />
      <div className="bg-white rounded-4xl lg:w-96 md:w-96 sm:w-96 mx-auto lg:mx-0 sm:mx-0 filter-drop-shadow-extended h-full flex flex-col overflow-hidden z-50 relative">
        <div className="font-extrabold flex bg-white w-full justify-between">
          <div className="pl-8 pt-7 pb-3">
            <h1 className="text-xl">Menu</h1>
          </div>
          <div
            onClick={onClose}
            className="rounded-full m-2 cursor-pointer h-12 w-12 flex items-center justify-center  border-2 border-solid border-gray-200 hover:bg-gray-200"
          >
            <CloseIcon />
          </div>
        </div>
        <ul className="text-center lg:hidden sm:hidden md:hidden mt-2 py-6">
            <li className="font-bold text-gray-500 text-lg">
            <ActiveLink activeClassName="active" href="/"><a href="/">Screens</a></ActiveLink>
            </li>
          </ul>
          <ul className="text-center lg:hidden sm:hidden md:hidden mt-2 py-6">
            <li className="font-bold text-gray-500 text-lg">
            <ActiveLink activeClassName="active" href="/articles"><a href="/articles">Articles</a></ActiveLink>
            </li>
          </ul>
        <ul className="text-center lg:hidden sm:hidden md:hidden mt-2 py-6">
            <li className="font-bold text-gray-500 text-lg">
              <ActiveLink activeClassName="active"  href="/about"><a href="/about">About</a></ActiveLink>
            </li>
          </ul>

        <div className="text-xs absolute bottom-10 xl:absolute flex justify-center w-full px-2">

          <span
            onClick={onClose}
          >
            Close
          </span>
        </div>
      </div>
      <style jsx>{`
          .nav-link {
            font-weight: 400 !important;
          }
      .active {
        text-decoration: underline #FF3A02;
        font-weight: 700;
        color: #111827;
        text-underline-offset: 28px;
        text-decoration-thickness: 4px;
        text-underline-width: 120%;
      }
    `}</style>
    </div>
  );
};

export default FilterCard;
