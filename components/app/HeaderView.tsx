import React from "react";
import Image from "next/image";

const AppHeaderView = ({ app }) => (
  <div>
    <div className="text-center mt-8">
      <div className="flex justify-center">
        <div className="h-16 w-16 inline-block filter-drop-shadow-view rounded-lg bg-white overflow-hidden">
          {app.icon && (
            <Image src={app.icon} layout='fill'  />
          )}
        </div>
      </div>
      <h1 className="text-xl mt-4 font-extrabold leading-6 tracking-tighter">
        {app.name}
      </h1>
      <div className="w-1/2 mx-auto">
        <span className="text-sm text-gray-500 mt-1 tracking-tighter leading-6">
          {app.description}
        </span>
      </div>
    </div>
  </div>
);

export default AppHeaderView;
