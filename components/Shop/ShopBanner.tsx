import React from "react";

type Props = {
  title?: string;
};

const ShopBanner = ({ title }: Props) => {
  return (
    <div className="flex justify-center items-center h-[240px] w-full border-b border-black">
      <h2 className="font-serif text-[12vw] sm:text-[8vw] md:text-[7vw] text-center">
        {title}
      </h2>
    </div>
  );
};

export default ShopBanner;
