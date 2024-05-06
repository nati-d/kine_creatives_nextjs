"use client"
import { links } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full px-10 shadow-md flex justify-between items-center py-4">
      <div>
        <h1 className="font-bold text-3xl">
          Kine <span className="text-blue-600">Creatives</span>
        </h1>
      </div>
      <ul className="flex gap-9">
        {links.map((item, index) => (
          <li key={index} className={`text-lg px-5 border-r-2 ${pathname === item.path ? 'text-orange-500 font-bold' : 'text-gray-500'}`}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
