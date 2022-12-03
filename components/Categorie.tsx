import React from "react";
import Paralax from "./Paralax";

type Props = {
  scrollStartingPoint: number;
  paralaxSpeed: number;
};

const Categorie = ({ scrollStartingPoint, paralaxSpeed }: Props) => {
  return (
    <div className="categorie">
      <h2 className="categorie__title font-serif text-6xl ">OUTFITS</h2>
      <div className="categorie__description_container">
        <h3 className="font-serif  text-2xl sm:text-3xl">
          You can choose which collections you want to be featured on the main
          page. Its very simple, you can do it just in a matter of seconds!
        </h3>
        <p className="text-third text-xs sm:text-sm md:text-lg my-4">
          Shop Collection
        </p>
      </div>
      <Paralax
        className="categorie__image"
        scrollStartingPoint={scrollStartingPoint}
        paralaxSpeed={paralaxSpeed}
      >
        <img
          src="https://assets.website-files.com/601835c0c88eb62d2fa657a1/603950556cebb41723f0345f_kevin-laminto-saF4-j_NiHc-unsplash.jpg"
          alt=""
        />
      </Paralax>
    </div>
  );
};

export default Categorie;
