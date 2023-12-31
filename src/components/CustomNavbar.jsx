import React, { useState, useEffect, useRef } from 'react';

import ScrollToSection from './ScrollToSection ';

import Logo from './logo';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const componentRef = useRef(null);

 

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

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
    window.addEventListener('scroll', showSidebarOnScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', showSidebarOnScroll);
    };
  }, []);

  // Event listener to close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToFeatures = () => {
    const featuresElement = document.getElementById('features');
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={componentRef} className=' mb-[5rem] text-[#100A42]'>
      
        <nav className="bg-white py-4 w-full top-0 fixed z-10 flex shadow-md hover:shadow-xl px-1 hover:bg-blue-100">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <Link to={"/landing"}><Logo/></Link>
              <div className="responsive font-semibold flex gap-4">
              <ScrollToSection to="#features">
                <h1>Features</h1>
              </ScrollToSection> 
              <ScrollToSection to="#howItWorks">
              <h1>How It Works</h1>
              </ScrollToSection> 
                
              </div>

              <div className=' font-bold text-2xl'>
               <Link to={"/login"}><h1>Get Started</h1> </Link> 
              </div>
             
            </div>
          </div>
        </nav>
      
    </div>
  );
};

export default SideBar;
