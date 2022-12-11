import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import Main from "../components/Main";
import useHttp from "../hooks/useHttp";
import ProductItem from "../components/Shop/ProductItem";
import MediumButton from "../components/MediumButton";
import ImageUpload from "../components/ImageUpload";
import { Product } from "../helper/types";
import { PRODUCTS_URL } from "../helper/url";

//TODO:Handle error and loading state
//TODO:add a scroll menu for the categories
//TODO:add is popularProduct check box

const inputClass = "block mx-auto border border-secondary rounded-lg my-4 p-2";

const Admin = () => {
  const [products, setProducts] = React.useState([]);
  const { isLoading, error, sendRequest } = useHttp();
  const { register, handleSubmit } = useForm();
  const [images, setImages] = useState<any[] | undefined>();

  const postProductHandler = async (data: any) => {
    const { title, description, categorie, price, adminPassword } = data;

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
          <input
            className={inputClass}
            type="text"
            placeholder="categorie"
            {...register("categorie", { required: true })}
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
