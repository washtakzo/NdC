import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { basketActions } from "../store/basket-slice";
import { AiOutlineClose } from "react-icons/ai";
import { priceFormater } from "../helper/functions";
import { BasketItem, Product } from "../helper/types";
import MediumButton from "../components/MediumButton";
import ModalBackground from "../components/ModalBackground";
import { Portal } from "react-portal";

const Basket = () => {
  const basket = useSelector((state: any) => state.basketSection.basket);
  const totalPrice = useSelector(
    (state: any) => state.basketSection.totalPrice
  );
  const dispatch = useDispatch();

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

  const noItemJSX = (
    <div className="flex justify-center my-16">
      <h2>No items found</h2>
    </div>
  );

  return (
    <Portal>
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
          {basket.map((item: BasketItem) => {
            return (
              <div key={item.product.id}>
                <div className="flex justify-around items-center py-4 borders border-black">
                  <div className="w-[25%]">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="mx-auto sm:p-4"
                    />
                  </div>
                  <div className="w-[50%]">
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl">
                      {item.product.title}
                    </h3>
                    <p className="my-2 text-xs sm:text-sm md:text-[1rem]">
                      {priceFormater(item.product.price)}
                    </p>
                    <div className="">
                      <button
                        className="text-third text-sm md:text-[1rem]"
                        onClick={() => removeCompletProduct(item.product)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-center flex flex-col sm:flex-row">
                    <button
                      className="sm:mx-4 text-lg font-bold text-third"
                      onClick={() => removeProduct(item.product)}
                    >
                      -
                    </button>
                    <p className="px-4">{item.quantity}</p>
                    <button
                      className="sm:mx-4 text-lg font-bold text-third"
                      onClick={() => addProduct(item.product)}
                    >
                      +
                    </button>
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
            <h4 className="font-bold">{totalPrice + " €"}</h4>
          </div>
          <MediumButton className="">CONTINUE TO CHECKOUT</MediumButton>
        </div>
      </div>
    </Portal>
  );
};

export default Basket;
