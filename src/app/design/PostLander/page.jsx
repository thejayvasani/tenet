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
        <div className="flex flex-col justify-center items-center px-4 md:px-32 mt-24 md:mt-48 font-raleway">
          <h3 className="text-white text-center text-3xl md:text-5xl">
            <span className="text-[#abfd00]">Post Lander</span> | UX/UI Design
          </h3>
          <p className="text-white text-lg md:text-2xl text-center my-6 md:my-12 px-64 leading-relaxed md:leading-normal">
            <a
              href="https://postlander.com/?ref=www.inspo.design"
              className="text-[#abfd00] hover:underline hover:underline-offset-4"
              target="_blank"
            >
              PostLander
            </a>{" "}
            is Free AI cover letter generator, ATS resume keyword optimizer,
            resume design templates, and more. Powered by GPT.
          </p>
        </div>

        <div className="w-[1150px] h-full flex-col justify-center items-center px-4">
          <div className="flex-col justify-center items-center my-8">
            <img
              src="/images/postlander/1.png"
              alt="PostLander"
              className="mb-6"
            />
            <div className="w-full h-full mt-10">
              <div className="w-[1150px] flex-row justify-center items-center text-white font-raleway mb-8">
                <h4 className="text-white opacity-50 text-md mb-1">
                  Process Highlights
                </h4>
                <p className="text-2xl">
                  Design challenge and responsibilities overview
                </p>
              </div>

              <div className="w-full flex-row justify-center items-center text-white text-xl font-raleway py-8 border-t ">
                <h4 className="text-white pb-4">Challenge</h4>
                <div className="opacity-50">
                  <p>
                    The design challenge involves creating a seamless and
                    intuitive platform that offers a suite of AI-driven career
                    tools, including a GPT-powered cover letter generator, an
                    ATS resume keyword optimizer, and customizable resume design
                    templates.
                  </p>
                  <br />
                  <p>
                    The platform should enable users to effortlessly generate
                    tailored cover letters, optimize their resumes for ATS
                    compatibility, and choose from a variety of visually
                    appealing resume templates.
                  </p>
                  <br />
                  <p>
                    The design should prioritize ease of use, ensuring that even
                    users with minimal technical skills can navigate the
                    platform, input necessary details, and receive high-quality,
                    job-ready documents.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 text-white border-b-0 border-white gap-4 border-t py-10 font-raleway">
                <div className="w-full h-full flex-col">
                  <h4 className="text-white text-xl pb-4">Timeline</h4>
                  <div className="opacity-50 text-xl">
                    <p>Feb 2023 - March 2023</p>
                  </div>
                </div>
                <div className="w-full h-full flex-col">
                  <h4 className="text-white text-xl pb-4">Disciplines</h4>
                  <div className="opacity-50 text-xl">
                    <p>User Experience</p>
                    <p>User Interface</p>
                  </div>
                </div>
                <div className="w-full h-full flex-col">
                  <h4 className="text-white text-xl pb-4">Responsibilities</h4>
                  <div className="opacity-50 text-xl">
                    <p>Sketching</p>
                    <p>UX/UI Mobile Design</p>
                    <p>Prototyping</p>
                  </div>
                </div>
                <div className="w-full h-full flex-col">
                  <h4 className="text-white text-xl pb-4">Tools</h4>
                  <div className="opacity-50 text-xl">
                    <p>Figma</p>
                    <p>Adobe CS</p>
                    <p>Illustrator</p>
                    <p>Photoshop</p>
                  </div>
                </div>
              </div>
            </div>

            <img
              src="/images/postlander/2.png"
              alt="PostLander"
              className="mb-6"
            />
            <img
              src="/images/postlander/3.png"
              alt="PostLander"
              className="mb-6"
            />
            <img
              src="/images/postlander/4.png"
              alt="PostLander"
              className="mb-6"
            />
            <img
              src="/images/postlander/5.png"
              alt="PostLander"
              className="mb-6"
            />
            <img
              src="/images/postlander/6.png"
              alt="PostLander"
              className="mb-6"
            />
          </div>
        </div>

        <div className="h-[10px] md:h-[15px] w-full md:w-[1150px] bg-[#abfd00] mx-auto mb-24 md:mb-40"></div>
      </div>

      <Work />
    </>
  );
}

export default Page;
