import { createSlice } from "@reduxjs/toolkit";
import { BasketItem, Basket, Product } from "../helper/types";

type BasketSlice = {
  basket: Basket;
  numberOfProducts: number;
  totalPrice: number;
  isShowBasket: boolean;
};

type BasketPayload = {
  product: Product;
  quantity: number;
};

type BasketAction = {
  payload: BasketPayload;
  type: string;
};

const updateOtherState = (state: BasketSlice) => {
  //update numberOfProducts
  state.numberOfProducts = state.basket.length;

  //recalculate totalPrice
  state.totalPrice = state.basket.reduce((total: number, item: BasketItem) => {
    return (total += item.product.price * item.quantity);
  }, 0);

  console.log(state.totalPrice);
};

const initialState: BasketSlice = {
  basket: [],
  numberOfProducts: 0,
  totalPrice: 0,
  isShowBasket: false,
};

const basketSlice = createSlice({
  initialState,
  name: "basketSlice",
  reducers: {
    addProduct(state: BasketSlice, action: BasketAction) {
      const productToAdd = action.payload.product;
      const quantityToAdd = action.payload.quantity;

      //search if product already exist
      const productIndex = state.basket.findIndex(
        (item: BasketItem) => item.product.id === productToAdd.id
      );

      const isProductAlreadyExist = productIndex > -1;

      //if exist -> increment quantity by payload quantity
      if (isProductAlreadyExist) {
        state.basket[productIndex].quantity += quantityToAdd;
      } else {
        //else add the product to the array with quantity payload
        state.basket.push({
          product: productToAdd,
          quantity: quantityToAdd,
        });
      }

      //open basket modal
      state.isShowBasket = true;

      updateOtherState(state);
    },
    removeProduct(state, action) {
      const productToRemove = action.payload.product;
      const quantityToRemove = action.payload.quantity;

      const productIndex = state.basket.findIndex(
        (item: BasketItem) => item.product.id === productToRemove.id
      );

      const isProductInBasket = productIndex > -1;
      console.log({ isProductInBasket });
      console.log(state.basket);

      if (isProductInBasket) {
        state.basket[productIndex].quantity -= quantityToRemove;
      }

      //Remove product with quantity < 1
      state.basket = state.basket.filter((item: BasketItem) => {
        return item.quantity > 0;
      });

      updateOtherState(state);
    },
    removeCompletProduct(state, action) {
      const productToRemove = action.payload.product;
      state.basket = state.basket.filter((item: BasketItem) => {
        return item.product.id !== productToRemove.id;
      });

      updateOtherState(state);
    },
    toggleShowBasket(state) {
      state.isShowBasket = !state.isShowBasket;
    },
  },
});

export const basketReducer = basketSlice.reducer;
export const basketActions = basketSlice.actions;
