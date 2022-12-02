import React from "react";

type Props = {
  image: string;
  title: string;
  price: number;
};

const PopularProduct = ({ image, title, price }: Props) => {
  return (
    <div className=" flex justify-center items-center mx-auto">
      <div className="my-8 mx-auto">
        <img className="w-[64vw] min-w-[340px]" src={image} alt="product" />
        <h3 className="text-black mt-4 text-left">{title}</h3>
        <p className="mt-2 text-sm text-left">{`$ ${price} USD`}</p>
      </div>
    </div>
  );
};

export default PopularProduct;
