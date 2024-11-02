import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Cursor from "@/components/Cursor";

export default function Work() {

  useEffect(() => {
    const designs = document.querySelectorAll(".design");
    const cursor = document.querySelector(".custom-cursor");
    
    designs.forEach((designElement) => {
      const textElement = designElement.querySelector(".design-text");
      const imgElement = designElement.querySelector("img");

      gsap.set(textElement, { opacity: 0, y: "100%" });

      designElement.addEventListener("mouseenter", () => {
        gsap.to(imgElement, { opacity: 0.5, duration: 0.2 });
        gsap.to(textElement, { opacity: 1, y: "0%", duration: 0.1, ease: "power3.out" });
        gsap.to(cursor, { scale: 3, duration: 0.5, ease: "power3.out" }); // Scale up the cursor
      })

      designElement.addEventListener("mouseleave", () => {
        gsap.to(imgElement, { opacity: 1, duration: 0.2 });
        gsap.to(textElement, { opacity: 0, y: "80%", duration: 0.1, ease: "power4.in" });
        gsap.to(cursor, { scale: 1, duration: 0.5, ease: "power3.out" }); // Scale back to normal
      });
    });

    return () => {
      designs.forEach((designElement) => {
        designElement.removeEventListener("mouseenter", null);
        designElement.removeEventListener("mouseleave", null);
      });
    };
  }, []);

  return (
    <div className="work text-white my-16 mx-4 md:mx-12">
      <Cursor />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10">

      <Link href="/design/PGT">
          <div className="design bg-[#008080] w-full h-[200px] sm:h-[400px] md:h-[610px] flex justify-center items-center relative overflow-hidden">
            <img src="/images/PGT/Thumbnail.png" alt="Xolio" className="mb-10" />
            <div className="design-text absolute inset-auto flex justify-center items-center">
              <span className="text-[#abfd00] text-lg sm:text-2xl md:text-5xl">PGT System</span>
            </div>
          </div>
        </Link>

        {/* <Link href="/design/FalconX">
          <div className="design bg-zinc-900 w-full h-[200px] sm:h-[400px] md:h-[610px] flex justify-center items-center relative overflow-hidden">
            <img src="/images/FalconX/falconx.png" alt="Xolio" className="mb-10" />
            <div className="design-text absolute inset-auto flex justify-center items-center">
              <span className="text-[#abfd00] text-lg sm:text-2xl md:text-5xl">FalconX</span>
            </div>
          </div>
        </Link>  */}

        <Link href="/design/Opal">
          <div className="design bg-black w-full h-[200px] sm:h-[400px] md:h-[610px] flex justify-center items-center relative overflow-hidden">
            <img src="/images/opal/opal-cover.png" alt="Xolio" className="w-full h-full object-cover" />
            <div className="design-text absolute inset-auto flex justify-center items-center">
              <span className="text-[#abfd00] text-lg sm:text-2xl md:text-5xl">Opal Tadpole | WebCam</span>
            </div>
          </div>
        </Link>

        <Link href="/design/PostLander">
          <div className="design bg-black w-full h-[200px] sm:h-[400px] md:h-[610px] flex justify-center items-center relative overflow-hidden">
            <img src="/images/postlander/1.png" alt="Xolio" className="w-full h-full object-cover" />
            <div className="design-text absolute inset-auto flex justify-center items-center">
              <span className="text-[#abfd00] text-lg sm:text-2xl md:text-5xl">PostLander</span>
            </div>
          </div>
        </Link> 

        <Link href="/design/StreamVibe">
          <div className="design bg-black w-full h-[200px] sm:h-[400px] md:h-[610px] flex justify-center items-center relative overflow-hidden">
            <img src="/images/streamvibe/streamvibe.png" alt="Xolio" className="w-full h-full object-cover" />
            <div className="design-text absolute inset-auto flex justify-center items-center">
              <span className="text-[#abfd00] text-lg sm:text-2xl md:text-5xl">StreamVibe</span>
            </div>
          </div>
        </Link>

        <Link href="/design/IDstudio">
          <div className="design bg-black w-full h-[200px] sm:h-[400px] md:h-[610px] flex justify-center items-center relative overflow-hidden">
            <img src="/images/id-studio/id-studio.png" alt="Xolio" className="w-full h-full object-cover" />
            <div className="design-text absolute inset-auto flex justify-center items-center">
              <span className="text-[#abfd00] text-lg sm:text-2xl md:text-5xl">ID Studio</span>
            </div>
          </div>
        </Link>

        <Link href="/design/Waffold">
          <div className="design bg-black w-full h-[200px] sm:h-[400px] md:h-[610px] flex justify-center items-center relative overflow-hidden">
            <img src="/images/Waffold/waffold.png" alt="Xolio" className="w-full h-full object-cover" />
            <div className="design-text absolute inset-auto flex justify-center items-center">
              <span className="text-[#abfd00] text-lg sm:text-2xl md:text-5xl">Waffold |Typeface</span>
            </div>
          </div>
        </Link>

        <Link href="/design/3d-characters">
          <div className="design bg-black w-full h-[200px] sm:h-[400px] md:h-[610px] flex justify-center items-center relative overflow-hidden">
            <img src="/images/3d-characters/3d-characters.png" alt="Xolio" className="w-full h-full object-cover" />
            <div className="design-text absolute inset-auto flex justify-center items-center">
              <span className="text-[#abfd00] text-lg sm:text-2xl md:text-5xl">3D Character | Illustration</span>
            </div>
          </div>
        </Link> 

        <Link href="/design/pro2">
          <div className="design bg-black w-full h-[200px] sm:h-[400px] md:h-[610px] flex justify-center items-center relative overflow-hidden">
            {/* <img src="/images/.png" alt="Xolio" className="w-full h-full object-cover" /> */}
            <div className="design-text absolute inset-auto flex justify-center items-center">
              <span className="text-[#abfd00] text-lg sm:text-2xl md:text-5xl">Coming Soon</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
