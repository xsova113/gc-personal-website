"use client";

import React from "react";
import Container from "../container";
import SectionHeader from "../ui/section-header";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motion";

const Contact = () => {
  return (
    <section id="contact">
      <Container className="pt-16">
        <motion.div
          variants={slideIn("left", "spring", 0.2, 1.5)}
          initial="hidden"
          whileInView={"show"}
        >
          <SectionHeader number={3} title={"contact"} />
        </motion.div>

        <motion.div
          variants={slideIn("right", "spring", 0.5, 1)}
          initial="hidden"
          whileInView={"show"}
          className="w-full flex flex-col space-y-6 mt-10 text-center"
        >
          <h1 className="font-bold sm:text-5xl text-3xl text-slate-300 pb-4">
            Get In Touch
          </h1>
          <h3 className="text-xl text-yellow-500">
            Open for freelance work or collaboration
          </h3>
          <p className="text-muted-foreground sm:w-1/2 self-center pb-8">
            If you need to build a professional looking website and application,
            or just want to say hi, feel free to contact me!
          </p>
          <Button className="w-[160px] self-center bg-yellow-500 hover:bg-yellow-300 transition">
            <a href="mailto:georgechangh@gmail.com">Send A Message</a>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
