import logoimg from "../images/whiteLogo.png"

const Footer = () => {
  return (
    <div className=' w-full h-[40svh] bg-[#120B48] text-white flex justify-around'>
      <div className="logo w-[10rem] mt-[7rem]   inline-flex justify-center gap-1">
      <img src={logoimg} alt="logo" className=" w-[2.5rem] h-[2.5rem]" />
      <h1 className="  font-bold mt-2 xl:text-[1.2rem] lg:text-[1.2rem] md:text-[.8rem]">
        HelpMeOut
      </h1>
    </div>
        <section className="mt-[6rem] flex gap-10">
          <ul className=" leading-5">
            <li className=" text-[1rem] mb-4">Menu</li>
            <li className=" text-[.8rem] mb-4 font-light">Home</li>
            <li className=" text-[.8rem] mb-4 font-light">Converter</li>
            <li className=" text-[.8rem] mb-4 font-light">How it Works</li>
          </ul>
          <ul>
            <li className=" text-[1rem] mb-4">About us</li>
            <li className=" text-[.8rem] mb-4 font-light">About</li>
            <li className=" text-[.8rem] mb-4 font-light">Contact Us</li>
            <li className=" text-[.8rem] mb-4 font-light">Privacy Policy</li>
          </ul>
          <ul>
            <li className=" text-[1rem] mb-4">Screen Record</li>
            <li className=" text-[.8rem] mb-4 font-light">Browser Window</li>
            <li className=" text-[.8rem] mb-4 font-light">Desktop</li>
            <li className=" text-[.8rem] mb-4 font-light">Application</li>
          </ul>
        </section>
    </div>
  )
}

export default Footer