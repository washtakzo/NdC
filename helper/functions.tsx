export const priceFormater = (price?: number) => {
  return `€ ${price?.toFixed(2)} Euros`;
};

export const textToHeigth = (text: string) => {
  return Math.round((text.split("").length * 20) / 30);
};

export const capitalize = (text: string) => {
  if (text.length < 1) return;

  const textArray = text?.split("");

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

export const formatGoogleDriveLink = (link: string) => {
  const linkArray = link.split("/");

  if (linkArray.length < 6)
    throw new Error(
      "le lien fourni n'est pas valid, il doit être de type : https://drive.google.com/file/d/1oNUy5lGPi_R/view?usp=sharing"
    );

  const id = linkArray[5];

  const BASE_LINK = "https://drive.google.com/uc?id=";

  return BASE_LINK + id;
};

export const getMatchingPrice = (
  quantity: number,
  prices: { quantity: number; price: number | string }[]
) => {
  //la méthode sort modifie l'array d'origine et peux donc causer des erreur
  //faire une copy au préalable permet d'éviter toute erreur
  const copyArrayForSort = [...prices];
  const sortedPrices = copyArrayForSort.sort(
    (a, b) => +a.quantity - +b.quantity
  );
  const revertSortedPrices = sortedPrices.reverse();

  const matchingPrice = revertSortedPrices.find(
    (el) => quantity >= el.quantity
  )?.price;
  return matchingPrice ? +matchingPrice : 999;
};
