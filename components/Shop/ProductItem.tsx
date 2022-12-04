import React from "react";

type Props = {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
};

const ProductItem = ({ id, title, description, price, images }: Props) => {
  return (
    <div className="my-4 group cursor-pointer md:w-[80%] mx-auto">
      <img
        src={images[0]}
        alt={title}
        className="md:group-hover:scale-105 transition-all duration-300 ease-in-out"
      />
      <h2 className="mt-4 text-2xl font-serif group-hover:text-third">
        {title}
      </h2>
      <p className="text-sm">{`€ ${price.toFixed(2)} Euros`}</p>
    </div>
  );
};

export default ProductItem;
