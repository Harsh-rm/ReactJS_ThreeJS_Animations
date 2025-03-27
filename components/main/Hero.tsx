import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-270px] left-0 z-[1] h-full w-full object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;

  {/*         
    <iframe
    src="https://domenicobrz.github.io/webgl/projects/Physarum-fluid-2/"
    className="absolute top-0 left-0 w-screen h-screen z-[1] border-none pointer-events-auto"
    >
    </iframe> 
  */}
