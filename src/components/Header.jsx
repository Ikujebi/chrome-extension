import { useState } from "react";
import arrow from "../images/arrow-right.png";
import h01 from "../images/AdobeStock_400053098 1.png";
import h02 from "../images/AdobeStock_362497671 1.png";
import h03 from "../images/woman-using-smartphone-technology 2.png";
import grid from "../images/grid.136a9256d16888900db0.svg.png";
import greengrid from "../images/grid.136a9256d16888900db0.svg (1).png";

const Header = () => {
  const [loading, setloading] = useState(false);
  return (
    <div className="sora text-[#141414] flex justify-around ">
      <div>
        <div className="xl:text-[2rem] lg:text-2rem text-[1.9rem] font-bold mt-[15rem]">
          <h1>Show Them</h1>
          <h1>Don't Just Tell</h1>
        </div>
        <div className="  text-[.6rem]">
          <p className=" ">
            Help your friends and loved ones by creating and sending
          </p>
          <p>videos on how to get things done on a website</p>
        </div>
        <div className=" w-5rem">
          <button className="bg-[#120B48] hover:bg-[#2C25A2] mt-[3rem]  w-[12rem] rounded-md h-10 text-white flex items-center justify-center gap-1 text-[.8rem] ">
            Install HelpMeOut
            <img src={arrow} alt="arrow" className="mb-[.1rem] h-4" />
          </button>
        </div>
      </div>

      <div className=" flex gap-3 mt-[10rem]">
        <div>
          <img
            src={h01}
            className="mb-[.99rem] w-[14.3rem] rounded-md"
            alt="an elderly woman using the internet"
          />
          <div className=" relative">
            <img src={greengrid} alt="green GRid" className=" w-[14.4rem] rounded-md -ml-[1.8rem]" />
            <img
              src={h02}
              className=" w-[14.3rem] rounded-md absolute top-0 left-0 mt-[.5rem]"
              alt="father showing son aroun the internet"
            />
          </div>
        </div>
        <div className=" relative">
          <img src={grid} alt="grid" className=" w-[14.4rem] -mt-[2.5rem] ml-[2.85rem]" />
          <img
            src={h03}
            alt="woman-using-smartphone-technology"
            className="rounded-md w-[14.4rem] absolute top-0 left-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
