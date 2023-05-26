import Head from "next/head";
import HeroSection from "@/components/landingPage/HeroSection";
import NewNavBar from "@/components/landingPage/NewNavBar";
import BulletPointSection from "@/components/landingPage/BulletPointSection";
import ToolsSlider from "@/components/landingPage/ToolsSlider";
import About from "@/components/landingPage/About";
import Projects from "@/components/projects/Projects";
import { useState, useEffect } from "react";
import Blogs from "@/components/blogs/Blogs";
import Contact from "@/components/landingPage/Contact";
import LoadingPage from "@/components/LoadingPage";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setDimension = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", setDimension);
    setWindowWidth(window.innerWidth);
    return function () {
      window.removeEventListener("resize", setDimension);
    };
  }, []);

  const loadTimer = () => {
    setTimeout(() => setLoading(false), "1500");
  };

  return (
    <>
      <Head>
        <title>Ashton Bennett</title>
        <meta
          name="description"
          content="Ashton Bennett's Web Developer Portfolio"
          key="desc"
        />

        <meta property="og:title" content="Ashton Bennett's Portfolio" />
        <meta
          property="og:description"
          content="Access to projects, technical blogs, and information."
        />
        <meta property="og:image" content="/public/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="32x32" href="/favicon.ico" />
      </Head>
      {loading ? (
        <LoadingPage onLoad={loadTimer()} />
      ) : (
        <>
          <NewNavBar />
          <HeroSection windowWidth={windowWidth} />
          <ToolsSlider windowWidth={windowWidth} />
          <BulletPointSection />
          <About />
          <Projects windowWidth={windowWidth} />
          <Blogs />
          <Contact />
        </>
      )}
    </>
  );
}
