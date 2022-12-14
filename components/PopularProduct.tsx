import React from "react";
import { useRouter } from "next/router";

type Props = {
  id: string;
  image: string;
  title: string;
  price: number;
};

const PRODUCT_PATH = "product/";

const PopularProduct = ({ id, image, title, price }: Props) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(PRODUCT_PATH + id);
  };

  return (
    <div
      className=" flex justify-center items-center mx-auto w-full px-8 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
      onClick={clickHandler}
    >
      <div className="my-8 mx-auto">
        <img src={image} alt="product" />
        <h3 className="text-black mt-4 text-left">{title}</h3>
        <p className="mt-2 text-sm text-left">{`${price} EUR`}</p>
      </div>
    </div>
  );
};

export default PopularProduct;
