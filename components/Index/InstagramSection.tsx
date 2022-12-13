import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import IndexContent from "../../Content/IndexContent";

const InstagramSection = () => {
  const clickHandler = () => {
    window.open(IndexContent.INSTAGRAM_LINK, "_blank");
  };

  return (
    <section
      id="instagram"
      className="bg-primary border border-t-0 border-black cursor-pointer"
      onClick={clickHandler}
    >
      <h2 className="font-serif text-3xl px-4 py-12 md:text-4xl lg:py-16 lg:px-16 xl:text-5xl xl:py-24 xl:px-20">
        <span>
          <AiOutlineInstagram className="inline" />{" "}
        </span>
        {IndexContent.instagramTitle}
      </h2>
      <div className="grid grid-cols-2 mx-auto md:grid-cols-4">
        {IndexContent.instagramImages.map((image) => (
          <img
            key={image}
            className="aspect-square object-cover"
            src={image}
            alt="instagram image"
          />
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
