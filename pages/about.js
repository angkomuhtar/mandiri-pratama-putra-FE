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
import PageHeader from "../components/comps/PageHeader";
import TeamCard from "../components/elements/TeamCard";
import Layout from "../components/Layout";
import Photo from "../public/photo.jpg";
import ApiConfig from "../utils/ApiConfig";

const About = ({ teams, abouts }) => {
  const aboutData = abouts.data[0].attributes;
  console.log(aboutData);
  return (
    <Layout>
      <PageHeader
        title='Tentang Kami'
        desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      />
      <div className='min-h-screen bg-[#f7f7f9] flex flex-col justify-center '>
        <div className='container flex flex-col md:flex-row justify-between items-center'>
          <div className='w-full md:w-3/5 flex justify-center items-center p-10'>
            <div className='relative p-3 bg-white rounded-md w-full md:w-2/3 h-auto shadow-lg shadow-slate-400'>
              <Image
                src={Photo}
                alt='photo'
                layout='responsive'
                className='object-center'
              />
              <div className='absolute -left-16 bottom-20 bg-home w-64 h-40 rounded-md shadow-md shadow-gray-500/50 bg-center flex justify-center items-center'>
                <button className='relative '>
                  <div className='h-14 w-14 rounded-full bg-orange-400 animate-ping absolute top-0'></div>
                  <div className='h-14 w-14 flex justify-center items-center animate-none bg-orange-600 rounded-full cursor-pointer text-white'>
                    <IoPlay size={24} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className='flex-1 flex flex-col space-y-5 py-5'>
            <div className='rounded-full bg-orange-400/40 px-4 py-1 self-start'>
              <p className='font-light text-sm text-orange-600'>About</p>
            </div>
            <h2 className='font-bold text-4xl'>{aboutData.title}</h2>
            <p className='font-thin leading-relaxed text-lg'>
              {aboutData.desc}
            </p>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex space-x-3 items-center '>
                <div className='p-3 rounded-full bg-orange-100 flex justify-center items-center text-orange-600'>
                  <IoSchoolOutline size={24} />
                </div>
                <p className='font-thin text-sm'> pelayanan</p>
              </div>
              <div className='flex space-x-3 items-center '>
                <div className='p-3 rounded-full bg-orange-100 flex justify-center items-center text-orange-600'>
                  <IoStorefrontOutline size={24} />
                </div>
                <p className='font-thin text-sm'> pelayanan</p>
              </div>
              <div className='flex space-x-3 items-center '>
                <div className='p-3 rounded-full bg-orange-100 flex justify-center items-center text-orange-600'>
                  <IoRibbonOutline size={24} />
                </div>
                <p className='font-thin text-sm'> pelayanan</p>
              </div>
              <div className='flex space-x-3 items-center '>
                <div className='p-3 rounded-full bg-orange-100 flex justify-center items-center text-orange-600'>
                  <IoRibbonOutline size={24} />
                </div>
                <p className='font-thin text-sm'> pelayanan</p>
              </div>
            </div>
            <button className='self-center md:self-start py-4 px-7 group hover:border-l-4 hover:translate-x-2 transition-all duration-300 border-orange-600 bg-orange-600 hover:bg-black text-white font-light rounded-sm relative'>
              <div className='fixed top-0 left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full bg-black rounded-r-sm -z-10'></div>
              Produk Kami
            </button>
          </div>
        </div>
      </div>

      <div className='container flex flex-col items-center py-16 space-y-4'>
        <div className='rounded-full bg-orange-400/40 px-4 py-1'>
          <p className='font-light text-sm text-orange-600'>Teams</p>
        </div>
        <h2 className='font-bold text-4xl text-center'>Our Hilarious Teams</h2>
        <div className='w-full grid md:grid-cols-3 gap-10 py-10'>
          {teams.data.map((data, key) => (
            <TeamCard
              key={key}
              image={`https://mpp-api.herokuapp.com${data.attributes.image.data.attributes.url}`}
              height={data.attributes.image.data.attributes.height}
              width={data.attributes.image.data.attributes.width}
              nama={data.attributes.Nama}
              position={data.attributes.position}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const apiTeams = await ApiConfig("teams?populate=*");
  const teams = apiTeams.data;
  const apiAbouts = await ApiConfig("/abouts?populate=*");
  const abouts = apiAbouts.data;
  return {
    props: {
      teams,
      abouts,
    },
  };
}

About.layouts = Layout;

export default About;
