import Header from "@/components/common/Header";
import MainSection from "@/components/section/MainSection";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>XOCIETY</title>
      </Head>
      <Header />
      <MainSection />
    </>
  );
};

export default Home;
