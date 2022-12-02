import React from "react";

type Props = {
  scrollY: number;
  scrollStartingPoint: number;
  paralaxSpeed: number;
  className?: string;
  children: any;
};

const Paralax = ({
  scrollY,
  scrollStartingPoint,
  paralaxSpeed,
  className,
  children,
}: Props) => {
  const isAtStartingPoint = scrollY >= scrollStartingPoint;

  const translationScore =
    -1 * paralaxSpeed * (scrollY - scrollStartingPoint + 10) * 0.001;

  const translationY =
    (isAtStartingPoint && `translateY(${translationScore}%)`) || "";

  return (
    <div className={className} style={{ transform: translationY }}>
      {children}
    </div>
  );
};

export default Paralax;
