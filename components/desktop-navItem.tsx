"use client";

import { navItems } from "@/lib/constants";
import Link from "next/link";
import React from "react";
// import { Link } from "react-scroll";
Link;

const DeskTopNavItem = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      {navItems.map((item, index) => (
        <a
          key={item.href}
          // to={item.href}
          href={item.href}
          // smooth
          className="uppercase cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <span className="text-yellow-400">0{index + 1}. </span>
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default DeskTopNavItem;
