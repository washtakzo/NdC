import React from "react";
import Categorie from "../Categorie";
import IndexContent from "../../Content/index";

const CategoriesSection = () => {
  return (
    <section>
      {IndexContent.categoriesIntroduction.map((item, index) => {
        const isEven = index % 2 === 0;
        const paralaxStartingPoint = 1000 + index * 1200;
        return (
          <Categorie
            key={item.title}
            paralaxSpeed={40}
            scrollStartingPoint={paralaxStartingPoint}
            isStyleInverted={isEven}
            image={item.image}
            title={item.title}
            text={item.text}
            subtitle={item.subtitle}
          />
        );
      })}
    </section>
  );
};

export default CategoriesSection;
