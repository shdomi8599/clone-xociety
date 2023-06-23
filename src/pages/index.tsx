import Head from "next/head";

import { SUB_SECTION_ITEMS } from "@/constants/constants";

import Header from "@/components/common/Header";
import MainSection from "@/components/section/MainSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>XOCIETY</title>
      </Head>
      <Header />
      <MainSection />
      {SUB_SECTION_ITEMS.map((item) => item)}
    </>
  );
};

export default Home;
