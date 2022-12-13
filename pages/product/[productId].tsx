import { useRouter } from "next/router";
import React from "react";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import AdvantagesSection from "../../components/Index/AdvantagesSection";
import QuestionsSection from "../../components/Index/QuestionsSection";
import Main from "../../components/Main";
import ProductDetailSection from "../../components/Product/ProductDetailSection";
import useHttp from "../../hooks/useHttp";
import { PRODUCTS_URL } from "../../helper/url";
import ErrorBox from "../../components/ErrorBox";
import LoadingSpinner from "../../components/UI/LoadingSpinner";

const ProductPage = () => {
  const router = useRouter();
  const productId = router.query.productId || "";
  const { isLoading, error, sendRequest } = useHttp();
  const [product, setProduct] = React.useState();

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await sendRequest(PRODUCTS_URL! + productId);
        setProduct(response.product);
      } catch (error) {}
    };
    fetchProduct();
  }, [productId, sendRequest]);

  const NoProductFoundErrorJSX = (
    <div className="flex justify-center items-center h-[60vh]">
      <h2 className="font-serif text-4xl text-center">
        Produit introuvable <br /> Une erreur à pu se produire
      </h2>
    </div>
  );

  return (
    <>
      <Main className="bg-primary">
        {isLoading && <LoadingSpinner />}
        {!isLoading && !error && !product && NoProductFoundErrorJSX}
        {!isLoading && error && <ErrorBox errorMessage={error?.message} />}
        {!isLoading && product && !error && (
          <ProductDetailSection product={product} />
        )}
        <AdvantagesSection />
        <QuestionsSection />
        <Footer />
        <Copyright />
      </Main>
    </>
  );
};

export default ProductPage;
