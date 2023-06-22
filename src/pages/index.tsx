import Header from "@/components/common/Header";
import MainSection from "@/components/section/MainSection";
import SubSection from "@/components/section/SubSection";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>XOCIETY</title>
      </Head>
      <Header />
      <MainSection />
      <SubSection />
    </>
  );
};

export default Home;
