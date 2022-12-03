import React from "react";
import PopularProduct from "../PopularProduct";

const PopularProductsSection = () => {
  return (
    <section
      className="min-h-[80vh]s flex flex-col justify-center p-4 text-center bg-secondary border-t-[1px] border-black
    "
    >
      <h2 className="font-serif text-5xl leading-[60px] my-8 lg:text-[5vw] xl:text-[76px]">
        Popular Products
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 max-w-[1800px] mx-auto lg:my-8 xl:my-16">
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
          image="https://assets.website-files.com/601835c0c88eb62d2fa657a1/6019871701f5252b4111109b_jasmin-chew-7dboHgvZZY4-unsplash.jpg"
          title="Vegan Leather Blue Bag"
          price={200}
        />
        <PopularProduct
          image="https://assets.website-files.com/60153bc9d8840978bfd8963b/60171b50be8e9efe70426c7d_katerina-smirnova-5vykeYLZgb0-unsplash.jpg"
          title="Vegan Leather Blue Bag"
          price={200}
        />
      </div>
    </section>
  );
};

export default PopularProductsSection;
