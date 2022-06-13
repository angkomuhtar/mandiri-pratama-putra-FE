import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Hero from "../components/layouts/Hero";
import Navbar from "../components/layouts/Navbar";
import appLogo from "../public/mppLogo.png";
import { IoClose, IoMenu } from "react-icons/io5";
import NavList from "../components/elements/navList";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
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
