import React from "react";
import "../App.css";
import f1 from "../images/record-circle.png";
import f2 from "../images/send-2.png";
import f3 from "../images/refresh-square-2.png";

const Features = () => {
  return (
    <div className=" sora text-[#141414] ">
      <header className="flex flex-col justify-center items-center mt-[3rem] text-[#141414]">
        <h1 className=" text-2xl font-bold">Features</h1>
        <p className="text-[#141414] text-[.79rem]">
          Key Highlioghts of Our Extension
        </p>
      </header>
      <main>
        <div>
          <div className="flex">
            <img src={f1} alt="screen" className="w-[2.5rem]"/>
            <article>
                <h2>Simple Screen Recording</h2>
                <p>Effortless screen recording for everyone,rocord</p>
                <p>with ease, no tech experience required</p>
            </article>
          </div>
          <div className="flex">
            <img src={f2} alt="screen" />
            <article>
                <h2>Easy-to-Share URL</h2>
                <p>Share your recordings instantly with a single link.</p>
                <p>No attachments, no downloads.</p>
            </article>
          </div>
          <div className="flex">
            <img src={f3} alt="screen" />
            <article>
                <h2>Revisit Recordings</h2>
                <p>Access and review your past content effortlessly.</p>
                <p>Your recordings, always at your fingertips.</p>
            </article>
          </div>
         
        </div>
      </main>
    </div>
  );
};

export default Features;
