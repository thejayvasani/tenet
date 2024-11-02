"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import footer from "@/components/footer";
import Work from "@/components/Work";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const locomotiveScrollInstance = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    // Scroll to the top of the page on load
    window.scrollTo(0, 0);

    // Hide cursor during preloader
    document.body.style.cursor = "none";

    // Simulate preloader delay
    setTimeout(() => {
      setIsLoading(false);
      // Restore default cursor after preloader
      document.body.style.cursor = "default";

      // Initialize Locomotive Scroll after preloader is done
      if (scrollRef.current) {
        locomotiveScrollInstance.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
        });
      }
    }, 2000);

    return () => {
      // Cleanup Locomotive Scroll instance
      if (locomotiveScrollInstance.current) {
        locomotiveScrollInstance.current.destroy();
      }
    };
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <div data-scroll-container ref={scrollRef} className="scroll-container">
          <Header />
          <Work />
          <footer />
        </div>
      )}
    </main>
  );
}
