import React, {useState} from "react";
import Link from "next/link";
import PopupMenu from "./PopupMenu";
import { useRouter } from "next/router";
import MenuIcon from "assets/icons/menu.svg";

const Navbar = () => {
  const [showFilter, setShowFilter] = useState(false);
  const router = useRouter();

  return (
    <>
    <nav className="">
      <div className="w-11/12 mx-auto border-b border-gray-200">
        <div className="flex items-end text-base py-6">
          <ul className="w-full sm:w-1/2">
            <li className="cursor-pointer">
              <Link href="/">
                <a>
                  <img src="/img/logo.svg" />
                </a>
              </Link>
            </li>
          </ul>

          <ul className="w-32 items-end text-center hidden sm:block">
            <li className={`text-gray-500 text-sm ${router.pathname.startsWith("/apps") || router.pathname.startsWith("/filter") ? "active" : ""} `}>
              <Link href="/">Screens</Link>
            </li>
          </ul>

          <ul className="w-32 items-end text-center hidden sm:block">
            <li className={`text-gray-500 text-sm ${router.pathname.startsWith("/articles") ? "active" : ""} `}>
              <Link href="/articles">Articles</Link>
            </li>
          </ul>

          <ul className="w-1/2 items-end text-right hidden sm:block">
            <li className={`text-gray-500 text-sm ${router.pathname.startsWith("/about") ? "active" : ""} `}>
              <Link href="/about">About this project</Link>
            </li>
          </ul>

          <ul className="text-right sm:hidden">
            <li className="font-bold text-gray-500 text-sm">
              <MenuIcon onClick={() => setShowFilter(true)}  />
            </li>
          </ul>
        </div>
      </div>
    </nav>
          {showFilter && (
            <PopupMenu
              onClose={() => setShowFilter(false)}
              // key={`filter-card-${listIndex}`}
              // tags={tags}
              // index={listIndex}
              // userflows={userflows}
              // selectedList={selectedList}
              // onClose={() => setShowFilter(false)}
              // onClear={onFilterClear}
              // onSelect={(value, type) => onFilterSelect(value, type)}
              // onRemove={onFilterRemove}
            />
          )}
    </>
  );
};
export default Navbar;
