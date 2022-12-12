import React from "react";

type Props = {
  className?: string;
  type?: any;
  min?: any;
  step?: any;
  defaultValue?: any;
};

const InputQuantity = React.forwardRef<Props, any>((props: Props, ref: any) => {
  const { className: _, ...propertiesExceptClassName } = props;

  return (
    <input
      className={`w-full block mx-auto border-b border-black py-2 lg:my-8 bg-transparent outline-none ${props.className}`}
      {...propertiesExceptClassName}
      ref={ref}
    />
  );
});

InputQuantity.displayName = "InputQuantity";

export default InputQuantity;
