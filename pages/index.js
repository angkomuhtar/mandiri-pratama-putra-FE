import Head from "next/head";
import { useEffect, useState } from "react";
import Hero from "../components/layouts/Hero";
import Navbar from "../components/layouts/Navbar";

export default function Home() {
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
    <div>
      <Head>
        <title>MPP Property</title>
        <meta name='description' content='Mandiri Pratama Putra' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='relative'>
        <Navbar offsetY={scrollPosition} />
        <Hero />
      </main>
    </div>
  );
}
