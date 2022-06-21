import React, { useEffect, useState } from "react";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";

const Index = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

export default Index;
