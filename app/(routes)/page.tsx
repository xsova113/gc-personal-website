import React from "react";
import HeroSection from "../../components/hero/HeroSection";
import AboutSection from "../../components/about/about-section";
import ProjectSection from "@/components/projects/project-section";
import Contact from "@/components/contact/Contact";

const Page = () => {
  return (
      <main className="flex flex-col overflow-x-clip dark:bg-neutral-900 bg-white">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <Contact />
      </main>
  );
};

export default Page;
