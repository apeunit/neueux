import React from "react";
import FilterBadge from "./Badge";
import CloseIcon from "assets/icons/close.svg";

const ListItem = ({ text, onSelect }) => (
  <li
    onClick={onSelect}
    className="mb-3 capitalize text-base font-normal cursor-pointer hover:text-gray-900"
  >
    {text}
  </li>
);

const FilterCard = ({
  tags,
  userflows,
  selectedList,
  onClose,
  onSelect,
  onRemove,
  index,
  onClear
}) => {
  return (
    <div className="z-50 fixed h-screen top-0 py-4 sm:w-auto w-full px-4 sm:px-0 right-0 sm:pr-4 text-left text-gray-700">
      <div onClick={onClose} className="w-full h-screen top-0 left-0 bg-black z-0 fixed opacity-5" />
      <div className="bg-white rounded-4xl sm:w-96 mx-auto sm:mx-0 filter-drop-shadow-extended h-full flex flex-col overflow-hidden z-50 relative">
        <div className="font-extrabold flex bg-white w-full justify-between">
          <div className="pl-8 pt-7 pb-3">
            <h1 className="text-xl">Filters</h1>
          </div>
          <div
            onClick={onClose}
            className="rounded-full m-2 cursor-pointer h-12 w-12 flex items-center justify-center border-2 border-solid border-gray-200 hover:bg-gray-200"
          >
            <CloseIcon />
          </div>
        </div>
        <div className="mb-9 overflow-y-auto px-8 h-full">
          <div key={`filter-badge-${index}`} className="flex flex-wrap mt-7 mb-10">
            {selectedList.map((item) => (
              <FilterBadge
                key={`filter-badge-${item.id}`}
                onSelect={() => onRemove(item)}
                text={item.name}
              />
            ))}
          </div>
          <div className="mb-5 text-gray-500">
            <div className="mb-3 font-bold text-base ">User flows</div>
            <ul className="text-base">
              {userflows.map(userflow => {
                return (
                  <ListItem
                    key={`userflow-list-${userflow.id}`}
                    onSelect={() => onSelect(userflow, "userflows")}
                    text={userflow.name}
                  />
                );
              })}
            </ul>
          </div>
          <div className="mb-5 text-gray-500">
            <div className="mb-3 font-bold text-base">Tags</div>
            <ul className="text-base">
              {tags.map(tag => {
                return (
                  <ListItem
                    key={`tag-list-${tag.id}`}
                    onSelect={() => onSelect(tag, "tags")}
                    text={tag.name}
                  />
                );
              })}
            </ul>
          </div>
        </div>

        <div className="text-xs bottom-2 xl:absolute relative flex justify-center w-full px-2">
          {selectedList.length ? (
            <span
              onClick={onClear}
              className="bg-gray-100 hover:bg-gray-200 text-center cursor-pointer text-black text-ssm w-1/2 leading-4 py-4 font-bold transition-250ms rounded-tl-3xl rounded-bl-3xl"
            >
              Clear
            </span>
          ) : null}
          <span
            onClick={onClose}
            className={[
              "bg-gray-900 hover:bg-gray-600 text-white text-center text-ssm leading-4 cursor-pointer py-4 font-bold transition-250ms ",
              selectedList.length
                ? "w-1/2 rounded-tr-3xl rounded-br-3xl"
                : "w-full rounded-3xl",
            ].join(" ")}
          >
            Close
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
