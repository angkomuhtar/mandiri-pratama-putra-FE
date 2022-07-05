import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
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
  IoBookmarksOutline,
  IoSendSharp,
  IoCheckmarkDone,
} from "react-icons/io5";
import DescSection from "../../components/comps/DescSection";
import PageHeader from "../../components/comps/PageHeader";
import InputForm from "../../components/elements/InputForm";
import Layout from "../../components/Layout";
import plans from "../../public/plans.png";
import ApiCall from "../../utils/ApiConfig";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3,
  },
];

const Index = ({ product }) => {
  const [typeActive, setTypeActive] = useState(0);
  const router = useRouter();
  console.log(product);
  const data = product.attributes;
  const { product_features, types } = product.attributes;

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout>
      <PageHeader title={data.Name} desc='Products / Details' />
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
            {data.city}, {data.Alamat}
          </p>
          <div className='flex flex-col md:flex-row space-x-0 md:space-x-4'>
            <div className='w-full md:w-2/3 space-y-8'>
              <DescSection title='deskripsi'>
                <p className='font-light leading-loose'>{data.desc}</p>
              </DescSection>

              <DescSection title='Keunggulan'>
                <div className='grid grid-cols-2 gap-4 p-6'>
                  {product_features.data.map((product_features) => (
                    <p className='font-light text-sm flex items-center'>
                      <IoBookmarksOutline
                        size={26}
                        className='mr-4 text-orange-500'
                      />
                      {product_features.attributes.title}
                    </p>
                  ))}
                </div>
              </DescSection>
              <div className=''>
                <div className='flex space-x-8'>
                  {types.data.map(({ attributes }, key) => {
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
                          type {attributes.type}
                        </h2>
                        <div
                          className={`${
                            key != typeActive && "hidden"
                          } rounded-full p-0.5 bg-orange-500 border-4 border-[#f7f7f9] absolute -bottom-[7px] left-0 right-0 w-0.5 mx-auto`}></div>
                      </a>
                    );
                  })}
                </div>
                <div className='flex relative'>
                  {types.data.map(({ attributes }, key) => (
                    <div
                      key={key}
                      className={`py-5 space-y-6 w-full ${
                        typeActive == key ? "" : "hidden"
                      }`}>
                      <DescSection title='Property Details'>
                        <div className='bg-gray-200 p-4 mt-4'>
                          <p className='font-light leading-relaxed'>
                            {attributes.details}
                          </p>
                          <div className='grid grid-cols-3 my-4 gap-4'>
                            {attributes.features.split(",").map((data) => (
                              <p className='font-light text-sm flex items-center'>
                                <IoCheckmarkDone
                                  size={26}
                                  className='mr-4 text-orange-500'
                                />
                                {data}
                              </p>
                            ))}
                          </div>
                        </div>
                      </DescSection>
                      <DescSection title='Foto & Galeri'>
                        <Gallery photos={photos} onClick={openLightbox} />
                        <ModalGateway>
                          {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                              <Carousel
                                currentIndex={currentImage}
                                views={photos.map((x) => ({
                                  ...x,
                                  srcset: x.srcSet,
                                  caption: x.title,
                                }))}
                              />
                            </Modal>
                          ) : null}
                        </ModalGateway>
                      </DescSection>
                      <DescSection title='Denah Bangunan'>
                        <div className='w-full py-5'>
                          <Image
                            alt=''
                            src={plans}
                            layout='responsive'
                            className='object-cover'
                          />
                        </div>
                      </DescSection>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='w-full flex-1 border sticky top-28 self-start p-4'>
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

export async function getServerSideProps({ params }) {
  const [slug, id] = params.slug;
  const apiProduct = await ApiCall(`products/${id}/?populate=*`);
  const product = apiProduct.data.data;
  return {
    props: {
      product,
    },
  };
}

Index.layouts = Layout;

export default Index;
