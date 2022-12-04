import { useRouter } from "next/router";
import React from "react";
import { DUMMY_PRODUCTS } from "../../helper/dummy";

const Product = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const product = DUMMY_PRODUCTS.find((product) => product.id === productId);

  return <div>{product?.title}</div>;
};

export default Product;
