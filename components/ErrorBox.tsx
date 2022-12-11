import React from "react";

type Props = {
  errorMessage?: String;
  className?: String;
};

const ErrorBox = ({ errorMessage = "An error occured", className }: Props) => {
  return (
    <div
      className={`flex justify-center items-center text-red-400 font-bold w-[50%] text-center ${className}`}
    >
      {errorMessage}
    </div>
  );
};

export default ErrorBox;
