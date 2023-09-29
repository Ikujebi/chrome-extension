import V1 from "../images/Vector (1).png";
import V2 from "../images/Vector (6).png";
import V3 from "../images/Vector (3).png";
import V4 from "../images/Vector (4).png";
import V5 from "../images/Vector (5).png";

const HowItWorks = () => {
  return (
    <div
      className=" h-[99svh] flex flex-col bg-white  mt-[3rem] pt-[6rem] items-center "
      id="howItWorks"
    >
      <header className=" text-[#141414] pb-[3rem]">
        <h1 className=" text-[#141414] text-[1.8rem] font-bold "> How it works</h1>
      </header>
      <main className=" flex xl:gap-[4rem] text-[.82rem] lg:gap-[4rem] gap-[2rem] ">
        <section className="text-[#616163]  flex flex-col justify-center items-center">
          <div className=" bg-[#1B233D]  text-white h-[1.5rem] w-[1.5rem]  rounded-[20px] flex justify-center items-center">
            1
          </div>
          <article className=" flex flex-col justify-center items-center">
            <h2 className=" text-[1.1rem] font-semibold text-[#1B233D]">Record Screen</h2>
            <p>Click the "Start Recording" button in</p>
            <p>our extension. choose which part</p>
            <p>of your screen to capture and who</p>
            <p>you want to send it to.</p>
          </article>
          <div className=" h-[11rem] w-[16rem] mt-5 rounded-t-2xl shadow-md">
            <div className=" flex justify-between mx-[1rem] pt-3">
              <div className=" flex gap-1">
                <img src={V3} alt="vector" className=" w-[.7rem] h-[.7rem]" />
                <img src={V4} alt="vector" className=" w-[.7rem] h-[.7rem]" />
                <img src={V3} alt="vector" className=" w-[.7rem] h-[.7rem]" />
              </div>
              <div className=" flex gap-3">
                <img src={V5} alt="df" className=" w-[.87rem] h-[.87rem]" />
                <p className=" text-[.7rem] font-semibold">03:51</p>
              </div>
            </div>
            <div className=" flex justify-center items-center"><div className="mt-3 w-[14rem] h-[2px] bg-[#1B233D08]">
                
                </div>
                </div>
          </div>
        </section>
        <section className="text-[#616163] flex flex-col justify-center items-center">
          <div className=" bg-[#1B233D]  text-white h-[1.5rem] w-[1.5rem]  rounded-[20px] flex justify-center items-center">
            2
          </div>
          <article className=" flex flex-col justify-center items-center">
            <h2 className=" text-[1.1rem] font-semibold text-[#1B233D]">Share Your Recording</h2>
            <p>We generate a shareable link for</p>
            <p>your video. Simply send it to your</p>
            <p>audience via email or copy the link</p>
            <p>to send via any platform.</p>
          </article>
        </section>
        <section className="text-[#616163] flex flex-col justify-center items-center">
          <div className=" bg-[#1B233D]  text-white h-[1.5rem] w-[1.5rem]  rounded-[20px] flex justify-center items-center">
            3
          </div>
          <article className=" flex flex-col justify-center items-center">
            <h2 className=" text-[1.1rem] font-semibold text-[#1B233D]">Learn Effortlessly</h2>
            <p>Recipients can access your video</p>
            <p>effortlessly through the provided</p>
            <p>link, with our user-friendly interface</p>
            <p>suitable for everyone.</p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default HowItWorks;
