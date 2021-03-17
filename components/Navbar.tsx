import React from "react";
import Link from "next/link";

const Navbar = () => {
  const items = [
    {
      link: "/",
      label: "Screens",
    },
    {
      link: "/",
      label: "Articles",
    },
    {
      link: "/",
      label: "Glossary",
    },
  ];
  return (
    <nav className="hidden lg:block">
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


          <ul className="w-1/2 text-right mt-2 py-6">
            <li className="font-bold text-gray-500">
            <Link href="/"><a href="">About this project</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
