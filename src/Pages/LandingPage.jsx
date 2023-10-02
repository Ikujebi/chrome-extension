import { useRef, useEffect } from "react";
import Logo from "../components/logo";
import ProfileNav from "../components/ProfileNav";
import profileImg from "../images/profile-circle.png";
import line from "../images/Line 25.png";
import vid1 from "../images/video frame (1).png";
import vid2 from "../images/video frame.png";
import search from "../images/search-normal.png";
import icons from "../images/icons.png";
import arrow  from "../images/arrow-down.png";
import ScrollToSection from "../components/ScrollToSection ";

const LandingPage = () => {
  const componentRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  // Function to show the sidebar when scrolling down
  const showSidebarOnScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      setSidebarVisible(true);
      // Automatically close the sidebar after 5 seconds
      setTimeout(() => {
        closeSidebar();
      }, 5000);
    } else {
      setSidebarVisible(false);
    }
  };

  // Attach a scroll event listener to the window
  useEffect(() => {
    window.addEventListener("scroll", showSidebarOnScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", showSidebarOnScroll);
    };
  }, []);

  // Event listener to close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <ProfileNav/>
      <div className=" flex justify-around mb-4">
        <div>
          <h1 className=" text-[1.3rem] font-bold">Hello, John Mark</h1>
          <p className=" text-[.8rem]">Here are your recorded videos</p>
        </div>
        <div className="flex border-[1px] rounded-lg h-[1.9rem] ">
          <div className="flex justify-center items-center pl-1 mr-1">
            <img src={search} alt="hvbdb" className=" w-[1.1rem]  h-[1.1rem]" />
          </div>
          <input
            placeholder="Search for a particular video"
            className="bg-[#C3C3C3] h-[1.9rem] rounded-lg text-[.7rem] text-white"
          />
        </div>
      </div>
      <div></div>
      <div>
        <img src={line} alt="hvbdb" />
      </div>
      <h3>Recent files</h3>
      <div className="flex justify-around pt-[1rem]">
        <div className="border-[1px] p-4 rounded-md">
          <img src={vid2} alt="hvbdb" className=" w-[15rem]" />
          <div className=" flex justify-around mt-3">
          <div>
          <h2 className=" text-[.8rem]">How to create Facebook Ad listing</h2>
          <p className=" text-[.6rem] text-[#B6B3C6]">SEPTEMBER 23, 2023</p>
          </div>
          <img src={icons} alt="hvbdb" className=" w-[2rem] h-[1.3rem] " />
          </div>
          </div>
        <div className="border-[1px] p-4 rounded-md">
          <img src={vid1} alt="hvbdb" className=" w-[15rem]" />
          <div className=" flex justify-around mt-3">
          <div>
          <h2 className=" text-[.8rem]">How to create Facebook Ad listing</h2>
          <p className=" text-[.6rem] text-[#B6B3C6]">SEPTEMBER 23, 2023</p>
          </div> <img src={icons} alt="hvbdb" className=" w-[2rem] h-[1.3rem]" />
          </div>
          </div>
        
      </div>
      
    </div>
  );
};

export default LandingPage;
