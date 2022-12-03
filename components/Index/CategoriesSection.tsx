import React from "react";
import Categorie from "../Categorie";

const CategoriesSection = () => {
  return (
    <section>
      <Categorie paralaxSpeed={40} scrollStartingPoint={1000} />
      <Categorie paralaxSpeed={40} scrollStartingPoint={2100} />
      <Categorie paralaxSpeed={40} scrollStartingPoint={3200} />
    </section>
  );
};

export default CategoriesSection;
