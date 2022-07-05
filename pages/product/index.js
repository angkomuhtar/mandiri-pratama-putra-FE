import Image from "next/image";
import React, { useState } from "react";
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
import ApiCall from "../../utils/ApiConfig";

const Index = ({ product }) => {
  const [data, setData] = useState(product);
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
          <div className='grid md:grid-cols-3 gap-6 w-full'>
            <div className='md:col-span-3 space-x-2'>
              <button className='border border-orange-600 text-orange-600 rounded-full px-4 py-0.5 hover:text-white hover:bg-orange-600 transform duration-200'>
                All
              </button>
              <button className='border border-orange-600 text-orange-600 rounded-full px-4 py-0.5 hover:text-white hover:bg-orange-600 transform duration-200'>
                Makassar
              </button>
              <button className='border border-orange-600 text-orange-600 rounded-full px-4 py-0.5 hover:text-white hover:bg-orange-600 transform duration-200'>
                Jakarta
              </button>
            </div>
            {data.map((data, key) => (
              <ProductCard
                key={key}
                title={data.attributes.Name}
                location={`${data.attributes.Alamat}, ${data.attributes.city}`}
                path={`/product/${data.attributes.Name}/${data.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const apiProduct = await ApiCall("products?populate=*");
  const product = apiProduct.data.data;
  return {
    props: {
      product,
    },
  };
}

Index.layouts = Layout;

export default Index;
