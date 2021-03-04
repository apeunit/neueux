import React from "react";

const FilterBadge = ({ text, onSelect }) => (
  <div
    onClick={onSelect}
    className="cursor-pointer rounded-full bg-gray-100 px-5 py-3 font-bold text-xs capitalize mr-2 mb-2"
  >
    {text}
    <img src="/img/remove.svg" className="inline-block ml-3" />
  </div>
);

export default FilterBadge;
