import { useRouter } from "next/router";
import React from "react";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AdvantagesSection from "../../components/Index/AdvantagesSection";
import QuestionsSection from "../../components/Index/QuestionsSection";
import Main from "../../components/Main";
import ProductDetailSection from "../../components/Product/ProductDetailSection";
import { DUMMY_PRODUCTS } from "../../helper/dummy";
import { Product } from "../../helper/types";
import useHttp from "../../hooks/useHttp";

const PRODUCT_URL = "http://localhost:9000/api/products/";

const ProductPage = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const { isLoading, error, sendRequest } = useHttp();
  const [product, setProduct] = React.useState();

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await sendRequest(PRODUCT_URL + productId);
        setProduct(response.product);
      } catch (error) {}
    };
    fetchProduct();
  }, []);

  const NoProductFoundErrorJSX = (
    <div className="flex justify-center items-center h-[60vh]">
      <h2 className="font-serif text-4xl text-center">
        Could not find the product <br /> Server Problem please try again
      </h2>
    </div>
  );

  return (
    <>
      <Main className="bg-primary">
        {!product && NoProductFoundErrorJSX}
        {product && <ProductDetailSection product={product} />}
        <AdvantagesSection />
        <QuestionsSection />
        <Footer />
        <Copyright />
      </Main>
    </>
  );
};

export default ProductPage;
