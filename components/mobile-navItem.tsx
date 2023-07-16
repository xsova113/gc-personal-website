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
import { Link } from "react-scroll";

const MobileNavItem = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mt-20">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              smooth
              className="py-2 uppercase cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition -mx-5"
            >
              <span className="text-yellow-400">0{index + 1}. </span>
              {item.label}
            </Link>
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavItem;
