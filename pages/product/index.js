import Image from "next/image";
import React from "react";
import {
  IoCallOutline,
  IoLogoFacebook,
  IoMailOutline,
  IoPlay,
  IoRibbonOutline,
  IoSchoolOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
import PageHeader from "../../components/comps/PageHeader";
import ProductCard from "../../components/comps/ProductCard";
import TeamCard from "../../components/elements/TeamCard";
import Layout from "../../components/Layout";
import Photo from "../../public/property.jpg";

const Index = () => {
  return (
    <Layout>
      <PageHeader
        title='Product'
        desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      />
      <div className='min-h-screen bg-[#f7f7f9]'>
        <div className='container flex flex-col justify-center items-center space-y-8 py-10'>
          <div className='rounded-full bg-orange-400/40 px-4 py-2'>
            <p className='font-light text-sm text-orange-600'>Products</p>
          </div>
          <h2 className='font-bold text-4xl'>Our Property</h2>
          <div className='grid grid-cols-3 gap-6 w-full'>
            <ProductCard
              title='Bumi Findaria Mas'
              location='Patalassang, Makassar'
              path='/product/Bumi Findaria Mas/123'
            />
            <ProductCard
              title='Bumi Findaria Mas 2'
              location='Patalassang, Makassar'
            />
            <ProductCard
              title='Bumi Findaria Mas 2'
              location='Patalassang, Makassar'
            />
            <ProductCard
              title='Bumi Findaria Mas 2'
              location='Patalassang, Makassar'
            />
            <ProductCard
              title='Bumi Findaria Mas 2'
              location='Patalassang, Makassar'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

Index.layouts = Layout;

export default Index;
