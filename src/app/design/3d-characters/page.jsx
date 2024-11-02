"use client";

import React from "react";
import Menu from "@/components/Header/Menu";
import Work from "@/components/Work";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function page() {
  const scroll = new LocomotiveScroll();
  const target = document.querySelector("#character");

  scroll.scrollTo(target);
  
  return (
    <>
      <Menu />

      <section id="character">
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="3d-character w-full h-full flex flex-col justify-center items-center"
        >
          <div className="w-[1150px] flex-col justify-center items-center mt-24 font-raleway">
            <h3 className="text-white text-center text-3xl md:text-5xl">
              <span className="text-[#abfd00]">3D Characters</span> |
              Illustration
            </h3>
            <div>
              <p className="text-white text-2xl text-justify my-8">
                <span className="text-[#abfd00]">3D Characters Pack</span>{" "}
                features a vibrant collection of 30 unique, stylized 3D
                characters. The characters are designed with a playful and
                modern aesthetic, each featuring distinctive hairstyles,
                outfits, and accessories that cater to a wide variety of
                personalities and styles. The design is sleek and colorful,
                making these characters perfect for enhancing digital products,
                presentations, or creative projects.
              </p>
            </div>
            <div>
              <p className="text-white text-xl text-justify opacity-50 my-8">
                The image showcases a portion of the collection, highlighting
                the diversity and detailed design of each character, set against
                a contrasting dark background that makes the colors pop.
              </p>
            </div>
          </div>

          <div className="w-[1150px] h-full flex-col justify-center items-center">
            <div>
              <img
                src="/images/3d-characters/3d-characters.png"
                alt="3D Characters"
                className="mt-8"
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
                    The design challenge for the 3D Characters Pack project is
                    to create a cohesive and visually appealing set of 30 unique
                    3D characters that are versatile enough to be used across
                    various digital platforms and projects.
                  </p>
                  <br />
                  <p>
                    The challenge lies in ensuring each character has a distinct
                    personality while maintaining a consistent style throughout
                    the pack. The characters should be detailed, expressive, and
                    diverse, appealing to a broad audience while being easily
                    customizable to suit different creative needs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-4 text-white border-white gap-4 border-t py-8 font-raleway">
                <div className="w-full h-full flex-col">
                  <h4 className="text-white text-xl pb-4">Timeline</h4>
                  <div className="opacity-50 text-xl">
                    <p>Sep 2023 - Nov 2023</p>
                  </div>
                </div>
                <div className="w-full h-full flex-col">
                  <h4 className="text-white text-xl pb-4">Disciplines</h4>
                  <div className="opacity-50 text-xl">
                    <p>Drawing</p>
                    <p>Eye Movements</p>
                    <p>Head Movements</p>
                    <p>Facial Expression</p>
                    <p>Body Poses</p>
                  </div>
                </div>
                <div className="w-full h-full flex-col">
                  <h4 className="text-white text-xl pb-4">Responsibilities</h4>
                  <div className="opacity-50 text-xl">
                    <p>Sketching</p>
                    <p>Research</p>
                    <p>Concept Art</p>
                    <p>Digital Art</p>
                    <p>Prototyping</p>
                  </div>
                </div>
                <div className="w-full h-full flex-col">
                  <h4 className="text-white text-xl pb-4">Tools</h4>
                  <div className="opacity-50 text-xl">
                    <p>Illustrator</p>
                    <p>Procreate</p>
                    <p>Photoshop</p>
                    <p>Spline</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="bg-[#90a39f]">
                <img src="/images/3d-characters/1.png" alt="Characters" />
              </div>
              <div className="bg-[#b9bfdf]">
                <img src="/images/3d-characters/2.png" alt="Characters" />
              </div>
              <div className="bg-[#463131]">
                <img src="/images/3d-characters/3.png" alt="Characters" />
              </div>
              <div className="bg-[#b8accc]">
                <img src="/images/3d-characters/4.png" alt="Characters" />
              </div>
              <div className="bg-[#90a39f]">
                <img src="/images/3d-characters/5.png" alt="Characters" />
              </div>
              <div className="bg-[#d3baba]">
                <img src="/images/3d-characters/6.png" alt="Characters" />
              </div>
              <div className="bg-[#d4a387]">
                <img src="/images/3d-characters/7.png" alt="Characters" />
              </div>
              <div className="bg-[#7c7e88]">
                <img src="/images/3d-characters/8.png" alt="Characters" />
              </div>
              <div className="bg-[#5f475f]">
                <img src="/images/3d-characters/9.png" alt="Characters" />
              </div>
              <div className="bg-[#6d8d81]">
                <img src="/images/3d-characters/10.png" alt="Characters" />
              </div>
              <div className="bg-[#262729]">
                <img src="/images/3d-characters/11.png" alt="Characters" />
              </div>
              <div className="bg-[#a1a3a3]">
                <img src="/images/3d-characters/12.png" alt="Characters" />
              </div>
              <div className="bg-[#aa8db6]">
                <img src="/images/3d-characters/13.png" alt="Characters" />
              </div>
              <div className="bg-[#394cb9]">
                <img src="/images/3d-characters/14.png" alt="Characters" />
              </div>
              <div className="bg-[#c99fb4]">
                <img src="/images/3d-characters/15.png" alt="Characters" />
              </div>
              <div className="bg-[#011580]">
                <img src="/images/3d-characters/16.png" alt="Characters" />
              </div>
              <div className="bg-[#7ca796]">
                <img src="/images/3d-characters/17.png" alt="Characters" />
              </div>
              <div className="bg-[#dae4a3]">
                <img src="/images/3d-characters/18.png" alt="Characters" />
              </div>
              <div className="bg-[#2b2b2b]">
                <img src="/images/3d-characters/19.png" alt="Characters" />
              </div>
              <div className="bg-[#d2d4e0]">
                <img src="/images/3d-characters/20.png" alt="Characters" />
              </div>
              <div className="bg-[#c98697]">
                <img src="/images/3d-characters/21.png" alt="Characters" />
              </div>
              <div className="bg-[#b6bbd6]">
                <img src="/images/3d-characters/22.png" alt="Characters" />
              </div>
              <div className="bg-[#90d6b6]">
                <img src="/images/3d-characters/23.png" alt="Characters" />
              </div>
              <div className="bg-[#e67d79]">
                <img src="/images/3d-characters/24.png" alt="Characters" />
              </div>
              <div className="bg-[#353535]">
                <img src="/images/3d-characters/25.png" alt="Characters" />
              </div>
              <div className="bg-[#f775e5]">
                <img src="/images/3d-characters/26.png" alt="Characters" />
              </div>
              <div className="bg-[#2d49eb]">
                <img src="/images/3d-characters/27.png" alt="Characters" />
              </div>
              <div className="bg-[#3acf4e]">
                <img src="/images/3d-characters/28.png" alt="Characters" />
              </div>
              <div className="bg-[#9a44e0]">
                <img src="/images/3d-characters/29.png" alt="Characters" />
              </div>
              <div className="bg-[#bbb565]">
                <img src="/images/3d-characters/30.png" alt="Characters" />
              </div>
            </div>
          </div>

          <div className="h-[10px] md:h-[15px] w-full md:w-[1150px] bg-[#abfd00] mt-8 mb-24 md:mb-40"></div>
        </div>

        <Work />
      </section>
    </>
  );
}

export default page;
