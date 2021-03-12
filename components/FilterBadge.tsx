import React from "react";
import RemoveIcon from "assets/icons/remove.svg";

const FilterBadge = ({ text, onSelect }) => (
  <div
    onClick={onSelect}
    className="cursor-pointer rounded-full bg-gray-100 px-5 py-3 font-bold text-xs capitalize mr-2 hover:bg-gray-200"
  >
    {text}
    <RemoveIcon className="inline-block ml-3" />
  </div>
);

export default FilterBadge;
