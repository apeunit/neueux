// import Layout from "../components/Layout";
import Link from "next/link";
import React from "react";
import RightIcon from "assets/icons/right.svg";
import CloseIcon from "assets/icons/close.svg";
import LeftIcon from "assets/icons/left.svg";
import { useRouter } from "next/router";
const ScreenView = ({ screen, app, navigation }) => {
  const router = useRouter();
  const backUrl = router.query.referer
    ? router.query.referer
    : `/apps/${app.slug}`;
  console.log(backUrl);
  let backQuery: any = {};

  if (router.query.referer) {
    backQuery = router.query;
    delete backQuery.referer;
  }

  return (
    <main>
      <div className=" xl:hidden border-b border-solid border-gray-200">
        <div className="px-4 mt-3 mb-3.5 flex">
          <div className="flex">
            <div className="flex-none w-1/5">
              <a className="block">
                <div className="flex justify-center w-10 h-10">
                  <img
                    className="filter-drop-shadow-view rounded-lg"
                    src={`/${app.icon}`}
                  />
                </div>
              </a>
            </div>

            <div className="flex-grow ">
              <p className="text-xl font-extrabold leading-6 tracking-tighter">
                {app.name}
              </p>
              <span className="text-sm text-gray-500 mt-1 tracking-tighter leading-6">
                {app.description}
              </span>
            </div>
          </div>

          <div className="flex w-1/5 justify-end">
            <Link
              href={{
                pathname: String(backUrl),
                query: backQuery,
              }}
            >
              <a className="bg-gray-50 hover:bg-gray-200 rounded-full border-2 border-solid border-gray-200 ml-2 h-10 w-10 flex justify-center items-center">
                <CloseIcon className="" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="xl:flex">
        <div className="flex flex-col xl:w-9/12 w-full h-screen justify-center ">
          <div className="h-3/4 w-full text-center">
            <img src={`/${screen.image}`} className="h-full inline-block" />
          </div>
        </div>

        <div className="h-screen w-4/11 hidden xl:block bg-gray-50 flex flex-col divide-y fixed right-0">
          <div className="absolute right-4 top-4">
            <Link
              href={{
                pathname: String(backUrl),
                query: backQuery,
              }}
            >
              <a className="bg-gray-50 hover:bg-gray-200 rounded-full border-2 border-solid border-gray-200 ml-2 block">
                <CloseIcon className="m-3.5" />
              </a>
            </Link>
          </div>
          <div className="text-center h-1/2 w-10/12 px-6 mx-auto flex flex-col justify-end mb-5">
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
          <div className="flex justify-center w-10/12 mx-auto h-1/2 pt-6 flex-wrap space-x-2">
            {screen.userflows.map((userflow) => (
              <div key={userflow.slug} className="mb-3">
                <Link
                  href={{
                    pathname: "/filter",
                    query: {
                      userflows: [userflow.slug],
                    },
                  }}
                >
                  <a className="bg-gray-50 capitalize px-4 py-1.5 text-xs rounded-2xl border-2 border-solid border-gray-200 font-bold text-gray-500">
                    {userflow.name}
                  </a>
                </Link>
              </div>
            ))}
            {screen.tags.map((tag) => (
              <div key={tag.slug} className="mb-3">
                <Link
                  href={{
                    pathname: "/filter",
                    query: {
                      tags: [tag.slug],
                    },
                  }}
                >
                  <a className="bg-gray-50 capitalize px-4 py-1.5 text-xs rounded-2xl border-2 border-solid border-gray-200 font-bold text-gray-500">
                    {tag.name}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex absolute right-4 bottom-4 border-none">
            {navigation.prev && (
              <Link href={navigation.prev}>
                <a>
                  <div className="bg-gray-50 hover:bg-gray-200 rounded-full border-2 border-solid border-gray-200 ">
                    <LeftIcon className="m-3.5" />
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

      <div className="flex xl:hidden border-t border-solid border-gray-200 justify-end  py-2">
        {navigation.prev && (
          <Link href={navigation.prev}>
            <a>
              <div className="bg-gray-50 hover:bg-gray-200 rounded-full border-2 border-solid border-gray-200 ">
                <LeftIcon className="m-3.5" />
              </div>
            </a>
          </Link>
        )}

        {navigation.next && (
          <Link href={navigation.next}>
            <a>
              <div className="bg-gray-50 mr-2 hover:bg-gray-200 rounded-full border-2 border-solid border-gray-200 ml-2">
                <RightIcon className="m-3.5" />
              </div>
            </a>
          </Link>
        )}
      </div>
    </main>
  );
};

export default ScreenView;
