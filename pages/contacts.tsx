import React from "react";
import Main from "../components/Main";
import IndexContent from "../Content/IndexContent";

const Contacts = () => {
  const instagramClickHandler = () => {
    window.open(IndexContent.INSTAGRAM_LINK, "_blank");
  };

  return (
    <Main className="bg-primary min-h-screen">
      <h1 className="font-serif text-4xl text-center py-4 md:text-6xl md:mt-8 md:py-16">
        Nous Contacter
      </h1>
      <div className="mx-auto p-4 sm:w-[50%] sm:px-0">
        <h2 className="font-serif text-xl py-4 md:text-3xl md:py-8">
          Par email
        </h2>
        <h3 className="py-2 md:text-lg">contact.nocesdecoton@gmail.com</h3>
        <h2 className="font-serif text-xl py-4 md:text-3xl md:py-8">
          Sur instagram
        </h2>
        <h3
          className="py-2 md:text-lg cursor-pointer"
          onClick={instagramClickHandler}
        >
          @Noces_de_coton
        </h3>
      </div>
    </Main>
  );
};

export default Contacts;
