import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT OUR PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="Our Projects"
          
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
          title="AI Integrated Medical Chatbot"
          des=" Access instant, AI-driven medical assistance for symptom tracking, health tips, and medication reminders, 
          ensuring 24/7 healthcare support."
          src={URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIAuJO1nk9m71eTgrze_0CAFowOqKsIwWhA&s"}
          link="https://github.com/Obaidsajjad"
        />
        <ProjectsCard
          title="Email Spam classifier"
          des=" Say goodbye to spam! Our intelligent classifier ensures a clutter-free inbox by identifying and blocking unwanted 
          emails with precision."
          src={URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3o5JSLL59crQSJafWTDcgdQMCn4Ko1E7xYQ&s"}
          link="https://github.com/Obaidsajjad"
        />
        <ProjectsCard
          title="JOB FINDER APP"
          des=" Effortlessly discover job opportunities with advanced filters, real-time updates, and personalized recommendations,
          all at your fingertips."
          src={URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCmkLuehOLlu7_eMD_KZmioeVrDJ9VKsxNw&s"}
          link="https://github.com/Obaidsajjad"
        />
        <ProjectsCard
          title="ShopiShop Ecommerece App"
          des=" Shop smarter with Shopishop! Explore products, enjoy exclusive deals, and experience seamless, secure online shopping 
          anytime, anywhere."
          src={projectTwo}
          link="https://github.com/Obaidsajjad"
        />
        
        <ProjectsCard
          title="Facial Recognition Attendance System"
          des=" Revolutionize attendance tracking with secure, fast, and automated face recognition, eliminating errors and 
          enhancing efficiency."
          src={URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8sgfDnx7f7t6V3wvm_z4JoxJFgbA92mZuA&s"}
          link="https://github.com/Obaidsajjad"
        />
        {/* <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          link="https://github.com/noorjsdivs/portfolioone"
        /> */}
      </div>
    </section>
  );
}

export default Projects