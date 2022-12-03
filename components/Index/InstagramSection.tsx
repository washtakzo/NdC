import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

const InstagramSection = () => {
  return (
    <section
      id="instagram"
      className="bg-primary border border-t-0 border-black"
    >
      <h2 className="font-serif text-3xl px-4 py-12 md:text-4xl lg:py-16 lg:px-16 xl:text-5xl xl:py-24 xl:px-20">
        <span>
          <AiOutlineInstagram className="inline" />{" "}
        </span>
        Follow us on Instagram @Noce_de_Coton
      </h2>
      <div className="grid grid-cols-2 mx-auto md:grid-cols-4">
        <img
          className="aspect-square object-cover"
          src="https://assets.website-files.com/60153bc9d8840978bfd8963b/60171b503780a685ed08385d_kailey-sniffin-Ex0P6ldX384-unsplash.jpg"
          alt=""
        />
        <img
          className="aspect-square object-cover"
          src="https://assets.website-files.com/60153bc9d8840978bfd8963b/60171b4f5a9804b9ccbae23e_hanen-souhail-1KO9ytYcGj4-unsplash.jpg"
          alt=""
        />
        <img
          className="aspect-square object-cover"
          src="https://assets.website-files.com/60153bc9d8840978bfd8963b/60171b4cab020f116e82150c_roozbeh-badizadegan-p46Orndw0QM-unsplash.jpg"
          alt=""
        />
        <img
          className="aspect-square object-cover"
          src="https://assets.website-files.com/60153bc9d8840978bfd8963b/60171b503780a685ed08385d_kailey-sniffin-Ex0P6ldX384-unsplash.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default InstagramSection;
