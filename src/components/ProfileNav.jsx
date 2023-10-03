import Logo from "../components/logo";
import { useRef } from "react";
import profileImg from "../images/profile-circle.png";
import arrow  from "../images/arrow-down.png";

const ProfileNav = () => {
    const componentRef = useRef(null);
  return (
    <div ref={componentRef} className=" mb-[5rem] text-[#100A42]">
        <nav className="bg-white py-4 w-full top-0 fixed z-10 flex shadow-md hover:shadow-xl px-1 hover:bg-blue-100">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <Logo />
              <div className="responsive font-semibold flex gap-4"></div>

              <div className=" flex font-bold">
                <img
                  src={profileImg}
                  alt="profileImg"
                  className="w-[1.3rem] h-[1.4rem]"
                />
                <h1 className="flex pr-2">Mark john <img
                src={arrow}
                alt="profileImg"
                className="w-[1rem] pt-1 h-[1.5rem] "
              /></h1>
              </div>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default ProfileNav
