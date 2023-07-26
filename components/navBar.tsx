"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import DeskTopNavItem from "./desktop-navItem";
import MobileNavItem from "./mobile-navItem";
import { useTheme } from "next-themes";
import { Suspense, useEffect, useState } from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { motion } from "framer-motion";
import { WeatherType } from "@/lib/types";
import getWeather from "@/hooks/getWeather";
import { getLocation } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import Loading from "@/app/(routes)/loading";

const NavBar = () => {
  const mode = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [weather, setWeather] = useState<WeatherType>();
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLocation({ setLocation, setLat, setLon });
    if (lat.length > 1 && lon.length > 1) {
      getWeather(lat, lon)
        .then((data) => {
          setLoading(true);
          setWeather(data);
        })
        .finally(() => setLoading(false));
    } else {
      console.log("no location available");
    }
  }, [location, lat, lon]);

  useEffect(() => {
    setIsMounted(true);

    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function () {
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
          <Suspense fallback={<Loading />}>
            <div className="hidden md:flex items-center md:mr-2">
              <span>
                {location}:&nbsp;
                <span className="text-yellow-500">{weather?.main.temp}°C</span>
              </span>
              &nbsp;
              <div className="relative w-8 h-8 bg-slate-300 dark:bg-slate-500 rounded-md p-1">
                <Image
                  src={
                    `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png` ||
                    "/next.svg"
                  }
                  alt={"weather icon"}
                  fill
                />
              </div>
            </div>
          </Suspense>

          <MobileNavItem />
          <ModeToggle />
        </div>
      </motion.nav>
    </header>
  );
};

export default NavBar;
