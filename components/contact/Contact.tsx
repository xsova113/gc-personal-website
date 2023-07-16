import React from "react";
import Container from "../container";
import SectionHeader from "../ui/section-header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Contact = () => {
  return (
    <section id="contact">
      <Container className="pt-16">
        <SectionHeader number={3} title={"contact"} />
        <div className="w-full flex flex-col space-y-6 mt-10 text-center">
          <h1 className="font-bold text-4xl">Get In Touch</h1>
          <span className="text-muted-foreground w-2/3 self-center pb-8">
            Amet ullamco laborum officia deserunt mollit esse anim occaecat.
            Tempor occaecat in elit laboris dolore dolor culpa incididunt
            eiusmod nisi elit ut.
          </span>
          <Button className="w-[160px] self-center bg-yellow-500 hover:bg-yellow-300 transition">
            <a href="mailto:georgechangh@gmail.com">
              Send A Message
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
