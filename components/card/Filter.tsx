import React from "react";
import FilterBadge from "../FilterBadge";

const ListItem = ({ text, onSelect }) => (
  <li
    onClick={onSelect}
    className="mb-3 capitalize text-base font-normal cursor-pointer"
  >
    {text}
  </li>
);

const FilterCard = ({ tags, userflows, selectedList, onClose, onSelect, onRemove, index}) => {
  console.log(selectedList);
  return (
    <div className="z-50 fixed h-screen top-0 py-4 pr-4 right-0 text-left text-gray-700 ">
      <div className="w-full h-screen top-0 left-0 bg-black z-0 fixed opacity-5"></div>
      <div className="bg-white rounded-2xl w-96 z-50 relative ars h-full flex flex-col overflow-hidden">
        <div className="pb-3 font-extrabold pt-7 flex bg-white w-full px-8 justify-between">
          <h1 className="text-xl">Filters</h1>
          <div
            onClick={onClose}
            className="rounded-full cursor-pointer   border-2 border-solid border-gray-200 "
          >
            <img src="/img/close.png" className="m-3" />
          </div>
        </div>

        <div className="mt-0 overflow-y-auto px-8">
          <div key={`filter-badge-${index}`} className="flex flex-wrap">
            {selectedList.map((item) => (
              <FilterBadge
                key={`list-${item.slug}`}
                onSelect={() => onRemove(item)}
                text={item.name}
              />
            ))}
          </div>
          <div className="mb-5 text-gray-500">
            <div className="mb-3 font-bold text-base ">User flows</div>
            <ul className="text-base">
              {userflows.map((userflow, i) => {
                return (
                  <ListItem
                    key={`userflow-list-${i}`}
                    onSelect={() => onSelect(userflow, "userflows")}
                    text={userflow.name}
                  />
                );
              })}
            </ul>
          </div>
          <div className="mb-5 text-gray-500">
            <div className="mb-3 font-bold text-base">Tags</div>
            <ul className="text-base text-gray-500">
              {tags.map((tag, i) => {
                return (
                  <ListItem
                    key={`tag-list-${i}`}
                    onSelect={() => onSelect(tag, "tags")}
                    text={tag.name}
                  />
                );
              })}
            </ul>
          </div>
        </div>

        <div className="text-xs bottom-10 fixed px-8">
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
};

export default FilterCard;
