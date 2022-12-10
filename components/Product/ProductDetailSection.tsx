import React from "react";
import { priceFormater } from "../../helper/functions";
import Accordion from "../Accordion";
import InputQuantity from "../InputQuantity";
import MediumButton from "../MediumButton";
import { useDispatch } from "react-redux";
import { basketActions } from "../../store/basket-slice";
import { Product } from "../../helper/types";

type Props = {
  product: Product;
};

// const BASE_URL = "http://localhost:9000/";
// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const ProductDetailSection = ({ product }: Props) => {
  const dispatch = useDispatch();

  const addProductHandler = () => {
    dispatch(basketActions.addProduct({ product: product, quantity: 1 }));
  };

  const removeProductHandler = () => {
    dispatch(basketActions.removeProduct({ product: product, quantity: 1 }));
  };

  return (
    <section className="flex flex-col md:flex-row px-4 py-8  justify-evenly lg:py-16">
      <div
        className=" md:w-[50%] max-w-[600px] 
  "
      >
        <div className=" md:sticky md:top-[20%]">
          <h1 className="font-serif text-5xl my-4 leading-[60px] lg:text-7xl">
            {product?.title}
          </h1>
          <p className="text-lg">{priceFormater(product?.price)}</p>
          <InputQuantity type="number" min={50} step={10} defaultValue={50} />
          <MediumButton onClick={addProductHandler}>ADD TO CART</MediumButton>
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
        {product?.images.map((imagePath) => (
          <img
            key={imagePath}
            className="mb-4 last:mb-0 md:mb-16 md:last:mb-0"
            src={process.env.NEXT_PUBLIC_BASE_URL + imagePath}
            alt="product image"
            onClick={removeProductHandler}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductDetailSection;
