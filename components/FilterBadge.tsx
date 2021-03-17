import React from "react";
import RemoveIcon from "assets/icons/remove.svg";

const FilterBadge = ({ text, onSelect }) => (
  <div
    onClick={onSelect}
    className="cursor-pointer rounded-full bg-gray-100 pl-4 pr-3 py-3 font-bold text-xs capitalize mr-2 items-center hover:bg-gray-200"
  >
    {text}
    <RemoveIcon className="inline-block ml-2" />
  </div>
);

export default FilterBadge;
