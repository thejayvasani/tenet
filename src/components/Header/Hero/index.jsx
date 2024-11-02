import React from "react";

function Index() {
  return (
    <div className="h-[400px] md:h-[600px] flex justify-center items-center rounded-[30px] md:rounded-[50px] mx-4 md:mx-12 p-0">
      <p className="flex-col text-4xl md:text-4xl text-white font-raleway text-center md:text-left">
        <span className="uppercase text-6xl md:text-9xl font-raleway font-bold text-[#abfd00]">
          Xolio
        </span>{" "}
        is{" "}
        <span className="uppercase text-6xl md:text-9xl font-raleway font-bold text-[#abfd00]">
          Jay Vasani
        </span>{" "}
        <span className="inline-block align-top-3 h-[48px] md:h-[92px] w-20 md:w-40 relative">
          <video
            src="/videos/hero1.mp4"
            className="absolute top-0 left-0 h-full w-full object-cover rounded-md"
            autoPlay
            loop
            muted
            playsInline
          />
        </span>
        ,<br /> Who is{" "}
        <span className="text-5xl md:text-9xl font-raleway font-medium text-[#abfd00]">
          Product <span className="italic">Designer</span>
        </span>
        and <br />
        <span className="inline-block align-top-3 h-[48px] md:h-[92px] w-20 md:w-40 relative mr-2 md:mr-4">
          <video
            src="/videos/hero2.mp4"
            className="absolute top-0 left-0 h-full w-full object-cover rounded-md"
            autoPlay
            loop
            muted
            playsInline
          />
        </span>
        <span className="text-5xl md:text-9xl font-raleway font-medium text-[#abfd00]">
          UX/UI <span className="italic">Designer</span>
        </span>
        ...
      </p>
    </div>
  );
}

export default Index;
