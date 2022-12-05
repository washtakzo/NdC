import { useRouter } from "next/router";
import React from "react";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AdvantagesSection from "../../components/Index/AdvantagesSection";
import QuestionsSection from "../../components/Index/QuestionsSection";
import Main from "../../components/Main";
import ProductDetailSection from "../../components/Product/ProductDetailSection";
import { DUMMY_PRODUCTS } from "../../helper/dummy";

const Product = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const product = DUMMY_PRODUCTS.find((product) => product.id === productId);

  return (
    <>
      <Main className="bg-primary">
        <Header />
        <ProductDetailSection product={product} />
        <AdvantagesSection />
        <QuestionsSection />
        <Footer />
        <Copyright />
      </Main>
    </>
  );
};

export default Product;
