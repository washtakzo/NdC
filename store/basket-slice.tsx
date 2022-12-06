import { createSlice } from "@reduxjs/toolkit";
import { BasketItem, Basket, Product } from "../helper/types";

type BasketSlice = {
  basket: Basket;
  numberOfProducts: number;
};

type BasketPayload = {
  product: Product;
  quantity: number;
};

type BasketAction = {
  payload: BasketPayload;
  type: string;
};

const initialState: BasketSlice = {
  basket: [],
  numberOfProducts: 0,
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

      //determine numberOfProducts
      state.numberOfProducts = state.basket.length;
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

      //update numberOfProducts
      state.numberOfProducts = state.basket.length;
    },
    removeCompletProduct(state, action) {
      const productToRemove = action.payload.product;
      state.basket = state.basket.filter((item: BasketItem) => {
        return item.product.id !== productToRemove.id;
      });

      //update numberOfProducts
      state.numberOfProducts = state.basket.length;
    },
  },
});

export const basketReducer = basketSlice.reducer;
export const basketActions = basketSlice.actions;
