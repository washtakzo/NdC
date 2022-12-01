import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  console.log(scrollY);

  useEffect(() => {
    const scrollListener = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="bg-red-200 w-full">
      <div className="flex justify-between py-4 px-12">
        <div>
          <h1 className="font-semibold text-3xl mb-8">Noce de coton</h1>
          <ul className="inline-flex space-x-8">
            <li>Our Story</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <ul className="flex space-x-4">
          <li>search</li>
          <li>basket</li>
          <li>count</li>
        </ul>
      </div>
      <div className="h-[200vh] w-8"></div>
    </div>
  );
};

export default Header;
