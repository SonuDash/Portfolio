import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <br />
      <Badge className="gap-2">
        <Briefcase className="h-5 w-5"/>
        Work
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>Work Experience</Heading>
      </div>

      {/* Unacademy */}
      <div className="w-full h-fit flex flex-col">
       <div className = "w-full h-fit flex">
        <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            Jul 2024 - Aug 2024
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Intern, <br /> Unacademy | Bengaluru
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
                <ul>
                    <li>Contributed in the Unacademy Languages Team. </li>
                    <li>Edited and moderated the figma content to be integrated in the frontend. </li>
                    <li>Integrated the content from figma to frontend using retool.</li>
                    <li>Exposures: Figma, Retool, Business development, Advanced System Design</li>
                </ul>
            </p>
          </FramerWrapper>
        </div>
      </div>
      {/* SIgneasy */}
      <div className="w-full h-fit flex flex-col">
       <div className = "w-full h-fit flex">
        <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            Feb 2024 - Jun 2024
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Intern, <br /> Signeasy | Bengaluru
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
                <ul>
                    <li>Contributed in the Site-Reliability team to ensure smooth deployment of infrastructure on EKS. </li>
                    <li>Automated env comparison across namespaces and image syncing with production. </li>
                    <li>Figured out the VPC linking issue which was affecting the pulling of images from Google Cloud Repository.</li>
                    <li>Exposures: Python, Jenkins, AWS services, GCP, Bash scripting, YAML scripting, advanced system design</li>
                </ul>
            </p>
          </FramerWrapper>
        </div>
      </div>
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            2020 - 2024
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Bachelor of Technology, <br /> Vellore Institute of Technology
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
                I have completed my degree in Electronics and Computer Engineering and I dont think I gained anything else than trauma and endless confussion
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
