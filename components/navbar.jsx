import Link from "next/link";
import { View, Text } from "react";
import React from "react";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="container flex justify-between items-center py-4">
      <div>
        <h1 className="font-bold text-3xl">
          Kine <span className="text-blue-600">Creatives</span>
        </h1>
      </div>
      <ul className="flex gap-9">
        {links.map((item,index) => (
          <li key={index} className="text-lg px-5 border-r-2">
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
