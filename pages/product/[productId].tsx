import { useRouter } from "next/router";
import React from "react";
import Accordion from "../../components/Accordion";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AdvantagesSection from "../../components/Index/AdvantagesSection";
import QuestionsSection from "../../components/Index/QuestionsSection";
import Main from "../../components/Main";
import MediumButton from "../../components/MediumButton";
import { DUMMY_PRODUCTS } from "../../helper/dummy";
import { priceFormater } from "../../helper/functions";

const Product = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const product = DUMMY_PRODUCTS.find((product) => product.id === productId);
  console.log({ product });

  return (
    <>
      <Main className="bg-primary">
        <Header />

        <section className="flex flex-col md:flex-row px-4 py-8  justify-evenly lg:py-16">
          <div
            className=" md:w-[50%] max-w-[700px] 
          "
          >
            <div className=" md:sticky md:top-[20%]">
              <h1 className="font-serif text-5xl my-4 leading-[60px] lg:text-7xl">
                {product?.title}
              </h1>
              <p className="text-lg">{priceFormater(product?.price)}</p>
              <input
                className="w-full block mx-auto border-b border-black py-2 lg:my-8 bg-transparent outline-none"
                type="number"
                min={50}
                step={10}
                defaultValue={50}
              />
              <MediumButton className="my-8 lg:my-16  bg-third text-white text-sm w-full h-16 mx-auto block tracking-wider">
                ADD TO CART
              </MediumButton>
              <p>{product?.description}</p>
              <div className="my-8 lg:my-16">
                {Array(3)
                  .fill(0)
                  .map((_, i) => {
                    return <Accordion key={i} />;
                  })}
              </div>
            </div>
          </div>
          <div className="md:w-[40%] max-w-[700px]">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <img
                  key={i}
                  className="mb-4 last:mb-0 md:mb-16 md:last:mb-0"
                  src="https://assets.website-files.com/601835c0c88eb62d2fa657a1/60199122d5c8861512defdfc_liana-mikah-jbqX046ww8I-unsplash.jpg"
                  alt=""
                />
              ))}
          </div>
        </section>
        <AdvantagesSection />
        <QuestionsSection />
        <Footer />
        <Copyright />
      </Main>
    </>
  );
};

export default Product;
