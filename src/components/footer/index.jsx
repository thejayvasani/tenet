import React from "react";

export default function footer() {
  return (
    <div className="relative h-[650px] w-full flex justify-center items-center bg-[#abfd00] font-raleway rounded-3xl">
      <div className="absolute top-0 right-0 flex-row justify-center items-center text-xl mt-10 ml-[1100px] ">
        <div className="flex justify-end mr-8 mb-4">
          <a
            href="https://bento.me/jayvasani"
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            target="_blank"
          >
            Bento
          </a>
        </div>
        <div className="flex justify-end mr-8 mb-4">
          <a
            href="https://www.instagram.com/jayuuuxz/"
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            target="_blank"
          >
            Instagram
          </a>
        </div>
        <div className="flex justify-end mr-8 mb-4">
          <a
            href="https://dribbble.com/thejayvasani"
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            target="_blank"
          >
            Dribble
          </a>
        </div>
        <div className="flex justify-end mr-8 mb-4">
          <a
            href="https://www.behance.net/thejayvasani"
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            target="_blank"
          >
            Behance
          </a>
        </div>
        <div className="flex justify-end mr-8 mb-4">
          <a
            href="https://www.linkedin.com/in/jay-vasani-35a9a7252/"
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="w-[1590px] flex justify-end absolute top-[270px] right-0 mr-8 z-50 border-t-[1px] border-black ">
        <h4 className="text-lg font-medium p-2">@ 2024 Xolio Labb. All Rights Reserved by Jay Vasani</h4>
      </div>

      <div className="absolute top-0 right-40 flex-row justify-center items-center text-xl mt-10 ml-[1100px] ">
        <div className="flex justify-end mr-8 mb-4">
          <a
            href="https://drive.google.com/file/d/1Bi88n2c1zdohCubL268DfzEpfUEHt0DM/view?usp=sharing"
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            target="_blank"
          >
            Resume
          </a>
        </div>
        <div className="flex justify-end mr-8 mb-4">
          <a
            href="tel:9173664845"
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            target="_blank"
          >
            +91 9173664845
          </a>
        </div>
        <div className="flex justify-end mr-8 mb-4">
          <a
            href="mailto: jayuuuxz48@gmail.com"
            className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            Jayuuuxz48@gmail.com
          </a>
        </div>
      </div>

      <div className="absolute top-0 left-0 flex justify-start text-xl mt-10 ml-8">
        <h4 className="text-xl uppercase">Let's Connect! Reach out and let the conversation begin. Your thoughts,<br /> questions, and ideas are always welcome.</h4>
      </div>

      <div className="absolute bottom-0 px-8">
        <img className="-z-10" src="/images/footer4.png" alt="Footer image" />
      </div>


    </div>
  );
}
