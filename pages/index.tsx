import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Paralax from "../components/Paralax";
import AnimatedBackground from "../components/UI/AnimatedBackground";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  console.log(scrollY);

  const scrollListener = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* ---Fonts--- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Poppins:wght@100;200;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <AnimatedBackground />
      <main className="pt-52">
        <Header />
        {/* TEST DIV */}
        <section className="relative max-w-[2000px] mx-auto">
          <div className="flex justify-end px-4">
            <img
              className="aspect-[9/16] object-cover min-h-[340px] h-[28vw]  max-h-[600px]"
              src="https://assets.website-files.com/601835c0c88eb62d2fa657a1/6019880417e04655dd17e50b_leisara-imZnpDXSNVA-unsplash.jpg"
              alt=""
            />
          </div>
          <Paralax
            className="mt-40 relative md:mt-0 lg:-mt-20 xl:-mt-96"
            scrollY={scrollY}
            paralaxSpeed={40}
            scrollStartingPoint={1}
          >
            <img
              className="aspect-[12/16] object-cover min-h-[520px] max-h-[1600px] h-[54vw]"
              src="https://assets.website-files.com/60153bc9d8840978bfd8963b/60171b4ee5da29b83ff7bf6e_kevin-laminto-Wac13Oopo34-unsplash.jpg"
              alt=""
            />
          </Paralax>
          <h2 className="top-[50%] left-[25%] absolute text-5xl">
            Framy Is A Fashion Lifestyle Template
          </h2>
          <Paralax
            className="relative"
            scrollY={scrollY}
            paralaxSpeed={1500}
            scrollStartingPoint={1}
          >
            <button className="w-[80%] mx-auto bg-red-200 block">
              SHOP COLLECTIONS
            </button>
          </Paralax>
        </section>
        <div className="h-[200vh] w-8">
          <div className="w-80 h-80 bg-red-600 my-12">test</div>
          <div className="w-80 h-80 bg-red-600 my-12">azerty</div>
          <div className="w-80 h-80 bg-red-600 my-12">123132</div>
        </div>
      </main>
    </>
  );
}
