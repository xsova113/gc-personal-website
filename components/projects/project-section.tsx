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
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cardVariants, slideIn } from "@/lib/motion";

const ProjectSection = () => {
  const router = useRouter();
  const [number, setNumber] = useState(4);

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

          {projects.slice(0, number).map((item) => {
            return (
              <motion.div
                key={item.link}
                initial="hidden"
                variants={cardVariants}
                whileInView={"show"}
                viewport={{ once: true }}
                className="grid gap-4"
              >
                <Card className="flex md:flex-row flex-col justify-between drop-shadow-md dark:bg-black bg-white">
                  <CardContent className="w-full overflow-hidden max-md:h-72 md:max-w-[300px] lg:max-w-[450px] relative">
                    <a href={item.link} target="_blank">
                      <Image
                        src={item.image}
                        alt={"image"}
                        fill
                        loading="lazy"
                        className="object-cover sm:rounded-l-lg max-sm:rounded-t-lg bg-slate-100 dark:bg-slate-800 hover:scale-110 hover:rotate-2 transition cursor-pointer"
                      />
                    </a>
                  </CardContent>
                  <div className="flex flex-col justify-between">
                    <CardHeader className="gap-4">
                      <CardTitle>
                        <a href={item.link} target="_blank">
                          {item.name}
                        </a>
                      </CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                      <div className="flex flex-wrap gap-3 text-xs">
                        {item.tags.map((tag) => (
                          <span key={tag.name} style={{ color: tag.color }}>
                            #{tag.name}
                          </span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardFooter className="gap-4">
                      <Button size={"icon"}>
                        <a href={item.github} target="_blank">
                          <Github />
                        </a>
                      </Button>
                      <Button size={"icon"} className="bg-yellow-500">
                        <a href={item.link} target="_blank">
                          <Link />
                        </a>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            );
          })}
          {number <= 7 ? (
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
              onClick={() => setNumber(4)}
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
