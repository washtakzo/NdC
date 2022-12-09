import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import Main from "../components/Main";
import useHttp from "../hooks/useHttp";
import ProductItem from "../components/Shop/ProductItem";
import MediumButton from "../components/MediumButton";
import ImageUpload from "../components/ImageUpload";

const BASE_URL = "http://localhost:9000";
const inputClass = "block mx-auto border border-secondary rounded-lg my-4 p-2";

const admin = () => {
  const [products, setProducts] = React.useState([]);
  const { isLoading, error, sendRequest } = useHttp();
  const { register, handleSubmit } = useForm();
  const fileUploaderRef = useRef();

  const postProductHandler = () => {
    console.log("tet");
  };

  const deleteProductHandler = async (productId: string) => {
    try {
      await sendRequest(
        BASE_URL + "/api/products/" + productId,
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
        const data = await sendRequest(BASE_URL + "/api/products");
        console.log({ data });
        setProducts(data?.products);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <Main>
      <h1>{error && error.message}</h1>
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
            placeholder="price"
            {...register("price", { required: true })}
          />
          <ImageUpload />
          <MediumButton type="submit">SUBMIT</MediumButton>
        </form>
      </section>
      <section className="max-w-[1600px] mx-auto">
        <h1 className="text-center font-serif text-3xl md:text-5xl">
          Edit products
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {products &&
            products.map((p) => (
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

export default admin;
