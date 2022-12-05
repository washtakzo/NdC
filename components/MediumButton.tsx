import React from "react";

type Props = {
  className?: string;
  children: any;
};

const MediumButton = ({ className, children }: Props) => {
  return <button className={`${className}`}>{children}</button>;
};

export default MediumButton;
