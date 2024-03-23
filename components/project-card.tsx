import { Github, GithubIcon, LinkIcon } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  imageSrc: string;
  title: string;
  githubLink: string;
  projectLink: string;
  description: string;
  tags: { name: string; color: string }[];
};

export const ProjectCard = ({
  description,
  githubLink,
  imageSrc,
  projectLink,
  tags,
  title,
}: Props) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 flex flex-col relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-full min-h-[550px] rounded-xl p-5 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageSrc}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem translateZ={140} className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag.name} style={{ color: tag.color }}>
              #{tag.name}
            </span>
          ))}
        </CardItem>

        <div className="flex justify-between items-center mt-auto">
          <CardItem
            translateZ={20}
            href={githubLink}
            className="dark:text-white"
          >
            <Button size={"icon"} className="bg-yellow-500">
              <Link href={githubLink} target="_blank">
                <Github />
              </Link>
            </Button>
          </CardItem>
          <CardItem translateZ={20} as="button" className="dark:text-white">
            <Button size={"icon"}>
              <Link href={projectLink} target="_blank">
                <LinkIcon />
              </Link>
            </Button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
