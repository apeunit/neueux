import React from "react";
import FilterBadge from "components/FilterBadge";
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
    <div className="z-50 fixed h-screen top-0 py-4 xl:w-auto w-full px-4 xl:px-0 right-0 xl:pr-4 text-left text-gray-700">
      <div onClick={onClose} className="w-full h-screen top-0 left-0 bg-black z-0 fixed opacity-5" />
      <div className="bg-white rounded-4xl xl:w-96 mx-auto xl:mx-0 ars h-full flex flex-col overflow-hidden z-50 relative">
        <div className="font-extrabold flex bg-white w-full justify-between">
          <div className="pl-8 pt-7 pb-3">
            <h1 className="text-xl">Filters</h1>
          </div>
          <div
            onClick={onClose}
            className="rounded-full m-2 cursor-pointer h-12 w-12 flex items-center justify-center  border-2 border-solid border-gray-200 hover:bg-gray-200"
          >
            <CloseIcon />
          </div>
        </div>
        <div className="mb-9 overflow-y-auto px-8">
          <div key={`filter-badge-${index}`} className="flex flex-wrap mt-7 mb-10">
            {selectedList.map((item) => (
              <FilterBadge
                key={`filter-badge-${item.slug}`}
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
            <ul className="text-base">
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

        <div className="text-xs bottom-2 xl:absolute relative flex justify-center w-full">
          {selectedList.length ? (
            <span
              onClick={onClear}
              className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-black text-xs px-16 leading-4 py-3 font-bold transition-250ms rounded-tl-full rounded-bl-full"
            >
              Clear
            </span>
          ) : null}
          <span
            onClick={onClose}
            className={[
              "bg-gray-900 hover:bg-gray-600 text-white text-xs leading-4 cursor-pointer py-3 font-bold transition-250ms ",
              selectedList.length
                ? "px-16 rounded-tr-full rounded-br-full"
                : "px-40 rounded-full",
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
