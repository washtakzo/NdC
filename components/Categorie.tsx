import React from "react";
import Paralax from "./Paralax";

type Props = {
  scrollStartingPoint: number;
  paralaxSpeed: number;
  isStyleInverted: boolean;
  image: string;
  title: string;
  text: string;
  subtitle: string;
};
const Categorie = ({
  scrollStartingPoint,
  paralaxSpeed,
  isStyleInverted = false,
  image,
  title,
  text,
  subtitle,
}: Props) => {
  //Managing the display left-right of the image and text to have beautiful effect
  const sideTitleClass = isStyleInverted
    ? "categorie__title_right"
    : "categorie__title_left";
  const sideImageClass = isStyleInverted
    ? "categorie__image_right"
    : "categorie__image_left";
  const sideTextClass = isStyleInverted
    ? "categorie__description_container_left"
    : "categorie__description_container_right";

  return (
    <div className="categorie">
      <h2 className={`categorie__title ${sideTitleClass} font-serif text-6xl`}>
        {title}
      </h2>
      <div className={`categorie__description_container ${sideTextClass}`}>
        <h3 className="font-serif  text-2xl sm:text-3xl">{text}</h3>
        <p className="text-third text-xs sm:text-sm md:text-lg my-4">
          {subtitle}
        </p>
      </div>
      <Paralax
        className={`categorie__image ${sideImageClass}`}
        scrollStartingPoint={scrollStartingPoint}
        paralaxSpeed={paralaxSpeed}
      >
        <img src={image} alt="categorie shop illustration" />
      </Paralax>
    </div>
  );
};

export default Categorie;
