"use client";

import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import Menu from "@/components/Header/Menu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { slideUp } from "./animation";
import { motion } from "framer-motion";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer/index.jsx";


function page() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.04 * direction;
  };

  return (
    <>
      <Cursor />
      <Menu />
      
      <motion.div
        data-scroll-container
        variants={slideUp}
        initial="initial"
        animate="enter"
        className="scroll-container relative flex h-screen overflow-hidden"
      >
        <Image
          className="object-cover bg-no-repeat"
          src="/images/about/about1.png"
          fill={true}
          alt="Jay Vasani profile Image"
        />
        <div className="absolute top-[calc(100vh-400px)]">
          <div ref={slider} className="relative whitespace-nowrap">
            <p
              className="relative m-0 text-white text-[230px] font-medium pr-[50px]"
              ref={firstText}
            >
              Jay Vasani - Jay Vasani -
            </p>
            <p
              className="absolute left-full top-0 m-0 text-white text-[230px] font-medium pr-[50px]"
              ref={secondText}
            >
              Jay Vasani - Jay Vasani -
            </p>
          </div>
        </div>
      </motion.div>

      <div className="main w-full h-screen z-10 flex-row justify-center items-center bg-black">
        <div className="flex justify-center items-center ">
          <div className="mt-20
           px-56">
            <p className="text-white text-justify text-3xl font-raleway leading-[42px]">
              <span className="text-[#abfd00] text-7xl font-medium">
                Jay Vasani
              </span>{" "}
              is a{" "}
              <span className="text-[#abfd00] text-6xl">Product Designer</span>{" "}
              and{" "}
              <span className="text-[#abfd00] text-6xl">UX/UI Designer</span>{" "}
              based in Surat, Gujarat. He specializes in crafting intuitive user
              experiences and visually engaging interfaces, blending creative
              strategy with design to elevate brand identities and digital
              products.
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-8 px-56 mt-14 text-white font-raleway">
          <div className="w-full h-full Experience grid grid-cols-1 mr-8 border-t-2">
            <p className="text-md opacity-50 my-6">Experience</p>
            <div className="text-xl">
              <p className="">
                <span className="text-[#abfd00]">ByteUprise</span> - Sep 2024 -
                Continue
              </p>
              <p className="text-2xl mb-2">Product Designer</p>
              <p className="text-sm mb-8 text-justify">
                Accelerated design execution by integrating user feedback
                mechanisms and defining best design principles. Created a visual
                library, collaborated with UX Director, Program Managers, and
                other stakeholders. Worked on a user interface for a non
                invasive portable stroke detection device, focusing on user
                experience UX and usability.
              </p>
            </div>
            <div className="text-xl">
              <p className="">
                <span className="text-[#abfd00]">FalconX</span> - Jan 2024 -
                June 2024
              </p>
              <p className="text-2xl mb-2">Software Designer</p>
              <p className="text-sm mb-8 text-justify">
                Accelerated design execution by integrating user feedback
                mechanisms and defining best design principles. Created a visual
                library, collaborated with UX Director, Program Managers, and
                other stakeholders. Worked on a user interface for a non
                invasive portable stroke detection device, focusing on user
                experience UX and usability.
              </p>
            </div>
            <div className="text-xl">
              <p className="">
                <span className="text-[#abfd00]">DesignPickle</span> - Jan 2024
                - June 2024
              </p>
              <p className="text-2xl mb-2">Graphic Designer</p>
              <p className="text-sm mb-8 text-justify">
                Designed product packaging, created online campaigns, and worked
                on UI development for web and mobile. Collaborated with
                marketing, social, and creative teams to design marketing video
                assets, improving ad performance by 19%. Established graphic
                design standards for multi team consistency, enhancing video
                content with integrated music, voice over, and sound effects.
                Implemented user research to understand customer needs and
                improve design outcomes
              </p>
            </div>
          </div>
          <div className="w-full flex-col justify-center items-start border-t-2">
            <p className="text-md opacity-50 my-6">Education</p>
            <div>
              <p className="text-xl"><span className="text-[#abfd00]">Pacific School of Engineering</span></p>
              <p className="text-2xl">
                Bachelor in Computer Engineering, <span className="text-[#abfd00]">CGPA - 8.68/10</span>
              </p>
            </div>

            <div className="mt-14">
              <p className="text-xl"><span className="text-[#abfd00]">Sanskar Vidhyalaya</span></p>
              <p className="text-2xl">
                Higher Secondary in Science stream, <span className="text-[#abfd00]">Percentage - 64%</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
