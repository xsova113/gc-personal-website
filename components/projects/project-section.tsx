"use client";

import React, { useState } from "react";
import Container from "../container";
import SectionHeader from "../ui/section-header";
import { projects } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Github, Link } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { cardVariants, slideIn } from "@/lib/motion";
import { Tilt } from "react-tilt";
import { ProjectCard } from "../project-card";

const ProjectSection = () => {
  const [number, setNumber] = useState(6);

  return (
    <section id="projects">
      <Container className="mt-32 md:mt-40 flex mx-auto">
        <div className={"flex flex-col gap-y-10"}>
          <motion.div
            variants={slideIn("left", "spring", 0.2, 1.5)}
            initial="hidden"
            whileInView={"show"}
          >
            <SectionHeader number={2} title={"projects"} />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, number).map((item) => {
              return (
                // <Tilt
                //   key={item.link}
                //   options={{ max: 45, scale: 1, speed: 450 }}
                // >
                //   <motion.div
                //     initial="hidden"
                //     variants={cardVariants}
                //     whileInView={"show"}
                //     viewport={{ once: true }}
                //   >
                //     <Card className="drop-shadow-md dark:bg-slate-900 bg-white p-4 min-h-[480px]">
                //       <CardContent className="relative aspect-video w-full">
                //         <a href={item.link} target="_blank">
                //           <Image
                //             src={item.image}
                //             alt={"image"}
                //             fill
                //             loading="lazy"
                //             className="object-cover rounded-lg bg-slate-100 dark:bg-slate-800 transition cursor-pointer"
                //           />
                //         </a>
                //       </CardContent>
                //       <div>
                //         <CardHeader className="gap-4 p-0 pt-4">
                //           <CardTitle>
                //             <a
                //               href={item.link}
                //               target="_blank"
                //               className="hover:underline"
                //             >
                //               {item.name}
                //             </a>
                //           </CardTitle>
                //           <CardDescription>{item.description}</CardDescription>
                //           <div className="flex flex-wrap gap-3 text-xs">
                //             {item.tags.map((tag) => (
                //               <span key={tag.name} style={{ color: tag.color }}>
                //                 #{tag.name}
                //               </span>
                //             ))}
                //           </div>
                //         </CardHeader>
                //         <CardFooter className="gap-4 p-0 absolute bottom-3">
                //           <Button size={"icon"}>
                //             <a href={item.github} target="_blank">
                //               <Github />
                //             </a>
                //           </Button>
                //           <Button size={"icon"} className="bg-yellow-500">
                //             <a href={item.link} target="_blank">
                //               <Link />
                //             </a>
                //           </Button>
                //         </CardFooter>
                //       </div>
                //     </Card>
                //   </motion.div>
                // </Tilt>
                <ProjectCard
                  key={item.name}
                  description={item.description}
                  githubLink={item.github}
                  imageSrc={item.image}
                  title={item.name}
                  projectLink={item.link}
                  tags={item.tags}
                />
              );
            })}
          </div>

          {number <= 6 ? (
            <Button
              className="w-[120px] mt-20 self-center border-yellow-500 text-yellow-500 bg-transparent"
              variant={"outline"}
              onClick={() => setNumber(20)}
            >
              Show More
            </Button>
          ) : (
            <Button
              className="w-[120px] mt-20 self-center border-yellow-500 text-yellow-500 bg-transparent"
              variant={"outline"}
              onClick={() => setNumber(6)}
            >
              Show Less
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProjectSection;
