import React from "react";

type Props = {
  className?: string;
  children: any;
};

const Main = ({ className, children }: Props) => {
  return <main className={`pt-40 ${className}`}>{children}</main>;
};

export default Main;
