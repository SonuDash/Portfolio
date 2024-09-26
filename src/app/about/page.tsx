import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "Content Creation" },
    { hobby: "Dancing" },
    { hobby: "Listening music" },
    { hobby: "Painting" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      {/* <br /> */}
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
       
          <Heading>
            The MultiTasking Engineer<br />
            WebDev | Software Dev | DevOps
          </Heading>
          
   
        <FramerWrapper y={0} x={100} > <br />
          <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
          Ambitious and technically skilled software developer with a strong background in full-stack development, cloud infrastructure, and automation. Proficient in
languages like Python, JavaScript, and Golang, and experienced in building scalable solutions and optimizing workflows. Having made impactful contributions at
Unacademy and Signeasy, I am eager to apply my expertise and problem-solving abilities to drive innovation and deliver high-quality solutions as part of your
development team.
          </p>
          <br />
        </FramerWrapper>
      </div>
      <FramerWrapper className="w-full flex flex-row justify-between max-lg:flex-col " y={100} delay={0.30}>
        <Aboutfooter />
      </FramerWrapper>
      <br />
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-2 w-2" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
