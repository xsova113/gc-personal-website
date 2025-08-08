"use client";

import React from "react";
import Container from "../container";
import SectionHeader from "../ui/section-header";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motion";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <Container className="pt-16">
        <motion.div
          variants={slideIn("left", "spring", 0, 1.2)}
          initial="hidden"
          whileInView={"show"}
        >
          <SectionHeader number={3} title={"contact"} />
        </motion.div>

        <motion.div
          transition={{ staggerChildren: 0.3, delay: 4 }}
          initial="hidden"
          whileInView={"show"}
          className="w-full mt-10 text-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <h1 className="font-bold sm:text-5xl text-3xl text-slate-300 pb-4">
              Get In Touch
            </h1>
            <h3 className="text-xl text-yellow-500">
              Open for freelance work or collaboration
            </h3>
            <p className="text-muted-foreground sm:w-1/2 self-center pb-8">
              If you need to build a professional looking website and
              application, or just want to say hi, feel free to contact me!
            </p>
          </motion.div>

          <ContactForm />
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
