import Head from "next/head";
import { useEffect, useState } from "react";
import FindBox from "../components/comps/FindBox";
import Hero from "../components/comps/Hero";
import VideoBox from "../components/comps/VideoBox";
import Service from "../components/comps/Service";
import Latest from "../components/comps/Latest";
import Layout from "../components/Layout";
import ApiCall from "../utils/ApiConfig";

export default function Home({ mainFeatures, heroes, products }) {
  const [winWidth, setWinWidth] = useState(0);
  const handleWidth = () => {
    setWinWidth(window.innerWidth);
  };
  console.log("produk", products.data);

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
      <Hero data={heroes.data[0].attributes} />
      {/* <FindBox /> */}
      <Service data={mainFeatures.data} />
      <VideoBox />
      <Latest view={winWidth} data={products.data} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const apiHero = await ApiCall("heroes");
  console.log(apiHero);
  const heroes = apiHero.data;
  const apiMainFeature = await ApiCall("main-features?populate=*");
  const mainFeatures = apiMainFeature.data;

  const apiProduct = await ApiCall("products?populate=*");
  const products = apiProduct.data;
  return {
    props: {
      heroes,
      mainFeatures,
      products,
    },
  };
}

Home.layouts = Layout;
