import React, { useRef, useState } from "react";
import { priceFormater, getMatchingPrice } from "../../helper/functions";
import Accordion from "../Accordion";
import InputQuantity from "../InputQuantity";
import MediumButton from "../MediumButton";
import { useDispatch } from "react-redux";
import { basketActions } from "../../store/basket-slice";
import { Product, Categories } from "../../helper/types";
import { BASE_URL } from "../../helper/url";

type Props = {
  product: Product;
};
const ProductDetailSection = ({ product }: Props) => {
  const minimumQuantity = product.categorie === Categories.FAIRE_PART ? 50 : 1;
  const stepQuantity = product.categorie === Categories.FAIRE_PART ? 10 : 1;

  const dispatch = useDispatch();
  const inputRef = useRef<any>(null);
  const [priceToDisplay, setPriceToDisplay] = useState<number>(
    getMatchingPrice(minimumQuantity, product.prices)
  );

  const addProductHandler = () => {
    dispatch(
      basketActions.addProduct({
        product: product,
        quantity: +inputRef.current!.value || minimumQuantity,
      })
    );
  };

  //display price according to the quantity
  const quantityChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = +e.target.value;

    const matchingPrice = getMatchingPrice(quantity, product.prices);
    setPriceToDisplay(matchingPrice);
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
          <p className="text-lg">{priceFormater(priceToDisplay)}</p>
          <InputQuantity
            type="number"
            onChange={quantityChangeHandler}
            ref={inputRef}
            min={minimumQuantity}
            step={stepQuantity}
            defaultValue={minimumQuantity}
          />
          <MediumButton onClick={addProductHandler}>
            AJOUTER AU PANIER
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
        {product?.images.map((imagePath) => (
          <img
            key={imagePath}
            className="mb-4 last:mb-0 md:mb-16 md:last:mb-0"
            src={imagePath}
            alt="product image"
          />
        ))}
      </div>
    </section>
  );
};

export default ProductDetailSection;
