"use client";

import Image from "next/image";
import DeskTopNavItem from "./desktop-navItem";
import MobileNavItem from "./mobile-navItem";
import { Suspense, useEffect, useState } from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { motion } from "framer-motion";
import { WeatherType } from "@/lib/types";
import getWeather from "@/hooks/getWeather";
import { getLocation } from "@/lib/utils";
import Loading from "@/app/(routes)/loading";
import { useScroll } from "@/hooks/useScroll";
import { useScrollStore } from "@/hooks/useScrollStore";
import ThemeToggle from "@/components/ThemeToggle";

const NavBar = () => {
  const [weather, setWeather] = useState<WeatherType>();
  const [location, setLocation] = useState("");
  // const [lat, setLat] = useState("");
  // const [lon, setLon] = useState("");
  const show = useScroll();
  const setShow = useScrollStore((state) => state.setShow);

  // useEffect(() => {
  //   getLocation({ setLocation, setLat, setLon });
  //   if (lat.length > 1 && lon.length > 1) {
  //     getWeather(lat, lon).then((data) => {
  //       setWeather(data);
  //     });
  //   } else {
  //     console.log("no location available");
  //   }
  // }, [location, lat, lon]);

  return (
    <header>
      <motion.nav
        id="home"
        className={`flex items-center fixed w-full shadow-sm px-4 md:px-8 z-50 justify-between py-2 ${
          show ? "translate-y-0" : "-translate-y-full"
        } transition duration-500 backdrop-blur`}
        onViewportEnter={() => setShow(true)}
      >
        <ThemeToggle />
        <DeskTopNavItem className="space-x-6 max-md:hidden" />
        <div className="flex items-center gap-2">
          {/* <Suspense fallback={<Loading />}>
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
          </Suspense> */}
          <ModeToggle />
          <MobileNavItem />
        </div>
      </motion.nav>
    </header>
  );
};

export default NavBar;
