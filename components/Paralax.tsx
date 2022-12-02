import React from "react";

type Props = {
  scrollY: number;
  scrollStartingPoint: number;
  paralaxSpeed: number;
  children: any;
};

const Paralax = ({
  scrollY,
  scrollStartingPoint,
  paralaxSpeed,
  children,
}: Props) => {
  const isAtStartingPoint = scrollY >= scrollStartingPoint;
  const translationY = isAtStartingPoint
    ? `translateY(${
        -1 * paralaxSpeed * (scrollY - scrollStartingPoint + 10) * 0.001
      }%)`
    : "";
  return <div style={{ transform: translationY }}>{children}</div>;
};

export default Paralax;
