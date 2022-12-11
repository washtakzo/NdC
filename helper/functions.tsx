export const priceFormater = (price?: number) => {
  return `€ ${price?.toFixed(2)} Euros`;
};

export const textToHeigth = (text: string) => {
  return Math.round((text.split("").length * 20) / 30);
};

export const capitalize = (text: string) => {
  if (text.length < 1) return;

  const textArray = text.split("");

  textArray[0] = textArray[0].toUpperCase();

  const textCapitalized = textArray.join("");
  return textCapitalized;
};

export const capitalizeAllWords = (text: string) => {
  const wordsArray = text.split(" ");

  const wordsArrayCapitalized = wordsArray.map((word) => capitalize(word));

  const textAllWordsCapitalized = wordsArrayCapitalized.join(" ");

  return textAllWordsCapitalized;
};
