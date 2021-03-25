import React from "react";
import RemoveIcon from "assets/icons/remove.svg";
import Button from "./sections/Button";


const FilterBadge = ({ text, onSelect }) => (
  <Button type="secondary" size="lg">
   {text}
    <RemoveIcon onClick={onSelect} className="inline-block ml-2 cursor-pointer" />
  </Button>
    
  
);

export default FilterBadge;
