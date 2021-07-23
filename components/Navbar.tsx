import React from "react";
import Link from "next/link";
import ActiveLink from "../components/ActiveLink";
const Navbar = () => {
  return (
    <nav className="">
          <style jsx>{`
          .nav-link {
            font-weight: 400 !important;
          }
      .active {
        text-decoration: underline #FF3A02;
        font-weight: 700;
        color: #111827;
        text-underline-offset: 28px;
        text-decoration-thickness: 4px;
        text-underline-width: 120%;
      }
    `}</style>
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

          <ul className="w-32 text-center hidden lg:block sm:block md:block mt-2 py-6">
            <li className="font-normal text-gray-500 text-sm">
              <ActiveLink activeClassName="active" href="/"><a href="">Screens</a></ActiveLink>
            </li>
          </ul>

          <ul className="w-32 text-center hidden lg:block sm:block md:block mt-2 py-6">
            <li className="font-normal text-gray-500 text-sm">
              <ActiveLink activeClassName="active" href="/articles"><a href="">Articles</a></ActiveLink>
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
