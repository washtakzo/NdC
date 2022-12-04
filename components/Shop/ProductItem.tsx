import { useRouter } from "next/router";
import React from "react";

type Props = {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
};

const ProductItem = ({ id, title, description, price, images }: Props) => {
  const secondaryImage = images[1] || images[0];
  const router = useRouter();
  const clickHander = () => {
    router.push("/product/" + id);
  };
  return (
    <div
      className="my-4 lg:my-16 group cursor-pointer md:w-[80%] mx-auto md:hover:scale-105 transition-all duration-300 ease-in-out"
      onClick={clickHander}
    >
      <div className="relative">
        <img
          src={images[0]}
          alt={title}
          className="hover:opacity-0 transition-all duration-300 ease-in-out"
        />
        <img
          src={secondaryImage}
          alt={title}
          className=" absolute top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out "
        />
      </div>
      <h2 className="mt-4 text-2xl font-serif group-hover:text-third">
        {title}
      </h2>
      <p className="text-sm">{`€ ${price.toFixed(2)} Euros`}</p>
    </div>
  );
};

export default ProductItem;
