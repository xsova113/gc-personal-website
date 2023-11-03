"use client";

import { navItems } from "@/lib/constants";
import React from "react";

const DeskTopNavItem = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      {navItems.map((item, index) => (
        <a
          key={item.href}
          href={item.href}
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
