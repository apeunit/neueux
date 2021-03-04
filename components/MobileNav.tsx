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
    <nav className="xl:hidden">
      <div className="w-11/12 mx-auto border-b border-gray-200">
        <div className="flex text-base">
          <div className="w-2/4 py-6 cursor-pointer">
              <div className="inline-block">
              <Link href="/">
                <a>
                  <img src="/img/mobile-nav.svg" />
                </a>
              </Link>
              </div>
              
            <div className="cursor-pointer absolute -mt-2 inline-block ml-3">
              <h1 className="text-sm font-extrabold leading-10 tracking-tighter">Screen gallery</h1>
            </div>
          </div>

          <div className="w-2/4 py-6">
            <img src="/img/burger.svg" className="ml-auto"/>
          </div>

          <ul className="nav space-x-7 hidden">
            {items.map((item, i) => (
              <li
                key={i}
                className={["nav-item", i == 0 ? "nav-item-active" : null].join(
                  " "
                )}
              >
                <Link href={item.link}>
                  <a>{item.label}</a>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="w-2/6 text-right mt-2 py-6 hidden">
            <li className="font-bold text-accent">
              <a href="">Contribute</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


   
  );
};

export default MobileNavbar;