import React from "react";
import Categorie from "../Categorie";

const CategoriesSection = () => {
  return (
    <section>
      <Categorie
        paralaxSpeed={40}
        scrollStartingPoint={1000}
        isStyleInverted={true}
      />
      <Categorie
        paralaxSpeed={40}
        scrollStartingPoint={2100}
        isStyleInverted={false}
      />
      <Categorie
        paralaxSpeed={40}
        scrollStartingPoint={3800}
        isStyleInverted={true}
      />
    </section>
  );
};

export default CategoriesSection;
