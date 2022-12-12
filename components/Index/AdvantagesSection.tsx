import React from "react";
import Advantage from "../Advantage";
import IndexContent from "../../Content/index";

const AdvantagesSection = () => {
  return (
    <section className="px-2 flex flex-col border border-black py-8 bg-primary md:flex-row md:p-0 md:h-[90vh] md:border border-b-0 md:border-black">
      <div className="md:flex justify-center items-center md:w-[50%] md:border-r-[1px] md:border-black md:p-16 md:relative ">
        <img
          className="z-[1] md:max-h-[60%]"
          src="https://assets.website-files.com/60153bc9d8840978bfd8963b/60171b4ffd23362dd81bcc71_jasmin-chew-bv-X6AoPxXU-unsplash.jpg"
          alt="illustration"
        />
        <div className="hidden md:block w-[80%] max-w-[400px] aspect-square absolute -left-[20%] top-[40%] rounded-full border border-black lg:top-[10%] lg:max-w-[70vh]" />
      </div>
      <div className="md:border border-blacks md:w-[50%] flex flex-col justify-around">
        {IndexContent.advantages.map((advantage) => (
          <Advantage
            key={advantage.title}
            title={advantage.title}
            text={advantage.text}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
