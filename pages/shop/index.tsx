import React from "react";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AdvantagesSection from "../../components/Index/AdvantagesSection";
import QuestionsSection from "../../components/Index/QuestionsSection";
import Main from "../../components/Main";
import ShopBanner from "../../components/Shop/ShopBanner";
import ShopSection from "../../components/Shop/ShopSection";
import AnimatedBackground from "../../components/UI/AnimatedBackground";

const shop = () => {
  return (
    <>
      <AnimatedBackground />
      <Main>
        <Header />
        <ShopBanner />
        <ShopSection />
        <AdvantagesSection />
        <QuestionsSection />
      </Main>
      <Footer />
      <Copyright />
    </>
  );
};

export default shop;
