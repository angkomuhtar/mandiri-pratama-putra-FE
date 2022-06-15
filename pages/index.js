import Head from "next/head";
import { useEffect, useState } from "react";
import FindBox from "../components/layouts/FindBox";
import Hero from "../components/layouts/Hero";
import Navbar from "../components/layouts/Navbar";
import VideoBox from "../components/layouts/VideoBox";
import Service from "../components/layouts/Service";
import Latest from "../components/layouts/Latest";
import Footer from "../components/layouts/Footer";

export default function Home() {
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

  console.log("Hello", winWidth);
  return (
    <div>
      <Head>
        <title>MPP Property</title>
        <meta name='description' content='Mandiri Pratama Putra' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='relative'>
        <Navbar offsetY={scrollPosition} />
        <Hero />
        <FindBox />
        <Service />
        <VideoBox />
        <Latest view={winWidth} />
      </main>
      <Footer />
    </div>
  );
}
