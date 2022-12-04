import React from "react";
import ProductItem from "./ProductItem";
import { DUMMY_PRODUCTS } from "../../helper/dummy";

const ShopSection = () => {
  return (
    <section className="flex flex-col px-4 bg-primary md:flex-row md:justify-evenly md:py-8">
      <div className="my-4">
        <ul className=" md:sticky md:top-[10vh] lg:top-[36vh]">
          <li className="font-serif text-2xl my-4 cursor-pointer hover:text-third">
            All Products
          </li>
          <li className="font-serif text-2xl my-4 cursor-pointer hover:text-third">
            Fair Parts
          </li>
          <li className="font-serif text-2xl my-4 cursor-pointer hover:text-third">
            Plateau
          </li>
          <li className="font-serif text-2xl my-4 cursor-pointer hover:text-third">
            Boites
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-[60%]">
        {DUMMY_PRODUCTS.map(({ id, title, description, price, images }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            images={images}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopSection;
