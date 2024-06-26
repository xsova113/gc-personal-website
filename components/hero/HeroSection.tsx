"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { fadeIn, slideIn, textContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { TracingBeam } from "../tracing-beam";

const HeroSection = () => {
  return (
    <section>
      <Container className="pt-28">
        <TracingBeam>
          <motion.div
            variants={fadeIn("left", "spring", 0.8, 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
          >
            <div className="space-y-5">
              <span className="text-yellow-500">Hi, my name is</span>
              <h1 className="text-3xl md:text-6xl font-bold">George Chang.</h1>
              <motion.h2
                variants={textContainer}
                className="text-2xl md:text-6xl font-bold text-muted-foreground"
                initial={"hidden"}
                whileInView={"show"}
              >
                <p className="flex">
                  I am a&nbsp;
                  <span className="text-yellow-500">
                    <Typewriter
                      options={{
                        strings: ["Web Developer.", "Programmer.", "Coder."],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </p>
              </motion.h2>
              <p className="md:w-3/5 w-full text-muted-foreground pt-8 max-sm:text-sm">
                I&lsquo;m a{" "}
                <span className="text-yellow-500">software engineer</span>{" "}
                specializing in web and IOS development with the focus of
                creating user-friendly and high-performance applications using
                the latest technologies.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={slideIn("left", "spring", 0.8, 1.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex items-center mt-16 gap-8"
          >
            <Button className="uppercase md:w-[180px] w-[140px]">
              <Link to="projects" smooth>
                My Projects
              </Link>
            </Button>
            <Button className="uppercase md:w-[180px] w-[140px] bg-yellow-500 hover:bg-yellow-300">
              <Link to="contact" smooth>
                Contact me
              </Link>
            </Button>
          </motion.div>
        </TracingBeam>
      </Container>
    </section>
  );
};

export default HeroSection;
