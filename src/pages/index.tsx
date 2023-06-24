import Head from "next/head";

import Header from "@/components/common/Header";
import MainSection from "@/components/sections/MainSection";
import SubSection1 from "@/components/sections/SubSection1";
import SubSection2 from "@/components/sections/SubSection2";
import SubSection3 from "@/components/sections/SubSection3";
import SubSection4 from "@/components/sections/SubSection4";
import SubSection5 from "@/components/sections/SubSection5";
import SubSection6 from "@/components/sections/SubSection6";

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
      <SubSection3 />
      <SubSection4 />
      <SubSection5 />
      <SubSection6 />
    </>
  );
};

export default Home;
