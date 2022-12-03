import React from "react";

type Props = {
  image: string;
  title: string;
  price: number;
};

const PopularProduct = ({ image, title, price }: Props) => {
  return (
    <div className=" flex justify-center items-center mx-auto w-full px-8">
      <div className="my-8 mx-auto">
        <img
          className="w-[64vw] lg:w-[32px]s lg:min-w-0"
          src={image}
          alt="product"
        />
        <h3 className="text-black mt-4 text-left">{title}</h3>
        <p className="mt-2 text-sm text-left">{`$ ${price} USD`}</p>
      </div>
    </div>
  );
};

export default PopularProduct;
