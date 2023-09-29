import React from "react";
import "../App.css";
import f2 from "../images/Icon placeholder (1).png";
import f3 from "../images/Icon placeholder (2).png";
import f1 from "../images/Icon placeholder.png";
import f4 from "../images/Video Repository.png";

const Features = () => {
  return (
    <div className="sora text-[#141414] bg-white mt-[2rem] h-[95svh]" id="features">
      <header className="flex flex-col justify-center items-center pt-[5rem] text-[#141414]">
        <h1 className="text-[2rem] font-bold">Features</h1>
        <p className="text-[#000000] text-[.89rem]">
          Key Highlights of Our Extension
        </p>
      </header>
      <main className="  mt-[8rem]  flex border-[3px] justify-around mx-[1rem]  ">
        <div className=" w-screen flex flex-col xl:ml-[8rem] lg:ml-[8rem] ">
          <div className="flex gap-1">
            <img src={f1} alt="screen" className="w-[1.4rem] h-[1.6rem]" />
            <article>
              <h2 className="xl:text-2xl lg:text-2xl   text-[1.3rem] font-bold text-[#1B233D]">Simple Screen Recording</h2>
              <p className="text-[#616163] xl:text-[.9rem] lg:[.9rem] text-[.79rem]">Effortless screen recording for everyone, record</p>
              <p className="text-[#616163] xl:text-[.9rem] lg:[.9rem] text-[.79rem]">with ease, no tech experience required</p>
            </article>
          </div >
          <div className="flex mt-8 gap-1">
            <img src={f2} alt="screen" className="w-[1.4rem] h-[1.6rem]"/>
            <article>
              <h2 className="xl:text-2xl lg:text-2xl text-[1.3rem] font-bold text-[#1B233D]">Easy-to-Share URL</h2>
              <p className="text-[#616163] xl:text-[.9rem] lg:[.9rem] text-[.79rem]">Share your recordings instantly with a single link.</p>
              <p className="text-[#616163] xl:text-[.9rem] lg:[.9rem] text-[.79rem]">No attachments, no downloads.</p>
            </article>
          </div>
          <div className="flex mt-8 gap-1">
            <img src={f3} alt="screen" className="w-[1.4rem] h-[1.6rem]"/>
            <article>
              <h2 className="xl:text-2xl lg:text-2xl text-[1.3rem] font-bold text-[#1B233D]">Revisit Recordings</h2>
              <p className="text-[#616163] xl:text-[.9rem] lg:[.9rem] text-[.79rem]">Access and review your past content effortlessly.</p>
              <p className="text-[#616163] xl:text-[.9rem] lg:[.9rem] text-[.79rem]">Your recordings, always at your fingertips.</p>
            </article>
          </div>
        </div>
        <div className="xl:w-full lg:w-full xl:ml-[7rem] md:w-[50rem] h-[67rem]">
        <img src={f4} alt="video repo" />
      </div>
      </main>
      
    </div>
  );
};

export default Features;
