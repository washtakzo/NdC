import React from "react";
import IndexContent from "../../Content/IndexContent";

const PunchySection = () => {
  return (
    <section className="relative max-w-[2000px] mx-auto h-[80vh] lg:h-screen flex justify-center items-center ">
      <h2 className="font-serif px-4 text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center max-w-[800px] mx-auto  leading-[70px]  sm:leading-[80px] md:leading-[90px] lg:leading-[100px] xl:leading-[120px]">
        {IndexContent.introduction}
      </h2>
    </section>
  );
};

export default PunchySection;
