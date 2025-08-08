"use client";

import Container from "@/components/container";
import SectionHeader from "@/components/ui/section-header";
import React from "react";
import Description from "./Description";
import SkillsSection from "./skills";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motion";

const AboutSection = () => {
  return (
    <section id="about">
      <Container className="md:mt-52 mt-32 flex flex-col">
        <div className={"flex flex-col gap-y-10"}>
          <motion.div
            animate={slideIn("left", "spring", 0.2, 1.5)}
            initial="hidden"
            whileInView={"show"}
          >
            <SectionHeader number={1} title={"about me"} />
          </motion.div>

          <Description />
        </div>
        <div className="self-center">
          <SkillsSection />
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
