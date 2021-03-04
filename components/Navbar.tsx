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
    <nav className="hidden xl:block">
      <div className="w-11/12 mx-auto border-b border-gray-200">
        <div className="flex text-base">
          <ul className="w-2/6 py-6">
            <li className="cursor-pointer">
              <Link href="/">
                <a>
                  <img src="/img/logo.svg" />
                </a>
              </Link>
            </li>
          </ul>

          <ul className="nav space-x-7">
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

          <ul className="w-2/6 text-right mt-2 py-6">
            <li className="font-bold text-accent">
              <a href="">Contribute</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
