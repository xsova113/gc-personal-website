import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("md:px-20 lg:px-32 px-8 mt-16 transition-all max-w-[1400px]", className)}
    >
      {children}
    </div>
  );
};

export default Container;
