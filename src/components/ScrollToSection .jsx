import React from 'react';
import { Link } from 'react-router-dom';

const ScrollToSection = ({ to, children }) => {
  const scrollToSection = () => {
    const section = document.querySelector(to);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link to={to} onClick={scrollToSection}>
      {children}
    </Link>
  );
};

export default ScrollToSection;
