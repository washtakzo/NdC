import React from "react";

const Categorie = () => {
  return (
    <div className="px-2 sm:px-6 h-[90vh] flex flex-col justify-around">
      <h2 className="font-serif text-6xl sm:text-8xl">OUTFITS</h2>
      <div className="space-y-4 sm:h-[300px] flex flex-col justify-end">
        <h3 className="font-serif  text-2xl sm:text-3xl max-w-[600px]">
          You can choose which collections you want to be featured on the main
          page. Its very simple, you can do it just in a matter of seconds!
        </h3>
        <p className="text-third text-xs sm:text-sm md:text-lg">
          Shop Collection
        </p>
      </div>
      <div>
        <img
          className="max-h-[400px] sm:max-h-[400px]"
          src="https://assets.website-files.com/601835c0c88eb62d2fa657a1/603950556cebb41723f0345f_kevin-laminto-saF4-j_NiHc-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Categorie;
