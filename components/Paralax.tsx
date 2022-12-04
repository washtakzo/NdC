import React, { useEffect, useState } from "react";

type Props = {
  scrollStartingPoint: number;
  paralaxSpeed: number;
  className?: string;
  children: any;
};

const Paralax = ({
  scrollStartingPoint,
  paralaxSpeed,
  className,
  children,
}: Props) => {
  const [scrollY, setScrollY] = useState(0);

  const scrollListener = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      removeEventListener("scroll", scrollListener);
    };
  }, []);
  const isAtStartingPoint = scrollY >= scrollStartingPoint;

  const translationScore =
    -1 * paralaxSpeed * (scrollY - scrollStartingPoint + 10) * 0.001;

  const translationY =
    (isAtStartingPoint && `translateY(${translationScore}%)`) || "none";

  return (
    <div className={className} style={{ transform: translationY }}>
      {children}
    </div>
  );
};

export default Paralax;
