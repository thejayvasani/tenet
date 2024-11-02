"use client";

import React from "react";
import Menu from "@/components/Header/Menu";
import Work from "@/components/Work";

function Page() {
  return (
    <>
      <Menu />

      <div className="flex flex-col justify-center items-center h-screen">
        <h4 className="text-5xl mb-10 text-[#abfd00]">This Page is Under Construction 🚧🔜⚠</h4>
        <p className="text-white text-xl">Sorry for the inconvenience. 😐</p>
      </div>

      <Work />
    </>
  );
}

export default Page;
