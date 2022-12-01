import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="sticky -z-10 overflow-hidden bg-primary w-screen h-screen">
      <div className="shape_01 absolute min-w-[800px] min-h-[800px] h-[50vw] aspect-square border border-1 border-third opacity-50" />
      <div className="shape_02 absolute min-w-[800px] min-h-[800px]  h-[50vw] aspect-square border border-1 border-third opacity-50 rounded-full" />
    </div>
  );
};

export default AnimatedBackground;
