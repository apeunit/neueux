import React from "react";
const Header = ({ title }) => (
  <div className="mt-32">
    <div className="flex">
      <div className="w-3/6 text-5xl leading-loose font-extralight tracking-tighter">
        <h1>{title}</h1>
      </div>
    </div>
  </div>
);

export default Header;
