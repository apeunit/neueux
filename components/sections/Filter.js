import React from "react";
const Filter = ({ title , c }) => (
    <div className="z-50 absolute bg-gray-100 top-4 rounded-2xl w-96 right-4 ars overflow-y-auto">
        <div className="ml-8">
            <div className=" mb-10 font-extrabold mt-7 ">
            <h1 className="text-xl">{title}</h1>
            <div className="bg-gray-50 rounded-full border-2 absolute border-solid border-gray-200 right-4 top-6">
              <a href="">
                <img src="/img/close.png" className="m-3" />
              </a>
            </div>
            </div>

            <div className="mb-5">
        <div className="mb-3 font-bold text-base "> 
        User flows
        </div>
        <ul className="text-base">
            <li className="mb-3">Backup</li>
            <li className="mb-3">Delete wallet</li>
            <li className="mb-3">Onboarding</li>
            <li className="mb-3">Receive</li>
            <li className="mb-3">Recovery</li>
        </ul>
        </div>

        <div className="mb-5">
        <div className="mb-3 font-bold text-base "> 
        User flows
        </div>
        <ul className="text-base">
            <li className="mb-3">Backup</li>
            <li className="mb-3">Delete wallet</li>
            <li className="mb-3">Onboarding</li>
            <li className="mb-3">Receive</li>
            <li className="mb-3">Recovery</li>
        </ul>
        </div>

        <div className="mb-5">
        <div className="mb-3 font-bold text-base "> 
        User flows
        </div>
        <ul className="text-base">
            <li className="mb-3">Backup</li>
            <li className="mb-3">Delete wallet</li>
            <li className="mb-3">Onboarding</li>
            <li className="mb-3">Receive</li>
            <li className="mb-3">Recovery</li>
        </ul>
        </div>
        
        <div className="text-xs mb-5">
          <a className="bg-gray-900 text-white text-xs px-36 leading-4 py-3 font-bold transition-250ms rounded-full">
            close
          </a>
        </div>
       

        </div>
        
    </div>
);

export default Filter;