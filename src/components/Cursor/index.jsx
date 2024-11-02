import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    
    const xSetter = gsap.quickSetter(cursor, "x", "px");
    const ySetter = gsap.quickSetter(cursor, "y", "px");

    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    gsap.ticker.add(() => {
      const dt = 1 - Math.pow(0.9, gsap.ticker.deltaRatio()); // Adjust smoothness here
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSetter(pos.x - cursor.offsetWidth / 2);
      ySetter(pos.y - cursor.offsetHeight / 2);
    });

    return () => {
      document.removeEventListener("mousemove", null);
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed top-0 left-0 w-6 h-6 bg-[#abfd00] rounded-full pointer-events-none z-50 mix-blend-difference"></div>
  );
}
