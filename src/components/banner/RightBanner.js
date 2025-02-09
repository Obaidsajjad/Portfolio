import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex flex-col justify-center items-center relative">
      <div className="relative flex justify-center items-center">
        <img
          className="w-[300px] h-[400px] lgl:w-[450px] lgl:h-[600px] z-10"
          src={bannerImg}
          alt="bannerImg"
        />
        <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne"></div>
      </div>
      {/* Name positioned below the image */}
      <div className="mt-4 text-center text-lg font-semibold text-white">
  <span className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
     
  </span>{"   "}
  <span className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300">
       Obaid Sajjad
  </span>
</div>

    </div>
  );
};

export default RightBanner;
