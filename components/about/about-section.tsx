"use client";

import Container from "@/components/container";
import SectionHeader from "@/components/ui/section-header";
import React from "react";
import Description from "./Description";
import SkillsSection from "./skills";

const AboutSection = () => {
  return (
    <section id="about">
      <Container className="md:mt-52 mt-32 flex flex-col">
        <div className={"flex flex-col gap-y-10"}>
          <SectionHeader number={1} title={"about me"} />
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
