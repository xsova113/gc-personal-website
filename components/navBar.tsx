"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import DeskTopNavItem from "./desktop-navItem";
import MobileNavItem from "./mobile-navItem";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { motion } from "framer-motion";
import { Weather } from "@/lib/types";
import getWeather from "@/hooks/getWeather";

const NavBar = () => {
  const mode = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [weather, setWeather] = useState<Weather>();
  const location = "Richmond,BC,Canada";

  useEffect(() => {
    getWeather().then((data) => setWeather(data));
  }, []);

  useEffect(() => {
    setIsMounted(true);

    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      // Get the new Value
      currentScrollPosition = window.scrollY;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  if (!isMounted) return null;

  return (
    <header>
      <motion.nav
        id="home"
        className={`flex items-center fixed w-full shadow-sm px-4 md:px-8 z-50 justify-between py-2 md:w-full ${
          show ? "translate-y-0" : "-translate-y-full"
        } transition duration-500 backdrop-blur`}
        onViewportEnter={() => setShow(true)}
      >
        <Link
          to="home"
          className="relative w-16 h-16 hover:scale-125 transition cursor-pointer"
          smooth
        >
          {mode.theme === "dark" ? (
            <Image
              src={"/images/logo-gold.png"}
              alt={"logo"}
              fill
              priority
              className="object-contain"
            />
          ) : mode.theme === "system" ? (
            <Image
              src={"/images/logo-gold.png"}
              alt={"logo"}
              fill
              priority
              className="object-contain"
            />
          ) : (
            <Image
              src={"/images/logo-black.png"}
              alt={"logo"}
              fill
              priority
              className="object-contain"
            />
          )}
        </Link>
        <DeskTopNavItem className="space-x-6 max-md:hidden" />
        <div className="flex items-center">
          <MobileNavItem />
          <div className="flex items-center mr-2">
            <span>
              Vancouver Weather:&nbsp;
              <span className="text-yellow-500">
                {weather?.locations?.[location].currentConditions.temp}°C
              </span>
            </span>
            &nbsp;
            <Image
              src={`/weather/${weather?.locations?.[location].currentConditions.icon}.png`}
              alt={"weather icon"}
              width={25}
              height={25}
            />
          </div>
          <ModeToggle />
        </div>
      </motion.nav>
    </header>
  );
};

export default NavBar;
