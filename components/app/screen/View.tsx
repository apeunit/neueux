import Link from "next/link";
import React, { useEffect } from "react";
import CloseIcon from "assets/icons/close.svg";
import ScreenNavigation from "./Navigation";
import { useRouter } from "next/router";
import Image from "next/image";
const ScreenView = ({ screen, app, navigation }) => {
  const router = useRouter();
  const backUrl = router.query.referer
    ? router.query.referer
    : `/apps/${app.slug}`;
  let backQuery: any = {};
  let navigationQuery: any = {};
  if (router.query.referer) {
    const { userflows, tags, referer } = router.query;
    backQuery = {
      userflows,
      tags,
    };
    navigationQuery = {
      referer,
      userflows,
      tags,
    };
  }
  const onButtonPress = (e) => {
    const key = String(e.key);
    if (key !== "ArrowRight" && key !== "ArrowLeft" && key !== "Escape") return;
    if (key === "ArrowLeft" && navigation.prev) {
      router.push({
        pathname: navigation.prev,
        query: navigationQuery,
      });
    }
    if (key === "ArrowRight" && navigation.next) {
      router.push({
        pathname: navigation.next,
        query: navigationQuery,
      });
    }
    if (key === "Escape") {
      router.push({
        pathname: String(backUrl),
        query: backQuery,
      });
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", onButtonPress);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.removeEventListener("keydown", onButtonPress);
    };
  });
  return (
    <main>
      <div className="flex h-screen flex-col">
        <div className="lg:hidden flex-none border-b border-solid border-gray-200 w-full">
          <div className="p-3.5">
            <div className="flex">
              <div className="flex-none mr-3">
                <Link href={`/apps/${app.slug}`}>
                  <a className="block">
                    <div className="flex justify-center w-10 h-10">
                      <div className="h-10 w-10 inline-block filter-drop-shadow-view rounded-lg bg-white overflow-hidden">
                        <Image src={app.icon} width="40" height="40" />
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="truncate flex-grow">
                <p className="text-xl font-extrabold leading-6 tracking-tighter">
                  {app.name}
                </p>
                <span className="text-sm text-gray-500  mt-1 tracking-tighter leading-6">
                  {app.description}
                </span>
              </div>
              <div>
                <Link
                  href={{
                    pathname: String(backUrl),
                    query: backQuery,
                  }}
                >
                  <a className="bg-gray-50 hover:bg-gray-200 p-3.5 rounded-full border-2 border-solid border-gray-200 ml-2 flex items-center">
                    <CloseIcon className="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow lg:py-18 py-12 lg:h-screen overflow-auto relative lg:w-9/11 w-full justify-center items-center">
          <div className="h-5/6 flex-grow lg:my-auto rounded-lg relative filter-drop-shadow text-center w-10/12">
            <Image src={`${screen.image}`} layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className="lg:hidden border-t flex-none bg-white border-solid border-gray-200 p-2 right-0 bottom-0 w-full flex justify-end">
          <ScreenNavigation navigation={navigation} query={navigationQuery} />
        </div>
        <div className="h-screen w-4/11 hidden lg:flex bg-gray-50 flex-col divide-y fixed right-0">
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
          <div className="text-center h-1/2 w-10/12 px-6 mx-auto flex flex-col justify-end pb-5">
            <Link href={`/apps/${app.slug}`}>
              <a className="block">
                <div className="flex justify-center">
                  <div className="h-16 w-16 inline-block filter-drop-shadow-view rounded-lg bg-white overflow-hidden">
                    {app.icon && (
                      <Image src={app.icon} width="64" height="64" />
                    )}
                  </div>
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
          <div className="flex justify-center w-10/12 mx-auto pt-3 flex-wrap space-x-2">
            {screen.userflow && (
              <div key={screen.userflow.id} className="my-3">
                <Link
                  href={{
                    pathname: "/filter",
                    query: {
                      userflows: [screen.userflow.id],
                    },
                  }}
                >
                  <a className="bg-gray-50 hover:bg-gray-200 capitalize px-4 py-1.5 text-xs rounded-2xl border-2 border-solid border-gray-200 font-bold text-gray-500">
                    {screen.userflow.name}
                  </a>
                </Link>
              </div>
            )}
            {screen.tags.map((tag) => (
              <div key={tag.id} className="my-3">
                <Link
                  href={{
                    pathname: "/filter",
                    query: {
                      tags: [tag.id],
                    },
                  }}
                >
                  <a className="bg-gray-50 hover:bg-gray-200 capitalize px-4 py-1.5 text-xs rounded-2xl border-2 border-solid border-gray-200 font-bold text-gray-500">
                    {tag.name}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="absolute right-4 bottom-4 border-none">
            <ScreenNavigation navigation={navigation} query={navigationQuery} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default ScreenView;
