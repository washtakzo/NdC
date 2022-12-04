import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  className?: string;
  children: any;
};

const LargeButton = ({ href, className, children }: Props) => {
  return (
    <Link
      href={href}
      className={`w-[90%] h-16 mx-auto block border-[1px] border-solid border-[#00000080] hover:bg-third25 hover:text-black transition-all duration-300 ease-in-out ${className}`}
    >
      <button className="w-full h-full">{children}</button>
    </Link>
  );
};

export default LargeButton;
