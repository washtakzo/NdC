import React from "react";

const InputQuantity = (props: any) => {
  const { className: _, ...propertiesExceptClassName } = props;

  return (
    <input
      className={`w-full block mx-auto border-b border-black py-2 lg:my-8 bg-transparent outline-none ${props.className}`}
      {...propertiesExceptClassName}
    />
  );
};

export default InputQuantity;
