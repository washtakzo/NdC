import React from "react";
import Categorie from "../Categorie";

const CategoriesSection = () => {
  return (
    <section>
      <Categorie paralaxSpeed={40} scrollStartingPoint={1000} isEven={true} />
      <Categorie paralaxSpeed={40} scrollStartingPoint={2100} isEven={false} />
      <Categorie paralaxSpeed={40} scrollStartingPoint={3200} isEven={true} />
    </section>
  );
};

export default CategoriesSection;
