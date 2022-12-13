import React, { useState } from "react";
import { useRouter } from "next/router";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import AdvantagesSection from "../../components/Index/AdvantagesSection";
import QuestionsSection from "../../components/Index/QuestionsSection";
import Main from "../../components/Main";
import ShopBanner from "../../components/Shop/ShopBanner";
import ShopSection from "../../components/Shop/ShopSection";
import AnimatedBackground from "../../components/UI/AnimatedBackground";
import { Categories } from "../../helper/types";
import { capitalize } from "../../helper/functions";

//FIXME: on page reload the default product is no longueur taken

const Shop = () => {
  const router = useRouter();
  const defaultCategorie =
    (router.query.categorie as Categories) || Categories.ALL;
  const [bannerTitle, setBannerTitle] = useState(defaultCategorie);

  const categorieChangeHandler = (categorie: Categories) => {
    setBannerTitle(categorie);
  };

  return (
    <>
      <AnimatedBackground />
      <Main>
        <ShopBanner title={capitalize(bannerTitle)} />
        <ShopSection
          defaultCategorie={defaultCategorie}
          onCategorieChange={categorieChangeHandler}
        />
        <AdvantagesSection />
        <QuestionsSection />
      </Main>
      <Footer />
      <Copyright />
    </>
  );
};

export default Shop;
