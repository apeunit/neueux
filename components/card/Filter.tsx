import React from "react";
import FilterBadge from "../FilterBadge";
import CloseIcon from "assets/icons/close.svg";

const ListItem = ({ text, onSelect }) => (
  <li
    onClick={onSelect}
    className="mb-3 capitalize text-base font-normal cursor-pointer"
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
}) => {
  return (
    <div className="z-50 fixed h-screen top-0 py-4 xl:w-auto w-full px-4 xl:px-0 right-0 xl:pr-4 text-left text-gray-700">
      <div className="bg-white rounded-2xl xl:w-96 mx-auto xl:mx-0 ars h-full flex flex-col overflow-hidden">
        <div className="font-extrabold flex bg-white w-full justify-between">
          <div className="pl-8 pt-7 pb-3">
            <h1 className="text-xl">Filters</h1>
          </div>
          <div
            onClick={onClose}
            className="rounded-full m-2 cursor-pointer h-12 w-12 flex items-center justify-center  border-2 border-solid border-gray-200 "
          >
            <CloseIcon />
          </div>
        </div>

        <div className="mb-9 overflow-y-auto px-8">
          <div key={`filter-badge-${index}`} className="flex flex-wrap mt-7">
            {selectedList.map((item) => (
              <FilterBadge
                key={`filter-badge-${item.slug}`}
                onSelect={() => onRemove(item)}
                text={item.name}
              />
            ))}
          </div>
          <div className="mb-9">
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
          <div className="mb-9">
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

        <div className="text-xs xl:bottom-10 bottom-2 xl:fixed relative flex justify-center xl:px-8">
          <span
            onClick={onClose}
            className="bg-gray-900 hover:bg-gray-600  text-white text-xs px-36 leading-4 py-3 font-bold transition-250ms rounded-full"
          >
            close
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
