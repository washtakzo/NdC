import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import CategorieList from "../components/Admin/CategorieList";
import Main from "../components/Main";
import useHttp from "../hooks/useHttp";
import ProductItem from "../components/Shop/ProductItem";
import MediumButton from "../components/MediumButton";
import ImageUpload from "../components/ImageUpload";
import { Product, Categories } from "../helper/types";
import { PRODUCTS_URL } from "../helper/url";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import ErrorBox from "../components/ErrorBox";

//TODO:add is popularProduct check box

const inputClass = "block mx-auto border border-secondary rounded-lg my-4 p-2";

const Admin = () => {
  const defaultCategorie = Categories.FAIRE_PART;

  const [products, setProducts] = React.useState([]);
  const [categorie, setCategorie] = React.useState(defaultCategorie);
  const { isLoading, error, sendRequest } = useHttp();
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState<any[] | undefined>();

  const categorieChangeHandler = (categorie: Categories) => {
    setCategorie(categorie);
  };

  const postProductHandler = async (data: any) => {
    const { title, description, price, adminPassword } = data;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("categorie", categorie);
    formData.append("price", price);
    formData.append("adminPassword", adminPassword);
    if (images) {
      formData.append("image", images[0]);
    }

    try {
      await sendRequest(PRODUCTS_URL || "", "POST", formData);
    } catch (error: any) {
      console.warn(error.message);
    }

    window.location.reload();
  };

  const deleteProductHandler = async (productId: string) => {
    try {
      await sendRequest(
        PRODUCTS_URL + productId,
        "DELETE",
        JSON.stringify({ adminPassword: "Hamtargo1202" }),
        { "Content-Type": "application/json" }
      );
      window.location.reload();
    } catch (error) {}
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sendRequest(PRODUCTS_URL || "");
        console.log({ data });
        setProducts(data?.products);
      } catch (error) {}
    };
    fetchData();
  }, [sendRequest]);

  return (
    <Main>
      {isLoading && <LoadingSpinner />}

      {!isLoading && error && (
        <ErrorBox
          className="p-8 max-w-[800px] mx-auto"
          errorMessage={error?.message}
        />
      )}
      <h1 className="text-center p-8 text-red-400 font-semibold">
        {error && `error : ${error.message}`}
      </h1>
      <section className="w-[80%] max-w-[800px] mx-auto">
        <h1 className="text-center font-serif text-3xl md:text-5xl">
          Post new product
        </h1>
        <form onSubmit={handleSubmit(postProductHandler)} className="mt-16">
          <input
            className={inputClass}
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          <input
            className={inputClass}
            type="text"
            placeholder="description"
            {...register("description", { required: true })}
          />
          <CategorieList
            className="w-[30%] min-w-[200px] mx-auto border border-secondary rounded-lg px-4 text-third"
            defaultCategorie={defaultCategorie}
            onCategorieChange={categorieChangeHandler}
          />

          <input
            className={inputClass}
            type="number"
            step={0.01}
            placeholder="price"
            {...register("price", { required: true })}
          />
          <input
            className={inputClass}
            type="text"
            placeholder="Admin password"
            {...register("adminPassword", { required: true })}
          />
          <ImageUpload onLoadImage={setImages} />
          <MediumButton type="submit">SUBMIT</MediumButton>
        </form>
      </section>
      <section className="max-w-[1600px] mx-auto">
        <h1 className="text-center font-serif text-3xl md:text-5xl">
          Edit products
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {products &&
            products.map((p: Product) => (
              <div key={p.id} className="w-[80%] mx-auto">
                <ProductItem {...p} />
                <MediumButton onClick={() => deleteProductHandler(p.id)}>
                  DELETE
                </MediumButton>
              </div>
            ))}
        </div>
      </section>
    </Main>
  );
};

export default Admin;
