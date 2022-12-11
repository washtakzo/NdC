import React from "react";
import Paralax from "./Paralax";

type Props = {
  scrollStartingPoint: number;
  paralaxSpeed: number;
  isEven: boolean;
};
//FIXME:image on large screen is on top text during paralax
const Categorie = ({ scrollStartingPoint, paralaxSpeed, isEven }: Props) => {
  //Managing the display left-right of the image and text to have beautiful effect
  const sideTitleClass = isEven
    ? "categorie__title_right"
    : "categorie__title_left";
  const sideImageClass = isEven
    ? "categorie__image_right"
    : "categorie__image_left";
  const sideTextClass = isEven
    ? "categorie__description_container_left"
    : "categorie__description_container_right";

  return (
    <div className="categorie">
      <h2 className={`categorie__title ${sideTitleClass} font-serif text-6xl`}>
        OUTFITS
      </h2>
      <div className={`categorie__description_container ${sideTextClass}`}>
        <h3 className="font-serif  text-2xl sm:text-3xl">
          You can choose which collections you want to be featured on the main
          page. Its very simple, you can do it just in a matter of seconds!
        </h3>
        <p className="text-third text-xs sm:text-sm md:text-lg my-4">
          Shop Collection
        </p>
      </div>
      <Paralax
        className={`categorie__image ${sideImageClass}`}
        scrollStartingPoint={scrollStartingPoint}
        paralaxSpeed={paralaxSpeed}
      >
        <img
          src="https://assets.website-files.com/601835c0c88eb62d2fa657a1/603950556cebb41723f0345f_kevin-laminto-saF4-j_NiHc-unsplash.jpg"
          alt="categorie shop illustration"
        />
      </Paralax>
    </div>
  );
};

export default Categorie;
