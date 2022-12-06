import React from "react";
import { useDispatch } from "react-redux";
import { basketActions } from "../store/basket-slice";

const ModalBackground = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="bg-gray-800 opacity-80 h-screen w-screen fixed top-0 z-40"
      onClick={() => dispatch(basketActions.toggleShowBasket())}
    />
  );
};

export default ModalBackground;
