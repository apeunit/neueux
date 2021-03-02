import React from "react";
const Filter = ({ tags, userflows, onClose }) => (
  <div className="z-50 fixed h-screen top-0 py-4 pr-4 right-0">
    <div className="bg-white rounded-2xl w-96  ars overflow-y-auto h-full px-8">
      <div className=" mb-10 font-extrabold mt-7 flex fixed filter">
        <div className="w-1/2">
        <h1 className="text-xl">Filters</h1>
        </div>
        <div className="ml-auto mr-3">
        <div className="rounded-full absolute -top-3  border-2 border-solid border-gray-200 right-4 ">
          <img onClick={onClose} src="/img/close.png" className="m-3" />
        </div>
        </div>
        
      </div>

      <div className="mt-20">
      <div className="mb-5">
        <div className="mb-3 font-bold text-base ">User flows</div>
        <ul className="text-base">
          {userflows.map((userflow) => {
            return <li className="mb-3 capitalize">{userflow.name}</li>;
          })}
        </ul>
      </div>
      <div className="mb-5">
        <div className="mb-3 font-bold text-base ">Tags</div>
        <ul className="text-base">
          {tags.map((tag) => {
            return <li className="mb-3 capitalize">{tag.name}</li>;
          })}
        </ul>
      </div>
      </div>

      <div className="text-xs bottom-10 fixed">
        <span
          onClick={onClose}
          className="bg-gray-900 text-white text-xs px-36 leading-4 py-3 font-bold transition-250ms rounded-full"
        >
          close
        </span>
      </div>
      
    </div>
  </div>
);

export default Filter;
