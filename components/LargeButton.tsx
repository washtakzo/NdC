import React from "react";

type Props = {
  className?: string;
  children: any;
};

const LargeButton = ({ className, children }: Props) => {
  return (
    <button
      className={`w-[90%] h-16 mx-auto block border-[1px] border-solid border-[#00000080] text-third hover:bg-third25 hover:text-black transition-all duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default LargeButton;
