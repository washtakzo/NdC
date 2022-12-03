import Head from "next/head";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AdvantagesSection from "../components/Index/AdvantagesSection";
import CategoriesSection from "../components/Index/CategoriesSection";
import InstagramSection from "../components/Index/InstagramSection";
import PopularProductsSection from "../components/Index/PopularProductsSection";
import PresentationSection from "../components/Index/PresentationSection";
import PunchySection from "../components/Index/PunchySection";
import QuestionsSection from "../components/Index/QuestionsSection";
import AnimatedBackground from "../components/UI/AnimatedBackground";

export default function Home() {
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
        <PresentationSection />
        <PunchySection />
        <CategoriesSection />
        <PopularProductsSection />
        <AdvantagesSection />
        <QuestionsSection />
        <InstagramSection />
      </main>
      <Footer />
      <Copyright />
    </>
  );
}
