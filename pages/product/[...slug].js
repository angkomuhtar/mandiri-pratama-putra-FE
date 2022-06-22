import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiBath } from "react-icons/bi";
import {
  IoBedOutline,
  IoCallOutline,
  IoHomeOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoMailOutline,
  IoPlay,
  IoRibbonOutline,
  IoSchoolOutline,
  IoSendSharp,
  IoStorefrontOutline,
} from "react-icons/io5";
import DescSection from "../../components/comps/DescSection";
import PageHeader from "../../components/comps/PageHeader";
import InputForm from "../../components/elements/InputForm";
import Layout from "../../components/Layout";
import plans from "../../public/plans.png";

const Index = () => {
  const [typeActive, setTypeActive] = useState(0);
  const router = useRouter();
  const slug = router.query.slug || [];
  console.log(slug);
  const type = [{ type: "45/90" }, { type: "32/64" }];

  return (
    <Layout>
      <PageHeader
        title={slug[0]}
        desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      />
      <div className='min-h-screen bg-[#f7f7f9]'>
        <div className='container flex flex-col justify-center space-y-8 py-10'>
          <div className='rounded-full bg-orange-400/40 px-4 py-2 self-start'>
            <p className='font-light text-sm text-orange-600'>
              Product details
            </p>
          </div>
          <h2 className='font-bold text-4xl'>Bumi Findaria Mas</h2>
          <p className='flex text-orange-500 items-center'>
            <IoLocationOutline size={16} className='mr-2' />
            Makassar, Tallasalapang
          </p>
          <div className='flex space-x-4'>
            <div className='w-2/3 space-y-8'>
              <DescSection title='deskripsi'>
                <p className='font-light leading-loose'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores incidunt deleniti deserunt est qui ratione voluptatum
                  non ducimus! Quod rem doloribus iste ea recusandae dolorum
                  itaque accusamus iusto natus veritatis?
                </p>
              </DescSection>

              <DescSection title='Keunggulan'>
                <div className='grid grid-cols-2 gap-4 p-6'>
                  <p className='font-light text-sm flex items-center'>
                    <IoSchoolOutline
                      size={26}
                      className='mr-4 text-orange-500'
                    />
                    Dekat Dari Pusat Kota
                  </p>
                  <p className='font-light text-sm flex items-center'>
                    <IoSchoolOutline
                      size={26}
                      className='mr-4 text-orange-500'
                    />
                    Dekat Dari Pusat Kota
                  </p>
                  <p className='font-light text-sm flex items-center'>
                    <IoSchoolOutline
                      size={26}
                      className='mr-4 text-orange-500'
                    />
                    Dekat Dari Pusat Kota
                  </p>
                  <p className='font-light text-sm flex items-center'>
                    <IoSchoolOutline
                      size={26}
                      className='mr-4 text-orange-500'
                    />
                    Dekat Dari Pusat Kota
                  </p>
                </div>
              </DescSection>
              <div className=''>
                <div className='flex space-x-8'>
                  {type.length > 0 &&
                    type.map((data, key) => {
                      return (
                        <a
                          key={key}
                          href='#'
                          onClick={(e) => {
                            e.preventDefault();
                            setTypeActive(key);
                          }}
                          className={` ${
                            key == typeActive
                              ? "border-orange-500"
                              : "border-transparent"
                          }  border-b-2 relative pb-2 transform duration-200`}>
                          <h2
                            className={`font-light text-sm ${
                              typeActive == key && "text-orange-500"
                            } capitalize`}>
                            type {data.type}
                          </h2>
                          <div
                            className={`${
                              key != typeActive && "hidden"
                            } rounded-full p-0.5 bg-orange-500 border-4 border-[#f7f7f9] absolute -bottom-[7px] left-0 right-0 w-0.5 mx-auto`}></div>
                        </a>
                      );
                    })}
                </div>
                <div className='py-5 space-y-6'>
                  <DescSection title='Property Details'>
                    <div className='bg-gray-200 p-4 mt-4'>
                      <p className='font-light leading-relaxed'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Mollitia doloribus beatae saepe praesentium, odit
                        tempore eveniet dolores inventore. Sint nobis dolorum
                        quaerat mollitia facere accusantium rerum explicabo
                        blanditiis esse consectetur?
                      </p>
                      <div className='grid grid-cols-3 my-4 gap-4'>
                        <p className='font-light text-sm flex items-center'>
                          <IoSchoolOutline
                            size={26}
                            className='mr-4 text-orange-500'
                          />
                          3 Kamar Utama
                        </p>

                        <p className='font-light text-sm flex items-center'>
                          <IoSchoolOutline
                            size={26}
                            className='mr-4 text-orange-500'
                          />
                          3 Kamar Mandi
                        </p>

                        <p className='font-light text-sm flex items-center'>
                          <IoSchoolOutline
                            size={26}
                            className='mr-4 text-orange-500'
                          />
                          Luas Tanah 90 m
                        </p>
                        <p className='font-light text-sm flex items-center'>
                          <IoSchoolOutline
                            size={26}
                            className='mr-4 text-orange-500'
                          />
                          Luas Bangunan 90 m
                        </p>

                        <p className='font-light text-sm flex items-center'>
                          <IoSchoolOutline
                            size={26}
                            className='mr-4 text-orange-500'
                          />
                          Free kanopi
                        </p>
                      </div>
                    </div>
                  </DescSection>
                  <DescSection title='Foto & Galeri'></DescSection>
                  <DescSection title='Denah Bangunan'>
                    <div className='w-full py-5'>
                      <Image
                        src={plans}
                        layout='responsive'
                        className='object-cover'
                      />
                    </div>
                  </DescSection>
                </div>
              </div>
            </div>
            <div className='flex-1 border sticky top-20 self-start p-4'>
              <h2 className='font-semibold text-lg border-l-2 border-orange-500 pl-4 capitalize'>
                Let me Call you
              </h2>
              <div className='py-4 space-y-5'>
                <InputForm display='Nama' name='name' />
                <InputForm display='Telp' name='telp' />
                <InputForm display='Alamat' name='addr' />
                <button className='bg-green-600 text-white rounded-r-sm px-3 group w-full p-4 flex justify-center items-center text-lg font-light'>
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Index.layouts = Layout;

export default Index;
