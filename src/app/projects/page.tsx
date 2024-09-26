import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Find that Film",
      description:
      "An app that takes user input and uses LLM to predict the movie the user is trying to find",
      tags: ["Flask", "MongoDB", "LLM", "AI"],
      link: "https://github.com/SonuDash/FindThatFilm.git",
    },
    {
      title: "GCR-cleaner",
      description:
      "A series of bash-scripts to cleanup the unused and old docker images in a Google Cloud Repository",
      tags: ["GCR", "Bash", "Docker", "Cloud"],
      link: "https://github.com/SonuDash/GCR-cleaner",
    },
    {
      title: "Image-syncer",
      description:
      "A python code to fix the docker image mismatch between prod environment and pre-prod environment",
      tags: ["Python", "Docker", "AWS Cloud"],
      link: "https://github.com/SonuDash/Image-syncer",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            Feel free to go through my projects and give it a star on GitHub.
          </p>
        </FramerWrapper>
      </div>
      <br />

      <div className=" w-full flex flex-row flex-wrap gap-4 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
