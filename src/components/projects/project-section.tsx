"use client";

import React, { useState } from "react";
import Container from "../container";
import SectionHeader from "../ui/section-header";
import { projects } from "@/lib/constants";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motion";
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
