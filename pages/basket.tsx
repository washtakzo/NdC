import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { basketActions } from "../store/basket-slice";
import { AiOutlineClose } from "react-icons/ai";
import { priceFormater } from "../helper/functions";
import { BasketItem, Product } from "../helper/types";
import MediumButton from "../components/MediumButton";
import ModalBackground from "../components/ModalBackground";
import { Portal } from "react-portal";
import useHttp from "../hooks/useHttp";
import { ORDERS_URL, BASE_URL } from "../helper/url";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorBox from "../components/ErrorBox";

//TODO:Mobile View : change checkout button position to be more visible ? floating ?
//TODO:Stripe: change success and cancel pages

const Basket = () => {
  const basket = useSelector((store: any) => store.basketSection.basket);
  const totalPrice: number = useSelector(
    (store: any) => store.basketSection.totalPrice
  );
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest } = useHttp();

  const removeProduct = (product: Product) =>
    dispatch(
      basketActions.removeProduct({
        product: product,
        quantity: 1,
      })
    );

  const addProduct = (product: Product) =>
    dispatch(
      basketActions.addProduct({
        product: product,
        quantity: 1,
      })
    );

  const removeCompletProduct = (product: Product) => {
    dispatch(
      basketActions.removeCompletProduct({
        product: product,
      })
    );
  };

  const crossClickHandler = () => {
    dispatch(basketActions.toggleShowBasket());
  };

  const checkoutHandler = async () => {
    //if basket empty, no need to send a request to the server
    //however, the server would handle this kind of error anyway
    if (basket.length === 0) return;

    const formatedOrders = basket.map((item: BasketItem) => ({
      id: item.product.id,
      quantity: item.quantity,
    }));
    try {
      const response = await sendRequest(
        ORDERS_URL || "",
        "POST",
        JSON.stringify({ items: formatedOrders }),
        { "Content-Type": "application/json" }
      );
      const stripeUrl = response.url;
      window.open(stripeUrl, "_self");
    } catch (error) {}
  };

  const noItemJSX = (
    <div className="flex justify-center my-16">
      <h2>No items found</h2>
    </div>
  );

  return (
    <Portal>
      {isLoading && <LoadingSpinner />}
      <ModalBackground />
      <div className="h-screen flex flex-col justify-between fixed top-0 right-0 bg-white z-50 md:w-[60%] lg:w-[50%] xl:w-[800px] overflow-y-auto">
        <div>
          <div className="flex justify-between items-center p-4 border-b border-secondary">
            <h2 className="font-serif text-3xl md:text-4xl">Your Cart</h2>
            <AiOutlineClose
              className="w-6 h-6 cursor-pointer"
              onClick={crossClickHandler}
            />
          </div>
          {basket.length === 0 && noItemJSX}
          {!isLoading && error && (
            <ErrorBox className="p-4" errorMessage={error?.message} />
          )}
          {basket.map((item: BasketItem) => {
            return (
              <div key={item.product.id}>
                <div className="flex flex-col sm:flex-row justify-around items-center py-4 borders border-black">
                  <div className="w-[25%]">
                    <img
                      src={BASE_URL + item.product.images[0]}
                      alt={item.product.title}
                      className="mx-auto sm:p-4"
                    />
                  </div>
                  <div
                    id="basket_product_info"
                    className="w-[50%] flex-grow-0 mx-auto my-4 flex flex-col justify-around h-[100%]"
                  >
                    <h3 className="font-serif py-2 text-2xl sm:text-3xl md:text-4xl text-center">
                      {item.product.title}
                    </h3>
                    <p className="my-2 text-sm sm:text-sm md:text-[1rem] text-center">
                      {priceFormater(item.product.price)}
                    </p>
                    <div className="text-center flex my-4 justify-center">
                      <button
                        className="sm:mx-4 text-lg sm:font-bold text-third"
                        onClick={() => removeProduct(item.product)}
                      >
                        -
                      </button>
                      <p className="px-4">{item.quantity}</p>
                      <button
                        className="sm:mx-4 text-lg sm:font-bold text-third"
                        onClick={() => addProduct(item.product)}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <p
                        className="text-third text-sm md:text-[1rem] text-center cursor-pointer"
                        onClick={() => removeCompletProduct(item.product)}
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[95%] h-[1px] bg-third25 mx-auto" />
              </div>
            );
          })}
        </div>
        <div className="px-8 py-4 border-t border-third25 mt-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <h4 className="font-bold">{totalPrice.toFixed(2) + " €"}</h4>
          </div>
          <MediumButton onClick={checkoutHandler}>
            CONTINUE TO CHECKOUT
          </MediumButton>
        </div>
      </div>
    </Portal>
  );
};

export default Basket;
