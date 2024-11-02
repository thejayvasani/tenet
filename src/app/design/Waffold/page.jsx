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
            <span className="text-[#abfd00]">Waffold</span> | Typeface
          </h3>
          <div className="w-[1150px] my-8">
            <p className="text-white text-sm md:text-2xl text-center leading-relaxed md:leading-normal">
              Waffold is a geometric sans-serif typeface that emphasizes clean
              lines, consistent stroke widths, and a balanced structure. It
              features a modern, minimalist design with sharp edges and slightly
              condensed letterforms.
            </p>
          </div>
        </div>

        <div className="w-[1150px] h-full flex-col justify-center items-center px-4">
          <div className="h-full flex justify-center items-center mx-auto ">
            <img
              src="/images/Waffold/waffold.png"
              alt=""
              className="object-cover"
            />
          </div>

          <div className="w-full h-full">
            <div className="w-[1150px] flex-row justify-center items-center text-white font-raleway mb-8 pt-8">
              <h4 className="text-white opacity-50 text-md mb-1">
                Process Highlights
              </h4>
              <p className="text-2xl">
                Design challenge and responsibilities overview
              </p>
            </div>

            <div className="w-full flex-row justify-center items-center text-white text-xl font-raleway py-8 border-t ">
              <h4 className="text-white pb-4">Challenge</h4>
              <div className="opacity-50 text-justify">
                <p>
                  Designing a font like Waffold presents challenges in balancing
                  uniqueness with readability. The conceptualization phase
                  requires a distinctive style while ensuring each character is
                  consistent and functional across various contexts.
                </p>
                <br />
                <p>
                  Maintaining uniformity across all glyphs while preserving the
                  font's intended aesthetic can be difficult. Additionally,
                  technical challenges such as spacing, kerning, and
                  compatibility across different devices and software add
                  complexity to the process, making the creation of a
                  well-crafted, unique font like Waffold a demanding task.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 text-white border-white gap-4 border-t py-8 font-raleway border-b">
              <div className="w-full h-full flex-col">
                <h4 className="text-white text-xl pb-4">Timeline</h4>
                <div className="opacity-50 text-xl">
                  <p>Dec 2023 - Freelance</p>
                </div>
              </div>
              <div className="w-full h-full flex-col">
                <h4 className="text-white text-xl pb-4">Disciplines</h4>
                <div className="opacity-50 text-xl">
                  <p>Emphasis</p>
                  <p>White SPace</p>
                  <p>Proximity</p>
                  <p>Alignment</p>
                </div>
              </div>
              <div className="w-full h-full flex-col">
                <h4 className="text-white text-xl pb-4">Responsibilities</h4>
                <div className="opacity-50 text-xl">
                  <p>UX Research</p>
                  <p>Typeface</p>
                  <p>Prototyping</p>
                </div>
              </div>
              <div className="w-full h-full flex-col">
                <h4 className="text-white text-xl pb-4">Tools</h4>
                <div className="opacity-50 text-xl">
                  <p>FontLab</p>
                  <p>TypeTool</p>
                  <p>FontSelf</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[1150px] flex-row justify-center items-center">
            <div className="my-8 font-raleway">
              <p className="text-white text-justify text-xl">
                Waffold’s design language merges modern precision with geometric
                harmony, reflecting a blend of contemporary aesthetics and
                mathematical rigor. The uppercase letters stand firm and
                grounded, exuding confidence and clarity, while the lowercase
                letters maintain a sleek and cohesive rhythm, balancing
                functionality with style.
              </p>
            </div>
            <div className="my-8 font-raleway">
              <p className="text-white text-justify text-md opacity-50">
                Waffold’s numbers and punctuation are sharp and consistent,
                designed with a focus on symmetry and proportionality. The clean
                lines and uniform stroke widths ensure that the numerals and
                symbols seamlessly integrate with the character set, providing a
                cohesive visual experience that is both practical and
                aesthetically pleasing. This typeface’s design captures a
                refined elegance, perfect for modern branding, digital
                interfaces, and editorial layouts.
              </p>
            </div>
          </div>

          <div className=" w-[1150px] flex-col justify-center items-center my-8">
            <img src="/images/Waffold/1.png" alt="Waffold" className="mb-6" />
            <img src="/images/Waffold/2.png" alt="Waffold" className="mb-6" />
            <img src="/images/Waffold/3.png" alt="Waffold" className="mb-6" />
            <img src="/images/Waffold/4.png" alt="Waffold" className="mb-6" />
            <img src="/images/Waffold/5.png" alt="Waffold" className="mb-6" />
            <img src="/images/Waffold/6.png" alt="Waffold" className="mb-6" />
            <img src="/images/Waffold/7.png" alt="Waffold" className="mb-6" />
            <img src="/images/Waffold/8.png" alt="Waffold" className="mb-6" />
            <img src="/images/Waffold/9.png" alt="Waffold" className="mb-6" />
            <img src="/images/Waffold/10.png" alt="Waffold" className="mb-6" />
            <img src="/images/Waffold/11.png" alt="Waffold" className="mb-6" />
          </div>
        </div>

        <div className="h-[10px] md:h-[15px] w-full md:w-[1150px] bg-[#abfd00] mx-auto mb-24 md:mb-40"></div>
      </div>

      <Work />
    </>
  );
}

export default page;
