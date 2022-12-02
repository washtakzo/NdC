import Head from "next/head";
import { useEffect, useState } from "react";
import Categorie from "../components/Categorie";
import Header from "../components/Header";
import LargeButton from "../components/LargeButton";
import Paralax from "../components/Paralax";
import PopularProduct from "../components/PopularProduct";
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
      <main className="pt-40 sm:pt-52">
        <Header />
        <section className="relative max-w-[2000px] mx-auto h-[80vh]">
          <div className="flex justify-end px-4">
            <img
              className="aspect-[9/16] object-cover min-h-[220px] h-[28vw]  max-h-[600px]"
              src="https://assets.website-files.com/601835c0c88eb62d2fa657a1/6019880417e04655dd17e50b_leisara-imZnpDXSNVA-unsplash.jpg"
              alt=""
            />
          </div>
          <Paralax
            className="absolute -z-10 top-[30%] md:top-[20%]"
            scrollY={scrollY}
            paralaxSpeed={40}
            scrollStartingPoint={1}
          >
            <img
              className="aspect-[12/16] object-cover min-h-[280px] max-h-[1600px] h-[54vw]"
              src="https://assets.website-files.com/60153bc9d8840978bfd8963b/60171b4ee5da29b83ff7bf6e_kevin-laminto-Wac13Oopo34-unsplash.jpg"
              alt=""
            />
          </Paralax>
          <h2 className="top-[24%] lg:top-[25%] xl:top-[5%] left-[25%] absolute text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl max-w-[900px] font-serif">
            Framy Is A Fashion Lifestyle Template
          </h2>
          <LargeButton className="absolute left-0 right-0 bottom-[10%]">
            SHOP COLLECTIONS
          </LargeButton>
        </section>
        <section className="relative max-w-[2000px] mx-auto h-[80vh] lg:h-screen flex justify-center items-center ">
          <h2 className="font-serif px-4 text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center max-w-[800px] mx-auto  leading-[70px]  sm:leading-[80px] md:leading-[90px] lg:leading-[100px] xl:leading-[120px]">
            With Framy You Can Sell Clothes, Shoes, Accessories, Jewelry, You
            Name It!
          </h2>
        </section>
        <section>
          <Categorie
            scrollY={scrollY}
            paralaxSpeed={40}
            scrollStartingPoint={1260}
          />
          <Categorie
            scrollY={scrollY}
            paralaxSpeed={40}
            scrollStartingPoint={2460}
          />
          <Categorie
            scrollY={scrollY}
            paralaxSpeed={40}
            scrollStartingPoint={3660}
          />
        </section>
        <section
          className="p-4 text-center bg-secondary border-t-[1px] border-b-[1px] border-black
        "
        >
          <h2 className="font-serif text-5xl leading-[60px] my-8">
            Popular Products
          </h2>
          <div className="grid md:grid-cols-2 space-x-14">
            <PopularProduct
              image="https://assets.website-files.com/601835c0c88eb62d2fa657a1/60199122d5c8861512defdfc_liana-mikah-jbqX046ww8I-unsplash-p-500.jpeg"
              title="Vegan Leather Blue Bag"
              price={200}
            />
            <PopularProduct
              image="https://assets.website-files.com/601835c0c88eb62d2fa657a1/6019880417e04655dd17e50b_leisara-imZnpDXSNVA-unsplash.jpg"
              title="Vegan Leather Blue Bag"
              price={200}
            />
            <PopularProduct
              image="https://assets.website-files.com/601835c0c88eb62d2fa657a1/6019880417e04655dd17e50b_leisara-imZnpDXSNVA-unsplash.jpg"
              title="Vegan Leather Blue Bag"
              price={200}
            />
          </div>
        </section>
      </main>
    </>
  );
}
