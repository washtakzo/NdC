import React from "react";
import LargeButton from "../LargeButton";
import Paralax from "../Paralax";

const PresentationSection = () => {
  return (
    <section className="relative max-w-[2000px] mx-auto h-[80vh]">
      <div className="flex justify-end px-4">
        <img
          className="aspect-[9/16] object-cover min-h-[220px] h-[28vw]  max-h-[600px]"
          src="https://assets.website-files.com/601835c0c88eb62d2fa657a1/6019880417e04655dd17e50b_leisara-imZnpDXSNVA-unsplash.jpg"
          alt=""
        />
      </div>
      <Paralax
        className="absolute -z-10 top-[30%] md:top-[20%]"
        paralaxSpeed={40}
        scrollStartingPoint={1}
      >
        <img
          className="aspect-[12/16] object-cover min-h-[280px] max-h-[1600px] h-[54vw]"
          src="https://assets.website-files.com/60153bc9d8840978bfd8963b/60171b4ee5da29b83ff7bf6e_kevin-laminto-Wac13Oopo34-unsplash.jpg"
          alt=""
        />
      </Paralax>
      <h2 className="top-[24%] lg:top-[25%] xl:top-[5%] left-[25%] absolute text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl max-w-[900px] font-serif">
        Framy Is A Fashion Lifestyle Template
      </h2>
      <LargeButton
        href="/shop"
        className="absolute left-0 right-0 bottom-[10%]"
      >
        SHOP COLLECTIONS
      </LargeButton>
    </section>
  );
};

export default PresentationSection;
