import { cn } from "@/lib/utils";
import { Linkedin, Twitter, ExternalLink, Github } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Twitter", link: "https://x.com/bettercalldash", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/ayushman-dash-tech/", icon: <Linkedin /> },
    { name: "Github", link: "https://github.com/SonuDash", icon: <Github /> },
    { name: "Leetcode", link: "https://leetcode.com/u/tikdot69/", icon: <ExternalLink />}
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
