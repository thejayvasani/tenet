"use client";

import React from "react";
import Menu from "@/components/Header/Menu";
import Work from "@/components/Work";
import Preloader from "@/components/Preloader"

function Page() {
  return (
    <>
      <Menu />

      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center px-4 md:px-32 mt-16 md:mt-24 lg:mt-48 font-raleway">
          <h3 className="text-white text-center text-2xl md:text-4xl lg:text-5xl">
            <span className="text-[#abfd00]">Opal Tadpole</span> | UX/UI Design
          </h3>
          <p className="text-white text-sm md:text-lg lg:text-2xl text-center px-4 md:px-[100px] lg:px-[200px] xl:px-[250px] my-4 md:my-8 leading-relaxed md:leading-normal">
            As the creative force behind the{" "}
            <a
              className="text-[#abfd00] hover:underline hover:underline-offset-4"
              target="_blank"
              href="https://opalcamera.com/"
            >
              Opal
            </a>{" "}
            <a
              className="text-[#abfd00] hover:underline hover:underline-offset-4"
              target="_blank"
              href="https://opalcamera.com/opal-tadpole"
            >
              Tadpole
            </a>{" "}
            Camera website, my mission was to craft a digital experience as
            sleek and innovative as the camera itself. The challenge? To
            translate the sophistication and cutting-edge technology of Opal’s
            premium webcam into a seamless online journey that captivates and
            converts.
          </p>
        </div>

        <div className="w-full md:w-[720px] lg:w-[960px] xl:w-[1150px] h-full flex-col justify-center items-center mb-10">
          <div className="w-full">
            <img
              src="/images/opal/opal-cover.png"
              alt="Opal Tadpole"
              className="w-full object-cover"
            />
          </div>

          <div className="w-full h-full mt-10">
            <div className="flex flex-col justify-center items-center text-white font-raleway mb-8">
              <h4 className="text-white opacity-50 text-md mb-1">
                Process Highlights
              </h4>
              <p className="text-xl md:text-2xl text-center">
                Design challenge and responsibilities overview
              </p>
            </div>

            <div className="w-full flex flex-col justify-center items-center text-white text-lg md:text-xl font-raleway py-8 border-t">
              <h4 className="text-white pb-4">Challenge</h4>
              <div className="opacity-50">
                <p>
                  Opal Tadpole page was to effectively convey the innovative
                  features of the world's smallest webcam in a way that feels
                  both engaging and informative.
                </p>
                <br />
                <p>
                  The design needed to highlight the Tadpole's advanced
                  technology, such as its category-first directional microphone
                  and mirrorless Sony sensor, while maintaining a minimalist,
                  sleek aesthetic that aligns with Opal's premium brand
                  identity.
                </p>
                <br />
                <p>
                  Balancing the technical details with a user-friendly
                  interface, ensuring seamless navigation, and creating a visual
                  narrative that captures the Tadpole's uniqueness were key
                  challenges in delivering an impactful digital experience.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white border-b-0 border-white gap-4 border-t py-8 font-raleway">
              <div className="w-full flex flex-col">
                <h4 className="text-white text-lg md:text-xl pb-4">Timeline</h4>
                <div className="opacity-50 text-lg md:text-xl">
                  <p>Sep 2023 - Nov 2023</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <h4 className="text-white text-lg md:text-xl pb-4">Disciplines</h4>
                <div className="opacity-50 text-lg md:text-xl">
                  <p>User Experience</p>
                  <p>User Interface</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <h4 className="text-white text-lg md:text-xl pb-4">Responsibilities</h4>
                <div className="opacity-50 text-lg md:text-xl">
                  <p>UX Research</p>
                  <p>Sketching</p>
                  <p>UX/UI Mobile Design</p>
                  <p>Prototyping</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <h4 className="text-white text-lg md:text-xl pb-4">Tools</h4>
                <div className="opacity-50 text-lg md:text-xl">
                  <p>Figma</p>
                  <p>Adobe CS</p>
                  <p>Spline</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <img className="w-full object-cover" src="/images/opal/opal2.png" alt="" />
          </div>

          <div className="mt-8">
            <img className="w-full object-cover" src="/images/opal/opal3.png" alt="" />
          </div>

          <div className="mt-8">
            <img className="w-full object-cover" src="/images/opal/opal4.png" alt="" />
          </div>
        </div>

        <div className="h-[10px] md:h-[15px] w-full md:w-[960px] lg:w-[1150px] bg-[#abfd00] mx-auto mb-16 md:mb-24 lg:mb-40"></div>
      </div>

      <Work />
    </>
  );
}

export default Page;
