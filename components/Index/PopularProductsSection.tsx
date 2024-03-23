import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import PopularProduct from "../PopularProduct";
import { BASE_URL, PRODUCTS_URL } from "../../helper/url";
import { Product } from "../../helper/types";
import { isDevMode } from "../../helper/const";
import { DUMMY_PRODUCTS } from "../../helper/dummy";

const PopularProductsSection = () => {
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  const { isLoading, error, sendRequest } = useHttp();

  //TODO:change the fetch to get popular products when API ok -
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await sendRequest(PRODUCTS_URL!);
        setPopularProducts(response.products);
      } catch (error) {}
    };
    if (isDevMode) {
      setPopularProducts(DUMMY_PRODUCTS.slice(0, 4));
    } else {
      fetchProduct();
    }
  }, []);

  return (
    <section
      className="min-h-[80vh]s flex flex-col justify-center p-4 text-center bg-secondary border-t-[1px] border-black
    "
    >
      <h2 className="font-serif text-5xl leading-[60px] my-8 lg:text-[5vw] xl:text-[76px]">
        Popular Products
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 max-w-[1800px] mx-auto lg:my-8 xl:my-16">
        {popularProducts.slice(0, 4).map((product: Product) => {
          return (
            <PopularProduct
              key={product.id}
              id={product.id}
              image={product.images[0]}
              title={product.title}
              price={product.prices[0].price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PopularProductsSection;
