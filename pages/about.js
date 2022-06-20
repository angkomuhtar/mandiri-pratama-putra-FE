import React from "react";
import Hero from "../components/comps/Hero";
import PageHeader from "../components/comps/PageHeader";
import Layout from "../components/Layout";
const About = () => {
  return (
    <Layout>
      <PageHeader />
      <div className='min-h-screen bg-[#f7f7f9]'></div>
    </Layout>
  );
};

About.layouts = Layout;

export default About;
