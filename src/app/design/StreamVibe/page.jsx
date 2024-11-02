"use client";

import React from "react";
import Menu from "@/components/Header/Menu";
import Work from "@/components/Work";
import Preloader from "@/components/Preloader"


function page() {
  return (
    <>
      <Menu />

      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center px-4 md:px-32 mt-24 md:mt-48 font-raleway">
          <h3 className="text-white text-center text-3xl md:text-5xl">
            <span className="text-[#abfd00]">StreamVibe</span> | Product Design
          </h3>
          <div className="w-[1150px]">
            <div className="w-full flex-row justify-center items-center text-white text-xl font-raleway py-8">
              <p className="text-white text-2xl text-center">
                StreamVibe is a cutting-edge OTT streaming platform designed to
                deliver an immersive entertainment experience. With a vast
                library of movies, TV shows, and exclusive content, StreamVibe
                offers something for everyone.
              </p>
            </div>

            <div className="w-full flex-row justify-center items-center text-white text-xl font-raleway py-8">
              <p className="text-white text-2xl text-center">
                Whether you're into binge-watching the latest series, exploring
                niche genres, or discovering new releases, StreamVibe provides a
                seamless streaming experience with personalized recommendations,
                high-quality video, and user-friendly navigation.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[1150px] h-full flex-col justify-center items-center">
          <div className="bg-slate-300 mb-6">
            <img src="/images/streamvibe/streamvibe.png" alt="StreamVibe" />
          </div>

          <div className="w-full h-full mt-10">
            <div className="w-[1150px] flex-row justify-center items-center text-white font-raleway pb-8 ">
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

            <div className="grid grid-cols-4 text-white border-b-0 border-white gap-4 border-t py-8 font-raleway">
              <div className="w-full h-full flex-col">
                <h4 className="text-white text-xl pb-4">Timeline</h4>
                <div className="opacity-50 text-xl">
                  <p>Sep 2023 - Nov 2023</p>
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
                  <p>UX Research</p>
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
                  <p>Spline</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-300 mb-6">
            <img src="/images/streamvibe/1.png" alt="StreamVibe" />
          </div>

          <div className="bg-slate-300 mb-6">
            <img src="/images/streamvibe/guide.png" alt="StreamVibe" />
          </div>
          <div className="w-[1150px] h-full flex-col justify-center items-center px-4">
            <p className="text-white text-xl flex justify-center ">
              View full Website Figma file -{" "}
              <a
                href="https://www.figma.com/design/MepErHBGWFsgS74E6IkRS6/StreamVibe-OTT-Website-Design?node-id=34-3&t=sbvzuX1y5HLZ7T6k-0"
                target="_blank"
                className="text-[#abfd00] hover:underline hover:underline-offset-4"
              >
                StreamLab OTT
              </a>
            </p>
          </div>
        </div>
      </div>

      <Work />
    </>
  );
}

export default page;
