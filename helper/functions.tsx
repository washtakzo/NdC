export const priceFormater = (price?: number) => {
  if (price) {
    return `€ ${price.toFixed(2)} Euros`;
  }
};

export const textToHeigth = (text: string) => {
  return Math.round((text.split("").length * 20) / 30);
};
