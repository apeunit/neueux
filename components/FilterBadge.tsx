import React from "react";
import RemoveIcon from "assets/icons/remove.svg";
import Button from "./sections/Button";


const FilterBadge = ({ text, onSelect }) => (
  <Button onClick={onSelect} type="secondary" size="sm">
   {text}
    <RemoveIcon className="inline-block ml-2" />
  </Button>
    
  
);

export default FilterBadge;
