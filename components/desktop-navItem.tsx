"use client";

import { navItems } from "@/lib/constants";
import React from "react";
import { Link } from "react-scroll";

const DeskTopNavItem = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      {navItems.map((item, index) => (
        <Link
          key={item.href}
          to={item.href}
          smooth
          className="uppercase cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <span className="text-yellow-400">0{index + 1}. </span>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default DeskTopNavItem;
