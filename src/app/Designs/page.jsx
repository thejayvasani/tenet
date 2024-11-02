"use client";

import React from "react";
import Menu from "@/components/Header/Menu";
import Cursor from "@/components/Cursor";
import Gallery from "@/components/Gallery/Gallery";

function Page() {
  // Define columns with images for each column
  const columns = [
    [
      { src: "images/Designs/28.jpg", alt: "Gallery image 1" },
      { src: "images/Designs/1.jpg", alt: "Gallery image 2" },
      { src: "images/Designs/2.jpg", alt: "Gallery image 3" },
    ],
    [
      { src: "images/Designs/6.jpg", alt: "Gallery image 7" },
      { src: "images/Designs/7.jpg", alt: "Gallery image 8" },
      { src: "images/Designs/8.jpg", alt: "Gallery image 9" },
    ],
    [
      { src: "images/Designs/3.jpg", alt: "Gallery image 4" },
      { src: "images/Designs/4.jpg", alt: "Gallery image 5" },
      { src: "images/Designs/5.jpg", alt: "Gallery image 6" },
    ],
    [
      { src: "images/Designs/18.jpg", alt: "Gallery image 10" },
      { src: "images/Designs/19.jpg", alt: "Gallery image 11" },
      { src: "images/Designs/20.jpg", alt: "Gallery image 12" },
    ],
    [
      { src: "images/Designs/12.jpg", alt: "Gallery image 10" },
      { src: "images/Designs/13.jpg", alt: "Gallery image 11" },
      { src: "images/Designs/14.jpg", alt: "Gallery image 12" },
    ],
    [
      { src: "images/Designs/15.jpg", alt: "Gallery image 10" },
      { src: "images/Designs/16.jpg", alt: "Gallery image 11" },
      { src: "images/Designs/17.jpg", alt: "Gallery image 12" },
    ],
    [
      { src: "images/Designs/21.jpg", alt: "Gallery image 10" },
      { src: "images/Designs/22.jpg", alt: "Gallery image 11" },
      { src: "images/Designs/23.jpg", alt: "Gallery image 12" },
    ],
    [
      { src: "images/Designs/9.jpg", alt: "Gallery image 10" },
      { src: "images/Designs/10.jpg", alt: "Gallery image 11" },
      { src: "images/Designs/11.jpg", alt: "Gallery image 12" },
    ],
    [
      { src: "images/Designs/24.jpg", alt: "Gallery image 10" },
      { src: "images/Designs/25.jpg", alt: "Gallery image 11" },
      { src: "images/Designs/26.jpg", alt: "Gallery image 12" },
    ],
  ];

  return (
    <>
      <Cursor />
      <Menu />
      <div className="w-full h-full flex flex-col justify-center items-center font-raleway">
        <div className="mt-32 mx-[52px]">
          <Gallery columns={columns} />
        </div>
      </div>
    </>
  );
}

export default Page;
