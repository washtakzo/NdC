import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import useHttp from "../../hooks/useHttp";
import { PRODUCTS_URL, CATEGORIE_URL } from "../../helper/url";

const ShopSection = () => {
  const [products, setProducts] = useState([]);
  const [categorie, setCategorie] = useState("");
  const { isLoading, error, sendRequest } = useHttp();

  const clickCategorieHandler = (categorie: string) => {
    setCategorie(categorie);
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
      const response = await sendRequest(CATEGORIE_URL + categorie);
      setProducts(response.products);
    } catch (error: any) {}
  }, [sendRequest, categorie]);

  useEffect(() => {
    if (!categorie) {
      fetchAllProducts();
    } else {
      fetchCategorieProducts();
    }
  }, [categorie, fetchAllProducts, fetchCategorieProducts]);

  return (
    <section className="flex flex-col px-4 bg-primary md:flex-row md:justify-evenly md:py-8">
      <div className="my-4">
        <ul className=" md:sticky md:top-[10vh] lg:top-[36vh]">
          <li
            className="font-serif text-2xl my-4 cursor-pointer hover:text-third"
            onClick={() => clickCategorieHandler("")}
          >
            Tous les produits
          </li>
          <li
            className="font-serif text-2xl my-4 cursor-pointer hover:text-third"
            onClick={() => clickCategorieHandler("fairpart")}
          >
            Fair Parts
          </li>
          <li
            className="font-serif text-2xl my-4 cursor-pointer hover:text-third"
            onClick={() => clickCategorieHandler("plateau")}
          >
            Plateaux
          </li>
          <li
            className="font-serif text-2xl my-4 cursor-pointer hover:text-third"
            onClick={() => clickCategorieHandler("boite")}
          >
            Boites
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-[60%]">
        {products.map(({ id, title, description, price, images }) => (
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
