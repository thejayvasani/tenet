// src/components/SmoothScroll.js
"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SmoothScroll({ children }) {
  const scrollRef = useRef(null);
  const locomotiveScrollInstance = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    locomotiveScrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Setup ScrollTrigger to work with Locomotive Scroll
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locomotiveScrollInstance.current.scrollTo(value, 0, 0)
          : locomotiveScrollInstance.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // Refresh ScrollTrigger
    ScrollTrigger.addEventListener("refresh", () => locomotiveScrollInstance.current.update());
    ScrollTrigger.refresh();

    // Cleanup on component unmount
    return () => {
      if (locomotiveScrollInstance.current) {
        locomotiveScrollInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}

export default SmoothScroll;
