import React from "react";
const Header = ({ title }) => (
  <div className="mt-16 block">
    <div className="flex">
      <div className="w-3/6 font-extrabold text-5xl leading-2">
        <h1>{title}</h1>
      </div>
    </div>
  </div>
);

export default Header;
