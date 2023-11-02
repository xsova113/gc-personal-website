import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Description = () => {
  return (
    <div className="grid md:grid-cols-2 gap-20">
      <motion.p
        variants={fadeIn("right", "easeIn", 0.2, 0.5)}
        initial="hidden"
        whileInView={"show"}
        className="text-muted-foreground"
      >
        Hi, my name is George and I am a{" "}
        <span className="text-yellow-500">highly ambitious</span>,
        <span className="text-yellow-500">self-motivated</span>, and driven web
        developer based in Richmond, BC.
        <br />
        <br /> My mission as a web developer is to create digital experiences
        that are not only visually stunning but also user-friendly and
        accessible to everyone. <br />
        <br />I believe that a website should be a reflection of a{" "}
        <span className="text-yellow-500">brand&nbsp;s personality</span>,
        values, and goals, and I strive to achieve that in every project I
        undertake.
        <br />
        <br /> Whether you&nbsp;re a small business owner looking to establish
        an online presence or a large corporation seeking to revamp your
        website, I am confident that I have the{" "}
        <span className="text-yellow-500">skills and creativity</span> to
        deliver a solution that exceeds your expectations.
      </motion.p>
      <motion.div
        variants={fadeIn("left", "easeIn", 0.5, 0.5)}
        whileInView={"show"}
        initial="hidden"
      >
        <div className="relative w-[80%] bg-yellow-500 h-80 max-md:mx-auto rounded-lg drop-shadow-xl border border-yellow-500">
          <Image
            src={"/images/profilepic.jpg"}
            alt={"avatar"}
            fill
            className="object-cover rounded transition-all hover:-translate-y-2 hover:-translate-x-2"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Description;
