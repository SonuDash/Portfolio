import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from '../../../public/html.png'
import css from '../../../public/css.png'
import js from '../../../public/js.png'
import ts from '../../../public/ts.png'
import react from '../../../public/react.png'
import nextjs from '../../../public/nextjs.png'
import cplus from '../../../public/cpp.png'
import github from '../../../public/github.png'
import vscode from '../../../public/vscode.png'
import golang from  '../../../public/golang.png'
import python from '../../../public/python.png'
import django from '../../../public/django.png'
import bash from '../../../public/bash.png'
import spring from '../../../public/spring.png'
import git from '../../../public/git.png'
import vim from  '../../../public/vim.png'
import aws from '../../../public/aws.png'
import gcloud from '../../../public/gcloud.png'
import k8s from '../../../public/k8s.png'
import docker from '../../../public/docker.png'
import jenkins from '../../../public/jenkins.png'

import FramerWrapper from "@/components/FramerWrapper";
const skillPage = () => {

    const language = [
        // {alt:"html", img:html},
        // {alt:"css", img:css},
        // {alt:"js", img:js},
        {alt:"ts", img:ts},
        {alt:"cplus", img:cplus},
        {alt:"python", img:python},
        {alt:"golang", img:golang},
        {alt:"bash", img:bash},
    ]
    const framework = [
        {alt:"react", img:react},
        {alt:"nextjs", img:nextjs},
        {alt:"django", img:django},
        {alt:"git", img:git},
        // {alt:"github", img:github},
        // {alt:"vscode", img:vscode},
        // {alt:"vim", img:vim},
    ]
    const cloud_devops = [
      {alt:"aws", img:aws},
      {alt:"gcloud", img:gcloud},
      {alt:"docker",img:docker},
      {alt:"k8s", img:k8s},
      {alt:"jenkin", img:jenkins},
      
  ]
       

  return (
    // SKILLS PAGE
    
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <br />
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Skills.</Heading>
        <FramerWrapper y={0} x={200} >
          <br />
        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
          I am well adept in making websites using HTML, CSS, Node.JS, React and NextJS, 
          my learnings in DSA adds on to the quality of the product deilvered. I am well adept in managing and monitoring
          on cloud platforms like AWS and GCP. My experience in tools like Docker, Kubernetes, Ansible, Jenkins and other such DevOPs tools
          equips me with the ability of infrastructure hosting and monitoring.
        </p>
        <br /><br />
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.30} className="block">
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Programming Languages
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={language} />
        </div>
        </FramerWrapper>
        <br />
        <FramerWrapper  className="block" y={100} delay={0.32}>
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Framework and Version Control
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={framework} />
        </div>
        </FramerWrapper>
        <br />
        <FramerWrapper  className="block" y={100} delay={0.32}>
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Cloud Platforms and DevOps
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={cloud_devops} />
        </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
