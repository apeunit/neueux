import React from "react";
import Link from "next/link";

const MobileNavbar = () => {
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
    <nav className="lg:hidden">
      <div className="w-11/12 mx-auto border-b border-gray-200">
        <div className="flex text-base">
          <div className="w-1/2 py-6 cursor-pointer">
              <div>
              <Link href="/">
                <a>
                <img src="/img/logo.svg" />
                </a>
              </Link>
              </div>
          </div>

          <ul className="w-1/2 text-right mt-2 py-6">
            <li className="font-bold text-gray-500">
              <a href="">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


   
  );
};

export default MobileNavbar;