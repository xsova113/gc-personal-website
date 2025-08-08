import React, { useState } from "react";
import { Crosshair } from "lucide-react";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";
import SKillBadges from "./SKillBadges";
import SkillCard from "./SkillCard";
import { navVariants } from "@/lib/motion";

const SkillsSection = () => {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView={"show"}
      className="mt-14"
      onViewportEnter={() => setIsLoad(true)}
      onViewportLeave={() => setIsLoad(false)}
    >
      <div className="flex items-center gap-x-4 justify-center">
        <Separator className="w-1/3" />
        <div className="flex items-center min-w-fit gap-x-2">
          <Crosshair className="text-yellow-500" />
          <h1 className="text-muted-foreground">My Core Skills</h1>
        </div>
        <Separator className="w-1/3" />
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-20 mt-4">
        <SkillCard isLoad={isLoad} setIsLoad={setIsLoad} />
        <SKillBadges />
      </div>
    </motion.div>
  );
};

export default SkillsSection;
