import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/lib/constants";
import { Menu } from "lucide-react";
import { useState } from "react";

const MobileNavItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mt-20 px-1">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-2 rounded px-2 uppercase cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition -mx-5"
            >
              <span className="text-yellow-400">0{index + 1}. </span>
              {item.label}
            </a>
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavItem;
