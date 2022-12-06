export type Product = {
  id: string;
  title: string;
  description: string;
  categorie: string;
  price: number;
  images: string[];
};

export type BasketItem = {
  product: Product;
  quantity: number;
};

export type Basket = BasketItem[];

export type BasketSlice = {
  basket: Basket;
};

export type BasketPayload = {
  product: Product;
  quantity: number;
};

export type BasketAction = {
  payload: BasketPayload;
  type: string;
};

export type BasketState = {
  basket: Basket;
};
