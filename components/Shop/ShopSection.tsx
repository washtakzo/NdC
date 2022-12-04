import React from "react";
import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    title: "Sunriise Perfume",
    description: "Description of the product here ...",
    price: 200.76,
    images: [
      "https://assets.website-files.com/601835c0c88eb62d2fa657a1/60199122d5c8861512defdfc_liana-mikah-jbqX046ww8I-unsplash.jpg",
      "https://assets.website-files.com/601835c0c88eb62d2fa657a1/601990eb5a584185088fc2fe_kailey-sniffin-Ex0P6ldX384-unsplash.jpg",
    ],
  },
  {
    id: "2",
    title: "Light Flower Perfume",
    description: "Description of the product here ...",
    price: 189,
    images: [
      "https://assets.website-files.com/601835c0c88eb62d2fa657a1/601990eb5a584185088fc2fe_kailey-sniffin-Ex0P6ldX384-unsplash.jpg",
      "https://assets.website-files.com/601835c0c88eb62d2fa657a1/60199122d5c8861512defdfc_liana-mikah-jbqX046ww8I-unsplash.jpg",
    ],
  },
  {
    id: "3",
    title: "Sunrise Perfume Black",
    description: "Description of the product here ...",
    price: 219,
    images: [
      "https://assets.website-files.com/601835c0c88eb62d2fa657a1/6019880417e04655dd17e50b_leisara-imZnpDXSNVA-unsplash.jpg",
      "https://assets.website-files.com/601835c0c88eb62d2fa657a1/601990eb5a584185088fc2fe_kailey-sniffin-Ex0P6ldX384-unsplash.jpg",
    ],
  },
  {
    id: "4",
    title: "Light Flower Perfume White",
    description: "Description of the product here ...",
    price: 208,
    images: [
      "https://assets.website-files.com/601835c0c88eb62d2fa657a1/601990eb5a584185088fc2fe_kailey-sniffin-Ex0P6ldX384-unsplash.jpg",
    ],
  },
];

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
