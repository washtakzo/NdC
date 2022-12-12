import React from "react";

type Props = {
  question: string;
  answer: string;
};

const QuestionAnswer = ({ question, answer }: Props) => {
  return (
    <div className="px-2 py-8 bg-white border-b-[1px] last:border-b-0 border-black sm:py-16 sm:px-8 md:p-16 md:border-0 md:border-r-[1px] md:last:border-r-0 md:py-24 lg:py-40 w-[34%]">
      <div className="w-2 aspect-square bg-black rounded-full " />
      <h3 className="py-4 text-3xl font-serif">{question}</h3>
      <p className="">{answer}</p>
    </div>
  );
};

export default QuestionAnswer;
