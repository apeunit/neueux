import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="">
      <div className="w-11/12 mx-auto border-b border-gray-200">
        <div className="flex text-base">
          <ul className="w-1/2 py-6">
            <li className="cursor-pointer">
              <Link href="/">
                <a>
                  <img src="/img/logo.svg" />
                </a>
              </Link>
            </li>
          </ul>

          <ul className="w-1/2 text-center hidden lg:block sm:block md:block mt-2 py-6">
            <li className="font-bold text-gray-500 text-sm">
              <Link href="/articles"><a href="">Articles</a></Link>
            </li>
          </ul>

          <ul className="w-1/2 text-right hidden lg:block sm:block md:block mt-2 py-6">
            <li className="font-bold text-gray-500 text-sm">
              <Link href="/about"><a href="">About this project</a></Link>
            </li>
          </ul>

          <ul className="w-1/2 text-right lg:hidden sm:hidden md:hidden mt-2 py-6">
            <li className="font-bold text-gray-500 text-sm">
              <Link href="/about"><a href="">About</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
