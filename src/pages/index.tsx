import Head from "next/head";
import { Fragment } from "react";

import { SUB_SECTION_ITEMS } from "@/constants/constants";

import Header from "@/components/common/Header";
import MainSection from "@/components/sections/MainSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>XOCIETY</title>
      </Head>
      <Header />
      <MainSection />
      {SUB_SECTION_ITEMS.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </>
  );
};

export default Home;
