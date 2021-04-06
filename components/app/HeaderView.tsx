import React from "react";
const AppHeaderView = ({ app }) => (
  <div>
    <div className="text-center mt-8">
      <div className="flex justify-center">
        {app.icon && (
          <img
            src={`${app.icon}`}
            className="w-16 h-16 filter-drop-shadow-view rounded-lg bg-white"
          />
        )}
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
