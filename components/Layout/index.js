import React, { useEffect, useState } from "react";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";

const index = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [winWidth, setWinWidth] = useState(0);
  const handleWidth = () => {
    setWinWidth(window.innerWidth);
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setWinWidth(window.innerWidth);
  }, []);
  return (
    <>
      <main className='relative'>
        <Navbar offsetY={scrollPosition} />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default index;
