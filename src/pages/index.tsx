import Head from "next/head";

import Header from "@/components/common/Header";
import MainSection from "@/components/section/MainSection";
import SubSection1 from "@/components/section/SubSection1";
import SubSection2 from "@/components/section/SubSection2";

const Home = () => {
  return (
    <>
      <Head>
        <title>XOCIETY</title>
      </Head>
      <Header />
      <MainSection />
      <SubSection1 />
      <SubSection2 />
    </>
  );
};

export default Home;
