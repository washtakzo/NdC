import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <footer className="flex flex-col  md:flex-row sm:py-8 lg:py-16 lg:justify-evenly max-w-[1600px] mx-auto">
        <h3 className="text-center font-serif text-3xl p-4 font-bold">
          Noces de coton
        </h3>
        <div className="grid sm:grid-cols-2  lg:grid-cols-4 sm:w-[80%] sm:py-4 sm:gap-16 max-w-[900px] mx-auto">
          {new Array(4).fill(0).map((_, index) => (
            <div key={index} className="sm:px-4 ">
              <h4 className="text-2xl font-serif text-center my-4 sm:text-3xl md:text-left md:inline sm:mx-auto">
                Pages
              </h4>
              <ul className="mx-auto my-4 lg:mt-12">
                <li className="text-center cursor-pointer mt-2 md:text-left">
                  Main Page
                </li>
                <li className="text-center cursor-pointer mt-2 md:text-left">
                  All Collections
                </li>
                <li className="text-center cursor-pointer mt-2 md:text-left">
                  FAQ
                </li>
                <li className="text-center cursor-pointer mt-2 md:text-left">
                  Contact Us
                </li>
              </ul>
              <div className="h-[1px] w-[90%] bg-secondary mx-auto sm:hidden" />
            </div>
          ))}
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
