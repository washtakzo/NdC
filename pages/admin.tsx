import React, { useRef, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import CategorieList from "../components/Admin/CategorieList";
import Main from "../components/Main";
import useHttp from "../hooks/useHttp";
import ProductItem from "../components/Shop/ProductItem";
import MediumButton from "../components/MediumButton";
import ImageUpload from "../components/ImageUpload";
import { Product, Categories } from "../helper/types";
import { PRODUCTS_URL, PRODUCTS_IMAGE_URL } from "../helper/url";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import ErrorBox from "../components/ErrorBox";
import { formatGoogleDriveLink } from "../helper/functions";

//TODO:add is popularProduct check box
//TODO:add multiple price depending on quantity
//TODO:add multiple images for products
//TODO:add google drive transformation link before send to database
//TODO:add edit product
//TODO:add password input to delete a product

const inputClass = "block mx-auto border border-secondary rounded-lg my-4 p-2";

let hasRendered = false;

const Admin = () => {
  const defaultCategorie = Categories.FAIRE_PART;

  const [products, setProducts] = React.useState([]);
  const [categorie, setCategorie] = React.useState(defaultCategorie);
  const { isLoading, error, sendRequest } = useHttp();
  const { register, handleSubmit, control } = useForm();
  const {
    fields: fieldsImage,
    append: appendImage,
    remove: removeImage,
  } = useFieldArray({
    control,
    name: "images",
  });
  const {
    fields: fieldsPrice,
    append: appendPrice,
    remove: removePrice,
  } = useFieldArray({
    control,
    name: "price",
  });
  const [images, setImages] = useState<any[] | undefined>();

  const categorieChangeHandler = (categorie: Categories) => {
    setCategorie(categorie);
  };

  const postProductHandlerWithImageURL = async (data: any) => {
    const { title, description, prices, adminPassword, images } = data;
    console.log(data);

    let formatedImages = [];
    try {
      formatedImages = images.map((image: { url: string }) =>
        formatGoogleDriveLink(image.url)
      );
    } catch (error: any) {
      alert(error.message);
      return;
    }

    try {
      //TODO: change url depending on the image data
      await sendRequest(
        PRODUCTS_IMAGE_URL || "",
        "POST",
        JSON.stringify({
          title,
          description,
          categorie,
          prices,
          adminPassword,
          images: formatedImages,
        }),
        { "Content-Type": "application/json" }
      );
      window.location.reload();
    } catch (error: any) {
      console.warn(error.message);
    }
  };

  const deleteProductHandler = async (
    event: React.FormEvent<HTMLFormElement>,
    productId: string
  ) => {
    event.preventDefault();

    const formEl = event.target as HTMLFormElement;
    const passwordInputEl = formEl.querySelector("input");
    const password = (passwordInputEl as HTMLInputElement).value;

    try {
      await sendRequest(
        PRODUCTS_URL + productId,
        "DELETE",
        JSON.stringify({ adminPassword: password }),
        { "Content-Type": "application/json" }
      );
      window.location.reload();
    } catch (error) {}
  };

  //FIXME:Find a more elegent way to do it
  //Add a first url and price input
  React.useEffect(() => {
    if (!hasRendered) {
      appendImage({ url: "" });
      appendPrice({ quantity: 0, price: 0 });
      hasRendered = true;
    }
  }, []);

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
        <form
          onSubmit={handleSubmit(postProductHandlerWithImageURL)}
          className="mt-16"
        >
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

          {fieldsPrice.map((field, index) => (
            <form
              key={field.id}
              className="flex justify-center items-center space-x-2"
            >
              {index === fieldsPrice.length - 1 && index !== 0 && (
                <button
                  className="border-secondary border-2 h-8 w-8"
                  onClick={() => removePrice(index)}
                >
                  -
                </button>
              )}

              <input
                className={`${inputClass} mx-0`}
                type="number"
                placeholder="quantity"
                {...register(`prices.${index}.quantity` as const, {
                  required: true,
                })}
              />
              <input
                className={`${inputClass} mx-0`}
                type="number"
                step={0.01}
                placeholder="price"
                {...register(`prices.${index}.price` as const, {
                  required: true,
                })}
              />
              {index === fieldsPrice.length - 1 && (
                <button
                  className="border-secondary border-2 h-8 w-8"
                  onClick={() => appendPrice({ quantity: 0, price: 0 })}
                >
                  +
                </button>
              )}
            </form>
          ))}

          <input
            className={inputClass}
            type="text"
            placeholder="Admin password"
            {...register("adminPassword", { required: true })}
          />
          {fieldsImage.map((field, index) => (
            <div
              key={field.id}
              className="flex justify-center items-center space-x-4"
            >
              {index === fieldsImage.length - 1 && index !== 0 && (
                <button
                  onClick={() => removeImage(index)}
                  className="border-secondary border-2 h-8 w-8"
                >
                  -
                </button>
              )}
              <input
                className={`${inputClass} mx-0`}
                type="text"
                placeholder="image URL"
                {...register(`images.${index}.url` as const, {
                  required: true,
                })}
              />
              {index === fieldsImage.length - 1 && (
                <button
                  onClick={() => appendImage({ url: "" })}
                  className="border-secondary border-2 h-8 w-8"
                >
                  +
                </button>
              )}
            </div>
          ))}
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
                <form onSubmit={(event) => deleteProductHandler(event, p.id)}>
                  <input className={inputClass} placeholder="Mot de passe" />
                  <MediumButton type="submit">Supprimer</MediumButton>
                </form>
              </div>
            ))}
        </div>
      </section>
    </Main>
  );
};

export default Admin;
