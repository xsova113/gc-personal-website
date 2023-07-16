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
import { cardVariants } from "@/lib/motion";

const ProjectSection = () => {
  const router = useRouter();
  const [number, setNumber] = useState(4);

  return (
    <section id="projects">
      <Container className="mt-32 md:mt-40 flex mx-auto">
        <div className={"flex flex-col gap-y-10"}>
          <SectionHeader number={2} title={"projects"} />
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
                <Card
                  className="flex md:flex-row flex-col justify-between drop-shadow-md dark:bg-black bg-white"
                >
                  <CardContent className="lg:max-w-[500px] md:max-w-[300px] w-full overflow-hidden lg:h-72 md:h-44 h-40 relative">
                    <Image
                      src={item.image}
                      alt={"image"}
                      fill
                      loading="lazy"
                      className="object-cover rounded-2xl hover:scale-110 hover:rotate-2 transition cursor-pointer p-3"
                      onClick={() => router.push(item.link)}
                    />
                  </CardContent>
                  <div className="flex flex-col justify-between">
                    <CardHeader className="gap-4">
                      <CardTitle>{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                      <div className="flex flex-wrap gap-3 text-xs">
                        {item.tags.map((tag) => (
                          <span key={tag.name} style={{ color: tag.color }}>#{tag.name}</span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardFooter className="gap-4">
                      <Button
                        onClick={() => router.push(item.github)}
                        size={"icon"}
                      >
                        <Github />
                      </Button>
                      <Button
                        size={"icon"}
                        onClick={() => router.push(item.link)}
                        className="bg-yellow-500"
                      >
                        <Link />
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
