import logoimg from "../images/Layer 1.png"

const logo = () => {
  return (
    <div className="logo w-[10rem] xl:ml-[3rem]  inline-flex justify-center gap-1">
      <img src={logoimg} alt="logo" className=" w-[2.2rem] h-[2.2rem]" />
      <h1 className=" text-[#100A42] font-bold mt-2 xl:text-[1.2rem] lg:text-[1.2rem] md:text-[.8rem]">
        HelpMeOut
      </h1>
    </div>
  );
};

export default logo;
