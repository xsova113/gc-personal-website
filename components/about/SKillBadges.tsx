import { skills } from "@/lib/constants";
import { textContainer, textVariant2 } from "@/lib/motion";
import { motion } from "framer-motion";
import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";

const SKillBadges = () => {
  return (
    <motion.div
      variants={textContainer}
      className="flex flex-wrap gap-4 mt-10"
      initial={"hidden"}
      whileInView={"show"}
    >
      {skills.map((item, index) => (
        <motion.div
          variants={textVariant2}
          key={index}
          className={"text-yellow-500"}
        >
          <Badge
            key={index}
            className="flex drop-shadow items-center gap-x-2 px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded-md hover:scale-110 transition cursor-default hover:bg-slate-300 hover:dark:bg-slate-800"
          >
            <Image src={item.img} alt="image" width={20} height={20} />
            <span className="text-muted-foreground text-xs dark:text-slate-100">
              {item.skill}
            </span>
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SKillBadges;
