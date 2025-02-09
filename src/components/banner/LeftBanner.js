import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,FaInstagram,
  FaAndroid,FaRobot,
  FaGithub,FaChartBar
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs,SiTableau,SiGoogleanalytics,SiTensorflow,SiSpacex } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["AI Engineer .", "Data Analyst .", "iOS Developer .", "Android Developer ."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME </h4>
        <h1 className="text-6xl font-bold text-white"> I'm  
           <span className="text-designColor capitalize">  O</span>BAID <span className="text-designColor capitalize">S</span>AJJAD
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        "Leverage animation to create intuitive and engaging digital experiences, guiding users seamlessly through every interaction. My approach goes beyond aesthetics; integrate motion purposefully to enhance functionality and simplify complex processes. Whether it's development, design, or AI solutions, my focus is on crafting meaningful, user-centric experiences that drive impact."
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Obaidsajjad" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100005520286547" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://www.instagram.com/u_bai_sters/" target="blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/obaid-sajjad" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaRobot />
            </span>
            <span className="bannerIcon">
              <SiTensorflow />
            </span>
            <span className="bannerIcon">
              <FaChartBar />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
