import React from "react";
import Container from "./container";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container className="dark:bg-black bg-white mt-0 pt-20">
        <Separator />
        <div className="flex sm:flex-row flex-col max-sm:items-center max-sm:gap-y-4 py-8">
          <span className="flex-1 text-sm text-muted-foreground">
            © {currentYear} Developed by George Chang
          </span>
          <div className="flex gap-6 max-sm:gap-4">
            <Link
              href={"https://github.com/xsova113"}
              target="_blank"
              className="text-muted-foreground hover:text-white hover:-translate-y-1 transition"
            >
              <Github />
            </Link>
            <Link
              href={"https://www.instagram.com/georgeclife/"}
              target="_blank"
              className="text-muted-foreground hover:text-white hover:-translate-y-1 transition"
            >
              <Instagram />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/george-chang-h/"}
              target="_blank"
              className="text-muted-foreground hover:text-white hover:-translate-y-1 transition"
            >
              <Linkedin />
            </Link>
            <Link
              href={"https://www.facebook.com/george.chang.392"}
              target="_blank"
              className="text-muted-foreground hover:text-white hover:-translate-y-1 transition"
            >
              <Facebook />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
