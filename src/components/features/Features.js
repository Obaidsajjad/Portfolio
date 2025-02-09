import React from 'react'
import { AiFillAppstore,AiFillAndroid, AiFillApple } from "react-icons/ai";
import { FaMobile, FaGlobe,FaBrain } from "react-icons/fa";
import { SiProgress, SiAntdesign,SiOpencv, SiSpacemacs,SiGoogleanalytics } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="" des="OUR SERVICES " />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Generative AI"
          des="Harness the power of Generative AI to enhance creativity in real-world applications such as content creation, game design, personalized marketing, and AI-assisted code generation."
          icon={<SiOpencv />}
        />
        <Card
          title="Android Applications"
          des="Create feature-rich Android apps optimized for performance, usability, and engagement, ensuring a delightful 
          user experience on every device."
          icon={<AiFillAndroid />}
        />
        <Card
          title="iOS Applications"
          des="Design and develop robust iOS apps with sleek interfaces and powerful functionality, tailored for Apple’s ecosystem."
          icon={<AiFillApple />}
        />
        <Card
          title="NLP Solutions"
          des="Leverage cutting-edge AI technologies to automate workflows, enhance decision-making, and create intelligent, 
          scalable solutions tailored to your needs."
          icon={<SiSpacemacs />}
        />
        <Card
          title="Data Analysis"
          des="Transform raw data into actionable insights with expert analysis, visualization, and predictive models for informed 
          business strategies."
          icon={<SiGoogleanalytics />}
        />
        <Card
          title="Machine Learning"
          des="Implement advanced machine learning models to analyze data, predict outcomes, and drive smarter, data-driven 
          decision-making processes."
          icon={<FaBrain />}
        />
      </div>
    </section>
  );
}

export default Features