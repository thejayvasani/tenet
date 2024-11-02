import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Magnetic from "@/common/Magnetic";

function Navigation() {
  useEffect(() => {
    const menuLinks = document.querySelectorAll(".menu-link");
    const cursor = document.querySelector(".custom-cursor");

    menuLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 3, duration: 0.3, ease: "power3.out" });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power3.out" });
      });
    });

    return () => {
      menuLinks.forEach((link) => {
        link.removeEventListener("mouseenter", null);
        link.removeEventListener("mouseleave", null);
      });
    };
  }, []);

  return (
    <nav className="w-full h-16 flex justify-between items-center px-4 md:px-12 text-white fixed z-50">
      {/* Logo */}
      <div className="menu-link logo flex flex-row justify-center items-center text-xl font-bold h-16 w-16 relative">
        <a className="flex justify-center items-center gap-2 relative" href="/">
          <img
            src="/images/xolio-white.png"
            alt="Jay Vasani"
            className="h-8 w-8 md:h-12 md:w-12"
          />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex justify-center items-center gap-4 lg:gap-8 text-white">
        <Magnetic>
          <Link
            className="menu-link text-sm md:text-md font-raleway uppercase hover:underline hover:underline-offset-[6px]"
            href="/"
          >
            Work
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            className="menu-link text-sm md:text-md font-raleway uppercase hover:underline hover:underline-offset-[6px]"
            href="/Designs"
          >
            Designs
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            className="menu-link text-sm md:text-md font-raleway uppercase hover:underline hover:underline-offset-[6px]"
            href="/about"
          >
            About
          </Link>
        </Magnetic>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="menu-button text-white focus:outline-none"
          aria-label="Open menu"
        >
          {/* Icon for the mobile menu button */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
