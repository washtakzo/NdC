import React from "react";
import LargeButton from "../LargeButton";
import Paralax from "../Paralax";
import IndexContent from "../../Content/IndexContent";

const PresentationSection = () => {
  return (
    <section className="relative max-w-[2000px] mx-auto h-[80vh]">
      <div className="flex justify-end px-4">
        <img
          className="aspect-[9/16] object-cover min-h-[220px] h-[28vw]  max-h-[600px]"
          src={IndexContent.illustrationImageRight}
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
          src={IndexContent.illustrationImageLeft}
          alt=""
        />
      </Paralax>
      <h2 className="top-[24%] lg:top-[25%] xl:top-[5%] left-[25%] absolute text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl max-w-[900px] w-[60%] font-serif">
        {IndexContent.titre}
      </h2>
      <LargeButton
        href="/shop"
        className="absolute left-0 right-0 bottom-[10%]"
      >
        BOUTIQUE
      </LargeButton>
    </section>
  );
};

export default PresentationSection;
