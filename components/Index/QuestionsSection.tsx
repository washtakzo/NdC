import React from "react";
import QuestionAnswer from "../QuestionAnswer";

const QuestionsSection = () => {
  return (
    <section className="md:flex md:justify-around border-[1px] border-black md:border-t-0">
      <QuestionAnswer />
      <QuestionAnswer />
      <QuestionAnswer />
    </section>
  );
};

export default QuestionsSection;
