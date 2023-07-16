"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="rotate-90 fixed inset-0 bottom-[40px] left-[400px] z-50">
      <motion.div style={{ scaleX }} className="h-1 bg-yellow-500 rounded-xl" />
    </div>
  );
};

export default ScrollBar;
