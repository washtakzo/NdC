import React from "react";

type Props = {
  title: string;
  text: string;
};

const Advantage = ({ title, text }: Props) => {
  return (
    <div className="my-16 md:px-8 md:my-0 ">
      <h2 className="font-serif text-5xl my-16 md:my-0">{title}</h2>
      <p className="max-w-2xl md:py-8">{text}</p>
    </div>
  );
};

export default Advantage;
