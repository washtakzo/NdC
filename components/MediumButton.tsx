import React from "react";

type Props = {
  className?: string;
  onClick?: any;
  children: any;
};

const MediumButton = ({ className, onClick, children }: Props) => {
  return (
    <button
      className={`my-8 lg:my-16 px-8  bg-third text-white text-sm w-full h-16 mx-auto block tracking-wider ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MediumButton;
