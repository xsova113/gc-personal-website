import React from "react";
import { Separator } from "./separator";

interface SectionHeaderProps {
  number: number;
  title: string;
}

const SectionHeader = ({ number, title }: SectionHeaderProps) => {
  return (
    <div className="flex items-center text-2xl">
      <span className="text-yellow-500">0{number}.&nbsp;</span>
      <h1 className="uppercase min-w-fit font-bold">{title}</h1>
      <Separator className="ml-5 w-1/2" />
    </div>
  );
};

export default SectionHeader;
