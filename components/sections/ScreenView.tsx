// import Layout from "../components/Layout";
import Link from "next/link";
import React from "react";
import Screen from "components/card/Screen";
import RightIcon from "public/img/right.svg";
const ScreenView = ({ screen, app, navigation }) => {
  return (
    <main>
      <div className="flex">
        <div className="flex flex-col w-9/11 h-screen justify-center">
          <div className="h-3/4 w-full ">
            <Screen url={screen.image} style={app.type} />
          </div>
        </div>
        <div className="h-screen w-4/11 bg-gray-50 flex flex-col divide-y fixed right-0">
          <div className="absolute right-4 top-4">
            <Link href={`/apps/${app.slug}`}>
              <a className="bg-gray-50 hover:bg-gray-200 rounded-full border-2 border-solid border-gray-200 ml-2 block">
                <img src="/img/close.png" className="m-3.5" />
              </a>
            </Link>
          </div>
          <div className="text-center h-1/2 w-40 flex flex-col justify-end mx-auto mb-5">
            <Link href={`/apps/${app.slug}`}>
              <a className="block">
                <div className="flex justify-center">
                  <img
                    className="w-16 h-16 filter-drop-shadow-view rounded-lg"
                    src={`/${app.icon}`}
                  />
                </div>
                <p className="text-xl mt-4 font-extrabold leading-6 tracking-tighter">
                  {app.name}
                </p>
                <span className="text-sm text-gray-500 mt-1 tracking-tighter leading-6">
                  {app.description}
                </span>
              </a>
            </Link>
          </div>
          <div className="flex justify-center h-1/2 pt-6 flex-wrap mx-6">
            {screen.userflows.map((userflow) => (
              <div className="mb-3">
                <a className="bg-gray-50 capitalize px-4 py-1.5 text-xs rounded-2xl border-2 border-solid border-gray-200 font-bold text-gray-500">
                  {userflow.name}
                </a>
              </div>
            ))}
          </div>
          <div className="flex absolute right-4 bottom-4 border-none">
            {navigation.prev && (
              <Link href={navigation.prev}>
                <a>
                  <div className="bg-gray-50 hover:bg-gray-200 rounded-full border-2 border-solid border-gray-200 ">
                    <img src="/img/left.svg" className="m-3.5" />
                  </div>
                </a>
              </Link>
            )}

            {navigation.next && (
              <Link href={navigation.next}>
                <a>
                  <div className="bg-gray-50 hover:bg-gray-200 rounded-full border-2 border-solid border-gray-200 ml-2">
                    <RightIcon className="m-3.5" />
                  </div>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ScreenView;
