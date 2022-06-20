import Head from "next/head";
import { useEffect, useState } from "react";
import FindBox from "../components/comps/FindBox";
import Hero from "../components/comps/Hero";
import VideoBox from "../components/comps/VideoBox";
import Service from "../components/comps/Service";
import Latest from "../components/comps/Latest";
import Layout from "../components/Layout";

export default function Home() {
  const [winWidth, setWinWidth] = useState(0);
  const handleWidth = () => {
    setWinWidth(window.innerWidth);
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  useEffect(() => {
    setWinWidth(window.innerWidth);
  }, []);
  return (
    <Layout>
      <Hero />
      <FindBox />
      <Service />
      <VideoBox />
      <Latest view={winWidth} />
    </Layout>
  );
}

Home.layouts = Layout;
