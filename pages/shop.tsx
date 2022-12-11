import React from "react";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AdvantagesSection from "../components/Index/AdvantagesSection";
import QuestionsSection from "../components/Index/QuestionsSection";
import Main from "../components/Main";
import ShopBanner from "../components/Shop/ShopBanner";
import ShopSection from "../components/Shop/ShopSection";
import AnimatedBackground from "../components/UI/AnimatedBackground";

//TODO:Go back on top of the page at categorie click
//TODO:Change Title according to the categorie choose
//TODO:Handle Error and loading state

const shop = () => {
  return (
    <>
      <AnimatedBackground />
      <Main>
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
