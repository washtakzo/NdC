import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { DUMMY_PRODUCTS } from "../../helper/dummy";

const Product = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const product = DUMMY_PRODUCTS.find((product) => product.id === productId);

  return (
    <>
      <Main>
        <Header />
        <section>
          <h1>{product?.title}</h1>
        </section>
      </Main>
    </>
  );
};

export default Product;
