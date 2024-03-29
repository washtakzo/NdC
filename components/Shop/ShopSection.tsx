import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import useHttp from "../../hooks/useHttp";
import { PRODUCTS_URL, CATEGORIE_URL } from "../../helper/url";
import { Categories, Product } from "../../helper/types";
import LoadingSpinner from "../UI/LoadingSpinner";
import ErrorBox from "../ErrorBox";
import { DUMMY_PRODUCTS } from "../../helper/dummy";
import { isDevMode } from "../../helper/const";

type Props = {
  defaultCategorie: Categories;
  onCategorieChange: (categorie: Categories) => void;
};

const ShopSection = ({ defaultCategorie, onCategorieChange }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categorie, setCategorie] = useState(defaultCategorie);
  const { isLoading, error, sendRequest } = useHttp();

  const clickCategorieHandler = (categorie: Categories) => {
    setCategorie(categorie);
    onCategorieChange(categorie);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fetchAllProducts = React.useCallback(async () => {
    try {
      const response = await sendRequest(PRODUCTS_URL || "");
      setProducts(response.products);
    } catch (error: any) {}
  }, [sendRequest]);

  const fetchCategorieProducts = React.useCallback(async () => {
    try {
      const response = await sendRequest(CATEGORIE_URL! + categorie);
      setProducts(response.products);
    } catch (error: any) {}
  }, [sendRequest, categorie]);

  const setDummyProducts = () => {
    setProducts(DUMMY_PRODUCTS);
  };

  useEffect(() => {
    if (isDevMode) {
      setDummyProducts();
    } else {
      if (categorie === Categories.ALL) {
        fetchAllProducts();
      } else {
        fetchCategorieProducts();
      }
    }
  }, [categorie, fetchAllProducts, fetchCategorieProducts]);

  return (
    <section className="flex flex-col px-4 bg-primary md:flex-row md:justify-evenly md:py-8">
      <div className="my-4">
        <ul className=" md:sticky md:top-[10vh] lg:top-[36vh]">
          <li
            className="font-serif text-2xl my-4 cursor-pointer hover:text-third"
            onClick={() => clickCategorieHandler(Categories.ALL)}
          >
            Tous les produits
          </li>
          <li
            className="font-serif text-2xl my-4 cursor-pointer hover:text-third"
            onClick={() => clickCategorieHandler(Categories.FAIRE_PART)}
          >
            Fair Parts
          </li>
          <li
            className="font-serif text-2xl my-4 cursor-pointer hover:text-third"
            onClick={() => clickCategorieHandler(Categories.PLATEAUX)}
          >
            Plateaux
          </li>
          <li
            className="font-serif text-2xl my-4 cursor-pointer hover:text-third"
            onClick={() => clickCategorieHandler(Categories.COFFRETS)}
          >
            Coffrets
          </li>
        </ul>
      </div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && error && (
        <ErrorBox
          errorMessage={error?.message}
          className="!w-[80%] sm:!w-[50%] !mx-auto md:!mx-0 py-16"
        />
      )}
      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-[60%]">
          {products.map(
            ({
              id,
              title,
              description,
              prices,
              images,
              categorie,
            }: Product) => (
              <ProductItem
                key={id}
                id={id}
                title={title}
                description={description}
                categorie={categorie}
                prices={prices}
                images={images}
              />
            )
          )}
        </div>
      )}
    </section>
  );
};

export default ShopSection;
